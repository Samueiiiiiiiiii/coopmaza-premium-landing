import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";
import { ScrollProgress } from "@/components/coopmaza/ScrollProgress";
import { Navbar } from "@/components/coopmaza/Navbar";
import { Footer } from "@/components/coopmaza/Footer";
import { CTA } from "@/components/coopmaza/CTA";
import { BenefitsHero } from "@/components/coopmaza/beneficios/BenefitsHero";
import { BenefitsGrid } from "@/components/coopmaza/beneficios/BenefitsGrid";
import { ImpactBlock } from "@/components/coopmaza/beneficios/ImpactBlock";
import { CommunityImpact } from "@/components/coopmaza/beneficios/CommunityImpact";

export const Route = createFileRoute("/beneficios")({
  head: () => ({
    meta: [
      { title: "Beneficios — Coopmaza | Beneficios para socios" },
      {
        name: "description",
        content:
          "Descubre los beneficios de ser socio de Coopmaza: ahorros con tasas preferenciales, educación, salud, descuentos, apoyo comunitario y más.",
      },
      { property: "og:title", content: "Beneficios — Coopmaza" },
      {
        property: "og:description",
        content:
          "Beneficios diseñados para transformar la vida de nuestros socios y sus familias.",
      },
    ],
  }),
  component: BeneficiosPage,
});

function BeneficiosPage() {
  useReveal();
  useSpotlight();
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main>
        <BenefitsHero />
        <BenefitsGrid />
        <ImpactBlock />
        <CommunityImpact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
