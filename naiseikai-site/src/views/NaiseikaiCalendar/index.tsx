import { useEffect, useRef } from 'react'

// ============================================================
// The Naiseikai Calendar — Year 2100
// Naiseikai Universe runs on standard Earth time. Calendar only
// ============================================================

type Month = {
  num: number
  name: string
  short: string
  days: number
  lore: string
  accent: string
}

// 12 real month names, evenly redistributed across 365 days, no leap year.
// Jan 31, Feb 30, Mar 31, Apr 30, May 31, Jun 30, Jul 31, Aug 30, Sep 31, Oct 30, Nov 30, Dec 30 = 365
const MONTHS: Month[] = [
  { num: 1,  name: 'January',   short: 'Jan', days: 31, lore: 'The first month — Neo-Japan opens the year under still-cold skies.', accent: '#bf5fff' },
  { num: 2,  name: 'February',  short: 'Feb', days: 30, lore: 'A quiet month. No leap day here — every year runs exactly the same length.', accent: '#00e5ff' },
  { num: 3,  name: 'March',     short: 'Mar', days: 31, lore: 'Education Day falls here — a citywide observance across Neo-Japan.', accent: '#ff6eb4' },
  { num: 4,  name: 'April',     short: 'Apr', days: 30, lore: 'Ayumi Kazehara takes human form this month, according to the lore timeline.', accent: '#5ecb6a' },
  { num: 5,  name: 'May',       short: 'May', days: 31, lore: 'Ujuukyō Founded — one of Neo-Japan\'s marked historical dates.', accent: '#ffb347' },
  { num: 6,  name: 'June',      short: 'Jun', days: 30, lore: 'Ayane\'s Android Activation Day sits in this month.', accent: '#00ffcc' },
  { num: 7,  name: 'July',      short: 'Jul', days: 31, lore: 'A birthday-heavy month across the cast of Naiseikai.', accent: '#bf5fff' },
  { num: 8,  name: 'August',    short: 'Aug', days: 30, lore: 'Late summer in Neo-Japan, mid-year quiet before the story picks up again.', accent: '#00e5ff' },
  { num: 9,  name: 'September', short: 'Sep', days: 31, lore: 'The month with a 31st day — where TQCTN Book 1 truly begins.', accent: '#ff6eb4' },
  { num: 10, name: 'October',   short: 'Oct', days: 30, lore: 'Autumn settles over the city as the story\'s first arcs unfold.', accent: '#ffb347' },
  { num: 11, name: 'November',  short: 'Nov', days: 30, lore: 'A month dense with birthdays and key TQCTN Book 1 events.', accent: '#5ecb6a' },
  { num: 12, name: 'December',  short: 'Dec', days: 30, lore: 'The year closes out quietly, looking ahead to the next.', accent: '#bf5fff' },
]

const DAYS_OF_WEEK = [
  { short: 'Sun', name: 'Sunday' },
  { short: 'Mon', name: 'Monday' },
  { short: 'Tue', name: 'Tuesday' },
  { short: 'Wed', name: 'Wednesday' },
  { short: 'Thu', name: 'Thursday' },
  { short: 'Fri', name: 'Friday' },
  { short: 'Sat', name: 'Saturday' },
]

// Marked dates pulled from the Naiseikai Lore Timeline & World Notion page.
// monthIdx is 0-based (0 = January ... 8 = September ... 11 = December)
type MarkKind = 'birthday' | 'holiday' | 'lore'
type MarkedDate = { monthIdx: number; day: number; label: string; kind: MarkKind }

