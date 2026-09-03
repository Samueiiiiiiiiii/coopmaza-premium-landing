import { Heart, ArrowRight, Leaf } from "lucide-react";

export function TransparencyCTA() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal-scale relative rounded-[32px] bg-primary-soft/40 border border-primary/10 p-8 sm:p-10 overflow-hidden">
          {/* Decorative leaves */}
          <Leaf
            aria-hidden
            className="absolute -top-3 -left-3 size-32 text-primary/15 -rotate-12"
            style={{ animation: "float 9s ease-in-out infinite" }}
          />
          <Leaf
            aria-hidden
            className="absolute -bottom-4 left-20 size-24 text-primary/10 rotate-45"
            style={{ animation: "float 11s ease-in-out 1s infinite" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -right-20 size-60 rounded-full bg-primary/10 blur-3xl"
            style={{ animation: "float 14s ease-in-out infinite" }}
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="hidden sm:flex size-14 rounded-full bg-card shadow-soft items-center justify-center shrink-0 text-primary transition-transform duration-500 hover:scale-110 hover:rotate-6">
                <Heart className="size-6" strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                  Nuestro compromiso es{" "}
                  <span className="gradient-text-anim">contigo</span>
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground max-w-xl">
                  Trabajamos cada día para mantener los más altos estándares de ética,
                  transparencia y buen gobierno en beneficio de nuestros socios y la comunidad.
                </p>
              </div>
            </div>

            <a
              href="/nosotros"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm px-7 py-3.5 hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 shrink-0 sheen"
            >
              Conoce más sobre nosotros
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
