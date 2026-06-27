(function () {
  'use strict';

  // Only runs inside the installed PWA (standalone mode)
  if (!window.matchMedia('(display-mode: standalone)').matches) return;

  var HOLD_MS = 600;
  var MOVE_THRESHOLD = 10;
  var holdTimer = null;
  var startX = 0;
  var startY = 0;
  var sheet = null;
  var overlay = null;

  // ─── Build the sheet DOM (once) ───────────────────────────────────────────

  function buildSheet() {
    // Overlay — taps outside dismiss the sheet
    overlay = document.createElement('div');
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99998',
      'background:transparent',
    ].join(';');
    overlay.addEventListener('touchstart', dismiss, { passive: true });

    // Sheet
    sheet = document.createElement('div');
    sheet.style.cssText = [
      'position:fixed', 'left:12px', 'right:12px', 'bottom:28px',
      'z-index:99999',
      'background:#1a1a2e',
      'border:1px solid rgba(255,255,255,0.12)',
      'border-radius:16px',
      'padding:16px',
      'box-shadow:0 8px 32px rgba(0,0,0,0.6)',
      'font-family:monospace',
      'font-size:11px',
      'color:rgba(255,255,255,0.5)',
      'opacity:0',
      'transform:translateY(12px)',
      'transition:opacity 220ms ease, transform 220ms ease',
    ].join(';');

    // Label
    var label = document.createElement('p');
    label.textContent = 'PAGE LINK';
    label.style.cssText = 'margin:0 0 6px 0; letter-spacing:0.12em; font-size:9px; color:rgba(0,229,255,0.6);';

    // URL text
    var urlText = document.createElement('p');
    urlText.style.cssText = [
      'margin:0 0 12px 0',
      'word-break:break-all',
      'color:rgba(255,255,255,0.85)',
      'font-size:12px',
      'line-height:1.5',
    ].join(';');

    // Copy button
    var copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy Link';
    copyBtn.style.cssText = [
      'width:100%',
      'padding:10px',
      'border-radius:10px',
      'border:1px solid rgba(0,229,255,0.35)',
      'background:rgba(0,229,255,0.08)',
      'color:#7ef5ff',
      'font-family:monospace',
      'font-size:12px',
      'letter-spacing:0.05em',
      'cursor:pointer',
      'transition:background 150ms ease',
    ].join(';');

    copyBtn.addEventListener('touchstart', function () {
      copyBtn.style.background = 'rgba(0,229,255,0.18)';
    }, { passive: true });

    copyBtn.addEventListener('click', function () {
      var url = urlText.textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          copyBtn.textContent = 'Copied!';
          copyBtn.style.color = '#a8ff8a';
          copyBtn.style.borderColor = 'rgba(168,255,138,0.35)';
          setTimeout(dismiss, 1200);
        });
      } else {
        // Fallback for older browsers
        var ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = 'Copied!';
        copyBtn.style.color = '#a8ff8a';
        setTimeout(dismiss, 1200);
      }
    });

    sheet._urlText = urlText;
    sheet._copyBtn = copyBtn;

    sheet.appendChild(label);
    sheet.appendChild(urlText);
    sheet.appendChild(copyBtn);

    // Prevent taps on the sheet itself from dismissing
    sheet.addEventListener('touchstart', function (e) {
      e.stopPropagation();
    }, { passive: true });
  }

  // ─── Show / dismiss ────────────────────────────────────────────────────────

  function show() {
    if (!sheet) buildSheet();

    // Reset button state
    sheet._copyBtn.textContent = 'Copy Link';
    sheet._copyBtn.style.color = '#7ef5ff';
    sheet._copyBtn.style.borderColor = 'rgba(0,229,255,0.35)';
    sheet._copyBtn.style.background = 'rgba(0,229,255,0.08)';

    // Set live URL
    sheet._urlText.textContent = window.location.href;

    document.body.appendChild(overlay);
    document.body.appendChild(sheet);

    // Trigger animation on next frame
    requestAnimationFrame(function () {
      sheet.style.opacity = '1';
      sheet.style.transform = 'translateY(0)';
    });
  }

  function dismiss() {
    if (!sheet || !sheet.parentNode) return;
    sheet.style.opacity = '0';
    sheet.style.transform = 'translateY(12px)';
    setTimeout(function () {
      if (sheet.parentNode) sheet.parentNode.removeChild(sheet);
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 220);
  }

  // ─── Touch listeners ───────────────────────────────────────────────────────

  document.addEventListener('touchstart', function (e) {
    // Ignore multi-touch
    if (e.touches.length !== 1) return;

    // Ignore if a lightbox is open
    if (document.querySelector('[style*="z-index: 9999"]')) return;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    holdTimer = setTimeout(function () {
      holdTimer = null;
      // Haptic feedback if available
      if (navigator.vibrate) navigator.vibrate(30);
      show();
    }, HOLD_MS);
  }, { passive: true });

  document.addEventListener('touchmove', function (e) {
    if (!holdTimer) return;
    var dx = Math.abs(e.touches[0].clientX - startX);
    var dy = Math.abs(e.touches[0].clientY - startY);
    if (dx > MOVE_THRESHOLD || dy > MOVE_THRESHOLD) {
      clearTimeout(holdTimer);
      holdTimer = null;
    }
  }, { passive: true });

  document.addEventListener('touchend', function () {
    if (holdTimer) {
      clearTimeout(holdTimer);
      holdTimer = null;
    }
  }, { passive: true });

  document.addEventListener('touchcancel', function () {
    if (holdTimer) {
      clearTimeout(holdTimer);
      holdTimer = null;
    }
  }, { passive: true });

})();
