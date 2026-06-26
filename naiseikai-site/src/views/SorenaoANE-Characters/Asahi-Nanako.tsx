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
      <span className="text-[#d49fff]">Asahi Nanako</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

export default function AsahiNanakoPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character · STILL A WIP</span>
          <h2 className="font-serif text-3xl text-[#d49fff] mb-1">👥 Asahi Nanako</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Asahi' },
              { label: 'Last Name', value: 'Nanako' },
              { label: 'Age', value: '19' },
              { label: 'Birthday', value: 'July 17th, 2081' },
              { label: 'Race', value: 'Human' },
              { label: 'Height', value: "5'1" },
              { label: 'Gender', value: 'Female' },
              { label: 'Relation', value: "Reiko's younger sister, Shion's GF" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Cast */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Main Characters of SorenaoANE</h3>
          <div className="neon-card text-sm text-text-muted space-y-1">
            <p><Link to="/titles/SorenaoAne-Nevertheless/Asahi-Nanako" className="hover:text-[#d49fff] transition-colors">Asahi Nanako</Link></p>
            <p><Link to="/titles/SorenaoAne-Nevertheless/Reiko-Nozomi" className="hover:text-[#d49fff] transition-colors">Reiko Nanako</Link></p>
            <p><Link to="/titles/SorenaoAne-Nevertheless/Shion-Nanako" className="hover:text-[#d49fff] transition-colors">Shion Nozomi</Link></p>
            <p><Link to="/titles/SorenaoAne-Nevertheless/Koharu-Inoue" className="hover:text-[#d49fff] transition-colors">Koharu Inoue</Link></p>
            <p><Link to="/titles/SorenaoAne-Nevertheless/Cyllvia-April" className="hover:text-[#d49fff] transition-colors">Cyllvia April</Link></p>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-text-faint text-xs font-mono mb-1">Supporting Character / Cameo:</p>
              <p><Link to="/titles/KarasuToNinja-TQCTN/Haruhi-Aoi" className="hover:text-[#a8ff8a] transition-colors">Haruhi Aoi</Link></p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Backstory */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Asahi Nanako. She's the younger sister of Reiko. At a young age, both of their parents left them due to a the flu season which hit hard a couple years back. The two of them were alone, having Asahi's older sister to do everything, bills, jobs, funding, and more. Because of this, Asahi notices the huge gap in their sibling dynamic. Her sister just didn't feel like a sister anymore, she became her parent. The sibling bond they once had disappeared overnight.</p>
            <p>As a result, Asahi became very cold and distant from Reiko, harsh even. Reiko tries to talk to her younger sister, but she is met with scowls and resentment, telling her to leave the house.</p>
            <p>A few weeks into July, Asahi turned 20 on the 17th of July, which was her birthday. Her sister had come home from a long day, and came home to take a quick nap. She had brought some stuff home, medicine, food, and a stress snacks to eat on.</p>
          </div>
        </div>

        <Divider />

        {/* Visual Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Visual Appearance</h3>
          <div className="callout mb-4 text-sm text-text-muted italic">
            🌸 General Vibe: Cold-shouldered beauty with a sharp tongue and wounded heart. She looks like she's always five seconds away from slamming a door, or from crying silently behind one. She might look young, but she's 19.
          </div>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#d49fff] mb-2">💇‍♀️ Hair:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Dark Chestnut, sometimes in a low, messy ponytail or left to hang with subtle waves.</li>
                <li>Often has <strong>overgrown bangs</strong>, sometimes slightly covering one eye: an unspoken visual wall between her and the world.</li>
                <li>Strands that frame her face make her look perpetually tired or uninterested.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#d49fff] mb-2">👀 Eyes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Muted purple</strong>, <strong>deep grey</strong>, or <strong>stormy blue</strong>, like thunderclouds in the summer.</li>
                <li>Heavy eyelids, slightly downturned outer corners (tsurime–meets–tareme hybrid), like she's always <em>a bit annoyed</em> or <em>lowkey sad</em>.</li>
                <li>Rarely makes direct eye contact unless she's mad or feels betrayed.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#d49fff] mb-2">🧥 Outfit Style:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Casual but <strong>aloof</strong>.</li>
                <li>Wears oversized <strong>off-shoulder knits</strong> or <strong>hoodies</strong>, usually in dusty colors (mauve, grey, pale navy).</li>
                <li>Legs always warm: <strong>long socks, black tights, or soft sweats</strong>, but her upper half is often bare or slouchy. Symbolic, maybe? Guarded below, exposed above.</li>
                <li>Rarely dresses for style: more out of mood or emotional state. (<em>Reiko used to dress her up cutely as a kid... not anymore.</em>)</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#d49fff] mb-2">🌬️ Expressions &amp; Body Language:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Only <strong>relaxes when alone</strong>. Her body sags a bit when Reiko's not in the room.</li>
                <li>You might catch her <strong>biting her lip</strong> while waiting for Reiko to speak firs: she <em>wants</em> to talk, but pride is a fortress.</li>
                <li>A Soft cold stare, often drifting elsewhere.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#d49fff] mb-2">🎧 Accessories:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Bluetooth earbuds always in</strong>. Not for music, just for <em>disconnection</em>.</li>
                <li>Sometimes seen with a <strong>cheap plastic phone charm</strong> Reiko got her years ago: doesn't want to admit she still keeps it.</li>
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
              <p className="font-mono text-xs text-[#d49fff] mb-1">Hobbies:</p>
              <p>Likes to doodle time to time.</p>
              <p className="font-mono text-xs text-[#d49fff] mt-3 mb-1">Likes:</p>
              <p>She likes to listen to the rain pattering on the window. It soothes her.</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#d49fff] mb-1">Dislikes:</p>
              <p>Her sister (slightly)</p>
              <p className="font-mono text-xs text-[#d49fff] mt-3 mb-1">Relationships:</p>
              <p>Shion Nozomi — Girlfriend</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div />
        <Link to="/titles/SorenaoAne-Nevertheless" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          <Link to="/titles/SorenaoAne-Nevertheless/Reiko-Nozomi" className="btn-neon-cyan text-xs">Reiko Nanako →</Link>
        </div>
      </div>
    </div>
  )
}
