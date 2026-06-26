import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout'

const ACCENT = '#7ef5ff';
const GOLD = '#c8a87a';

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

export default function NinjaYokaiAssociationQuarters() {
  return (
    <LorePageLayout>
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span style={{ color: ACCENT }}>Ninja Yokai Association Quarters</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1
          className="font-serif text-3xl sm:text-4xl mb-2"
          style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
        >
          🥷 The Ninja Yokai Association Quarters
        </h1>
        <p className="text-base font-semibold mb-1" style={{ color: ACCENT }}>忍者妖怪協会本部 — Ninja Yōkai Kyōkai Honbu</p>
        <p className="text-sm font-mono text-text-faint">Ninja Yokai Association Quarters | NYAQ</p>
      </div>

      {/* Image Placeholder */}
      <div className="mb-8 rounded-xl border border-border bg-surface flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
        <span className="text-3xl">🥷</span>
        <p className="font-mono text-xs font-semibold" style={{ color: ACCENT }}>NYAQ Building</p>
        <p className="text-text-faint text-xs">[ Image Placeholder ]</p>
      </div>

      {/* ── The NYAQ is Different ── */}
      <SectionHeading>The NYAQ is Different</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Unlike the YARQ and the YHCA, this Association is an ambiguity organization. A morally grey place where Ninjas (humans) and Yokai Ninjas gather.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        NYAQ is a very well known association. Even it's own name reaches from all around the world.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        <strong style={{ color: GOLD }}>Formed in 1795 by the YHCA.</strong>
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        There are a lot of yokai and humans who band together to become Ninjas through wealth, fame, and mercenaries. Ninjas are considered mercenaries in this world, or high classed humans. Some show restraint, while some don't. There are some slight corruption in the NYAQ, but it doesn't overpower the whole Ninja Association. Ninja Yokais that aren't human often protect their friends. Ninjas are the neutral line between Yokai and Humans. A line of ambiguity.
      </p>

      {/* ── Building Design ── */}
      <SubHeading>The Design of the NYAQ</SubHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        It looks very sleek, modern, but also ancient. It's building is compromised of metal, but the metal is tailored to be compatible with wood materials and also great leather textiles. Think of the building like a very large Japanese Temple, which goes up to 10.5 Floors from the ground up, and 11 floors from the ground down.
      </p>

      <p className="text-base font-semibold mb-3 text-text">Floor Hierarchy:</p>

      <div className="rounded-xl border border-border bg-surface p-5 mb-6 space-y-4 font-mono text-sm">
        <div>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: GOLD }}>Underground Floors (Deepest to Surface):</p>
          <p className="text-text-muted">Z.11 | Y.10 | X.09 | W.08 | V.07 | U.06 | T.05 | S.04 | R.03 | Q.02 | P.01</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#4ade80' }}>Ground Level:</p>
          <p className="text-text-muted">A0 (Main Entrance)</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Above Ground Floors:</p>
          <p className="text-text-muted">A.01 | B.02 | C.03 | D.04 | E.05 | F.06 | G.07 | H.08 | I.09 | J.10</p>
        </div>
      </div>

      <p className="text-base font-semibold mb-3 text-text">Floor Descriptions:</p>
      <ul className="space-y-3 list-none mb-6 text-sm text-text-muted">
        <li>
          <strong style={{ color: '#4ade80' }}>Ground A0</strong> is the GROUND floor. The main entrance of the place.
        </li>
        <li>
          <strong style={{ color: GOLD }}>Underground (P.01 – Z.11):</strong> From below Ground A0, Floors P.01 through Z.11 contain very spacious volumes of space that allow Ninjas to practice underground maneuvering at different levels. Floor Z.11 (the deepest level) contains libraries for tomes, talismans, and ancient scrolls. It is free for Ninjas, but if outsiders (non-ninjas) want to use them, they have to buy them for protection from external forces.
        </li>
        <li>
          <strong style={{ color: ACCENT }}>Above Ground (A.01 – J.10):</strong> From Ground A0 upward, Floor A.01 contains stores and antiquities. Floors B.02 through E.05 house aerial training facilities, research labs, investigation rooms, and mission briefing halls. Floors F.06 through I.09 are dedicated to advanced combat training, bounty coordination, meditation sanctuaries, and administrative offices.
          <span className="block mt-2">Floor J.10 is an open roof floor that allows space for big yokais to land on. It's not just for Helicopter landings! There is also a hospital suit on this floor. The means of this is to help heal and recover Yokais who have escaped from the YARC. The open roof floor here allows a great scenic view. Very beautiful at sunset. Helicopter Landing zones are ontop of the hospital.</span>
        </li>
      </ul>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        Unlike the YARC, the NYAQ allows familiarity and a sense of belonging. It is also very big and wide, which is bigger than the Skypeak Obelisk from The Hibrythian Saga. (each of those 10 floors have a lot of volume!). The NYAQ is next to Japan Stadium.
      </p>

      {/* ── Why Different From YARC ── */}
      <SectionHeading>Why The NYAQ Operates Differently From The YARC</SectionHeading>

      <SubHeading>It's about Training, Not Torture.</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Unlike the YARC's brutal telepathic experimentation and memory manipulation, the NYAQ focuses on <strong style={{ color: ACCENT }}>rigorous physical and mental training</strong>. Ninjas and Yokai Ninjas who join undergo intense discipline to hone their abilities through choice, not force. It also helps hone their spiritual awareness about other Yokai Beings and Spirits that come and go. The NYAQ builds strength. The YARC breaks spirits.
      </p>

      <div
        className="rounded-xl p-5 mb-6"
        style={{ background: 'rgba(126,245,255,0.05)', border: `1px solid ${ACCENT}44` }}
      >
        <p className="text-sm font-semibold mb-3" style={{ color: ACCENT }}>⚙️ Strength Through Discipline</p>
        <ul className="space-y-3 list-none text-sm text-text-muted">
          <li>• The NYAQ values <strong style={{ color: ACCENT }}>skill, speed, and power</strong> earned through hard work. Ruruka is strong enough to pulverize factory-sized buildings and could destroy a state-wide city if she didn't hold back. She's powerful because she TRAINED for it.</li>
          <li>• <strong style={{ color: '#ff6b6b' }}>The Most Important Trait for Ninjas</strong> is that they will <em>honor</em> Death when their time comes. Because their mind is trained <em>rightfully to discern</em> whether their time is up or not. If some are arrogant enough to believe that they are better and they don't deserve death…..<em>consequences will arrive.</em></li>
        </ul>
      </div>

      {/* ── Ninja Terms ── */}
      <SubHeading>The term, "Ninja" is a loose term, but sets the tone for all.</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        In the NYAQ, There are Angel Ninjas, Yokai Ninjas, Spirit Ninjas, and Human Ninjas. In order to help differentiate who is on each side, the organization came up with four new terms:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          { num: '1.', label: 'Funjin-kō-shin | 粉塵行忍', sub: 'Dust Path Ninja', type: 'For Human Ninjas' },
          { num: '2.', label: 'Yōkai-kō-shin | 妖怪行忍', sub: 'Yokai Path Ninja', type: 'For Yokai Ninjas' },
          { num: '3.', label: 'Seishin-kō-shin | 精神行忍', sub: 'Spirit Path Ninja', type: 'For Spirit Ninjas' },
          { num: '4.', label: 'Tenshi-kō-shin | 天使行忍', sub: 'Angel Path Ninja', type: 'For Angel Ninjas' },
        ].map((n) => (
          <div key={n.num} className="border border-border rounded-xl bg-surface p-4">
            <p className="text-xs text-text-faint mb-0.5">{n.num} {n.type}</p>
            <p className="font-mono text-sm font-semibold" style={{ color: ACCENT }}>{n.label}</p>
            <p className="text-xs text-text-muted mt-0.5">({n.sub})</p>
          </div>
        ))}
      </div>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        Dullahans, Warriors and Martial Artists also come and go to the NYAQ. They might not be ninjas, but they believe that <em style={{ color: 'rgba(255,255,255,0.5)' }}>honoring death</em> is also a <em>valuable trait</em> for spiritual awareness for all ninjas and warriors alike. Which is why they get along well with all Ninjas alike.
      </p>

      {/* ── People Who Made Impact ── */}
      <SubHeading>People Who Made Impact</SubHeading>

      <div className="space-y-4 mb-6">
        {/* Ruruka */}
        <div className="border border-border rounded-xl bg-surface p-5">
          <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👤 Koa Ruruka</p>
          <p className="text-sm text-text-muted leading-relaxed mb-2">
            Koa Ruruka was kicked out from her clan, The Koa Clan, but she went to the NYAQ to train herself physically and emotionally. All she requested to the NYAQ is for her to be less known, which is why fame isn't her number one priority, even though she knows she has that influence.
          </p>
          <ul className="space-y-1 list-none ml-2 text-sm text-text-muted">
            <li>• Trained under the NYAQ at the Japan National Stadium, where her top recorded speed reached <strong style={{ color: ACCENT }}>90-120 miles per hour in under 15 minutes</strong>. She earned the nickname <strong style={{ color: ACCENT }}>"Speed Demon"</strong> through dedication and skill, not through having her mind broken. Ruruka gets along well with other Ninjas.</li>
            <li>• She can always go back to train and raise her rank if she wants.</li>
            <li>• Wanted Haruhi to become a Ninja, but she refused.</li>
          </ul>
        </div>

        {/* Erika */}
        <div className="border border-border rounded-xl bg-surface p-5">
          <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👤 Erika Von Schuvausst</p>
          <p className="text-sm text-text-muted leading-relaxed mb-2">
            Erika hails from London, but has Romanian DNA in her.
          </p>
          <ul className="space-y-1 list-none ml-2 text-sm text-text-muted">
            <li>• She's a Vampire Yokai! Her significance in the NYAQ made her stand out because of how quietly she takes out her clients and bounties without killing. This earned her the nickname, <em style={{ color: ACCENT }}>The Silent Striker</em></li>
            <li>• She is said to be 250 years old, but looks like a teenager. Great friends with Ruruka, but they haven't chatted in a long time.</li>
          </ul>
        </div>

        {/* Xueye */}
        <div className="border border-border rounded-xl bg-surface p-5">
          <p className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>👤 Xueye Ryuko</p>
          <p className="text-sm text-text-muted leading-relaxed mb-2">
            Xueye Ryuko hails from Guangdong, China, which speaks Japanese-Chinese. From the Han Dynasty.
          </p>
          <ul className="space-y-1 list-none ml-2 text-sm text-text-muted">
            <li>• Her name means Snowleaf Dragon. Her Ninja Status is infamous within the NYAQ. Supposedly, she quelled an evil spirit in America by the name Eustauss because what he was doing was beyond human comprehension.</li>
            <li>• This earned her the nickname, <em style={{ color: ACCENT }}>"Dragon Queller of Snow"</em> and <em style={{ color: ACCENT }}>"Snow's Wrath."</em></li>
            <li>• Snow's Wrath was a nickname given by Hanako Reina (they briefly met when they were little).</li>
          </ul>
        </div>
      </div>

      {/* ── Core Values ── */}
      <SubHeading>Voluntary Membership and Core Values</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        The NYAQ operates as a <strong style={{ color: ACCENT }}>mercenary organization</strong> where individuals join by choice for wealth, fame, or purpose. Members are free to accept or decline missions. They train, grow, and leave if they wish.
      </p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-6">
        <li>• This organization treasures values like diligence, perseverance, compassion.</li>
        <li>• The most important value is <strong style={{ color: ACCENT }}><em>discernment</em></strong>.</li>
      </ul>

      <SubHeading>Fear and Respect</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Yokai across Neo-Japan <strong style={{ color: ACCENT }}>fear the YARC more than death</strong>. It's a spiritual curse. A place of nightmares.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        The NYAQ is respected? It's respected, even if controversial. Ninjas are seen as the <strong style={{ color: ACCENT }}>neutral line between Yokai and Humans</strong>—a line of ambiguity, not terror.
      </p>

      <SubHeading>Community and Protection</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        Ninja Yokais in the NYAQ, even the non-human ones, <strong style={{ color: ACCENT }}>protect their friends</strong>. There's comrades, bonds, and mutual respect among members. High-status Ninjas like Ruruka, or Erika, may be "less known" by choice, but they're still part of a community.
      </p>

      {/* ── Moral Ambiguity ── */}
      <SectionHeading>Moral Ambiguity vs. Outright Corruption</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Yes, the NYAQ has <strong style={{ color: ACCENT }}>some corruption</strong>. Some Ninjas show restraint, others don't. It's a morally grey space where lines blur between justice and mercenary work.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        But this is NOT the same as the YARC's systematic corruption under <strong style={{ color: '#ff6b6b' }}>Shikuibito</strong>, the Death Eater spirit.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        The YARC disguises itself as a sanctuary while conducting psychological torture, sexual assault, and mind erasure.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        The corruption in the NYAQ doesn't <strong style={{ color: ACCENT }}>overpower the entire association</strong> the way it does in the YARC.
      </p>

      {/* ── Key Takeaway ── */}
      <SectionHeading>Key Takeaway</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        The NYAQ and YARC were both formed by the YHCA, but they could not be more different in practice:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div
          className="rounded-xl p-5"
          style={{ background: 'rgba(126,245,255,0.06)', border: `1px solid ${ACCENT}55` }}
        >
          <p className="font-bold text-sm mb-2" style={{ color: ACCENT }}>NYAQ</p>
          <p className="text-sm text-text-muted">Mercenary guild, training grounds, morally grey but functional.</p>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ background: 'rgba(255,107,107,0.06)', border: '1px solid rgba(255,107,107,0.4)' }}
        >
          <p className="font-bold text-sm mb-2" style={{ color: '#ff6b6b' }}>YARC</p>
          <p className="text-sm text-text-muted">Torture facility, mind prison, corrupted beyond repair.</p>
        </div>
      </div>

      <div
        className="rounded-xl p-5 mb-10 text-center space-y-2"
        style={{ background: 'rgba(126,245,255,0.04)', border: `1px solid ${ACCENT}33` }}
      >
        <p className="font-semibold text-base" style={{ color: ACCENT }}>The NYAQ teaches you to be a weapon and to protect others.</p>
        <p className="font-semibold text-base" style={{ color: '#ff6b6b' }}>The YARC breaks you until you're nothing.</p>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-association-recovery-center" className="btn-neon-cyan text-sm px-4 py-2 rounded">
          ← YARC
        </Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/education-in-neo-japan" className="btn-neon-purple text-sm px-4 py-2 rounded">
          Education →
        </Link>
      </div>

    </div>
    </LorePageLayout>
  );
}
