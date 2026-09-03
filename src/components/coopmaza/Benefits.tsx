import { DollarSign, GraduationCap, HeartPulse, Gift } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Ahorro y crédito",
    desc: "Soluciones financieras con tasas justas y accesibles.",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    desc: "Capacitación constante para tu desarrollo personal y profesional.",
  },
  {
    icon: HeartPulse,
    title: "Bienestar",
    desc: "Programas para tu salud y la de tu familia.",
  },
  {
    icon: Gift,
    title: "Descuentos",
    desc: "Accede a descuentos exclusivos en productos y servicios.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
            Beneficios
          </span>
          <h2 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-balance">
            Ser socio te transforma
          </h2>
          <div className="mt-4 mx-auto h-[3px] w-16 rounded-full bg-accent" />
          <p className="mt-5 text-muted-foreground text-base leading-relaxed">
            Accede a beneficios diseñados para mejorar tu calidad de vida y la
            de tu familia.
          </p>
        </div>

        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-stagger
        >
          {benefits.map((b, i) => (
            <article
              key={b.title}
              className="group spotlight tilt-card relative rounded-3xl bg-card border border-border/60 p-7 shadow-soft transition-all duration-500 hover:shadow-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/0 via-transparent to-primary-soft/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-primary-soft/70 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <b.icon strokeWidth={1.6} className="size-7" />
                </div>
                <h3 className="mt-5 text-base font-bold text-center">
                  {b.title}
                </h3>
                <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed text-center">
                  {b.desc}
                </p>
              </div>

              {/* Clean top-right indicator */}
              <span className="absolute top-4 right-5 font-display font-extrabold text-xs text-primary/30 group-hover:text-primary/70 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
