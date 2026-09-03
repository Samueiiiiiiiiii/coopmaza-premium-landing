import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";
import { Preloader } from "@/components/coopmaza/Preloader";
import { ScrollProgress } from "@/components/coopmaza/ScrollProgress";
import { Navbar } from "@/components/coopmaza/Navbar";
import { Hero } from "@/components/coopmaza/Hero";
import { Values } from "@/components/coopmaza/Values";
import { Benefits } from "@/components/coopmaza/Benefits";
import { About } from "@/components/coopmaza/About";
import { Testimonials } from "@/components/coopmaza/Testimonials";
import { CTA } from "@/components/coopmaza/CTA";
import { Footer } from "@/components/coopmaza/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coopmaza - Unidos por el progreso" },
      {
        name: "description",
        content:
          "Cooperativa Coopmaza: ahorro, crédito, educación y bienestar para nuestros socios. Únete a más de 500 personas que ya confían en nosotros.",
      },
      { property: "og:title", content: "Coopmaza — Unidos por el progreso" },
      {
        property: "og:description",
        content:
          "Soluciones financieras justas, educación y comunidad. Hazte socio de Coopmaza y construyamos juntos un futuro mejor.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  useSpotlight();
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Benefits />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
