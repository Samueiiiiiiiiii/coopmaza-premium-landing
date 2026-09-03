import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "../MagneticButton";
import { Counter } from "../Counter";
import heroPlant from "@/assets/hero-plant.jpg";

const stats = [
  { val: 500, suf: "+", label: "Socios activos" },
  { val: 20, suf: "+", label: "Años de experiencia" },
  { val: 800000, suf: " RD$", label: "En créditos otorgados", small: true },
];

export function ImpactBlock() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: dark card */}
          <article
            className="lg:col-span-7 relative overflow-hidden rounded-[36px] bg-primary text-primary-foreground p-8 sm:p-10 lg:p-12 shadow-lift tilt-3d reveal"
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-16 size-72 rounded-full bg-accent/25 blur-3xl"
              style={{ animation: "float 10s ease-in-out infinite" }}
            />
            <span className="relative text-[11px] font-bold tracking-[0.22em] uppercase text-primary-foreground/70">
              Impacto que transforma
            </span>
            <h3 className="relative mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-[1.05] text-balance">
              Generamos bienestar <br />
              que se multiplica
            </h3>
            <p className="relative mt-4 text-[15px] text-primary-foreground/85 max-w-lg leading-relaxed">
              Gracias a nuestros socios, seguimos generando impacto positivo en
              la comunidad y construyendo un futuro mejor para todos.
            </p>

            <div className="relative mt-8 grid grid-cols-2 sm:grid-cols-3 gap-5" data-stagger>
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-primary-foreground/10 backdrop-blur p-4 border border-primary-foreground/15">
                  <Sparkles className="size-4 text-accent" />
                  <div className={`mt-2 font-display font-extrabold ${s.small ? "text-base" : "text-2xl"} text-primary-foreground leading-tight`}>
                    <Counter to={s.val} suffix={s.suf} />
                  </div>
                  <div className="text-[10.5px] text-primary-foreground/70 mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Right: image + floating card */}
          <div className="lg:col-span-5 relative reveal">
            <div className="relative h-full min-h-[320px] rounded-[36px] overflow-hidden shadow-lift">
              <img
                src={heroPlant}
                alt="Manos sosteniendo un brote, símbolo de crecimiento cooperativo"
                className="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* floating glass card */}
            <div
              className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 lg:left-6 lg:right-6 glass rounded-3xl border border-border/60 p-5 sm:p-6 shadow-lift"
              style={{ animation: "float 7s ease-in-out infinite" }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Sparkles className="size-5" />
                </div>
                <div className="flex-1">
                  <p className="font-display font-extrabold text-foreground text-lg leading-tight">
                    ¿Listo para disfrutar de todos estos beneficios?
                  </p>
                  <p className="mt-1.5 text-[13px] text-muted-foreground">
                    Únete hoy y comienza a construir un mejor futuro junto a
                    Coopmaza.
                  </p>
                  <div className="mt-4">
                    <a href="/digital">
                      <MagneticButton variant="primary" className="!px-5 !py-2.5 !text-[13px]">
                        Hazte socio ahora
                        <ArrowRight className="size-4" />
                      </MagneticButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
