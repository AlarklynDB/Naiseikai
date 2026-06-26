import { Link } from 'react-router-dom'

// ─── Shared helpers ───────────────────────────────────────────────────────────
function ImgPlaceholder({ label, aspect = 'aspect-[3/4]' }: { label: string; aspect?: string }) {
  return (
    <div className={`w-full ${aspect} bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 my-6`}>
      <span className="text-3xl opacity-20">🖼</span>
      <span className="text-[10px] font-mono text-text-faint opacity-50">{label}</span>
    </div>
  )
}

// ─── Section divider ─────────────────────────────────────────────────────────

function Divider() {
  return <div className="section-divider my-8" />
}


// ─── Overview Tab ────────────────────────────────────────────────────────────


// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">The Quiet Crow &amp; The Ninja</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#ffaad4]">Little Bunny Aru</span>
    </nav>
  )
}

// ─── Character content ────────────────────────────────────────────────────────
function LittleBunnyAruTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/little-bunny-aru.png" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Little Bunny Aru</h2>
        <p className="text-text-faint font-mono text-sm italic">boooiiing boing boing! 🐇～</p>
      </div>

      <Divider />

      {/* Intro */}
      <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
        <p className="font-mono text-xs text-text-faint">おおおおいいいいいい！！</p>
        <p className="font-mono text-xs text-text-faint">WAIT F#$% I SPOKE IN JAPANESE BY ACCIDENT?!</p>
        <p className="font-serif text-lg text-[#ffaad4]">YOU THERE!</p>
        <p className="font-serif text-xl text-text">IT'S ME. ARU!</p>
        <p>Aru — だよ！Aru dayo!</p>
        <p>YOU KNOW THAT PART WHEN I FIRST SPOKE IN EP 5 OF <span className="text-amber-400 italic">HEARTFELT CONFESSION</span>!?!</p>
        <p>And also my first appearance in EP XII?!</p>
        <p className="font-serif text-lg text-text">YEAH THAT WAS ME TOO!!</p>
        <p>I DECIDED TO FORCE MYSELF AN ENTRY ON THIS BOOK'S WIKI SITE MADE BY ALARKIUS.</p>
        <p>HE DOESN'T KNOW!</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">About Aru~! (ｔｅｈｅ)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Name', value: 'Little Bunny Aru' },
            { label: 'Age', value: '3 Days Old (as from EP XII)' },
            { label: 'Gender', value: 'Neither! But I have a female voice! So…' },
            { label: 'Pronouns', value: 'Aru/She/Her/Aru/I' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
              <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
              <p className="text-sm text-text-muted">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Role */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Role in the Story</h3>
        <div className="neon-card space-y-2 text-sm text-text-muted leading-relaxed">
          <p>A ground breaker! Fourth Wall Menace! NARRATOR WHEN NEEDED! (Trust me, I'm literally a narrative entropy!)!</p>
          <p>I AM ALSO THE AUDIENCE! THE VOICES THAT SAY "JUST KISS AND MAKE UP ALREADY!"</p>
          <p>I'm not just a wall-breaking menace! I am also a character within the story I reside in!</p>
          <p className="text-[#ffaad4] font-mono text-xs">— The Quiet Crow &amp; The Ninja!</p>
          <a
            href="https://www.barnesandnoble.com/w/the-quiet-crow-the-ninja-alarkius-elvya-jay/1149627312?ean=9798994097649"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-cyan text-xs inline-block mt-2"
          >
            🔗 The Quiet Crow &amp; The Ninja | Barnes &amp; Noble
          </a>
          <p className="font-serif text-base text-text mt-2">ARU DAYOOOOOOOOOO</p>
        </div>
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">A Backstory If You Care Enough！！</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>I was born from <span className="text-[#ffaad4]">Haruhi Aoi</span>'s magical Bamboo Rabbit Magic. She didn't know she gave me a mind! I tell you! The moment I popped into existence, my first words were: <em>"Don't make me bonk you!"</em></p>
          <p>Mind you, that was after when she said:</p>
          <blockquote className="border-l-2 border-[#ffaad4] pl-3 italic">"I'll tell you what! You can take half of me!"</blockquote>
          <p className="font-serif text-lg text-text">AND I WAS LIKE….</p>
          <p className="font-serif text-xl text-text">"WHAT?!"</p>
          <p className="font-serif text-lg text-text">AFTER ALL THAT…?!</p>
          <p className="font-serif text-xl text-text">I'M THREE DAYS OLD</p>
          <p className="font-serif text-xl text-text">AND I'M A SPIRITUAL THERAPIST?</p>
          <p>I am a pillow so that means I am bias and judgment free!!!</p>
          <p>LIKE WHO DUBS THAT IN EXISTENCE EVEN BEFORE I WAS BORN?! But anyways…….</p>
          <p>I'm a chaotic wall breaking meta breaking bunny!</p>
          <p>That's who I am!</p>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Facts</h3>
        <div className="space-y-3 text-sm text-text-muted">
          <div className="neon-card">
            <p className="text-[#ffaad4] italic">Mwaahahhahahahahaha!</p>
            <p>I'm gonna piss on some pillows now! Unhinged edition!</p>
            <p>I'm in your walls now!</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Motivation</p>
            <p>I am driven by snacks!!! AND FOOD</p>
            <p className="text-text-faint">……and boba and drinks and cookies!</p>
            <p className="font-serif text-base text-text mt-2">COOKIES ARE MY FAVORITE!</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Signature Slang</p>
            <ul className="space-y-1">
              <li>1. <span className="text-[#ffaad4]">Aru'kay</span> — for Okay!</li>
              <li>2. <span className="text-[#ffaad4]">Aru'll</span> — Aru + will</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Core Drive</p>
            <p>INTERNET HUMOR AND MEMES DRIVE MY VERY ESSENCE</p>
          </div>
          <div className="callout">
            <p className="font-serif text-2xl text-[#ffaad4] text-center">LITTLE. BUNNY. ARU.</p>
            <p className="font-serif text-2xl text-[#ffaad4] text-center">STANS.</p>
            <p className="font-serif text-2xl text-[#ffaad4] text-center">YURI!!!!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

// ─── Asami Kurose ─────────────────────────────────────────────────────────────


// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function LittleBunnyAruPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <LittleBunnyAruTab />
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/KarasuToNinja-TQCTN/Haruhi-Aoi" className="btn-neon-cyan text-xs">← Haruhi Aoi</Link></div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/KarasuToNinja-TQCTN/Asami-Kurose" className="btn-neon-purple text-xs">Asami Kurose →</Link></div>
      </div>
    </div>
  )
}
