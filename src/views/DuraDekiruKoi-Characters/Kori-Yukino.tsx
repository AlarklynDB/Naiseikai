import { Link } from 'react-router-dom'

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/DuraDekiruKoi-Dullahan" className="hover:text-[#00e5ff] transition-colors">Can this Dullahan fall in Love?</Link>
      <span>/</span>
      <Link to="/titles/DuraDekiruKoi-Dullahan" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#7ef5ff]">Yukino Kōri</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function KoriYukinoPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
          <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">👥 Yukino, Kōri | 雪乃, 氷焔</h2>
          <p className="text-text-faint font-mono text-sm italic">Can this Dullahan fall in Love? (Vol 1)</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Kōri' },
              { label: 'Last Name', value: 'Yukino' },
              { label: 'Nickname', value: 'Ko / Yuki' },
              { label: 'Gender', value: 'Female' },
              { label: 'Age', value: '450+ (appears to be 25)' },
              { label: 'Race', value: 'Dullahan' },
              { label: 'Birthday', value: 'Jan 7th, 1650' },
              { label: 'Height', value: "5'1" },
              { label: 'Pronouns', value: 'She/Her' },
              { label: 'OC Date Creation', value: '10/22/2025' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Relationships */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Relationships</h3>
          <div className="neon-card text-sm text-text-muted">
            <ul className="list-disc list-inside space-y-1">
              <li>Hinoka Amane</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Backstory */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Kori Yukino. The Dullahan who travels. She was once a guard and warrior (martial arts warrior) during the Edo Era. She ages every 50 years. Her age is very hard to tell because she doesn't age as a typical human. Kori, despite being an elemental ice dullahan with a blue flame, her demanor is very calm and wise. Like she's witnessed all (she did). Not only she was from the Edo Era (1600), she knows how to adapt to society as a whole even when time progressed.</p>
            <p>Now…it's the year 2100. Despite having an appearance of a twenty-five year girl, she still has her personality and quirks: energetic, lovable, silly, sometimes dumb, and just….really fun to get along with. She doesn't need school because her intelligence came from the Edo Era to now. Society helped shaped her understanding of how most things work, including technology and such.</p>
            <p>The most intriguing thing about Kori is that she loves animals (any kind). Despite being a Dullahan, she has her horse, Yuno, and a few other yokais as familiars / pets:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Yuno the Horse</li>
              <li>Yoru - Water Spirit</li>
              <li>Naru - A Snow Parrot</li>
            </ul>
            <p>Her pets offer her the ability to love and care, who she treasures clearly. But even the familiars (despite being wise (they can talk, except Yuno)) tell her to give her love to someone else, not just them. They kept traveling in the mountains until Naru took notice of an odd abandoned shrine that had magic laced into it. When then stepped into it, the entire place looked different:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>decorated with kitsune-like objects</li>
              <li>phoenix like decorations</li>
              <li>and also castle-like stuff</li>
            </ul>
            <p>It was Hinako Amane's home. Kori bumped into her in the yards she was cleaning.</p>
            <div className="space-y-1 pl-2 border-l-2 border-[#7ef5ff]/40 italic">
              <p>"How did you get in here…?" — Hinako</p>
              <p>"Well, I'm a Dullahan….so I can see magical barriers and illusions. Like my pets saw this…," — Kori</p>
              <p>"Sorry..! We didn't mean to…" — Kori</p>
            </div>
            <p>The two became friends (later lovers) of shared interests like manga, drawing, music….etc.</p>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>Lovable. Silly. Energetic. Her personality depends on her mood, and if she choses if she wants to socialize or not. Even though she was a guard in her past, she can adapt due to time. So her personality is molded by the people she meets over time, despite aging slower than usual.</p>
          </div>
        </div>

        <Divider />

        {/* Hobbies & Likes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Hobbies &amp; Likes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">Hobbies:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Likes to draw sometimes. Likes to read manga.</li>
                <li>Likes to play with her three pets.</li>
                <li>Lofi Music</li>
              </ul>
              <p className="font-mono text-xs text-[#7ef5ff] mt-3 mb-2">Likes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Spiders (she thinks they're cool)</li>
                <li>Summer</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">Dislikes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Insects (but she kills them by accident because of the flame from her neck)</li>
              </ul>
              <p className="font-mono text-xs text-[#7ef5ff] mt-3 mb-1">Favorite Animal:</p>
              <p>any</p>
              <p className="font-mono text-xs text-[#7ef5ff] mt-2 mb-1">Comfort Animal:</p>
              <p>her pets</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Visual Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Visual Appearance</h3>

          <div className="callout mb-4 text-sm text-text-muted italic">
            🌸 General Vibe: A Dullahan that loves to travel with her pets!
          </div>

          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">💇‍♀️ Hair:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Muted Blue with aqua highlights. Her hair is as soft as snow and feels very cool.</li>
                <li>Sideswept bangs that speaks regal fashion.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">👀 Eyes:</p>
              <p>Heterochromatic Sea Blue and Ice Blue</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">👀 Neck Accessory:</p>
              <p>She wears a collar made of magic and metal that allows her to detach/attach her head when she wants. Like a switch. Nothing too edgy. Just plain and simple.</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🧥 Outfit Style:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Her home attire is super casual</li>
                <li>Her travel outfit consists of: vintage set, leathery-like armor (adventurer style)</li>
                <li>Legs always warm: <strong>long socks, white tights, or soft sweats.</strong></li>
                <li>When she does go out….she will wear something that doesn't stand out as much. Like a muted blue dress that sparkles like stars</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🌬️ Expressions &amp; Body Language:</p>
              <p>Strong and stoic. She may be a martial artist and guard, but she always has a straight back. A good figure and build.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div />
        <Link to="/titles/DuraDekiruKoi-Dullahan" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          <Link to="/titles/DuraDekiruKoi-Dullahan/Hinoka-Amane" className="btn-neon-cyan text-xs">Hinoka Amane →</Link>
        </div>
      </div>
    </div>
  )
}
