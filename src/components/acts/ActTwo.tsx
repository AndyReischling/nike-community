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

export function ActTwo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="act-two"
      className="relative min-h-[100vh] flex items-center"
      style={{ background: "linear-gradient(180deg, var(--bg-base) 0%, var(--bg-warm) 100%)" }}
      aria-label="Act Two: The VCR Boot"
    >
      <DrippingDivider className="absolute top-0 left-0 right-0" />

      <div className="w-[55%] pr-12 relative z-10" style={{ marginLeft: "3vw", paddingLeft: "2rem" }}>
        <motion.span
          custom={0} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="block font-mono text-[clamp(100px,12vw,200px)] font-bold text-[var(--orange)] leading-none opacity-20 select-none"
        >
          02
        </motion.span>

        <motion.h2
          custom={1} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-mono text-[clamp(20px,2.5vw,36px)] font-bold tracking-[-0.02em] uppercase text-[var(--white-hot)] mt-[-2rem] relative"
        >
          The VCR Boot
        </motion.h2>

        <motion.div
          custom={2} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="w-16 h-[2px] bg-[var(--orange)] mt-6 mb-8"
        />

        <motion.p
          custom={3} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-body text-[18px] text-[var(--cream)]/70 max-w-md leading-[1.7]"
        >
          It&apos;s 2003 and Brian Anderson hits his ender in Spike Jonze&apos;s
          &ldquo;Yeah Right&rdquo; at the San Juan High School 12 Stair Rail
          in Citrus Heights.
        </motion.p>

        {/* Distressed 1999 */}
        <motion.div
          custom={4} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10 relative"
        >
          <svg viewBox="0 0 400 120" className="w-full max-w-[400px]">
            <defs>
              <filter id="distress">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
              </filter>
            </defs>
            <text
              x="0" y="100"
              className="font-mono"
              fontSize="110"
              fontWeight="700"
              fill="var(--orange)"
              opacity="0.35"
              filter="url(#distress)"
            >
              2003
            </text>
          </svg>
        </motion.div>

        {/* Broken connector lines */}
        <motion.div
          custom={5} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-6 font-mono text-[10px] tracking-[0.15em] text-[var(--cream)]/25 space-y-1"
        >
          <p>SIGNAL: ████████░░ DEGRADED</p>
          <p>FORMAT: VHS-C / NTSC</p>
          <p>RECOVERY: IN PROGRESS</p>
        </motion.div>
      </div>
    </section>
  );
}
