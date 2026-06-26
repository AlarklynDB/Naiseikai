import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout'

const ACCENT = '#7ef5ff';

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id ?? (typeof children === 'string' ? children.toLowerCase().replace(/&amp;/g, 'and').replace(/[&]/g, 'and').replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-'): undefined)}
      className="font-serif text-2xl font-bold mt-10 mb-3"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-lg font-semibold mt-6 mb-2" style={{ color: ACCENT }}>
      {children}
    </h3>
  );
}

function Divider() {
  return <p className="text-text-faint my-3">─────⊰</p>;
}

export default function EducationInNeoJapan() {
  return (
    <LorePageLayout>
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span style={{ color: ACCENT }}>Education in Neo-Japan</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1
          className="font-serif text-4xl sm:text-5xl mb-4"
          style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
        >
          🏫 Education in Neo-Japan
        </h1>
      </div>

      {/* ── The Formation of Education ── */}
      <SectionHeading>The Formation of Education</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        On March 25th, 1675, Education in Neo Japan has formed to help understand how the entirety of the world works. Education in Neo-Japan goes up from 6 &gt; 3 &gt; 3 &gt; 5, with Y5 for Yokai University!
      </p>

      <hr className="border-border my-4" />

      <p className="text-base text-text-muted leading-relaxed mb-4">
        In Neo-Japan 2100+, education follows a unified progression that prepares both yokai and human students for their roles in society. The system emphasizes coexistence, spiritual practice through Ujuukyō, and understanding of yokai magic alongside traditional academics.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        All students—regardless of species or class (wealth)—complete the foundational <strong style={{ color: ACCENT }}>6&gt;3&gt;3 structure</strong> (Elementary, Junior High, and High School) before choosing their specialized university path. Education is really flexible here in Neo-Japan, albeit with drawbacks. But the most important thing is that Education is about Faith, based on Ujuukyo Teachings.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Most of the professors, counselors, councilors, and teachers in this edu-system are Ninjas, since they hold a deep understanding of both human and yokai traits. It's very rare to see actual yokai or human teachers, but they're often here as Alumni or Shadows in search of a Teaching Assistant Field or if they want to be staff that works behind the scenes.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        TLDR: The NYAQ teaches Ninjas to always remain neutral and friendly, while retaining a curious and learning side, which is also a teaching from{' '}
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/religion-of-ujuukyo" className="underline" style={{ color: ACCENT }}>Ujuukyo</Link>!
      </p>

      {/* ── Education Schedule ── */}
      <SectionHeading>Education Schedule</SectionHeading>

      <SubHeading>Fledgling Path (Grades 1–6)</SubHeading>
      <p className="text-sm text-text-muted mb-1"><strong className="text-text">Active School Hours:</strong> 10:30 AM - 1:45 PM</p>
      <p className="text-sm text-text-muted mb-3"><strong className="text-text">Extracurricular Activities:</strong> +25 minutes after school hours</p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        All students in Elementary follow this consistent schedule, albeit having less hours than Junior &amp; Senior High. Not only Fledgling Students require basic knowledge, they also need more hours out of school to spend time with their families. Relationships are important, not just from school!
      </p>
      <Divider />

      <SubHeading>Junior High – Senior High (7–12)</SubHeading>
      <p className="text-sm text-text-muted mb-1"><strong className="text-text">Active School Hours:</strong> 9:30 AM - 3:45 PM</p>
      <p className="text-sm text-text-muted mb-3"><strong className="text-text">Extracurricular Activities:</strong> +25 minutes after school hours</p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        All students in Junior High, and High School follow this consistent daily schedule, ensuring structure and routine during their formative years.
      </p>
      <Divider />

      <SubHeading>University Level (U-5 &amp; YU-5)</SubHeading>
      <p className="text-sm text-text-muted mb-1"><strong className="text-text">Schedule:</strong> Flexible 24/7 Access</p>
      <p className="text-sm text-text-muted mb-1"><strong className="text-text">Format:</strong> Both in-person and remote learning available</p>
      <p className="text-sm text-text-muted mb-3"><strong className="text-text">Holidays:</strong> Closed for major holidays</p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        University students enjoy complete flexibility in their learning schedules, allowing them to balance their studies with internships, research, personal projects, and life responsibilities. Remote learning options ensure that students can continue their education even during illness, emergencies, or when traveling for fieldwork—which includes teachers too. Everyone needs a break now and then.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Ninjas who work under the{' '}
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/ninja-yokai-association-quarters" className="underline" style={{ color: ACCENT }}>NYAQ</Link>{' '}
        will have the option to opt in for remote classes, because the NYAQ also has their own education system that works in tandem for U5 and Y5.
      </p>

      {/* ── Major Holiday / Season Closures ── */}
      <SectionHeading>Major Holiday / Season Closures</SectionHeading>

      {[
        { date: 'May 05, 050 — Ujuukyo Religion\'s Formation (05/05/050)', desc: 'All education is closed for a day. One of the most sacred day to honor your own faith.' },
        { date: 'April 22 — Earth Day', desc: 'Earth Day. Nature should be respected equally to human life.' },
        { date: 'Nov 26–28 — Thanksgiving', desc: 'Familial Bonds are important. Banquets!' },
        { date: 'Dec 31st – Jan 4th — New Years', desc: 'The significance of a new year means that time needs to be appreciated. Memories are made. Cultural Festivals! Food Stalls! Fireworks!' },
        { date: 'March 23rd–27th — Spring', desc: 'More for a rest for Education after the New Years. Remote for U-5 and YU-5 are still active, just less participants, (there are people who are school addicts, yes).' },
        { date: 'May 30th – Aug 28th — Summer', desc: 'Well, who wouldn\'t want summer?! People deserve vacations and breaks! And fun!' },
      ].map((h) => (
        <div key={h.date} className="border border-border rounded-xl bg-surface p-4 mb-3">
          <p className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>─────⊰ {h.date}</p>
          <p className="text-sm text-text-muted">{h.desc}</p>
        </div>
      ))}

      <p className="text-base text-text-muted leading-relaxed mt-4 mb-3">
        If there are storms or unnatural supernatural activity, education WILL be paused for some time, and then resume. Investigations occur during this time to understand unseen forces even if it is not caused by yokai themselves.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        If there is a feud between clans (ninjas or yokai), school will still continue. Clans are mostly about internal affairs which don't negatively influence other people's lives. BUT if they are dragged into it, they gotta help too.
      </p>

      {/* ── The Foundational Path ── */}
      <SectionHeading>The Foundational Path (12 Years)</SectionHeading>

      {/* Elementary */}
      <SubHeading>Elementary School: Fledgling (6 Years)</SubHeading>
      <p className="text-sm text-text-faint font-mono mb-3">Grades 1–6</p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        The Fledgling years introduce young students to the basics of literacy, mathematics, history, and the fundamentals of yokai-human coexistence. Children learn:
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Basic Ujuukyō principles and practices</li>
        <li>• Introduction to yokai species and culture</li>
        <li>• Foundational academics</li>
        <li>• Social integration between human and yokai students</li>
      </ul>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        By the end of Elementary, students understand the world they live in and the importance of harmony between all beings.
      </p>
      <hr className="border-border my-4" />

      {/* Junior High */}
      <SubHeading>Junior High: Novice | 3 Years or J3</SubHeading>
      <p className="text-sm text-text-faint font-mono mb-3">Grades 7–9</p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        The Novice stage deepens knowledge and begins specialized skill development. Students explore:
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Intermediate Ujuukyō teachings and rituals</li>
        <li>• Yokai magic theory (for yokai students) and yokai culture studies (for human students)</li>
        <li>• Advanced academics across all subjects</li>
        <li>• Civic education about YHCA, YARC, and NYAQ</li>
        <li>• Elective tracks that hint at future career paths</li>
      </ul>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Novices begin to discover their passions and strengths during these formative years.
      </p>
      <hr className="border-border my-4" />

      {/* Senior High */}
      <SubHeading>Senior High School | 3 Years or S3</SubHeading>
      <p className="text-base text-text-muted font-semibold mb-4">Trainee → Apprentice → Disciple</p>

      <p className="font-semibold text-text mb-1">Grade 10: Trainee</p>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        The first year of high school marks the beginning of serious preparation. Trainees focus on:
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Choosing preliminary specializations</li>
        <li>• Advanced yokai studies or human-yokai relations</li>
        <li>• Deeper Ujuukyō practice and meditation techniques</li>
        <li>• Building foundational skills for their chosen fields</li>
      </ul>

      <p className="font-semibold text-text mb-1">Grade 11: Apprentice</p>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        The second year intensifies training and application. Apprentices:
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Work with mentors in their chosen fields</li>
        <li>• Participate in internships or field experiences</li>
        <li>• Study specialized yokai magic or guardian techniques</li>
        <li>• Develop discipline and mastery mindset</li>
      </ul>

      <p className="font-semibold text-text mb-1">Grade 12: Disciple</p>
      <p className="text-base text-text-muted leading-relaxed mb-2">
        The final year transforms students into Disciples—individuals ready to walk their own path. Disciples:
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Demonstrate mastery of high school-level knowledge</li>
        <li>• Complete a capstone project or examination.</li>
        <li>• Alchemy and Chemistry is a required prerequisite in Disciple Years.</li>
        <li>• Make their critical choice: <strong style={{ color: ACCENT }}>U5 (University)</strong> or <strong style={{ color: ACCENT }}>Y4 (Yokai University)</strong></li>
        <li>• Prepare mentally and spiritually for their next journey</li>
      </ul>

      {/* ── The University Split ── */}
      <SectionHeading>The University Split</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Upon graduation as a <strong style={{ color: ACCENT }}>Disciple</strong>, students can choose between two prestigious paths. It is also fine for those who wish to pursue a life of their own, since in{' '}
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/religion-of-ujuukyo" className="underline" style={{ color: ACCENT }}>Ujuukyo's Religion</Link>,
        the choice is free for all humankind alike. Personhood and Self Faith is equally important along with education.
      </p>

      <p className="text-base font-semibold text-center mb-8" style={{ color: ACCENT }}>
        It's not a choice. It's a path.
      </p>

      {/* U-5 */}
      <div className="border border-border rounded-xl bg-surface p-6 mb-6">
        <h3 className="font-serif text-xl font-bold mb-1" style={{ color: ACCENT }}>University (U-5): 5-Year Program</h3>
        <p className="text-sm text-text-muted mb-4">
          The traditional university path for students pursuing careers in general fields, human society integration, business, arts, sciences, and more. Yokai are also welcome here!
        </p>

        {[
          { label: 'Year 1–2: Quester', desc: 'The longest phase, emphasizing exploration and discovery. Questers explore multiple disciplines and fields, seek their true calling and passion, build broad foundational knowledge, and develop critical thinking and independence.' },
          { label: 'Year 3: Scholar', desc: 'The refinement year. Scholars narrow focus to their chosen specialization, engage in deep academic study, conduct research and analysis, and develop expertise in their field.' },
          { label: 'Year 4: Adeptus', desc: 'The mastery year. Adeptus students demonstrate advanced skill and knowledge, complete major projects or theses, prepare for professional work, and mentor younger students.' },
          { label: 'Year 5: Sentinel', desc: 'The final year transforms graduates into Sentinels—guardians of knowledge ready to serve society. Sentinels complete their ultimate academic challenge, take on leadership and teaching roles, prepare to enter the workforce as protectors and guides, and embody the values of Ujuukyō in their profession.' },
        ].map((y) => (
          <div key={y.label} className="mb-4">
            <p className="text-sm font-semibold mb-1 text-text-faint">─────⊰ {y.label}</p>
            <p className="text-sm text-text-muted leading-relaxed">{y.desc}</p>
          </div>
        ))}
      </div>

      {/* YU-5 */}
      <div className="border border-border rounded-xl bg-surface p-6 mb-6">
        <h3 className="font-serif text-xl font-bold mb-1" style={{ color: ACCENT }}>Yokai University (YU-5): 5-Year Program</h3>
        <p className="text-sm text-text-muted mb-1">
          A specialized path focused on yokai biology, magic, culture, spirituality, and guardianship. While designed for yokai students, humans are welcome—especially those training to become yokai guardians, such as ninjas, or those pursuing careers in yokai medicine, diplomacy, or research.
        </p>
        <p className="text-sm text-text-muted mb-4">
          YU-Y3, 4, and 5 each have their own graduation programs. People like to refer to this program as <strong style={{ color: ACCENT }}>The High Five</strong> as a pun.
        </p>

        {/* Year 1-2: Sage */}
        <div className="mb-5">
          <p className="text-sm font-semibold mb-1 text-text-faint">─────⊰ Year 1–2: Sage (required year)</p>
          <p className="text-sm text-text-muted leading-relaxed mb-2">
            The wisdom year. Sages study advanced yokai magic and spiritual practices, learn the deep history and lore of yokai culture, explore mystical philosophy and ethics, and develop intuition and spiritual awareness.
          </p>
        </div>

        <hr className="border-border my-4" />

        {/* Year 3: Baron */}
        <div className="mb-3">
          <p className="text-sm font-semibold mb-1 text-text-faint">─────⊰ Year 3: Baron — Baron Degree Program</p>
          <p className="text-sm text-text-muted leading-relaxed mb-2">
            The elevation year. Barons gain status and recognition within yokai academic circles, master specialized yokai techniques or fields, study yokai nobility, politics, and social structures, and build authority and confidence.
          </p>
          <p className="text-sm text-text-muted mb-3">This is where Ninja Teachers graduate from! There are also other teaching professions (and others) within the degree.</p>
        </div>

        <div className="rounded-lg p-4 mb-5" style={{ background: 'rgba(126,245,255,0.05)', border: `1px solid ${ACCENT}33` }}>
          <p className="text-xs text-text-faint font-semibold mb-2">─────⊰ Year 3: Graduates / Alumni</p>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold" style={{ color: ACCENT }}>⊰⊰ Haruhi Aoi — Animal Therapy / Therapist &amp; Doctor</p>
              <p className="text-sm text-text-muted">Became well known for healing a Dragon Ninja who came back from a dangerous mission.</p>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: ACCENT }}>⊰⊰ Lucielle Frankfurt — Surgeon</p>
              <p className="text-sm text-text-muted">A Vampire Yokai whose skills are top notch. Great precision and still hands. She's well known in the medical industry and also respects Haruhi's profession. They once met in university, but the exchange was short because Lucielle had a meeting with the Board.</p>
            </div>
          </div>
        </div>

        <hr className="border-border my-4" />

        {/* Year 4: Herald */}
        <div className="mb-3">
          <p className="text-sm font-semibold mb-1 text-text-faint">─────⊰ Year 4: Herald — Herald Degree Program</p>
          <p className="text-sm text-text-muted leading-relaxed mb-2">
            The messenger year. Heralds serve as bridges between yokai and human communities, communicate yokai culture and needs to wider society, represent their field with pride and clarity, and engage in outreach, teaching, or diplomacy.
          </p>
          <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-3">
            <li>• Technology and Magic Teachings</li>
            <li>• Synergy and Symbiosis within science and supernatural forces.</li>
          </ul>
          <p className="text-sm text-text-muted mb-3">This is where most Scientists, Yokai Specialists, Magic Scientists graduate from.</p>
        </div>

        <div className="rounded-lg p-4 mb-5" style={{ background: 'rgba(126,245,255,0.05)', border: `1px solid ${ACCENT}33` }}>
          <p className="text-xs text-text-faint font-semibold mb-2">─────⊰ Year 4: Graduates / Alumni</p>
          <div>
            <p className="text-sm font-semibold" style={{ color: ACCENT }}>⊰⊰ Nora Renaku — AI Specialist / Car Brand Owner</p>
            <p className="text-sm text-text-muted">
              Nora is the one behind the Magnoids that help Neo-Japan stay afloat. Founder of REI-3 (network system) and Renaku Cars. Nora is a Vapor Spirit from year 1599.
            </p>
          </div>
        </div>

        <hr className="border-border my-4" />

        {/* Year 5: Saint */}
        <div className="mb-3">
          <p className="text-sm font-semibold mb-1 text-text-faint">─────⊰ Year 5: Saint — Saint Degree Program</p>
          <p className="text-sm text-text-muted leading-relaxed mb-2">
            The transcendence year. Saints achieve spiritual and academic enlightenment in their field, embody the highest ideals of Ujuukyō and yokai tradition, complete a transformative final project or ritual, and graduate as revered specialists and spiritual leaders.
          </p>
          <p className="text-sm text-text-muted mb-3">Philosophers, Doctrines, Mages, Wizards graduate from this degree program.</p>
        </div>

        <div className="rounded-lg p-4" style={{ background: 'rgba(126,245,255,0.05)', border: `1px solid ${ACCENT}33` }}>
          <p className="text-xs text-text-faint font-semibold mb-2">─────⊰ Year 5: Graduates / Alumni</p>
          <div>
            <p className="text-sm font-semibold" style={{ color: ACCENT }}>⊰⊰ "Yokai-X"</p>
            <p className="text-sm text-text-muted">
              Said to harness the power of healing and illusions. They've been captured by the YARC once, but even that shady organization are confused about how this yokai can be here and everywhere at once. Location unknown.
            </p>
          </div>
        </div>
      </div>

      {/* ── Who Attends Yokai University ── */}
      <SectionHeading>Who Attends Yokai University?</SectionHeading>

      <ul className="space-y-2 list-none ml-2 text-base text-text-muted mb-6">
        <li>• <strong className="text-text">Yokai students</strong> seeking to master their heritage, magic, and cultural identity</li>
        <li>• <strong className="text-text">Human ninjas and guardians</strong> training to protect and understand yokai on a profound level</li>
        <li>• <strong className="text-text">Researchers</strong> studying yokai biology, magic, or sociology</li>
        <li>• <strong className="text-text">Healers</strong> specializing in yokai medicine and spiritual care</li>
        <li>• <strong className="text-text">Diplomats</strong> working to strengthen yokai-human relations</li>
        <li>• <strong className="text-text">Spiritual practitioners</strong> devoted to Ujuukyō and its connection to yokai mysticism</li>
      </ul>

      <p className="text-base text-text-muted leading-relaxed mb-10">
        Graduating as a <strong style={{ color: ACCENT }}>Saint</strong> from Y4 is considered deeply prestigious, especially in fields related to yokai culture, magic, and spirituality. Meanwhile, graduating as a <strong style={{ color: ACCENT }}>Sentinel</strong> from U5 is respected in broader societal and professional contexts. Both paths are equally valued—simply serving different purposes in Neo-Japan's harmonious society.
      </p>

      {/* ── Bottom Nav ── */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/ninja-yokai-association-quarters" className="btn-neon-cyan text-sm px-4 py-2 rounded">
          ← NYAQ
        </Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/megacorps-and-brands" className="btn-neon-purple text-sm px-4 py-2 rounded">
          Megacorps &amp; Brands →
        </Link>
      </div>

    </div>
    </LorePageLayout>
  );
}