const MARKED_DATES: MarkedDate[] = [
  // Birthdays (pink)
  { monthIdx: 0,  day: 7,  label: 'Kori Yukino — Birthday', kind: 'birthday' },
  { monthIdx: 4,  day: 22, label: 'Koharu Inoue — Birthday', kind: 'birthday' },
  { monthIdx: 4,  day: 23, label: 'Cyllvia April — Birthday', kind: 'birthday' },
  { monthIdx: 5,  day: 13, label: 'Ayane — Android Activation Day', kind: 'birthday' },
  { monthIdx: 6,  day: 7,  label: 'Hinoka Amane — Birthday', kind: 'birthday' },
  { monthIdx: 6,  day: 13, label: 'Shion Nozomi — Birthday', kind: 'birthday' },
  { monthIdx: 6,  day: 16, label: 'Haruhi Aoi — Birthday', kind: 'birthday' },
  { monthIdx: 6,  day: 17, label: 'Asahi Nanako — Birthday', kind: 'birthday' },
  { monthIdx: 7,  day: 1,  label: 'Reiko Nanako — Birthday', kind: 'birthday' },
  { monthIdx: 8,  day: 22, label: 'Ayane Otokura — Birthday', kind: 'birthday' },
  { monthIdx: 9,  day: 31, label: 'Chisaki Akari — Birthday', kind: 'birthday' },
  { monthIdx: 10, day: 2,  label: 'Koa Ruruka — Birthday', kind: 'birthday' },
  { monthIdx: 10, day: 16, label: 'Hanako Reina — Birthday', kind: 'birthday' },
  // Holidays (gold/amber)
  { monthIdx: 2,  day: 25, label: 'Education Day', kind: 'holiday' },
  { monthIdx: 4,  day: 5,  label: 'Ujuukyō Founded', kind: 'holiday' },
  { monthIdx: 8,  day: 18, label: 'Japanese Language Day', kind: 'holiday' },
  // Lore events (green)
  { monthIdx: 3,  day: 22, label: 'Ayumi Kazehara takes human form', kind: 'lore' },
]

function markedDatesFor(monthIdx: number) {
  return MARKED_DATES.filter((m) => m.monthIdx === monthIdx)
}

const TODAY = { year: 2100, monthIdx: 6, day: 4 } // July 4, 2100 — matches current in-universe "today"

