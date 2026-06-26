import { Link } from 'react-router-dom'

// Tiny star component for the hero
function Star({ top, left, size, delay }: { top: string; left: string; size: number; delay: string }) {
  return (
    <span
      className="absolute rounded-full"
      style={{
        top, left,
        width: size, height: size,
        background: size > 2 ? '#c8d8ff' : '#fff',
        opacity: 0.8,
        animation: `twinkle ${2.5 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: delay,
      }}
    />
  )
}

const heroStars = [
  { top: '8%',  left: '5%',  size: 2,   delay: '0s'   },
  { top: '12%', left: '18%', size: 1.5, delay: '0.8s' },
  { top: '5%',  left: '35%', size: 2,   delay: '1.2s' },
  { top: '15%', left: '50%', size: 1.5, delay: '0.3s' },
  { top: '9%',  left: '65%', size: 2.5, delay: '1.8s' },
  { top: '20%', left: '78%', size: 1.5, delay: '0.6s' },
  { top: '6%',  left: '88%', size: 2,   delay: '2.1s' },
  { top: '25%', left: '92%', size: 1.5, delay: '0.9s' },
  { top: '18%', left: '10%', size: 1.5, delay: '1.5s' },
  { top: '30%', left: '30%', size: 1,   delay: '2.4s' },
  { top: '28%', left: '72%', size: 1,   delay: '1.1s' },
]

export default function Home() {
  return (
    <div className="relative min-h-screen">

      {/* ── Hero ── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        {/* Animated stars in hero */}
        {heroStars.map((s, i) => (
          <Star key={i} {...s} />
        ))}

        {/* Shooting star */}
        <span
          className="shooting-star"
          style={{ top: '22%', left: '15%', animationDelay: '2s', animationDuration: '4s' }}
        />

        {/* Badge */}
        <div className="mb-6">
          <span className="neon-sign neon-sign-purple text-xs">Official Universe Hub</span>
        </div>

        {/* Japanese title */}
        <h1
          className="hero-jp text-6xl sm:text-8xl font-bold mb-2 tracking-widest"
          style={{
            color: '#bf5fff',
            textShadow: '0 0 30px rgba(191,95,255,0.7), 0 0 60px rgba(191,95,255,0.3)',
          }}
        >
          内省界
        </h1>

        {/* English title */}
        <h2 className="text-xl sm:text-3xl font-serif font-light mb-2 text-text tracking-wide">
          The Naiseikai Universe | Naisei no Sekai
        </h2>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-text-muted italic mb-2 max-w-xl">
          "This is not the world you know. This is The World of Introspection."
        </p>
        <p className="text-xs text-text-faint mb-8 tracking-widest font-mono">
          📍 NEO-JAPAN · TOKYO · 2100+
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/universe" className="btn-neon-purple">
            Explore the Universe
          </Link>
          <Link to="/titles" className="btn-neon-cyan">
            Read the Titles
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-faint text-xs tracking-widest flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-faint to-transparent" />
        </div>
      </section>

      {/* ── Universe Intro ── */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="neon-sign text-[10px]">The World</span>
          <h2 className="font-serif text-3xl mt-4 mb-4 text-text">The Universal Premise</h2>
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[rgba(191,95,255,0.5)] to-transparent" />
        </div>

        <p className="text-text-muted text-center leading-relaxed mb-6 max-w-2xl mx-auto">
          In Neo-Japan 2100, beings of ancient bloodlines live hidden among humans — powerful, ancient, and utterly alone.
          To survive, they must remain silent and safe. To live, they must be truly known and risk everything.
        </p>
        <p className="text-text-muted text-center leading-relaxed max-w-2xl mx-auto">
          In the world of introspection, being seen is the most dangerous power of all — but what does it cost to finally belong?
        </p>
      </section>

      {/* ── Quick nav cards ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 pb-56">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

          <Link to="/universe" className="neon-card neon-card group block">
            <div className="mb-3">
              <span className="neon-sign neon-sign-purple text-[10px]">Lore</span>
            </div>
            <h3 className="font-serif text-lg mb-2 text-text group-hover:text-[#d49fff] transition-colors">Universe Overview</h3>
            <p className="text-sm text-text-muted">Core themes, genres, worldbuilding pillars, and the philosophy of Ma (間).</p>
          </Link>

          <Link to="/lore" className="neon-card neon-card-cyan group block">
            <div className="mb-3">
              <span className="neon-sign text-[10px]">Timeline</span>
            </div>
            <h3 className="font-serif text-lg mb-2 text-text group-hover:text-[#7ef5ff] transition-colors">Lore & Timeline</h3>
            <p className="text-sm text-text-muted">The history of Neo-Japan, the Yokai & Human Coalition Act, and the world's foundations.</p>
          </Link>

          <Link to="/titles" className="neon-card neon-card-pink group block">
            <div className="mb-3">
              <span className="neon-sign neon-sign-pink text-[10px]">Stories</span>
            </div>
            <h3 className="font-serif text-lg mb-2 text-text group-hover:text-[#ffaad4] transition-colors">Titles & Stories</h3>
            <p className="text-sm text-text-muted">All published and upcoming light novels in story order — from The Quiet Crow to GyakuTen.</p>
          </Link>

          <Link to="/universe" className="neon-card neon-card group block">
            <div className="mb-3">
              <span className="neon-sign text-[10px]">World</span>
            </div>
            <h3 className="font-serif text-lg mb-2 text-text group-hover:text-[#d49fff] transition-colors">Worldbuilding</h3>
            <p className="text-sm text-text-muted">Yokai, androids, shinobi, deities — the races and factions that shape this world.</p>
          </Link>

          <Link to="/songbook" className="neon-card neon-card-cyan group block">
            <div className="mb-3">
              <span className="neon-sign text-[10px]">Music</span>
            </div>
            <h3 className="font-serif text-lg mb-2 text-text group-hover:text-[#7ef5ff] transition-colors">The Songbook</h3>
            <p className="text-sm text-text-muted">Music and compositions tied to The Naiseikai Universe.</p>
          </Link>

          <Link to="/author" className="neon-card neon-card-pink group block">
            <div className="mb-3">
              <span className="neon-sign neon-sign-pink text-[10px]">Author</span>
            </div>
            <h3 className="font-serif text-lg mb-2 text-text group-hover:text-[#ffaad4] transition-colors">Author's Note</h3>
            <p className="text-sm text-text-muted">A word from Alarkius Elvya Jay — on craft, respect, and this universe's meaning.</p>
          </Link>

        </div>

        {/* YARC Notice */}
        <div className="mt-10 callout callout-red">
          <div>
            <p className="text-sm font-mono text-red-400 mb-1">⚠ Y.A.R.C. NOTICE — CLASS C PIRACY VIOLATION</p>
            <p className="text-sm text-text-muted">
              Unauthorized redistribution of Naiseikai-Encoded lore and Stories has been detected.
              This universe is heavily protected. The YARC might be evil in this universe, but don't let them get you too.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
