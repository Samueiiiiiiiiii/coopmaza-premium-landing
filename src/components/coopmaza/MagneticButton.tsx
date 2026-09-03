import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "white";
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-[transform,box-shadow,background] duration-300 ease-out will-change-transform";
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-glow shadow-card",
    ghost:
      "bg-transparent text-foreground hover:bg-primary-soft/50",
    white:
      "bg-white text-primary shadow-card hover:shadow-lift",
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