const STYLES = `
.nai-cal {
  --nc-bg: #05050f;
  --nc-surface: #0f0f28;
  --nc-surface-2: #181838;
  --nc-border: #2a2a55;
  --nc-border-light: #3a3a6a;
  --nc-text: #e8e3f5;
  --nc-text-muted: #9e98c0;
  --nc-text-faint: #5a5580;
  --nc-purple: #bf5fff;
  --nc-cyan: #00e5ff;
  --nc-pink: #ff6eb4;
  --nc-amber: #ffb347;
  --nc-green: #5ecb6a;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
  --transition: 180ms cubic-bezier(0.16, 1, 0.3, 1);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.5);
  --shadow-glow-purple: 0 0 24px rgba(191,95,255,0.25);
  font-family: 'Inter', system-ui, sans-serif;
  color: var(--nc-text);
  width: 100%;
}
.nai-cal *, .nai-cal *::before, .nai-cal *::after { box-sizing: border-box; }
.nai-cal .nc-section { padding: clamp(2rem, 6vw, 3rem) 0; }
.nai-cal .nc-inner { max-width: 900px; margin: 0 auto; padding: 0 1rem; display: flex; flex-direction: column; gap: 1.5rem; }

/* Hero */
.nai-cal .nc-hero { text-align: center; padding: clamp(2rem, 8vw, 3.5rem) 1rem; position: relative; overflow: hidden; }
.nai-cal .nc-hero-badge {
  display: inline-block; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--nc-amber); padding: 0.25rem 1rem; border: 1px solid rgba(255,179,71,0.4);
  border-radius: var(--radius-full); margin-bottom: 1rem; font-family: 'JetBrains Mono', monospace;
}
.nai-cal .nc-hero-title {
  font-family: 'Noto Serif JP', 'Lora', Georgia, serif; font-size: clamp(2rem, 5vw, 3rem);
  color: var(--nc-text); letter-spacing: 0.02em; text-shadow: 0 0 30px rgba(191,95,255,0.35); margin-bottom: 0.75rem;
}
.nai-cal .nc-hero-quote { font-style: italic; color: var(--nc-text-muted); max-width: 520px; margin: 0 auto 0.5rem; line-height: 1.8; font-size: 0.95rem; }
.nai-cal .nc-hero-attr { font-size: 0.75rem; color: var(--nc-purple); letter-spacing: 0.08em; margin-bottom: 1.25rem; }
.nai-cal .nc-hero-stats { display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; }
.nai-cal .nc-stat-pill {
  display: flex; flex-direction: column; align-items: center; gap: 0.15rem;
  padding: 0.75rem 1.25rem; background: var(--nc-surface); border: 1px solid var(--nc-border);
  border-radius: var(--radius-lg); min-width: 84px; box-shadow: var(--shadow-md);
}
.nai-cal .nc-stat-num { font-family: 'Noto Serif JP', serif; font-size: 1.25rem; font-weight: 700; color: var(--nc-purple); }
.nai-cal .nc-stat-label { font-size: 0.65rem; color: var(--nc-text-muted); text-transform: uppercase; letter-spacing: 0.1em; }

/* Year nav */
.nai-cal .nc-year-nav { display: flex; align-items: center; justify-content: center; gap: 1rem; }
.nai-cal .nc-year-btn {
  font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.08em;
  padding: 0.5rem 1rem; border-radius: var(--radius-md); border: 1px solid rgba(191,95,255,0.4);
  color: var(--nc-purple); background: rgba(191,95,255,0.06); cursor: pointer; transition: all var(--transition);
  white-space: nowrap;
}
.nai-cal .nc-year-btn:hover { background: rgba(191,95,255,0.16); box-shadow: 0 0 10px rgba(191,95,255,0.3); }
.nai-cal .nc-year-display {
  font-family: 'Noto Serif JP', serif; font-size: clamp(1.1rem, 3vw, 1.4rem); font-weight: 700;
  color: var(--nc-amber); min-width: 100px; text-align: center; text-shadow: 0 0 20px rgba(255,179,71,0.25);
}

/* Month nav */
.nai-cal .nc-cal-nav { display: flex; align-items: center; gap: 1rem; justify-content: space-between; }
.nai-cal .nc-nav-btn {
  width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
  border-radius: var(--radius-md); border: 1px solid var(--nc-border); color: var(--nc-text-muted);
  font-size: 1.1rem; cursor: pointer; transition: all var(--transition); flex-shrink: 0; background: var(--nc-surface);
}
.nai-cal .nc-nav-btn:hover { background: var(--nc-surface-2); color: var(--nc-purple); border-color: var(--nc-purple); }
.nai-cal .nc-month-display { text-align: center; flex: 1; }
.nai-cal .nc-month-name { display: block; font-family: 'Noto Serif JP', serif; font-size: 1.2rem; color: var(--nc-text); font-weight: 700; }
.nai-cal .nc-month-num { font-size: 0.7rem; color: var(--nc-cyan); letter-spacing: 0.08em; }

/* Month lore */
.nai-cal .nc-month-lore {
  background: var(--nc-surface); border-left: 3px solid var(--nc-purple);
  padding: 0.75rem 1.1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;
}
.nai-cal .nc-month-lore-text { font-size: 0.85rem; color: var(--nc-text-muted); font-style: italic; }

/* Grid */
.nai-cal .nc-grid-wrap { background: var(--nc-surface); border: 1px solid var(--nc-border); border-radius: var(--radius-xl); padding: 1rem; }
.nai-cal .nc-day-headers { display: grid; grid-template-columns: repeat(7, 1fr); background: #0b0b22; border-radius: 6px 6px 0 0; overflow: hidden; border-bottom: 1px solid rgba(191,95,255,0.25); }
.nai-cal .nc-day-header { text-align: center; padding: 6px 4px; font-family: 'Noto Serif JP', serif; font-size: 11px; font-weight: 700; color: var(--nc-purple); letter-spacing: 0.05em; text-transform: uppercase; }
.nai-cal .nc-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0; border-radius: 0 0 6px 6px; overflow: hidden; }
.nai-cal .nc-cell { aspect-ratio: 1/1; min-height: 58px; display: flex; align-items: center; justify-content: center; position: relative; font-family: 'Noto Serif JP', serif; font-size: 13px; color: rgba(232,227,245,0.4); transition: all 0.15s ease; }
.nai-cal .nc-cell:nth-child(odd) { background: #12122b; }
.nai-cal .nc-cell:nth-child(even) { background: #161631; }
.nai-cal .nc-cell.empty { background: #0d0d24 !important; background-image: repeating-linear-gradient(135deg, rgba(191,95,255,0.03) 0px, rgba(191,95,255,0.03) 1px, transparent 1px, transparent 10px) !important; }
.nai-cal .nc-cell.day { color: var(--nc-text); cursor: default; }
.nai-cal .nc-cell.day:hover { background: rgba(191,95,255,0.08) !important; z-index: 1; }
.nai-cal .nc-cell.today { background: color-mix(in srgb, #bf5fff 20%, #12122b) !important; border: 1px solid var(--nc-purple) !important; z-index: 1; }
.nai-cal .nc-cell.today .nc-day-num { color: var(--nc-purple); font-weight: 700; }
.nai-cal .nc-day-num { position: absolute; top: 0; right: 0; font-size: 11px; font-weight: 600; color: rgba(232,227,245,0.75); background: rgba(5,5,15,0.7); border-bottom-left-radius: 4px; padding: 3px 5px; min-width: 20px; text-align: center; }
.nai-cal .nc-dots { position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%); display: flex; gap: 3px; }
.nai-cal .nc-dot { width: 6px; height: 6px; border-radius: 50%; }
.nai-cal .nc-dot.birthday { background: var(--nc-pink); box-shadow: 0 0 5px var(--nc-pink); }
.nai-cal .nc-dot.holiday { background: var(--nc-amber); box-shadow: 0 0 5px var(--nc-amber); }
.nai-cal .nc-dot.lore { background: var(--nc-green); box-shadow: 0 0 5px var(--nc-green); }

/* Legend */
.nai-cal .nc-legend { display: flex; flex-wrap: wrap; gap: 0.4rem 1.1rem; padding: 0.75rem 1.25rem; background: #0b0b22; border-top: 1px solid rgba(191,95,255,0.12); border-radius: 0 0 8px 8px; }
.nai-cal .nc-legend-item { display: flex; align-items: center; gap: 6px; font-size: 0.7rem; color: rgba(232,227,245,0.55); text-transform: uppercase; letter-spacing: 0.06em; }
.nai-cal .nc-legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

/* Year progress */
.nai-cal .nc-progress-wrap { background: var(--nc-surface); border: 1px solid var(--nc-border); border-radius: var(--radius-xl); padding: 1.1rem 1.25rem; }
.nai-cal .nc-progress-label { font-size: 0.7rem; color: var(--nc-text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.9rem; }
.nai-cal .nc-progress-months { display: flex; gap: 3px; align-items: flex-end; }
.nai-cal .nc-progress-month { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; }
.nai-cal .nc-progress-bar { width: 100%; border-radius: 3px 3px 0 0; background: #2a2a55; border: 1px solid var(--nc-border); transition: all var(--transition); }
.nai-cal .nc-progress-month.active .nc-progress-bar { background: var(--nc-purple); border-color: var(--nc-purple); box-shadow: 0 0 12px rgba(191,95,255,0.5); }
.nai-cal .nc-progress-month:hover .nc-progress-bar { background: var(--nc-cyan); border-color: var(--nc-cyan); }
.nai-cal .nc-progress-month-label { font-size: 9px; color: var(--nc-text-faint); font-family: 'JetBrains Mono', monospace; }
.nai-cal .nc-progress-month.active .nc-progress-month-label { color: var(--nc-purple); }

/* Months reference grid */
.nai-cal .nc-months-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 0.85rem; }
.nai-cal .nc-month-card {
  background: var(--nc-surface); border: 1px solid var(--nc-border); border-radius: var(--radius-lg);
  padding: 1rem 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; cursor: pointer;
  transition: all var(--transition); position: relative; overflow: hidden;
}
.nai-cal .nc-month-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--card-accent, var(--nc-purple)); }
.nai-cal .nc-month-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--card-accent, var(--nc-purple)); }
.nai-cal .nc-month-card-num { font-size: 0.65rem; color: var(--nc-text-faint); text-transform: uppercase; letter-spacing: 0.1em; font-family: 'JetBrains Mono', monospace; }
.nai-cal .nc-month-card-name { font-family: 'Noto Serif JP', serif; font-size: 0.95rem; font-weight: 700; color: var(--nc-text); }
.nai-cal .nc-month-card-days { font-size: 0.7rem; color: var(--card-accent, var(--nc-purple)); font-weight: 600; }
.nai-cal .nc-month-card-lore { font-size: 0.72rem; color: var(--nc-text-muted); font-style: italic; line-height: 1.5; }
.nai-cal .nc-month-card-chips { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.2rem; }
.nai-cal .nc-chip { font-size: 0.62rem; padding: 0.15rem 0.5rem; border-radius: var(--radius-full); font-family: 'JetBrains Mono', monospace; }
.nai-cal .nc-chip.birthday { background: rgba(255,110,180,0.12); color: var(--nc-pink); border: 1px solid rgba(255,110,180,0.35); }
.nai-cal .nc-chip.holiday { background: rgba(255,179,71,0.12); color: var(--nc-amber); border: 1px solid rgba(255,179,71,0.35); }
.nai-cal .nc-chip.lore { background: rgba(94,203,106,0.12); color: var(--nc-green); border: 1px solid rgba(94,203,106,0.35); }

.nai-cal .nc-section-label { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--nc-cyan); font-family: 'JetBrains Mono', monospace; }
.nai-cal .nc-section-title { font-family: 'Noto Serif JP', serif; font-size: 1.4rem; color: var(--nc-text); margin: 0.4rem 0 0.25rem; }
.nai-cal .nc-section-desc { font-size: 0.82rem; color: var(--nc-text-muted); margin-bottom: 0.5rem; }

@media (max-width: 640px) {
  .nai-cal .nc-year-nav { gap: 0.5rem; }
  .nai-cal .nc-year-btn { padding: 0.4rem 0.7rem; font-size: 0.65rem; }
  .nai-cal .nc-cell { min-height: unset; font-size: 11px; }
  .nai-cal .nc-day-header { font-size: 9px; padding: 4px 2px; }
}
`

