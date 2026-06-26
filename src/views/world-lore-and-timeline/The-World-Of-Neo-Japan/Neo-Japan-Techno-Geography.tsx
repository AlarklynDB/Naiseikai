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

export default function NeoJapanTechnoGeography() {
  return (
    <LorePageLayout>
      <div className="page-container">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
          <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
          <span>/</span>
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
          <span>/</span>
          <span style={{ color: ACCENT }}>NEO-Japan's Techno-Geography</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1
            className="font-serif text-3xl sm:text-4xl mb-2"
            style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
          >
            🗾 NEO-Japan's Techno-Geography
          </h1>
        </div>

        {/* ── A Different Earth ── */}
        <SectionHeading id="a-different-earth">A Different…..Earth</SectionHeading>

        <p className="text-base text-text-muted leading-relaxed mb-3">
          In the Naiseikai Universe, this is an Alternate Earth that differs from the Earth we know and love.
          But due to the significance of Yokai, Spirits, Humans and Angels, the size of Japan has increased because new landforms were made due to Earth Yokais inhabiting the continent.
        </p>
        <p className="text-base text-text-muted leading-relaxed mb-6">
          And no, this is not the Neolithic age. This is the Future of Japan in the year 2,100.
        </p>

        {/* Image Placeholder 1 */}
        <div
          className="rounded-xl flex items-center justify-center mb-8 border-2 border-dashed"
          style={{ borderColor: `${ACCENT}44`, background: 'rgba(0,229,255,0.04)', minHeight: '220px' }}
        >
          <div className="text-center px-4">
            <p className="text-2xl mb-2">🗺️</p>
            <p className="text-sm font-mono" style={{ color: ACCENT }}>[ Map of Neo-Japan ]</p>
            <p className="text-xs text-text-faint mt-1">Image Placeholder</p>
          </div>
        </div>

        {/* ── Overview ── */}
        <SectionHeading id="overview">Overview of Neo-Japan's Techno-Geography</SectionHeading>

        <p className="text-base text-text-muted leading-relaxed mb-3">
          Neo-Japan is significantly larger than the Japan of our Earth due to spiritual and supernatural influences. Earth Yokais, through their connection to the land, have caused tectonic shifts and the formation of new landmasses over centuries. The continent now spans a greater area with additional islands, mountain ranges, and coastal regions that did not exist in our timeline.
        </p>
        <p className="text-base text-text-muted leading-relaxed mb-3">
          While many familiar prefectures and cities still exist, their locations have been adjusted to accommodate the expanded geography. Some regions have been relocated entirely, and new spiritual zones have emerged that operate outside traditional prefecture boundaries.
        </p>
        <p className="text-base text-text-muted leading-relaxed mb-6">
          Earth and Water Yokai work together to build and maintain this technology for the benefit of all citizens. Their magic is woven into every component of the floating system, making it a true fusion of supernatural power and advanced engineering.
        </p>

        <SubHeading id="tech-production">Technology Production Duration</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-2">
          All of the technology that was built for Neo-Japan happened in the year of 1256 – 1275 AD.
        </p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-6">
          <li>• Which is Year 5 - 1599, even when new supernatural beings came down.</li>
          <li>• The age of Neo-Japan started in 2000, even with new technological innovations coming.</li>
        </ul>

        <SubHeading id="neo-japan-floats">Neo-Japan "Floats" on Water</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-3">
          Due to a lot of inhabitants of Earth and Water yokai, they have agreed to help all citizens alike by using their magic to turn the entirety of Japan's landmass TO FLOAT steadily on the water! So that means there are no longer earthquakes (albeit minor ones (underwater volcanoes)) and tsunamis! The entirety Neo-Japan <em>technically floats</em> because under its giant mass, there are strong earth-like pillars that lift it above waters.
        </p>
        <div
          className="rounded-xl p-4 mb-3 text-sm text-text-muted leading-relaxed"
          style={{ borderLeft: `4px solid ${ACCENT}`, background: 'rgba(0,229,255,0.04)' }}
        >
          The stabilization is very smooth and it will not affect citizen life. All ocean internet cables run under this floating landmass. A very high neural network! If a tsunami hits the cliff-side walls of mass, the energy from that will be converted into clean renewable energy, which can power the whole of Neo-Japan for centuries if not more!
          <ul className="mt-2 space-y-1 list-none">
            <li>• There are rumors of an underwater yokai city somewhere under the floating landmass of Neo-Japan, but no one knows where it is. Mizuki Shoto's Founder keeps it a secret.</li>
          </ul>
        </div>

        <SubHeading id="ports-beaches">But what about the Ports and the Beaches?</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-6">
          They are still there! Because of the landmass that is raised significantly, the beaches are at a lower elevation due to the help of all the Earth Yokais magic. There's a huge elevator-like slide that goes up and down along the walls of the cliffsides! This allows you to go down and enjoy the beach life. Shops are indented into the walls of the landmass which are tsunami-proof if it ever happens.
        </p>

        <SubHeading id="daily-life">Daily Life</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-6">
          The technology doesn't really interfere much with culture and interaction. In fact, it just enhances the atmosphere in the entirety of Neo-Japan. High developed places like Kyoto, Tokyo, Osaka…etc still have those ridiculous amounts of billboards for ads and campaigns, not just brands too. Anime trailers are also broadcasted sometimes. The biggest #1 anime hit in Neo-Japan is <em style={{ color: ACCENT }}>Mob Psycho 100</em> &gt;:)
        </p>

        <SubHeading id="transportation">Transportation</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-2">
          Transportation is an important thing in Neo-Japan. Maglev Trains are still here. But to get to islands like Hokkaido, Mizuki Shoto, Ryu no Shima, Kyushu Region, Shikoku Region and Tenshi Shima there are…!
        </p>
        <ul className="space-y-2 list-none ml-2 text-sm text-text-muted mb-6">
          <li>• <strong style={{ color: ACCENT }}>Sky Bridge Trains</strong> — They still use the Maglev Trains, but instead they are called Maglev Air.</li>
          <li>• <strong style={{ color: ACCENT }}>Maglev-Seas</strong> — Also a thing! But these are only for Magnoid Tourism. They run along the Network Cables which doubles as a rail system.</li>
          <li>• Walking is still a nationwide thing. But to get to places faster, people like to roller-skate!</li>
        </ul>

        <SubHeading id="attractions">Attractions / Wonders</SubHeading>
        <ul className="space-y-2 list-none ml-2 text-sm text-text-muted mb-6">
          <li>• <strong style={{ color: ACCENT }}>Mount Fuji</strong> is still the highest mountain!</li>
          <li>• A new waterfall by the name <strong style={{ color: ACCENT }}>Sora no Taki</strong> exists within the <strong style={{ color: ACCENT }}>Sora no Oka Region</strong>. It is the biggest, widest, and tallest natural formation to exist in Neo-Japan. It outranks Niagara Falls and Paradise Falls.</li>
          <li>• <strong style={{ color: ACCENT }}>Ryuu no Kyuuden</strong> — It is open to the public and it is the first ever Dragon Palace to exist. Dragon Yokais are pretty open and friendly! The architecture inside is extravagant. Carved out of pristine stone-like gold and amber materials.</li>
          <li>• <strong style={{ color: ACCENT }}>The Otohashi Bamboosa Flower</strong> — it stands high and mighty on the little island next to the Otohashi Yama Range.</li>
          <li>• <strong style={{ color: ACCENT }}>Mizuki Shoto Bioluminescent Tree</strong> — unlike other bioluminescent phenomena around the world, this Tree that stands on the biggest island archipelago glows a very pretty purple and aqua blue color at night. It happens for one day, specifically on August 12th for each year. The remaining months allows this tree to soak up the rays of energy from the sun before it glows again.</li>
        </ul>

        {/* Image Placeholder 2 */}
        <div
          className="rounded-xl flex items-center justify-center mb-8 border-2 border-dashed"
          style={{ borderColor: `${ACCENT}44`, background: 'rgba(0,229,255,0.04)', minHeight: '220px' }}
        >
          <div className="text-center px-4">
            <p className="text-2xl mb-2">🏗️</p>
            <p className="text-sm font-mono" style={{ color: ACCENT }}>[ Floating Technology of NEO-Japan ]</p>
            <p className="text-xs text-text-faint mt-1">Image Placeholder</p>
          </div>
        </div>

        {/* ── Floating Technology ── */}
        <SectionHeading id="floating-technology">Floating Technology</SectionHeading>

        <p className="text-base text-text-muted leading-relaxed mb-4">
          Neo-Japan's floating landmass is supported by advanced technology and yokai magic working in harmony. These systems are used across ALL landforms of Neo-Japan to keep the continent stable and afloat.
        </p>

        <SubHeading id="ip-ratings">Ingress Protection Rating Labels</SubHeading>
        <p className="text-sm font-semibold mb-2" style={{ color: ACCENT }}>IP100 &amp; IK100 — Water and Shock Resistance</p>
        <ul className="space-y-2 list-none ml-2 text-sm text-text-muted mb-6">
          <li>• The technology used to keep Neo-Japan afloat has the highest waterproof rating, designated as <strong style={{ color: ACCENT }}>IP100</strong> (essentially IP68, but significantly stronger). This ensures all floating devices can withstand extreme water pressure and force without failure.</li>
          <li>• <strong style={{ color: ACCENT }}>IK100</strong> is for shock resistance.</li>
          <li>• <strong style={{ color: ACCENT }}>IPC200</strong> — Ingress Corrosive Protection 200 — can withstand any corrosion and acidity to the max.</li>
          <li>• <strong style={{ color: ACCENT }}>IEPR 50</strong> — Ingress Electric-Protection Resistance 50 (Max) — The streets are coated with rubber latex and earthy materials which negates random transformers from exploding electricity onto the streets. It recycles the electricity back into the ground and into the system. Renewable energy!</li>
        </ul>

        <SubHeading id="earth-pillars">Earth Pillars / Mounts</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-6">
          Massive earth-like pillars extend from the underside of the landmass down into the ocean floor. These pillars, created and maintained through Earth Yokai magic, serve as the primary structural support for the entire floating continent. They are incredibly stable and anchor Neo-Japan in place.
        </p>

        {/* Image Placeholder 3 */}
        <div
          className="rounded-xl flex items-center justify-center mb-8 border-2 border-dashed"
          style={{ borderColor: `${ACCENT}44`, background: 'rgba(0,229,255,0.04)', minHeight: '220px' }}
        >
          <div className="text-center px-4">
            <p className="text-2xl mb-2">🧲</p>
            <p className="text-sm font-mono" style={{ color: ACCENT }}>[ Magnoids of NEO-Japan ]</p>
            <p className="text-xs text-text-faint mt-1">Image Placeholder</p>
          </div>
        </div>

        {/* ── Magnoids ── */}
        <SectionHeading id="magnetic-suspension">Magnetic Suspension via Superconductors</SectionHeading>
        <p className="text-sm font-semibold mb-3" style={{ color: ACCENT }}>Also known as Magnoids</p>

        <p className="text-base text-text-muted leading-relaxed mb-4">
          The landmass utilizes magnetic suspension technology powered by superconductors. This system is incredibly stable — so much so that citizens will not notice any movement or vibration in their daily lives. The suspension also absorbs vibrations from small earthquakes and tremors, converting that kinetic energy along with tsunami energy into eco-friendly electricity. Think of it like frictionless motion on a superconductor magnet with dry ice inside those giant magnoids.
        </p>
        <ul className="space-y-3 list-none ml-2 text-sm text-text-muted mb-6">
          <li>
            • <strong style={{ color: ACCENT }}>If a single Magnoid turns Offline…</strong> All of the Magnoids are a single hivemind. They operate individually even though they are linked together. If one becomes offline, the rest stay up. It takes about a team of 100 to go down to fix it!
          </li>
          <li>
            • <strong style={{ color: ACCENT }}>A Weird Phenomenon</strong> — The magnetic suspension waves, <em>although invisible,</em> can be seen and felt under the water (because of how water reacts to magnetic waves). This does not harm other technology like scuba diving gear when fixing components. In fact, when these fields are met, they sync up! Gives off a very mute but soft humming tone in the 3,523hz range.
            <ul className="mt-1 ml-4 list-none">
              <li>— The effects might remind you of water reacting to soundwaves!</li>
            </ul>
          </li>
        </ul>

        <SubHeading id="magnoid-sizes">Magnoid Levitators Size</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-2">
          They vary depending on the size of each island, plate, or landmass.
        </p>
        <p className="text-sm text-text-muted mb-3">
          Magnoids stop unnatural phenomenon — they help support the whole landmass up in the waters which prevents massive sinkholes from happening.
        </p>

        <p className="text-sm font-semibold mb-2" style={{ color: ACCENT }}>Island Sized Magnoids like:</p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
          <li>• <strong style={{ color: ACCENT }}>Hokkaido</strong> — Mountains here are heavy. A super strong force is needed.</li>
          <li>• <strong style={{ color: ACCENT }}>Mizuki Shoto</strong> — The Biolum Tree is HEAVY. Needs support with a lot of electromagnetic force.</li>
          <li>• <strong style={{ color: ACCENT }}>Tenshi Shima</strong> — not necessarily needed, but just in case. This place is pretty chill.</li>
          <li>• <strong style={{ color: ACCENT }}>Ryuu no Shima</strong> — needs a giant one. The volcano here often causes small eruptions which is enough to shake it.</li>
        </ul>

        <SubHeading id="magnoids-mainland">Magnoids in Mainland NEO-Japan</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-3">
          The size is at least the size of Naomi. The Levitators are placed strategically where all the roads cross into one point and also at prefecture/region edges.
        </p>

        <p className="text-sm font-semibold mb-1" style={{ color: ACCENT }}>Dead Center Road Crossings (Prefecture Sizes Combined):</p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
          <li>• Ninjin, Fukushima, Gunma, Nigata, and Tochigi</li>
          <li>• Tokyo, Tenka, Naomi, Usa — Also extends to the Hashi Prefecture</li>
          <li>• Akita, Iwate, Yamagata &amp; Miyagi</li>
          <li>• Tottori, Shimane, &amp; Hyogo</li>
          <li>• Osaka, Nara, &amp; Wakayama</li>
        </ul>

        <p className="text-sm font-semibold mb-1" style={{ color: ACCENT }}>Prefecture Centers:</p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
          <li>• <strong style={{ color: ACCENT }}>Ninjin Magnoid</strong> — same magnoid that takes up Dead Center Road Crossings</li>
          <li>• <strong style={{ color: ACCENT }}>Gifu Magnoid</strong> — Takes up Ishikawa, Nagano, Fukui, &amp; Aichi</li>
          <li>• <strong style={{ color: ACCENT }}>Kanagawa Magnoid</strong> — Takes up Saitama, Chiba and Shizuoka</li>
          <li>• <strong style={{ color: ACCENT }}>Takahashi Magnoid</strong> — Takes up Takahashi, Okayama, Yamaguchi and Hiroshima</li>
        </ul>

        <p className="text-sm font-semibold mb-1" style={{ color: ACCENT }}>Sora no Oka:</p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
          <li>• Northern Most Region</li>
          <li>• Center most region</li>
          <li>• Southern Most Region (just pass Tottori)</li>
        </ul>

        <p className="text-sm font-semibold mb-1" style={{ color: ACCENT }}>Otohashi Yama:</p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
          <li>• Only has three Magnoid Points (east to west) to the border of Aomori and Akita</li>
        </ul>

        <p className="text-sm font-semibold mb-1" style={{ color: ACCENT }}>Prefecture Edges in Neo-Japan:</p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
          <li>• Yaeyue Magnoid</li>
          <li>• The Hanami Region
            <ul className="ml-4 mt-1 space-y-1 list-none">
              <li>— Yaofuya Magnoid — Yaoshi and Fuyatsu</li>
              <li>— Hayatsuna Magnoid — Hayami and Setsuna</li>
            </ul>
          </li>
          <li>• Hashi Magnoid</li>
          <li>• Yamanashi Magnoid</li>
        </ul>

        <p className="text-sm font-semibold mb-1" style={{ color: ACCENT }}>Single Magnoids:</p>
        <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-8">
          <li>• <strong style={{ color: ACCENT }}>Ryu no Shima</strong> — takes up the whole size of the island</li>
          <li>• <strong style={{ color: ACCENT }}>Tenshi Shima</strong> — also the whole island size</li>
          <li>• <strong style={{ color: ACCENT }}>Kyushu Region</strong> — Technically a single magnoid, since Okinawa and Natsuya are in the same landmass (islands sprouting out of the Kyushu Plate)</li>
          <li>• <strong style={{ color: ACCENT }}>Hokkaido Magnoid</strong> — same size as the prefecture itself.</li>
          <li>• <strong style={{ color: ACCENT }}>Hanami Region</strong> — Technically a single magnoid, since Kanko, Kihara, and Niaji are in the same landmass plate</li>
          <li>• <strong style={{ color: ACCENT }}>Mizuki Shoto (Archipelago)</strong> — Technically a single magnoid, since all its lands are in the same landmass plate</li>
          <li>• <strong style={{ color: ACCENT }}>Shikoku Region</strong> — A Single Magnoid that supports the whole island landmass</li>
        </ul>

        {/* ── Systems of Neo-Japan ── */}
        <SectionHeading id="systems">Systems of Neo-Japan</SectionHeading>

        <SubHeading id="network-system">Network System</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-3">
          Underneath all these tech like systems are Network Cable Systems. It stretches out and carves the shape of the whole of Neo-Japan underwater as a shape with interconnecting intersections and many network-linked systems.
        </p>
        <ul className="space-y-2 list-none ml-2 text-sm text-text-muted mb-6">
          <li>• Neo-Japan runs on <strong style={{ color: ACCENT }}>12G under 9Pbps</strong> (9,000 Tbs).</li>
          <li>• Neo-Japan has up to <strong style={{ color: ACCENT }}>12 Exabytes (EB)</strong> of storage.
            <ul className="ml-4 mt-1 space-y-1 list-none">
              <li>— The AI used for the Water Filtration System requires at least 4 EBs, since they need a lot of processing power to determine toxins in water.</li>
              <li>— The rest are for technology storage along with infrastructure data plans and energy storage.</li>
            </ul>
          </li>
          <li>• Has its own Mobile Network named <strong style={{ color: ACCENT }}>"REI-3"</strong> (which is also a name for their vocaloid mascot).</li>
        </ul>

        <SubHeading id="aqueducts">Aqueducts System</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-3">
          Integrated aqueducts run throughout the underside of the floating landmass, serving multiple critical functions:
        </p>
        <ul className="space-y-3 list-none ml-2 text-sm text-text-muted mb-6">
          <li>• <strong style={{ color: ACCENT }}>Water Filtration</strong>: Purifying ocean water for civilian use!
            <ul className="ml-4 mt-1 space-y-1 list-none">
              <li>— <strong style={{ color: ACCENT }}>Drinkable Water Supply</strong>: Providing clean water to all regions of Neo-Japan!</li>
              <li>— <strong style={{ color: ACCENT }}>AI Filtering Systems</strong>: Unlike generative systems, the AI systems here in Neo-Japan help filter out dirty water and purify them into clean drinkable water. They are effective when it comes to figuring out toxins or very salty saline that have been mixed with the ocean water. It doesn't use chlorine as an artificial adhesive for tap water. Instead, <strong style={{ color: ACCENT }}>Hydrogen-Mint</strong> (a new chemical substance) is used in tap water which gives it a cool healthy feel.</li>
            </ul>
          </li>
          <li>• <strong style={{ color: ACCENT }}>Energy Generation</strong>: Harnessing water flow for power! Even from tsunamis and small quakes at the ocean floor!</li>
          <li>• <strong style={{ color: ACCENT }}>Waste is produced into Energy</strong> — Ever wonder where fecal matter goes? Now you know. NEO-Japan's water and oceans (mainland, which includes lakes/rivers) are THE CLEANEST in the whole of Naiseikai.</li>
        </ul>

        <SubHeading id="cliffside-safety">Cliffside Safety Systems</SubHeading>
        <p className="text-base text-text-muted leading-relaxed mb-3">
          The cliffsides that connect the elevated landmass to the beaches below are equipped with advanced safety features. Almost ALL of these cliffsides have these systems:
        </p>
        <ul className="space-y-2 list-none ml-2 text-sm text-text-muted mb-8">
          <li>• <strong style={{ color: ACCENT }}>Embedded Underground Stairs</strong>: Hidden stairway systems built into either end of the cliff walls.</li>
          <li>• <strong style={{ color: ACCENT }}>Emergency Metal Gates</strong>: In case a tsunami hits, massive metal gates will slide down to seal off access points and prevent citizen harm.</li>
          <li>• <strong style={{ color: ACCENT }}>Super Large Escalator</strong>: At the end of the stair systems, a large escalator takes citizens up to the surface level! There are either escalators, elevators, or hydraulic systems that can make upwards travel smooth without any repercussions.</li>
        </ul>

        {/* ── Bottom Nav ── */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="btn-neon-cyan text-sm px-4 py-2 rounded">
            ← The World of Neo-Japan
          </Link>
          <Link to="/world-lore-and-timeline/the-world-of-neo-japan/neo-japan-prefectures" className="btn-neon-purple text-sm px-4 py-2 rounded">
            Neo-Japan Prefectures →
          </Link>
        </div>

      </div>
    </LorePageLayout>
  );
}
