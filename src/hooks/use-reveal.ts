import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-scale, [data-stagger]"
    );

    // Instant reveal for elements already in or above the viewport on mount
    const viewportHeight = window.innerHeight;
    const remainingEls: HTMLElement[] = [];

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight) {
        el.classList.add("is-visible");
      } else {
        remainingEls.push(el);
      }
    });

    if (remainingEls.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px -20px 0px" }
    );

    remainingEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
