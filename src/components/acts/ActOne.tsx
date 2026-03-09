"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ConnectorLines } from "@/components/ui/ConnectorLines";

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function ActOne() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="act-one"
      className="relative min-h-[100vh] flex items-center"
      aria-label="Act One: The Mundane Capture"
    >
      {/* Left panel */}
      <div className="w-full px-6 pr-10 md:w-[55%] md:pr-12 md:px-0 relative z-10" style={{ paddingLeft: "max(1.5rem, 5vw)" }}>
        <ConnectorLines className="absolute -left-4 top-0 w-[120px] h-[300px] opacity-10" />

        <motion.span
          custom={0} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="block font-mono text-[clamp(60px,12vw,200px)] font-bold text-[var(--orange)] leading-none opacity-20 select-none"
        >
          01
        </motion.span>

        <motion.h2
          custom={1} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-mono text-[clamp(20px,2.5vw,36px)] font-bold tracking-[-0.02em] uppercase text-[var(--white-hot)] mt-[-2rem] relative"
        >
          The Mundane Capture
        </motion.h2>

        <motion.div
          custom={2} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="w-16 h-[2px] bg-[var(--orange)] mt-6 mb-8"
        />

        <motion.p
          custom={3} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-body text-[18px] text-[var(--cream)]/70 max-w-md leading-[1.7]"
        >
          Every curb has character. Every rail has a rumor. Point your phone to
          uncover the stories that give our neighborhoods their lore.
        </motion.p>

        <motion.div
          custom={4} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10 font-mono text-[10px] tracking-[0.15em] text-[var(--cream)]/30 space-y-1"
        >
          <p>LAT 51.5074 / LNG -0.1278</p>
          <p>SPOT CLASS: LEDGE</p>
          <p>ARCHIVE DEPTH: 23 YEARS</p>
        </motion.div>
      </div>
    </section>
  );
}
