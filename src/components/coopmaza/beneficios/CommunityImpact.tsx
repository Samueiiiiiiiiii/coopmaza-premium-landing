import { Users, HeartHandshake, Award } from "lucide-react";
import { Counter } from "../Counter";

const stats = [
  { icon: Users, val: 500, prefix: "+", label: "Socios activos" },
  { icon: HeartHandshake, val: 6000, prefix: "+", label: "Familias beneficiadas" },
  { icon: Award, val: 20, prefix: "+", label: "Años de historia" },
];

export function CommunityImpact() {
  return (
    <section className="relative pt-20 lg:pt-28 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-balance">
            Nuestro impacto en la <span className="text-shimmer">comunidad</span>
          </h2>
        </div>

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          data-stagger
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-3xl bg-surface border border-border/60 p-6 text-center hover-lift spotlight"
            >
              <div className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-primary-soft/70 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <s.icon className="size-6" strokeWidth={1.7} />
              </div>
              <div className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-primary">
                {s.prefix}
                <Counter to={s.val} />
              </div>
              <div className="mt-1.5 text-[12.5px] text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
