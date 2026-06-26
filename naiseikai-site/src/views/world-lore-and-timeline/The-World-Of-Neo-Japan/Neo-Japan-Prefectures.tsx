import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout';

const ACCENT = '#00e5ff';

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id ?? (typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-') : undefined)}
      className="font-serif text-2xl font-bold mt-10 mb-3"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="font-semibold text-lg mt-6 mb-2"
      style={{ color: ACCENT }}
    >
      {children}
    </h3>
  );
}

interface PrefectureCardProps {
  emoji: string;
  name: string;
  color: string;
  description: string;
  cities?: string;
  extra?: React.ReactNode;
}

function PrefectureCard({ emoji, name, color, description, cities, extra }: PrefectureCardProps) {
  return (
    <div
      className="rounded-xl p-5 mb-4 border"
      style={{ borderColor: `${color}55`, background: `${color}08` }}
    >
      <p className="font-serif text-xl font-bold mb-1" style={{ color }}>
        {emoji} {name}
      </p>
      <p className="text-sm text-text-muted leading-relaxed mb-1">{description}</p>
      {cities && (
        <p className="text-sm" style={{ color }}>
          New/Notable Cities: {cities}
        </p>
      )}
      {extra}
    </div>
  );
}

export default function NeoJapanPrefectures() {
  return (
    <LorePageLayout>
      <div className="page-container">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
          <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
          <span>/</span>
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
          <span>/</span>
          <span style={{ color: ACCENT }}>NEO-Japan's Prefectures</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1
            className="font-serif text-3xl sm:text-4xl mb-2"
            style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
          >
            🗾 NEO-Japan's Prefectures
          </h1>
        </div>

        {/* Image Placeholder — Map */}
        <div
          className="rounded-xl flex items-center justify-center mb-10 border-2 border-dashed"
          style={{ borderColor: `${ACCENT}44`, background: 'rgba(0,229,255,0.04)', minHeight: '220px' }}
        >
          <div className="text-center px-4">
            <p className="text-2xl mb-2">🗺️</p>
            <p className="text-sm font-mono" style={{ color: ACCENT }}>[ Map of Neo-Japan ]</p>
            <p className="text-xs text-text-faint mt-1">Image Placeholder</p>
          </div>
        </div>

        {/* ── Traditional Prefectures ── */}
        <SectionHeading id="traditional-prefectures">Traditional Prefectures</SectionHeading>
        <p className="text-base text-text-muted leading-relaxed mb-6">
          These are the standard political divisions of Neo-Japan, similar to our Earth but rearranged across the expanded landmass:
        </p>

        <PrefectureCard
          emoji="🥷"
          name="Ninjin Prefecture"
          color="#a78bfa"
          description="This is a new prefecture where the NYAQ is established, alongside with the YHCA."
          extra={
            <p className="text-xs text-text-faint mt-2">
              See:{' '}
              <Link to="/world-lore-and-timeline/the-world-of-neo-japan/ninja-yokai-association-quarters" style={{ color: '#7ab8f5' }}>NYAQ</Link>
              {' '}&amp;{' '}
              <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yhca-yokaihuman-coalition-act" style={{ color: '#7ab8f5' }}>YHCA</Link>
            </p>
          }
        />

        <PrefectureCard
          emoji="❄️"
          name="Hokkaido"
          color="#67e8f9"
          description="The northernmost island, largely unchanged in structure but slightly expanded in size."
        />

        <PrefectureCard
          emoji="🌾"
          name="Tohoku Region"
          color="#fde68a"
          description="A vast yellow-coded area in the northern mainland, encompassing prefectures like Aomori, Akita, Iwate, Miyagi, Yamagata, and Fukushima."
        />

        <PrefectureCard
          emoji="🏙️"
          name="Kanto Region"
          color="#fb923c"
          description="The orange-coded central-eastern region containing major urban centers including Tokyo, Kanagawa, Saitama, Chiba, Gunma, Tochigi, and Ibaraki. Due to continental expansion, these prefectures have shifted positions compared to our Earth."
          cities="Hashi, Naomi, Rosa, Tenka, & Usa"
        />

        <PrefectureCard
          emoji="🌊"
          name="Chubu Region"
          color="#6ee7b7"
          description="The mint/cyan central region, home to prefectures such as Niigata, Toyama, Ishikawa, Fukui, Nagano, Gifu, Shizuoka, Aichi, and Yamanashi."
          cities="Raoki, Yue, Yae"
        />

        <PrefectureCard
          emoji="🏯"
          name="Kansai Region"
          color="#c084fc"
          description="The purple central-western region including Osaka, Kyoto, Hyogo, Shiga, Nara, Wakayama, and Mie. The cities are rearranged slightly."
        />

        <PrefectureCard
          emoji="🌅"
          name="Chugoku Region"
          color="#a5b4fc"
          description="The lavender western region containing Tottori, Shimane, Okayama, Hiroshima, and Yamaguchi."
          cities="Takahashi"
        />

        <PrefectureCard
          emoji="🌸"
          name="Shikoku Region"
          color="#f9a8d4"
          description="The pink southern island region with its four prefectures: Tokushima, Kagawa, Ehime, and Kochi."
        />

        <PrefectureCard
          emoji="🌋"
          name="Kyushu Region"
          color="#9ca3af"
          description="The gray southwestern region encompassing Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Okinawa, and Kagoshima."
          cities="Natsuya is a new island that rivals Okinawa"
        />

        {/* ── Spiritual Landscapes ── */}
        <SectionHeading id="spiritual-landscapes">Spiritual Landscapes and New Regions</SectionHeading>
        <p className="text-base text-text-muted leading-relaxed mb-6">
          These areas exist outside traditional prefecture governance and hold spiritual or supernatural significance:
        </p>

        {/* Hanami Region */}
        <div className="rounded-xl p-5 mb-4 border" style={{ borderColor: '#f472b655', background: '#f472b608' }}>
          <p className="font-serif text-xl font-bold mb-1" style={{ color: '#f472b6' }}>🌸 Hanami Region</p>
          <p className="text-xs italic text-text-faint mb-3">Bright cyan zones scattered throughout northern and eastern Neo-Japan</p>
          <p className="text-sm text-text-muted leading-relaxed">
            The Hanami Region is not a political prefecture but rather a collective name for sacred zones marked by local shrines, altars, and spiritual sites. These areas are scattered across multiple prefectures, creating a network of holy grounds. The Hanami Region is recognized by the presence of ancient cherry blossom trees that bloom year-round due to spiritual energy, and each site is protected by local shrine keepers and spirits.
          </p>
        </div>

        {/* Otohashi Yama */}
        <div className="rounded-xl p-5 mb-4 border" style={{ borderColor: '#4ade8055', background: '#4ade8008' }}>
          <p className="font-serif text-xl font-bold mb-1" style={{ color: '#4ade80' }}>⛰️ Otohashi Yama</p>
          <p className="text-xs italic text-text-faint mb-3">Dark green mountainous region in the northwest</p>
          <p className="text-sm text-text-muted leading-relaxed">
            A newly formed mountain range that emerged due to Earth Yokai activity. The name translates to "Sound Bridge Mountains," so called because the wind through the peaks creates ethereal musical tones. This region is sparsely populated and known for its dangerous terrain and strong spiritual presence.
          </p>
        </div>

        {/* Mizuki Shoto */}
        <div className="rounded-xl p-5 mb-4 border" style={{ borderColor: '#38bdf855', background: '#38bdf808' }}>
          <p className="font-serif text-xl font-bold mb-1" style={{ color: '#38bdf8' }}>🧜‍♀️ Mizuki Shoto</p>
          <p className="text-xs italic text-text-faint mb-3">Bright blue island chain in the southeast</p>
          <p className="text-sm text-text-muted leading-relaxed">
            An archipelago founded and shaped by a powerful Mermaid Spirit centuries ago. These islands did not exist in our Earth's timeline and are considered sacred waters. The Mizuki Shoto is home to unique marine life and serves as a gateway between the human world and oceanic spirit realms. The region has a small human population that lives in harmony with water spirits.
          </p>
        </div>

        {/* Sora no Oka */}
        <div className="rounded-xl p-5 mb-4 border" style={{ borderColor: '#67e8f955', background: '#67e8f908' }}>
          <p className="font-serif text-xl font-bold mb-1" style={{ color: '#67e8f9' }}>🏔️ Sora no Oka</p>
          <p className="text-xs italic text-text-faint mb-3">Mint green region on the western coast</p>
          <p className="text-sm text-text-muted leading-relaxed mb-3">
            A highland plateau region that emerged on the western seaboard. Sora no Oka, meaning "Sky Hills," is characterized by high-altitude plains and is known for its clear skies and connection to wind and sky spirits.
          </p>
          <div
            className="rounded-lg p-3 text-sm text-text-muted"
            style={{ borderLeft: `3px solid #67e8f9`, background: 'rgba(103,232,249,0.06)' }}
          >
            <p className="font-semibold mb-1" style={{ color: '#67e8f9' }}>─────⊰ Fuka-sa no Oka</p>
            <p>The{' '}
              <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-association-recovery-center" style={{ color: '#7ab8f5' }}>YARC</Link>
              {' '}resides on some hills in the southern part of Fuka-sa that oversees Okayama and Tottori in the Chugaku Region.
            </p>
          </div>
        </div>

        {/* Ryuu no Shima */}
        <div className="rounded-xl p-5 mb-4 border" style={{ borderColor: '#f8717155', background: '#f8717108' }}>
          <p className="font-serif text-xl font-bold mb-1" style={{ color: '#f87171' }}>🐉 Ryū no Shima</p>
          <p className="text-xs italic text-text-faint mb-3">Red/coral island in the southwest</p>
          <p className="text-sm text-text-muted leading-relaxed">
            Translating to "Dragon Island," this landmass is a volcanic island formed by the activity of dragon-type Yokai. The island is largely uninhabited by humans due to its active volcanic nature and serves as a territory for powerful fire and earth spirits. Ancient legends speak of dragons still dwelling in its mountains.
          </p>
        </div>

        {/* Tenshi Shima */}
        <div className="rounded-xl p-5 mb-8 border" style={{ borderColor: '#e2e8f055', background: '#e2e8f008' }}>
          <p className="font-serif text-xl font-bold mb-1" style={{ color: '#e2e8f0' }}>👼 Tenshi Shima</p>
          <p className="text-xs italic text-text-faint mb-3">Small outlined region</p>
          <p className="text-sm text-text-muted leading-relaxed">
            Meaning "Angel Island," this is a mysterious and isolated region with connections to angelic beings. Little is publicly known about Tenshi Shima, as it remains restricted to most civilians and is protected by spiritual barriers.
          </p>
        </div>

        {/* ── Key Differences ── */}
        <SectionHeading id="key-differences">Key Differences from Our Earth</SectionHeading>

        <ul className="space-y-3 list-none ml-2 text-sm text-text-muted mb-6">
          <li>• <strong style={{ color: ACCENT }}>Continental Scale</strong>: Neo-Japan is approximately 40% larger than Japan in our timeline</li>
          <li>• <strong style={{ color: ACCENT }}>Geographic Repositioning</strong>: Major cities and prefectures have been shifted to accommodate new landmasses and spiritual zones</li>
          <li>• <strong style={{ color: ACCENT }}>New Islands</strong>: Multiple island chains have emerged, including Mizuki Shoto and Ryū no Shima</li>
          <li>• <strong style={{ color: ACCENT }}>Spiritual Zones</strong>: Areas like the Hanami Region exist as cultural-spiritual designations rather than political boundaries</li>
          <li>• <strong style={{ color: ACCENT }}>Increased Biodiversity</strong>: The expanded landmass and spiritual influence have created unique ecosystems not found in our timeline</li>
          <li>
            • <strong style={{ color: '#f87171' }}>The Hiroshima and Nagasaki Bombings</strong>{' '}
            <em style={{ color: '#f87171' }}>— Never happened.</em>
          </li>
          <li>• The entire world is inhabited by supernatural beings like yokai and such. It's not just confined to Neo-Japan.</li>
          <li>• Hatsune Miku and other popular Vocaloids are still active!</li>
        </ul>

        <SubHeading id="peaceful-wars">Peaceful Wars</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-2">
          Entertainment War of 2000 happened between China, London, America, and Neo-Japan.
        </p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-8">
          <li>• China got first place for insane performance and graphics</li>
          <li>• Neo-Japan got second place for immersive story telling</li>
          <li>• London and America tied for Music Storytelling</li>
        </ul>

        {/* ── Bottom Nav ── */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan/neo-japan-techno-geography" className="btn-neon-cyan text-sm px-4 py-2 rounded">
            ← Techno-Geography
          </Link>
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-citizens-of-neo-japan" className="btn-neon-purple text-sm px-4 py-2 rounded">
            Yokai Citizens →
          </Link>
        </div>

      </div>
    </LorePageLayout>
  );
}
