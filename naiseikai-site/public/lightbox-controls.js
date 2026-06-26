(function () {
  'use strict';

  var currentOverlay = null;
  var currentImg = null;
  var closeBtn = null;

  // zoom / pan state
  var scale = 1;
  var originX = 0;
  var originY = 0;

  // drag state (mouse)
  var isDragging = false;
  var dragStartX = 0;
  var dragStartY = 0;
  var dragOriginX = 0;
  var dragOriginY = 0;

  // pinch state (touch)
  var lastPinchDist = null;
  var lastTouchX = 0;
  var lastTouchY = 0;

  // ─── Helpers ───────────────────────────────────────────────────────────────

  function applyTransform() {
    if (!currentImg) return;
    currentImg.style.transform = 'scale(' + scale + ') translate(' + originX + 'px, ' + originY + 'px)';
  }

  function resetTransform() {
    scale = 1;
    originX = 0;
    originY = 0;
    if (currentImg) {
      currentImg.style.transform = '';
      currentImg.style.cursor = '';
      currentImg.style.transition = '';
    }
  }

  function clampPan() {
    // allow panning only when zoomed in
    if (scale <= 1) { originX = 0; originY = 0; }
  }

  // ─── Close ─────────────────────────────────────────────────────────────────

  function closeLightbox() {
    if (!currentOverlay) return;
    detachListeners();
    resetTransform();
    document.documentElement.style.touchAction = '';
    currentOverlay = null;
    currentImg = null;
    closeBtn = null;
  }

  // ─── Keyboard ──────────────────────────────────────────────────────────────

  function onKeyDown(e) {
    if (e.key === 'Escape') closeLightbox();
  }

  // ─── Scroll wheel zoom (desktop) ───────────────────────────────────────────

  function onWheel(e) {
    e.preventDefault();
    var delta = e.deltaY > 0 ? -0.15 : 0.15;
    scale = Math.min(6, Math.max(1, scale + delta));
    clampPan();
    applyTransform();
    currentImg.style.cursor = scale > 1 ? 'grab' : '';
  }

  // ─── Mouse drag (desktop) ──────────────────────────────────────────────────

  function onMouseDown(e) {
    // left-click drag only when zoomed; middle-click drag at any zoom
    if (e.button === 0 && scale <= 1) return;
    if (e.button === 0 || e.button === 1) {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      dragOriginX = originX;
      dragOriginY = originY;
      currentImg.style.cursor = 'grabbing';
      e.preventDefault();
    }
  }

  function onMouseMove(e) {
    if (!isDragging) return;
    originX = dragOriginX + (e.clientX - dragStartX) / scale;
    originY = dragOriginY + (e.clientY - dragStartY) / scale;
    applyTransform();
  }

  function onMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    currentImg.style.cursor = scale > 1 ? 'grab' : '';
  }

  // ─── Touch (mobile) ────────────────────────────────────────────────────────

  function pinchDist(touches) {
    var dx = touches[0].clientX - touches[1].clientX;
    var dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function onTouchStart(e) {
    // let the close button tap through
    if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
    e.preventDefault();
    if (e.touches.length === 2) {
      lastPinchDist = pinchDist(e.touches);
    } else if (e.touches.length === 1) {
      lastTouchX = e.touches[0].clientX;
      lastTouchY = e.touches[0].clientY;
    }
  }

  function onTouchMove(e) {
    e.preventDefault();
    if (e.touches.length === 2) {
      var dist = pinchDist(e.touches);
      if (lastPinchDist !== null) {
        var ratio = dist / lastPinchDist;
        scale = Math.min(6, Math.max(1, scale * ratio));
        clampPan();
        applyTransform();
      }
      lastPinchDist = dist;
    } else if (e.touches.length === 1 && scale > 1) {
      var dx = (e.touches[0].clientX - lastTouchX) / scale;
      var dy = (e.touches[0].clientY - lastTouchY) / scale;
      originX += dx;
      originY += dy;
      applyTransform();
      lastTouchX = e.touches[0].clientX;
      lastTouchY = e.touches[0].clientY;
    }
  }

  function onTouchEnd(e) {
    if (e.touches.length < 2) lastPinchDist = null;
  }

  // ─── Backdrop click blocked ─────────────────────────────────────────────────

  function onOverlayClick(e) {
    if (e.target === currentOverlay) e.stopImmediatePropagation();
  }

  // ─── Attach / detach ───────────────────────────────────────────────────────

  function attachListeners(overlay) {
    currentOverlay = overlay;
    currentImg = overlay.querySelector('img');
    closeBtn = overlay.querySelector('button[aria-label="Close"]');

    // strip transform transition so zoom feels instant
    if (currentImg) {
      currentImg.style.transition = 'opacity 200ms ease';
    }

    // lock page zoom on mobile
    document.documentElement.style.touchAction = 'none';

    document.addEventListener('keydown', onKeyDown);

    overlay.addEventListener('wheel', onWheel, { passive: false });

    overlay.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    overlay.addEventListener('touchstart', onTouchStart, { passive: false });
    overlay.addEventListener('touchmove', onTouchMove, { passive: false });
    overlay.addEventListener('touchend', onTouchEnd, { passive: false });

    // block backdrop click from bubbling to React's onClick
    overlay.addEventListener('click', onOverlayClick, true);
  }

  function detachListeners() {
    if (!currentOverlay) return;
    document.removeEventListener('keydown', onKeyDown);

    currentOverlay.removeEventListener('wheel', onWheel);
    currentOverlay.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    currentOverlay.removeEventListener('touchstart', onTouchStart);
    currentOverlay.removeEventListener('touchmove', onTouchMove);
    currentOverlay.removeEventListener('touchend', onTouchEnd);
    currentOverlay.removeEventListener('click', onOverlayClick, true);
  }

  // ─── MutationObserver ──────────────────────────────────────────────────────

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      // added nodes — look for the lightbox overlay
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        var overlay = null;
        if (node.style && node.style.zIndex === '9999') {
          overlay = node;
        } else {
          var child = node.querySelector && node.querySelector('[style*="z-index: 9999"]');
          if (child) overlay = child;
        }
        if (overlay) attachListeners(overlay);
      });

      // removed nodes — clean up
      mutation.removedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        if (
          (node.style && node.style.zIndex === '9999') ||
          (node.querySelector && node.querySelector('[style*="z-index: 9999"]'))
        ) {
          closeLightbox();
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
