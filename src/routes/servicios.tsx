import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";
import { ScrollProgress } from "@/components/coopmaza/ScrollProgress";
import { Navbar } from "@/components/coopmaza/Navbar";
import { Footer } from "@/components/coopmaza/Footer";
import { CTA } from "@/components/coopmaza/CTA";
import { ServicesHero } from "@/components/coopmaza/servicios/ServicesHero";
import { ServicesGrid } from "@/components/coopmaza/servicios/ServicesGrid";
import { DigitalBanner } from "@/components/coopmaza/servicios/DigitalBanner";
import { HowItWorks } from "@/components/coopmaza/servicios/HowItWorks";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Coopmaza | Soluciones financieras" },
      {
        name: "description",
        content:
          "Conoce los servicios de Coopmaza: ahorros, préstamos, inversiones, seguros, educación financiera y más, diseñados para cada etapa de tu vida.",
      },
      { property: "og:title", content: "Servicios — Coopmaza" },
      {
        property: "og:description",
        content:
          "Soluciones financieras para cada etapa de tu vida. Conoce todos nuestros servicios.",
      },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  useReveal();
  useSpotlight();
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <DigitalBanner />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
