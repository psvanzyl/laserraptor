/** Kaneda's bike from AKIRA — the red slide, reduced to a poster silhouette. */
export default function AkiraBike() {
  return (
    <svg
      viewBox="0 0 420 240"
      className="h-full w-full"
      role="img"
      aria-label="Red motorcycle silhouette with a glowing headlight"
    >
      <defs>
        <linearGradient id="ak-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff5a7a" />
          <stop offset="42%" stopColor="#ff2d4f" />
          <stop offset="100%" stopColor="#a30d27" />
        </linearGradient>
        <radialGradient id="ak-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff2e88" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ff2e88" stopOpacity="0" />
        </radialGradient>
        <filter id="ak-bloom" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <ellipse cx="220" cy="210" rx="170" ry="16" fill="url(#ak-glow)" />

      {/* rear wheel */}
      <circle cx="106" cy="172" r="44" fill="#0b0714" stroke="#2a2148" strokeWidth="3" />
      <circle cx="106" cy="172" r="22" fill="none" stroke="#ff2d4f" strokeWidth="3" strokeOpacity="0.85" />
      <circle cx="106" cy="172" r="5" fill="#ff2d4f" />

      {/* front wheel */}
      <circle cx="330" cy="176" r="40" fill="#0b0714" stroke="#2a2148" strokeWidth="3" />
      <circle cx="330" cy="176" r="20" fill="none" stroke="#ff2d4f" strokeWidth="3" strokeOpacity="0.85" />
      <circle cx="330" cy="176" r="5" fill="#ff2d4f" />

      {/* body */}
      <path
        d="M96 150 C104 116 142 100 196 98 L258 100 C300 102 330 120 352 148 L356 162 L318 170 L262 158 L188 160 L140 170 L100 168 Z"
        fill="url(#ak-body)"
      />
      {/* fairing / front cowl */}
      <path d="M300 106 C332 108 356 130 362 156 L330 158 C322 132 312 118 296 112 Z" fill="#ff2d4f" />
      {/* screen */}
      <path d="M266 104 L308 108 L318 128 L272 124 Z" fill="#140a1e" stroke="#3ce9ff" strokeOpacity="0.45" strokeWidth="1.5" />
      {/* seat hump */}
      <path d="M150 118 C168 104 196 100 214 102 L210 118 L160 126 Z" fill="#ff7b93" opacity="0.55" />
      {/* exhausts */}
      <rect x="78" y="150" width="34" height="9" rx="4" fill="#2a2148" />
      <rect x="78" y="162" width="28" height="8" rx="4" fill="#1b1430" />

      {/* headlight */}
      <path d="M352 148 L386 158 L352 166 Z" fill="#fff6d8" filter="url(#ak-bloom)" />
      <path d="M352 150 L380 158 L352 164 Z" fill="#ffffff" />
      {/* beam */}
      <path d="M386 158 L420 140 L420 182 Z" fill="#ffb43d" opacity="0.18" />
    </svg>
  );
}
