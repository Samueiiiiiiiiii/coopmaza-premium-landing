import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

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
              {[FacebookIcon, InstagramIcon, YoutubeIcon, MessageCircle].map((Icon, i) => (
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
