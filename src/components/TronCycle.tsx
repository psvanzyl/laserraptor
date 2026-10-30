/** TRON light cycle, drawn as a neon wireframe schematic with a trailing light ribbon. */
export default function TronCycle() {
  return (
    <svg
      viewBox="0 0 420 230"
      className="h-full w-full"
      role="img"
      aria-label="Neon wireframe light cycle trailing a ribbon of light"
    >
      <defs>
        <linearGradient id="lc-ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3ce9ff" stopOpacity="0" />
          <stop offset="55%" stopColor="#3ce9ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <filter id="lc-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="lc-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#3ce9ff" strokeOpacity="0.13" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="420" height="230" fill="url(#lc-grid)" opacity="0.85" />
      <line x1="0" y1="200" x2="420" y2="200" stroke="#ff2e88" strokeOpacity="0.35" strokeWidth="1" />

      <g filter="url(#lc-glow)" stroke="#3ce9ff" fill="none" strokeWidth="2.2" strokeLinejoin="round">
        <circle cx="112" cy="166" r="31" />
        <circle cx="112" cy="166" r="9" />
        <circle cx="322" cy="166" r="31" />
        <circle cx="322" cy="166" r="9" />

        <path d="M112 135 L152 106 L214 98 L270 104 L322 135" />
        <path d="M152 106 L176 78 L212 82 L226 100" />
        <path d="M264 104 L300 90 L322 135" />
        <path d="M112 166 L152 152 L214 148 L270 150 L322 166" strokeOpacity="0.55" />

        <path d="M198 148 L226 148 L234 132" stroke="#ff2e88" />
        <path d="M286 112 L300 122 L296 132" stroke="#ff2e88" />
      </g>

      <path
        d="M82 190 L40 190 L0 190"
        stroke="url(#lc-ribbon)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        className="lc-ribbon"
        d="M104 188 L60 188 L12 188"
        stroke="url(#lc-ribbon)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
