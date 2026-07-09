import { Link } from 'react-router-dom'

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/DuraDekiruKoi-Dullahan" className="hover:text-[#00e5ff] transition-colors">Can this Dullahan fall in Love?</Link>
      <span>/</span>
      <Link to="/titles/DuraDekiruKoi-Dullahan" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#ffaad4]">Amane Hinoka</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HinokaAmanePage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        {/* Header */}
        <div>
          <span className="neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
          <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">👥 Amane, Hinoka | 火乃香 天音</h2>
          <p className="text-text-faint font-mono text-sm italic">Can this Dullahan fall in Love? (Vol 1)</p>
        </div>

        <Divider />

        {/* Identity */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Identity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'First Name', value: 'Hinoka' },
              { label: 'Last Name', value: 'Amane' },
              { label: 'Nickname', value: 'Hino-chan / Ino-tan' },
              { label: 'Gender', value: 'Female' },
              { label: 'Age', value: '24' },
              { label: 'Birthday', value: 'July 7th, 2076' },
              { label: 'Height', value: "4'8" },
              { label: 'Pronouns', value: 'She/Her' },
              { label: 'OC Date Creation', value: '10/22/2025' },
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
              <li>Kori Yukino</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Backstory */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
          <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Hinoka is a descendant of the Phoenix Clan from the Phoenix Sky Castle. She is the last heir to the throne, but she wants no wealth or fame. Despite being a mythological being that is to be feared and worshipped, she also doesn't want that: sacrifices, prayers, and rituals. Yet….the entire lineage….<em>actually respects that</em>?!</p>
            <blockquote className="border-l-2 border-[#ffaad4]/40 pl-4 italic">
              "Go live your own life, Hinoka," — one of the councils literally told her to be herself—her own person.
            </blockquote>
            <p>So, she goes down to Neo-Hokkaido of Japan, where there is a lot of beautiful sceneries side from the neon-lit cities that dwelled among nature.</p>
            <p>She decided to move into an abandoned mountain shrine that (overlooks) is near Sumiyoshi Shrine in Otaru, which is as close to the Sky Castle's atmosphere and vibe. She restored the abandoned shrine back to normal, but hid it from the public with her magic. To the general public, it is still an abandoned shrine, but to Hinoka, it's her home. She calls her home "The Phoenix Shrine."</p>
            <p>She's integrated well with society. Sometimes would get random offerings from passerbys who offer to the "abandoned shrine" (from their viewpoint).</p>
            <p>But on Christmas Eve, the Sky Castle was attacked. By—Dark Hydra Serpents. A mystical force that rivals Phoenixs. Hinoka, being the last descendant, became enraged, where the tailsman (her necklace) broke where she unleashed her full power on those Hydra Serpents, nearly decimating their kind (one escaped).</p>
            <p>Hinoka is upset. Her lineage is gone. Her entire family. The people who respect her. And the generations of members from The Council and even her friends…? <em>They're gone</em>.</p>
            <p>Her Eternal Flame (property of a phoenix) that envigorates her energy and personality is slowly….dying out. And without a that, she could die a painful death.</p>
            <p>But that all changed one day when a soul entered The Phoenix Shrine. A warrior of ice and blue flame, a Dullahan by the name: Kori Yukino. She befriended Hinoka. And that's when a certain flame rose in Hinoka's heart. It wasn't just an eternal flame. It was a flame fueled by love—eternal love.</p>
          </div>
        </div>

        <Divider />

        {/* Personality */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Personality</h3>
          <div className="callout text-sm text-text-muted leading-relaxed">
            <p>Full of energy, flame, and fire (she's a fire birb). She can be a klutz at times. Airhead energy when she needs. But her personality was molded when Kori Yukino came into her life. Highly intelligent. College not needed. Emotionally dense. Physically short.</p>
          </div>
        </div>

        <Divider />

        {/* Hobbies & Likes */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Hobbies &amp; Likes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">Hobbies:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Likes to randomly send out magic blasts as fireworks</li>
                <li>Chiling in the snow (it negates her fire abilities)</li>
                <li>Reading literature and sometimes manga</li>
              </ul>
              <p className="font-mono text-xs text-[#ffaad4] mt-3 mb-2">Likes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Cold Food. Likes to eat ice cubes and ice cream</li>
                <li>Likes to touch Kori's Blue Flame (it hurts in a good way)</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">Dislikes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Spiders</li>
              </ul>
              <p className="font-mono text-xs text-[#ffaad4] mt-3 mb-1">Favorite Animal:</p>
              <p>Fire Lizards</p>
              <p className="font-mono text-xs text-[#ffaad4] mt-2 mb-1">Comfort Animal:</p>
              <p>Snow Moth</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Visual Appearance */}
        <div>
          <h3 className="font-serif text-lg text-text mb-4">Visual Appearance</h3>

          <div className="callout mb-4 text-sm text-text-muted italic">
            🌸 General Vibe: Full of energy, flame, and fire. "Don't think you've gotten away with this!!"
          </div>

          <div className="space-y-3">
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">💇‍♀️ Hair:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Crimson Orange. Long hair length. Sometimes likes to style it like a princess braid or in a pony-tail</li>
                <li>Sideswept bangs that feel like you can see her personality.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">👀 Eyes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Orange. Energy. Full of life and fire (even if she is depressed)</li>
                <li>Charismatic!</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">🧥 Outfit Style:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Casual but <strong>aloof</strong>.</li>
                <li>Her casual wear often consists of kitsune-style maid dress appearance at home.</li>
                <li>Legs always warm: <strong>long socks, white tights, or soft sweats.</strong></li>
                <li>When she does go out….she will wear something that doesn't stand out as much. Like a muted red turtleneck and a long pleated skirt.</li>
              </ul>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">🌬️ Expressions &amp; Body Language:</p>
              <p>Only <strong>relaxes when alone</strong>. Personality can vary. Her mood shifts are very quick though. She can be happy, sad, upset, mad, and then happy again.</p>
            </div>
            <div className="neon-card text-sm text-text-muted">
              <p className="font-mono text-xs text-[#ffaad4] mb-2">🎧 Accessories:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Red Earrings, particulary crimson like.</li>
                <li>
                  <strong>Tailsman Necklace - Magic Jade (green):</strong> helps limits her overwhelming phoenix magic and powers. It breaks when her emotions become distressed, but repairs itself when it finds solace. Or when Hinoka decides the rampage is enough.
                  <p className="mt-1 pl-4 text-text-faint text-xs">It was given by the council, since they knew of Hinako's powers. Last heir / decsendant is the strongest out of the whole lineage.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div>
          <Link to="/titles/DuraDekiruKoi-Dullahan/Kori-Yukino" className="btn-neon-cyan text-xs">← Kori Yukino</Link>
        </div>
        <Link to="/titles/DuraDekiruKoi-Dullahan" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div />
      </div>
    </div>
  )
}
