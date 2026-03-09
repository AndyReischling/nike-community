export function DrippingDivider({ color = "var(--orange)", className = "" }: { color?: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16">
        <path
          d="M0,0 L1200,0 L1200,20 Q1180,20 1160,25 Q1100,40 1050,22 Q980,18 920,30 Q880,42 840,24 Q780,15 720,35 Q680,50 640,28 Q580,18 520,40 Q480,55 440,30 Q380,15 320,38 Q280,52 240,25 Q180,12 120,35 Q80,48 40,20 Q20,15 0,20 Z"
          fill={color}
          opacity="0.15"
        />
        {/* Drips */}
        <rect x="280" y="35" width="3" height="25" rx="1.5" fill={color} opacity="0.2" />
        <rect x="640" y="28" width="2" height="40" rx="1" fill={color} opacity="0.15" />
        <rect x="920" y="30" width="3" height="30" rx="1.5" fill={color} opacity="0.18" />
      </svg>
    </div>
  );
}
