import { FileText, BarChart3, BookOpen, Scale, ArrowRight, Download, Calendar } from "lucide-react";

const DRIVE_VIEW = "https://drive.google.com/file/d/";

const docs = [
  {
    tag: "ASAMBLEA",
    tagColor: "bg-primary-soft/60 text-primary",
    icon: BookOpen,
    title: "Acta de Asamblea General 2024",
    format: "PDF",
    date: "11 Nov, 2025",
    url: `${DRIVE_VIEW}1C29SMt7RZ19FFrBxeleznmc7MXi9Dp1k/view`,
  },
  {
    tag: "FINANZAS",
    tagColor: "bg-accent/15 text-accent",
    icon: BarChart3,
    title: "Estados Financieros 2024",
    format: "PDF",
    date: "14 Ago, 2025",
    url: `${DRIVE_VIEW}1kC0QlmyL-7Xr43s7sB8KZMGJH0C7yPc1/view`,
  },
  {
    tag: "CONSTITUTIVO",
    tagColor: "bg-primary-soft/60 text-primary",
    icon: Scale,
    title: "Documentos Constitutivos – Parte I",
    format: "PDF",
    date: "20 Ene, 2025",
    url: `${DRIVE_VIEW}14DTOGcaUqTc_OSjYUjfvwzRUD4lF445v/view`,
  },
  {
    tag: "ESTATUTOS",
    tagColor: "bg-accent/15 text-accent",
    icon: FileText,
    title: "Documentos Constitutivos – Estatutos",
    format: "PDF",
    date: "20 Ene, 2025",
    url: `${DRIVE_VIEW}1BJHRQrXkMlKZNQJSIGkjmRf7vok3vPV3/view`,
  },
];

export function TransparencyFeatured() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 reveal">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Documentos <span className="gradient-text">destacados</span>
            </h2>
          </div>
          <a
            href="#biblioteca"
            className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 underline-grow"
          >
            Ver todos los documentos
            <ArrowRight className="size-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-stagger>
          {docs.map((d) => (
            <div
              key={d.title}
              className="group relative rounded-2xl bg-card border border-border/50 p-5 hover:border-primary/20 hover:shadow-card transition-all duration-500 spotlight tilt-card flex flex-col"
            >
              <span
                className={`inline-flex items-center self-start gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase ${d.tagColor}`}
              >
                <d.icon className="size-3" />
                {d.tag}
              </span>

              <h3 className="mt-4 font-bold text-sm sm:text-base tracking-tight leading-snug flex-1">
                {d.title}
              </h3>

              <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <FileText className="size-3" />
                    {d.format}
                  </span>
                </div>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg bg-primary-soft/40 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Download className="size-3.5" />
                </a>
              </div>

              <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-muted-foreground/70">
                <Calendar className="size-3" />
                Actualizado: {d.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
