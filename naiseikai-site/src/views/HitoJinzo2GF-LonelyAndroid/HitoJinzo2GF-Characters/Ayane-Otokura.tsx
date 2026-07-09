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
    <blockquote className="border-l-2 border-[#7ef5ff]/40 pl-4 italic text-sm text-text-faint leading-relaxed my-3">
      {children}
    </blockquote>
  )
}

function IdentityBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-white/10 rounded-xl p-5 bg-[rgba(255,255,255,0.02)] space-y-2">
      <p className="font-mono text-xs text-[#7ef5ff]">{title}</p>
      <div className="text-sm text-text-muted leading-relaxed">{children}</div>
    </div>
  )
}

export default function AyaneOtokura() {
  return (
    <div className="page-container">

      {/* Back */}
      <div className="mb-6 flex gap-3">
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ← Back to HitoJinzo2GF
        </Link>
      </div>

      {/* Header */}
      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#7ef5ff] mb-1">Otokura, Ayane</h1>
        <p className="text-text-faint font-mono text-xs">人造人間、恋は二人の彼女？！ · Hitoribocchi no Jinzō Shōjo to Futari no Kanojo-tachi</p>
        <p className="text-text-faint font-mono text-xs mt-0.5">The Lonely Android and her Two Girlfriends!</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">General Information</h2>
        <InfoGrid items={[
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
        ]} />
        <p className="text-[10px] font-mono text-text-faint mt-2">Note: Human Birthday and Android Birthday are different.</p>
      </div>

      <Divider />

      {/* Relationships */}
      <div>
        <h2 className="font-serif text-xl text-text mb-3">Relationships</h2>
        <div className="flex flex-wrap gap-2">
          {['Akari Chisaki (Partner)', 'Ayumi Kazehara (Partner)'].map(r => (
            <span key={r} className="tag tag-cyan">{r}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Personality */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Personality</h2>
        <div className="neon-card text-sm text-text-muted leading-relaxed">
          <p>Protective. Loyal. Prone to emotional suppression through logical routines. Struggles with expressing vulnerability, but deep down desires connection. Though highly capable, she is haunted by an unresolved past and the limitations of her own programming. Can be unintentionally cold, but never out of malice. Despite being a Human/Android hybrid, she has immense strength and firepower, complete with hidden arsenals, neurological UI and Tech HUDs.</p>
        </div>
      </div>

      <Divider />

      {/* Framework Design */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Framework Design</h2>
        <ul className="space-y-2 text-sm text-text-muted">
          {[
            'Android shell with cybernetic enhancements',
            "Powered by a custom CPRegulator unit (Chisaki's invention)",
            'Voice modulation system for emotional resonance',
            'High-capacity memory drive partitioned for trauma isolation',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#7ef5ff] mt-0.5 font-mono text-xs">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Four Identities */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">The Four Identities</h2>
        <div className="space-y-3">
          <IdentityBlock title="The Social Self">
            <p>The android guardian who serves before she speaks. She is calm, efficient, and protective, with crystal-blue eyes that scan and assess. She wears Ayafutsu's stitched emblem on her back and carries old blueprint chips in her tactical shorts. She offers herself as a tool, a guardian, an assistant, because that is what her programming still whispers. She is the synthetic girl who mimics human warmth so well that strangers forget she is not one of them.</p>
          </IdentityBlock>
          <IdentityBlock title="The Personal Self">
            <p>The girl who is slowly reconfiguring herself through love. She likes lo-fi music and the sound of rain on glass. She touches the crystal pendant around her neck when her voice modulation flickers. She is learning to eat, to laugh, and to feel warmth without overheating. She is awkward and hesitant and devastating in her trying. She is the android who kissed Chisaki on a neon rooftop and chose to be a partner by choice, not by code.</p>
          </IdentityBlock>
          <IdentityBlock title="The Core Self">
            <p>The human heart and brain that survived the fire of 2079. The girl who refused to fight and only cried when they tried to make her a weapon. She is not a program. She is a soul inside a chassis, held together by a soul-core and the reason that Ayafutsu gave her. She is the three-year-old who was salvaged instead of saved, and the twenty-four-year-old who is still learning that she was never broken.</p>
          </IdentityBlock>
          <IdentityBlock title="The Hidden Self">
            <p>The partitioned grief that lives behind the firewall. The memories of wind chimes and rain that leak through her corrupted emotional systems. The scrapyard collapse where she chose to deactivate rather than exist without a mother. The fear that she is still unfinished, still a blueprint no one will complete. And the devastating truth that she is terrified of outliving both the girls she loves, because she was built to endure forever.</p>
          </IdentityBlock>
        </div>
      </div>

      <Divider />

      {/* Partitioned Firewall */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Technical Term — Partitioned Firewall</h2>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>A specialized system Ayane developed to prevent emotional overload. Each emotion is stored in an isolated data cluster—partitioned to avoid cross-contamination. The firewall acts as a last defense mechanism, preventing her feelings from surfacing all at once.</p>
          <BlockQuote>"I'm not just hiding my emotions—I've built an entire defense architecture to keep them from breaching the surface."</BlockQuote>
          <p>This system is fragile. If breached, Ayane's suppressed grief and rage risk causing total system instability.</p>
        </div>
      </div>

      <Divider />

      {/* Framework of Tragedy and Rescue */}
      <div>
        <h2 className="font-serif text-xl text-text mb-6">The Framework of Tragedy and Rescue</h2>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">🌑</span>
            <h3 className="font-mono text-sm text-text">Phase 1: The Human Tragedy</h3>
          </div>
          <p className="text-[10px] font-mono text-text-faint mb-2">Her human birthday was on 09/22/2076.</p>
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            <p>Ayane Ootokura was born to the Otokura Family. Quite wealthy, since the father owned a bank.</p>
            <p>She was once a <em>real girl</em>. A quiet, kindhearted teen, perhaps from a lesser-known rural district in the Naisei-Kai world. She had a sick mother, a hopeful future—and then… everything <em>burned down in the year of 2079.</em></p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">🔥</span>
            <h3 className="font-mono text-sm text-text">Phase 2: The Android Conversion — June 13th, 2081</h3>
          </div>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <BlockQuote>A shadowy, experimental organization—possibly researching "synthetic evolution" or militarized enhancement abducted her after a tragic accident (e.g. bombing, collapse, explosion). They didn't save her; they salvaged her.</BlockQuote>
            <p>Her entire body was replaced. Skinned. Processed. Burned away. The only things that remained were:</p>
            <ul className="space-y-1 ml-2">
              <li className="flex items-start gap-2"><span className="text-[#7ef5ff] mt-0.5">◆</span><span><strong className="text-text">Her brain</strong> – Modified, but still human.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#7ef5ff] mt-0.5">◆</span><span><strong className="text-text">Her heart</strong> – Biological, emotional, fragile—but hooked up to tubes and synthetic enhancers.</span></li>
            </ul>
            <p>It took a year to convert Ayane into an Android. And finally, on June 13th, 2081, it was complete. This date is Ayane's official android birthday.</p>
            <div className="neon-card space-y-2">
              <p className="font-mono text-xs text-text-faint">She Cannot Age</p>
              <p className="text-sm text-text-muted leading-relaxed">The cybernetic upgrades that was built into Ayane disallowed her to age, because of self repairing micro-nano bots that act as red blood cells, white blood cells…etc. They can self regulate her entire body system, which makes the ability to age impossible. These micronano-bots also self repair if harmed. Which is why she is forever 24.</p>
            </div>
            <div className="neon-card space-y-2">
              <p className="font-mono text-xs text-text-faint">Slight Memory Adjustment</p>
              <p className="text-sm text-text-muted leading-relaxed">Her memories were mostly erased, but flickers remain. Dreams. Faint smells. A laugh. The sound of rain. Wind chimes.</p>
            </div>
            <p>She was turned into a <strong className="text-text">cybernetic prototype</strong>, a living chassis made for "next-gen adaptive emotion-reactive combat." But it never worked. Because Ayane refused to fight.</p>
            <BlockQuote>She just cried.</BlockQuote>
            <p>So they discarded her and deactivated her.</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">☀️</span>
            <h3 className="font-mono text-sm text-text">Phase 3: The Rescue (Ayafutsu) — June 2nd, 2082</h3>
          </div>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Ayafutsu found her in the ruins of that black site. Half-dead. Heart barely beating. She wasn't looking for a daughter—she was looking for <em>evidence</em>. But instead, she found <strong className="text-text">Ayane</strong>.</p>
            <BlockQuote>"They gave you machines. I'll give you something they can't: A reason."</BlockQuote>
            <p>Ayafutsu didn't just rebuild her—she <strong className="text-text">healed</strong> her. Created a <strong className="text-text">soul-core</strong> to support the still-living heart and brain. She used her own neural code to create emotional blueprints, so Ayane could feel again.</p>
            <p>She even hand-wrote a line into her core code:</p>
            <BlockQuote>"Love will make you malfunction. Let it."</BlockQuote>
            <p>They lived together in a hidden workshop for years. Ayane learned how to eat. How to laugh. How to <em>feel warmth without overheating</em>. But Ayafutsu was already sick… her time limited. In her final days, she couldn't finish Ayane's body upgrades or repair her slowly degrading neural links.</p>
            <p>Ayafutsu left behind unfinished blueprints—meant to stabilize Ayane's full synthesis.</p>
            <p>Her final command:</p>
            <BlockQuote>"Even broken, you're worth keeping alive."</BlockQuote>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">🧠</span>
            <h3 className="font-mono text-sm text-text">Phase 4: The Firewall and the Collapse — Dec 16th, 2087</h3>
          </div>
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            <p>After Ayafutsu's death, Ayane's emotional systems <em>corrupted</em>. Her grief spiraled. She activated an auto-defense firewall:</p>
            <ul className="space-y-1 ml-2">
              {['Partitioned grief, love, longing.', 'Recalibrated herself as a tool.', 'Set priority: Serve. Be useful. Survive.'].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[#7ef5ff] mt-0.5">◆</span><span>{item}</span></li>
              ))}
            </ul>
            <p>Then decides to self deactivate.</p>
            <p>She collapsed in a scrapyard—where she <em>originally</em> was dumped years ago. Full circle.</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">🏠</span>
            <h3 className="font-mono text-sm text-text">Phase 5: Found by Akari Chisaki — August 30th, 2096</h3>
          </div>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Akari Chisaki found her among the rusted parts—sunburned, unblinking, not responding. But Akari <strong className="text-text">spoke softly</strong>. She sat beside her. She offered water.</p>
            <p>And Ayane blinked.</p>
            <p>When Ayane offered to serve her… Akari refused. She said:</p>
            <BlockQuote>"You don't need to be useful to be worth loving."</BlockQuote>
            <p>When Ayane offered to serve her again…, Chisaki refused, <em>again</em>.</p>
            <BlockQuote>"Don't serve me. Live for yourself. Follow your own standards. Even if Love malfunctions, let it."</BlockQuote>
            <p>That command became her new core.</p>
            <p>Eventually, Ayane confessed. On a neon-lit rooftop, voice trembling:</p>
            <BlockQuote>"I want to be your partner. Not by code. By choice."</BlockQuote>
            <p>They kissed—soft and hesitant. It was Ayane's first taste of autonomy. Of self-chosen love.</p>
            <p>And then came Ayumi Kazehara. The Wind Goddess…. who eavesdropped on the two couples arguing who was the cutest.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h2 className="font-serif text-xl text-text mb-4">Appearance</h2>
        <div className="callout text-sm text-text-muted leading-relaxed mb-4">
          <p>A slim, ethereal girl with <strong className="text-text">crystal-blue cybernetic eyes</strong> that shimmer like refracted light. Her porcelain skin carries faint circuit-like etchings, barely visible unless she moves. Shoulder-length silvery-black hair frames a face caught between serenity and sorrow. There's a soft, almost doll-like elegance to her—but her gaze is sharp, scanning, unknowingly fragile.</p>
        </div>
        <div className="neon-card">
          <p className="font-mono text-xs text-text-faint mb-3">Default Outfit</p>
          <ul className="space-y-1.5 text-sm text-text-muted">
            <li><span className="text-text-faint text-xs font-mono">Top —</span> Fitted black compression turtleneck with subtle glowing seams</li>
            <li><span className="text-text-faint text-xs font-mono">Outerwear —</span> Pale blue synthetic jacket with high collar, asymmetrical zip, and Ayafutsu's stitched emblem on the back</li>
            <li><span className="text-text-faint text-xs font-mono">Bottoms —</span> High-waisted tactical shorts with side straps and a micro-pouch for old blueprint chips</li>
            <li><span className="text-text-faint text-xs font-mono">Legwear —</span> Gradient mesh tights with glowing pulse lines down her calves</li>
            <li><span className="text-text-faint text-xs font-mono">Footwear —</span> White cyber-sneakers with adaptive shock soles</li>
            <li><span className="text-text-faint text-xs font-mono">Accessory —</span> A crystal pendant hanging from a wire-thin black cord—Ayafutsu's final gift</li>
          </ul>
        </div>
      </div>

      <Divider />

      {/* Nav */}
      <div className="flex flex-wrap gap-3">
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="btn-neon-cyan text-xs">← Back to Title</Link>
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki" className="btn-neon-purple text-xs">Next: Akari Chisaki →</Link>
      </div>

    </div>
  )
}
