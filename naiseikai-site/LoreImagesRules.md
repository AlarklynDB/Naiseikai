## Art Images — Lightbox Rule

> **Whenever an imgbb link is provided (i.ibb.co) for character or world art, always replace the placeholder div with a clickable image that opens a fullscreen lightbox.**

Never use a plain `<img>` tag alone. Every art image must be wrapped with the Lightbox pattern below.

### Required steps
1. Add a `Lightbox` component at the top of the file (before the main export)
2. Add `const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);` inside the main component
3. Render `{lightbox && <Lightbox ... />}` as the first child inside the BodyWidth960 wrapper
4. Wrap every `<img>` in the clickable container below

### Lightbox Component (copy-paste ready)

```tsx
import React, { useState } from 'react'; // make sure React is imported for useEffect

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [visible, setVisible] = React.useState(false);

  // Fade in on mount
  React.useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  // Lock body scroll while open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 200);
  }

  return (
    <div
      // pt-24 keeps image below navbar, pb-12 px-10 gives breathing room on all sides
      // z-index 9999 — do NOT use z-[200], navbar beats it
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm pt-24 pb-12 px-10"
      style={{ zIndex: 9999, backgroundColor: `rgba(0,0,0,${visible ? 0.92 : 0})`, transition: 'background-color 200ms ease' }}
      onClick={handleClose}
    >
      {/* X button — absolute top-16 so it clears the navbar height */}
      <button
        onClick={handleClose}
        className="absolute top-16 right-4 text-white/80 hover:text-white transition-colors bg-black/60 rounded-full w-8 h-8 flex items-center justify-center text-base leading-none border border-white/20"
        aria-label="Close"
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-2xl object-contain"
        style={{
          maxWidth: '95vw',
          maxHeight: '95vh',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.96)',
          transition: 'opacity 200ms ease, transform 200ms ease',
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
```

### Clickable Image Wrapper (copy-paste ready)

```tsx
<div
  className="w-full rounded-xl overflow-hidden border border-[#2e2b26] cursor-zoom-in group relative"
  onClick={() => setLightbox({ src: 'IMAGE_URL', alt: 'Alt Text' })}
>
  <img
    src="IMAGE_URL"
    alt="Alt Text"
    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
  />
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-body text-xs text-white tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded-full">Click to expand</span>
  </div>
</div>
```

### Rules
- Always use `h-auto object-cover` on the thumbnail — never `aspect-video` for real art images.
- Lightbox overlay uses `style={{ zIndex: 9999 }}` — do NOT use Tailwind `z-[200]`, the navbar will beat it.
- The ✕ button must be `absolute top-16` (not `fixed`) so it sits below the navbar and inside the same stacking context as the overlay.
- Overlay padding is `pt-24 pb-12 px-10` — `pt-24` clears the navbar, the rest gives breathing room around the image.
- Fade in/out animation: `visible` state drives `opacity` and `scale` on the image + `backgroundColor` on the overlay. `handleClose` flips `visible` then calls `onClose` after 200ms.
- Scroll lock: `document.body.style.overflow = 'hidden'` on mount, cleaned up on unmount.
- Clicking outside the image (on the overlay) closes it. Clicking the image itself does NOT close it (`e.stopPropagation()`).
- If a page has multiple images, one shared `lightbox` state handles all of them.
- Remove the old placeholder div entirely when real art is provided. Do not keep both.
