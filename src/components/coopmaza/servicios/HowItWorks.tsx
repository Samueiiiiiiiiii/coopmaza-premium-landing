const steps = [
  { n: 1, title: "Completa el formulario", desc: "Ingresa tus datos personales y crea tu cuenta en el formulario online." },
  { n: 2, title: "Envía tu solicitud", desc: "Adjunta los documentos requeridos y envía tu solicitud de forma segura." },
  { n: 3, title: "Evaluamos tu solicitud", desc: "Nuestro equipo revisará tu información y te notificará la decisión." },
  { n: 4, title: "¡Bienvenido a Coopmaza!", desc: "Si tu solicitud es aprobada, ya puedes comenzar a disfrutar de todos nuestros beneficios." },
];

export function HowItWorks() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
            ¿Cómo funciona <span className="gradient-text-anim">COOPMAZA DIGITAL</span>?
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-stagger
          >
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-3xl bg-card border border-border/60 shadow-soft p-6 pt-10 text-center hover-lift"
              >
                {/* Sheen background layer */}
                <div className="absolute inset-0 rounded-[22px] sheen pointer-events-none" />

                <div className="absolute -top-6 left-1/2 -translate-x-1/2 size-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-soft ring-4 ring-background transition-transform duration-500 hover:scale-110 hover:rotate-12 z-10">
                  {s.n}
                </div>
                <h3 className="font-bold text-base text-foreground relative z-10">{s.title}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed relative z-10">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
