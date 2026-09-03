import { Calendar, Users, TrendingUp } from "lucide-react";
import { Counter } from "../Counter";

const milestones = [
  { year: "2006", title: "Nace el grupo", desc: "En junio del 2006, don Luis Rufino Veras Sánchez, junto a Bienvenido Sánchez, Hilaria Rodríguez, Indiana Veras, Leonel Núñez y otros vecinos de Carrera de Palmas, comienzan a reunirse en casa de Bienvenido Sánchez —y más adelante en casa de doña Josefina Suriel— con la idea de formar una cooperativa que apoyara a la comunidad." },
  { year: "2022", title: "Cooperativa incorporada", desc: "El 9 de enero del 2022 nace oficialmente la Cooperativa Mariano Zaragoza y, en agosto del mismo año, se publica el decreto que reconoce legalmente nuestra incorporación como cooperativa." },
  { year: "2025", title: "Nuevo local en Plaza López", desc: "El 20 de enero del 2025 nos mudamos a nuestro actual local en Plaza López, un espacio más amplio y accesible para atender mejor a todos nuestros socios y a la comunidad." },
  { year: "2026", title: "Era digital", desc: "A mediados del 2026 damos el salto a la era digital, modernizando nuestras plataformas y servicios sin perder el trato cercano y humano que siempre nos ha caracterizado." },
];

export function History() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: narrative */}
          <div className="lg:col-span-5 reveal">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary">
              Nuestra historia
            </span>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-[1.05] text-balance">
              Dos décadas <br className="hidden sm:block" />
              <span className="gradient-text-anim">construyendo comunidad</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Todo comenzó en junio del 2006, cuando un grupo de vecinos de
              Carrera de Palmas, liderados por don{" "}
              <strong className="text-foreground">Luis Rufino Veras Sánchez</strong>,
              junto a Bienvenido Sánchez, Hilaria Rodríguez, Indiana Veras,
              Leonel Núñez y otros socios, empezaron a reunirse con un mismo
              propósito: crear una cooperativa que apoyara el desarrollo de su
              comunidad.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Las primeras reuniones se celebraban en casa de Bienvenido
              Sánchez y, más adelante, en casa de Josefina Suriel, donde el
              grupo se mantuvo por muchos años. El 9 de enero del 2022 nos
              incorporamos oficialmente como la{" "}
              <strong className="text-foreground">Cooperativa Mariano Zaragoza</strong>,
              y desde entonces seguimos creciendo junto a las familias de
              Carrera de Palmas y zonas aledañas.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {[
                { icon: Calendar, val: 20, suf: "+", label: "Años de historia" },
                { icon: Users, val: 500, suf: "+", label: "Socios" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-surface border border-border/60 p-4 hover-lift">
                  <s.icon className="size-5 text-primary" />
                  <div className="mt-2 font-display font-extrabold text-2xl text-foreground">
                    <Counter to={s.val} suffix={s.suf} />
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="lg:col-span-7 relative">
            <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            <ul className="space-y-6" data-stagger>
              {milestones.map((m) => (
                <li key={m.year} className="relative pl-16 group">
                  <div className="absolute left-0 top-1.5 size-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <TrendingUp className="size-5" strokeWidth={1.8} />
                  </div>
                  <div className="rounded-2xl bg-card border border-border/60 p-5 sm:p-6 shadow-soft tilt-3d glow-ring">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-extrabold text-2xl gradient-text-anim">
                        {m.year}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                        Hito
                      </span>
                    </div>
                    <h3 className="mt-3 font-bold text-lg text-foreground">{m.title}</h3>
                    <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
