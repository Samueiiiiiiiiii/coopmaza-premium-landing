import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-700"
      style={{
        opacity: done ? 0 : 1,
        visibility: done ? "hidden" : "visible",
        pointerEvents: done ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center gap-6 animate-[fade-in_0.5s_ease-out]">
        <div className="relative">
          <Logo />
        </div>
        <div className="h-[2px] w-32 overflow-hidden rounded-full bg-primary/10">
          <div
            className="h-full bg-primary rounded-full"
            style={{ animation: "marquee 1.1s ease-in-out forwards", width: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}
