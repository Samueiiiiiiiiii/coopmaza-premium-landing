import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";
import { ScrollProgress } from "@/components/coopmaza/ScrollProgress";
import { Navbar } from "@/components/coopmaza/Navbar";
import { Footer } from "@/components/coopmaza/Footer";
import { ContactHero } from "@/components/coopmaza/contacto/ContactHero";
import { ContactCards } from "@/components/coopmaza/contacto/ContactCards";
import { ContactMap } from "@/components/coopmaza/contacto/ContactMap";
import { ContactFAQ } from "@/components/coopmaza/contacto/ContactFAQ";
import { ContactCTA } from "@/components/coopmaza/contacto/ContactCTA";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Coopmaza | Cooperativa Mariano Zaragoza" },
      {
        name: "description",
        content:
          "Contáctanos. Estamos listos para ayudarte. Visítanos, llámanos o escríbenos.",
      },
      { property: "og:title", content: "Contacto — Coopmaza" },
      {
        property: "og:description",
        content:
          "Hablemos, estamos para servirte. Cooperativa Coopmaza, Plaza López, Santo Cerro, La Vega.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  useReveal();
  useSpotlight();
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main>
        <ContactHero />
        <ContactCards />
        <ContactMap />
        <ContactFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
