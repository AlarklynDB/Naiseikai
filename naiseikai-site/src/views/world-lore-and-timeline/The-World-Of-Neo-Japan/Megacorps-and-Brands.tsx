import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout'

const ACCENT = '#a78bfa';

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id ?? (typeof children === 'string' ? children.toLowerCase().replace(/&amp;/g, 'and').replace(/[&]/g, 'and').replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-'): undefined)}
      className="font-serif text-2xl font-bold mt-10 mb-4"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}

function BrandCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border border-border rounded-xl bg-surface p-5 mb-4">
      <p className="text-sm font-semibold mb-3" style={{ color: ACCENT }}>─────⊰ {label}</p>
      <div className="text-sm text-text-muted leading-relaxed space-y-1">{children}</div>
    </div>
  );
}

export default function MegacorpsAndBrands() {
  return (
    <LorePageLayout>
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span style={{ color: ACCENT }}>Megacorps &amp; Brands</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1
          className="font-serif text-3xl sm:text-4xl mb-2"
          style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
        >
          🏬 Megacorps and Brands
        </h1>
        <p className="text-sm text-text-faint">Megacorps, Products, Consumerism and Brands within the Naiseikai Universe!</p>
      </div>

      {/* ── Beer & Alcohol ── */}
      <SectionHeading>🍺 Beer &amp; Alcohol Brands</SectionHeading>

      <BrandCard label="Sapporo Beer">
        <p>Founded in 1876, Sapporo remains one of the most iconic beer brands in Neo-Japan.</p>
        <p>Known for their crisp, clean lager that pairs perfectly with any meal.</p>
        <p>Their flagship product, Sapporo Premium Beer, is exported worldwide and considered a cultural icon.</p>
        <p>In 2100, Sapporo has expanded to include craft beer lines influenced by yokai brewing techniques, creating unique flavors infused with spiritual energy.</p>
        <p>Headquarters: Hokkaido Prefecture</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "The Taste of Neo-Japan's North"</p>
      </BrandCard>

      <BrandCard label="Asahi Super Dry">
        <p>Launched in 1987, Asahi Super Dry revolutionized the beer industry with its "karakuchi" (dry) taste.</p>
        <p>By 2100, Asahi has become the primary rival to Orion Draft in the premium beer market.</p>
        <p>Known for their sleek silver cans and aggressive marketing campaigns featuring holographic billboards in Tokyo and Osaka.</p>
        <p>Asahi has developed a line of "temperature-responsive" beers that change flavor profiles based on drinking temperature.</p>
        <p>Headquarters: Tokyo Prefecture</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "Dry, Sharp, Unmatched"</p>
      </BrandCard>

      <BrandCard label="Orion Draft">
        <p>Originally from Okinawa, Orion Draft has risen to become Asahi's biggest competitor.</p>
        <p>Known for their tropical, refreshing taste that captures the essence of island life.</p>
        <p>By 2100, Orion has expanded massively throughout the Kyushu Region and Natsuya Island.</p>
        <p>Their limited edition "Moonlight Orion" sake-beer hybrid is a cultural phenomenon, released only during full moons.</p>
        <p>Headquarters: Okinawa, Kyushu Region</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "Taste the Islands, Feel the Breeze"</p>
      </BrandCard>

      <BrandCard label="Kyoto Brewing">
        <p>A historic brewing company that has maintained traditional sake-making techniques for centuries.</p>
        <p>By 2100, Kyoto Brewing is renowned for blending ancient methods with modern technology.</p>
        <p>Their premium sake lines are aged in yokai-blessed cedar barrels, giving them supernatural depth of flavor.</p>
        <p>Kyoto Brewing sponsors major cultural festivals and shrine ceremonies throughout Neo-Japan.</p>
        <p>Their "Golden Pavilion" sake is considered the finest in all of Neo-Japan, often gifted to foreign dignitaries.</p>
        <p>Headquarters: Kyoto Prefecture</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "Tradition Perfected"</p>
      </BrandCard>

      {/* ── Fashion & Retail ── */}
      <SectionHeading>👕 Fashion &amp; Retail Brands</SectionHeading>

      <BrandCard label="UNIQOLO">
        <p>The #1 clothing retail store in Neo-Japan, UNIQOLO dominates the fast-fashion market.</p>
        <p>Founded as Uniqlo in 1949, the brand rebranded to UNIQOLO in 2087 after a major corporate restructuring.</p>
        <p>Known for affordable, high-quality basics and innovative fabric technology.</p>
        <p>By 2100, UNIQOLO has pioneered "adaptive clothing" that adjusts to weather conditions using nano-fiber technology.</p>
        <p>Their HeatTech and AIRism lines have evolved to include yokai-engineered materials that regulate body temperature perfectly.</p>
        <p>UNIQOLO stores are massive multi-floor retail experiences found in every major city.</p>
        <p>The brand collaborates regularly with anime franchises, creating limited-edition collections that sell out within hours.</p>
        <p>Headquarters: Tokyo Prefecture</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "Life Wear for Everyone"</p>
      </BrandCard>

      <BrandCard label="Muji (無印良品)">
        <p>The #1 stationary store in Neo-Japan, though they offer much more than just stationary.</p>
        <p>Known for their minimalist, no-brand philosophy ("Muji" literally means "no brand").</p>
        <p>By 2100, Muji has become the gold standard for simple, functional design.</p>
        <p>Their product range includes stationary, home goods, furniture, clothing, and even pre-fabricated tiny homes.</p>
        <p>Muji's "Eco-Paper" line uses 100% recycled materials processed through water yokai purification systems.</p>
        <p>Their stores maintain a zen-like atmosphere with natural wood fixtures and soft lighting.</p>
        <p>Muji collaborates with spiritual practitioners to ensure all products have "good energy" and promote mindfulness.</p>
        <p>Headquarters: Tokyo Prefecture</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "Simplicity in Everything"</p>
      </BrandCard>

      {/* ── Entertainment & Tech ── */}
      <SectionHeading>🎮 Entertainment &amp; Technology Brands</SectionHeading>

      <BrandCard label="SEGA">
        <p>After Nintendo's abolishment due to corporate greed in 2078, SEGA rose to become the #1 gaming company.</p>
        <p>SEGA acquired the rights to Sonic, Pac-Man, and even Mario, making them their official mascots.</p>
        <p>Known for actually caring about their fans and creating quality games without exploitative practices.</p>
        <p>By 2100, SEGA has pioneered full-dive VR gaming that uses spiritual energy to create hyper-realistic experiences.</p>
        <p>Their headquarters in Tokyo features a massive arcade museum celebrating gaming history.</p>
        <p>SEGA sponsors major esports tournaments and gaming festivals across Neo-Japan.</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "Games That Respect You"</p>
      </BrandCard>

      <BrandCard label="Pokémon Company">
        <p>Freed from Nintendo's control, Pokémon has flourished as an independent organization.</p>
        <p>Games still developed by Game Freak, but with complete creative freedom.</p>
        <p>By 2100, Pokémon has integrated yokai mythology into their creature designs, creating "Yokémon" variants.</p>
        <p>The franchise has expanded into theme parks, educational programs, and even yokai conservation efforts.</p>
        <p>Real-life "Pokémon Centers" serve as both retail stores and community hubs for trainers.</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "Catch Them All, Forever"</p>
      </BrandCard>

      {/* ── Automotive ── */}
      <SectionHeading>🚗 Automotive Brands</SectionHeading>

      <BrandCard label="Renaku Cars">
        <p>A revolutionary new car brand founded in 2089, specializing in fully autonomous vehicles.</p>
        <p>All Renaku vehicles feature advanced AI Street Recognition and Driving Pattern systems.</p>
        <p>The cars are completely safe, with zero accidents reported since their launch.</p>
        <p>Renaku vehicles use electromagnetic propulsion systems that sync with Neo-Japan's Magnoid Network.</p>
        <p>Their flagship model, the "Renaku Harmony," is a floating car that can travel both on roads and over water.</p>
        <p>All vehicles are powered by clean energy harvested from Neo-Japan's tsunami conversion systems.</p>
        <p>Headquarters: Naomi City, Kanto Region</p>
        <p className="italic" style={{ color: ACCENT }}>Slogan: "Drive Without Driving"</p>
      </BrandCard>

      <p className="text-sm text-text-muted mb-6">
        Other Car Brands like Toyota, Subaru, Nissan, Honda, Mazda, Mitsubishi, Suzuki…(etc) are still prominent.
      </p>

      {/* ── Animation Studios ── */}
      <SectionHeading>📺 Animation Studios</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Now-Popular Animation Studios in Neo-Japan! Even Chinese Studios are popular now.
      </p>

      <BrandCard label="Studio Lings">
        <p>A formerly lesser-known studio that rose to prominence after Mappa's bankruptcy.</p>
        <p>Specializes in high-quality slice-of-life anime with yokai themes.</p>
        <p>Known for treating their animators well and maintaining reasonable production schedules.</p>
      </BrandCard>

      <BrandCard label="Cloverworks">
        <p>Another studio that gained massive popularity in the 2090s.</p>
        <p>Creates visually stunning action anime and romantic comedies.</p>
        <p>Their adaptation quality is considered unmatched in the industry.</p>
      </BrandCard>

      <BrandCard label="Silver Link">
        <p>Renowned for their magical girl and fantasy series.</p>
        <p>By 2100, Silver Link has become the go-to studio for adapting light novels into anime.</p>
        <p>Their animation quality and attention to detail has earned them critical acclaim.</p>
      </BrandCard>

      <BrandCard label='Studio Bones | "Animation with Soul"'>
        <p>Founded in 1998, Studio Bones has maintained its reputation as one of the most consistent and high-quality animation studios. They have up to ten teams now. Bones A - J, each with their own unique niche.</p>
        <p>Known for their incredible action sequences, fluid animation, and faithful adaptations of manga and original works.</p>
        <p>By 2100, Studio Bones is considered a legendary studio that has survived multiple industry upheavals.</p>
        <p>Famous works include Mob Psycho 100 (which became the #1 anime hit in Neo-Japan (Ujuu-sama's favorite anime)), My Hero Academia, Fullmetal Alchemist, and countless others.</p>
        <p>The studio is renowned for their "Bones Quality" - a term used industry-wide to describe top-tier animation standards.</p>
        <p>Unlike many studios, Bones treats their staff exceptionally well, offering competitive pay and reasonable schedules.</p>
        <p>They pioneered the use of yokai spiritual energy to enhance animation fluidity, creating supernatural-level smooth motion.</p>
        <p>Their headquarters in Tokyo features cutting-edge animation technology combined with traditional hand-drawn techniques.</p>
        <p>Studio Bones collaborates with major music artists for their soundtracks, often featuring techno EDM J-Pop.</p>
      </BrandCard>

      <BrandCard label="IsekaiWORKs (Umbrella Studio)">
        <p>A new Studio that rose in 2060 that adapts isekai and action related works from mangas and light novels.</p>
        <p>Many studios under IsekaiWORKs include: Madhouse, A1 Pictures, and many more that adapt action paced manga.</p>
      </BrandCard>

      <div className="border border-border rounded-xl bg-surface p-5 mb-6">
        <p className="text-sm font-semibold mb-3" style={{ color: '#ff6b6b' }}>─────⊰ Abolished Studios</p>
        <ul className="space-y-1 list-none text-sm text-text-muted">
          <li>• Bandai Namco along with it's branches. Corporate greed.</li>
          <li>• Toei is fine though.</li>
          <li>• Mappa / JC Staff - bad hospitality and pay rate. Working conditions are not fair.</li>
          <li>• After the Backlash of OPM S3 done by JC Staff, Studio Bones picked it up.</li>
        </ul>
      </div>

      {/* ── Musical Artists ── */}
      <SectionHeading>🎵 Musical Artists</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Neo-Japan's music scene in 2100 is dominated by techno EDM J-Pop, but artists across all genres continue to thrive! These artists aren't just confined just to Neo-Japan. They are well known worldwide!
      </p>

      <BrandCard label="Ado">
        <p>The legendary vocalist who took the world by storm in the 2020s and never stopped.</p>
        <p>By 2100, Ado has become an immortal icon of Japanese music, known for her powerful, versatile voice that can shift from gentle ballads to explosive rock.</p>
        <p>Her hit song "Usseewa" is still covered by new generations of artists and remains a cultural anthem.</p>
        <p>In Neo-Japan, Ado collaborates with yokai musicians, creating hybrid performances that blend human and spiritual vocals.</p>
        <p>Her concerts feature holographic stage technology combined with live spiritual energy manifestations.</p>
        <p>Ado has released over 30 albums throughout her career and shows no signs of slowing down.</p>
        <p>Genre: Rock, Pop, Experimental</p>
        <p className="italic" style={{ color: ACCENT }}>Motto: "Sing What You Feel"</p>
      </BrandCard>

      <BrandCard label="YOASOBI">
        <p>The storytelling duo that revolutionized J-Pop by adapting novels into songs.</p>
        <p>Originally formed in 2019, YOASOBI has evolved into a multigenerational project with new vocalists joining Ayase's production legacy.</p>
        <p>By 2100, YOASOBI has pioneered "Narrative EDM" - techno tracks that tell complete stories within 3-5 minutes.</p>
        <p>Their song "Yoru ni Kakeru" is considered a timeless classic, taught in Neo-Japan music schools.</p>
        <p>YOASOBI collaborates with light novel authors and anime studios, creating theme songs that become instant hits.</p>
        <p>They've produced theme songs for over 200 anime series, including several Naiseikai Universe adaptations.</p>
        <p>Genre: Pop, EDM, Narrative Music</p>
        <p className="italic" style={{ color: ACCENT }}>Motto: "Every Song is a Story"</p>
      </BrandCard>

      <BrandCard label="EVE">
        <p>The multi-talented artist known for his unique voice, intricate compositions, and stunning music videos.</p>
        <p>By 2100, EVE has become a living legend in the techno EDM J-Pop scene.</p>
        <p>His songs seamlessly blend electronic beats with emotional storytelling and complex musical arrangements.</p>
        <p>EVE pioneered the use of AI-assisted composition tools that work in harmony with human creativity.</p>
        <p>His music videos are considered art pieces, often featuring avant-garde animation and yokai mythology.</p>
        <p>EVE's concerts are immersive experiences that combine music, visual art, and spiritual energy displays.</p>
        <p>He's known for his reclusive nature but explosive stage presence.</p>
        <p>Genre: Pop, EDM, Electronic, Alternative</p>
        <p className="italic" style={{ color: ACCENT }}>Motto: "Music Beyond Boundaries"</p>
      </BrandCard>

      <BrandCard label="Kenshi Yonezu">
        <p>One of the most influential artists of the 21st century, still creating groundbreaking music in 2100.</p>
        <p>Known for his deeply emotional lyrics, unique vocal style, and genre-defying compositions.</p>
        <p>By 2100, Yonezu has released over 40 studio albums and countless singles.</p>
        <p>His hit "Lemon" remains one of the most-streamed Japanese songs of all time, even after 80+ years.</p>
        <p>Yonezu collaborates with yokai artists to create music that transcends human perception, utilizing frequencies only spirits can fully appreciate.</p>
        <p>He's known for supporting emerging artists and frequently features up-and-coming vocalists in his work.</p>
        <p>His music videos are considered masterpieces of visual storytelling.</p>
        <p>Genre: Pop, Rock, Electronic, Experimental</p>
        <p className="italic" style={{ color: ACCENT }}>Motto: "Create From the Heart"</p>
      </BrandCard>

      <BrandCard label="ZUTOMAYO">
        <p>The mysterious music group led by the enigmatic ACAね (Acane).</p>
        <p>Known for their distinctive sound that blends rock, pop, and electronic elements.</p>
        <p>By 2100, ZUTOMAYO has maintained their mysterious image, with members rarely appearing in public.</p>
        <p>Their songs feature complex rhythms, catchy melodies, and cryptic lyrics that fans love to analyze.</p>
        <p>ZUTOMAYO pioneered "Phantom Stage" performances - concerts where the band performs behind dimensional barriers, visible but untouchable.</p>
        <p>Their music is popular among both humans and yokai, bridging the gap between worlds.</p>
        <p>The group has become a symbol of artistic freedom and refusal to conform to industry standards.</p>
        <p>Genre: Rock, Pop, Alternative, Electronic</p>
        <p className="italic" style={{ color: ACCENT }}>Motto: "Mystery in Melody"</p>
      </BrandCard>

      <BrandCard label="The Vocaloid Collective">
        <p>Hatsune Miku, Teto, Rin &amp; Len Kagamine….etc. Miku is considered a cultural ambassador of Neo-Japan, representing the fusion of technology and creativity.</p>
        <p>Hatsune Miku - The world's most famous virtual singer, still going strong after over 90 years.</p>
        <p>By 2100, Hatsune Miku has evolved beyond a simple voice synthesizer into a fully sentient AI performer.</p>
        <p>Miku collaborates with thousands of producers worldwide, releasing hundreds of new songs every year.</p>
        <p>Other Vocaloids like Kagamine Rin/Len, Megurine Luka, and KAITO continue to perform alongside her.</p>
        <p>The Vocaloid Collective holds massive holographic concerts that can be attended physically or through neural link.</p>
      </BrandCard>

      <BrandCard label="REI-3">
        <p>The first Vocaloid Brand and Icon of the REI-3 Network System of Japan.</p>
        <p>REI-3 serves a dual purpose: she is both Neo-Japan's mobile network brand mascot AND a fully functional Vocaloid performer.</p>
        <p>Created in 2045 as part of Neo-Japan's infrastructure modernization initiative.</p>
        <p>Her design embodies the fusion of technology and culture - her appearance features holographic elements and circuit-pattern motifs.</p>
        <p>As a network mascot, REI-3 appears in advertisements, public service announcements, and network status notifications across all of Neo-Japan.</p>
        <p>The REI-3 Network System runs on 12G technology at 9Pbps (9,000 Tbps), making it the fastest mobile network in the world.</p>
        <p>REI-3's voice bank is unique - it was developed using data from thousands of voice samples combined with yokai spiritual frequency resonance.</p>
        <p>Her songs often feature themes about connection, communication, and bridging distances - perfectly aligned with her role as a network icon.</p>
        <p>REI-3 collaborates frequently with Hatsune Miku and other Vocaloids, creating duets that become instant hits.</p>
        <p>Citizens of Neo-Japan feel a strong connection to REI-3 since she literally represents the network that connects them all.</p>
        <p>Her concerts are synchronized with network pulse data, creating visualizations of Neo-Japan's digital heartbeat in real-time.</p>
        <p>REI-3's character design was a collaborative effort between telecom engineers, Vocaloid producers, and yokai spirit advisors.</p>
        <p>She has become a symbol of Neo-Japan's technological advancement and cultural identity.</p>
        <p>Genre: Electronic, Pop, Techno EDM</p>
        <p className="italic" style={{ color: ACCENT }}>Motto: "Connecting Every Heart, Every Voice"</p>
      </BrandCard>

      {/* ── Composers ── */}
      <SectionHeading>🎼 Composers of Neo-Japan &amp; Global</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Renowned composers around the world that isn't just confined to Neo-Japan!
      </p>

      {[
        { name: 'Hans Zimmer', desc: "The legendary film composer whose work defined cinematic sound for over a century. By 2100, Zimmer's compositions are considered classical masterpieces taught in every music conservatory. His signature blend of orchestral and electronic elements influenced generations of composers, including many in Neo-Japan's anime and game industries." },
        { name: 'John Williams', desc: "The immortal maestro of film music, still composing at an extraordinary age. Williams' iconic themes (Star Wars, Indiana Jones, Harry Potter) remain cultural touchstones. His work pioneered the integration of leitmotifs in modern media, a technique now standard in anime scoring." },
        { name: 'KarasuETako', desc: 'The maestro of motifs and unique musical signatures! His channel on YouTube had blown up after his soundtrack, "Luxuria Temporis" became a sensation within the NoirMusic Academy Awards. His musical tones range from sweet, comedic, horror, warm, and nostalgic!' },
        { name: 'Joe Hisaishi', desc: "Studio Ghibli's legendary composer, whose works became synonymous with Japanese animation. By 2100, Hisaishi's compositions are performed in concert halls worldwide. His ability to capture emotion through melody revolutionized anime music and influenced countless Neo-Japan composers." },
        { name: 'Yuki Kajiura', desc: 'The queen of anime soundtracks, known for her ethereal vocals and genre-blending compositions. Her work on Fate, Madoka Magica, and countless other series defined the sound of modern anime. In 2100, her signature "Kajiura-go" fictional language is still used by composers worldwide.' },
        { name: 'Hiroyuki Sawano', desc: 'The master of epic, high-energy anime soundtracks. Sawano\'s explosive compositions for Attack on Titan, Kill la Kill, and many others created a new standard for action anime music. His "Sawano drop" technique became iconic in the industry.' },
        { name: 'Nobuo Uematsu', desc: "The father of modern game music, best known for his work on Final Fantasy. Uematsu proved that video game music could be as emotionally powerful as any film score. His compositions are performed by orchestras globally and considered classical works." },
        { name: 'Koji Kondo', desc: "Nintendo's legendary composer who created the most recognizable game melodies in history (Super Mario, The Legend of Zelda). Even after Nintendo's fall, Kondo's music lives on as cultural heritage, now preserved and celebrated by SEGA's music archives." },
        { name: 'Ramin Djawadi', desc: "The cinematic composer known for Game of Thrones and Westworld. Djawadi's work bridged film and television scoring, proving that TV soundtracks could rival films in scope and quality. His techniques influenced Neo-Japan's anime and streaming series composers." },
      ].map((c) => (
        <div key={c.name} className="border border-border rounded-xl bg-surface p-4 mb-3">
          <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>─────⊰ {c.name}</p>
          <p className="text-sm text-text-muted leading-relaxed">{c.desc}</p>
        </div>
      ))}

      {/* ── Bottom Nav ── */}
      <div className="flex justify-between mt-12 pt-6 border-t border-border">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/education-in-neo-japan" className="btn-neon-cyan text-sm px-4 py-2 rounded">
          ← Education
        </Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="btn-neon-purple text-sm px-4 py-2 rounded">
          The World of Neo-Japan →
        </Link>
      </div>

    </div>
    </LorePageLayout>
  );
}
