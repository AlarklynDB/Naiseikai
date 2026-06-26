/**
 * lightbox-controls.js — naiseikai (in-place magnifier)
 * Scroll to zoom, drag to pan — no fullscreen overlay, no navbar conflicts.
 * Applies to any element with [data-magnify].
 */
(function () {
  function initMagnify(container) {
    if (container._magnifyInit) return;
    container._magnifyInit = true;

    var img = container.querySelector('img');
    if (!img) return;

    var scale = 1;
    var originX = 0;
    var originY = 0;
    var isDragging = false;
    var dragStartX = 0;
    var dragStartY = 0;

    // ── apply transform ────────────────────────────────────────────────────────
    function apply() {
      img.style.transformOrigin = '0 0';
      img.style.transform = 'scale(' + scale + ') translate(' + (originX / scale) + 'px, ' + (originY / scale) + 'px)';
      img.style.transition = 'none';
      container.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
    }

    function reset() {
      scale = 1; originX = 0; originY = 0;
      img.style.transform = '';
      img.style.transformOrigin = '';
      container.style.cursor = 'zoom-in';
    }

    // ── scroll zoom ────────────────────────────────────────────────────────────
    container.addEventListener('wheel', function (e) {
      e.preventDefault();
      var delta = e.deltaY < 0 ? 0.2 : -0.2;
      scale = Math.min(Math.max(1, scale + delta), 5);
      if (scale === 1) { originX = 0; originY = 0; }
      apply();
    }, { passive: false });

    // ── mouse drag ─────────────────────────────────────────────────────────────
    container.addEventListener('mousedown', function (e) {
      if (scale <= 1) return;
      isDragging = true;
      dragStartX = e.clientX - originX;
      dragStartY = e.clientY - originY;
      container.style.cursor = 'grabbing';
      e.preventDefault();
    });

    window.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      originX = e.clientX - dragStartX;
      originY = e.clientY - dragStartY;
      apply();
    });

    window.addEventListener('mouseup', function () {
      if (!isDragging) return;
      isDragging = false;
      container.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
    });

    // ── double-click to reset ──────────────────────────────────────────────────
    container.addEventListener('dblclick', function () {
      reset();
    });

    // ── mobile: pinch + single-finger pan ─────────────────────────────────────
    var lastPinchDist = null;
    var lastTouchX = null;
    var lastTouchY = null;

    function touchDist(touches) {
      var dx = touches[0].clientX - touches[1].clientX;
      var dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }

    container.addEventListener('touchstart', function (e) {
      e.preventDefault();
      if (e.touches.length === 2) {
        lastPinchDist = touchDist(e.touches);
        lastTouchX = null; lastTouchY = null;
      } else if (e.touches.length === 1) {
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
        lastPinchDist = null;
      }
    }, { passive: false });

    container.addEventListener('touchmove', function (e) {
      e.preventDefault();
      if (e.touches.length === 2) {
        var dist = touchDist(e.touches);
        if (lastPinchDist !== null) {
          var delta = (dist - lastPinchDist) * 0.02;
          scale = Math.min(Math.max(1, scale + delta), 5);
          if (scale === 1) { originX = 0; originY = 0; }
          apply();
        }
        lastPinchDist = dist;
        lastTouchX = null; lastTouchY = null;
      } else if (e.touches.length === 1 && scale > 1) {
        var tx = e.touches[0].clientX;
        var ty = e.touches[0].clientY;
        if (lastTouchX !== null) {
          originX += tx - lastTouchX;
          originY += ty - lastTouchY;
          apply();
        }
        lastTouchX = tx; lastTouchY = ty;
      }
    }, { passive: false });

    container.addEventListener('touchend', function () {
      lastPinchDist = null; lastTouchX = null; lastTouchY = null;
    });
  }

  // ── init on DOM ready + watch for dynamic content ──────────────────────────
  function scanAndInit() {
    document.querySelectorAll('[data-magnify]').forEach(initMagnify);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scanAndInit);
  } else {
    scanAndInit();
  }

  // watch for React mounting new magnify elements
  var observer = new MutationObserver(scanAndInit);
  observer.observe(document.body, { childList: true, subtree: true });
})();
