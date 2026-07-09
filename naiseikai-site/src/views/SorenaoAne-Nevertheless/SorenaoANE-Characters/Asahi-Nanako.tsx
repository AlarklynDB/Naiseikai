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
      <span style={{ color: ACCENT }}>Asahi Nanako</span>
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

export default function AsahiNanakoPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character · SorenaoANE</span>
          <h2 className="font-serif text-3xl mb-1" style={{ color: ACCENT }}>👥 Asahi Nanako</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <SectionTitle>Identity</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Asahi' },
              { label: 'Last Name', value: 'Nanako' },
              { label: 'Age', value: '19' },
              { label: 'Birthday', value: 'July 17th, 2081' },
              { label: 'Race', value: 'Human' },
              { label: 'Height', value: "5'1" },
              { label: 'Gender', value: 'Female' },
              { label: "Relation", value: "Reiko's younger sister, Shion's GF" },
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
              { name: 'Asahi Nanako', path: '/titles/SorenaoAne-Nevertheless/Asahi-Nanako', active: true },
              { name: 'Reiko Nanako', path: '/titles/SorenaoAne-Nevertheless/Reiko-Nozomi' },
              { name: 'Shion Nozomi', path: '/titles/SorenaoAne-Nevertheless/Shion-Nanako' },
              { name: 'Koharu Inoue', path: '/titles/SorenaoAne-Nevertheless/Koharu-Inoue' },
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
            <p>Asahi Nanako. She's the younger sister of Reiko. At a young age, both of their parents left them due to the flu season which hit hard a couple years back. The two of them were alone, having Asahi's older sister to do everything, bills, jobs, funding, and more. Because of this, Asahi notices the huge gap in their sibling dynamic. Her sister just didn't feel like a sister anymore, she became her parent. The sibling bond they once had disappeared overnight.</p>
            <p>As a result, Asahi became very cold and distant from Reiko, harsh even. Reiko tries to talk to her younger sister, but she is met with scowls and resentment, telling her to leave the house.</p>
            <p>A few weeks into July, Asahi turned 20 on the 17th of July, which was her birthday. Her sister had come home from a long day, and came home to take a quick nap. She had brought some stuff home, medicine, food, and a stress snacks to eat on.</p>
          </div>
        </div>

        <Divider />

        {/* Four Identities */}
        <div>
          <SectionTitle>The Four Identities</SectionTitle>
          <div className="space-y-4">
            <IdentityBlock title="The Social Self">
              <p>The cold younger sister who scowls and keeps her earbuds in. She slams doors and tells her sister to leave the house. She wears oversized hoodies and off-shoulder knits in dusty colors. She looks perpetually tired or uninterested. She is the girl who disconnects before anyone can hurt her.</p>
            </IdentityBlock>
            <IdentityBlock title="The Personal Self">
              <p>The girl who still keeps a cheap plastic phone charm that Reiko got her years ago. She doodles sometimes and likes listening to rain on the window. She bites her lip when she wants to talk but pride stops her. She only relaxes when Reiko is not in the room. She is deeply hurt by the loss of their sibling bond. Hates getting reminded of it but she still has to make do with it.</p>
            </IdentityBlock>
            <IdentityBlock title="The Core Self">
              <p>The girl who wants her sister back, not a parent. She wants to be seen as an equal. She is grieving the parents they lost and angry that Reiko became a replacement parent instead of a sister. She loves Reiko but does not know how to say it without admitting she has been cruel to her. She also cleans up after Reiko's chaos in the kitchen.</p>
            </IdentityBlock>
            <IdentityBlock title="The Hidden Self">
              <p>She is terrified of being alone. She blames herself for Reiko's breakdown. She knows about the suicide note and the pills and carries that knowledge like a weight. She dates Shion secretly because Shion is the only one who sees Asahi as a person, not a project or a burden. Her relationship with Shion is actually very tender and sweet.</p>
            </IdentityBlock>
          </div>
        </div>

        <Divider />

        {/* Visual Design */}
        <div>
          <SectionTitle>Visual Design</SectionTitle>

          <div className="callout mb-5">
            <p className="text-sm text-text-muted italic">Cold-shouldered beauty with a sharp tongue and wounded heart. She looks like she's always five seconds away from slamming a door, or from crying silently behind one. She might look young, but she's 19.</p>
          </div>

          <div className="space-y-4">
            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>💇‍♀️ Hair</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Dark Chestnut, sometimes in a low, messy ponytail or left to hang with subtle waves.</li>
                <li>• Often has <strong className="text-text">overgrown bangs</strong>, sometimes slightly covering one eye: an unspoken visual wall between her and the world.</li>
                <li>• Strands that frame her face make her look perpetually tired or uninterested.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👀 Eyes</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Muted purple</strong>, <strong className="text-text">deep grey</strong>, or <strong className="text-text">stormy blue</strong>, like thunderclouds in the summer.</li>
                <li>• Heavy eyelids, slightly downturned outer corners (tsurime–meets–tareme hybrid), like she's always <em>a bit annoyed</em> or <em>lowkey sad</em>.</li>
                <li>• Rarely makes direct eye contact unless she's mad or feels betrayed.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🧥 Outfit Style</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Casual but <strong className="text-text">aloof</strong>.</li>
                <li>• Wears oversized <strong className="text-text">off-shoulder knits</strong> or <strong className="text-text">hoodies</strong>, usually in dusty colors (mauve, grey, pale navy).</li>
                <li>• Legs always warm: <strong className="text-text">long socks, black tights, or soft sweats</strong>, but her upper half is often bare or slouchy. Symbolic, maybe? Guarded below, exposed above.</li>
                <li>• Rarely dresses for style: more out of mood or emotional state. (<em>Reiko used to dress her up cutely as a kid... not anymore.</em>)</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🌬️ Expressions & Body Language</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Only <strong className="text-text">relaxes when alone</strong>. Her body sags a bit when Reiko's not in the room.</li>
                <li>• You might catch her <strong className="text-text">biting her lip</strong> while waiting for Reiko to speak first: she <em>wants</em> to talk, but pride is a fortress.</li>
                <li>• A soft cold stare, often drifting elsewhere.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🎧 Accessories</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Bluetooth earbuds always in</strong>. Not for music, just for <em>disconnection</em>.</li>
                <li>• Sometimes seen with a <strong className="text-text">cheap plastic phone charm</strong> Reiko got her years ago: doesn't want to admit she still keeps it.</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Hobbies / Likes / Dislikes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Hobbies</p>
            <p className="text-sm text-text-muted">Likes to doodle time to time.</p>
          </div>
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Likes</p>
            <p className="text-sm text-text-muted">She likes to listen to the rain pattering on the window. It soothes her.</p>
          </div>
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Dislikes</p>
            <p className="text-sm text-text-muted">Her sister (slightly)</p>
          </div>
        </div>

        <Divider />

        {/* Relationships */}
        <div>
          <SectionTitle>Relationships</SectionTitle>
          <div className="neon-card p-4 text-sm text-text-muted">
            <p>Shion Nozomi — Girlfriend</p>
          </div>
        </div>


        <div className="section-divider my-8" />

        {/* Character Navigation */}
        <div className="flex justify-between items-center pt-2">
          <span />
                  <Link
            to="/titles/SorenaoAne-Nevertheless/Reiko-Nanako"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-text-faint hover:border-[#d49fff] hover:text-[#d49fff] transition-colors"
          >
            Reiko Nanako →
          </Link>
        </div>

      </div>
    </div>
  )
}
