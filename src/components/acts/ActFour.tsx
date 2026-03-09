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

export function ActFour() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="act-four"
      className="relative min-h-[100vh] flex items-center"
      style={{ background: "linear-gradient(180deg, var(--bg-warm) 0%, var(--bg-base) 100%)" }}
      aria-label="Act Four: The Digital Rubbing"
    >
      <div className="w-[55%] pl-[clamp(2rem,6vw,6rem)] pr-12 relative z-10">
        <motion.span
          custom={0} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="block font-mono text-[clamp(100px,12vw,200px)] font-bold text-[var(--orange)] leading-none opacity-20 select-none"
        >
          04
        </motion.span>

        <motion.h2
          custom={1} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-mono text-[clamp(20px,2.5vw,36px)] font-bold tracking-[-0.02em] uppercase text-[var(--white-hot)] mt-[-2rem] relative"
        >
          The Digital Rubbing
        </motion.h2>

        <motion.div
          custom={2} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="w-16 h-[2px] bg-[var(--orange)] mt-6 mb-8"
        />

        <motion.p
          custom={3} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-body text-[18px] text-[var(--cream)]/70 max-w-md leading-[1.7]"
        >
          Collect the legends of your city. Unlock neighborhood-specific gear.
          Build a personal archive of the spots that made skating what it is.
        </motion.p>

        {/* Spot collection diagram */}
        <motion.div
          custom={4} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10 relative"
        >
          <ConnectorLines className="w-[200px] h-[240px]" />

          <div className="mt-6 flex items-center gap-3">
            {[true, false, false, false, false].map((filled, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-5 h-5 rounded-full border ${
                    filled
                      ? "bg-[var(--orange)] border-[var(--orange)]"
                      : "border-[var(--cream)]/20 bg-transparent"
                  }`}
                />
                <span className="font-mono text-[8px] text-[var(--cream)]/30">
                  {filled ? "FOUND" : `0${i + 1}`}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final tagline */}
        <motion.p
          custom={5} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-16 font-mono text-[clamp(24px,3vw,44px)] font-bold text-[var(--white-hot)] tracking-[-0.02em] uppercase"
        >
          Every city has a story.
        </motion.p>

        {/* Nike swoosh */}
        <motion.div
          custom={6} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-8"
        >
          <svg width="60" height="24" viewBox="0 0 69 30" fill="var(--orange)" opacity="0.6">
            <path d="M68.56 0.95L20.42 22.09C17.21 23.46 14.44 24.11 12.18 24.11C9.07 24.11 6.73 23.03 5.29 20.86C3.4 18.01 3.64 13.78 5.95 8.63L0.39 11.37C-0.6 15.08 -0.23 18.26 1.53 20.86C3.83 24.26 8.06 25.89 12.85 25.06C15.15 24.66 17.82 23.67 20.81 22.09L68.56 0.95Z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
