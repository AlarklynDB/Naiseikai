import { Link } from 'react-router-dom'

// ─── Master roster ────────────────────────────────────────────────────────────
const ALL_CHARACTERS = [
  // ── TQCTN ──────────────────────────────────────────────────────────────────
  {
    name: 'Hanako Reina',
    title: 'The Quiet Crow and The Ninja!',
    titleShort: 'TQCTN',
    role: 'Main Character',
    color: '#7ef5ff',
    route: '/titles/KarasuToNinja-TQCTN/Hanako-Reina',
  },
  {
    name: 'Koa Ruruka',
    title: 'The Quiet Crow and The Ninja!',
    titleShort: 'TQCTN',
    role: 'Main Character',
    color: '#7ef5ff',
    route: '/titles/KarasuToNinja-TQCTN/Koa-Ruruka',
  },
  {
    name: 'Haruhi Aoi',
    title: 'The Quiet Crow and The Ninja!',
    titleShort: 'TQCTN',
    role: 'Main Character',
    color: '#7ef5ff',
    route: '/titles/KarasuToNinja-TQCTN/Haruhi-Aoi',
  },
  {
    name: 'Your One and Only Little Bunny Aru',
    title: 'The Quiet Crow and The Ninja!',
    titleShort: 'TQCTN',
    role: 'Main Character',
    color: '#7ef5ff',
    route: '/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru',
  },
  {
    name: 'Asami Kurose',
    title: 'The Quiet Crow and The Ninja!',
    titleShort: 'TQCTN',
    role: 'Main Character',
    color: '#7ef5ff',
    route: '/titles/KarasuToNinja-TQCTN/Asami-Kurose',
  },

  // ── SorenaoANE ─────────────────────────────────────────────────────────────
  {
    name: 'Asahi Nanako',
    title: "Nevertheless, You're Still My Sister!",
    titleShort: 'SorenaoANE',
    role: 'Main Character',
    color: '#d49fff',
    route: '/titles/SorenaoAne-Nevertheless/Asahi-Nanako',
  },
  {
    name: 'Reiko Nanako',
    title: "Nevertheless, You're Still My Sister!",
    titleShort: 'SorenaoANE',
    role: 'Main Character',
    color: '#d49fff',
    route: '/titles/SorenaoAne-Nevertheless/Reiko-Nozomi',
  },
  {
    name: 'Shion Nozomi',
    title: "Nevertheless, You're Still My Sister!",
    titleShort: 'SorenaoANE',
    role: 'Main Character',
    color: '#d49fff',
    route: '/titles/SorenaoAne-Nevertheless/Shion-Nanako',
  },
  {
    name: 'Koharu Inoue',
    title: "Nevertheless, You're Still My Sister!",
    titleShort: 'SorenaoANE',
    role: 'Main Character',
    color: '#d49fff',
    route: '/titles/SorenaoAne-Nevertheless/Koharu-Inoue',
  },
  {
    name: 'Cyllvia April',
    title: "Nevertheless, You're Still My Sister!",
    titleShort: 'SorenaoANE',
    role: 'Main Character',
    color: '#d49fff',
    route: '/titles/SorenaoAne-Nevertheless/Cyllvia-April',
  },

  // ── Dullahan ───────────────────────────────────────────────────────────────
  {
    name: 'Yukino Kōri',
    title: 'Can This Dullahan Fall in Love?',
    titleShort: 'DuraDekiruKoi',
    role: 'Main Character',
    color: '#7ef5ff',
    route: '/titles/DuraDekiruKoi-Dullahan/Kori-Yukino',
  },
  {
    name: 'Amane Hinoka',
    title: 'Can This Dullahan Fall in Love?',
    titleShort: 'DuraDekiruKoi',
    role: 'Main Character',
    color: '#ffaad4',
    route: '/titles/DuraDekiruKoi-Dullahan/Hinoka-Amane',
  },

  // ── Lonely Android ─────────────────────────────────────────────────────────
  {
    name: 'Otokura Ayane',
    title: 'The Lonely Android and Her 2GFs',
    titleShort: 'HitoJinzo2GF',
    role: 'Main Character',
    color: '#7ef5ff',
    route: '/titles/HitoJinzo2GF-LonelyAndroid/Ayane-Otokura',
  },
  {
    name: 'Chisaki Akari',
    title: 'The Lonely Android and Her 2GFs',
    titleShort: 'HitoJinzo2GF',
    role: 'Main Character',
    color: '#d49fff',
    route: '/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki',
  },
  {
    name: 'Kazehara Ayumi',
    title: 'The Lonely Android and Her 2GFs',
    titleShort: 'HitoJinzo2GF',
    role: 'Main Character',
    color: '#a8ff8a',
    route: '/titles/HitoJinzo2GF-LonelyAndroid/Ayumi-Kazehara',
  },

  // ── GyakuTEN ───────────────────────────────────────────────────────────────
  {
    name: 'Narrator-kun',
    title: 'GyakuTen – Paradoxical Reincarnation',
    titleShort: 'GyakuTEN',
    role: 'Main Character',
    color: '#d49fff',
    route: '/titles/GyakuTEN-ParadoxicalReincarnation/Narrator-Kun',
  },
  {
    name: 'Eina Arataki',
    title: 'GyakuTen – Paradoxical Reincarnation',
    titleShort: 'GyakuTEN',
    role: 'Main Character',
    color: '#7ef5ff',
    route: '/titles/GyakuTEN-ParadoxicalReincarnation/Eina-Arataki',
  },
  {
    name: 'Masato Ren "Killer-kun"',
    title: 'GyakuTen – Paradoxical Reincarnation',
    titleShort: 'GyakuTEN',
    role: 'Antagonist',
    color: '#ffaad4',
    route: '/titles/GyakuTEN-ParadoxicalReincarnation/Masato-Ren-Killer-kun',
  },
]

