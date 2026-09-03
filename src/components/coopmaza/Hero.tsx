import { useState } from "react";
import { ArrowRight, Play, Leaf, TreePine, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import heroPlant from "@/assets/hero-plant.jpg";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import a4 from "@/assets/avatar-4.jpg";


export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="inicio" className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      {/* ambient backdrop */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary-soft/60 blur-3xl animate-[blob_18s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute top-40 -right-40 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl animate-[blob_22s_ease-in-out_infinite] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="relative z-10">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-primary-soft/70 border border-primary/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-primary uppercase"
              style={{ animation: "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
            >
              <Leaf className="size-3.5" /> Cooperativa Coopmaza
            </span>

            <h1
              className="mt-6 font-display font-extrabold tracking-tight text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] text-balance"
              style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s both" }}
            >
              Juntos construimos{" "}
              <span className="text-shimmer">un futuro mejor</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
              style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
            >
              En Coopmaza trabajamos unidos para mejorar la calidad de vida de
              nuestros socios y sus familias, impulsando el desarrollo de
              nuestra comunidad.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.75s both" }}
            >
              <a href="/digital">
                <MagneticButton variant="primary">
                  Hazte socio
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </MagneticButton>
              </a>

              <button 
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-3 text-left cursor-pointer focus:outline-none"
              >
                <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-white shadow-card border border-border/60 transition-transform duration-300 group-hover:scale-105">
                  <span className="absolute inset-0 rounded-full animate-[pulse-ring_2.4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                  <Play className="size-4 text-primary fill-primary translate-x-px" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    Conoce más
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Mira nuestro video
                  </span>
                </span>
              </button>
            </div>

            <div
              className="mt-10 flex items-center gap-4"
              style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s both" }}
            >
              <div className="flex -space-x-3">
                {[a1, a2, a3, a4].map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover ring-2 ring-background"
                  />
                ))}
                <span className="size-10 rounded-full ring-2 ring-background bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  +500
                </span>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-foreground">
                  Más de 500 socios
                </div>
                <div className="text-muted-foreground">confían en Coopmaza</div>
              </div>
            </div>
          </div>

          {/* Right — image + floating card */}
          <div className="relative">
            <div
              className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-[40%_40%_36%_36%/30%_30%_36%_36%] overflow-hidden shadow-lift"
              style={{
                animation: "fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.5s both",
              }}
            >
              <img
                src={heroPlant}
                alt="Manos sosteniendo una planta brotando — Coopmaza"
                width={1024}
                height={1216}
                className="size-full object-cover scale-105 transition-transform duration-[1600ms] ease-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
            </div>

            {/* floating green card */}
            <div
              className="absolute -right-2 sm:right-6 lg:-right-8 bottom-6 lg:bottom-10 w-[220px] sm:w-[260px] rounded-3xl bg-primary text-primary-foreground p-6 shadow-lift animate-[float_7s_ease-in-out_infinite]"
              style={{
                animation:
                  "fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.95s both, float 7s ease-in-out 1.5s infinite",
              }}
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                <Leaf className="size-5 text-primary-foreground" />
              </span>
              <p className="mt-4 text-lg font-medium leading-snug">
                Crecemos cuando trabajamos juntos.
              </p>
              <div className="mt-4 h-[2px] w-12 bg-accent rounded-full" />
              <TreePine className="absolute bottom-3 right-4 size-12 text-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
        >
          {/* Backdrop with click to close */}
          <div 
            onClick={() => setIsVideoOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-xl"
          />

          {/* Modal content container */}
          <div 
            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/90 shadow-glow flex items-center justify-center animate-scale-in"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition-transform duration-200 hover:scale-105 cursor-pointer"
              aria-label="Cerrar video"
            >
              <X className="size-5" />
            </button>

            {/* Video Iframe with Autoplay */}
            <iframe
              src="https://www.youtube.com/embed/XD1P70zxVnw?autoplay=1&rel=0&modestbranding=1&showinfo=0"
              title="Coopmaza - Video Institucional"
              className="w-full h-full border-0 rounded-3xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
