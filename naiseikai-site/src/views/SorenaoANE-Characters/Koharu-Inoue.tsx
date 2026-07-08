import { Link } from 'react-router-dom'

const ACCENT = '#d49fff'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/SorenaoAne-Nevertheless" className="hover:text-[#00e5ff] transition-colors">Nevertheless, You're Still My Sister!</Link>
      <span>/</span>
      <Link to="/titles/SorenaoAne-Nevertheless" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span style={{ color: ACCENT }}>Koharu Inoue</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-lg mb-4" style={{ color: ACCENT }}>{children}</h3>
  )
}

function IdentityCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
      <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
      <p className="text-sm text-text-muted">{value}</p>
    </div>
  )
}

function IdentityBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="neon-card p-5">
      <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>── {title}</p>
      <div className="text-sm text-text-muted leading-relaxed">{children}</div>
    </div>
  )
}

export default function KoharuInouePage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character · SorenaoANE</span>
          <h2 className="font-serif text-3xl mb-1" style={{ color: ACCENT }}>👥 Koharu Inoue</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <SectionTitle>Identity</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Koharu' },
              { label: 'Last Name', value: 'Inoue' },
              { label: 'Age', value: '23' },
              { label: 'Birthday', value: 'May 22nd, 2077' },
              { label: 'Yokai', value: 'Fire Flamingo' },
              { label: 'Height', value: "5'4" },
              { label: 'Gender', value: 'Female' },
              { label: 'Relation', value: "Cyllvia's GF" },
            ].map(({ label, value }) => (
              <IdentityCard key={label} label={label} value={value} />
            ))}
          </div>
        </div>

        <Divider />

        {/* Cast */}
        <div>
          <SectionTitle>Main Characters of SorenaoANE</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Asahi Nanako', path: '/titles/SorenaoAne-Nevertheless/Asahi-Nanako' },
              { name: 'Reiko Nanako', path: '/titles/SorenaoAne-Nevertheless/Reiko-Nozomi' },
              { name: 'Shion Nozomi', path: '/titles/SorenaoAne-Nevertheless/Shion-Nanako' },
              { name: 'Koharu Inoue', path: '/titles/SorenaoAne-Nevertheless/Koharu-Inoue', active: true },
              { name: 'Cyllvia April', path: '/titles/SorenaoAne-Nevertheless/Cyllvia-April' },
            ].map(({ name, path, active }) => (
              <Link
                key={name}
                to={path}
                className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-colors ${active ? 'border-[#d49fff] text-[#d49fff] bg-[rgba(212,159,255,0.1)]' : 'border-white/10 text-text-faint hover:border-[#d49fff] hover:text-[#d49fff]'}`}
              >
                {name}
              </Link>
            ))}
          </div>
          <p className="text-xs text-text-faint mt-3">
            Supporting Character / Cameo:{' '}
            <Link to="/titles/KarasuToNinja-TQCTN/Haruhi-Aoi" className="text-[#7ab8f5] hover:underline">
              Haruhi Aoi
            </Link>
          </p>
        </div>

        <Divider />

        {/* Backstory */}
        <div>
          <SectionTitle>Backstory</SectionTitle>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Koharu Inoue. She's the best friend of Reiko and goes to the same college. She's hot tempered but with a fierce and loyal heart. Koharu knows Reiko's younger sister, Asahi, as they were introduced once. She loves teaching children because her family is full of siblings, specifically younger and she grew fond of them. Discovering her innate skill of teaching, she wanted to become a teacher because this was something she liked. She aims to be a Teacher in Psychology and Biology because these were two topics she liked learning about.</p>
            <p>However, her friend Reiko, took on the mantle of being Asahi's only guardian, parent, caretaker, all while sacrificing everything for her younger sister. Koharu knows this much, even if Reiko didn't tell her. Koharu is also pretty open, to the fact that her loyalty shows, it becomes annoying. She is also quite intelligent.</p>
            <p>Koharu is friends with Shion and Cyllvia, along with Asahi too.</p>
          </div>
        </div>

        <Divider />

        {/* Yokai Heritage */}
        <div>
          <SectionTitle>Her Yokai Heritage</SectionTitle>
          <div className="callout">
            <p className="text-sm text-text-muted leading-relaxed">Koharu is a Fire Flamingo. Not much of her Yokai Heritage has been revealed and she keeps parts of it a secret. Reiko, Asahi, and Cyllvia know she is a Fire Flamingo, but, they still don't know the full extent of her yokai abilities.</p>
          </div>
        </div>

        <Divider />

        {/* Four Identities */}
        <div>
          <SectionTitle>The Four Identities</SectionTitle>
          <div className="space-y-4">
            <IdentityBlock title="The Social Self">
              <p>The hot-tempered best friend with a fierce and loyal heart. She is the college student who wants to be a teacher in Psychology and Biology. She is loud, protective, and honest to a fault. She snaps at injustice and slams textbooks on tables when someone insults her friends. She wears graphic hoodies, cargo pants, and sneakers.</p>
            </IdentityBlock>
            <IdentityBlock title="The Personal Self">
              <p>The future teacher who loves children because she grew up with younger siblings. She is patient with kids even when she has none for adults. She teases Cyllvia about her accent but holds her hand when nervous. She puts her coat on Reiko when she sees her shivering at a bus stop. She remembers every birthday of her friends but forgets her own. Acts like an actual big sister to Asahi.</p>
            </IdentityBlock>
            <IdentityBlock title="The Core Self">
              <p>The Fire Flamingo who keeps her yokai heritage partially secret. She knows Reiko, Asahi, and Cyllvia know she is a flamingo, but they do not know the full extent of her abilities. She is a brawler with a heart of gold. She is probably the most emotionally intelligent of the group, even if she expresses it through anger. She is dating Cyllvia and has been for a long time, but they hide it from Reiko.</p>
            </IdentityBlock>
            <IdentityBlock title="The Hidden Self">
              <p>She knows about Reiko's pills and suicide attempts. She has covered for Reiko more than once. She knows the bridge between the sisters is collapsing, not just widening. She is the one who checks in on Asahi even when it is awkward. She carries the fear that one day she will find Reiko too late. She is the life raft that nobody realizes is also taking on water.</p>
            </IdentityBlock>
          </div>
        </div>

        <Divider />

        {/* Visual Design */}
        <div>
          <SectionTitle>Visual Character Design — Age 23</SectionTitle>

          <div className="callout mb-5">
            <p className="text-sm text-text-muted italic">The kind of girl who slams her textbook on the table when someone insults her friend. A bit of a <strong className="text-text">yankee energy</strong>, but her hoodie sleeves are stained with <strong className="text-text">marker ink from kids she tutors.</strong> When she smiles — genuinely — you feel safe. When she glares — the world <em>shuts up (flamingos are LOUD, okay?!)</em></p>
          </div>

          <div className="space-y-4">
            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>💇‍♀️ Hair</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Orange-Red</strong> with <strong className="text-text">reddish undertones</strong> that shimmer in sunlight.</li>
                <li>• Hair is shoulder-length, often tied up messily when studying or in a ponytail with strands falling in her face.</li>
                <li>• Sometimes wears a clip or pin — a little <strong className="text-text">star or lightning motif</strong>, something energetic.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👀 Eyes</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Copper Orange, sharp and piercing when annoyed.</li>
                <li>• Her <strong className="text-text">resting expression looks intense</strong> even when she's just deep in thought.</li>
                <li>• When she softens? Her eyes wrinkle just slightly at the corners. That rare softness is <strong className="text-text">devastating</strong>.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👗 Outfit Style</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Casual, a bit sporty, unbothered by elegance — <strong className="text-text">graphic hoodies</strong>, <strong className="text-text">cargo pants</strong>, <strong className="text-text">sneakers</strong>.</li>
                <li>• <strong className="text-text">Sleeves are often rolled up</strong>, hands always moving — she's a tactile learner.</li>
                <li>• Has that <strong className="text-text">"not trying to look hot but she is"</strong> aura.</li>
                <li>• Always has pens in her pocket. Or behind her ear. Or both.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🧠 Personality Layers</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Hot-headed</strong>: snaps easily, especially at injustice or people who don't take responsibility.</li>
                <li>• <strong className="text-text">Protective to a fault</strong>: she covers for Reiko when she can. Checks in on Asahi even if it's awkward.</li>
                <li>• <strong className="text-text">Open about feelings</strong>, but bad at knowing when she's too loud. Thinks honesty is always the solution.</li>
                <li>• <strong className="text-text">Absolute menace when drunk</strong> — tells you her entire thesis paper out loud while crying about how proud she is of you.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🍎 Teacher Energy</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Loves children — instinctively patient with them, even when she has none for adults.</li>
                <li>• Wants to <strong className="text-text">reform how kids understand mental health and biology</strong> — she'll make diagrams with crayon if she has to.</li>
                <li>• Her <strong className="text-text">final thesis</strong> is probably about how trauma manifests in siblings across caregiving structures. Reiko inspired it.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>💛 Emotional Cues</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• She <strong className="text-text">teases Cyllvia a lot</strong>, especially about her accent, but also holds her hand when she's nervous.</li>
                <li>• <strong className="text-text">Puts her coat on Reiko</strong> when she sees her shivering at a bus stop.</li>
                <li>• Remembers <strong className="text-text">every birthday</strong> of her friends, even if she forgets her own.</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Hobbies / Likes / Dislikes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Hobbies</p>
            <p className="text-sm text-text-muted">She loves to teach. Drawing is also a pastime hobby. Avid geek.</p>
          </div>
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Likes</p>
            <p className="text-sm text-text-muted">All kinds of animals. Pandas are her favorite.</p>
          </div>
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Dislikes</p>
            <p className="text-sm text-text-muted">Snakes</p>
          </div>
        </div>

        <Divider />

        {/* Relationships */}
        <div>
          <SectionTitle>Relationships</SectionTitle>
          <div className="neon-card p-4 text-sm text-text-muted space-y-1">
            <p>Cyllvia's Girlfriend.</p>
            <p>Reiko's Best Friend</p>
            <p>Shion's Best Friend</p>
            <p>Actual big sister energy to Asahi</p>
          </div>
        </div>


        <div className="section-divider my-8" />

        {/* Character Navigation */}
        <div className="flex justify-between items-center pt-2">
                  <Link
            to="/titles/SorenaoAne-Nevertheless/Shion-Nanako"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-text-faint hover:border-[#d49fff] hover:text-[#d49fff] transition-colors"
          >
            ← Shion Nozomi
          </Link>
                  <Link
            to="/titles/SorenaoAne-Nevertheless/Cyllvia-April"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-text-faint hover:border-[#d49fff] hover:text-[#d49fff] transition-colors"
          >
            Cyllvia April →
          </Link>
        </div>

      </div>
    </div>
  )
}
