import { useState } from "react";
import { MessageSquare, Shield, Zap, ArrowRight, Lock, Send, User, Mail, Phone, ChevronDown } from "lucide-react";

const features = [
  { icon: User, title: "Atención personalizada", desc: "Te acompañamos en todo lo que necesites." },
  { icon: Shield, title: "Confianza y transparencia", desc: "Información clara y segura siempre." },
  { icon: Zap, title: "Respuesta rápida", desc: "Nos comprometemos a darte una pronta respuesta." },
];

const asuntos = [
  "Información general",
  "Ahorros y depósitos",
  "Préstamos y créditos",
  "Membresía / Hacerse socio",
  "Quejas y sugerencias",
  "Otro",
];

export function ContactHero() {
  const [formData, setFormData] = useState({ nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" });
  const [selectOpen, setSelectOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      setError("Por favor completa los campos requeridos.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mykvwwak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.correo,
          telefono: formData.telefono,
          asunto: formData.asunto || "Información general",
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Ocurrió un problema al procesar el envío.");
      }
    } catch (err: any) {
      setError(err.message || "No se pudo enviar el mensaje. Por favor intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background blobs */}
      <div aria-hidden className="absolute -top-40 -left-40 size-[500px] rounded-full bg-primary-soft/30 blur-[100px] animate-blob" />
      <div aria-hidden className="absolute -bottom-40 -right-40 size-[400px] rounded-full bg-accent/10 blur-[80px] animate-blob" style={{ animationDelay: "6s" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft/50 border border-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
              <MessageSquare className="size-3.5" />
              ESTAMOS PARA AYUDARTE
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Hablemos, estamos{" "}
              <span className="relative inline-block">
                <span className="gradient-text-anim">para servirte</span>
                <span aria-hidden className="absolute -bottom-1 left-0 w-full h-3 bg-primary-soft/40 rounded-full -z-10" />
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              En Coopmaza valoramos la comunicación y estamos listos para ayudarte en lo que necesites. Escríbenos, llámanos o visítanos.
            </p>

            {/* Feature pills */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4" data-stagger>
              {features.map((f) => (
                <div key={f.title} className="group flex flex-col items-center text-center p-4 rounded-2xl bg-surface border border-border/50 hover:border-primary/20 hover:shadow-soft transition-all duration-500 spotlight">
                  <div className="size-12 rounded-full bg-primary-soft/60 flex items-center justify-center text-primary mb-3 icon-bounce">
                    <f.icon className="size-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-sm font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="relative rounded-3xl bg-card border border-border/60 shadow-card p-6 sm:p-8 overflow-hidden">
              {/* Decorative corner */}
              <div aria-hidden className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-soft/40 to-transparent rounded-bl-[60px]" />

              <div className="relative">
                <h2 className="font-display font-bold text-xl sm:text-2xl tracking-tight">Envíanos un mensaje</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">Completa el formulario y nos pondremos en contacto contigo.</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">Nombre completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">Correo electrónico *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">Teléfono (opcional)</label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="(809) 555-1234"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">Asunto</label>
                    <button
                      type="button"
                      onClick={() => setSelectOpen(!selectOpen)}
                      className="w-full flex items-center justify-between rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-left focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    >
                      <span className={formData.asunto ? "text-foreground" : "text-muted-foreground/50"}>
                        {formData.asunto || "Selecciona un asunto"}
                      </span>
                      <ChevronDown className={`size-4 text-muted-foreground transition-transform duration-300 ${selectOpen ? "rotate-180" : ""}`} />
                    </button>
                    {selectOpen && (
                      <div className="absolute z-20 top-full mt-1 w-full rounded-xl border border-border bg-card shadow-card overflow-hidden" style={{ animation: "fade-up 0.2s ease-out" }}>
                        {asuntos.map((a) => (
                          <button
                            key={a}
                            type="button"
                            onClick={() => { setFormData({ ...formData, asunto: a }); setSelectOpen(false); }}
                            className="w-full px-4 py-2.5 text-sm text-left hover:bg-primary-soft/30 transition-colors"
                          >
                            {a}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">Mensaje *</label>
                    <textarea
                      name="mensaje"
                      required
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-semibold text-red-500 text-center" style={{ animation: "fade-in 0.3s ease-out" }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading || submitted}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm px-6 py-3.5 hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5 sheen disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? "Enviando..." : submitted ? "¡Mensaje enviado con éxito!" : "Enviar mensaje"}
                    {loading || submitted ? null : <ArrowRight className="size-4" />}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="size-3" />
                    Tu información está segura con nosotros.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
