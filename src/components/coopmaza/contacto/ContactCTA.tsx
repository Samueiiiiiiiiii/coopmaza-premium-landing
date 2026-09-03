import { Phone, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal-scale relative rounded-[32px] bg-primary text-primary-foreground p-8 sm:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div aria-hidden className="absolute -top-20 -right-20 size-60 rounded-full bg-white/5 blur-2xl" />
          <div aria-hidden className="absolute -bottom-16 -left-16 size-40 rounded-full bg-accent/20 blur-2xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="hidden sm:flex size-14 rounded-full bg-white/10 items-center justify-center shrink-0">
                <Phone className="size-6" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                  ¿Necesitas ayuda inmediata?
                </h3>
                <p className="mt-1.5 text-sm text-primary-foreground/75">
                  Nuestro equipo está listo para asistirte. Contáctanos por teléfono o WhatsApp.
                </p>
              </div>
            </div>

            <a
              href="tel:+18096917244"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm px-7 py-3.5 hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 shrink-0 sheen"
            >
              Llámanos ahora
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
