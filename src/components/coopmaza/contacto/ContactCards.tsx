import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Visítanos",
    lines: ["Santo Cerro, Plaza López", "La Vega, República Dominicana"],
    link: { label: "Ver en Google Maps", href: "https://www.google.com/maps/place/COOPMAZA/data=!4m2!3m1!1s0x0:0x80f452bbd1bfaceb" },
  },
  {
    icon: Phone,
    title: "Llámanos",
    lines: ["+1 (809) 691-7244", "Lun - Vie: 8:00 am - 5:00 pm", "Sáb: 8:00 am - 12:00 pm"],
    link: { label: "Llamar ahora", href: "tel:+18096917244" },
  },
  {
    icon: Mail,
    title: "Escríbenos",
    lines: ["coopmaza@coopmaza.com", "Respondemos en menos", "de 24 horas."],
    link: { label: "Enviar correo", href: "mailto:coopmaza@coopmaza.com" },
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+1 (809) 691-7244", "Disponible de", "8:00 a.m. – 5:00 p.m."],
    link: { label: "Chatear por WhatsApp", href: "https://wa.me/18096917244" },
  },
];

export function ContactCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Otras formas de <span className="gradient-text">contacto</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-stagger>
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl bg-card border border-border/50 p-6 hover:border-primary/20 hover:shadow-card transition-all duration-500 spotlight tilt-card"
            >
              <div className="size-14 rounded-2xl bg-primary-soft/50 flex items-center justify-center text-primary mb-5 icon-bounce">
                <c.icon className="size-6" strokeWidth={1.6} />
              </div>
              <h3 className="font-bold text-base tracking-tight mb-2">{c.title}</h3>
              {c.lines.map((l, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed break-words">{l}</p>
              ))}
              {c.link && (
                <a
                  href={c.link.href}
                  target={c.link.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block mt-3 text-sm font-semibold text-primary underline-grow"
                >
                  {c.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
