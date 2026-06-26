/**
 * lightbox-controls.js — naiseikai (basic)
 * ESC to close + scroll lock only.
 * No zoom/pan/pinch — keeping it simple.
 */
(function () {
  var closeBtn = null;

  function onKeyDown(e) {
    if (e.key === 'Escape' && closeBtn) closeBtn.click();
  }

  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var added = mutations[i].addedNodes;
      for (var j = 0; j < added.length; j++) {
        var node = added[j];
        if (node.nodeType !== 1) continue;
        var overlay = (node.dataset && node.dataset.lightbox !== undefined)
          ? node
          : node.querySelector && node.querySelector('[data-lightbox]');
        if (!overlay) continue;

        closeBtn = overlay.querySelector('button[aria-label="Close"]');
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKeyDown);
      }

      var removed = mutations[i].removedNodes;
      for (var k = 0; k < removed.length; k++) {
        var rnode = removed[k];
        if (rnode.nodeType !== 1) continue;
        var wasLightbox = (rnode.dataset && rnode.dataset.lightbox !== undefined)
          || (rnode.querySelector && rnode.querySelector('[data-lightbox]'));
        if (!wasLightbox) continue;

        closeBtn = null;
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeyDown);
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
