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
      <span className="text-[#a8ff8a]">Kazehara Ayumi</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AyumiKazeharaPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
          <h2 className="font-serif text-3xl text-[#a8ff8a] mb-1">👥 Kazehara, Ayumi</h2>
          <p className="text-text-faint font-mono text-sm italic">一人の人造人間と、二人の彼女？!</p>
          <p className="text-text-faint font-mono text-xs mt-1">Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi — The Lonely Android and her Two Girlfriends!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Ayumi (風原)' },
              { label: 'Last Name', value: 'Kazehara (歩美)' },
              { label: 'Name Meaning', value: '"Walking Beauty" (Ayumi) / "Wind Field" (Kazehara)' },
              { label: 'Nickname(s)', value: 'Ayu, Kazehime ("Wind Princess"), Windbreaker 😳' },
              { label: 'Age', value: '24' },
              { label: 'Manifested', value: 'April 22, 2000' },
              { label: 'Human Form Date', value: 'April 22, 2090' },
              { label: 'Birthday', value: 'April 22' },
              { label: 'Height', value: '5\'5" (165 cm)' },
              { label: 'Gender', value: 'Female (She/Her)' },
              { label: 'Orientation', value: 'Lesbian (openly sapphic, flirty, and proud 💚)' },
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
          <div className="neon-card text-sm text-text-muted space-y-2">
            <p>- Ayane Otokura <em>"When she calls my name, it echoes in my soul..."</em></p>
            <p>- Chisaki Akari <em>"Every time she calls me 'book girl,' I forget how to breathe..."</em></p>
          </div>
        </div>

        <Divider />

        {/* The Story */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">The Story</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Ayumi is a force of nature, The Wind Goddess. She was manifested on April 22, 2000, due to a contract with The Goddess of Nature, Dria. Although there are wild air spirits, Ayumi became the Goddess that governs over air and wind, even if it was artifical. She later got a human form on April 22, 2090.</p>
            <p>Her wind powers aren't that powerful, as she has mild control over them. However, the air around her? It follows her because they know, she's the Wind Goddess. A symbiotic relationship. They help each other.</p>
            <p>Before Ayumi crossed paths with Akari and Ayane, she dated a girl for four years. That girl? Kazuki Taiyo. Her relationship with her lasted for eight years, before a great tragedy occured.</p>
            <p>It was on October 13th, 2094. The two were on a beach, enjoying the sunset. Kazuki and Ayumi played in the sand, making beautiful sculptures. They also played in the water.</p>
            <p>But something happened.</p>
            <p>A school of sharks passed despite their bloodlust to consume, they killed Kazuki by accident. Ayumi was too slow to stop it. Her emotions? They were on the brink of destruction. Almost, until the wind around her calmed down.</p>
            <blockquote className="border-l-2 border-[#a8ff8a]/40 pl-4 italic space-y-1">
              <p>The Wind whispered: "I'm sorry for showing up too late. We knew you loved her."</p>
              <p>"Do you trust us?"</p>
            </blockquote>
            <p>Ayumi sobbed, nodded, and the wind carried both of them to shore.</p>
            <p>To Ayumi, Kazuki was her sun, her light. But her death? Ayumi couldn't go pass it. At this point, she broke down in tears, harshly. Ugly tears. Her wind powers? The manifested out of grief and covered over her and her friends' body like a bubble for protection.</p>
            <p>She wept.</p>
            <p>No one was there to console her.</p>
            <p>But a little voice came out from the air. A Wild Vapor Fairy. It helped Ayumi calm down again, saying,</p>
            <blockquote className="border-l-2 border-[#a8ff8a]/40 pl-4 italic">
              "She still loves you, no matter how long you live. Please treat this as a memory, before everything is forgotten. If you accept that, she will pass on knowing that you still love her."
            </blockquote>
            <p>A pivotal moment. Ayumi promises herself.</p>
            <p>It is now 2100. After the incident in her past involving a suppressed outburst of emotion, she left town and now lives more freely in the city, hiding her power under layers of confidence, smiles, pranks, and thigh straps. She heard two couples bickering:</p>
            <div className="pl-4 space-y-1">
              <p>Ayane Otokura</p>
              <p>Akari Chisaki</p>
            </div>
            <p>They were debating who was the cutest, until Ayumi stepped in. And after some time hanging out with them, both Ayane and Otokura confessed, asking to be her girlfriends (she said yes).</p>
          </div>
        </div>

        <Divider />

        {/* Hobbies */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Hobbies</h3>
          <div className="neon-card text-sm text-text-muted">
            <ul className="list-disc list-inside space-y-2">
              <li>Jogging early in the morning before the city wakes up</li>
              <li>Collecting wind chimes and tuning them by hand</li>
              <li>Napping in sunlit parks with a hoodie over her eyes</li>
              <li>Reading romantic manga (though she claims she's "just skimming")</li>
              <li>Has a fascination with tight spaces, gaps, and any challenging….obstacles.</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
          <div className="neon-card text-sm text-text-muted">
            <ul className="list-disc list-inside space-y-2">
              <li>Long emerald green hair, wind-blown and messy in a stylish way</li>
              <li>Emerald or turquoise eyes (depending on lighting)</li>
              <li>Toned physique, visible abs, sporty build</li>
              <li>Often wears off-shoulder sweaters or crop tops with shorts/thigh straps</li>
              <li>Jewelry: Small ear studs and a lucky charm around her ankle</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>Calm, composed, and effortlessly chill in almost any situation</li>
              <li>Has a natural "cool girl" aura—people feel at ease around her</li>
              <li>Speaks softly but with purpose; her words carry emotional weight</li>
              <li>Deeply observant and rarely rushes to judgment</li>
              <li>Loves soft music, long walks, and watching clouds drift</li>
              <li>Still flirty at times, but in a subtle, soothing way</li>
              <li>A little bit submissive 😳</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Likes & Dislikes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Likes &amp; Dislikes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-2">Likes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Autumn breezes and cloudy afternoons</li>
                <li>Herbal tea (especially chamomile and mint)</li>
                <li>Soft indie music and acoustic guitar</li>
                <li>Tight, enclosed spaces</li>
                <li>Light touches and forehead kisses</li>
              </ul>
              <p className="font-mono text-xs text-[#a8ff8a] mt-3 mb-1">Favorite Animal:</p>
              <p>Owl 🦉</p>
              <p className="font-mono text-xs text-[#a8ff8a] mt-2 mb-1">Comfort Animal:</p>
              <p>Sea Otter 🦦</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-2">Dislikes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Loud crowds and bright flashing lights</li>
                <li>People who act without thinking</li>
                <li>Having her hair touched without permission</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* Powers */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Powers</h3>
          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-1">Aerokinesis (Mild)</p>
              <p>Can influence small gusts and breezes, but suppresses most of it. In rare emotional spikes, it becomes turbulent.</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#a8ff8a] mb-1">Windstep</p>
              <p>An almost dance-like form of sprinting; she's so light-footed, some say she doesn't even touch the ground.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki" className="btn-neon-cyan text-xs">← Akari Chisaki</Link>
        </div>
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div />
      </div>
    </div>
  )
}
