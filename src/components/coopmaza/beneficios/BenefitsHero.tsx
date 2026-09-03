import { Sparkles, ArrowRight } from "lucide-react";
import { MagneticButton } from "../MagneticButton";

export function BenefitsHero() {
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -left-24 size-[520px] rounded-full bg-primary-soft/60 blur-3xl"
        style={{ animation: "blob 20s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-24 size-[460px] rounded-full bg-accent/15 blur-3xl"
        style={{ animation: "blob 24s ease-in-out infinite reverse" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft/70 text-primary px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase reveal">
          <Sparkles className="size-3.5" /> Nuestros beneficios
        </span>

        <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-balance reveal">
          Beneficios que <br className="hidden sm:block" />
          <span className="text-shimmer">transforman vidas</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed reveal">
          En Coopmaza trabajamos para ofrecer a nuestros socios y sus familias
          una amplia gama de beneficios que contribuyen al bienestar, el
          desarrollo y la calidad de vida de nuestra comunidad.
        </p>

        <div className="mt-8 reveal">
          <a href="/digital">
            <MagneticButton variant="primary">
              Hazte socio y comienza a disfrutar
              <ArrowRight className="size-4" />
            </MagneticButton>
          </a>
        </div>
      </div>
    </section>
  );
}
