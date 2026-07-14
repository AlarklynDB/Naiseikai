import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout'

const ACCENT = '#ffd080';
const LINK = { color: '#7ab8f5' };

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id ?? (typeof children === 'string' ? children.toLowerCase().replace(/&amp;/g, 'and').replace(/[&]/g, 'and').replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-') : undefined)}
      className="font-serif text-2xl font-bold mt-10 mb-3"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-text mt-5 mb-1" style={{ color: ACCENT }}>
      {children}
    </p>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="pl-4 italic text-sm text-text-muted mb-4"
      style={{ borderLeft: `2px solid ${ACCENT}` }}
    >
      {children}
    </blockquote>
  );
}

export default function TheSixPrimordialEmpresses() {
  return (
    <LorePageLayout>
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span style={{ color: ACCENT }}>The Six Primordial Empresses</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1
          className="font-serif text-3xl sm:text-4xl mb-4"
          style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
        >
          👸 The Six Primordial Empresses
        </h1>
        <p className="text-base text-text-faint italic">Roku-ri no Hajime-gen no Jotei | 六人の始源の女帝</p>
      </div>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        Year 0 was the starting point of the Naiseikai Universe. And from those years up to four and five years, powerful beings were made sentient as manifestations through strong belief and faith. The humans of the primordial years had a strong connection to storytelling and emotional narratives, which sparked the birth of The Six Empresses.
      </p>

      {/* ── Year 0-4 ── */}
      <SectionHeading>Year 0 - 4</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        The Empresses through these years went by different titles and names that the humans have invented through storytelling. There was at least up to four title iterations.
      </p>

      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• The Six Divine Spirits (六柱の神霊 , Roku hashira no shinrei)</li>
        <li>• The Princesses of Life ( 生命の姫君 , Seimei no himegimi )</li>
        <li>• The Empresses of Life (人生の女帝たち , Jinsei no nyotei-tachi)</li>
      </ul>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        It was through faith and storytelling that these titles became too much, the humans decided to dawn down to one title:
      </p>

      <Quote>
        The Six Primordial Empresses ( 六人の始源の女帝)<br />(Shortform: Roku-ri no Jotei 六人の女帝)
      </Quote>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        However, they had kept a similar naming convention for the Japanese-kanji counterpart.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        The Six Empresses serve as a fundamental force of truth: <strong style={{ color: ACCENT }}>that life is sacred through nature</strong>. And that they govern over the concept of aliveness and life itself.
      </p>

      {/* ── First Primordial Fairytale ── */}
      <SectionHeading>The First Primordial Fairytale (In-Universe Lore)</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        The First Fairytale appeared in Year 0, written by a primordial human storyteller named Nobunaga Taisho, a prominent storyteller within his year. He was also one of the most powerful Shogun at the time, who has a powerful influence in poetry. Taisho didn't just write poetry. He wrote other works too, but this one is his most popular work.
      </p>

      <Quote>
        The Fairytale was titled: "The Elegance and Poetry of Life &amp; Death."<br />生と死の優雅さと詩情 | Seitoshi no yūga-sa to shijō
      </Quote>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        The Story here explains the origins of The Six Primordial Empresses, which contains six unique characters that are fundamental to fictional storytelling. It talks about the first force:
      </p>

      <SubHeading>The Empress of Life and Death, Seitoshi-hime-sama</SubHeading>
      <p className="text-xs text-text-faint italic mb-2">JP translation: 生と死ー姫ー様</p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        This fairytale was spoken through stanzas and poetry, which also uses some unique aspects of allegory and similes. Taisho explains that her role is crucial—because life itself should be treated with upmost respect and reverence, because it is an equal force of sacredness and holiness. Life and Death as a concept is a dual contract: two sides of the same coin. If there is too much life, there is no intermediary that can risk and accept that. Which is why Taisho wrote her as both Life and Death itself.
      </p>
      <Quote>
        To bring a gift as a present is to receive it. To honor that time is <em>when to know</em> to give it back. That is what Seitoshi-hime-sama reflects.
      </Quote>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        But Seitoshi-hime-sama wasn't alone in this context, which is where Taisho's characters became much more than an influence. It shaped the future of Japan and the whole world.
      </p>

      <SubHeading>The Empress of Nature, Hanahime-sama</SubHeading>
      <p className="text-xs text-text-faint italic mb-2">JP translation: 花姫ー様</p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        She was the second character Taisho created. Her name means Flower Princess, which ties to the concept of Nature. This wasn't just a fancy way of plant life or the concept of mother nature. Those are just surface values. Taisho explicitly states that Nature is an equal force of <em>human spiritual awareness</em>. It reflects the external nature of human kind, along with the inner nature of human kind. Hanahime-sama reflects the soul of the human. Like the first flame that birthed and lit up in the first darkness of the world.
      </p>

      <SubHeading>The Empress of The Sun, Honōhime-sama</SubHeading>
      <p className="text-xs text-text-faint italic mb-2">JP translation: 炎姫ー様</p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Taisho wrote her character with upmost reverence and second chances. Her names means Flame Princess. Her character wasn't just symbolic to the sun: Honōhime-sama reflects rebirth and spiritual guidance. She might be flame incarnate, but she is loyal. She is the Sun that gives the human soul <em>Warmth.</em> But it's not just Warmth that Honōhime-sama gives. She is also the root of human creativity. A good story isn't just based on the soul or the emotion it gives, but a sense of warmth and belonging.
      </p>

      <SubHeading>The Empress of Dragons, Hageshi-hime-sama</SubHeading>
      <p className="text-xs text-text-faint italic mb-2">JP translation: 激しい姫ー様</p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Taisho was an absolute craze over Eastern Dragons during the Primordial Era. In fact, this became his root inspiration for his fourth character, Hageshi-hime-sama. Her name means Fierce. Intense. Violent. The Fierce Princess. The way he wrote this character became a subversion. Hageshi-hime-sama wasn't written just as a cool dragon. Or about full power or authority. She was written as a reflection of becoming a master of your own emotions, your own volition. The Mastery over Agency, Autonomy, and Freedom.
      </p>

      <SubHeading>The Empress of Angels, Tenshi-hime-sama</SubHeading>
      <p className="text-xs text-text-faint italic mb-2">JP Translation: 天使ー姫ー様</p>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        With Hageshi-hime-sama made as a character, Taisho wanted to create a character that balances her. He introduces Tenshi-hime-sama, The Angel Empress. Her name means "heavenly messenger," and she reflects: Divinity, Grace, and Knowledge. Tenshi-hime-sama also has a small subversion, because she isn't just an angel. She bore the basics of human virtues and disparities—and why these are valued among human life. To seek knowledge is to know when something is right and wrong. The power of proverbs and wisdoms is what Tenshi-hime-sama embodies. Without Tenshi-hime-sama, <strong style={{ color: ACCENT }}>absolute authority</strong> cannot live without discernment.
      </p>

      <SubHeading>The Empress of Beasts, Kemonohime-sama</SubHeading>
      <p className="text-xs text-text-faint italic mb-2">JP translation: 獣姫ー様</p>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        Creatures and animals are of importance for humanity for they are natural for survival and sustenance. But Taisho wanted to create a character that symbolists spiritual creatures. Hence the character, Kemonohime-sama. She symbolizes the Spiritual side of animals—aka yokai (monsters, beasts, mythological creatures). But he didn't create her character just out of comedic relief. Kemonohime-sama plays a pivotal role:
      </p>
      <Quote>Spirituality, Humanity, and Free Will.</Quote>
      <p className="text-base text-text-muted leading-relaxed mb-3">
        All his other characters, Tenshi-hime-sama, Hageshi-hime-sama, Honōhime, and Seitoshi-hime symbolizes a future where humankind is ruled with utopia and without balance. Without the concept of free will, there will be nothing less than an era that is filled with divine status. A concept like this cannot live without the volition of human freedom. A choice needs to be equally made among all things, and all things are equal no matter how one sees it. This isn't just a gimmick or of symbolism.
      </p>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        A cool in-universe feature that Taisho wrote about Kemonohime-sama is that this Empress can bestow Creation Tethers to Tenshi-hime, Hageshi-hime, Honōhime, and Hanahime. It's a neat little character power that allows the four to create yokai-kind in their own image. Hence Angels, Dragons, Phoenix, and Floral Nature. This is also why he created Kemonohime-sama last. The concept of Life and Death—Seitoshi-hime-sama—was created first because she is a fundamental device for the other five to exist alongside her.
      </p>

      {/* ── One Fairytale, Different Titles ── */}
      <SectionHeading>One Fairytale, Different Titles</SectionHeading>

      <Quote>
        "The Elegance and Poetry of Life &amp; Death."<br />生と死の優雅さと詩情 | Seitoshi no yūga-sa to shijō
      </Quote>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        After Nobunaga Taisho published it, he passed away a week after due to chronic stress and a weak immune system. It wasn't an assassination attempt or a suicide attempt, despite being a Shogun. He passed in February 18th, Year 1, and his records was recorded in Japan's Natural History Museum (as of 2100).
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        The first fairytale underwent a lot of different titles within the Primordial years and beyond—which is why so many people bought it because of it's own popularity. There were at least up to 100 different titles, with at least four of them being the most popular in Japan's Literature History.
      </p>

      <div
        className="rounded-xl p-5 mb-6 space-y-4"
        style={{ background: 'rgba(255,208,128,0.05)', border: `1px solid ${ACCENT}33` }}
      >
        <div>
          <p className="italic text-sm" style={{ color: ACCENT }}>"The Primordial Forces of Japan"<br />日本の根源的な力 | Nihon no kongen-tekina chikara</p>
          <p className="text-xs text-text-faint mt-1">A Retelling. Published in July 9th, Year 150</p>
        </div>
        <div>
          <p className="italic text-sm" style={{ color: ACCENT }}>"The Early Works of Nobunaga Taisho"<br />大正信長の初期作品 | Taishō Nobunaga no shoki sakuhin</p>
          <p className="text-xs text-text-faint mt-1">An Informative Documentary. Published in October 16th, Year 1376</p>
        </div>
        <div>
          <p className="italic text-sm" style={{ color: ACCENT }}>"The Life of Nobunaga Taisho"<br />大正信長の生涯 | Taishō Nobunaga no shōgai</p>
          <p className="text-xs text-text-faint mt-1">An Autobiography Movie. Published in December 7th, Year 1699</p>
        </div>
        <div>
          <p className="italic text-sm" style={{ color: ACCENT }}>"Seitoshi-hime-sama And Her Friends"<br />生と死姫ー様と仲間たち | Seitoshi-hime-sama to nakama-tachi</p>
          <p className="text-xs text-text-faint mt-1">A Fictional Old-Isekai re-telling. Published in August 15th, 1975</p>
        </div>
        <div>
          <p className="italic text-sm" style={{ color: ACCENT }}>"I Time Traveled back into the time of Primordial Japan!"<br />太古の日本へとタイムスリップした！ | Taiko no Nihon e to taimusurippu shita!</p>
          <p className="text-xs text-text-faint mt-1">A Modernized Story (Manga/Light Novel). Published in September 15th, 2013 (re-telling)</p>
        </div>
      </div>

      {/* ── The Six Empresses made Real ── */}
      <h2
        className="font-serif text-3xl font-bold mt-12 mb-4"
        style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
      >
        The Six Empresses made Real
      </h2>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Taisho's fairytale was mass produced and made as a standard literature across Year 0 in Japan, and gained massive popularity within six years. Not because of the storytelling, but because of the warmth it brought. People believed in this story and them messages it portrayed. And with a collective belief so strong, it manifested the faith for The Six Empresses as real and holy beings of the Primordial age of Japan.
      </p>

      <div className="space-y-4 mb-4">
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ New Years Eve, Year 0</p>
          <p className="text-base text-text-muted leading-relaxed">The Empress of Life &amp; Death, Seitoshi-hime-sama manifested before Year 1 started. She has that real feeling that existence itself is beautiful.</p>
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ March 23rd, Year 1</p>
          <p className="text-base text-text-muted leading-relaxed">The Empress of Nature, Hanahime-sama manifested.</p>
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ May 18th, Year 2</p>
          <p className="text-base text-text-muted leading-relaxed">The Empress of The Sun, Honōhime-sama manifested. This is where Phoenixes came from.</p>
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ July 23rd, Year 3</p>
          <p className="text-base text-text-muted leading-relaxed">The Empress of Dragons, Hageshíhime-sama. This is where the line of Dragon/kins come from.</p>
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ August 4th, Year 3</p>
          <p className="text-base text-text-muted leading-relaxed">The Empress of Angels, Tenshi-hime-sama. Where Angels come from.</p>
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ September 20th, Year 4</p>
          <p className="text-base text-text-muted leading-relaxed">The Empress of Beasts, Kemonohime-sama. This is where the Yokai era started, near the end of the year.</p>
        </div>
      </div>

      <Quote>
        Year 5 became <Link to="/world-lore-and-timeline" style={LINK}>The Great Yokai Descent</Link>. It lasted from Year 5 - 1599
      </Quote>

      <SubHeading>A Unifying Deity - Ujuu-sama</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-6">
        The Six Empresses convened together in May 5, 050 AD to form a Full Goddess that triumphs over The Six, Ujuu-sama, <strong style={{ color: ACCENT }}>a full deity</strong>. The Six did it with their powers combined together. Ujuu-sama embodies the Cosmic Faith of Silence and Gentleness, which is what shaped <Link to="/world-lore-and-timeline/the-world-of-neo-japan/religion-of-ujuukyo" style={LINK}>The Religion of Ujuukyō</Link>. You could say The Six gave birth to Ujuu-sama, despite Ujuu-sama who considers them as her daughters.
      </p>

      {/* ── A Subclass: Spirit Goddesses ── */}
      <h2
        className="font-serif text-3xl font-bold mt-12 mb-4"
        style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
      >
        A Subclass: Spirit Goddesses
      </h2>

      <p className="text-base text-text-muted leading-relaxed mb-2">Also known as Lesser Deity (Deities)</p>

      <Quote>
        JP: 小神 - Kogami<br />JP: 下級神 - Kakyū-shin
      </Quote>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Spirit Goddesses / Gods are not full deities. They are lesser beings that are more coded as branches of the former Six Empresses. Each of these beings are symbolically tied to their own element. Some have not descended yet, but there are quite a few that made their life known in The Great Yokai Descent and beyond (1599+).
      </p>

      <div className="space-y-5">
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ "Death Eater," Shikuibito | 死喰い人</p>
          <p className="text-base text-text-muted leading-relaxed mt-1">
            He came down in the year 1475 of The Great Yokai Descent. Originally his role was supposed be the protector and warrior for disease and illness, but his twisted sense of justice is what turned him evil, which made him control a place that was supposed to be about recovery, the <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-association-recovery-center" style={LINK}>Y.A.R.C (Yokai Association Recovery Centre)</Link>.
          </p>
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Ayumi-Kazehara" style={LINK}>Ayumi Kazehara</Link> | 風原歩美</p>
          <p className="text-base text-text-muted leading-relaxed mt-1">
            She manifested as a Spirit Goddess of Wind due to her contract with Hanahime-sama (<Link to="/titles/HitoJinzo2GF-LonelyAndroid" style={LINK}>HitoJinzo2GF</Link>). Ayumi is the first Spirit Goddess to take the form of a human. She manifested in the year April 22, 2000, which is Earth Day.
          </p>
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#ffe08a' }}>─────⊰ Ame-Kitsune-sama | 雨狐様</p>
          <p className="text-base text-text-muted leading-relaxed mt-1">
            Manifested as The Rain Fox Spirit Goddess in the Year 1919. She is a shrine maiden based in <Link to="/world-lore-and-timeline/the-world-of-neo-japan/neo-japan-prefectures" style={LINK}>Mizuki-shoto</Link>. Her nickname is Ameko. And the local residents of Mizuki-Shoto (who are mermaids) worship this lesser deity. Ameko is know to be very sarcastic and likes to troll tourists.
          </p>
        </div>
      </div>

      <p className="text-base text-text-muted italic leading-relaxed mt-10 mb-6" style={{ color: ACCENT }}>
        Nobunaga Taisho didn't just write a story. It was the people, the faith, and the belief that made The Six Primordial Empresses…..<em>feel real.</em>
      </p>

      {/* ── Bottom Nav ── */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="btn-neon-cyan text-sm px-4 py-2 rounded">
          ← The World of Neo-Japan
        </Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/neo-japan-techno-geography" className="btn-neon-purple text-sm px-4 py-2 rounded">
          Techno-Geography →
        </Link>
      </div>

    </div>
    </LorePageLayout>
  );
}
