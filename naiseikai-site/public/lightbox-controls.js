/**
 * lightbox-controls.js
 * Enhances the React Lightbox component with:
 *  - ESC key to close
 *  - Scroll-to-zoom on the image (desktop)
 *  - Left-click drag to pan while zoomed (desktop)
 *  - Pinch-to-zoom (mobile) — image only, never the page
 *  - Single-finger drag to pan while zoomed (mobile)
 * Loaded once globally via BaseLayout.astro.
 */

(function () {
  let scale = 1;
  let originX = 0;
  let originY = 0;
  let currentImg = null;
  let currentOverlay = null;
  let closeBtn = null;

  // ── Desktop: mouse drag ─────────────────────────────────────────────────────
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // ── Mobile: touch tracking ──────────────────────────────────────────────────
  let lastPinchDist = null;
  let lastTouchX = null;
  let lastTouchY = null;

  // ── Transform ───────────────────────────────────────────────────────────────
  function resetTransform() {
    scale = 1; originX = 0; originY = 0;
    if (currentImg) applyTransform();
  }

  function applyTransform() {
    // Strip React's transform transition so zoom snaps instantly
    currentImg.style.transition = 'opacity 200ms ease';
    currentImg.style.transform = `scale(${scale}) translate(${originX / scale}px, ${originY / scale}px)`;
    currentImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }

  function clampOrigin() {
    // Prevent panning past image edges
    if (scale <= 1) { originX = 0; originY = 0; }
  }

  // ── Desktop: scroll zoom ────────────────────────────────────────────────────
  function onWheel(e) {
    if (!currentImg) return;
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    scale = Math.min(Math.max(1, scale + delta), 6);
    clampOrigin();
    applyTransform();
  }

  // ── Desktop: mouse drag (left-click when zoomed, middle-click always) ────────
  function onMouseDown(e) {
    if (!currentImg) return;
    const isLeft   = e.button === 0 && scale > 1;
    const isMiddle = e.button === 1;
    if (!isLeft && !isMiddle) return;
    isDragging = true;
    dragStartX = e.clientX - originX;
    dragStartY = e.clientY - originY;
    currentImg.style.cursor = 'grabbing';
    e.preventDefault();
  }

  function onMouseMove(e) {
    if (!isDragging || !currentImg) return;
    originX = e.clientX - dragStartX;
    originY = e.clientY - dragStartY;
    applyTransform();
  }

  function onMouseUp() {
    if (!currentImg) return;
    isDragging = false;
    currentImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }

  // ── Mobile: touch (pinch zoom + single-finger pan) ─────────────────────────
  function getTouchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function onTouchStart(e) {
    // Let taps on the close button through — don't preventDefault for those
    if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.touches.length === 1) {
      lastTouchX = e.touches[0].clientX;
      lastTouchY = e.touches[0].clientY;
      lastPinchDist = null;
    } else if (e.touches.length === 2) {
      lastPinchDist = getTouchDist(e.touches);
      lastTouchX = null;
      lastTouchY = null;
    }
  }

  function onTouchMove(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!currentImg) return;

    if (e.touches.length === 2) {
      // Pinch zoom
      const dist = getTouchDist(e.touches);
      if (lastPinchDist !== null) {
        const delta = (dist - lastPinchDist) * 0.02;
        scale = Math.min(Math.max(1, scale + delta), 6);
        clampOrigin();
        applyTransform();
      }
      lastPinchDist = dist;
      lastTouchX = null;
      lastTouchY = null;
    } else if (e.touches.length === 1 && scale > 1) {
      // Single-finger pan (only when zoomed in)
      const tx = e.touches[0].clientX;
      const ty = e.touches[0].clientY;
      if (lastTouchX !== null) {
        originX += tx - lastTouchX;
        originY += ty - lastTouchY;
        applyTransform();
      }
      lastTouchX = tx;
      lastTouchY = ty;
    }
  }

  function onTouchEnd(e) {
    e.stopPropagation();
    lastPinchDist = null;
    if (e.touches.length === 0) {
      lastTouchX = null;
      lastTouchY = null;
    } else if (e.touches.length === 1) {
      // Finger lifted — reset single touch tracking
      lastTouchX = e.touches[0].clientX;
      lastTouchY = e.touches[0].clientY;
    }
  }

  // ── ESC to close ────────────────────────────────────────────────────────────
  function onKeyDown(e) {
    if (e.key === 'Escape' && closeBtn) closeBtn.click();
  }

  // ── Patch overlay: lock ALL touch input, block backdrop click ───────────────
  function patchOverlay(overlay) {
    if (overlay._lcPatched) return;
    overlay._lcPatched = true;

    // CSS: tell the browser we own all gestures on this element
    overlay.style.touchAction = 'none';
    // Lock viewport zoom at the root level while lightbox is open
    document.documentElement.style.touchAction = 'none';

    // Block backdrop click-to-close (React fires via bubbling)
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) e.stopImmediatePropagation();
    }, true);

    // All touch events on the overlay go through our handlers
    overlay.addEventListener('touchstart', onTouchStart, { passive: false });
    overlay.addEventListener('touchmove',  onTouchMove,  { passive: false });
    overlay.addEventListener('touchend',   onTouchEnd,   { passive: false });
  }

  // ── Attach / detach ─────────────────────────────────────────────────────────
  function attachListeners(overlay, img, btn) {
    currentImg     = img;
    currentOverlay = overlay;
    closeBtn       = btn;

    resetTransform();

    // Scroll zoom — listen on overlay so it fires wherever the cursor is
    overlay.addEventListener('wheel', onWheel, { passive: false });

    // Mouse drag — overlay so middle-click works anywhere in lightbox
    overlay.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);

    // ESC
    document.addEventListener('keydown', onKeyDown);

    patchOverlay(overlay);
  }

  function detachListeners() {
    if (currentOverlay) {
      currentOverlay.removeEventListener('wheel',      onWheel);
      currentOverlay.removeEventListener('touchstart', onTouchStart);
      currentOverlay.removeEventListener('touchmove',  onTouchMove);
      currentOverlay.removeEventListener('touchend',   onTouchEnd);
    }
    if (currentOverlay) {
      currentOverlay.removeEventListener('mousedown', onMouseDown);
    }
    if (currentImg) {
      // Restore React's original transition
      currentImg.style.transition = '';
      currentImg.style.transform  = '';
      currentImg.style.cursor     = '';
    }
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup',   onMouseUp);
    document.removeEventListener('keydown', onKeyDown);

    // Restore page touch behaviour
    document.documentElement.style.touchAction = '';

    scale = 1; originX = 0; originY = 0;
    currentImg = null; currentOverlay = null; closeBtn = null;
  }

  // ── MutationObserver ─────────────────────────────────────────────────────────
  const observer = new MutationObserver(function (mutations) {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== 1) continue;
        const overlay = (node.style && node.style.zIndex === '9999')
          ? node
          : node.querySelector && node.querySelector('[style*="z-index: 9999"]');
        if (!overlay) continue;
        const img = overlay.querySelector('img');
        const btn = overlay.querySelector('button[aria-label="Close"]');
        if (img && btn) attachListeners(overlay, img, btn);
      }

      for (const node of mutation.removedNodes) {
        if (node.nodeType !== 1) continue;
        const wasOverlay = node.style && node.style.zIndex === '9999';
        const hadOverlay = node.querySelector && node.querySelector('[style*="z-index: 9999"]');
        if (wasOverlay || hadOverlay) detachListeners();
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
