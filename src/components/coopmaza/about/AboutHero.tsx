import { MapPin, Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 size-[480px] rounded-full bg-primary-soft/60 blur-3xl"
        style={{ animation: "blob 18s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 size-[420px] rounded-full bg-accent/15 blur-3xl"
        style={{ animation: "blob 22s ease-in-out infinite reverse" }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full bg-primary-soft/70 text-primary px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase reveal"
        >
          <Sparkles className="size-3.5" /> Sobre Coopmaza
        </span>

        <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-balance reveal">
          Una cooperativa con{" "}
          <span className="text-shimmer">corazón comunitario</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed reveal">
          La <strong className="text-foreground">Cooperativa Mariano Zaragoza</strong>{" "}
          nace del esfuerzo colectivo de una comunidad que cree en el progreso compartido,
          la solidaridad y el bienestar de las familias dominicanas.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full glass border border-border/60 px-5 py-2.5 text-sm text-foreground/80 shadow-soft reveal">
          <MapPin className="size-4 text-primary" />
          Plaza López, Santo Cerro — La Vega, República Dominicana
        </div>
      </div>
    </section>
  );
}
