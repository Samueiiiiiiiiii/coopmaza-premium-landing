import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Inicio", href: "/", internal: true },
  { label: "Nosotros", href: "/nosotros", internal: true },
  { label: "Beneficios", href: "/beneficios", internal: true },
  { label: "Servicios", href: "/servicios", internal: true },
  { label: "Transparencia", href: "/transparencia", internal: true },
  { label: "Contacto", href: "/contacto", internal: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const active =
    pathname === "/nosotros"
      ? "/nosotros"
      : pathname === "/beneficios"
      ? "/beneficios"
      : pathname === "/servicios"
      ? "/servicios"
      : pathname === "/contacto"
      ? "/contacto"
      : pathname === "/transparencia"
      ? "/transparencia"
      : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-1.5" : "py-2.5"
      }`}
      style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "glass border border-border/60 shadow-soft px-4 py-1.5"
              : "px-2 py-1"
          }`}
        >
          <Link to="/" className="shrink-0 ml-0 sm:ml-1 lg:ml-2">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href;
              const cls = `relative px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
              }`;
              const underline = (
                <span
                  className={`absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-primary transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              );
              return l.internal ? (
                <Link key={l.href} to={l.href} className={cls}>
                  {l.label}
                  {underline}
                </Link>
              ) : (
                <a key={l.href} href={l.href} className={cls}>
                  {l.label}
                  {underline}
                </a>
              );
            })}
          </nav>


          <div className="flex items-center gap-2">
            <a href="/digital" className="hidden lg:inline-flex">
              <MagneticButton
                variant="primary"
                className="!px-5 !py-2.5"
              >
                Hazte socio
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex size-10 items-center justify-center rounded-full bg-surface border border-border"
              aria-label="Menú"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[480px] mt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass rounded-3xl border border-border/60 p-4 shadow-soft">
            <nav className="flex flex-col">
              {links.map((l, i) => {
                const style = {
                  animation: open
                    ? `fade-up 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s both`
                    : "none",
                };
                const cls =
                  "py-3 px-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary-soft/40 rounded-xl transition-all";
                return l.internal ? (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={cls}
                    style={style}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cls}
                    style={style}
                  >
                    {l.label}
                  </a>
                );
              })}
              <a href="/digital">
                <MagneticButton variant="primary" className="mt-3 justify-center w-full">
                  Hazte socio
                  <ArrowRight className="size-4" />
                </MagneticButton>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
