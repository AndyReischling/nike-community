"use client";

import { useMemo } from "react";

export function GhostSkater({ progress }: { progress: number }) {
  const particles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      offsetX: (Math.random() - 0.5) * 20,
      offsetY: Math.random() * 30,
      size: 3 + Math.random() * 5,
      delay: Math.random() * 0.3,
      color: ["var(--cream)", "var(--orange)", "var(--green-scan)"][i % 3],
    })),
    []
  );

  // Parabolic arc: x goes left-to-right, y follows an inverted parabola
  const trickStart = 0.15;
  const trickPeak = 0.55;
  const trickEnd = 0.85;
  const trickProgress = Math.max(0, Math.min(1, (progress - trickStart) / (trickEnd - trickStart)));

  const x = 10 + trickProgress * 80; // percentage across screen
  const peakHeight = 35;
  const normalizedTP = (trickProgress - 0.5) * 2; // -1 to 1
  const y = 75 - peakHeight * (1 - normalizedTP * normalizedTP); // parabola

  const isFreeze = progress > 0.45 && progress < 0.55;
  const isDissolved = progress > 0.88;
  const rotation = trickProgress < 0.5 ? trickProgress * 360 : 360 - (trickProgress - 0.5) * 200;

  if (progress < 0.05 || isDissolved) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* SVG filters for noisy edges */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="ghost-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
        </defs>
      </svg>

      {/* The ghost figure */}
      <div
        className="absolute ghost-flicker"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: `translate(-50%, -50%) rotate(${progress > trickStart && progress < trickEnd ? rotation * 0.1 : 0}deg)`,
          filter: "url(#ghost-noise)",
          opacity: isDissolved ? 0 : progress < 0.1 ? progress * 10 : 1,
          transition: isDissolved ? "opacity 0.5s" : "none",
        }}
      >
        {/* Skater silhouette */}
        <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
          <ellipse cx="25" cy="12" rx="7" ry="8" fill="var(--cream)" opacity="0.4" />
          <rect x="19" y="20" width="12" height="22" rx="3" fill="var(--cream)" opacity="0.4" />
          <rect x="15" y="38" width="8" height="20" rx="2" fill="var(--cream)" opacity="0.35"
            transform={`rotate(${trickProgress > 0.3 && trickProgress < 0.7 ? -20 : 0} 19 38)`}
          />
          <rect x="27" y="38" width="8" height="20" rx="2" fill="var(--cream)" opacity="0.35"
            transform={`rotate(${trickProgress > 0.3 && trickProgress < 0.7 ? 15 : 0} 31 38)`}
          />
          {/* Arms */}
          <rect x="8" y="22" width="11" height="5" rx="2" fill="var(--cream)" opacity="0.3" />
          <rect x="31" y="22" width="11" height="5" rx="2" fill="var(--cream)" opacity="0.3" />
          {/* Board */}
          <rect x="10" y="60" width="30" height="4" rx="2" fill="var(--cream)" opacity="0.5"
            transform={`rotate(${trickProgress > 0.4 && trickProgress < 0.6 ? 45 : 0} 25 62)`}
          />
        </svg>
      </div>

      {/* Freeze frame band */}
      {isFreeze && (
        <div className="absolute left-0 right-0 h-[6px] bg-[var(--cream)]/20"
          style={{ top: `${y}%`, transform: "translateY(-50%)" }}
        />
      )}

      {/* Shadow on ground */}
      {progress > trickStart && progress < trickEnd && (
        <div
          className="absolute bg-black/20 rounded-full"
          style={{
            left: `${x}%`,
            bottom: "12%",
            width: `${20 + (1 - Math.abs(normalizedTP)) * 15}px`,
            height: "4px",
            transform: "translateX(-50%)",
            opacity: 0.3 + Math.abs(normalizedTP) * 0.4,
          }}
        />
      )}

      {/* Particle trail */}
      {progress > trickStart && (
        <div className="absolute inset-0">
          {particles.map((p) => {
            const particleProgress = Math.max(0, trickProgress - p.delay);
            if (particleProgress <= 0) return null;
            return (
              <div
                key={p.id}
                className="absolute"
                style={{
                  left: `${x - 5 + p.offsetX}%`,
                  top: `${y + p.offsetY * particleProgress}%`,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  opacity: Math.max(0, 0.6 - particleProgress * 1.5),
                  transform: `translate(-50%, -50%)`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Landing screen shake trigger via class */}
      {progress > 0.72 && progress < 0.76 && (
        <div className="absolute inset-0 screen-shake pointer-events-none" />
      )}
    </div>
  );
}
