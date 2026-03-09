"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeAct, setActiveAct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const globalProgress = docHeight > 0 ? scrollY / docHeight : 0;
      setProgress(globalProgress);

      const vh = window.innerHeight;
      if (scrollY < 1 * vh) setActiveAct(0);
      else if (scrollY < 2 * vh) setActiveAct(1);
      else if (scrollY < 3.5 * vh) setActiveAct(2);
      else setActiveAct(3);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progress, activeAct };
}