// Group by title
const TITLE_ORDER = ['TQCTN', 'SorenaoANE', 'DuraDekiruKoi', 'HitoJinzo2GF', 'GyakuTEN']

const TITLE_LABELS: Record<string, string> = {
  TQCTN: 'The Quiet Crow and The Ninja!',
  SorenaoANE: "Nevertheless, You're Still My Sister!",
  DuraDekiruKoi: 'Can This Dullahan Fall in Love?',
  HitoJinzo2GF: 'The Lonely Android and Her 2GFs',
  GyakuTEN: 'GyakuTen – Paradoxical Reincarnation',
}

const TITLE_COLORS: Record<string, string> = {
  TQCTN: '#7ef5ff',
  SorenaoANE: '#d49fff',
  DuraDekiruKoi: '#7ef5ff',
  HitoJinzo2GF: '#7ef5ff',
  GyakuTEN: '#d49fff',
}

const TITLE_ROUTES: Record<string, string> = {
  TQCTN: '/titles/KarasuToNinja-TQCTN',
  SorenaoANE: '/titles/SorenaoAne-Nevertheless',
  DuraDekiruKoi: '/titles/DuraDekiruKoi-Dullahan',
  HitoJinzo2GF: '/titles/HitoJinzo2GF-LonelyAndroid',
  GyakuTEN: '/titles/GyakuTEN-ParadoxicalReincarnation',
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AllCharacters() {
  const grouped = TITLE_ORDER.map((key) => ({
    key,
    label: TITLE_LABELS[key],
    color: TITLE_COLORS[key],
    route: TITLE_ROUTES[key],
    chars: ALL_CHARACTERS.filter((c) => c.titleShort === key),
  }))

  return (
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
        <span>/</span>
        <span className="text-[#d49fff]">All Characters</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign-purple text-[10px] mb-4 inline-block">Master Roster</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">All Naiseikai Characters</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Every character across all titles in The Naiseikai Universe. Click any card to view their full profile.
        </p>
        <p className="text-text-faint font-mono text-xs mt-2">{ALL_CHARACTERS.length} characters total</p>
      </div>

      {/* Grouped by title */}
      <div className="space-y-14">
        {grouped.map(({ key, label, color, route, chars }) => (
          <section key={key}>
            <div className="section-divider mb-6" />
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Link
                to={route}
                className="font-serif text-lg hover:opacity-80 transition-opacity"
                style={{ color }}
              >
                {label}
              </Link>
              <span className="text-[10px] font-mono text-text-faint border border-white/10 rounded-full px-2 py-0.5">
                {chars.length} character{chars.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {chars.map((char) => (
                <Link
                  key={char.route}
                  to={char.route}
                  className="block group bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-4 hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200"
                  style={{ borderColor: `${char.color}22` }}
                >
                  {/* Color accent bar */}
                  <div
                    className="w-8 h-0.5 rounded-full mb-3 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: char.color }}
                  />
                  <p
                    className="font-serif text-base font-medium mb-1 group-hover:opacity-90 transition-opacity"
                    style={{ color: char.color }}
                  >
                    {char.name}
                  </p>
                  <p className="text-[10px] font-mono text-text-faint mb-2">{char.role}</p>
                  <p className="text-[10px] font-mono text-text-faint opacity-50 truncate">{char.title}</p>
                  <p className="text-[10px] font-mono mt-3 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: char.color }}>
                    View profile →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer nav */}
      <div className="mt-14 section-divider" />
      <div className="flex flex-wrap gap-3 mt-6">
        <Link to="/titles" className="btn-neon-purple text-xs">← Back to Titles</Link>
      </div>

    </div>
  )
}
