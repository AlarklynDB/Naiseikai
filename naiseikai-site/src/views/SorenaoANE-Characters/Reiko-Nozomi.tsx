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
      <span style={{ color: ACCENT }}>Reiko Nanako</span>
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

export default function ReikoNanakoPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character · SorenaoANE</span>
          <h2 className="font-serif text-3xl mb-1" style={{ color: ACCENT }}>👥 Reiko Nanako</h2>
          <p className="text-text-faint font-mono text-sm italic">Nevertheless, You're Still My Sister!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <SectionTitle>Identity</SectionTitle>
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
              { name: 'Reiko Nanako', path: '/titles/SorenaoAne-Nevertheless/Reiko-Nozomi', active: true },
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
            <p>Reiko Nanako, is the older sister of Asahi. She's hard working, studious, open, and kind. She goes to college and works a waitress job. In college, she is friends with Cyllvia April, an international student from London who aims to be a teacher. Koharu Inoue, a firey girl with fierce drive. And Shion Nozomi, a quiet and intelligent girl.</p>
            <p>Her three friends are very close to her, and they know she's trying her best to care for Asahi.</p>
            <p>However, these two sisters….aren't really dynamic. At a young age, both their left them due to a the flu season which hit hard hard in some years. The two of them were alone, having Reiko to bare everything; bills, jobs, funding, and more. Because of this, Asahi notices the huge gap in their sibling dynamic. Her sister just didn't feel like a sister anymore, she became her parent. The sibling bond they once had disappeared overnight. Reiko still sees her younger sister as a person who has a unique flaw.</p>
            <p>Reiko practically raised Asahi as a daughter, and despite the nagging and the protection that she showed, Asahi showed resentment. Her younger sister, sees this as annoying, because she's not a child anymore. She's growing and doesn't need Reiko to protect her, but, Reiko insists, strongly.</p>
            <p>However, even as the relationship becomes harsh, the bridge widens. Reiko tried to kill herself a few times.</p>
            <ul className="list-none ml-2 space-y-1">
              <li>• Bridge — She tried to jump, but couldn't.</li>
              <li>• Sleeping Pills — very high doses, but she still couldn't.</li>
            </ul>
            <p>All the burden and weight on her shoulders became too much, she couldn't muster the courage to. She wants to protect her sister, but at the same time, herself. Therapy. She tried, but couldn't. The best chance was to go see a psychiatrist, or an asylum. She's breaking down. She hid the pills in her car, along with a note before her friends found her, completely drowning with low self-esteem.</p>
            <p>It felt like a week when she went to see the psychiatrist, but it was a month in truth. She disappeared for a month. She had neglected everything, including her friends and her sister, she didn't care. She wants this to end.</p>
            <p>But on one day, July 17th (Asahi's Birthday), Reiko didn't want to go home. She's too afraid to look at Asahi. Too afraid to celebrate her sisters' birthday. She knows she would get a talking about her disappearance. Instead, she goes to her friends' place, Koharu's apartment. But little did she know, Asahi was there. She goes in, only to see Asahi enjoying the time with her friends.</p>
            <p>Asahi, who finally noticed Reiko, broke down angrily. Rants about her short comings, her disappearances, and worst of all: the suicide note. Reiko explains what had happened. They were furious and mad at her, because they secretly knew that Reiko can't be all things at once: a mom, a dad, a sister: a while going to college, trying to balance it between work, therapy, and a psychiatric ward. She became a martyr.</p>
          </div>
        </div>

        <Divider />

        {/* Four Identities */}
        <div>
          <SectionTitle>The Four Identities</SectionTitle>
          <div className="space-y-4">
            <IdentityBlock title="The Social Self">
              <p>The responsible martyr who is hardworking, studious, open, and kind. She works a waitress job while going to college and still shows up for everyone. She is the big sister who leaves notes saying "heat the food I made." She has straight-backed posture and hands that are always full but never shaking.</p>
            </IdentityBlock>
            <IdentityBlock title="The Personal Self">
              <p>The exhausted young woman who barely has time for hobbies. She touches her mother's cheap ring on a chain when overwhelmed. She looks at a photo of baby Asahi in her wallet after fights. She drinks beer to become someone else, flirty and open and timid. She is breaking under the weight of being parent, provider, and sister all at once. Her drunk self is her surface personal appearance.</p>
            </IdentityBlock>
            <IdentityBlock title="The Core Self">
              <p>The girl who wants to be forgiven for wanting her own life. She loves Asahi but resents what she had to sacrifice. She wants to be a sister, not a saint. She is terrified that if she stops being useful, nobody will love her. She equates her worth with how much she can endure.</p>
            </IdentityBlock>
            <IdentityBlock title="The Hidden Self">
              <p>She has tried to kill herself multiple times. She hid pills in her car alongside a suicide note. She spent a month in a psychiatric ward and told nobody. She disappeared because she wanted to end it all, and the only reason she did not was because she lacked the courage. She is drowning in low self-esteem and believes her friends would be better off without her. But every time she tries to do unthinkable acts, she stops. Not because she is afraid, but because she's mentally unstable to do anything else.</p>
            </IdentityBlock>
          </div>
        </div>

        <Divider />

        {/* Visual Design */}
        <div>
          <SectionTitle>Visual Design — Age 24</SectionTitle>

          <div className="callout mb-5">
            <p className="text-sm text-text-muted italic">Stoic, tired beauty with too many burdens for one back to carry. You see her and you just <em>know</em> she skipped lunch, ran to work, came back at 1AM, and left notes like "heat the food I made." Her presence is powerful, but <em>her eyes say please don't ask me if I'm okay.</em></p>
          </div>

          <div className="space-y-4">
            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>💇‍♀️ Hair</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Long dark chestnut</strong>, tied in a <strong className="text-text">low bun or ponytail</strong>, often messy from running around.</li>
                <li>• A few strands <strong className="text-text">fall loose</strong> — visual metaphor for her losing control no matter how hard she holds it together.</li>
                <li>• Sometimes wears a clip Asahi gifted her long ago — forgotten in her hair, still there.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👀 Eyes</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Deep brown</strong>, with <strong className="text-text">noticeable under-eye fatigue</strong>.</li>
                <li>• Slightly <strong className="text-text">sharp almond shape</strong> — stares that feel like a judgment even when she's just thinking.</li>
                <li>• Occasionally soften when drunk — eyes go watery, lashes heavy, like she's begging to be loved again.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👗 Outfits</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Layered and practical</strong> — a <strong className="text-text">work uniform top with a jacket tossed over</strong>, or <strong className="text-text">simple turtleneck and slacks</strong> for school.</li>
                <li>• Sometimes wears old aprons over cute skirts — mismatched between her student life and adulting chaos.</li>
                <li>• Her <strong className="text-text">therapist recommended "color therapy"</strong>, so she tries to wear pastel socks (she rolls them down).</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🌬️ Expressions & Body Language</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Hands always full</strong>, but never shaking — she <em>has to hold it together.</em></li>
                <li>• <strong className="text-text">Straight-backed posture</strong> from years of pretending to be okay.</li>
                <li>• When drunk? She stumbles, laughs with her whole chest, and goes "hehe… you're kinda cute…" before crying about her bills.</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>🍺 Drunk Reiko Mode (Toggle Form™)</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• Hair down. Slight blush. <strong className="text-text">Unbuttoned top button</strong> of whatever she's wearing.</li>
                <li>• She giggles. Teases. <strong className="text-text">Leans against you and says too much.</strong></li>
                <li>• Then wakes up the next day and becomes <strong className="text-text">cold and silent</strong>. Doesn't want to talk about it. ("You saw nothing.")</li>
              </ul>
            </div>

            <div className="neon-card p-5">
              <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>💍 Accessories</p>
              <ul className="text-sm text-text-muted leading-relaxed space-y-1 list-none">
                <li>• <strong className="text-text">Wristwatch always 5 minutes behind</strong> (she never has time to fix it)</li>
                <li>• Wears a <strong className="text-text">cheap ring</strong> on a chain around her neck — her mom's. She touches it whenever overwhelmed.</li>
                <li>• Sometimes keeps <strong className="text-text">a photo of baby Asahi</strong> in her wallet. She looks at it after fights.</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <SectionTitle>Personality</SectionTitle>
          <p className="text-sm text-text-muted leading-relaxed">She's stoic and strict, almost like how a protective mother would act. Although she's the big sister, she had sacrificed everything to care for her younger sister, Asahi. She juggles between college, her waitressing job, therapy, and a psychiatrist. Her personality changes drastically from strict, to caring, to controlling, and sometimes even hostile. However, when she's drunk on beer, it is the complete opposite: straightforward, flirty, open, and timid.</p>
        </div>

        <Divider />

        {/* Hobbies / Likes / Dislikes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Hobbies</p>
            <p className="text-sm text-text-muted">She barely has time for hobbies aside hanging out with her friends, Koharu, Shion, and Cyllvia.</p>
          </div>
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Likes</p>
            <p className="text-sm text-text-muted">Her sister, Asahi. It's not just likes, she has a huge complex of overprotection.</p>
          </div>
          <div className="neon-card p-4">
            <p className="font-semibold text-xs font-mono text-text-faint mb-2 uppercase tracking-widest">Dislikes</p>
            <p className="text-sm text-text-muted">Insects</p>
          </div>
        </div>

        <Divider />

        {/* Relationships */}
        <div>
          <SectionTitle>Relationships</SectionTitle>
          <div className="neon-card p-4 text-sm text-text-muted space-y-1">
            <p>Asahi's Older Sister</p>
            <p>She's best friends with Koharu Inoue, Shion Nozomi, and Cyllvia April.</p>
          </div>
        </div>


        <div className="section-divider my-8" />

        {/* Character Navigation */}
        <div className="flex justify-between items-center pt-2">
                  <Link
            to="/titles/SorenaoAne-Nevertheless/Asahi-Nanako"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-text-faint hover:border-[#d49fff] hover:text-[#d49fff] transition-colors"
          >
            ← Asahi Nanako
          </Link>
                  <Link
            to="/titles/SorenaoAne-Nevertheless/Shion-Nanako"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-text-faint hover:border-[#d49fff] hover:text-[#d49fff] transition-colors"
          >
            Shion Nozomi →
          </Link>
        </div>

      </div>
    </div>
  )
}
