import { Users, Calendar, ArrowRight, Leaf } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { Counter } from "./Counter";
import { MagneticButton } from "./MagneticButton";
import aboutImg from "@/assets/about-community.jpg";

export function About() {
  const navigate = useNavigate();

  return (
    <section id="nosotros" className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative rounded-[40px] overflow-hidden bg-primary text-primary-foreground shadow-lift">
          <div className="grid lg:grid-cols-2">
            {/* Left content */}
            <div className="relative p-8 sm:p-12 lg:p-16 z-10 reveal">
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary-foreground/70">
                Sobre Coopmaza
              </span>
              <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
                Personas ayudando a personas
              </h2>
              <p className="mt-5 max-w-md text-primary-foreground/80 leading-relaxed">
                Desde nuestros inicios, creemos en el poder de la unión. Hoy,
                miles de socios hacen parte de esta gran familia cooperativa.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 max-w-md">
                {[
                  { icon: Users, value: 500, prefix: "+", label: "Socios activos" },
                  { icon: Calendar, value: 20, prefix: "+", label: "Años de experiencia" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center gap-2 text-accent">
                      <s.icon className="size-5" strokeWidth={1.8} />
                      <span className="font-display font-extrabold text-2xl sm:text-3xl text-primary-foreground">
                        <Counter to={s.value} prefix={s.prefix} />
                      </span>
                    </div>
                    <div className="mt-1 text-xs sm:text-[13px] text-primary-foreground/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <MagneticButton variant="white" onClick={() => navigate({ to: "/nosotros" })}>
                  Conócenos mejor
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </MagneticButton>
              </div>
            </div>

            {/* Right image */}
            <div className="relative min-h-[320px] lg:min-h-[520px]">
              <img
                src={aboutImg}
                alt="Personas abrazadas mirando hacia un bosque iluminado — comunidad Coopmaza"
                width={1280}
                height={896}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary from-[12%] via-primary/45 to-transparent lg:bg-gradient-to-r lg:from-primary lg:from-[18%] lg:via-primary/30 lg:to-transparent" />

              {/* Circular badge */}
              <div
                className="absolute left-4 sm:left-8 lg:-left-12 top-1/2 -translate-y-1/2 size-28 sm:size-32 rounded-full bg-white text-primary shadow-lift flex items-center justify-center"
                style={{ animation: "float 8s ease-in-out infinite" }}
              >
                <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-[spin_22s_linear_infinite]" aria-hidden>
                  <defs>
                    <path
                      id="circlePath"
                      d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                    />
                  </defs>
                  <text fill="currentColor" fontSize="7.8" fontWeight="800" letterSpacing="1.6">
                    <textPath href="#circlePath">
                      JUNTOS LOGRAMOS MÁS • JUNTOS LOGRAMOS MÁS •{" "}
                    </textPath>
                  </text>
                </svg>
                <Leaf className="size-8 text-primary" strokeWidth={1.6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
