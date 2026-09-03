import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";
import { ScrollProgress } from "@/components/coopmaza/ScrollProgress";
import { Navbar } from "@/components/coopmaza/Navbar";
import { Footer } from "@/components/coopmaza/Footer";
import { TransparencyHero } from "@/components/coopmaza/transparencia/TransparencyHero";
import { TransparencyCategories } from "@/components/coopmaza/transparencia/TransparencyCategories";
import { TransparencyCommitment } from "@/components/coopmaza/transparencia/TransparencyCommitment";
import { TransparencyFeatured } from "@/components/coopmaza/transparencia/TransparencyFeatured";
import { TransparencyLibrary } from "@/components/coopmaza/transparencia/TransparencyLibrary";
import { TransparencyCTA } from "@/components/coopmaza/transparencia/TransparencyCTA";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparencia — Coopmaza | Cooperativa Mariano Zaragoza" },
      {
        name: "description",
        content:
          "Accede a información transparente de Coopmaza: políticas, informes financieros, memorias anuales, gobierno corporativo y más.",
      },
      { property: "og:title", content: "Transparencia — Coopmaza" },
      {
        property: "og:description",
        content:
          "Transparencia que genera confianza. Consulta documentos, informes y políticas de nuestra cooperativa.",
      },
    ],
  }),
  component: TransparenciaPage,
});

function TransparenciaPage() {
  useReveal();
  useSpotlight();
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main>
        <TransparencyHero />
        <TransparencyCategories />
        <TransparencyCommitment />
        <TransparencyFeatured />
        <TransparencyLibrary />
        <TransparencyCTA />
      </main>
      <Footer />
    </div>
  );
}
