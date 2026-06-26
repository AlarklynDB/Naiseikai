import { Link } from 'react-router-dom'

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/GyakuTEN-ParadoxicalReincarnation" className="hover:text-[#00e5ff] transition-colors">GyakuTen — Paradoxical Reincarnation</Link>
      <span>/</span>
      <Link to="/titles/GyakuTEN-ParadoxicalReincarnation" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#7ef5ff]">Eina Arataki</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EinaAratakiPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
          <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">Eina Arataki</h2>
          <p className="text-text-faint font-mono text-sm">👥 Eina Arataki (Main Character)</p>
        </div>

        <Divider />

        {/* General Info */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Eina | 映奈' },
              { label: 'Last Name', value: 'Arataki | 荒滝' },
              { label: 'Age', value: '19' },
              { label: 'Height', value: "5'4" },
              { label: 'Gender', value: 'Female' },
              { label: 'Birthday', value: '06/06/06' },
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
          <div className="text-sm text-text-muted leading-relaxed space-y-2">
            <p>Eina Arataki is the daughter of the Arataki Household. And she is a famous martial artist from her school, She's a number one student, diligent, and book smart. She's in her last year of High School. She was the kind of girl who made herself small so others could shine. She's an older sister to her brother, Mako Arataki, who is in grade school. She's the emotional glue to the family.</p>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>Eina is gentle-hearted, soft-spoken, and emotionally intuitive. But that <em>innocence</em> becomes her curse. She's the girl who remembers <em>just enough</em> to grieve, but never enough to escape. Her kindness isn't passive—it's her rebellion against karmic apathy.</p>
          </div>
        </div>

        <Divider />

        {/* Hobbies */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Hobbies</h3>
          <div className="neon-card text-sm text-text-muted leading-relaxed">
            <p>She likes to practice her martial arts time to time.. She knows Kung Fu, Karate, Taekwondo, Tai-Chi...(and a lot more). But aside from this, she is a nerd. Loves manga and anime, and likes to play games with her younger brother. Making meals is also another hobby of hers. Since she is the glue to the whole family. She also likes to draw time to time.</p>
          </div>
        </div>

        <Divider />

        {/* Likes / Dislikes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Likes / Dislikes</h3>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Likes Girls (yes, she's gay)</li>
                <li>Likes Cats</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Dislikes creeps and toxic people</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Visual Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Visual Appearance</h3>
          <div className="neon-card text-sm text-text-muted leading-relaxed">
            <p>She has blue hair with blue eyes. Wears her school uniform often: it's designed like a sailor uniform with a long white skirt.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The shirt is brown with white stripes, an orange loose ribbon tie, with buttons that hold it in place</li>
              <li>Her hair is medium long with red accent tips. Often puts her hair up in a bun whenever she wears her martial arts uniform</li>
              <li>Wears compression tights and sports wear when she works out.</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Name Meaning */}
        <div>
          <h3 className="font-serif text-lg text-text mb-3">Eina Arataki — Name Meaning</h3>
          <div className="space-y-4 text-sm text-text-muted">
            <div className="callout">
              <p className="font-serif text-base text-[#7ef5ff] mb-2">映奈 — Eina</p>
              <div className="space-y-2">
                <div>
                  <p className="font-mono text-xs text-text-faint">映 (Ei)</p>
                  <p>Means to reflect, project, cast or shine. To reflect or show. Implies memory, reflection, something seen.</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-text-faint">奈 — (na)</p>
                  <p>Often used phonetically in all girl names which sounds soft, but can also imply endurance. Feminine softness</p>
                </div>
              </div>
            </div>
            <div className="callout">
              <p className="font-serif text-base text-[#7ef5ff] mb-2">荒滝 — Arataki</p>
              <div className="space-y-2">
                <div>
                  <p className="font-mono text-xs text-text-faint">荒 — Ara</p>
                  <p>Means rough, wild, savage, raw. Harshness of fate or chaos of karma</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-text-faint">滝 — (taki)</p>
                  <p>Means Waterfall, which symbolizes sudden change, uncontrollable, or emotion overflowing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/GyakuTEN-ParadoxicalReincarnation/Narrator-Kun" className="btn-neon-cyan text-xs">← Narrator-kun</Link></div>
        <Link to="/titles/GyakuTEN-ParadoxicalReincarnation" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/GyakuTEN-ParadoxicalReincarnation/Masato-Ren-Killer-kun" className="btn-neon-purple text-xs">Masato Ren →</Link></div>
      </div>
    </div>
  )
}
