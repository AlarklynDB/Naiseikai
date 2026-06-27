# PWALinkCopy — Long-Press Page Link (PWA Mobile Only)

**File:** `naiseikai-site/public/pwa-hold-link.js`  
**Loaded in:** `naiseikai-site/src/layouts/BaseLayout.astro`  
**Added:** June 27, 2026

---

## What It Does

On the installed PWA (mobile), holding your finger anywhere on the screen for **600ms** opens a bottom sheet showing the current live page URL with a one-tap copy button.

Does **nothing** on desktop. Does **nothing** in a regular mobile browser. Only fires inside the standalone PWA.

---

## Behavior

| Action | Result |
|---|---|
| Hold finger 600ms (no scroll/drag) | Haptic buzz → bottom sheet slides up |
| Tap "Copy Link" | URL copied → button turns green → auto-dismisses after 1.2s |
| Tap outside the sheet | Sheet dismisses |
| Scroll or drag during hold | Hold cancelled, nothing happens |
| Lightbox is open | Hold is ignored entirely |
| Multi-touch | Hold is ignored |

---

## UX Details

- **Hold threshold:** 600ms
- **Movement cancel threshold:** 10px (so normal scrolling never triggers it)
- **Haptic:** `navigator.vibrate(30)` — 30ms pulse on trigger
- **Sheet animation:** slides up from bottom + fades in (`translateY` + `opacity`, 220ms ease)
- **Sheet position:** `left: 12px`, `right: 12px`, `bottom: 28px` — sits above the home bar
- **Clipboard:** uses `navigator.clipboard.writeText` with `document.execCommand('copy')` fallback for older browsers
- **URL:** always reads `window.location.href` at the moment of trigger, so it's always the live current page

---

## PWA Gate

```js
if (!window.matchMedia('(display-mode: standalone)').matches) return;
```

This line at the top of the IIFE kills the entire script on any non-standalone context. Zero impact to desktop or regular mobile browser.

---

## Full Source

```js
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

  function buildSheet() {
    overlay = document.createElement('div');
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99998',
      'background:transparent',
    ].join(';');
    overlay.addEventListener('touchstart', dismiss, { passive: true });

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

    var label = document.createElement('p');
    label.textContent = 'PAGE LINK';
    label.style.cssText = 'margin:0 0 6px 0; letter-spacing:0.12em; font-size:9px; color:rgba(0,229,255,0.6);';

    var urlText = document.createElement('p');
    urlText.style.cssText = [
      'margin:0 0 12px 0',
      'word-break:break-all',
      'color:rgba(255,255,255,0.85)',
      'font-size:12px',
      'line-height:1.5',
    ].join(';');

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

    sheet.addEventListener('touchstart', function (e) {
      e.stopPropagation();
    }, { passive: true });
  }

  function show() {
    if (!sheet) buildSheet();
    sheet._copyBtn.textContent = 'Copy Link';
    sheet._copyBtn.style.color = '#7ef5ff';
    sheet._copyBtn.style.borderColor = 'rgba(0,229,255,0.35)';
    sheet._copyBtn.style.background = 'rgba(0,229,255,0.08)';
    sheet._urlText.textContent = window.location.href;
    document.body.appendChild(overlay);
    document.body.appendChild(sheet);
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

  document.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) return;
    if (document.querySelector('[style*="z-index: 9999"]')) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    holdTimer = setTimeout(function () {
      holdTimer = null;
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
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  }, { passive: true });

  document.addEventListener('touchcancel', function () {
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  }, { passive: true });

})();
```

---

## Tweak Reference

| Variable | Default | What it changes |
|---|---|---|
| `HOLD_MS` | `600` | How long to hold before triggering (ms) |
| `MOVE_THRESHOLD` | `10` | Pixel movement allowed before cancelling hold |
| `vibrate(30)` | `30` | Haptic duration in ms (0 to disable) |
| `setTimeout(dismiss, 1200)` | `1200` | How long "Copied!" shows before auto-close |
| `bottom:28px` | `28px` | Sheet distance from bottom of screen |
