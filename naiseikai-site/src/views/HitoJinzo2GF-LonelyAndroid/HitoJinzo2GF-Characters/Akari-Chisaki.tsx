import { Link } from 'react-router-dom'

function Divider() {
  return <div className="section-divider my-8" />
}

function InfoGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map(({ label, value }) => (
        <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
          <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
          <p className="text-sm text-text-muted">{value}</p>
        </div>
      ))}
    </div>
  )
}

function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-[#ffaad4]/40 pl-4 italic text-sm text-text-faint leading-relaxed my-3">
      {children}
    </blockquote>
  )
}

function IdentityBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.02)] space-y-2">
      <p className="font-mono text-xs text-[#ffaad4]">{title}</p>
      <div className="text-sm text-text-muted leading-relaxed">{children}</div>
    </div>
  )
}

export default function AkariChisaki() {
  return (
    <div className="page-container">

      {/* Back */}
      <div className="mb-6">
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ← Back to HitoJinzo2GF
        </Link>
      </div>

      {/* Header */}
      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#ffaad4] mb-1">Chisaki, Akari</h1>
        <p className="text-text-faint font-mono text-xs">一人の人造人間と、二人の彼女？! · Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi</p>
        <p className="text-text-faint font-mono text-xs mt-0.5">The Lonely Android and her Two Girlfriends!</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">General Information</h2>
        <InfoGrid items={[
          { label: 'First Name', value: 'Akari' },
          { label: 'Last Name', value: 'Chisaki' },
          { label: 'Nickname', value: 'Aka-chai' },
          { label: 'Gender', value: 'Female' },
          { label: 'Age', value: '24' },
          { label: 'Birthday', value: 'October 31, 2076' },
          { label: 'Height', value: '5\'5"' },
          { label: 'Pronouns', value: 'She/Her' },
        ]} />
      </div>

      <Divider />

      {/* Relationships */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Relationships</h2>
        <div className="flex flex-wrap gap-2">
          {['Ayane Otokura', 'Ayumi Kazehara'].map(r => (
            <span key={r} className="tag tag-cyan">{r}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Personality</h2>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>Calm and vibing. A little bit submissive. Level-headed, but with moments of playful chaos. She's the type to offer quiet comfort and an unexpected jab of sarcasm when you least expect it.</p>
        </div>
      </div>

      <Divider />

      {/* Hobbies & Traits */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Hobbies &amp; Traits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Stargazing</li>
              <li>• Listening to lo-fi music</li>
              <li>• Rearranging her crystals (she totally has a crystal corner)</li>
              <li>• Spontaneous naps in sunbeams</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Mint tea</li>
              <li>• Soft textures</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Loud and toxic people.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Animals</p>
            <p className="text-sm text-text-muted"><span className="text-text-faint">Favorite:</span> Foxes · <span className="text-text-faint">Comfort:</span> Cloud-shaped plush rabbit named Mochi</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Four Identities */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">The Four Identities</h2>
        <div className="space-y-3">
          <IdentityBlock title="The Social Self">
            <p>The calm, vibing girl who offers quiet comfort and unexpected sarcasm. She is level-headed and mature, the one who brings mint tea and soft textures to every room. She is the sunflower-eyed girl who stopped trying to save everyone and instead learned to hold space. She is the one who found a rusted android in a scrapyard and offered her water, then refused to be served twice.</p>
          </IdentityBlock>
          <IdentityBlock title="The Personal Self">
            <p>The crystal collector who rearranges her corner by moonlight. The lo-fi listener who takes spontaneous naps in sunbeams with Mochi, her cloud-shaped rabbit. She is playful and submissive and occasionally chaotic. She likes stargazing because the sea took her mother and the sky feels safer. She is the girl who built a life from fragments and found that soft things can be strong too.</p>
          </IdentityBlock>
          <IdentityBlock title="The Core Self">
            <p>The girl who found an empty coffee cup where her father used to sit. The sixteen-year-old who knew her mother's accident was not an accident. The child who cooked and cleaned and was praised for being "so mature" while she was crumbling inside. She is the survivor of couch-surfing and silence-carrying. She is the girl who chose to heal herself before she tried to heal anyone else.</p>
          </IdentityBlock>
          <IdentityBlock title="The Hidden Self">
            <p>The fear that her softness is a flaw and that she was meant to be alone. The nights she still wonders if she could have saved her mother. The grief she never fully buried because she was too busy surviving. And the secret, fragile hope that by loving Ayane and Ayumi, she is finally letting someone else carry the silence with her.</p>
          </IdentityBlock>
        </div>
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Backstory</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
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
        <h2 className="font-serif text-xl text-text mb-4">Tied Turning Point</h2>
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
        <h2 className="font-serif text-xl text-text mb-4">First Encounter with Ayumi Kazehara</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>It started with a bicker.</p>
          <p>Ayane and Chisaki had been teasing each other again—loud enough to draw a small crowd at the campus courtyard. Who was the cutest? Who had better hair? Who snored louder in bed? They weren't really arguing, but it got passionate fast.</p>
          <p>And then—<strong className="text-text">Ayumi Kazehara</strong> strolled in. Calm, wind-blown, and radiant like a goddess.</p>
          <div className="neon-card space-y-2 font-mono text-sm">
            <p><span className="text-text-faint text-xs">Ayumi —</span> "If I may," Ayumi cut in, brushing her green hair behind her ear, "You're both adorable. But I think the one who blushes first... loses."</p>
            <p><span className="text-text-faint text-xs">—</span> Ayane and Chisaki stared.</p>
            <p><span className="text-text-faint text-xs">—</span> Chisaki turned red first.</p>
            <p><span className="text-text-faint text-xs">—</span> Ayane, second later.</p>
            <p><span className="text-text-faint text-xs">—</span> Ayumi smirked.</p>
          </div>
          <p>From that moment, everything changed.</p>
        </div>
      </div>

      <Divider />

      {/* Nav */}
      <div className="flex flex-wrap gap-3">
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Ayane-Otokura" className="btn-neon-cyan text-xs">← Ayane Otokura</Link>
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Ayumi-Kazehara" className="btn-neon-purple text-xs">Next: Ayumi Kazehara →</Link>
      </div>

    </div>
  )
}
