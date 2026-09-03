import {
  PiggyBank,
  GraduationCap,
  HeartPulse,
  Users,
  CalendarHeart,
  Handshake,
} from "lucide-react";

const items = [
  {
    icon: PiggyBank,
    title: "Ahorros y tasas preferenciales",
    desc: "Accede a productos financieros con tasas competitivas en ahorros, préstamos y créditos, pensados para tu bienestar y el de tu familia.",
  },
  {
    icon: GraduationCap,
    title: "Educación y capacitación",
    desc: "Programas de formación, becas y talleres para fortalecer tus habilidades y las de tu familia, impulsando tu crecimiento personal y profesional.",
  },
  {
    icon: HeartPulse,
    title: "Salud y bienestar",
    desc: "Acceso a jornadas de salud, seguros especiales y programas de bienestar para cuidar de ti y los tuyos.",
  },
  {
    icon: Users,
    title: "Apoyo comunitario",
    desc: "Participa en iniciativas sociales y programas de apoyo que fortalecen nuestra comunidad y promueven la solidaridad.",
  },
  {
    icon: CalendarHeart,
    title: "Actividades y eventos",
    desc: "Asiste a actividades culturales, recreativas y eventos exclusivos para socios y familias durante todo el año.",
  },
  {
    icon: Handshake,
    title: "Convenios y alianzas",
    desc: "Disfruta de descuentos y beneficios exclusivos en una amplia red de comercios, establecimientos de salud y entidades educativas aliadas.",
  },
];

export function BenefitsGrid() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
            Beneficios para{" "}
            <span className="gradient-text-anim">nuestros socios</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ser parte de Coopmaza es acceder a un mundo de oportunidades
            diseñadas para ti y tu familia.
          </p>
        </div>

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          data-stagger
        >
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 p-7 shadow-soft hover-lift spotlight sheen"
            >
              <span className="absolute top-4 right-5 text-[11px] font-bold text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary-soft/70 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:-rotate-6">
                <it.icon className="size-6" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 font-bold text-base text-foreground">
                {it.title}
              </h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
