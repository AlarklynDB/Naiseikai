# LoreImagesRules.md
> Last updated: June 26, 2026 — migrated from fullscreen overlay → in-place magnifier

Rules for all art images on naiseikaiuniverse.com. Applies to character profiles, title pages, worldbuilding pages, and any page that receives an imgbb link.

> **naiseikai uses a different system than hibrythia.** hibrythia uses a fullscreen overlay pattern (`LoreImageRules.md`). naiseikai uses an **in-place magnifier** — no overlay, no fixed positioning, no z-index conflicts.

---

## Why Magnifier, Not Fullscreen?

The naiseikai navbar uses `fixed` positioning. Even after removing `backdrop-blur-md`, a fullscreen overlay approach creates z-index complexity that varies by browser. The in-place magnifier avoids all of that — the image stays exactly where it is in the document flow, zoom and pan happen inline.

---

## Core Rule

**Whenever an imgbb link (i.ibb.co) is provided for art, always replace the placeholder with a `data-magnify` container.**

Never use a plain `<img>` tag alone. Every art image must use the pattern below.

---

## React Component Pattern

Each image gets a **self-contained helper component** defined above the main `export default`. No `useState` needed — the magnifier is handled entirely by `lightbox-controls.js`.

### Full copy-paste pattern

```tsx
// --- Art helper component (one per image, defined above main export) ---
function MyCharacterArt() {
  return (
    <div
      data-magnify
      className="w-full rounded-xl overflow-hidden border border-white/10 cursor-zoom-in relative"
    >
      <img
        src="https://i.ibb.co/XXXX/Image-Name.png"
        alt="Descriptive alt text"
        className="w-full h-auto object-cover select-none"
        draggable={false}
      />
      <div className="absolute bottom-2 right-3 font-mono text-[10px] text-white/30 tracking-widest uppercase pointer-events-none">
        scroll to zoom · drag to pan
      </div>
    </div>
  )
}
```

### Key attributes

| Property | Value | Reason |
|---|---|---|
| `data-magnify` | on container div | `lightbox-controls.js` targets this selector |
| `cursor-zoom-in` | Tailwind class on container | Visual hint to user |
| `select-none` | on `<img>` | Prevents text-selection cursor during drag |
| `draggable={false}` | on `<img>` | Prevents browser native drag-ghost interfering with pan |
| hint text div | `pointer-events-none` | Hint can't interfere with drag |
| No `onClick` | — | No state, no overlay — nothing to toggle |
| No `useState` | — | Not needed; JS handles everything |

### If a page has multiple images

Define a separate helper component for each (e.g. `HanakoReinaArt`, `HanakoReinaFormArt`) and render them individually.

---

## Global `lightbox-controls.js`

Located at `public/lightbox-controls.js`, loaded globally. Automatically initializes on all `[data-magnify]` elements via DOM ready + MutationObserver.

### What it provides (no per-page code needed)

| Feature | Desktop | Mobile |
|---|---|---|
| Zoom | Scroll wheel (1x–5x) | Pinch — 2 fingers (1x–5x) |
| Pan | Left-click drag (when zoomed > 1x) | Single-finger drag (when zoomed > 1x) |
| Reset | Double-click | — |
| Cursor | `zoom-in` at 1x, `grab` when zoomed, `grabbing` while dragging | — |

### Key implementation details

- Listeners are placed on the **container** (`[data-magnify]`), not on the `<img>` directly
- Transform is applied to the `<img>` using `scale()` + `translate()` with `transformOrigin: '0 0'`
- `_magnifyInit` flag prevents double-init when MutationObserver fires multiple times
- Scroll zoom adjusts by ±0.2 per wheel tick, clamped 1–5
- Pan only activates when `scale > 1` (no accidental dragging at 1x)
- At scale 1: translate resets to 0,0 automatically
- Pinch sensitivity: `(distanceDelta) * 0.02` per move event

---

## Required Steps Checklist

When an imgbb link is provided:

1. Define a named helper component (e.g. `function HanakoReinaArt()`) **above** the main `export default`
2. Use the magnifier pattern: `data-magnify` on container, `<img>` with `select-none draggable={false}`, hint text div
3. Render `<MyArt />` where the placeholder was
4. Delete the old placeholder div entirely
5. No `import { useState }` needed if it was only used for the old lightbox
6. No `style={{ zIndex }}`, no overlay div, no ✕ button

---

## Anti-Patterns (never do these)

- Fullscreen overlay (`fixed inset-0 zIndex 9999`) — old pattern, replaced entirely
- `useState` for open/close toggle — not needed with magnifier
- `onClick` toggling a lightbox state — not needed
- Missing `data-magnify` on the container — JS won't find it, magnifier won't init
- `draggable` left as default (`true`) on `<img>` — browser drag ghost will conflict with pan
- Fixed height or `aspect-video` on art — distorts non-16:9 art, always `h-auto`
- Adding `touch-action: none` on container yourself — `lightbox-controls.js` does NOT do this for in-place magnifier (only did it for the old fullscreen overlay). Leave touch-action alone.

---

## Navbar Note

The naiseikai navbar (`Navbar.tsx`) uses `fixed top-0 z-50` positioning. `backdrop-blur-md` was previously present and caused compositing layer issues with z-index. It has been removed — the navbar now uses solid opaque backgrounds only.

Since the in-place magnifier doesn't use fixed positioning or z-index at all, there is no navbar conflict whatsoever with this pattern.

> The hibrythia navbar uses `sticky` positioning — different approach, different rules file (`LoreImageRules.md` without the extra 's').
