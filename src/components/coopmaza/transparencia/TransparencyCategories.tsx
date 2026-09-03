import { useState, useEffect } from "react";
import {
  BookOpen,
  BarChart3,
  Building2,
  X,
  Download,
  FileText,
  Calendar
} from "lucide-react";

const categories = [
  { id: "asambleas", icon: BookOpen, label: "Asambleas", title: "Asambleas Generales" },
  { id: "financieros", icon: BarChart3, label: "Informes\nfinancieros", title: "Informes Financieros" },
  { id: "gobierno", icon: Building2, label: "Gobierno\ncorporativo", title: "Gobierno Corporativo" },
];

const assemblyDocs = [
  { name: "Acta de Asamblea General 2024", date: "11 Nov, 2025", format: "PDF", url: "https://drive.google.com/file/d/1C29SMt7RZ19FFrBxeleznmc7MXi9Dp1k/view" },
  { name: "Acta de Asamblea General 2023", date: "18 Sep, 2025", format: "PDF", url: "https://drive.google.com/file/d/1wj7UByeyBlzwFP-aY4JA0BKDNR1U4pj7/view" },
  { name: "Acta de Asamblea General 2022", date: "18 Sep, 2025", format: "PDF", url: "https://drive.google.com/file/d/1IEpHKxZ7G_WwZEF2GnXeFBcTrNjUq8An/view" },
];

const financialDocs = [
  { name: "Estados Financieros 2024", date: "14 Ago, 2025", format: "PDF", url: "https://drive.google.com/file/d/1kC0QlmyL-7Xr43s7sB8KZMGJH0C7yPc1/view" },
  { name: "Estados Financieros 2023", date: "14 Ago, 2025", format: "PDF", url: "https://drive.google.com/file/d/1nByrwlxXDBjcwoEztIXtfTZHuK2pPfy8/view" },
  { name: "Estados Financieros 2022", date: "14 Ago, 2025", format: "PDF", url: "https://drive.google.com/file/d/19WLC1Nmbu9DVwaiG6Sk9HEXZWw5n_HOn/view" },
];

const galleryItems = [
  {
    type: "image",
    url: "https://i.ibb.co/FLDD4Fw8/Chat-GPT-Image-28-may-2026-01-29-42-p-m.png",
    title: "Encuentro de cooperativas y asociaciones aliadas a la Fundación Reservas",
    description: "Representando a COOPMAZA estuvieron presentes Alex Almonte, Miguel José Veras y Josefina Suriel."
  },
  {
    type: "image",
    url: "https://i.ibb.co/Hf5zdbb6/Chat-GPT-Image-28-may-2026-01-28-20-p-m.png",
    title: "Apadrinamiento de las patronales de San José en Carrera de Palmas",
    description: "COOPMAZA participó como patrocinador invitado en las fiestas patronales de la comunidad de Carrera de Palmas."
  },
  {
    type: "image",
    url: "https://i.ibb.co/35G0XpNP/Chat-GPT-Image-28-may-2026-01-51-00-p-m.png",
    title: "Entrega del primer crédito 2026 de Fundación Reservas del País a COOPMAZA",
    description: "COOPMAZA recibió el primer crédito del año 2026 otorgado por Fundación Reservas del País, con el objetivo de fortalecer su cartera de crédito y apoyar a microempresarios de la región."
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/daqtmlxho/video/upload/v1779990953/Maravillosa_charla_impartida_por_la_Dr._Basora_en_nuestra_cooperativa_COOPMAZA_con_motivo_al_mes_byk9v7.mp4",
    title: "Charla de la Dra. Basora en COOPMAZA por el mes de la familia",
    description: "La Dra. María Basora impartió una charla en COOPMAZA con motivo al mes de la familia, compartiendo conocimientos y orientaciones con nuestros asociados."
  },
  {
    type: "image",
    url: "https://i.ibb.co/6RQz5ps3/Chat-GPT-Image-28-may-2026-02-13-47-p-m.png",
    title: "Encuentro para la reforestación de Loma Guaigüí",
    description: "Participación de cooperativas e instituciones del Estado en un encuentro realizado para apoyar la reforestación de Loma Guaigüí, auspiciado por el IDECOOP."
  },
  {
    type: "image",
    url: "https://i.ibb.co/XxDzkYPs/Chat-GPT-Image-28-may-2026-02-18-26-p-m.png",
    title: "Participación de COOPMAZA en el primer encuentro interregional de cooperativas",
    description: "Nuestra presidenta Lis Suárez y el tesorero Miguel José Veras representaron a COOPMAZA en el primer encuentro interregional de cooperativas, auspiciado por IDECOOP."
  },
  {
    type: "image",
    url: "https://i.ibb.co/BHJcHrCZ/Chat-GPT-Image-28-may-2026-02-23-11-p-m.png",
    title: "Rifa mensual de COOPMAZA",
    description: "Entrega y realización de nuestra rifa mensual para asociados de la cooperativa."
  }
];

