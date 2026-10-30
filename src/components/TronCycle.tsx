/** TRON light cycle: neon wireframe schematic with a light ribbon streaming behind it. */
export default function TronCycle() {
  return (
    <svg
      viewBox="0 0 700 240"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Neon wireframe light cycle trailing a long ribbon of light across a grid"
    >
      <defs>
        <linearGradient id="lc-ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3ce9ff" stopOpacity="0" />
          <stop offset="45%" stopColor="#3ce9ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <filter id="lc-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="lc-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#3ce9ff" strokeOpacity="0.14" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="700" height="240" fill="url(#lc-grid)" />
      <line x1="0" y1="206" x2="700" y2="206" stroke="#ff2e88" strokeOpacity="0.32" strokeWidth="1" />

      {/* ribbon */}
      <path d="M470 196 L120 196 L0 196" stroke="url(#lc-ribbon)" strokeWidth="2.5" fill="none" opacity="0.5" />
      <path
        className="lc-ribbon"
        d="M492 198 L140 198 L0 198"
        stroke="url(#lc-ribbon)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      <g filter="url(#lc-glow)" stroke="#3ce9ff" fill="none" strokeWidth="2.4" strokeLinejoin="round">
        <circle cx="500" cy="172" r="30" />
        <circle cx="500" cy="172" r="9" />
        <circle cx="636" cy="172" r="30" />
        <circle cx="636" cy="172" r="9" />

        <path d="M500 142 L544 110 L596 102 L636 142" />
        <path d="M544 110 L562 82 L596 86 L610 104" />
        <path d="M610 104 L628 96 L636 142" />
        <path d="M500 172 L544 158 L596 154 L636 172" strokeOpacity="0.5" />
        <path d="M566 154 L596 154 L602 138" stroke="#ff2e88" />
      </g>
    </svg>
  );
}
