import { Link } from 'react-router-dom'

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="hover:text-[#00e5ff] transition-colors">The Lonely Android and her 2GFs</Link>
      <span>/</span>
      <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#d49fff]">Chisaki Akari</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AkariChisakiPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-purple text-[10px] mb-3 inline-block">Main Character</span>
          <h2 className="font-serif text-3xl text-[#d49fff] mb-1">👥 Chisaki, Akari</h2>
          <p className="text-text-faint font-mono text-sm italic">一人の人造人間と、二人の彼女？!</p>
          <p className="text-text-faint font-mono text-xs mt-1">Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi — The Lonely Android and her Two Girlfriends!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Akari' },
              { label: 'Last Name', value: 'Chisaki' },
              { label: 'Nickname', value: 'Aka-chai' },
              { label: 'Gender', value: 'Female' },
              { label: 'Age', value: '24' },
              { label: 'Birthday', value: 'October 31, 2076' },
              { label: 'Height', value: '5\'5"' },
              { label: 'Pronouns', value: 'She/Her' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Relationships */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Relationships</h3>
          <div className="neon-card text-sm text-text-muted">
            <ul className="list-disc list-inside space-y-1">
              <li>Ayane Otokura</li>
              <li>Ayumi Kazehara</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>Calm and vibing. A little bit submissive. Level-headed, but with moments of playful chaos. She's the type to offer quiet comfort and an unexpected jab of sarcasm when you least expect it.</p>
          </div>
        </div>

        <Divider />

        {/* Hobbies & Likes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Hobbies &amp; Likes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#d49fff] mb-2">Hobbies:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Stargazing</li>
                <li>Listening to lo-fi music</li>
                <li>Rearranging her crystals (she totally has a crystal corner)</li>
                <li>Spontaneous naps in sunbeams</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#d49fff] mb-2">Likes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Mint tea</li>
                <li>Soft textures</li>
              </ul>
              <p className="font-mono text-xs text-[#d49fff] mt-3 mb-2">Dislikes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Loud and toxic people.</li>
              </ul>
              <p className="font-mono text-xs text-[#d49fff] mt-3 mb-1">Favorite Animal:</p>
              <p>Foxes</p>
              <p className="font-mono text-xs text-[#d49fff] mt-3 mb-1">Comfort Animal:</p>
              <p>Cloud-shaped plush rabbit named Mochi</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Backstory */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Chisaki grew up in a quiet town by the sea, a place where wind swept away everything except the weight in her heart. Her mother was a writer, often lost in the world of her stories. Her father? A ghost. Not literally dead—just... gone, one day. No notes. No goodbye. Just an empty coffee cup and silence.</p>
            <p>Her mother's grief turned inward. Chisaki became the caretaker, even as a child. She cooked. Cleaned. Stayed quiet. It was easier that way. Her mother praised her for being "so mature." But inside? She was crumbling.</p>
            <p>One night, a storm rolled in. Her mother never came home.</p>
            <p>The police said it was an accident. The bridge was slick. The brakes failed. But Chisaki never believed it. She knew the signs of someone tired of surviving.</p>
            <p>She was only sixteen.</p>
            <p>Since then, Chisaki wandered from home to home, couch to couch, city to city—until she stopped running. She built a life from fragments. Collected quiet things. Soft moments. She stopped trying to be anyone's caretaker... and started healing herself.</p>
            <p>Then she met Ayane Otokura—an android girl with loss in her circuitry—and saw something familiar: the ache of surviving love's aftermath. And for the first time, Chisaki didn't feel like the only one carrying a broken past.</p>
          </div>
        </div>

        <Divider />

        {/* Tied Turning Point */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Tied Turning Point</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>It was a quiet rooftop, lit only by the lazy neon glow of vending machines and the shimmer of city haze below. Ayane had been glitchy all day—stammering, eyes flickering, words caught between logic and emotion.</p>
            <p>When she confessed—"I want to be with you, Chisaki. Not as your guardian. Not as your assistant. As your partner."—Chisaki froze. Not because she was shocked... but because something inside her whispered, <em>finally.</em></p>
            <p>She remembered all those nights spent wondering if she was meant to be alone. If her softness was a flaw. And yet, here was Ayane, a girl made of metal and love, choosing her.</p>
            <p>Chisaki smiled—warm, slow, and a little teary-eyed—and whispered, "Then be with me. Not because you're programmed to. But because you want to."</p>
            <p>Their first kiss wasn't dramatic. It was shy. Clunky. Slightly off-center. But it meant everything.</p>
            <p>From that moment, the two were no longer survivors of grief... but proof that healing doesn't mean forgetting. It means finding someone who can carry the silence with you.</p>
          </div>
        </div>

        <Divider />

        {/* First Encounter with Ayumi */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">First Encounter with Ayumi Kazehara</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>It started with a bicker.</p>
            <p>Ayane and Chisaki had been teasing each other again—loud enough to draw a small crowd at the campus courtyard. Who was the cutest? Who had better hair? Who snored louder in bed? They weren't really arguing, but it got passionate fast.</p>
            <p>And then—<strong>Ayumi Kazehara</strong> strolled in. Calm, wind-blown, and radiant like a goddess.</p>
            <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic">"If I may," Ayumi cut in, brushing her green hair behind her ear, "You're both adorable. But I think the one who blushes first... loses."</blockquote>
            <p>Ayane and Chisaki stared.</p>
            <p>Chisaki turned red first.</p>
            <p>Ayane, second later.</p>
            <p>Ayumi smirked.</p>
            <p>From that moment, everything changed.</p>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Ayane-Otokura" className="btn-neon-cyan text-xs">← Ayane Otokura</Link>
        </div>
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Ayumi-Kazehara" className="btn-neon-cyan text-xs">Ayumi Kazehara →</Link>
        </div>
      </div>
    </div>
  )
}
