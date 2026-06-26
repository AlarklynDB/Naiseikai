import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/SorenaoAne-Nevertheless" className="hover:text-[#00e5ff] transition-colors">Nevertheless, You're Still My Sister!</Link>
      <span>/</span>
      <Link to="/titles/SorenaoAne-Nevertheless" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#7ef5ff]">Cyllvia April</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

export default function CyllviaAprilPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
          <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">👥 Cyllvia April</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
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
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Backstory */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Imagine if Karen Kujou and Tsumugi Kotobuki had a child…..this is what Cyllvia would be!</p>
            <p>Cyllvia April hails from London, UK, as an international student studying Japanese in Japan. She comes from a wealthy family company called April Industries, which is women-owned and founded by her mother, Regina April. Both her mother(s) and her other daughter(s) respect each other differences and they get along nicely. Her mother supports her daughter's future career as a Japanese/English Teacher.</p>
            <p>Cyllvia is fascinated in Japanese Culture and wants to learn more about the culture, despite having two year knowledge of speaking Japanese before furthering her studies. She's very studios and good at talking with others, her openness is very contagious. She's a light brown brunette and likes to wear her London School Uniform in her Japanese College.</p>
            <p>She's best friends with Reiko Nanako and knows her very well, along with her other friends, Shion, and Koharu. She also knows Reiko's younger sister, Asahi.</p>
          </div>
        </div>

        <Divider />

        {/* Visual Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">💖 Visual Design Concept (Age 25)</h3>
          <div className="callout mb-4 text-sm text-text-muted italic">
            🫖 General Vibe: She's the elegant British honor student archetype, with "anime transfer student perfection" and deep love for language and culture. Think: poised, warm, and so hopelessly gay for Koharu. Her neatness is divine, but her smile? A TOTAL sapphic nuke. ☕️💣💗
          </div>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">💇‍♀️ Hair:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Light brown</strong> with subtle <strong>brunette-gold undertones</strong> — smooth, shiny, immaculately brushed.</li>
                <li>Often styled in a <strong>half-up ponytail</strong>, or loosely braided with a pale scrunchie when she's studying.</li>
                <li>Has <strong>side-swept bangs</strong> and faint curls at the tips — <em>not too straight, not too wild</em>.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">👀 Eyes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Soft teal</strong> or <strong>jade green</strong>, a color that <em>glimmers</em> in sunlight.</li>
                <li>Almond-shaped, bright with curiosity — the kind of eyes that widen when she hears Japanese spoken fluently.</li>
                <li>Wears <strong>round-rimmed glasses</strong> when reading or writing essays.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🎓 Outfit Style:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>London-style school uniform vibes</strong> even while in Japan — classy blazer, pleated skirt, necktie or bow.</li>
                <li>In Japanese college: opts for modest but cute fashion — <strong>clean cardigans</strong>, <strong>flowy skirts</strong>, and <strong>Mary Janes</strong> or Oxford shoes.</li>
                <li>Her color palette is always refined — <strong>pastel beige, navy blue, dusty lavender</strong>, and <strong>cherry blossom pink</strong> accents.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">💬 Speech / Behavior Traits:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><em>Polite, well-mannered, extremely conscious of respecting space/culture.</em></li>
                <li>Has a slight British accent when speaking Japanese: endearing to everyone, but she's self-conscious about it.</li>
                <li>When excited: "Oh! That's simply fascinating~!"</li>
                <li>When flustered: <em>hides behind her notebook and blushes while peeking over it</em></li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">👭 Personality Layers</h3>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <ul className="list-disc list-inside space-y-2">
                <li>Super sociable and open — loves meeting people and learning their stories.</li>
                <li><strong>Bookish, but not shy</strong> — the "ambassador" of the friend group.</li>
                <li><strong>Loyal to a fault</strong> — once she chooses you, she will always root for you.</li>
                <li>Absolutely <strong>smitten with Koharu</strong>, always praising her with sparkly eyes and gentle teasing.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🧸 Emotional Details:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Keeps a journal of <strong>Japanese words that moved her emotionally</strong>.</li>
                <li>Has <strong>stickers from her time in London</strong> still decorating her pencil case.</li>
                <li>Sends <strong>video messages to her mom Regina</strong>, updating her on Reiko and Koharu (with hidden hearts drawn at the end).</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Hobbies & Likes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Hobbies &amp; Likes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-1">Hobbies:</p>
              <p>She loves to teach. Drawing is also a pastime hobby. Avid geek</p>
              <p className="font-mono text-xs text-[#7ef5ff] mt-3 mb-1">Likes:</p>
              <p>All kinds of animals. Pandas are her favorite.</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-1">Dislikes:</p>
              <p>Snakes</p>
              <p className="font-mono text-xs text-[#7ef5ff] mt-3 mb-1">Relationships:</p>
              <p>She has a strong preference for women, and she's been dating Koharu for eight months.</p>
              <p className="mt-1">She's Reiko Nanako's best friend, but, Reiko doesn't know she's dating her best friend, Koharu Inoue.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/SorenaoAne-Nevertheless/Koharu-Inoue" className="btn-neon-cyan text-xs">← Koharu Inoue</Link>
        </div>
        <Link to="/titles/SorenaoAne-Nevertheless" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div />
      </div>
    </div>
  )
}
