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
      <span className="text-[#a8ff8a]">Shion Nozomi</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

export default function ShionNozomiPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Main Character · STILL A WIP</span>
          <h2 className="font-serif text-3xl text-[#a8ff8a] mb-1">👥 Shion Nozomi</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Shion' },
              { label: 'Last Name', value: 'Nozomi' },
              { label: 'Age', value: '20' },
              { label: 'Birthday', value: 'July 13th, 2080' },
              { label: 'Yokai', value: 'Owl' },
              { label: 'Height', value: "5'1" },
              { label: 'Gender', value: 'Female' },
              { label: 'Relation', value: "Asahi's GF · Friends with Cyllvia, Koharu, and Reiko" },
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
            <p>Shion Nozomi, she's Reiko's best friend. Nozomi is quiet and doesn't talk much, but, she is very smart. She excels in her studies. Shion can sometimes act reserved, but extroverted when given time to open up. Her unique personality is what made her to be friends with Reiko, because Reiko was that person who had a very patient nature.</p>
            <p>Shion comes from a wealthy line of martial art masters, but she doesn't really care much about wealth. She's a strong girl behind that shy and quiet bravado. Perhaps…..too strong. The reason why Shion became Reiko's friend in college is because she skipped a lot of levels from elementary to high, since her IQ is around 185 - 200 (she has 3% yokai blood, since she has owl-levels of intelligence). This placed her next to her friends' college level, but is smarter than the three combined. She holds back her IQ significantly though. Cyllvia's IQ is second to Shion's (since Cyllvia hails from London).</p>
            <p>When Asahi, Reiko's sister reached out, Shion was the first one to respond. She went to Asahi's place and there, their friendship blossomed, not just being friends. Runa deeply cared for Asahi and that's when Asahi confessed to Shion. Both of them had eyes on each other for a while. They started dating behind Reiko's back because they didn't want to tell Reiko. They were scared about Asahi's older sister's response.</p>
            <p>She loves to wear oversized shirts and hoodies. It's like she wants to be cuddled~!</p>
          </div>
        </div>

        <Divider />

        {/* Yokai Heritage */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Her Yokai Heritage</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>Shion is a graceful martial arts fighter, and she is the last descendant of a Owl Ninja Yokai Clan that lived for over ~10 (est.) generations. However, even though she has 3% of her yokai blood, she holds back significantly despite being a martial artist. But when the time is called for, she would do anything to protect her friends. Even behind that shy bravado, she outmatches Koharu (who is a Fire Flamingo) in terms of aerial ability.</p>
          </div>
        </div>

        <Divider />

        {/* Visual Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">☕ Visual Design Concept (Age 20)</h3>
          <div className="callout mb-4 text-sm text-text-muted italic">
            💫 Overall Vibe: Timid behind a strong bravado. She often wears martial art clothing on her off days. Baggy clothes on her casual days.
          </div>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-2">💇‍♀️ Hair:</p>
              <p><strong>Bob-Cut Light Brown</strong> — Her hair is often soft and pretty. Doesn't get in the way.</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-2">👀 Eyes:</p>
              <p>Heterochromatic eyes. Dark Brown + Dark Purple. Unique!</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-2">🧣 Outfits:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Layered and practical</strong> — Casual martial arts clothing that doesn't stick out as much. Worn almost everyday.</li>
                <li>She loves to wear oversized shirts and hoodies. It's like she wants to be cuddled~!</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-2">☁️ Expressions &amp; Body Language:</p>
              <p>Soft, gentle, caring. She's that kind of friend that will care for you no matter what. Elegant with her words, soft.</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Hobbies & Likes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Hobbies &amp; Likes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-1">Hobbies:</p>
              <p>she likes to listen to music, read, and write.</p>
              <p className="font-mono text-xs text-[#a8ff8a] mt-3 mb-1">Likes:</p>
              <p>cute stuff, animals,</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-1">Dislikes:</p>
              <p>loud people, rude</p>
              <p className="font-mono text-xs text-[#a8ff8a] mt-3 mb-1">Relationships:</p>
              <p>Dating Asahi</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/SorenaoAne-Nevertheless/Reiko-Nozomi" className="btn-neon-cyan text-xs">← Reiko Nanako</Link>
        </div>
        <Link to="/titles/SorenaoAne-Nevertheless" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          <Link to="/titles/SorenaoAne-Nevertheless/Koharu-Inoue" className="btn-neon-cyan text-xs">Koharu Inoue →</Link>
        </div>
      </div>
    </div>
  )
}
