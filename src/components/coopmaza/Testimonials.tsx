import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import a4 from "@/assets/avatar-4.jpg";

const testimonials = [
  {
    name: "Altagracia Rosario",
    role: "Socia desde 2019 · La Vega",
    avatar: a1,
    quote:
      "Gracias a Coopmaza pude abrir mi propia repostería en el centro de La Vega. Las tasas son súper justas y el trato es de pura familia.",
    rating: 5,
  },
  {
    name: "Juan Carlos Peralta",
    role: "Socio desde 2017 · Santo Cerro",
    avatar: a2,
    quote:
      "Llevo años ahorrando con ellos desde Santo Cerro y los intereses superan por mucho a cualquier banco tradicional. Lo mejor es el trato humano y cercano.",
    rating: 5,
  },
  {
    name: "Milagros Espinal",
    role: "Socia desde 2021 · Santiago",
    avatar: a3,
    quote:
      "El programa de educación financiera me ayudó a organizar mi negocio agrícola. Hoy invierto con total seguridad y mi familia tiene un futuro estable.",
    rating: 5,
  },
  {
    name: "Mercedes Santos",
    role: "Socia desde 2014 · La Vega",
    avatar: a4,
    quote:
      "Después de 10 años como socia puedo asegurar que Coopmaza es el motor de nuestra comunidad. Mis hijos estudiaron gracias a sus créditos educativos.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="transparencia" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
            Testimonios
          </span>
          <h2 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-balance">
            Lo que dicen <span className="gradient-text">nuestros socios</span>
          </h2>
          <div className="mt-4 mx-auto h-[3px] w-16 rounded-full bg-accent" />
          <p className="mt-5 text-muted-foreground text-base leading-relaxed">
            Historias reales de personas que crecen junto a Coopmaza cada día.
          </p>
        </div>

        {/* Featured carousel */}
        <div className="mt-14 reveal-scale">
          <div className="relative max-w-4xl mx-auto rounded-[32px] bg-card border border-border/60 shadow-card overflow-hidden">
            <Quote className="absolute top-8 right-8 size-20 text-primary-soft" />

            <div className="relative p-8 sm:p-12 lg:p-14">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${i * 100}%)` }}
                >
                  {testimonials.map((t) => (
                    <div key={t.name} className="w-full shrink-0">
                      <div className="flex gap-1 text-accent mb-5">
                        {Array.from({ length: t.rating }).map((_, k) => (
                          <Star key={k} className="size-4 fill-accent" />
                        ))}
                      </div>
                      <p className="font-display text-xl sm:text-2xl lg:text-[26px] leading-snug text-foreground text-balance">
                        “{t.quote}”
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          width={56}
                          height={56}
                          loading="lazy"
                          className="size-14 rounded-full object-cover ring-2 ring-primary-soft"
                        />
                        <div>
                          <div className="font-bold text-foreground">
                            {t.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {testimonials.map((_, k) => (
                    <button
                      key={k}
                      onClick={() => setI(k)}
                      aria-label={`Testimonio ${k + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        k === i ? "w-8 bg-primary" : "w-1.5 bg-border"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setI((p) => (p - 1 + testimonials.length) % testimonials.length)
                    }
                    aria-label="Anterior"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={() => setI((p) => (p + 1) % testimonials.length)}
                    aria-label="Siguiente"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini cards */}
        <div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-stagger
        >
          {testimonials.map((t) => (
            <div
              key={`mini-${t.name}`}
              className="group rounded-3xl bg-card border border-border/60 p-6 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex gap-1 text-accent mb-3">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="size-3.5 fill-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
                “{t.quote}”
              </p>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="size-10 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold truncate">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground truncate">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
