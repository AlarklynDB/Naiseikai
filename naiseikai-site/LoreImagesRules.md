# LoreImageRules.md
> Last updated: June 26, 2026

Rules for all art images on naiseikaiuniverse.com. Applies to character profiles, worldbuilding pages, locales, and any page that receives an imgbb link.

---

## Core Rule

**Whenever an imgbb link (i.ibb.co) is provided for art, always replace the placeholder div with a clickable lightbox image.**

Never use a plain `<img>` tag alone. Every art image must use the pattern below.

---

## React Component Pattern

Each image gets a **self-contained helper component** defined above the main `export default`. This avoids hook rules issues (no `useState` inside JSX).

### Full copy-paste pattern

```tsx
import { useState } from 'react'
import { Link } from 'react-router-dom' // keep existing imports

// --- Art helper component (one per image, defined above main export) ---
function MyPageArt() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Thumbnail — clickable */}
      <div
        className="w-full rounded-xl overflow-hidden border border-[#2e2b26] cursor-zoom-in group relative"
        onClick={() => setOpen(true)}
      >
        <img
          src="https://i.ibb.co/XXXX/Image-Name.png"
          alt="Descriptive alt text"
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono text-xs text-white tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded-full">
            Click to expand
          </span>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {open && (
        <div
          style={{ zIndex: 9999 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center pt-24 pb-12 px-10"
          onClick={() => setOpen(false)}
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute top-16 right-4 text-white/80 hover:text-white transition-colors bg-black/60 rounded-full w-8 h-8 flex items-center justify-center text-base leading-none border border-white/20"
          >
            ✕
          </button>
          <img
            src="https://i.ibb.co/XXXX/Image-Name.png"
            alt="Descriptive alt text — fullscreen"
            className="rounded-lg shadow-2xl object-contain"
            style={{ maxWidth: '95vw', maxHeight: '95vh' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

// --- Main page component ---
export default function MyPage() {
  return (
    <div className="page-container">
      {/* Place art component wherever it belongs in the page */}
      <MyPageArt />
      {/* ... rest of page ... */}
    </div>
  )
}
```

### If a page has multiple images

Define a separate helper component for each image (e.g. `MyPageMainArt`, `MyPageInfernalArt`) and render them individually. Do NOT share state between them.

---

## Overlay Rules

| Property | Value | Reason |
|---|---|---|
| `zIndex` | `style={{ zIndex: 9999 }}` inline | Tailwind `z-[9999]` can be purged; inline always wins |
| Overlay layout | `flex items-center justify-center` | Centers the image in the viewport — NOT `items-start` |
| ✕ button position | `absolute top-16 right-4` | Clears the navbar height, stays within overlay stacking context |
| ✕ button style | `rounded-full w-8 h-8 bg-black/60 border border-white/20` | Pill-style close button matching site aesthetic |
| Padding | `pt-24 pb-12 px-10` | `pt-24` clears the navbar; rest gives breathing room |
| Backdrop | `bg-black/90 backdrop-blur-sm` | Dark enough to read art clearly |
| Image sizing | `style={{ maxWidth: '95vw', maxHeight: '95vh' }}` inline + `object-contain` | Fills screen without overflow or distortion |
| Backdrop click | `onClick={() => setOpen(false)}` on the overlay div | Clicking outside the image closes it |
| Image click | `onClick={(e) => e.stopPropagation()}` on the `<img>` | Clicking the image itself does NOT close it |
| Scroll lock | Handled by `lightbox-controls.js` | No need to add manually |

---

## Global `lightbox-controls.js`

Loaded once in `BaseLayout.astro` via `<script src="/lightbox-controls.js" is:inline>`. Automatically applies to **every lightbox on every page** sitewide via MutationObserver watching for `style.zIndex === '9999'`.

### What it provides (no per-page code needed)

| Feature | Desktop | Mobile |
|---|---|---|
| Close | ESC key | ✕ button tap |
| Zoom | Scroll wheel (1x–6x) | Pinch (2 fingers, 1x–6x) |
| Pan | Left-click drag (when zoomed) | Single-finger drag (when zoomed) |
| Pan (alt) | Middle mouse hold + drag | — |
| Page zoom lock | — | `touch-action: none` on overlay + `<html>` |

