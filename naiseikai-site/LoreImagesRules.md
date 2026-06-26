# LoreImagesRules.md
> Last updated: June 26, 2026

Rules for all art images on naiseikaiuniverse.com. Applies to character profiles, title pages, worldbuilding pages, and any page that receives an imgbb link.

Adjacent to `LoreImageRules.md` in the hibrythia repo — same system, same pattern.

---

## Core Rule

**Whenever an imgbb link (i.ibb.co) is provided for art, always replace the placeholder with a clickable lightbox image.**

Never use a plain `<img>` tag alone. Every art image must use the pattern below.

---

## React Component Pattern

Each image gets a **self-contained helper component** defined above the main `export default`. This avoids hook rules issues — never call `useState` inside JSX or an IIFE.

### Full copy-paste pattern

```tsx
import { useState } from 'react'

// --- Art helper component (one per image, defined above main export) ---
function MyCharacterArt() {
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
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-start justify-center pt-24 pb-12 px-10"
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
          />
        </div>
      )}
    </>
  )
}
```

### If a page has multiple images

Define a separate helper component for each (e.g. `HanakoReinaArt`, `HanakoReinaFormArt`) and render them individually. Do not share state between them.

---

## Overlay Rules

| Property | Value | Reason |
|---|---|---|
| `zIndex` | `style={{ zIndex: 9999 }}` inline | Tailwind `z-[9999]` can be purged; inline always wins |
| Flex alignment | `items-start` | Pushes image to top, `pt-24` clears the navbar. `items-center` ignores navbar and causes image to go behind it |
| ✕ button position | `absolute top-16 right-4` | Clears navbar height, stays within overlay stacking context |
| Padding | `pt-24 pb-12 px-10` | `pt-24` clears the navbar; rest gives breathing room |
| Backdrop | `bg-black/90 backdrop-blur-sm` | Dark enough to see art clearly |
| Image sizing | `maxWidth: '95vw', maxHeight: '95vh', object-contain` | Fills screen without overflow |
| Backdrop `onClick` | **Do NOT add** | Blocked globally by `lightbox-controls.js` — adding it causes conflicts |
| `onClick` on fullscreen `<img>` | **Do NOT add** | Not needed; `lightbox-controls.js` handles everything |

---

## Global `lightbox-controls.js`

Located at `public/lightbox-controls.js`, loaded in `BaseLayout.astro`. Automatically applies to **every lightbox sitewide** via MutationObserver watching for `style.zIndex === '9999'`.

### What it provides (no per-page code needed)

| Feature | Desktop | Mobile |
|---|---|---|
| Close | ESC key | ✕ button tap |
| Zoom | Scroll wheel (1x–6x) | Pinch (2 fingers, 1x–6x) |
| Pan | Left-click drag (when zoomed) | Single-finger drag (when zoomed) |
| Pan (alt) | Middle mouse hold + drag | — |
| Page zoom lock | — | `touch-action: none` on overlay + `<html>` |
| Backdrop click | Blocked (does not close) | Blocked |

### Key implementation details

- `wheel` + `mousedown` listeners are on the **overlay**, not the `<img>` — fires anywhere in fullscreen
- All touch handlers (`touchstart`, `touchmove`, `touchend`) are on the **overlay** — if placed on the img, the overlay-level `stopPropagation` eats all touches before img can see them
- `touch-action: none` set on overlay AND `document.documentElement` — both are required to fully block browser viewport zoom on mobile
- Detects ✕ button via `button[aria-label="Close"]` — **`aria-label="Close"` on the button is mandatory**
- On close: restores `transition`, `transform`, `cursor` on the image, restores `touchAction` on `<html>`

---

## Required Steps Checklist

When an imgbb link is provided:

1. Add `import { useState } from 'react'` at the top if not already there
2. Define a named helper component (e.g. `function HanakoReinaArt()`) **above** the main `export default`
3. Use the full overlay pattern (thumbnail + `{open && ...}` fullscreen block)
4. Overlay uses `items-start` (NOT `items-center`) + `pt-24 pb-12 px-10`
5. Overlay uses `style={{ zIndex: 9999 }}` inline
6. ✕ button must have `aria-label="Close"`
7. No `onClick` on the overlay div or the fullscreen `<img>`
8. Render `<MyArt />` where the placeholder was
9. Delete the old placeholder div entirely

---

## Anti-Patterns (never do these)

- `items-center` on the overlay — image will go behind the navbar in fullscreen
- `onClick={() => setOpen(false)}` on the overlay backdrop — conflicts with `lightbox-controls.js` backdrop blocker
- `onClick={(e) => e.stopPropagation()}` on the fullscreen `<img>` — not needed, causes confusion
- `useState` called inside JSX or an IIFE — breaks React hooks rules, will crash
- `z-[9999]` Tailwind class — can be purged by the build, use inline style
- `aspect-video` or fixed height on art images — distorts non-16:9 art, always use `h-auto`
- Missing `aria-label="Close"` on ✕ button — `lightbox-controls.js` won't find the button, ESC and mobile tap won't work
- Keeping old placeholder AND real image — remove placeholder entirely
