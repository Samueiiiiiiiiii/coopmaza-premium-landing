import { useState, useMemo } from "react";
import { Search, Download, FileText, ChevronDown, ArrowRight } from "lucide-react";

const DRIVE_VIEW = "https://drive.google.com/file/d/";

const allDocs = [
  { name: "Acta de Asamblea General 2024", category: "Asambleas", date: "11 Nov, 2025", format: "PDF", url: `${DRIVE_VIEW}1C29SMt7RZ19FFrBxeleznmc7MXi9Dp1k/view` },
  { name: "Acta de Asamblea General 2023", category: "Asambleas", date: "18 Sep, 2025", format: "PDF", url: `${DRIVE_VIEW}1wj7UByeyBlzwFP-aY4JA0BKDNR1U4pj7/view` },
  { name: "Acta de Asamblea General 2022", category: "Asambleas", date: "18 Sep, 2025", format: "PDF", url: `${DRIVE_VIEW}1IEpHKxZ7G_WwZEF2GnXeFBcTrNjUq8An/view` },
  { name: "Estados Financieros 2024", category: "Informes financieros", date: "14 Ago, 2025", format: "PDF", url: `${DRIVE_VIEW}1kC0QlmyL-7Xr43s7sB8KZMGJH0C7yPc1/view` },
  { name: "Estados Financieros 2023", category: "Informes financieros", date: "14 Ago, 2025", format: "PDF", url: `${DRIVE_VIEW}1nByrwlxXDBjcwoEztIXtfTZHuK2pPfy8/view` },
  { name: "Estados Financieros 2022", category: "Informes financieros", date: "14 Ago, 2025", format: "PDF", url: `${DRIVE_VIEW}19WLC1Nmbu9DVwaiG6Sk9HEXZWw5n_HOn/view` },
  { name: "Documentos Constitutivos – Parte I", category: "Gobierno corporativo", date: "20 Ene, 2025", format: "PDF", url: `${DRIVE_VIEW}14DTOGcaUqTc_OSjYUjfvwzRUD4lF445v/view` },
  { name: "Documentos Constitutivos – Estatutos", category: "Gobierno corporativo", date: "20 Ene, 2025", format: "PDF", url: `${DRIVE_VIEW}1BJHRQrXkMlKZNQJSIGkjmRf7vok3vPV3/view` },
];

const categoryOptions = [
  "Todas las categorías",
  "Asambleas",
  "Informes financieros",
  "Gobierno corporativo",
];

const sortOptions = ["Más recientes", "Más antiguos", "A-Z", "Z-A"];

export function TransparencyLibrary() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas las categorías");
  const [sort, setSort] = useState("Más recientes");
  const [catOpen, setCatOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(7);

  const filtered = useMemo(() => {
    let result = allDocs;
    if (category !== "Todas las categorías") {
      result = result.filter((d) => d.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q)
      );
    }
    if (sort === "A-Z") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Z-A") result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "Más antiguos") result = [...result].reverse();
    return result;
  }, [search, category, sort]);

  return (
    <section id="biblioteca" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-8">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Biblioteca de <span className="gradient-text">transparencia</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Consulta y descarga documentos, informes y políticas de Coopmaza.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-col sm:flex-row gap-3 mb-6" style={{ transitionDelay: "0.1s" }}>
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar documento..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
            />
          </div>

          {/* Category dropdown */}
          <div className="relative">
            <button
              onClick={() => { setCatOpen(!catOpen); setSortOpen(false); }}
              className="w-full sm:w-auto flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm hover:border-primary/30 transition-all min-w-[200px]"
            >
              <span className={category === "Todas las categorías" ? "text-muted-foreground/70" : "text-foreground"}>
                {category === "Todas las categorías" ? "Filtrar las categorías" : category}
              </span>
              <ChevronDown className={`size-4 text-muted-foreground transition-transform duration-300 ${catOpen ? "rotate-180" : ""}`} />
            </button>
            {catOpen && (
              <div
                className="absolute z-20 top-full mt-1 w-full rounded-xl border border-border bg-card shadow-card overflow-hidden"
                style={{ animation: "fade-up 0.2s ease-out" }}
              >
                {categoryOptions.map((o) => (
                  <button
                    key={o}
                    onClick={() => { setCategory(o); setCatOpen(false); }}
                    className={`w-full px-4 py-2.5 text-sm text-left hover:bg-primary-soft/30 transition-colors ${category === o ? "bg-primary-soft/20 text-primary font-medium" : ""}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => { setSortOpen(!sortOpen); setCatOpen(false); }}
              className="w-full sm:w-auto flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm hover:border-primary/30 transition-all min-w-[160px]"
            >
              <span className="text-foreground">{sort}</span>
              <ChevronDown className={`size-4 text-muted-foreground transition-transform duration-300 ${sortOpen ? "rotate-180" : ""}`} />
            </button>
            {sortOpen && (
              <div
                className="absolute z-20 top-full mt-1 w-full rounded-xl border border-border bg-card shadow-card overflow-hidden"
                style={{ animation: "fade-up 0.2s ease-out" }}
              >
                {sortOptions.map((o) => (
                  <button
                    key={o}
                    onClick={() => { setSort(o); setSortOpen(false); }}
                    className={`w-full px-4 py-2.5 text-sm text-left hover:bg-primary-soft/30 transition-colors ${sort === o ? "bg-primary-soft/20 text-primary font-medium" : ""}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="reveal-scale rounded-2xl border border-border/60 bg-card overflow-hidden shadow-soft">
          {/* Header */}
          <div className="hidden sm:grid grid-cols-[1fr_180px_120px_80px_80px] gap-4 px-6 py-3.5 border-b border-border/40 bg-surface/50">
            <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">Documento</span>
            <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">Categoría</span>
            <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">Fecha</span>
            <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">Formato</span>
            <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">Acciones</span>
          </div>

          {/* Rows */}
          {filtered.length === 0 ? (
            <div className="px-6 py-12 text-center text-sm text-muted-foreground">
              No se encontraron documentos con los filtros seleccionados.
            </div>
          ) : (
            filtered.slice(0, visibleCount).map((d, i) => (
              <div
                key={d.name}
                className={`group grid grid-cols-1 sm:grid-cols-[1fr_180px_120px_80px_80px] gap-2 sm:gap-4 items-center px-6 py-4 hover:bg-primary-soft/10 transition-colors duration-300 ${
                  i < filtered.slice(0, visibleCount).length - 1 ? "border-b border-border/30" : ""
                }`}
              >
                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-primary-soft/40 flex items-center justify-center text-primary shrink-0">
                    <FileText className="size-3.5" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {d.name}
                  </span>
                </div>
                {/* Category */}
                <span className="text-xs text-muted-foreground sm:text-sm">{d.category}</span>
                {/* Date */}
                <span className="text-xs text-muted-foreground">{d.date}</span>
                {/* Format */}
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-soft/30 px-2.5 py-1 rounded-full">
                    <FileText className="size-2.5" />
                    {d.format}
                  </span>
                </div>
                {/* Action */}
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-self-start sm:justify-self-center size-8 rounded-lg bg-primary-soft/40 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Download className="size-3.5" />
                </a>
              </div>
            ))
          )}
        </div>

        {/* Load more */}
        {visibleCount < filtered.length && (
          <div className="mt-8 text-center reveal">
            <button
              onClick={() => setVisibleCount((c) => c + 7)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary font-semibold text-sm px-7 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-0.5"
            >
              Cargar más documentos
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
