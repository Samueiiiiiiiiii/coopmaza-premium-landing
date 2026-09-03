import {
  PiggyBank,
  Wallet,
  Sparkles,
  FileBadge,
  Landmark,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  Headphones,
  Car,
  Sofa,
  Briefcase,
  Crown,
  BookOpen,
  Coins,
} from "lucide-react";

const products = [
  { icon: PiggyBank, title: "Cuenta de aportaciones", desc: "Forma parte de la cooperativa y participa de sus beneficios como socio." },
  { icon: Wallet, title: "Cuenta de ahorro", desc: "Ahorra de forma segura y haz crecer tu dinero con condiciones favorables." },
  { icon: Sparkles, title: "Navisan", desc: "Plan de ahorro programado para que disfrutes la temporada navideña sin preocupaciones." },
  { icon: FileBadge, title: "Certificados financieros", desc: "Invierte tu dinero a plazo fijo con atractivas tasas de rentabilidad." },
];

const loanTypes = [
  { icon: Car, title: "Vehículos de motor", desc: "Financiamiento para tu auto o motor nuevo o usado." },
  { icon: Sofa, title: "Enseres", desc: "Adquiere los electrodomésticos y muebles que necesitas." },
  { icon: Briefcase, title: "Mipymes", desc: "Impulsa tu pequeña o mediana empresa con capital ágil." },
  { icon: Crown, title: "Gerencial", desc: "Soluciones financieras flexibles para profesionales y ejecutivos." },
  { icon: BookOpen, title: "Escolar", desc: "Apoyo para la educación tuya y de tu familia." },
  { icon: Coins, title: "Corriente", desc: "Préstamo para cubrir tus necesidades del día a día." },
];

const services = [
  { icon: TrendingUp, title: "Inversiones", desc: "Haz que tu dinero trabaje por ti con opciones seguras y rentables." },
  { icon: ShieldCheck, title: "Seguros", desc: "Protege lo que más importa con planes pensados para tu familia y patrimonio." },
  { icon: GraduationCap, title: "Educación Financiera", desc: "Capacitaciones y talleres para tomar decisiones informadas." },
  
  { icon: HeartHandshake, title: "Apoyo Comunitario", desc: "Programas y proyectos para el bienestar de nuestra comunidad." },
  { icon: Headphones, title: "Atención y Asesoría", desc: "Servicio cercano, transparente y confiable, siempre listo para ayudarte." },
  { icon: Landmark, title: "Convenios y Alianzas", desc: "Acuerdos estratégicos con instituciones para ofrecerte más beneficios y oportunidades." },
];

type Item = { icon: typeof PiggyBank; title: string; desc: string };

function Card({ s }: { s: Item }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 p-6 shadow-soft hover-lift spotlight sheen">
      <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary-soft/70 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:-rotate-6">
        <s.icon className="size-5" strokeWidth={1.8} />
      </div>
      <h3 className="mt-4 font-bold text-base text-foreground">{s.title}</h3>
      <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  );
}

function SectionHeader({ tag, title, accent, desc }: { tag: string; title: string; accent: string; desc: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto reveal">
      <span className="inline-block text-[11px] font-bold tracking-widest text-primary">{tag}</span>
      <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
        {title} <span className="gradient-text-anim">{accent}</span>
      </h2>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section id="lista" className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20 lg:space-y-28">
        {/* PRODUCTOS */}
        <div>
          <SectionHeader
            tag="PRODUCTOS"
            title="Nuestros productos"
            accent="para ti"
            desc="Soluciones de ahorro e inversión diseñadas para hacer crecer tu dinero."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-stagger>
            {products.map((p) => <Card key={p.title} s={p} />)}
          </div>

          {/* Préstamos: bloque destacado */}
          <div className="mt-10 relative overflow-hidden rounded-[2rem] bg-primary-soft/40 border border-primary/15 p-6 sm:p-10 reveal">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/15 blur-3xl animate-float" />
            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-card/80 border border-border/60 px-3 py-1 text-[11px] font-bold tracking-widest text-primary">
                  <Landmark className="size-3.5" /> PRÉSTAMOS
                </span>
                <h3 className="mt-3 font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-[1.05]">
                  Financiamiento <span className="gradient-text-anim">a tu medida</span>
                </h3>
                <p className="mt-2 text-muted-foreground max-w-xl text-sm">
                  Tasas justas y condiciones flexibles para cumplir tus metas personales, familiares y de negocio.
                </p>
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>
              {loanTypes.map((l) => <Card key={l.title} s={l} />)}
            </div>
          </div>
        </div>

        {/* SERVICIOS */}
        <div>
          <SectionHeader
            tag="SERVICIOS"
            title="Nuestros servicios"
            accent="que te acompañan"
            desc="Más que productos financieros: soluciones que apoyan tu vida y tu comunidad."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>
            {services.map((s) => <Card key={s.title} s={s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