export default function NaiseikaiCalendar() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const $ = (id: string) => root.querySelector<HTMLElement>(`#${id}`)

    let currentMonthIdx = TODAY.monthIdx
    let currentYear = TODAY.year

    // Anchor: Sept 31, 2100 = Saturday (index 6). Used to compute weekday offsets.
    // 365 days/year -> 365 % 7 = 1 -> each year shifts the start weekday by +1.
    const ANCHOR_YEAR = 2100
    const ANCHOR_MONTH_IDX = 8 // September
    const ANCHOR_DAY = 31
    const ANCHOR_WEEKDAY = 6 // Saturday
    const YEAR_DAY_SHIFT = 1 // 365 % 7

    function daysBeforeMonth(monthIdx: number) {
      let total = 0
      for (let i = 0; i < monthIdx; i++) total += MONTHS[i].days
      return total
    }

    function getYearStartWeekday(year: number): number {
      // weekday of Jan 1 for the given year, derived from the Sept 31, 2100 anchor
      const anchorDayOfYear = daysBeforeMonth(ANCHOR_MONTH_IDX) + ANCHOR_DAY // 1-indexed day-of-year
      const jan1Weekday2100 = (((ANCHOR_WEEKDAY - (anchorDayOfYear - 1)) % 7) + 7) % 7
      const diff = year - ANCHOR_YEAR
      return (((jan1Weekday2100 + diff * YEAR_DAY_SHIFT) % 7) + 7) % 7
    }

    function getMonthStartWeekday(year: number, monthIdx: number): number {
      const yearStart = getYearStartWeekday(year)
      return (yearStart + daysBeforeMonth(monthIdx)) % 7
    }

    function buildCalendar(monthIdx: number, year?: number) {
      if (year !== undefined) currentYear = year

      if (monthIdx < 0) {
        currentYear -= 1
        monthIdx = 11
      } else if (monthIdx > 11) {
        currentYear += 1
        monthIdx = 0
      }
      currentMonthIdx = monthIdx

      const month = MONTHS[currentMonthIdx]
      const nameEl = $('nc-month-name')
      const numEl = $('nc-month-num')
      const loreEl = $('nc-month-lore-text')
      const yearEl = $('nc-year-display')
      if (nameEl) nameEl.textContent = month.name
      if (numEl) numEl.textContent = `Month ${month.num} of 12 · ${month.days} days`
      if (loreEl) loreEl.textContent = month.lore
      if (yearEl) yearEl.textContent = `${currentYear}`

      const startWeekday = getMonthStartWeekday(currentYear, currentMonthIdx)
      const grid = $('nc-cal-grid')
      if (!grid) return

      const marks = markedDatesFor(currentMonthIdx)
      let html = ''
      for (let i = 0; i < startWeekday; i++) html += '<div class="nc-cell empty"></div>'
      for (let d = 1; d <= month.days; d++) {
        const isToday = currentYear === TODAY.year && currentMonthIdx === TODAY.monthIdx && d === TODAY.day
        const cls = isToday ? 'nc-cell day today' : 'nc-cell day'
        const dayMarks = marks.filter((m) => m.day === d)
        const dotsHtml = dayMarks.length
          ? `<div class="nc-dots">${dayMarks.map((m) => `<span class="nc-dot ${m.kind}" title="${m.label}"></span>`).join('')}</div>`
          : ''
        html += `<div class="${cls}"><span class="nc-day-num">${d}</span>${dotsHtml}</div>`
      }
      const totalCells = startWeekday + month.days
      const trailingEmpty = (7 - (totalCells % 7)) % 7
      for (let i = 0; i < trailingEmpty; i++) html += '<div class="nc-cell empty"></div>'
      grid.innerHTML = html

      buildYearProgress()
    }

    function buildYearProgress() {
      const wrap = $('nc-progress-months')
      const label = $('nc-progress-label-text')
      if (label) label.textContent = `Year Progress — ${currentYear}`
      if (!wrap) return
      const maxDays = Math.max(...MONTHS.map((m) => m.days))
      wrap.innerHTML = MONTHS.map((m, i) => {
        const heightPct = Math.round((m.days / maxDays) * 44) + 16
        return `
        <div class="nc-progress-month ${i === currentMonthIdx ? 'active' : ''}" data-month="${i}" title="${m.name}: ${m.days} days">
          <div class="nc-progress-bar" style="height:${heightPct}px"></div>
          <span class="nc-progress-month-label">${m.short}</span>
        </div>`
      }).join('')
      wrap.querySelectorAll<HTMLElement>('.nc-progress-month').forEach((el) => {
        el.addEventListener('click', () => buildCalendar(Number(el.dataset.month)))
      })
    }

    function buildMonthsGrid() {
      const grid = $('nc-months-grid')
      if (!grid) return
      grid.innerHTML = MONTHS.map((m, i) => {
        const marks = markedDatesFor(i)
        const chips = marks.slice(0, 4).map((mk) =>
          `<span class="nc-chip ${mk.kind}">${mk.label.split(' — ')[0]} · ${m.short} ${mk.day}</span>`
        ).join('')
        return `
        <div class="nc-month-card" style="--card-accent:${m.accent}" data-month="${i}">
          <span class="nc-month-card-num">Month ${m.num} of 12</span>
          <span class="nc-month-card-name">${m.name}</span>
          <span class="nc-month-card-days">${m.days} days</span>
          <span class="nc-month-card-lore">${m.lore}</span>
          ${chips ? `<div class="nc-month-card-chips">${chips}</div>` : ''}
        </div>`
      }).join('')
      grid.querySelectorAll<HTMLElement>('.nc-month-card').forEach((card) => {
        card.addEventListener('click', () => {
          const idx = Number(card.dataset.month)
          buildCalendar(idx)
          root?.querySelector('.nc-calendar-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      })
    }

    const prevBtn = $('nc-prev-month')
    const nextBtn = $('nc-next-month')
    const onPrev = () => buildCalendar(currentMonthIdx - 1)
    const onNext = () => buildCalendar(currentMonthIdx + 1)
    prevBtn?.addEventListener('click', onPrev)
    nextBtn?.addEventListener('click', onNext)

    const prevYearBtn = $('nc-prev-year')
    const nextYearBtn = $('nc-next-year')
    const onPrevYear = () => buildCalendar(currentMonthIdx, currentYear - 1)
    const onNextYear = () => buildCalendar(currentMonthIdx, currentYear + 1)
    prevYearBtn?.addEventListener('click', onPrevYear)
    nextYearBtn?.addEventListener('click', onNextYear)

    buildCalendar(currentMonthIdx)
    buildMonthsGrid()

    return () => {
      prevBtn?.removeEventListener('click', onPrev)
      nextBtn?.removeEventListener('click', onNext)
      prevYearBtn?.removeEventListener('click', onPrevYear)
      nextYearBtn?.removeEventListener('click', onNextYear)
    }
  }, [])

  return (
    <div className="pt-16">
      <style>{STYLES}</style>
      <div className="nai-cal" ref={rootRef}>
        <main>
          {/* Hero */}
          <section className="nc-section nc-hero">
            <p className="nc-hero-badge">Year 2100 · The Naiseikai Universe</p>
            <h1 className="nc-hero-title">The Naiseikai Calendar</h1>
            <p className="nc-hero-quote">
              "Even in a world of introspection, time still moves the same for everyone."
            </p>
            <p className="nc-hero-attr">— Little Aru, Epilogue · TQCTN</p>
            <div className="nc-hero-stats">
              <div className="nc-stat-pill"><span className="nc-stat-num">365</span><span className="nc-stat-label">Days/Year</span></div>
              <div className="nc-stat-pill"><span className="nc-stat-num">12</span><span className="nc-stat-label">Months/Year</span></div>
              <div className="nc-stat-pill"><span className="nc-stat-num">7</span><span className="nc-stat-label">Days/Week</span></div>
              <div className="nc-stat-pill"><span className="nc-stat-num">0</span><span className="nc-stat-label">Leap Years</span></div>
            </div>
          </section>

          {/* Calendar */}
          <section className="nc-section nc-calendar-section">
            <div className="nc-inner">
              <div className="nc-year-nav">
                <button className="nc-year-btn" id="nc-prev-year" aria-label="Previous year">‹ Prev Year</button>
                <span className="nc-year-display" id="nc-year-display">2100</span>
                <button className="nc-year-btn" id="nc-next-year" aria-label="Next year">Next Year ›</button>
              </div>

              <div className="nc-cal-nav">
                <button className="nc-nav-btn" id="nc-prev-month" aria-label="Previous month">&#8592;</button>
                <div className="nc-month-display">
                  <span className="nc-month-name" id="nc-month-name">September</span>
                  <span className="nc-month-num" id="nc-month-num">Month 9 of 12 · 31 days</span>
                </div>
                <button className="nc-nav-btn" id="nc-next-month" aria-label="Next month">&#8594;</button>
              </div>

              <div className="nc-month-lore">
                <p className="nc-month-lore-text" id="nc-month-lore-text" />
              </div>

              <div className="nc-grid-wrap">
                <div className="nc-day-headers">
                  {DAYS_OF_WEEK.map((d) => (
                    <div key={d.short} className="nc-day-header">{d.short}</div>
                  ))}
                </div>
                <div className="nc-cal-grid" id="nc-cal-grid" />
                <div className="nc-legend">
                  <div className="nc-legend-item"><span className="nc-legend-dot" style={{ background: '#ff6eb4' }} />Birthday</div>
                  <div className="nc-legend-item"><span className="nc-legend-dot" style={{ background: '#ffb347' }} />Holiday</div>
                  <div className="nc-legend-item"><span className="nc-legend-dot" style={{ background: '#5ecb6a' }} />Lore Event</div>
                </div>
              </div>

              <div className="nc-progress-wrap">
                <div className="nc-progress-label" id="nc-progress-label-text">Year Progress — 2100</div>
                <div className="nc-progress-months" id="nc-progress-months" />
              </div>
            </div>
          </section>

          {/* Months reference */}
          <section className="nc-section">
            <div className="nc-inner">
              <span className="nc-section-label">Naiseikai Almanac</span>
              <h2 className="nc-section-title">All 12 Months</h2>
              <p className="nc-section-desc">Click a month to jump the calendar above.</p>
              <div className="nc-months-grid" id="nc-months-grid" />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
