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
      <span className="text-[#7ef5ff]">Otokura Ayane</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AyaneOtokuraPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
          <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">👥 Otokura, Ayane</h2>
          <p className="text-text-faint font-mono text-sm italic">人造人間、恋は二人の彼女？！</p>
          <p className="text-text-faint font-mono text-xs mt-1">Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi — The Lonely Android and her Two Girlfriends!</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Ayane' },
              { label: 'Last Name', value: 'Otokura' },
              { label: 'ID Code', value: 'AYANE-3 or 1251145-3' },
              { label: 'Nickname', value: 'Ayane' },
              { label: 'Gender', value: 'Female (Android/Cybernetic Entity)' },
              { label: 'Age', value: 'Appears 24 (Chronologically 4 years since activation)' },
              { label: 'Android Birthday', value: 'June 13th, 2081' },
              { label: 'Human Birthday', value: 'September 22nd, 2076' },
              { label: 'Height', value: '5\'8"' },
              { label: 'Pronouns', value: 'She/Her' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-faint mt-3 italic">Note: Human Birthday and Android Birthday are different.</p>
        </div>

        <Divider />

        {/* Relationships */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Relationships</h3>
          <div className="neon-card text-sm text-text-muted">
            <ul className="list-disc list-inside space-y-1">
              <li>Akari Chisaki (Partner)</li>
              <li>Ayumi Kazehara (Partner)</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>Protective. Loyal. Prone to emotional suppression through logical routines. Struggles with expressing vulnerability, but deep down desires connection. Though highly capable, she is haunted by an unresolved past and the limitations of her own programming. Can be unintentionally cold, but never out of malice. Despite being a Human/Android hybrid, she has immense strength and firepower, complete with hidden arsenals, neurological UI and Tech HUDs.</p>
          </div>
        </div>

        <Divider />

        {/* Framework Design */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Framework Design</h3>
          <div className="neon-card text-sm text-text-muted">
            <ul className="list-disc list-inside space-y-2">
              <li>Android shell with cybernetic enhancements</li>
              <li>Powered by a custom CPRegulator unit (Chisaki's invention)</li>
              <li>Voice modulation system for emotional resonance</li>
              <li>High-capacity memory drive partitioned for trauma isolation</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Technical Term */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Technical Term — Partitioned Firewall</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>A specialized system Ayane developed to prevent emotional overload. Each emotion is stored in an isolated data cluster—partitioned to avoid cross-contamination. The firewall acts as a last defense mechanism, preventing her feelings from surfacing all at once.</p>
            <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">
              "I'm not just hiding my emotions—I've built an entire defense architecture to keep them from breaching the surface."
            </blockquote>
            <p>This system is fragile. If breached, Ayane's suppressed grief and rage risk causing total system instability.</p>
          </div>
        </div>

        <Divider />

        {/* The Framework of Tragedy and Rescue */}
        <div>
          <h3 className="font-serif text-lg text-text mb-6">The Framework of Tragedy and Rescue</h3>
          <div className="space-y-6">

            {/* Phase 1 */}
            <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🌑 Phase 1: The Human Tragedy</p>
              <p className="text-text-faint font-mono text-xs">Her human birthday was on 09/22/2076.</p>
              <p>Ayane Ootokura was born to the Otokura Family. Quite wealthy, since the father owned a bank.</p>
              <p>She was once a <em>real girl</em>. A quiet, kindhearted teen, perhaps from a lesser-known rural district in the Naisei-Kai world. She had a sick mother, a hopeful future—and then… everything <em>burned down in the year of 2079.</em></p>
            </div>

            {/* Phase 2 */}
            <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🔥 Phase 2: The Android Conversion — June 13th, 2081</p>
              <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">
                A shadowy, experimental organization—possibly researching "synthetic evolution" or militarized enhancement abducted her after a tragic accident (e.g. bombing, collapse, explosion). They didn't save her; they salvaged her.
              </blockquote>
              <p>Her entire body was replaced. Skinned. Processed. Burned away. The only things that remained were:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Her brain</strong> – Modified, but still human.</li>
                <li><strong>Her heart</strong> – Biological, emotional, fragile—but hooked up to tubes and synthetic enhancers.</li>
              </ul>
              <p>It took a year to convert Ayane into an Android. And finally, on June 13th, 2081, it was complete. This date is Ayane's official android birthday.</p>
              <div className="mt-2 space-y-2">
                <p className="font-mono text-xs text-text-faint">She Cannot Age</p>
                <p>The cybernetic upgrades that was built into Ayane disallowed her to age, because of self repairing micro-nano bots that act as red blood cells, white blood cells…etc. They can self regulate her entire body system, which makes the ability to age impossible. These micronano-bots also self repair if harmed. Which is why she is forever 24.</p>
              </div>
              <div className="mt-2 space-y-2">
                <p className="font-mono text-xs text-text-faint">Slight Memory Adjustment</p>
                <p>Her memories were mostly erased, but flickers remain. Dreams. Faint smells. A laugh. The sound of rain. Wind chimes.</p>
                <p>She was turned into a <strong>cybernetic prototype</strong>, a living chassis made for "next-gen adaptive emotion-reactive combat." But it never worked. Because Ayane refused to fight.</p>
                <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">She just cried.</blockquote>
                <p>So they discarded her and deactivated her.</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">☀️ Phase 3: The Rescue (Ayafutsu) — June 2nd, 2082</p>
              <p>Ayafutsu found her in the ruins of that black site. Half-dead. Heart barely beating. She wasn't looking for a daughter—she was looking for <em>evidence</em>. But instead, she found <strong>Ayane</strong>.</p>
              <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">"They gave you machines. I'll give you something they can't: A reason."</blockquote>
              <p>Ayafutsu didn't just rebuild her—she <strong>healed</strong> her. Created a <strong>soul-core</strong> to support the still-living heart and brain. She used her own neural code to create emotional blueprints, so Ayane could feel again.</p>
              <p>She even hand-wrote a line into her core code:</p>
              <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">"Love will make you malfunction. Let it."</blockquote>
              <p>They lived together in a hidden workshop for years. Ayane learned how to eat. How to laugh. How to <em>feel warmth without overheating</em>. But Ayafutsu was already sick… her time limited. In her final days, she couldn't finish Ayane's body upgrades or repair her slowly degrading neural links.</p>
              <p>Ayafutsu left behind unfinished blueprints—meant to stabilize Ayane's full synthesis.</p>
              <p>Her final command:</p>
              <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">"Even broken, you're worth keeping alive."</blockquote>
            </div>

            {/* Phase 4 */}
            <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🧠 Phase 4: The Firewall and the Collapse — Dec 16th, 2087</p>
              <p>After Ayafutsu's death, Ayane's emotional systems <em>corrupted</em>. Her grief spiraled. She activated an auto-defense firewall:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Partitioned grief, love, longing.</li>
                <li>Recalibrated herself as a tool.</li>
                <li>Set priority: <strong>Serve. Be useful. Survive.</strong></li>
              </ul>
              <p>Then decides to self deactivates.</p>
              <p>She collapsed in a scrapyard—where she <em>originally</em> was dumped years ago. Full circle.</p>
            </div>

            {/* Phase 5 */}
            <div className="neon-card space-y-3 text-sm text-text-muted leading-relaxed">
              <p className="font-mono text-xs text-[#7ef5ff] mb-2">🏠 Phase 5: Found by Akari Chisaki — August 30th, 2096</p>
              <p>Akari Chisaki found her among the rusted parts—sunburned, unblinking, not responding. But Akari <strong>spoke softly</strong>. She sat beside her. She offered water.</p>
              <p>And Ayane blinked.</p>
              <p>When Ayane offered to serve her… Akari refused. She said:</p>
              <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">"You don't need to be useful to be worth loving."</blockquote>
              <p>When Ayane offered to serve her again…, Chisaki refused, <em>again</em>.</p>
              <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">"Don't serve me. Live for yourself. Follow your own standards. Even if Love malfunctions, let it."</blockquote>
              <p>That command became her new core.</p>
              <p>Eventually, Ayane confessed. On a neon-lit rooftop, voice trembling:</p>
              <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic">"I want to be your partner. Not by code. By choice."</blockquote>
              <p>They kissed—soft and hesitant. It was Ayane's first taste of autonomy. Of self-chosen love.</p>
              <p>And then came Ayumi Kazehara. The Wind Goddess…. who eavesdropped on the two couples arguing who was the cutest.</p>
            </div>

          </div>
        </div>

        <Divider />

        {/* Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>A slim, ethereal girl with <strong>crystal-blue cybernetic eyes</strong> that shimmer like refracted light. Her porcelain skin carries faint circuit-like etchings, barely visible unless she moves. Shoulder-length silvery-black hair frames a face caught between serenity and sorrow. There's a soft, almost doll-like elegance to her—but her gaze is sharp, scanning, unknowingly fragile.</p>
          </div>
        </div>

        <Divider />

        {/* Apparel */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Apparel — Default Outfit</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Top', value: 'Fitted black compression turtleneck with subtle glowing seams' },
              { label: 'Outerwear', value: "Pale blue synthetic jacket with high collar, asymmetrical zip, and Ayafutsu's stitched emblem on the back" },
              { label: 'Bottoms', value: 'High-waisted tactical shorts with side straps and a micro-pouch for old blueprint chips' },
              { label: 'Legwear', value: 'Gradient mesh tights with glowing pulse lines down her calves' },
              { label: 'Footwear', value: 'White cyber-sneakers with adaptive shock soles' },
              { label: 'Accessory', value: "A crystal pendant hanging from a wire-thin black cord—Ayafutsu's final gift" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
                <p className="text-sm text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div />
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div>
          <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki" className="btn-neon-cyan text-xs">Akari Chisaki →</Link>
        </div>
      </div>
    </div>
  )
}
