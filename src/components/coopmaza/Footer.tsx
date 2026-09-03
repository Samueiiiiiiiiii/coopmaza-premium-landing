import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Enlaces rápidos",
    items: ["Inicio", "Nosotros", "Beneficios", "Servicios", "Transparencia", "Contacto"],
  },
  {
    title: "Servicios",
    items: ["Ahorros", "Créditos", "Seguros", "Educación"],
  },
  {
    title: "Información",
    items: ["Preguntas frecuentes", "Documentos", "Estados financieros", "Reglamentos", "Trabaja con nosotros"],
  },
];

export function Footer() {
  return (
    <footer id="contacto" className="relative bg-primary text-primary-foreground mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed">
              Una cooperativa comprometida con el bienestar de sus socios y el
              desarrollo de nuestra comunidad.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-bold text-sm tracking-wide mb-5">{c.title}</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/75">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="relative inline-block transition-colors hover:text-accent after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-bold text-sm tracking-wide mb-5">Contáctanos</h4>
            <ul className="space-y-3.5 text-sm text-primary-foreground/85">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-accent shrink-0" />
                <a href="tel:+18096917244" className="hover:text-accent transition-colors">+1 (809) 691-7244</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-accent shrink-0" />
                <a href="mailto:coopmaza@coopmaza.com" className="hover:text-accent transition-colors text-xs sm:text-sm">
                  coopmaza@coopmaza.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-accent mt-0.5 shrink-0" />
                <span>Santo Cerro, Plaza López<br />La Vega, República Dominicana</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="size-4 text-accent mt-0.5 shrink-0" />
                <span>Lun - Vie: 8:00 am - 5:00 pm<br />Sáb: 8:00 am - 12:00 pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <span>© 2026 Coopmaza. Todos los derechos reservados.</span>
          <span>Diseñado para crecer juntos</span>
        </div>
      </div>
    </footer>
  );
}
