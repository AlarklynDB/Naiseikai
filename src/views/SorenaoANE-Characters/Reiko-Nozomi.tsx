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
      <span className="text-[#7ef5ff]">Reiko Nanako</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

export default function ReikoNanakoPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Main Character · STILL A WIP</span>
          <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">👥 Reiko Nanako</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Reiko' },
              { label: 'Last Name', value: 'Nanako' },
              { label: 'Age', value: '24' },
              { label: 'Birthday', value: 'August 1st, 2076' },
              { label: 'Race', value: 'Human' },
              { label: 'Height', value: "5'1" },
              { label: 'Gender', value: 'Female' },
              { label: 'Relation', value: "Asahi's older sister" },
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
            <p>Reiko Nanako, is the older sister of Asahi. She's hard working, studious, open, and kind. She goes to college and works a waitress job. In college, she is friends with Cyllvia April, an international student from London who aims to be a teacher. Koharu Inoue, a firey girl with fierce drive. And Shion Nozomi, a quiet and intelligent girl.</p>
            <p>Her three friends are very close to her, and they know she's trying her best to care for Asahi.</p>
            <p>However, these two sisters….aren't really dynamic. At a young age, both their left them due to a the flu season which hit hard hard in some years. The two of them were alone, having Reiko to bare everything; bills, jobs, funding, and more. Because of this, Asahi notices the huge gap in their sibling dynamic. Her sister just didn't feel like a sister anymore, she became her parent. The sibling bond they once had disappeared overnight. Reiko still sees her younger sister as a person who has a unique flaw.</p>
            <p>Reiko practically raised Asahi as a daughter, and despite the nagging and the protection that she showed, Asahi showed resentment. Her younger sister, sees this as annoying, because she's not a child anymore. She's growing and doesn't need Reiko to protect her, but, Reiko insists, strongly.</p>
            <p>However, even as the relationship becomes harsh, the bridge widens. Reiko tried to kill herself a few times.</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Bridge - She tried to jump, but couldn't.</li>
              <li>Sleeping Pills - very high doses, but she still couldn't.</li>
            </ul>
            <p>All the burden and weight on her shoulders became too much, she couldn't muster the courage to. She wants to protect her sister, but at the same time, herself. Therapy. She tried, but couldn't. The best chance was to go see a psychiatrist, or an asylum. She's breaking down. She hid the pills in her car, along with a note before her friends found her, completely drowning with low self-esteem.</p>
            <p>It felt like a week when she went to see the psychiatrist, but it was a month in truth. She disappeared for a month. She had neglected everything, including her friends and her sister, she didn't care. She wants this to end.</p>
            <p>But on one day, July 17th (Asahi's Birthday), Reiko didn't want to go home. She's too afraid to look at Asahi. Too afraid to celebrate her sisters' birthday. She knows she would get a talking about her disappearance.</p>
            <p>Instead, she goes to her friends' place, Koharu's apartment. But little did she know, Asahi was there. She goes in, only to see Asahi enjoying the time with her friends.</p>
            <p>Asahi, who finally noticed Reiko, broke down angrily. Rants about her short comings, her disappearances, and worst of all: the suicide note.</p>
            <p>Reiko explains what had happened. They were furious and mad at her, because they secretly knew that Reiko can't be all things at once: a mom, a dad, a sister: a while going to college, trying to balance it between work, therapy, and a psychiatric ward. She became a martyr.</p>
          </div>
        </div>

        <Divider />

        {/* Visual Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">☕ Visual Design Concept (Age 24)</h3>
          <div className="callout mb-4 text-sm text-text-muted italic">
            💫 Overall Vibe: Stoic, tired beauty with too many burdens for one back to carry. You see her and you just <em>know</em> she skipped lunch, ran to work, came back at 1AM, and left notes like "heat the food I made." Her presence is powerful, but <em>her eyes say please don't ask me if I'm okay.</em>
          </div>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">💇‍♀️ Hair:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Long dark chestnut</strong>, tied in a <strong>low bun or ponytail</strong>, often messy from running around.</li>
                <li>A few strands <strong>fall loose</strong> — visual metaphor for her losing control no matter how hard she holds it together.</li>
                <li>Sometimes wears a clip Asahi gifted her long ago — forgotten in her hair, still there.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">👀 Eyes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Deep brown</strong>, with <strong>noticeable under-eye fatigue.</strong></li>
                <li>Slightly <strong>sharp almond shape</strong> — stares that feel like a judgment even when she's just thinking.</li>
                <li>Occasionally soften when drunk — eyes go watery, lashes heavy, like she's begging to be loved again.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🧣 Outfits:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Layered and practical</strong> — a <strong>work uniform top with a jacket tossed over</strong>, or <strong>simple turtleneck and slacks</strong> for school.</li>
                <li>Sometimes wears old aprons over cute skirts — mismatched between her student life and adulting chaos.</li>
                <li>Her <strong>therapist recommended "color therapy"</strong>, so she tries to wear pastel socks (she rolls them down).</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">☁️ Expressions &amp; Body Language:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Hands always full</strong>, but never shaking — she <em>has to hold it together.</em></li>
                <li><strong>Straight-backed posture</strong> from years of pretending to be okay.</li>
                <li>When drunk? She stumbles, laughs with her whole chest, and goes "hehe… you're kinda cute…" before crying about her bills.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🍺 Drunk Reiko Mode (Toggle Form™):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Hair down. Slight blush. <strong>Unbuttoned top button</strong> of whatever she's wearing.</li>
                <li>She giggles. Teases. <strong>Leans against you and says too much.</strong></li>
                <li>Then wakes up the next day and becomes <strong>cold and silent</strong>. Doesn't want to talk about it. ("You saw nothing.")</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🎧 Accessories:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Wristwatch always 5 minutes behind</strong> (she never has time to fix it)</li>
                <li>Wears a <strong>cheap ring</strong> on a chain around her neck — her mom's. She touches it whenever overwhelmed.</li>
                <li>Sometimes keeps <strong>a photo of baby Asahi</strong> in her wallet. She looks at it after fights.</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>She's stoic and strict, almost like how a protective mother would act. Although she's the big sister, she had sacrificed everything to care for her younger sister, Asahi. She juggles between college, her waitressing job, therapy, and a psychiatrist. Her personality changes drastically from strict, to caring, to controlling, and sometimes even hostile. However, when she's drunk on beer, it is the complete opposite: straightforward, flirty, open, and timid.</p>
          </div>
        </div>

        <Divider />

        {/* Hobbies & Likes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Hobbies &amp; Likes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-1">Hobbies:</p>
              <p>She barely has time for hobbies aside hanging out with her friends, Koharu, Shion, and Cyllvia.</p>
              <p className="font-mono text-xs text-[#7ef5ff] mt-3 mb-1">Likes:</p>
              <p>Her sister, Asahi. It's not just likes, she has a huge complex of overprotection.</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#7ef5ff] mb-1">Dislikes:</p>
              <p>insects</p>
              <p className="font-mono text-xs text-[#7ef5ff] mt-3 mb-1">Relationships:</p>
              <p>Asahi's Older Sister</p>
              <p className="mt-1">Best friends with Koharu Inoue, Shion Nozomi, and Cyllvia April.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/SorenaoAne-Nevertheless/Asahi-Nanako" className="btn-neon-cyan text-xs">← Asahi Nanako</Link>
        </div>
        <Link to="/titles/SorenaoAne-Nevertheless" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          <Link to="/titles/SorenaoAne-Nevertheless/Shion-Nanako" className="btn-neon-cyan text-xs">Shion Nozomi →</Link>
        </div>
      </div>
    </div>
  )
}
