import { Users, ShieldCheck, HandHeart, Leaf } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Sin fines de lucro",
    desc: "Trabajamos para el bienestar de nuestros socios, no para beneficiar a unos pocos.",
  },
  {
    icon: ShieldCheck,
    title: "Transparencia",
    desc: "Actuamos con honestidad y claridad en cada decisión que tomamos.",
  },
  {
    icon: HandHeart,
    title: "Solidaridad",
    desc: "Nos apoyamos para crecer juntos como comunidad y como personas.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    desc: "Promovemos prácticas responsables para cuidar nuestro entorno y asegurar el futuro.",
  },
];

export function Values() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[36px] bg-surface border border-border/60 p-6 sm:p-10 lg:p-12 shadow-soft">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            data-stagger
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="group text-center px-2"
              >
                <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-primary-soft/70 text-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon strokeWidth={1.6} className="size-7" />
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
