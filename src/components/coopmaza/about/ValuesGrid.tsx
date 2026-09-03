import {
  HandHeart,
  ShieldCheck,
  BadgeCheck,
  Sprout,
  Users,
  Handshake,
  Scale,
  Heart,
} from "lucide-react";

const values = [
  { icon: HandHeart, title: "Servicio", desc: "Atender con vocación y entrega a cada socio." },
  { icon: ShieldCheck, title: "Responsabilidad", desc: "Cumplimos lo que prometemos, con compromiso." },
  { icon: BadgeCheck, title: "Honestidad", desc: "Transparencia en cada decisión y acción." },
  { icon: Sprout, title: "Humildad", desc: "Aprendemos y crecemos con sencillez." },
  { icon: Heart, title: "Solidaridad", desc: "Nos apoyamos para crecer como comunidad." },
  { icon: Handshake, title: "Compañerismo", desc: "Caminamos juntos en cada paso del camino." },
  { icon: Scale, title: "Igualdad", desc: "Mismas oportunidades para todos los socios." },
  { icon: Users, title: "Respeto", desc: "Valoramos las ideas y la dignidad de cada persona." },
];

export function ValuesGrid() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl reveal">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary">
            Nuestros valores
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
            Los principios que nos <span className="text-shimmer">sostienen</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cada decisión que tomamos en Coopmaza está guiada por estos ocho valores
            fundamentales, heredados de quienes nos fundaron.
          </p>
        </div>

        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          data-stagger
        >
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 p-6 shadow-soft hover-lift spotlight sheen"
            >
              <span className="absolute top-4 right-4 text-[11px] font-bold text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary-soft/70 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:-rotate-6">
                <v.icon className="size-6" strokeWidth={1.7} />
              </div>
              <h3 className="mt-5 font-bold text-base text-foreground">{v.title}</h3>
              <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
