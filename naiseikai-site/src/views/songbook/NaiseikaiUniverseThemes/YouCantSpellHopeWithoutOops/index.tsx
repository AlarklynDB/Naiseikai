import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/songbook" className="hover:text-[#00e5ff] transition-colors">Songbook</Link>
      <span>/</span>
      <Link to="/songbook/naiseikai-universe-themes" className="hover:text-[#00e5ff] transition-colors">Naiseikai Universe Themes</Link>
      <span>/</span>
      <span className="text-[#d49fff]">You Can't Spell "Hope" without "Oops"</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Lyric Card ──────────────────────────────────────────────────────────────
function LyricCard({
  section,
  lines,
}: {
  section: string
  lines: { en: string; jp?: string; ro?: string }[]
}) {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-2xl p-5 space-y-4">
      <p className="font-mono text-[10px] tracking-widest text-[#d49fff] uppercase border-b border-[#d49fff]/20 pb-2">
        {section}
      </p>
      <div className="space-y-4">
        {lines.map((line, i) => (
          <div key={i} className="space-y-0.5">
            <p className="text-sm text-text leading-relaxed">{line.en}</p>
            {line.jp && (
              <p className="text-xs text-text-muted pl-3 border-l-2 border-[#d49fff]/30 leading-relaxed">
                {line.jp}
              </p>
            )}
            {line.ro && (
              <p className="text-xs text-text-faint pl-3 italic leading-relaxed">{line.ro}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Instrumental Cue Card ───────────────────────────────────────────────────
function CueCard({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[rgba(212,159,255,0.05)] border border-[#d49fff]/15">
      <span className="text-[#d49fff]/50 text-xs">♩</span>
      <p className="font-mono text-xs text-[#d49fff]/60 italic tracking-wide">{label}</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function YouCantSpellHopeWithoutOops() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Naiseikai Universe Themes</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#d49fff] mb-2 leading-tight">
            You Can't Spell "Hope" without "Oops"
          </h1>
          <p className="font-mono text-sm text-text-faint mb-0.5">「希望」には「失敗」が隠れてる</p>
          <p className="font-mono text-xs text-text-faint italic">"Kibō" ni wa "shippai" ga kakureteru</p>
        </div>

        <Divider />

        {/* Song Info */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Song Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Theme', value: 'Theme 1 of the Naiseikai Universe' },
              { label: 'Character Voice', value: 'Little Bunny Aru' },
              { label: 'Style & Pace', value: 'Upbeat, Medium, J-Pop Style Banger' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
            <div className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
              <p className="text-[10px] font-mono text-text-faint mb-1">Main Instrument Lead</p>
              <ul className="text-sm text-text-muted space-y-0.5">
                <li>Piano</li>
                <li>Electric Bass</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Lyrics */}
        <div>
          <h3 className="font-serif text-lg text-text mb-6">Lyrics</h3>
          <div className="space-y-3">

            {/* INTRO */}
            <div className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-2xl p-5 space-y-2">
              <p className="font-mono text-[10px] tracking-widest text-[#d49fff] uppercase border-b border-[#d49fff]/20 pb-2">Intro</p>
              <CueCard label="[Short Guitar Solo]" />
              <CueCard label="[GREETING (scream)]" />
              <CueCard label="[Countdown]" />
              <CueCard label="[Guitar Solo Transition]" />
            </div>

            <LyricCard
              section="Verse 1"
              lines={[
                { en: "There's a thread in my chest I keep stitching real slow,", jp: '胸の中の糸、そっと縫ってる', ro: "Mune no naka no ito, sotto nuitte'ru" },
                { en: "Tangled in silence, too scared you'll know...~", jp: '静かに絡まって、君には言えない…', ro: 'Shizuka ni karamatte, kimi ni wa ienai…' },
                { en: "That I wasn't built with the strength you believe,", jp: 'あなたが信じるより強くはなく、', ro: 'Anata ga shinjiru yori tsuyoku wa naku,' },
                { en: "I'm held together by 'please don't leave.'", jp: '「行かないで」だけで私は立ってる。', ro: '"Ikanai de" dake de watashi wa tatte\'ru.' },
              ]}
            />

            <CueCard label="[Piano Transition]" />

            <LyricCard
              section="Pre-Chorus"
              lines={[
                { en: 'All the mirrors cracked when I whispered your name...~', jp: '君の名前囁いた時、鏡は割れた…', ro: 'Kimi no namae sasayaita toki, kagami wa wareta…' },
                { en: 'But I still wear the reflection like a badge of shame...~', jp: 'それでも映した顔は、蓋した過去のbadge…', ro: 'Soredemo utsushita kao wa, futa shita kako no badge…' },
                { en: "And if I'm breaking, I'll break cute, Tie a ribbon on my reboot...~", jp: '壊れたら、可愛く壊れよう、リボンを結んでrebootしよう。', ro: 'Kowaretara, kawaiku kowarou, Ribon wo musunde reboot shiyou.' },
              ]}
            />

            <CueCard label="[Instrumental Transition]" />

            <LyricCard
              section="Chorus"
              lines={[
                { en: "You can't spell 'hope' without 'oops,", jp: '「Hope」は「Oops」なしじゃ書けない、', ro: '"Hope" wa "Oops" nashi ja kakenai,' },
                { en: "Yeah, I tripped into this loop,", jp: 'こんなloopに落ち込んだみたい、', ro: 'Konna loop ni ochikonda mitai,' },
                { en: 'Of loving too hard, of healing too late,', jp: '愛しすぎて、癒すの遅すぎた、', ro: 'Ai shisugite, iyasu no oso sugita,' },
                { en: 'Of turning my scars into sparkly duct tape.', jp: '絆はキラキラのtapeになった。', ro: 'Kizuna wa kirakira no tape ni natta.' },
                { en: "If I'm a glitch in your story,", jp: 'もし私がglitchなら、', ro: 'Moshi watashi ga glitch nara,' },
                { en: 'Let me sparkle with some glory—', jp: '輝かせて、ちょっとだけは…', ro: 'Kagayakasete, chotto dake wa…' },
                { en: "'Cause even if I'm lost in the scripts I skipped,", jp: '密室の物語の中でも、', ro: 'Misshitsu no monogatari no naka demo,' },
                { en: "I still wrote 'you' in every cryptic, idiot~!", jp: '「君」と書いた、隠れた、馬鹿！', ro: '"Kimi" to kaita, kakureta, baka!' },
              ]}
            />

            <CueCard label="[ELECTRIC BASS SOLO]" />

            <LyricCard
              section="Verse 2"
              lines={[
                { en: 'I drank your silence like chamomile tea,', jp: '君の沈黙を、chamomileのように、', ro: 'Kimi no chinmoku wo, chamomile no you ni,' },
                { en: 'Pretended the burn was good for me.', jp: '飲み干して、熱さに我慢した。', ro: 'Nomihoshite, atsusa ni gaman shita.' },
                { en: 'But the truth is soft, and soft things bend,', jp: '柔らかい真実は、溶けてしまい、', ro: 'Yawarakai shinjitsu wa, tokete shimai,' },
                { en: 'And I kept bending, again and again.', jp: '私は何度も、折れてた。', ro: "Watashi wa nani do mo, orite'ta." },
              ]}
            />

            <LyricCard
              section="Pre-Chorus"
              lines={[
                { en: 'So I packed my tears in a travel-size case,', jp: '涙を旅先のpouchに詰めて、', ro: 'Namida wo tabisaki no pouch ni tsumete,' },
                { en: 'Took a wrong turn, landed in grace. I kissed the floor,', jp: '間違えた道で巡り会った恵み、床にキスして、転んで抱きしめた、', ro: 'Machi gaeta michi de meguriatta megumi, yuka ni kisu shite, koronde dakishimeta,' },
                { en: "I hugged the fall, I made 'oops' into my battle call.", jp: '「OOPS」は今、戦いの言葉。', ro: '"OOPS" wa ima, tatakai no kotoba.' },
              ]}
            />

            <CueCard label="[GUITAR SOLO]" />

            <LyricCard
              section="Chorus"
              lines={[
                { en: "You can't spell 'hope' without 'oops,'", jp: '「Hope」は「Oops」なしじゃ生まれない、', ro: '"Hope" wa "Oops" nashi ja umarenai,' },
                { en: 'Without some bunny-eared truth.', jp: 'うさ耳の真実、嘘じゃない。', ro: 'Usamimi no shinjitsu, uso janai.' },
                { en: 'Without crying at 3AM alone, then texting, "Sorry. I\'m okay. Phone home."', jp: '一人で三時に泣いて、「大丈夫」ってLINEしただけ。', ro: 'Hitori de sanji ni naite, "Daijoubu" tte LINE shita dake.' },
                { en: "If I'm the punchline of your plot,", jp: '君のplotのpunchlineでもいい、', ro: 'Kimi no plot no punchline demo ii,' },
                { en: "Then I'll giggle and say, \"Guess what?\"", jp: '「ふふ、実はね？」って笑おうか？', ro: '"Fufu, jitsu wa ne?" tte waraou ka?' },
                { en: "'Cause even broken things still float,", jp: '壊れても浮かぶものもある、', ro: 'Kowaretemo ukabu mono mo aru,' },
                { en: 'If you teach the cracks to sing a note.', jp: '傷でも歌になれば、空も飛べる。', ro: 'Kizu demo uta ni nareba, sora mo toberu.' },
              ]}
            />

            <LyricCard
              section="Bridge"
              lines={[
                { en: 'Oops is the ghost of what we almost said,', jp: '「Oops」は言いかけた言葉のお化け、', ro: '"Oops" wa iikaketa kotoba no obake,' },
                { en: 'Hope is the whisper we stitched instead.', jp: '「Hope」は代わりに縫いった囁き。', ro: '"Hope" wa kawari ni nuitta sasayaki.' },
                { en: 'And every almost-love, and almost-cry.......', jp: '全てのalmost-love、almost-cry、', ro: 'Subete no almost-love, almost-cry,' },
                { en: 'Still echoes when we say goodbye.', jp: 'さようならに響くmelody。', ro: 'Sayounara ni hibiku melody.' },
              ]}
            />

            <LyricCard
              section="Final Chorus"
              lines={[
                { en: "You can't spell 'hope' without 'oops,'", jp: '「Hope」は「Oops」なしじゃ生まれない、', ro: '"Hope" wa "Oops" nashi ja umarenai,' },
                { en: "And maybe that's the truth.", jp: 'それが真実かもね。', ro: 'Sore ga shinjitsu kamo ne.' },
                { en: "We're all falling stars in bunny shoes,", jp: 'みんなはうさぎの靴を履いた流れ星、', ro: 'Minna wa usagi no kutsu wo haita nagareboshi,' },
                { en: 'Singing lullabies of gentle bruises.', jp: '優しい痛みのlullabyを歌う。', ro: 'Yasashii itami no lullaby wo utau.' },
                { en: "If this song's too soft to scream,", jp: '怖くないなら叫ばなくていい、', ro: 'Kowakunai nara sakebanakute ii,' },
                { en: "Then let it hum inside your dream—", jp: '夢の中で囁けばいい…', ro: 'Yume no naka de sasayakeba ii…' },
                { en: "'Cause even if we never heal clean,", jp: '綺麗に治らなくても、好かれてる...', ro: 'Kirei ni naoranakute mo, Sukareteru...' },
                { en: "We're still loved… just slightly off-scene.", jp: '少しoff-sceneでも。', ro: 'sukoshi off-scene demo.' },
              ]}
            />

            {/* Ending Chorus */}
            <div className="bg-[rgba(212,159,255,0.07)] border border-[#d49fff]/30 rounded-2xl p-5">
              <p className="font-mono text-[10px] tracking-widest text-[#d49fff] uppercase border-b border-[#d49fff]/20 pb-2 mb-4">Ending Chorus</p>
              <p className="font-mono text-base text-[#d49fff] leading-relaxed tracking-wide">
                OOPS I BROKE THE FOURTH WALL. I DID IT AGAIN.
              </p>
              <p className="font-mono text-xs text-[#d49fff]/50 italic mt-3">[OUTRO / FADE OUT]</p>
            </div>

          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <Link to="/songbook/naiseikai-universe-themes" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ← Naiseikai Universe Themes
        </Link>
        <Link to="/songbook" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ Songbook
        </Link>
      </div>
    </div>
  )
}
