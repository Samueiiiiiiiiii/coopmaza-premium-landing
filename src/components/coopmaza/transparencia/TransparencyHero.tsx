import { useEffect, useRef } from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { MagneticButton } from "../MagneticButton";

export function TransparencyHero() {
  const shieldRef = useRef<HTMLDivElement>(null);
  const leavesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shield = shieldRef.current;
    const leaves = leavesRef.current;
    if (!shield || !leaves) return;

    // Parallax on scroll
    const onScroll = () => {
      const y = window.scrollY;
      shield.style.transform = `translateY(${y * 0.08}px)`;
      leaves.style.transform = `translateY(${y * -0.04}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 size-[520px] rounded-full bg-primary-soft/60 blur-3xl"
        style={{ animation: "blob 20s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-24 size-[460px] rounded-full bg-accent/15 blur-3xl"
        style={{ animation: "blob 24s ease-in-out infinite reverse" }}
      />

      {/* Decorative leaves */}
      <div ref={leavesRef} aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-16 right-12 w-48 h-48 text-primary/[0.04]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C140 40, 180 80, 170 140 C160 180, 120 190, 100 190 C80 190, 40 180, 30 140 C20 80, 60 40, 100 10Z" />
        </svg>
        <svg className="absolute bottom-20 left-8 w-36 h-36 text-primary/[0.03] rotate-45" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C140 40, 180 80, 170 140 C160 180, 120 190, 100 190 C80 190, 40 180, 30 140 C20 80, 60 40, 100 10Z" />
        </svg>
        <svg className="absolute top-1/3 right-1/4 w-24 h-24 text-primary/[0.025]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C140 40, 180 80, 170 140 C160 180, 120 190, 100 190 C80 190, 40 180, 30 140 C20 80, 60 40, 100 10Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="relative z-10">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-primary-soft/70 border border-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-primary uppercase animate-fade-in [animation-delay:100ms]"
            >
              <ShieldCheck className="size-3.5" /> Transparencia
            </span>

            <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-balance animate-fade-up [animation-delay:250ms]">
              Transparencia que{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="gradient-text-anim">genera confianza</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 w-full h-3 bg-primary-soft/40 rounded-full -z-10"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up [animation-delay:400ms]">
              En Coopmaza actuamos con integridad y responsabilidad,
              poniendo a disposición de nuestros socios y la comunidad
              información clara, veraz y accesible.
            </p>

            <div className="mt-8 animate-fade-up [animation-delay:550ms]">
              <MagneticButton variant="primary">
                Conoce nuestra gestión
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
            </div>
          </div>

          {/* Right — Shield visual */}
          <div className="relative flex items-center justify-center min-h-[360px] lg:min-h-[440px]" ref={shieldRef}>
            {/* Organic blob background */}
            <svg
              aria-hidden
              viewBox="0 0 600 420"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="blobGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="oklch(0.45 0.12 150 / 0.14)" />
                  <stop offset="100%" stopColor="oklch(0.45 0.12 150 / 0.04)" />
                </radialGradient>
              </defs>
              <path
                d="M120,230 C90,140 200,60 320,80 C440,100 540,150 540,240 C540,330 430,380 320,370 C210,360 150,320 120,230 Z"
                fill="url(#blobGrad)"
                style={{ animation: "blob 16s ease-in-out infinite" }}
              />
            </svg>

            {/* Dotted grid top-right */}
            <div
              aria-hidden
              className="absolute top-4 right-6 sm:top-6 sm:right-10 grid grid-cols-6 gap-1.5 opacity-60"
              style={{ animation: "fade-up 0.8s ease-out 0.4s both" }}
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="size-1 rounded-full bg-primary/30" />
              ))}
            </div>

            {/* Line-art leaves behind shield */}
            <svg
              aria-hidden
              viewBox="0 0 600 420"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
              stroke="oklch(0.45 0.12 150 / 0.4)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Left leaf cluster */}
              <g style={{ animation: "float 9s ease-in-out infinite" }}>
                <path d="M160 280 C150 240, 175 200, 215 195 C220 235, 200 275, 160 280 Z" />
                <path d="M188 240 C188 215, 200 200, 210 198" />
                <path d="M140 250 C130 215, 155 180, 195 178 C202 215, 178 250, 140 250 Z" />
                <path d="M168 215 C170 195, 182 185, 192 183" />
                <path d="M180 320 C172 290, 192 258, 228 258 C232 290, 215 318, 180 320 Z" />
              </g>
              {/* Right leaf cluster */}
              <g style={{ animation: "float 11s ease-in-out 1s infinite reverse" }}>
                <path d="M420 270 C430 230, 410 195, 372 192 C365 230, 385 268, 420 270 Z" />
                <path d="M395 232 C393 210, 382 198, 372 195" />
                <path d="M448 240 C460 210, 440 178, 402 175 C394 210, 415 240, 448 240 Z" />
                <path d="M420 205 C418 188, 408 178, 398 175" />
                <path d="M410 320 C420 290, 402 260, 365 260 C360 290, 378 318, 410 320 Z" />
              </g>
            </svg>

            {/* Shield */}
            <div className="animate-fade-in [animation-delay:350ms]">
              <div
                className="relative"
                style={{ animation: "float 7s ease-in-out infinite" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -m-6 rounded-full bg-primary/15 blur-2xl animate-[pulse-ring_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                />
                <svg
                  viewBox="0 0 200 230"
                  className="relative w-44 sm:w-52 lg:w-60 drop-shadow-[0_20px_40px_oklch(0.45_0.12_150_/_0.35)]"
                >
                  <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="oklch(0.62 0.14 148)" />
                      <stop offset="55%" stopColor="oklch(0.45 0.12 150)" />
                      <stop offset="100%" stopColor="oklch(0.38 0.10 152)" />
                    </linearGradient>
                    <linearGradient id="shieldShine" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.35" />
                      <stop offset="60%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 8 C140 22, 175 28, 188 32 C188 110, 178 170, 100 220 C22 170, 12 110, 12 32 C25 28, 60 22, 100 8 Z"
                    fill="url(#shieldGrad)"
                  />
                  <path
                    d="M100 8 C140 22, 175 28, 188 32 C188 110, 178 170, 100 220 C22 170, 12 110, 12 32 C25 28, 60 22, 100 8 Z"
                    fill="url(#shieldShine)"
                  />
                  <path
                    d="M62 112 L92 142 L142 86"
                    fill="none"
                    stroke="white"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
