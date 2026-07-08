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
      <span style={{ color: ACCENT }}>Cyllvia April</span>
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

export default function CyllviaAprilPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character · SorenaoANE</span>
          <h2 className="font-serif text-3xl mb-1" style={{ color: ACCENT }}>👥 Cyllvia April</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <SectionTitle>Identity</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Cyllvia' },
              { label: 'Last Name', value: 'April' },
              { label: 'Age', value: '25' },
              { label: 'Birthday', value: 'May 23rd, 2075' },
              { label: 'Race', value: 'Human' },
              { label: 'Height', value: "5'6" },
              { label: 'Gender', value: 'Female' },
              { label: 'Relation', value: "Koharu's GF" },
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
              { name: 'Koharu Inoue', path: '/titles/SorenaoAne-Nevertheless/Koharu-Inoue' },
              { name: 'Cyllvia April', path: '/titles/SorenaoAne-Nevertheless/Cyllvia-April', active: true },
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
            <p>Imagine if Karen Kujou and Tsumugi Kotobuki had a child…..this is what Cyllvia would be!</p>
            <p>Cyllvia April hails from London, UK, as an international student studying Japanese in Japan. She comes from a wealthy family company called April Industries, which is women-owned and founded by her mother, Regina April. Both her mother(s) and her other daughter(s) respect each other differences and they get along nicely. Her mother supports her daughter's future career as a Japanese/English Teacher.</p>
            <p>Cyllvia is fascinated in Japanese Culture and wants to learn more about the culture, despite having two year knowledge of speaking Japanese before furthering her studies. She's very studious and good at talking with others, her openness is very contagious. She's a light brown brunette and likes to wear her London School Uniform in her Japanese College.</p>
            <p>She's best friends with Reiko Nanako and knows her very well, along with her other friends, Shion, and Koharu. She also knows Reiko's younger sister, Asahi.</p>
          </div>
        </div>

        <Divider />

        {/* Four Identities */}
        <div>
          <SectionTitle>The Four Identities</SectionTitle>
          <div className="space-y-4">
            <IdentityBlock title="The Social Self">
              <p>The elegant British honor student from London. She is an international student studying Japanese in Japan. She is polite, well-mannered, and extremely conscious of respecting space and culture. She is the ambassador of the friend group. She wears London-style school uniform vibes and carries herself with refined grace. She is sociable, open, and contagiously friendly. Her friends call her "April" because it's easier to say than "Cyllvia" — and she blushes ferociously when "Cyllvia" is mentioned.</p>
            </IdentityBlock>
            <IdentityBlock title="The Personal Self">
              <p>The 25-year-old woman who still carries stickers from London on her pencil case. She keeps a journal of Japanese words that moved her emotionally. She sends video messages to her mother Regina about her friends, with hidden hearts drawn at the end. She is fascinated by Japanese culture and has a slight British accent when speaking Japanese that she is self-conscious about. She hides behind her notebook and blushes when flustered.</p>
            </IdentityBlock>
            <IdentityBlock title="The Core Self">
              <p>The girl who is deeply loyal to a fault. Once she chooses you, she roots for you forever. She chose Reiko. She chose Koharu. She is now torn between them because she cannot reveal her relationship to her best friend. She is old enough to see the patterns of collapse around her but too polite to scream. She is the anchor who is afraid to pull too hard.</p>
            </IdentityBlock>
            <IdentityBlock title="The Hidden Self">
              <p>She is dating Koharu and has been for eight months. She is so hopelessly in love that she is a total sapphic nuke around her. She notices everything. The way Reiko flinches, the way Asahi's eyes soften around Shion, the way Koharu's temper is just fear wearing a mask. She is probably the first to know that Reiko was in a psychiatric ward for a month. She keeps it all inside because she believes good manners means protecting people from pain.</p>
            </IdentityBlock>
          </div>
        </div>

        <Divider />

        {/* Visual Design */}
        <div>
          <SectionTitle>Visual Design Concept — Age 25</SectionTitle>

          <div className="callout mb-5">
            <p className="text-sm text-text-muted italic">She's the elegant British honor student archetype, with "anime transfer student perfection" and deep love for language and culture. Think: poised, warm, and so hopelessly gay for Koharu. Her neatness is divine, but her smile? A TOTAL sapphic nuke. ☕💣💗</p>
          </div>

          <div className="space-y-4">
            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>💇‍♀️ Hair</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Light brown</strong> with subtle <strong className="text-text">brunette-gold undertones</strong> — smooth, shiny, immaculately brushed.</li>
                <li>• Often styled in a <strong className="text-text">half-up ponytail</strong>, or loosely braided with a pale scrunchie when she's studying.</li>
                <li>• Has <strong className="text-text">side-swept bangs</strong> and faint curls at the tips — <em>not too straight, not too wild.</em></li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👀 Eyes</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Soft teal</strong> or <strong className="text-text">jade green</strong>, a color that <em>glimmers</em> in sunlight.</li>
                <li>• Almond-shaped, bright with curiosity — the kind of eyes that widen when she hears Japanese spoken fluently.</li>
                <li>• Wears <strong className="text-text">round-rimmed glasses</strong> when reading or writing essays.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🎓 Outfit Style</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">London-style school uniform vibes</strong> even while in Japan — classy blazer, pleated skirt, necktie or bow.</li>
                <li>• In Japanese college: opts for modest but cute fashion — <strong className="text-text">clean cardigans</strong>, <strong className="text-text">flowy skirts</strong>, and <strong className="text-text">Mary Janes</strong> or Oxford shoes.</li>
                <li>• Her color palette is always refined — <strong className="text-text">pastel beige, navy blue, dusty lavender</strong>, and <strong className="text-text">cherry blossom pink</strong> accents.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>💬 Speech & Behavior Traits</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Polite, well-mannered, extremely conscious of respecting space/culture.</li>
                <li>• Has a slight British accent when speaking Japanese: endearing to everyone, but she's self-conscious about it.</li>
                <li>• When excited: "Oh! That's simply fascinating~!"</li>
                <li>• When flustered: <em>hides behind her notebook and blushes while peeking over it</em></li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👭 Personality Layers</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Super sociable and open — loves meeting people and learning their stories.</li>
                <li>• <strong className="text-text">Bookish, but not shy</strong> — the "ambassador" of the friend group.</li>
                <li>• <strong className="text-text">Loyal to a fault</strong> — once she chooses you, she will always root for you.</li>
                <li>• Absolutely <strong className="text-text">smitten with Koharu</strong>, always praising her with sparkly eyes and gentle teasing.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🧸 Emotional Details</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Keeps a journal of <strong className="text-text">Japanese words that moved her emotionally</strong>.</li>
                <li>• Has <strong className="text-text">stickers from her time in London</strong> still decorating her pencil case.</li>
                <li>• Sends <strong className="text-text">video messages to her mom Regina</strong>, updating her on Reiko and Koharu (with hidden hearts drawn at the end).</li>
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
            <p>She has a strong preference for women, and she's been dating Koharu for eight months.</p>
            <p>She's Reiko Nanako's best friend, but, Reiko doesn't know she's dating her best friend, Koharu Inoue.</p>
          </div>
        </div>


        <div className="section-divider my-8" />

        {/* Character Navigation */}
        <div className="flex justify-between items-center pt-2">
                  <Link
            to="/titles/SorenaoAne-Nevertheless/Koharu-Inoue"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-text-faint hover:border-[#d49fff] hover:text-[#d49fff] transition-colors"
          >
            ← Koharu Inoue
          </Link>
          <span />
        </div>

      </div>
    </div>
  )
}
