import logoSrc from "@/assets/coopmaza-logo.png";

type Props = { variant?: "dark" | "light"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  const isLight = variant === "light";
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Coopmaza — Unidos por el progreso"
        width={240}
        height={70}
        className={`h-14 sm:h-16 w-auto max-w-none object-contain transition-transform duration-500 hover:scale-105 ${isLight ? "brightness-0 invert" : ""}`}
        draggable={false}
      />
    </div>
  );
}



