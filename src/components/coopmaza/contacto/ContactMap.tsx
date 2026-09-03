import { MapPin, Trees } from "lucide-react";

export function ContactMap() {
  return (
    <section className="py-16 lg:py-24 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div className="reveal">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
              ¿Dónde <span className="gradient-text">estamos</span>?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Visítanos en nuestra oficina principal.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <div className="size-10 rounded-full bg-primary-soft/60 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <MapPin className="size-5" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-semibold text-sm">Plaza López, Santo Cerro</p>
                <p className="text-sm text-muted-foreground">La Vega, República Dominicana</p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <Trees className="size-5" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-semibold text-sm">Parqueo disponible</p>
                <p className="text-sm text-muted-foreground">Contamos con parqueos para nuestros socios y visitantes.</p>
              </div>
            </div>
          </div>

          {/* Right map */}
          <div className="reveal-scale rounded-2xl overflow-hidden border border-border/50 shadow-card h-[350px] lg:h-[400px]">
            <iframe
              title="Ubicación Coopmaza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d-70.52!3d19.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80f452bbd1bfaceb%3A0x80f452bbd1bfaceb!2sCOOPMAZA!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
