"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { DrippingDivider } from "@/components/ui/DrippingDivider";

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function ActThree() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="act-three"
      className="relative min-h-[150vh] flex items-start pt-[20vh]"
      style={{ background: "var(--bg-warm)" }}
      aria-label="Act Three: The Ghost Clip"
    >
      <DrippingDivider color="var(--cream)" className="absolute top-0 left-0 right-0 opacity-30" />

      <div className="w-full px-6 md:w-[55%] md:pr-12 md:px-0 relative z-10" style={{ marginLeft: "0", paddingLeft: "max(1.5rem, 5vw)" }}>
        <motion.span
          custom={0} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="block font-mono text-[clamp(60px,12vw,200px)] font-bold text-[var(--orange)] leading-none opacity-20 select-none"
        >
          03
        </motion.span>

        <motion.h2
          custom={1} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-mono text-[clamp(20px,2.5vw,36px)] font-bold tracking-[-0.02em] uppercase text-[var(--white-hot)] mt-[-2rem] relative"
        >
          The Ghost Clip
        </motion.h2>

        <motion.div
          custom={2} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="w-16 h-[2px] bg-[var(--orange)] mt-6 mb-8"
        />

        <motion.p
          custom={3} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-body text-[18px] text-[var(--cream)]/70 max-w-md leading-[1.7]"
        >
          Revisit what made this place legendary. It&apos;s no longer just an
          ordinary high school rail. It&apos;s a piece of community history.
        </motion.p>

        {/* Pull quote */}
        <motion.blockquote
          custom={4} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-12 font-mono text-[clamp(36px,5vw,72px)] font-bold text-[var(--orange)] leading-[1.05] tracking-[-0.03em] max-w-lg"
        >
          &ldquo;THIS IS HALLOWED<br />PAVEMENT&rdquo;
        </motion.blockquote>

        {/* Archival metadata */}
        <motion.div
          custom={5} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10 p-4 border border-[var(--cream)]/10 inline-block"
        >
          <div className="font-mono text-[10px] tracking-[0.12em] text-[var(--cream)]/30 space-y-1.5">
            <p>SKATER: <span className="text-[var(--cream)]/50">BRIAN ANDERSON</span></p>
            <p>TRICK: <span className="text-[var(--cream)]/50">NOSE GRIND</span></p>
            <p>FOOTAGE: <span className="text-[var(--cream)]/50">VHS-C</span></p>
            <p>CONDITION: <span className="text-[var(--orange)]/60">DEGRADED</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
