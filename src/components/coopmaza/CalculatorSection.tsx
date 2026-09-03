import { useMemo, useState } from "react";
import { Calculator, TrendingUp, ArrowRight, Coins, Calendar, Percent } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

function formatPEN(n: number) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 0,
  }).format(n);
}

type SliderProps = {
  icon: React.ElementType;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
};

function FancySlider({ icon: Icon, label, value, min, max, step, format, onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
          <Icon className="size-4 text-primary" strokeWidth={1.8} />
          {label}
        </span>
        <span className="font-display font-bold text-lg text-primary tabular-nums">
          {format(value)}
        </span>
      </div>
      <div className="relative">
        <div className="h-2 rounded-full bg-primary-soft/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-[width] duration-200"
            style={{ width: `${pct}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          aria-label={label}
        />
        <div
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-5 rounded-full bg-white border-2 border-primary shadow-card transition-[left] duration-200"
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function Calculator_Section() {
  const [amount, setAmount] = useState(5000);
  const [years, setYears] = useState(3);
  const [rate, setRate] = useState(8);

  const { final, interest, monthly } = useMemo(() => {
    const r = rate / 100;
    const final = amount * Math.pow(1 + r, years);
    const interest = final - amount;
    const monthly = interest / (years * 12);
    return { final, interest, monthly };
  }, [amount, years, rate]);

  return (
    <section id="servicios" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
            Simulador
          </span>
          <h2 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-balance">
            Calcula tu <span className="gradient-text">crecimiento</span>
          </h2>
          <div className="mt-4 mx-auto h-[3px] w-16 rounded-full bg-accent" />
          <p className="mt-5 text-muted-foreground text-base leading-relaxed">
            Descubre cuánto puedes ganar con nuestros planes de ahorro. Ajusta
            los valores y mira los resultados en tiempo real.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6 lg:gap-8 reveal-scale">
          {/* Left: controls */}
          <div className="lg:col-span-3 rounded-[32px] bg-card border border-border/60 p-7 sm:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary-soft/70 text-primary">
                <Calculator className="size-5" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-bold text-lg">Personaliza tu plan</h3>
                <p className="text-xs text-muted-foreground">
                  Mueve las barras para simular tu ahorro
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <FancySlider
                icon={Coins}
                label="Monto a depositar"
                value={amount}
                min={500}
                max={100000}
                step={500}
                format={formatPEN}
                onChange={setAmount}
              />
              <FancySlider
                icon={Calendar}
                label="Plazo (años)"
                value={years}
                min={1}
                max={20}
                step={1}
                format={(v) => `${v} ${v === 1 ? "año" : "años"}`}
                onChange={setYears}
              />
              <FancySlider
                icon={Percent}
                label="Tasa anual estimada"
                value={rate}
                min={3}
                max={14}
                step={0.5}
                format={(v) => `${v.toFixed(1)}%`}
                onChange={setRate}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { l: "Conservador", a: 3000, y: 2, r: 5 },
                { l: "Equilibrado", a: 10000, y: 5, r: 8 },
                { l: "Ambicioso", a: 25000, y: 10, r: 12 },
              ].map((p) => (
                <button
                  key={p.l}
                  onClick={() => {
                    setAmount(p.a);
                    setYears(p.y);
                    setRate(p.r);
                  }}
                  className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-primary-soft/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {p.l}
                </button>
              ))}
            </div>
          </div>

          {/* Right: results */}
          <div className="lg:col-span-2 rounded-[32px] bg-primary text-primary-foreground p-7 sm:p-10 shadow-lift relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 size-56 rounded-full bg-white/5 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-accent">
                <TrendingUp className="size-3.5" /> Resultado proyectado
              </span>

              <div className="mt-6">
                <div className="text-sm text-primary-foreground/70">
                  Monto final estimado
                </div>
                <div className="mt-1 font-display font-extrabold text-4xl sm:text-5xl tracking-tight tabular-nums">
                  {formatPEN(final)}
                </div>
              </div>

              <div className="mt-7 space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur">
                  <span className="text-sm text-primary-foreground/80">
                    Intereses ganados
                  </span>
                  <span className="font-bold text-accent tabular-nums">
                    {formatPEN(interest)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur">
                  <span className="text-sm text-primary-foreground/80">
                    Promedio mensual
                  </span>
                  <span className="font-bold tabular-nums">
                    {formatPEN(monthly)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur">
                  <span className="text-sm text-primary-foreground/80">
                    Capital inicial
                  </span>
                  <span className="font-bold tabular-nums">
                    {formatPEN(amount)}
                  </span>
                </div>
              </div>

              <MagneticButton variant="white" className="mt-8 w-full justify-center">
                Solicitar este plan
                <ArrowRight className="size-4" />
              </MagneticButton>

              <p className="mt-4 text-[11px] text-primary-foreground/60 text-center leading-relaxed">
                * Cálculo referencial. Las tasas reales pueden variar según el
                producto y el perfil del socio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
