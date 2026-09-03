import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "¿Cuáles son los horarios de atención?", a: "Nuestro horario es de lunes a viernes de 8:00 a.m. a 5:00 p.m. y sábados de 8:00 a.m. a 12:00 p.m." },
  { q: "¿Cómo puedo contactar a mi asesor?", a: "Puedes llamarnos al +1 (809) 691-7244 o escribirnos por WhatsApp y te conectaremos con tu asesor asignado." },
  { q: "¿Cómo puedo hacerme socio?", a: "Visita nuestra oficina con tu cédula de identidad y un depósito inicial. El proceso es rápido y sencillo." },
  { q: "¿Dónde puedo pagar mis aportes?", a: "Puedes realizar tus aportes directamente en nuestra oficina o mediante transferencia bancaria." },
  { q: "¿Qué documentos necesito para un préstamo?", a: "Necesitas cédula, comprobante de ingresos, carta de trabajo y estados de cuenta bancarios recientes." },
  { q: "¿Cuánto tiempo tarda en responderme Coopmaza?", a: "Nos comprometemos a responder todos los mensajes en un plazo máximo de 24 horas hábiles." },
];

export function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center reveal mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Preguntas <span className="italic gradient-text pr-2 inline-block">frecuentes</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">Resuelve tus dudas más comunes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3" data-stagger>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <button
                key={i}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="text-left rounded-2xl border border-border/50 bg-card p-5 hover:border-primary/20 hover:shadow-soft transition-all duration-400 group"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold tracking-tight">{faq.q}</span>
                  <ChevronDown className={`size-4 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
