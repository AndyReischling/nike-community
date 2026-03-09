"use client";

import { motion, AnimatePresence } from "framer-motion";

export function NotificationCard({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="absolute bottom-6 left-3 right-3 z-30 rounded-xl overflow-hidden"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
        >
          <div className="border-l-2 border-[var(--green-scan)] px-4 py-3.5">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--green-scan)]" />
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--green-scan)]">
                Signal Detected
              </span>
            </div>
            <p className="font-mono text-[12px] text-[var(--cream)] font-bold leading-tight">
              &ldquo;THE BUTCHER&apos;S GAP&rdquo; — 1999
            </p>
            <button className="mt-2.5 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--cream)]/70 hover:text-[var(--cream)] transition-colors">
              <span className="text-[var(--orange)]">▶</span> PLAY
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
