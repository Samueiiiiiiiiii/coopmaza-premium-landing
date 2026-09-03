import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";
import { ScrollProgress } from "@/components/coopmaza/ScrollProgress";
import { Navbar } from "@/components/coopmaza/Navbar";
import { Footer } from "@/components/coopmaza/Footer";
import { AboutHero } from "@/components/coopmaza/about/AboutHero";
import { History } from "@/components/coopmaza/about/History";
import { MissionVision } from "@/components/coopmaza/about/MissionVision";
import { ValuesGrid } from "@/components/coopmaza/about/ValuesGrid";
import { CTA } from "@/components/coopmaza/CTA";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Coopmaza | Cooperativa Mariano Zaragoza" },
      {
        name: "description",
        content:
          "Conoce la historia, misión, visión y valores de la Cooperativa Mariano Zaragoza, ubicada en Plaza López, Santo Cerro, La Vega.",
      },
      { property: "og:title", content: "Nosotros — Coopmaza" },
      {
        property: "og:description",
        content:
          "Una cooperativa sólida, solvente y solidaria al servicio de Carrera de Palmas y zonas aledañas.",
      },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  useReveal();
  useSpotlight();
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main>
        <AboutHero />
        <History />
        <MissionVision />
        <ValuesGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
