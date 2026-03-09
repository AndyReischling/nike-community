"use client";

export function VHSOverlay({ intensity }: { intensity: number }) {
  if (intensity <= 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20" style={{ opacity: intensity }}>
      {/* Tracking distortion at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[15%] vhs-wobble"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
          filter: `blur(${intensity}px)`,
        }}
      />

      {/* Horizontal glitch slices */}
      {intensity > 0.3 && (
        <>
          <div
            className="absolute left-0 right-0 h-[3px] bg-[var(--cream)]/5"
            style={{
              top: `${30 + Math.sin(Date.now() * 0.01) * 10}%`,
              transform: `translateX(${intensity * 4}px)`,
            }}
          />
          <div
            className="absolute left-0 right-0 h-[2px] bg-[var(--orange)]/10"
            style={{
              top: `${60 + Math.cos(Date.now() * 0.008) * 15}%`,
              transform: `translateX(${-intensity * 6}px)`,
            }}
          />
        </>
      )}

      {/* Color fringing */}
      {intensity > 0.5 && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, rgba(255,0,0,${intensity * 0.03}) 0%, transparent 33%, transparent 66%, rgba(0,100,255,${intensity * 0.03}) 100%)`,
            mixBlendMode: "screen",
          }}
        />
      )}
    </div>
  );
}
