import { Link } from 'react-router-dom'

export default function Author() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign neon-sign-purple text-[10px] mb-4 inline-block">A Word from the Author</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">Author's Note</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          A personal message from Alarkius Elvya Jay — creator of The Naiseikai Universe.
        </p>
      </div>

      {/* Author Note */}
      <section className="mb-14">
        <div className="section-divider" />
        <div className="max-w-2xl">
          <p className="text-text-muted leading-relaxed mb-6">
            I've crafted something I consider a treasure, and it might hit home for some people who like content like this —
            even if it deeply moves or is emotional.
          </p>
          <p className="text-text-muted leading-relaxed mb-6">
            The Naiseikai Universe was built with care, love, and intention. Every character, every theme, every quiet moment
            of Ma (間) — they exist for a reason. This world is about being seen, about the cost of belonging, and about
            finding your people even when everything tells you you won't.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            Thank you for being here. Respect this universe and it will move your heart.
          </p>
          <p className="text-text font-serif text-lg italic">— KarasuEJ / Alarkius Elvya Jay</p>
        </div>
      </section>

      {/* Content Policy */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign text-[10px] mb-4 inline-block">Content Policy</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Respect This Universe</h2>

        <div className="callout callout-red mb-6">
          <div>
            <p className="text-sm font-mono text-red-400 mb-2">I will not tolerate anything related to:</p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex gap-2">
                <span className="text-red-400 flex-shrink-0">×</span>
                Misogynistic or heavily sexualized NSFW works or content of my characters — including really suggestive content or non-consensual content.
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 flex-shrink-0">×</span>
                Derogatory fan content that twists my characters' uniqueness into fetishization or more.
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 flex-shrink-0">×</span>
                Anything that disrupts the themes of this universe.
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 flex-shrink-0">×</span>
                <strong className="text-red-400">AI Generated Content — forbidden, full stop.</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="callout callout-purple">
          <div>
            <p className="text-sm text-text-muted">
              For fanbase or sub-fandoms, please refer back to our official subreddits or this website.
              If fan service is requested for a new title, it could be considered.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-pink text-[10px] mb-4 inline-block">About</span>
        <h2 className="font-serif text-2xl mb-6 text-text">About Alarkius Elvya Jay</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="neon-card">
            <p className="font-serif text-base mb-2 text-[#d49fff]">Author & Creator</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Author, artist, worldbuilder, and composer. Creator of The Hibrythian Saga and The Naiseikai Universe.
              Runs three YouTube channels — one for writing and two for music.
            </p>
          </div>
          <div className="neon-card">
            <p className="font-serif text-base mb-2 text-[#7ef5ff]">Universes</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Two major universes — The Hibrythian Saga and The Naiseikai Universe — each with distinct worlds,
              themes, and stories told across light novels, music, and art.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="https://www.alarkiusej.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-purple inline-block"
          >
            AlarkiusEJ.com ↗
          </a>
        </div>
      </section>

      {/* Nav */}
      <div className="section-divider" />
      <div className="flex flex-wrap gap-3">
        <Link to="/" className="btn-neon-cyan text-xs">← Back to Home</Link>
        <Link to="/universe" className="btn-neon-purple text-xs">Universe Overview →</Link>
      </div>
    </div>
  )
}
