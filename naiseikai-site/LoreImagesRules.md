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
import { useState } from 'react';
import { Link } from 'react-router-dom'; // keep existing imports

// --- Art helper component (one per image, defined above main export) ---
function MyPageArt() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Thumbnail — clickable */}
      <div
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer w-full overflow-hidden rounded-sm border border-[#2e2b26]"
      >
        <img
          src="https://i.ibb.co/XXXX/Image-Name.png"
          alt="Descriptive alt text"
          className="w-full h-auto rounded-sm transition-transform duration-300 group-hover:scale-[1.01]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-[#f2ebeb] text-xs tracking-widest uppercase border border-[#f2ebeb]/40 px-3 py-1 rounded-sm transition-opacity duration-300">
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
            className="absolute top-16 right-6 text-[#f2ebeb]/70 hover:text-[#f2ebeb] text-xl font-light transition-colors"
          >
            &#x2715;
          </button>
          <img
            src="https://i.ibb.co/XXXX/Image-Name.png"
            alt="Descriptive alt text — fullscreen"
            className="max-w-[95vw] max-h-[95vh] h-auto rounded-sm object-contain"
          />
        </div>
      )}
    </>
  );
}

// --- Main page component ---
export default function MyPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">
      {/* Place art component wherever it belongs in the page */}
      <MyPageArt />
      {/* ... rest of page ... */}
    </div>
  );
}
```

### If a page has multiple images

Define a separate helper component for each image (e.g. `MyPageMainArt`, `MyPageInfernalArt`) and render them individually. Do NOT share state between them.

---

## Overlay Rules

| Property | Value | Reason |
|---|---|---|
| `zIndex` | `style={{ zIndex: 9999 }}` inline | Tailwind `z-[9999]` can be purged; inline always wins |
| ✕ button position | `absolute top-16 right-6` | Clears the navbar height, stays within overlay stacking context |
| Padding | `pt-24 pb-12 px-10` | `pt-24` clears the navbar; rest gives breathing room |
| Backdrop | `bg-black/90 backdrop-blur-sm` | Dark enough to read art clearly |
| Image sizing | `max-w-[95vw] max-h-[95vh] h-auto object-contain` | Fills screen without overflow |
| Backdrop click | Does NOT close — blocked by `lightbox-controls.js` | Only ✕ button or ESC closes |
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

- Always `w-full h-auto` — never `aspect-video` for real art (distorts non-16:9 images)
- `rounded-sm border border-[#2e2b26]` to match site style
- `group-hover:scale-[1.01]` subtle hover scale on thumbnail
- Remove the old placeholder div entirely when real art is provided — never keep both

---

## Required Steps Checklist

When an imgbb link is provided:

1. Add `import { useState } from 'react'` at the top if not already there
2. Define a named helper component (e.g. `function HanakoArt()`) above the main `export default`
3. Use the full overlay pattern (thumbnail + `{open && ...}` fullscreen)
4. Make sure the ✕ button has `aria-label="Close"` (required for `lightbox-controls.js`)
5. Overlay must use `style={{ zIndex: 9999 }}` inline
6. Place `<MyArt />` in the JSX where the placeholder was
7. Delete the old placeholder div

---

## Anti-Patterns (never do these)

- `useState` called inside JSX or an IIFE — **breaks hooks rules**, will crash
- `z-[9999]` via Tailwind class — can be purged by the build
- `aspect-video` on real art images — distorts non-16:9 art
- Backdrop `onClick` to close — disabled globally by `lightbox-controls.js`, don't add it
- Keeping both placeholder AND real image — remove placeholder entirely
- `aria-label` missing on ✕ button — `lightbox-controls.js` won't find the button and ESC/touch won't work
