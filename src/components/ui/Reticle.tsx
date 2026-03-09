"use client";

export function Reticle({ progress }: { progress: number }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      style={{ opacity: Math.max(0, 1 - progress * 1.5) }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Outer pulsing circle */}
        <circle
          cx="60" cy="60" r="50"
          stroke="var(--green-scan)"
          strokeWidth="0.5"
          opacity="0.4"
          style={{ animation: "reticle-pulse 1.2s ease-in-out infinite" }}
        />
        {/* Inner circle */}
        <circle cx="60" cy="60" r="24" stroke="var(--green-scan)" strokeWidth="0.5" opacity="0.6" />
        {/* Crosshair lines */}
        <line x1="60" y1="10" x2="60" y2="35" stroke="var(--green-scan)" strokeWidth="0.5" opacity="0.8" />
        <line x1="60" y1="85" x2="60" y2="110" stroke="var(--green-scan)" strokeWidth="0.5" opacity="0.8" />
        <line x1="10" y1="60" x2="35" y2="60" stroke="var(--green-scan)" strokeWidth="0.5" opacity="0.8" />
        <line x1="85" y1="60" x2="110" y2="60" stroke="var(--green-scan)" strokeWidth="0.5" opacity="0.8" />
        {/* Center dot */}
        <circle cx="60" cy="60" r="2" fill="var(--green-scan)" opacity="0.9" />
        {/* Corner brackets */}
        <path d="M20 35 L20 20 L35 20" stroke="var(--green-scan)" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M85 20 L100 20 L100 35" stroke="var(--green-scan)" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M100 85 L100 100 L85 100" stroke="var(--green-scan)" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M35 100 L20 100 L20 85" stroke="var(--green-scan)" strokeWidth="1" fill="none" opacity="0.7" />
      </svg>
    </div>
  );
}
