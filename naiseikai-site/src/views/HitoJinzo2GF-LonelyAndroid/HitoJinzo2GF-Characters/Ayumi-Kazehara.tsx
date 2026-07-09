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
    <blockquote className="border-l-2 border-[#d49fff]/40 pl-4 italic text-sm text-text-faint leading-relaxed my-3">
      {children}
    </blockquote>
  )
}

function IdentityBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.02)] space-y-2">
      <p className="font-mono text-xs text-[#d49fff]">{title}</p>
      <div className="text-sm text-text-muted leading-relaxed">{children}</div>
    </div>
  )
}

export default function AyumiKazehara() {
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
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Main Character</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#d49fff] mb-1">Kazehara, Ayumi</h1>
        <p className="text-text-faint font-mono text-xs">一人の人造人間と、二人の彼女？! · Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi</p>
        <p className="text-text-faint font-mono text-xs mt-0.5">The Lonely Android and her Two Girlfriends!</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">General Information</h2>
        <InfoGrid items={[
          { label: 'First Name', value: 'Ayumi (風原)' },
          { label: 'Last Name', value: 'Kazehara (歩美)' },
          { label: 'Name Meaning', value: '"Walking Beauty" (Ayumi) / "Wind Field" (Kazehara)' },
          { label: 'Nickname(s)', value: 'Ayu, Kazehime ("Wind Princess"), Windbreaker' },
          { label: 'Age', value: '24' },
          { label: 'Manifested', value: 'April 22, 2000' },
          { label: 'Human Form Date', value: 'April 22, 2090' },
          { label: 'Birthday', value: 'April 22' },
          { label: 'Height', value: '5\'5" (165 cm)' },
          { label: 'Gender', value: 'Female (She/Her)' },
          { label: 'Orientation', value: 'Lesbian (openly sapphic, flirty, and proud 💚)' },
        ]} />
      </div>

      <Divider />

      {/* Relationships */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Relationships</h2>
        <div className="space-y-2 text-sm text-text-muted">
          <p>Ayane Otokura — <span className="text-text-faint italic">"When she calls my name, it echoes in my soul..."</span></p>
          <p>Chisaki Akari — <span className="text-text-faint italic">"Every time she calls me 'book girl,' I forget how to breathe..."</span></p>
        </div>
      </div>

      <Divider />

      {/* The Story */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">The Story</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Ayumi is a force of nature, The Wind Goddess. She was manifested on April 22, 2000, due to a contract with The Goddess of Nature, Dria. Although there are wild air spirits, Ayumi became the Goddess that governs over air and wind, even if it was artificial. She later got a human form on April 22, 2090.</p>
          <p>Her wind powers aren't that powerful, as she has mild control over them. However, the air around her? It follows her because they know, she's the Wind Goddess. A symbiotic relationship. They help each other.</p>
          <p>Before Ayumi crossed paths with Akari and Ayane, she dated a girl for four years. That girl? Kazuki Taiyo. Her relationship with her lasted for eight years, before a great tragedy occurred.</p>
          <p>It was on October 13th, 2094. The two were on a beach, enjoying the sunset. Kazuki and Ayumi played in the sand, making beautiful sculptures. They also played in the water.</p>
          <p>But something happened.</p>
          <p>A school of sharks passed despite their bloodlust to consume, they killed Kazuki by accident. Ayumi was too slow to stop it. Her emotions? They were on the brink of destruction. Almost, until the wind around her calmed down.</p>
          <div className="neon-card space-y-3 font-mono text-sm">
            <p>The Wind whispered: <span className="italic text-text-faint">"I'm sorry for showing up too late. We knew you loved her."</span></p>
            <p><span className="italic text-text-faint">"Do you trust us?"</span></p>
            <p className="font-sans text-sm text-text-muted">Ayumi sobbed, nodded, and the wind carried both of them to shore.</p>
            <p className="font-sans text-sm text-text-muted">To Ayumi, Kazuki was her sun, her light. But her death? Ayumi couldn't go past it. At this point, she broke down in tears, harshly. Ugly tears. Her wind powers? They manifested out of grief and covered over her and her friends' body like a bubble for protection.</p>
            <p className="font-sans text-sm text-text-muted">She wept.</p>
            <p className="font-sans text-sm text-text-muted">No one was there to console her.</p>
            <p className="font-sans text-sm text-text-muted">But a little voice came out from the air. A Wild Vapor Fairy. It helped Ayumi calm down again, saying,</p>
            <p className="italic text-text-faint">"She still loves you, no matter how long you live. Please treat this as a memory, before everything is forgotten. If you accept that, she will pass on knowing that you still love her."</p>
            <p className="font-sans text-sm text-text-muted">A pivotal moment. Ayumi promises herself.</p>
          </div>
          <p>It is now 2100. After the incident in her past involving a suppressed outburst of emotion, she left town and now lives more freely in the city, hiding her power under layers of confidence, smiles, pranks, and thigh straps. She heard two couples bickering: Ayane Otokura and Akari Chisaki.</p>
          <p>They were debating who was the cutest, until Ayumi stepped in. And after some time hanging out with them, both Ayane and Otokura confessed, asking to be her girlfriends (she said yes).</p>
        </div>
      </div>

      <Divider />

      {/* Four Identities */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">The Four Identities</h2>
        <div className="space-y-3">
          <IdentityBlock title="The Social Self">
            <p>The confident Wind Princess who strolls into rooms like a breeze. She is flirty, playful, and effortlessly cool. She hides her divine power under crop tops, thigh straps, and pranks. She is the green-haired goddess who makes people blush and calls it a game. She is calm and composed and speaks with purpose. She is the submissive wind who lets herself be caught by the people she loves.</p>
          </IdentityBlock>
          <IdentityBlock title="The Personal Self">
            <p>The girl who collects wind chimes and tunes them by hand. The romantic manga reader who claims she is only skimming. The jogger at dawn who moves so lightly she barely touches the ground. She likes chamomile tea, acoustic guitar, and autumn breezes. She naps in sunlit parks with a hoodie over her eyes because she likes to hide even when she is resting. She is the goddess who loves tight spaces because she is tired of being infinite.</p>
          </IdentityBlock>
          <IdentityBlock title="The Core Self">
            <p>The Wind Goddess manifested in 2000 from a contract with Dria, the Goddess of Nature. She governs the air and the air follows her. She is symbiotic with the sky itself. She has lived for a century and will live for centuries more. She is divine, ancient, and bound to the wind that once whispered apologies to her for being too late. She is the goddess who carries her sun's memory across eternity.</p>
          </IdentityBlock>
          <IdentityBlock title="The Hidden Self">
            <p>The girl who watched Kazuki die in the ocean on October 13th, 2094. The grief that manifested as a protective bubble over two bodies on a shore. The memory of her sun that she must carry before everything is forgotten. The fear of open water and the love of enclosed spaces. The goddess who is still learning that she is allowed to love again without betraying the one she lost.</p>
          </IdentityBlock>
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Personality</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          {[
            'Calm, composed, and effortlessly chill in almost any situation',
            'Has a natural "cool girl" aura—people feel at ease around her',
            'Speaks softly but with purpose; her words carry emotional weight',
            'Deeply observant and rarely rushes to judgment',
            'Loves soft music, long walks, and watching clouds drift',
            'Still flirty at times, but in a subtle, soothing way',
            'A little bit submissive 😳',
          ].map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#d49fff] mt-0.5">✦</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Hobbies & Traits */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Hobbies &amp; Traits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Jogging early in the morning before the city wakes up</li>
              <li>• Collecting wind chimes and tuning them by hand</li>
              <li>• Napping in sunlit parks with a hoodie over her eyes</li>
              <li>• Reading romantic manga (though she claims she's "just skimming")</li>
              <li>• Has a fascination with tight spaces, gaps, and any challenging….obstacles.</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Autumn breezes and cloudy afternoons</li>
              <li>• Herbal tea (especially chamomile and mint)</li>
              <li>• Soft indie music and acoustic guitar</li>
              <li>• Tight, enclosed spaces</li>
              <li>• Light touches and forehead kisses</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• Loud crowds and bright flashing lights</li>
              <li>• People who act without thinking</li>
              <li>• Having her hair touched without permission</li>
            </ul>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Animals</p>
            <p className="text-sm text-text-muted"><span className="text-text-faint">Favorite:</span> Owl 🦉 · <span className="text-text-faint">Comfort:</span> Sea Otter 🦦</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Appearance</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          <li><span className="text-text-faint font-mono text-xs">Hair —</span> Long emerald green hair, wind-blown and messy in a stylish way</li>
          <li><span className="text-text-faint font-mono text-xs">Eyes —</span> Emerald or turquoise (depending on lighting)</li>
          <li><span className="text-text-faint font-mono text-xs">Build —</span> Toned physique, visible abs, sporty build</li>
          <li><span className="text-text-faint font-mono text-xs">Style —</span> Often wears off-shoulder sweaters or crop tops with shorts/thigh straps</li>
          <li><span className="text-text-faint font-mono text-xs">Jewelry —</span> Small ear studs and a lucky charm around her ankle</li>
        </ul>
      </div>

      <Divider />

      {/* Powers */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Powers</h2>
        <div className="space-y-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-[#d49fff] mb-2">Aerokinesis (Mild)</p>
            <p className="text-sm text-text-muted leading-relaxed">Can influence small gusts and breezes, but suppresses most of it. In rare emotional spikes, it becomes turbulent.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-[#d49fff] mb-2">Windstep</p>
            <p className="text-sm text-text-muted leading-relaxed">An almost dance-like form of sprinting; she's so light-footed, some say she doesn't even touch the ground.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Nav */}
      <div className="flex flex-wrap gap-3">
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki" className="btn-neon-cyan text-xs">← Akari Chisaki</Link>
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="btn-neon-purple text-xs">← Back to Title</Link>
      </div>

    </div>
  )
}
