import { HandHeart, ArrowRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function CTA() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative reveal-scale rounded-[32px] bg-surface border border-border/60 p-6 sm:p-10 shadow-soft overflow-hidden">
          {/* dot pattern */}
          <div
            aria-hidden
            className="absolute right-8 top-1/2 -translate-y-1/2 size-40 opacity-40 hidden md:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--color-primary) 1.2px, transparent 1.5px)",
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-start sm:items-center gap-5">
              <div className="shrink-0 inline-flex size-16 items-center justify-center rounded-full bg-primary-soft/70 text-primary">
                <HandHeart className="size-7" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-balance">
                  ¿Listo para ser parte de algo más grande?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl leading-relaxed">
                  Únete hoy y comienza a disfrutar de todos los beneficios de
                  ser socio.
                </p>
              </div>
            </div>

            <a href="/digital" className="shrink-0">
              <MagneticButton variant="primary">
                Hazte socio ahora
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
