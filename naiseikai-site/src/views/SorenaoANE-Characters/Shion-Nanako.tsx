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
      <span style={{ color: ACCENT }}>Shion Nozomi</span>
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

export default function ShionNanakoPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character · SorenaoANE</span>
          <h2 className="font-serif text-3xl mb-1" style={{ color: ACCENT }}>👥 Shion Nozomi</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <SectionTitle>Identity</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Shion' },
              { label: 'Last Name', value: 'Nozomi' },
              { label: 'Age', value: '20' },
              { label: 'Birthday', value: 'July 13th, 2080' },
              { label: 'Yokai', value: 'Owl' },
              { label: 'Height', value: "5'1" },
              { label: 'Gender', value: 'Female' },
              { label: "Relation", value: "Asahi's GF" },
            ].map(({ label, value }) => (
              <IdentityCard key={label} label={label} value={value} />
            ))}
          </div>
          <p className="text-xs text-text-faint mt-3 ml-1">Friends with Cyllvia, Koharu, and Reiko.</p>
        </div>

        <Divider />

        {/* Cast */}
        <div>
          <SectionTitle>Main Characters of SorenaoANE</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Asahi Nanako', path: '/titles/SorenaoAne-Nevertheless/Asahi-Nanako' },
              { name: 'Reiko Nanako', path: '/titles/SorenaoAne-Nevertheless/Reiko-Nozomi' },
              { name: 'Shion Nozomi', path: '/titles/SorenaoAne-Nevertheless/Shion-Nanako', active: true },
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
            <p>Shion Nozomi, she's Reiko's best friend. Nozomi is quiet and doesn't talk much, but, she is very smart. She excels in her studies. Shion can sometimes act reserved, but extroverted when given time to open up. Her unique personality is what made her to be friends with Reiko, because Reiko was that person who had a very patient nature.</p>
            <p>Shion comes from a wealthy line of martial art masters, but she doesn't really care much about wealth. She's a strong girl behind that shy and quiet bravado. Perhaps…..too strong. The reason why Shion became Reiko's friend in college is because she skipped a lot of levels from elementary to high, since her IQ is around 185 - 200 (she has 3% yokai blood, since she has owl-levels of intelligence). This placed her next to her friends' college level, but is smarter than the three combined. She holds back her IQ significantly though. Cyllvia's IQ is second to Shion's (since Cyllvia hails from London).</p>
            <p>When Asahi, Reiko's sister reached out, Shion was the first one to respond. She went to Asahi's place and there, their friendship blossomed, not just being friends. Shion deeply cared for Asahi and that's when Asahi confessed to Shion. Both of them had eyes on each other for a while. They started dating behind Reiko's back because they didn't want to tell Reiko. They were scared about Asahi's older sister's response.</p>
            <p>She loves to wear oversized shirts and hoodies. It's like she wants to be cuddled~!</p>
          </div>
        </div>

        <Divider />

        {/* Yokai Heritage */}
        <div>
          <SectionTitle>Her Yokai Heritage</SectionTitle>
          <div className="callout">
            <p className="text-sm text-text-muted leading-relaxed">Shion is a graceful martial arts fighter, and she is the last descendant of a Owl Ninja Yokai Clan that lived for over ~10 (est.) generations. However, even though she has 3% of her yokai blood, she holds back significantly despite being a martial artist. But when the time is called for, she would do anything to protect her friends. Even behind that shy bravado, she outmatches Koharu (who is a Fire Flamingo) in terms of aerial ability.</p>
          </div>
        </div>

        <Divider />

        {/* Four Identities */}
        <div>
          <SectionTitle>The Four Identities</SectionTitle>
          <div className="space-y-4">
            <IdentityBlock title="The Social Self">
              <p>The quiet girl who does not talk much. She appears shy and academically gifted. She is Reiko's best friend and a good student. She wears oversized shirts and hoodies like she wants to be cuddled. She is gentle, soft, and careful with her words.</p>
            </IdentityBlock>
            <IdentityBlock title="The Personal Self">
              <p>The martial artist who comes from a wealthy line of masters. She is far stronger than she looks. She is an extrovert when given time to open up. She is dating Asahi secretly and they hide it from Reiko because they are afraid of her reaction. She genuinely cares about the Nanako sisters and wants to help them heal. Also quite perceptive too! — given her Owl Yokai abilities.</p>
            </IdentityBlock>
            <IdentityBlock title="The Core Self">
              <p>She is the last descendant of an Owl Ninja Yokai Clan that lived for over ten generations. She holds back her IQ significantly because she is smarter than all three of her friends combined. She holds back her aerial ability even though she outmatches Koharu. She is a 3% yokai who could be terrifying but chooses to be gentle.</p>
            </IdentityBlock>
            <IdentityBlock title="The Hidden Self">
              <p>She knows more than she lets on. She sees the cracks in Reiko's mask and the pain in Asahi's eyes. She is the watcher. She knows about Reiko's suicide attempts and her month-long disappearance. She has not told anyone because she is waiting for the right moment to act. She is the one who likely knew the July 17th meeting at Koharu's apartment would force both sisters to collide.</p>
            </IdentityBlock>
          </div>
        </div>

        <Divider />

        {/* Visual Design */}
        <div>
          <SectionTitle>Visual Design Concept — Age 20</SectionTitle>

          <div className="callout mb-5">
            <p className="text-sm text-text-muted italic">Timid behind a strong bravado. She often wears martial art clothing on her off days. Baggy clothes on her casual days.</p>
          </div>

          <div className="space-y-4">
            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>💇‍♀️ Hair</p>
              <p className="text-sm text-text-muted leading-relaxed"><strong className="text-text">Bob-Cut Light Brown</strong> — her hair is often soft and pretty. Doesn't get in the way.</p>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👀 Eyes</p>
              <p className="text-sm text-text-muted leading-relaxed">Heterochromatic eyes. <strong className="text-text">Dark Brown + Dark Purple</strong>. Unique!</p>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🧣 Outfits</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Layered and practical</strong> — Casual martial arts clothing that doesn't stick out as much. Worn almost everyday.</li>
                <li>• She loves to wear oversized shirts and hoodies. It's like she wants to be cuddled~!</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>☁️ Expressions & Body Language</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Soft, gentle, caring. She's that kind of friend that will care for you no matter what.</li>
                <li>• Elegant with her words, soft.</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Hobbies / Likes / Dislikes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Hobbies</p>
            <p className="text-sm text-text-muted">She likes to listen to music, read, and write.</p>
          </div>
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Likes</p>
            <p className="text-sm text-text-muted">Cute stuff, animals.</p>
          </div>
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Dislikes</p>
            <p className="text-sm text-text-muted">Loud people, rude.</p>
          </div>
        </div>

        <Divider />

        {/* Relationships */}
        <div>
          <SectionTitle>Relationships</SectionTitle>
          <div className="neon-card p-4 text-sm text-text-muted">
            <p>Dating Asahi</p>
          </div>
        </div>


        <div className="section-divider my-8" />

        {/* Character Navigation */}
        <div className="flex justify-between items-center pt-2">
                  <Link
            to="/titles/SorenaoAne-Nevertheless/Reiko-Nozomi"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-text-faint hover:border-[#d49fff] hover:text-[#d49fff] transition-colors"
          >
            ← Reiko Nanako
          </Link>
                  <Link
            to="/titles/SorenaoAne-Nevertheless/Koharu-Inoue"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-text-faint hover:border-[#d49fff] hover:text-[#d49fff] transition-colors"
          >
            Koharu Inoue →
          </Link>
        </div>

      </div>
    </div>
  )
}
