import { FileText, Upload, ClipboardCheck, MailCheck, ArrowRight, ShieldCheck } from "lucide-react";

const steps = [
  { icon: FileText, label: "Completa tu formulario online" },
  { icon: Upload, label: "Presenta tu solicitud" },
  { icon: ClipboardCheck, label: "Evaluamos tu solicitud" },
  { icon: MailCheck, label: "Recibe tu respuesta por correo" },
];

export function DigitalBanner() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary-soft/40 border border-primary/15 p-8 lg:p-12 reveal">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/15 blur-3xl animate-float" />
          <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-10 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-widest text-primary">
                NUEVO PROYECTO
              </span>
              <h3 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.02]">
                COOPMAZA <span className="gradient-text-anim">DIGITAL</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                Todo más fácil, rápido y seguro.
              </p>
              <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed max-w-md">
                Ahora puedes abrir tu cuenta desde donde estés. Completa tu formulario online, presenta tu solicitud y recibe una respuesta sin salir de casa.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="/digital" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-lg transition-all hover:-translate-y-0.5">
                  Abre tu cuenta online
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground px-3">
                  <ShieldCheck className="size-4 text-primary" />
                  Proceso 100% online, seguro y confidencial
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5" data-stagger>
              {steps.map((s, i) => (
                <div
                  key={s.label}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative size-16 rounded-full bg-card border border-border/60 shadow-soft flex items-center justify-center text-primary transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:rotate-3">
                    <s.icon className="size-6" strokeWidth={1.7} />
                  </div>
                  <p className="mt-3 text-[12px] font-medium text-foreground leading-snug">
                    <span className="text-primary font-bold">{i + 1}.</span> {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
