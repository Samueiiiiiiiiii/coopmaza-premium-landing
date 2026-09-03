import { Sparkles, ArrowRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
      <div className="absolute -top-24 -left-24 size-[420px] rounded-full bg-primary-soft/60 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -right-24 size-[460px] rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full bg-primary-soft/70 px-4 py-1.5 text-xs font-semibold text-primary border border-primary/15 reveal"
        >
          <Sparkles className="size-3.5" /> NUESTROS SERVICIOS
        </span>
        <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-balance reveal">
          Soluciones financieras
          <br />
          <span className="gradient-text-anim">para cada etapa de tu vida</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto reveal">
          En Coopmaza ofrecemos productos y servicios diseñados para apoyarte a ti y a tu familia, promoviendo tu bienestar financiero y el desarrollo de nuestra comunidad.
        </p>
        <div className="mt-8 reveal">
          <a
            href="#lista"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Conoce todos nuestros servicios
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
