// Decorative fixed city skyline at the bottom of every page
// Buildings are silhouettes with neon window glows and lit signs
export default function CitySkyline() {
  return (
    <div className="city-skyline" aria-hidden="true">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon window glow filters */}
          <filter id="neonCyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="neonPurple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="neonPink" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Sky glow gradient at horizon */}
          <linearGradient id="horizonGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(10,10,60,0)" />
            <stop offset="100%" stopColor="rgba(20,20,80,0.6)" />
          </linearGradient>
          {/* Atmospheric haze behind buildings */}
          <linearGradient id="cityHaze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(5,5,20,1)" />
          </linearGradient>
        </defs>

        {/* Atmospheric city glow at horizon */}
        <ellipse cx="720" cy="220" rx="800" ry="120" fill="rgba(40,20,100,0.18)" />
        <ellipse cx="300" cy="220" rx="350" ry="80" fill="rgba(0,80,180,0.10)" />
        <ellipse cx="1100" cy="220" rx="320" ry="70" fill="rgba(130,0,200,0.10)" />

        {/* ── Far background buildings (darkest) ── */}
        {/* Cluster left */}
        <rect x="0"   y="140" width="60"  height="80" fill="#060616" />
        <rect x="20"  y="120" width="40"  height="100" fill="#060616" />
        <rect x="55"  y="130" width="50"  height="90" fill="#060616" />
        <rect x="90"  y="100" width="30"  height="120" fill="#070718" />
        <rect x="105" y="115" width="45"  height="105" fill="#060616" />
        {/* Cluster right */}
        <rect x="1350" y="135" width="90" height="85" fill="#060616" />
        <rect x="1370" y="110" width="45" height="110" fill="#070718" />
        <rect x="1400" y="125" width="40" height="95" fill="#060616" />

        {/* ── Mid background buildings ── */}
        <rect x="140" y="90"  width="55" height="130" fill="#080820" />
        <rect x="170" y="75"  width="35" height="145" fill="#09091f" />
        <rect x="190" y="95"  width="60" height="125" fill="#080820" />
        <rect x="230" y="105" width="40" height="115" fill="#09091f" />
        <rect x="240" y="80"  width="25" height="140" fill="#08081e" />

        <rect x="420" y="85"  width="70" height="135" fill="#080820" />
        <rect x="460" y="65"  width="40" height="155" fill="#09091f" />
        <rect x="490" y="90"  width="55" height="130" fill="#08081e" />

        <rect x="700" y="70"  width="80" height="150" fill="#07071d" />
        <rect x="740" y="55"  width="45" height="165" fill="#09091f" />
        <rect x="760" y="80"  width="65" height="140" fill="#080820" />

        <rect x="950" y="88"  width="60" height="132" fill="#08081e" />
        <rect x="985" y="68"  width="38" height="152" fill="#09091f" />
        <rect x="1010" y="92" width="55" height="128" fill="#080820" />

        <rect x="1180" y="80" width="75" height="140" fill="#07071d" />
        <rect x="1220" y="62" width="42" height="158" fill="#09091f" />
        <rect x="1248" y="88" width="60" height="132" fill="#080820" />

        <rect x="1310" y="95" width="50" height="125" fill="#08081e" />
        <rect x="1330" y="78" width="32" height="142" fill="#09091f" />

        {/* ── Foreground buildings (most visible) ── */}
        {/* Tall skyscraper left */}
        <rect x="0"   y="60"  width="70" height="160" fill="#0c0c28" />
        <rect x="25"  y="30"  width="30" height="190" fill="#0e0e2e" />
        {/* Antenna */}
        <rect x="38"  y="15"  width="4"  height="20"  fill="#1a1a40" />

        {/* Mid-left cluster */}
        <rect x="80"  y="80"  width="80" height="140" fill="#0c0c28" />
        <rect x="110" y="50"  width="50" height="170" fill="#0d0d2c" />
        <rect x="130" y="65"  width="55" height="155" fill="#0b0b25" />

        {/* Left-center tower */}
        <rect x="280" y="45"  width="65" height="175" fill="#0e0e2e" />
        <rect x="300" y="20"  width="28" height="200" fill="#0f0f30" />
        <rect x="312" y="5"   width="6"  height="18"  fill="#1a1a40" />

        {/* Center-left */}
        <rect x="350" y="70"  width="90" height="150" fill="#0c0c28" />
        <rect x="380" y="40"  width="55" height="180" fill="#0d0d2c" />

        {/* Center tall */}
        <rect x="550" y="30"  width="80" height="190" fill="#0f0f30" />
        <rect x="575" y="8"   width="32" height="212" fill="#101032" />
        <rect x="588" y="0"   width="7"  height="12"  fill="#1c1c45" />

        {/* Center wide */}
        <rect x="630" y="60"  width="110" height="160" fill="#0c0c28" />
        <rect x="660" y="35"  width="60"  height="185" fill="#0e0e2e" />

        {/* Center-right tower */}
        <rect x="830" y="25"  width="70" height="195" fill="#0f0f30" />
        <rect x="848" y="5"   width="30" height="215" fill="#101032" />
        <rect x="861" y="-5"  width="6"  height="14"  fill="#1c1c45" />

        {/* Right cluster */}
        <rect x="880" y="55"  width="90" height="165" fill="#0c0c28" />
        <rect x="915" y="40"  width="55" height="180" fill="#0d0d2c" />

        <rect x="1060" y="35" width="75" height="185" fill="#0e0e2e" />
        <rect x="1080" y="12" width="38" height="208" fill="#0f0f30" />
        <rect x="1095" y="0"  width="8"  height="16"  fill="#1a1a40" />

        <rect x="1130" y="65" width="85" height="155" fill="#0c0c28" />
        <rect x="1160" y="45" width="52" height="175" fill="#0d0d2c" />

        {/* Far right */}
        <rect x="1270" y="50" width="75" height="170" fill="#0e0e2e" />
        <rect x="1295" y="28" width="38" height="192" fill="#0f0f30" />

        <rect x="1360" y="60" width="80" height="160" fill="#0c0c28" />
        <rect x="1400" y="40" width="40" height="180" fill="#0d0d2c" />

        {/* ── Neon Windows (cyan glow) ── */}
        <g filter="url(#neonCyan)" opacity="0.8">
          {/* Left tower windows */}
          <rect x="32" y="40" width="6" height="4" fill="#00e5ff" opacity="0.9" />
          <rect x="42" y="40" width="6" height="4" fill="#00e5ff" opacity="0.7" />
          <rect x="32" y="52" width="6" height="4" fill="#00e5ff" opacity="0.8" />
          <rect x="42" y="52" width="6" height="4" fill="#00e5ff" opacity="0.9" />
          <rect x="32" y="64" width="6" height="4" fill="#00e5ff" opacity="0.6" />

          {/* Mid-left cluster windows */}
          <rect x="115" y="60" width="8" height="4" fill="#00e5ff" opacity="0.7" />
          <rect x="128" y="60" width="8" height="4" fill="#00e5ff" opacity="0.5" />
          <rect x="115" y="74" width="8" height="4" fill="#00e5ff" opacity="0.8" />
          <rect x="128" y="74" width="8" height="4" fill="#00e5ff" opacity="0.9" />
          <rect x="140" y="74" width="8" height="4" fill="#00e5ff" opacity="0.6" />
          <rect x="115" y="88" width="8" height="4" fill="#00e5ff" opacity="0.7" />

          {/* Center tower */}
          <rect x="580" y="20" width="8" height="5" fill="#00e5ff" opacity="0.9" />
          <rect x="594" y="20" width="8" height="5" fill="#00e5ff" opacity="0.8" />
          <rect x="580" y="35" width="8" height="5" fill="#00e5ff" opacity="0.7" />
          <rect x="594" y="35" width="8" height="5" fill="#00e5ff" opacity="0.9" />
          <rect x="580" y="50" width="8" height="5" fill="#00e5ff" opacity="0.6" />
          <rect x="594" y="50" width="8" height="5" fill="#00e5ff" opacity="0.8" />

          {/* Right tower */}
          <rect x="852" y="18" width="8" height="5" fill="#00e5ff" opacity="0.9" />
          <rect x="866" y="18" width="8" height="5" fill="#00e5ff" opacity="0.7" />
          <rect x="852" y="33" width="8" height="5" fill="#00e5ff" opacity="0.8" />
          <rect x="866" y="33" width="8" height="5" fill="#00e5ff" opacity="0.9" />
          <rect x="852" y="48" width="8" height="5" fill="#00e5ff" opacity="0.5" />
        </g>

        {/* ── Purple Windows ── */}
        <g filter="url(#neonPurple)" opacity="0.8">
          <rect x="285" y="55" width="7" height="4" fill="#bf5fff" opacity="0.9" />
          <rect x="298" y="55" width="7" height="4" fill="#bf5fff" opacity="0.7" />
          <rect x="285" y="68" width="7" height="4" fill="#bf5fff" opacity="0.8" />
          <rect x="298" y="68" width="7" height="4" fill="#bf5fff" opacity="0.6" />
          <rect x="285" y="81" width="7" height="4" fill="#bf5fff" opacity="0.9" />
          <rect x="298" y="81" width="7" height="4" fill="#bf5fff" opacity="0.7" />

          <rect x="1085" y="22" width="8" height="5" fill="#bf5fff" opacity="0.9" />
          <rect x="1099" y="22" width="8" height="5" fill="#bf5fff" opacity="0.8" />
          <rect x="1085" y="38" width="8" height="5" fill="#bf5fff" opacity="0.7" />
          <rect x="1099" y="38" width="8" height="5" fill="#bf5fff" opacity="0.9" />
          <rect x="1085" y="54" width="8" height="5" fill="#bf5fff" opacity="0.6" />

          <rect x="665" y="48" width="8" height="5" fill="#bf5fff" opacity="0.8" />
          <rect x="680" y="48" width="8" height="5" fill="#bf5fff" opacity="0.7" />
          <rect x="665" y="63" width="8" height="5" fill="#bf5fff" opacity="0.9" />
          <rect x="680" y="63" width="8" height="5" fill="#bf5fff" opacity="0.6" />
        </g>

        {/* ── Pink Windows ── */}
        <g filter="url(#neonPink)" opacity="0.7">
          <rect x="385" y="52" width="7" height="4" fill="#ff6eb4" opacity="0.8" />
          <rect x="398" y="52" width="7" height="4" fill="#ff6eb4" opacity="0.9" />
          <rect x="385" y="65" width="7" height="4" fill="#ff6eb4" opacity="0.7" />
          <rect x="398" y="65" width="7" height="4" fill="#ff6eb4" opacity="0.8" />
          <rect x="385" y="78" width="7" height="4" fill="#ff6eb4" opacity="0.9" />

          <rect x="920" y="52" width="7" height="4" fill="#ff6eb4" opacity="0.8" />
          <rect x="934" y="52" width="7" height="4" fill="#ff6eb4" opacity="0.7" />
          <rect x="920" y="66" width="7" height="4" fill="#ff6eb4" opacity="0.9" />
          <rect x="934" y="66" width="7" height="4" fill="#ff6eb4" opacity="0.6" />

          <rect x="1165" y="58" width="7" height="5" fill="#ff6eb4" opacity="0.8" />
          <rect x="1178" y="58" width="7" height="5" fill="#ff6eb4" opacity="0.9" />
          <rect x="1165" y="73" width="7" height="5" fill="#ff6eb4" opacity="0.7" />
        </g>

        {/* ── Amber / warm windows ── */}
        <g opacity="0.6">
          <rect x="558" y="45" width="7" height="4" fill="#ffb347" />
          <rect x="570" y="45" width="7" height="4" fill="#ffb347" />
          <rect x="558" y="59" width="7" height="4" fill="#ffb347" />
          <rect x="570" y="59" width="7" height="4" fill="#ffb347" />
          <rect x="640" y="75" width="8" height="5" fill="#ffb347" />
          <rect x="655" y="75" width="8" height="5" fill="#ffb347" />
          <rect x="1280" y="62" width="7" height="4" fill="#ffb347" />
          <rect x="1295" y="62" width="7" height="4" fill="#ffb347" />
        </g>

        {/* ── Neon Roof Signs ── */}
        {/* Sign: 内省 (Naisei) - cyan */}
        <rect x="278" y="35" width="80" height="16" rx="2" fill="rgba(0,229,255,0.08)" stroke="rgba(0,229,255,0.6)" strokeWidth="0.8" filter="url(#neonCyan)" />
        <text x="318" y="47" textAnchor="middle" fontSize="9" fill="#00e5ff" fontFamily="sans-serif" opacity="0.9" filter="url(#neonCyan)">内省界</text>

        {/* Sign: NAISEIKAI - pink */}
        <rect x="838" y="8" width="100" height="14" rx="2" fill="rgba(255,110,180,0.08)" stroke="rgba(255,110,180,0.6)" strokeWidth="0.8" filter="url(#neonPink)" />
        <text x="888" y="19" textAnchor="middle" fontSize="8" fill="#ff6eb4" fontFamily="sans-serif" letterSpacing="2" opacity="0.9" filter="url(#neonPink)">NAISEIKAI</text>

        {/* Sign: NEO JAPAN 2100 - amber */}
        <rect x="548" y="3" width="110" height="14" rx="2" fill="rgba(255,179,71,0.08)" stroke="rgba(255,179,71,0.5)" strokeWidth="0.8" />
        <text x="603" y="14" textAnchor="middle" fontSize="8" fill="#ffb347" fontFamily="sans-serif" letterSpacing="1.5" opacity="0.85">NEO JAPAN 2100</text>

        {/* Sign: small purple misc sign */}
        <rect x="1070" y="6" width="65" height="13" rx="2" fill="rgba(191,95,255,0.07)" stroke="rgba(191,95,255,0.5)" strokeWidth="0.8" filter="url(#neonPurple)" />
        <text x="1102" y="16" textAnchor="middle" fontSize="7.5" fill="#bf5fff" fontFamily="sans-serif" letterSpacing="1" opacity="0.9" filter="url(#neonPurple)">YOKAI CORP</text>

        {/* Street-level glow fade */}
        <rect x="0" y="180" width="1440" height="40" fill="url(#cityHaze)" />

        {/* Ground line */}
        <rect x="0" y="218" width="1440" height="4" fill="#05050f" />
      </svg>
    </div>
  )
}
