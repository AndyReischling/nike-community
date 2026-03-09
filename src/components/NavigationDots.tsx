"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ACTS } from "@/lib/constants";

export function NavigationDots() {
  const { activeAct } = useScrollProgress();

  return (
    <nav
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 mix-blend-difference"
      aria-label="Section navigation"
    >
      {ACTS.map((act, i) => (
        <button
          key={act.id}
          onClick={() => {
            const vh = window.innerHeight;
            window.scrollTo({ top: act.startVh / 100 * vh, behavior: "smooth" });
          }}
          className="group flex items-center gap-3"
          aria-label={`Go to ${act.title}`}
        >
          <span
            className={`block rounded-full transition-all duration-300 ${
              activeAct === i
                ? "w-3 h-3 bg-[var(--orange)]"
                : "w-2 h-2 bg-[var(--cream)]/30 group-hover:bg-[var(--cream)]/60"
            }`}
          />
          <span
            className={`font-mono text-[10px] uppercase tracking-widest transition-opacity duration-300 ${
              activeAct === i ? "opacity-100 text-[var(--orange)]" : "opacity-0 group-hover:opacity-60 text-[var(--cream)]"
            }`}
          >
            {act.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
