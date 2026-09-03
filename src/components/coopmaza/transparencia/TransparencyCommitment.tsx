import { useEffect, useRef } from "react";
import { ShieldCheck, Users, FileText } from "lucide-react";
import { Counter } from "../Counter";

const stats = [
  { value: 20, prefix: "+", suffix: "", label: "Años de historia" },
  { value: 500, prefix: "+", suffix: "", label: "Socios activos" },
  { value: 100, prefix: "", suffix: "%", label: "Comprometidos con\nla transparencia" },
];

export function TransparencyCommitment() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const imgs = section.querySelectorAll<HTMLElement>("[data-parallax-img]");
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / (rect.height + window.innerHeight);
      imgs.forEach((img, i) => {
        const speed = (i + 1) * 0.03;
        img.style.transform = `translateY(${progress * speed * 100}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal-scale relative rounded-[32px] bg-surface border border-border/60 p-6 sm:p-10 lg:p-12 shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left text + stats */}
            <div className="flex flex-col justify-between">
              <div className="reveal">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight text-balance">
                  Comprometidos con nuestra comunidad y el desarrollo
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                  Trabajamos día a día para generar bienestar financiero y social,
                  impulsando proyectos que transforman vidas y fortalecen nuestra
                  comunidad.
                </p>
              </div>

              {/* Pillars of Trust to fill the empty space premiumly */}
              <div className="mt-6 sm:mt-8 space-y-3.5 reveal" style={{ transitionDelay: "0.1s" }}>
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-card border border-border/40 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                  <div className="size-9 rounded-xl bg-primary-soft/50 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="size-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Gobernanza Ética y Regulada</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      Operamos bajo la supervisión de entidades reguladoras y estrictas auditorías externas anuales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-card border border-border/40 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                  <div className="size-9 rounded-xl bg-primary-soft/50 flex items-center justify-center text-primary shrink-0">
                    <Users className="size-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Gestión Centrada en el Socio</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      Cada socio tiene voz y voto en nuestras Asambleas Generales, garantizando equidad absoluta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-card border border-border/40 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                  <div className="size-9 rounded-xl bg-primary-soft/50 flex items-center justify-center text-primary shrink-0">
                    <FileText className="size-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Información Pública Abierta</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      Publicamos todos nuestros estados financieros, políticas e informes sin restricciones de acceso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 reveal" style={{ transitionDelay: "0.2s" }}>
                {stats.map((s) => (
                  <div key={s.label} className="text-center sm:text-left">
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-primary">
                      <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-tight whitespace-pre-line">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right images grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://i.ibb.co/FLDD4Fw8/Chat-GPT-Image-28-may-2026-01-29-42-p-m.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-2xl overflow-hidden group shadow-soft hover:shadow-card hover:border-primary/25 border border-transparent transition-all duration-500 cursor-pointer"
                >
                  <img
                    src="https://i.ibb.co/FLDD4Fw8/Chat-GPT-Image-28-may-2026-01-29-42-p-m.png"
                    alt="Transparencia Coopmaza 1"
                    className="w-full h-auto object-contain image-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
                <a
                  href="https://i.ibb.co/Hf5zdbb6/Chat-GPT-Image-28-may-2026-01-28-20-p-m.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-2xl overflow-hidden group shadow-soft hover:shadow-card hover:border-primary/25 border border-transparent transition-all duration-500 cursor-pointer"
                >
                  <img
                    src="https://i.ibb.co/Hf5zdbb6/Chat-GPT-Image-28-may-2026-01-28-20-p-m.png"
                    alt="Transparencia Coopmaza 2"
                    className="w-full h-auto object-contain image-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 flex flex-col justify-start">
                <a
                  href="https://i.ibb.co/35G0XpNP/Chat-GPT-Image-28-may-2026-01-51-00-p-m.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-2xl overflow-hidden group shadow-soft hover:shadow-card hover:border-primary/25 border border-transparent transition-all duration-500 cursor-pointer"
                >
                  <img
                    src="https://i.ibb.co/35G0XpNP/Chat-GPT-Image-28-may-2026-01-51-00-p-m.png"
                    alt="Transparencia Coopmaza 3"
                    className="w-full h-auto object-contain image-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
