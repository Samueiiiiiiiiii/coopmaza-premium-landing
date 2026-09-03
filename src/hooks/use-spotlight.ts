import { useEffect } from "react";

export function useSpotlight() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".spotlight");
    const onMove = (e: MouseEvent, el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const handlers: Array<[HTMLElement, (e: MouseEvent) => void]> = [];
    els.forEach((el) => {
      const h = (e: MouseEvent) => onMove(e, el);
      el.addEventListener("mousemove", h);
      handlers.push([el, h]);
    });
    return () => handlers.forEach(([el, h]) => el.removeEventListener("mousemove", h));
  }, []);
}
