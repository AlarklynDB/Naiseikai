# Songbook Style Guide
> Template and conventions for adding songs to the Naiseikai Songbook.
> Reference this file before creating any new song page.

---

## Folder Structure

Every song lives in its own folder under its section:

```
naiseikai-site/src/views/songbook/<Section>/
  <SongFolderName>/
    index.tsx           ← song page

naiseikai-site/src/pages/songbook/<section-slug>/
  <SongFolderName>.astro  ← astro route
```

**Example (first song):**
```
views/songbook/NaiseikaiUniverseThemes/
  YouCantSpellHopeWithoutOops/
    index.tsx

pages/songbook/naiseikai-universe-themes/
  YouCantSpellHopeWithoutOops.astro
```

### Folder Naming Convention
- PascalCase for view folders: `YouCantSpellHopeWithoutOops`
- kebab-case for Astro page folders: `naiseikai-universe-themes`
- Astro `.astro` filenames match the view folder name exactly: `YouCantSpellHopeWithoutOops.astro`

---

## Astro Page Template

```astro
---
import BaseLayout from "../../../layouts/BaseLayout.astro"
import View from "../../../views/songbook/<Section>/<SongFolder>/index"
---

<BaseLayout
  title={"<Song Title> | <Section Name> | Songbook"}
  description={"<Short description. e.g. Theme 1 of the Naiseikai Universe. Character voice: X.>"}
  path={"/songbook/<section-slug>/<SongFolder>"}
>
  <View client:load />
</BaseLayout>
```

> **Path depth note:** Songs nested two levels deep (`/songbook/section/song`) use `../../../` for layouts and views. Adjust if depth changes.

---

## Song Page Structure

The page is built from three reusable components plus a fixed layout:

### 1. `Breadcrumb`
Always at the top. Three levels: `Songbook → Section → Song Title`.

```tsx
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/songbook" className="hover:text-[#00e5ff] transition-colors">Songbook</Link>
      <span>/</span>
      <Link to="/songbook/<section-slug>" className="hover:text-[#00e5ff] transition-colors"><Section Name></Link>
      <span>/</span>
      <span className="text-[#d49fff]"><Song Title></span>
    </nav>
  )
}
```

---

### 2. `LyricCard` — one card per song section
Each section (Verse, Chorus, Pre-Chorus, Bridge, etc.) gets its own card.

```tsx
function LyricCard({
  section,
  lines,
}: {
  section: string
  lines: { en: string; jp?: string; ro?: string }[]
}) {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-2xl p-5 space-y-4">
      <p className="font-mono text-[10px] tracking-widest text-[#d49fff] uppercase border-b border-[#d49fff]/20 pb-2">
        {section}
      </p>
      <div className="space-y-4">
        {lines.map((line, i) => (
          <div key={i} className="space-y-0.5">
            <p className="text-sm text-text leading-relaxed">{line.en}</p>
            {line.jp && (
              <p className="text-xs text-text-muted pl-3 border-l-2 border-[#d49fff]/30 leading-relaxed">
                {line.jp}
              </p>
            )}
            {line.ro && (
              <p className="text-xs text-text-faint pl-3 italic leading-relaxed">{line.ro}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```

**Line format:**
| Field | Description |
|---|---|
| `en` | English lyric line (always required) |
| `jp` | Japanese lyric — indented, left purple border |
| `ro` | Romanji — indented, italic, faint |

JP/RO are optional. English-only songs just use `{ en: "..." }`.

---

### 3. `CueCard` — instrumental / stage directions
Slim pill-style card for anything in `[brackets]` — solos, transitions, countdowns, etc.

```tsx
function CueCard({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[rgba(212,159,255,0.05)] border border-[#d49fff]/15">
      <span className="text-[#d49fff]/50 text-xs">♩</span>
      <p className="font-mono text-xs text-[#d49fff]/60 italic tracking-wide">{label}</p>
    </div>
  )
}
```

Use `<CueCard />` between `<LyricCard />` components wherever a cue appears in the Notion source.

---

### 4. Ending Chorus (special card)
If the song has a dramatic/breaking-the-fourth-wall ending line, use the glowing purple card instead of a `LyricCard`:

```tsx
<div className="bg-[rgba(212,159,255,0.07)] border border-[#d49fff]/30 rounded-2xl p-5">
  <p className="font-mono text-[10px] tracking-widest text-[#d49fff] uppercase border-b border-[#d49fff]/20 pb-2 mb-4">
    Ending Chorus
  </p>
  <p className="font-mono text-base text-[#d49fff] leading-relaxed tracking-wide">
    ENDING LINE HERE
  </p>
  <p className="font-mono text-xs text-[#d49fff]/50 italic mt-3">[OUTRO / FADE OUT]</p>
</div>
```

---

## Song Info Cards

The metadata block at the top of each song. Uses the same identity card style as character pages.

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  {[
    { label: 'Theme', value: 'Theme X of ...' },
    { label: 'Character Voice', value: '...' },
    { label: 'Style & Pace', value: '...' },
  ].map(({ label, value }) => (
    <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
      <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
      <p className="text-sm text-text-muted">{value}</p>
    </div>
  ))}
  {/* For list values (e.g. instruments), use a manual card: */}
  <div className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
    <p className="text-[10px] font-mono text-text-faint mb-1">Main Instrument Lead</p>
    <ul className="text-sm text-text-muted space-y-0.5">
      <li>Piano</li>
      <li>Electric Bass</li>
    </ul>
  </div>
</div>
```

---

## Color Reference

| Element | Color |
|---|---|
| Section label / accent | `#d49fff` (purple) |
| Left border on JP lines | `border-[#d49fff]/30` |
| Cue card background | `rgba(212,159,255,0.05)` |
| Ending chorus background | `rgba(212,159,255,0.07)` |
| Breadcrumb active | `text-[#d49fff]` |
| Breadcrumb hover | `hover:text-[#00e5ff]` |

> These match the existing Naiseikai neon palette. Do not introduce new colors without updating this guide.

---

## Section Index (e.g. NaiseikaiUniverseThemes/index.tsx)

When a new song is added, update the section index's `SONGS` array:

```tsx
const SONGS = [
  {
    num: '01',
    title: 'You Can\'t Spell "Hope" without "Oops"',
    sub: '「希望」には「失敗」が隠れてる',
    voice: 'Little Bunny Aru',
    style: 'Upbeat · Medium · J-Pop',
    to: '/songbook/naiseikai-universe-themes/YouCantSpellHopeWithoutOops',
  },
  // add new songs here ↓
]
```

Track numbers are zero-padded: `'01'`, `'02'`, etc.

---

## Checklist for Adding a New Song

- [ ] Fetch the Notion page word-for-word
- [ ] Create `views/songbook/<Section>/<SongFolder>/index.tsx`
- [ ] Add `Breadcrumb`, `LyricCard`, `CueCard` components at the top of the file
- [ ] Fill Song Info cards with metadata from Notion
- [ ] Map every section to a `<LyricCard />` with EN / JP / RO lines
- [ ] Place `<CueCard />` between sections for all `[bracketed]` cues
- [ ] Use the special ending card if there's a dramatic/spoken ending
- [ ] Add bottom nav: `← Section` and `↑ Songbook`
- [ ] Create `pages/songbook/<section-slug>/<SongFolder>.astro`
- [ ] Update the section `index.tsx` `SONGS` array with the new entry
- [ ] Push view file, astro file, and updated section index to GitHub