### How it detects the lightbox

Watches for any DOM node with `style.zIndex === '9999'` being added/removed. Finds the `<img>` and `button[aria-label="Close"]` inside it. This is why `aria-label="Close"` on the ✕ button is **required**.

### On close

- Restores `currentImg.style.transition`, `transform`, `cursor`
- Restores `document.documentElement.style.touchAction`
- Resets zoom scale and pan origin to 1/0/0

---

## Thumbnail Rules

- Always `w-full h-auto object-cover` — never `aspect-video` for real art (distorts non-16:9 images)
- `rounded-xl border border-[#2e2b26]` to match site style
- `cursor-zoom-in` on the wrapper div
- `group-hover:scale-[1.02]` subtle hover scale on thumbnail
- Hover overlay: `bg-black/20` tint + `"Click to expand"` pill label
- Remove the old placeholder div entirely when real art is provided — never keep both

---

## Required Steps Checklist

When an imgbb link is provided:

1. Add `import { useState } from 'react'` at the top if not already there
2. Define a named helper component (e.g. `function HanakoReinaArt()`) **above** the main `export default`
3. Use the full pattern: thumbnail wrapper + `{open && ...}` fullscreen overlay
4. Overlay must use `style={{ zIndex: 9999 }}` inline — never Tailwind `z-[9999]`
5. Overlay uses `flex items-center justify-center` — the image is centered in the screen
6. ✕ button must have `aria-label="Close"` (required for `lightbox-controls.js`)
7. Image in overlay uses `style={{ maxWidth: '95vw', maxHeight: '95vh' }}` inline + `object-contain`
8. Clicking the backdrop closes; clicking the image does NOT (`e.stopPropagation()`)
9. Place `<MyArt />` in the JSX where the placeholder was
10. Delete the old placeholder div entirely

---

## Anti-Patterns (never do these)

- `useState` called inside JSX or an IIFE — **breaks hooks rules**, will crash
- `z-[9999]` via Tailwind class — can be purged by the build
- `aspect-video` on real art images — distorts non-16:9 art
- `items-start` on the overlay — image appears at the top instead of centered
- `aria-label` missing on ✕ button — `lightbox-controls.js` won't find the button
- Keeping both placeholder AND real image — remove placeholder entirely
- Shared `lightbox` state between multiple images — each art component must be self-contained

---

## `lightbox-controls.js` — Implementation Notes

These are the specific decisions made after debugging. Do not change these without understanding why they exist.

### Scroll zoom (desktop)
- `wheel` listener is on the **overlay**, not the `<img>` — so zoom fires wherever the cursor is in the fullscreen view
- React's `transform` transition is stripped on open and replaced with `transition: 'opacity 200ms ease'` only — leaving the `transform` transition caused zoom to feel laggy/delayed

### Mouse drag (desktop)
- `mousedown` listener is on the **overlay** (not the img) so middle-click works anywhere in the lightbox
- Left-click drag only activates when `scale > 1` — at 1x left-click does nothing (prevents accidental drags)
- Middle mouse (button 1) drag works at any zoom level

### Pinch zoom (mobile)
- All touch handlers (`touchstart`, `touchmove`, `touchend`) live on the **overlay**, not the `<img>`
- `{ passive: false }` is required on all three so `e.preventDefault()` actually works

### X button tappable on mobile
- `onTouchStart` checks `if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;` before calling `preventDefault`
- Without this early return, `preventDefault` swallows the tap and the button never fires

### Page zoom lock (mobile)
- `touch-action: none` is set on the **overlay element** AND on `document.documentElement` (`<html>`) while open
- Both are restored in `detachListeners()` when the lightbox closes

### Backdrop click
- The overlay has `onClick={() => setOpen(false)}` in React — this closes on backdrop tap
- `lightbox-controls.js` does NOT block this — it only blocks accidental re-fires via its own capture listener
- The `<img>` has `onClick={(e) => e.stopPropagation()}` to prevent the backdrop click from triggering when clicking the image

### MutationObserver signature
- Detects lightbox open: any added DOM node with `style.zIndex === '9999'`
- Detects lightbox close: same node being removed
- Finds ✕ button via `overlay.querySelector('button[aria-label="Close"]')` — **`aria-label="Close"` is mandatory**
