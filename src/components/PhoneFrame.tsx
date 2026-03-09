"use client";

import { useRef, useEffect } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Reticle } from "@/components/ui/Reticle";
import { VHSOverlay } from "@/components/ui/VHSOverlay";
import { NotificationCard } from "@/components/ui/NotificationCard";
import { GhostSkater } from "@/components/ui/GhostSkater";
import { RewardCard } from "@/components/ui/RewardCard";

export function PhoneFrame() {
  const { progress, activeAct } = useScrollProgress();
  const videoRef = useRef<HTMLVideoElement>(null);

  const actOneProgress = Math.max(0, Math.min(1, progress * 4.5));
  const actTwoProgress = Math.max(0, Math.min(1, (progress - 0.222) * 4.5));
  const actThreeProgress = Math.max(0, Math.min(1, (progress - 0.444) * 3));
  const actFourProgress = Math.max(0, Math.min(1, (progress - 0.778) * 4.5));

  const showVHS = activeAct >= 1 && activeAct <= 2;
  const vhsIntensity = activeAct === 1 ? actTwoProgress : activeAct === 2 ? 1 : 0;
  const vhsFading = activeAct === 3 ? 1 - actFourProgress : 0;

  // Play video once we leave Act One (signal detected → video plays)
  const videoShouldPlay = activeAct >= 1;

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (videoShouldPlay) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  }, [videoShouldPlay]);

  return (
    <div
      className="fixed right-8 lg:right-16 top-1/2 -translate-y-1/2 z-30"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative"
        style={{
          width: "min(340px, 35vw)",
          aspectRatio: "9 / 19.5",
          transform: "rotateY(-3deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Bezel */}
        <div className="absolute inset-0 rounded-[40px] bg-[#1c1c1e] shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />

        {/* Screen */}
        <div className="absolute inset-[4px] rounded-[36px] overflow-hidden bg-[#0a0a0a]">

          {/* ===== LAYER 1: Still image — the "phone camera capture" (Act One) ===== */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeAct === 0 ? 1 : 0 }}
          >
            <img
              src="/spot-capture.png"
              alt="Skate spot detected"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                animation: "ken-burns 20s ease-in-out infinite alternate",
                filter: "brightness(0.85) contrast(1.1)",
              }}
            />
            <style jsx>{`
              @keyframes ken-burns {
                from { transform: scale(1) translate(0, 0); }
                to { transform: scale(1.08) translate(-1%, -1%); }
              }
            `}</style>
          </div>

          {/* ===== LAYER 2: Video — plays after "SIGNAL DETECTED" (Acts 2-3) ===== */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeAct >= 1 && activeAct <= 2 ? 1 : activeAct === 3 ? 1 - actFourProgress : 0 }}
          >
            <video
              ref={videoRef}
              src="/skate-clip.mov"
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: showVHS
                  ? `saturate(${0.5 + vhsIntensity * 0.2}) contrast(${1.1 + vhsIntensity * 0.3}) sepia(${vhsIntensity * 0.35}) brightness(0.9)`
                  : "brightness(0.9)",
              }}
            />
          </div>

          {/* ===== LAYER 3: Clean background for Act Four (reward) ===== */}
          {activeAct === 3 && (
            <div
              className="absolute inset-0 bg-[#0a0a0a] transition-opacity duration-500"
              style={{ opacity: actFourProgress * 0.8 }}
            />
          )}

          {/* Scanlines when VHS active */}
          {showVHS && (
            <div className="absolute inset-0 scanlines pointer-events-none" style={{ opacity: vhsIntensity * 0.6 }} />
          )}

          {/* VHS overlay */}
          {(showVHS || vhsFading > 0) && (
            <VHSOverlay intensity={showVHS ? vhsIntensity : 1 - vhsFading} />
          )}

          {/* Top UI chrome */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10">
            <span
              className="font-mono text-[9px] tracking-[0.15em] uppercase transition-opacity duration-500"
              style={{
                color: showVHS ? "var(--cream)" : "var(--white-hot)",
                opacity: activeAct <= 1 ? 1 - actTwoProgress * 0.5 : showVHS ? 0.4 : 0.8,
              }}
            >
              NIKE SKATE LORE
            </span>
            {showVHS && vhsIntensity > 0.4 && (
              <span className="font-mono text-[9px] text-red-500 rec-blink flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                REC
              </span>
            )}
          </div>

          {/* Reticle - Act One */}
          {activeAct === 0 && <Reticle progress={actOneProgress} />}

          {/* Ghost Skater - Act Three */}
          {activeAct === 2 && <GhostSkater progress={actThreeProgress} />}

          {/* Notification card - Act One at ~70% */}
          <NotificationCard visible={activeAct === 0 && actOneProgress > 0.65} />

          {/* VHS Play icon */}
          {showVHS && vhsIntensity > 0.5 && (
            <div className="absolute top-12 left-4 flex items-center gap-1.5 transition-opacity duration-300" style={{ opacity: vhsIntensity }}>
              <span className="text-[var(--blue-vhs)] text-xs">▶</span>
              <span className="font-mono text-[8px] text-[var(--blue-vhs)]">PLAY</span>
            </div>
          )}

          {/* Timecode */}
          {showVHS && vhsIntensity > 0.5 && (
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[var(--cream)]/50 tabular-nums vhs-wobble">
              00:14:32:07
            </div>
          )}

          {/* Digital artifact + reward card - Act Four */}
          {activeAct === 3 && (
            <>
              {actFourProgress < 0.5 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="transition-all duration-500"
                    style={{
                      transform: `rotateY(${actFourProgress * 720}deg) scale(${0.5 + actFourProgress})`,
                      opacity: actFourProgress < 0.1 ? actFourProgress * 10 : 1,
                    }}
                  >
                    <svg width="80" height="32" viewBox="0 0 69 30" className="drop-shadow-[0_0_20px_rgba(232,74,28,0.4)]">
                      <defs>
                        <linearGradient id="chrome-grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#e0e0e0" />
                          <stop offset="50%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#a0a0a0" />
                        </linearGradient>
                      </defs>
                      <path d="M68.56 0.95L20.42 22.09C17.21 23.46 14.44 24.11 12.18 24.11C9.07 24.11 6.73 23.03 5.29 20.86C3.4 18.01 3.64 13.78 5.95 8.63L0.39 11.37C-0.6 15.08 -0.23 18.26 1.53 20.86C3.83 24.26 8.06 25.89 12.85 25.06C15.15 24.66 17.82 23.67 20.81 22.09L68.56 0.95Z" fill="url(#chrome-grad)" />
                    </svg>
                  </div>
                </div>
              )}
              <RewardCard visible={actFourProgress > 0.55} progress={actFourProgress} />
            </>
          )}

          {/* Bottom camera chrome - Act One only */}
          {activeAct === 0 && (
            <div
              className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-6 transition-opacity duration-500"
              style={{ opacity: 1 - actOneProgress }}
            >
              <div className="w-8 h-8 rounded-full border border-[var(--cream)]/20" />
              <div className="w-10 h-10 rounded-full border-2 border-[var(--cream)]/40 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[var(--cream)]/10" />
              </div>
              <div className="w-8 h-8 rounded-full border border-[var(--cream)]/20" />
            </div>
          )}
        </div>

        {/* Notch */}
        <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-[#1c1c1e] rounded-b-[14px] z-20" />
      </div>
    </div>
  );
}