export function TransparencyCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Prevent scroll when panel is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCategory]);

  // Handle escape key to close panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCategory(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getActiveTitle = () => {
    return categories.find((c) => c.id === activeCategory)?.title || "";
  };

  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal-scale relative rounded-[32px] bg-primary-soft/40 border border-primary/10 p-8 sm:p-10 lg:p-12 overflow-hidden">
          {/* Ambient deco */}
          <div
            aria-hidden
            className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/10 blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-16 size-60 rounded-full bg-primary-soft/60 blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          />

          <div className="relative text-center mb-10 reveal">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Explora nuestra <span className="gradient-text-anim">información</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-3 gap-5 lg:gap-6 max-w-xl mx-auto" data-stagger>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className="group flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-1.5 focus:outline-none"
              >
                <div className="relative size-16 sm:size-[72px] rounded-full bg-card shadow-soft flex items-center justify-center text-primary mb-3 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6">
                  <c.icon className="size-6 sm:size-7" strokeWidth={1.6} />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full ring-2 ring-primary/0 group-hover:ring-primary/30 group-hover:animate-[pulse-ring_1.4s_ease-out_infinite]"
                  />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-foreground/80 leading-tight whitespace-pre-line">
                  {c.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div
        onClick={() => setActiveCategory(null)}
        className={`fixed inset-0 bg-background/50 backdrop-blur-md z-[100] transition-opacity duration-300 ${
          activeCategory ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-over Side Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:max-w-md md:max-w-lg z-[101] bg-card/95 backdrop-blur-xl border-l border-border/50 shadow-2xl flex flex-col transition-transform duration-500 ease-out transform ${
          activeCategory ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border/40 bg-surface/50">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary-soft/40 flex items-center justify-center text-primary">
              {activeCategory === "asambleas" && <BookOpen className="size-5" />}
              {activeCategory === "financieros" && <BarChart3 className="size-5" />}
              {activeCategory === "gobierno" && <Building2 className="size-5" />}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                {getActiveTitle()}
              </h3>
              <p className="text-xs text-muted-foreground">Documentos y transparencia</p>
            </div>
          </div>
          <button
            onClick={() => setActiveCategory(null)}
            className="size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border/40 transition-all duration-200"
            aria-label="Cerrar panel"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
          {/* Asambleas Documents */}
          {activeCategory === "asambleas" && (
            <div className="space-y-3">
              {assemblyDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-border/60 bg-card p-4 hover:border-primary/20 hover:bg-primary-soft/5 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary-soft/30 flex items-center justify-center text-primary shrink-0">
                      <FileText className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {doc.name}
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary bg-primary-soft/30 px-2 py-0.5 rounded-full">
                          {doc.format}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Calendar className="size-3" />
                          {doc.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-4 bottom-4 size-9 rounded-xl bg-primary-soft/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-primary transition-all duration-300"
                    title="Ver documento"
                  >
                    <Download className="size-4 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Informes Financieros Documents */}
          {activeCategory === "financieros" && (
            <div className="space-y-3">
              {financialDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-border/60 bg-card p-4 hover:border-primary/20 hover:bg-primary-soft/5 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary-soft/30 flex items-center justify-center text-primary shrink-0">
                      <FileText className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {doc.name}
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary bg-primary-soft/30 px-2 py-0.5 rounded-full">
                          {doc.format}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Calendar className="size-3" />
                          {doc.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-4 bottom-4 size-9 rounded-xl bg-primary-soft/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-primary transition-all duration-300"
                    title="Ver informe"
                  >
                    <Download className="size-4 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Gobierno Corporativo - Galería de Actividades */}
          {activeCategory === "gobierno" && (
            <div className="space-y-4">
              <div className="bg-primary-soft/20 border border-primary/10 rounded-2xl p-4 mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                  Galería de Actividades
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consulta las fotos y videos de nuestras actividades en su tamaño original completo.
                </p>
              </div>

              <div className="space-y-5">
                {galleryItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/20 hover:shadow-soft transition-all duration-300 flex flex-col"
                  >
                    <div className="relative w-full bg-black/[0.02] flex items-center justify-center overflow-hidden">
                      {item.type === "video" ? (
                        <video
                          src={item.url}
                          controls
                          className="w-full h-auto max-h-[300px] object-contain block"
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-auto object-contain block"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="p-4 border-t border-border/40 bg-card">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase mb-1.5 ${
                        item.type === "video" 
                          ? "bg-accent/15 text-accent" 
                          : "bg-primary-soft/60 text-primary"
                      }`}>
                        {item.type === "video" ? "Video" : "Actividad"}
                      </span>
                      <h4 className="font-bold text-sm text-foreground leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

