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
      <span className="text-[#ffaad4]">Koharu Inoue</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

export default function KoharuInouePage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        <div>
          <span className="neon-sign-pink text-[10px] mb-3 inline-block">Main Character · STILL A WIP</span>
          <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">👥 Koharu Inoue</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
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
            <p>Koharu Inoue. She's the best friend of Reiko and goes to the same college. She's hot tempered but with a fierce and loyal heart. Koharu knows Reiko's younger sister, Asahi, as they were introduced once. She loves teaching children because her family is full of siblings, specifically younger and she grew fond of them. Discovering her innate skill of teaching, she wanted to become a teacher because this was something she liked. She aims to be a Teacher in Psychology and Biology because these were two topics she liked learning about.</p>
            <p>However, her friend Reiko, took on the mantle of being Asahi's only guardian, parent, caretaker, all while sacrificing everything for her younger sister. Koharu knows this much, even if Reiko didn't tell her. Koharu is also pretty open, to the fact that her loyalty shows, it becomes annoying. She is also quite intelligent.</p>
            <p>Koharu is friends with Shion and Cyllvia, along with Asahi too.</p>
          </div>
        </div>

        <Divider />

        {/* Yokai Heritage */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Her Yokai Heritage</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>Koharu is a Fire Flamingo. Not much of her Yokai Heritage has been revealed and she keeps parts of it a secret. Reiko, Asahi, and Cyllvia know she is a Fire Flamingo, but, they still don't know the full extent of her yokai abilities.</p>
          </div>
        </div>

        <Divider />

        {/* Visual Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">🔥 Visual Character Design (Age 23)</h3>
          <div className="callout mb-4 text-sm text-text-muted italic">
            💢 General Vibe: The kind of girl who slams her textbook on the table when someone insults her friend. A bit of a <strong>yankee energy</strong>, but her hoodie sleeves are stained with <strong>marker ink from kids she tutors.</strong> When she smiles — genuinely — you feel safe. When she glares — the world <em>shuts up (flamingos are LOUD, okay?!)</em>
          </div>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">💇‍♀️ Hair:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Orange-Red</strong> with <strong>reddish undertones</strong> that shimmer in sunlight.</li>
                <li>Hair is shoulder-length, often tied up messily when studying or in a ponytail with strands falling in her face.</li>
                <li>Sometimes wears a clip or pin — a little <strong>star or lightning motif</strong>, something energetic.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">👀 Eyes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Copper Orange, sharp and piercing when annoyed.</li>
                <li>But her <strong>resting expression looks intense</strong> even when she's just deep in thought.</li>
                <li>When she softens? Her eyes wrinkle just slightly at the corners. That rare softness is <strong>devastating</strong>.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">🎒 Outfit Style:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Casual, a bit sporty, unbothered by elegance — <strong>graphic hoodies</strong>, <strong>cargo pants</strong>, <strong>sneakers</strong>.</li>
                <li><strong>Sleeves are often rolled up</strong>, hands always moving — she's a tactile learner.</li>
                <li>Has that <strong>"not trying to look hot but she is"</strong> aura.</li>
                <li>Always has pens in her pocket. Or behind her ear. Or both.</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">🧠 Personality Layers</h3>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Hot-headed</strong>: snaps easily, especially at injustice or people who don't take responsibility.</li>
                <li><strong>Protective to a fault</strong>: she covers for Reiko when she can. Checks in on Asahi even if it's awkward.</li>
                <li><strong>Open about feelings</strong>, but bad at knowing when she's too loud. Thinks honesty is always the solution.</li>
                <li><strong>Absolute menace when drunk</strong> — tells you her entire thesis paper out loud while crying about how proud she is of you.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">🍎 Teacher Energy:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Loves children — instinctively patient with them, even when she has none for adults.</li>
                <li>Wants to <strong>reform how kids understand mental health and biology</strong> — she'll make diagrams with crayon if she has to.</li>
                <li>Her <strong>final thesis</strong> is probably about how trauma manifests in siblings across caregiving structures. Reiko inspired it.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">🧸 Emotional Cues:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>She <strong>teases Cyllvia a lot</strong>, especially about her accent, but also holds her hand when she's nervous.</li>
                <li><strong>Puts her coat on Reiko</strong> when she sees her shivering at a bus stop.</li>
                <li>Remembers <strong>every birthday</strong> of her friends, even if she forgets her own.</li>
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
              <p className="font-mono text-xs text-[#ffaad4] mb-1">Hobbies:</p>
              <p>She loves to teach. Drawing is also a pastime hobby. Avid geek</p>
              <p className="font-mono text-xs text-[#ffaad4] mt-3 mb-1">Likes:</p>
              <p>All kinds of animals. Pandas are her favorite.</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-1">Dislikes:</p>
              <p>Snakes</p>
              <p className="font-mono text-xs text-[#ffaad4] mt-3 mb-1">Relationships:</p>
              <p>Cyllvia's Girlfriend.</p>
              <p>Reiko's Best Friend</p>
              <p>Shion's Best Friend</p>
              <p>Actual big sister energy to Asahi</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/SorenaoAne-Nevertheless/Shion-Nanako" className="btn-neon-cyan text-xs">← Shion Nozomi</Link>
        </div>
        <Link to="/titles/SorenaoAne-Nevertheless" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          <Link to="/titles/SorenaoAne-Nevertheless/Cyllvia-April" className="btn-neon-cyan text-xs">Cyllvia April →</Link>
        </div>
      </div>
    </div>
  )
}
