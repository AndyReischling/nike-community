"use client";

import { motion, AnimatePresence } from "framer-motion";

export function RewardCard({ visible, progress }: { visible: boolean; progress: number }) {
  const barWidth = Math.min(100, Math.max(0, (progress - 0.6) * 250));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          className="absolute bottom-4 left-3 right-3 z-30 bg-[var(--white-hot)] rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-[var(--green-scan)] flex items-center justify-center text-[10px] text-black font-bold">
              ✓
            </span>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#1A1A1A]">
              Spot Archived
            </span>
          </div>

          <h4 className="font-mono text-[14px] font-bold text-[#1A1A1A] leading-tight">
            SAN JUAN HIGH 12 STAIR
          </h4>
          <p className="text-[11px] text-[#666] mt-0.5 font-sans">
            Est. 2003 · Citrus Heights, CA
          </p>

          {/* Progress bar */}
          <div className="mt-4 mb-1.5">
            <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--orange)] rounded-full transition-all duration-700"
                style={{ width: `${barWidth}%` }}
              />
            </div>
            <p className="text-[10px] text-[#999] font-mono mt-1.5">1/5 LOCAL LEGENDS</p>
          </div>

          {/* CTA */}
          <button className="w-full mt-3 py-2.5 px-4 bg-[#1A1A1A] text-[var(--white-hot)] font-mono text-[11px] tracking-[0.08em] uppercase rounded-lg hover:bg-[#333] transition-colors">
            Claim Early Access →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
