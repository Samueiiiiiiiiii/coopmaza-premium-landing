import { Target, Eye } from "lucide-react";

const items = [
  {
    icon: Target,
    tag: "Misión",
    title: "Servir con calidad y cercanía",
    body:
      "Somos una entidad sólida, solvente y solidaria, con base firme en los aspectos social, moral y económico. Ofrecemos con calidad servicios financieros y sociales a todos los habitantes de Carrera de Palmas y zonas aledañas, con espíritu de superación, en forma ágil y oportuna.",
    variant: "light" as const,
  },
  {
    icon: Eye,
    tag: "Visión",
    title: "Construir un futuro mejor para todos",
    body:
      "La cooperativa de Ahorro, Crédito y Servicios Múltiples Mariano Zaragoza, con el fruto del trabajo de sus socios, busca mejorar las condiciones económicas y sociales por medio de una acción orientada al bien de todos los socios, contribuyendo al desarrollo progresivo de las familias y de la comunidad.",
    variant: "dark" as const,
  },
];

export function MissionVision() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8" data-stagger>
          {items.map((it) => {
            const isDark = it.variant === "dark";
            return (
              <article
                key={it.tag}
                className={`group relative overflow-hidden rounded-[36px] p-8 sm:p-10 lg:p-12 shadow-lift tilt-3d ${
                  isDark
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface border border-border/60 text-foreground"
                }`}
              >
                {/* floating shape */}
                <div
                  aria-hidden
                  className={`absolute -top-16 -right-16 size-56 rounded-full blur-2xl ${
                    isDark ? "bg-accent/30" : "bg-primary-soft/80"
                  }`}
                  style={{ animation: "float 9s ease-in-out infinite" }}
                />
                <div
                  className={`relative inline-flex size-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                    isDark
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <it.icon className="size-6" strokeWidth={1.7} />
                </div>

                <div className="relative mt-6">
                  <span
                    className={`text-[11px] font-bold tracking-[0.22em] uppercase ${
                      isDark ? "text-primary-foreground/70" : "text-primary"
                    }`}
                  >
                    {it.tag}
                  </span>
                  <h3 className="mt-2 font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight text-balance">
                    {it.title}
                  </h3>
                  <p
                    className={`mt-5 text-[15px] leading-relaxed ${
                      isDark ? "text-primary-foreground/85" : "text-muted-foreground"
                    }`}
                  >
                    {it.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
