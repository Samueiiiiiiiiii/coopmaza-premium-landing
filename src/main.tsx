import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { Buffer } from 'buffer';

// Polyfill Buffer for @react-pdf/renderer
(globalThis as any).Buffer = Buffer;

import './index.css';
import './styles.css';

// Landing Website Components
import { useReveal } from '@/hooks/use-reveal';
import { useSpotlight } from '@/hooks/use-spotlight';
import { Preloader } from '@/components/coopmaza/Preloader';
import { ScrollProgress } from '@/components/coopmaza/ScrollProgress';
import { Navbar } from '@/components/coopmaza/Navbar';
import { Hero } from '@/components/coopmaza/Hero';
import { Values } from '@/components/coopmaza/Values';
import { Benefits } from '@/components/coopmaza/Benefits';
import { About } from '@/components/coopmaza/About';
import { Testimonials } from '@/components/coopmaza/Testimonials';
import { CTA } from '@/components/coopmaza/CTA';
import { Footer } from '@/components/coopmaza/Footer';

import { AboutHero } from '@/components/coopmaza/about/AboutHero';
import { History } from '@/components/coopmaza/about/History';
import { MissionVision } from '@/components/coopmaza/about/MissionVision';
import { ValuesGrid } from '@/components/coopmaza/about/ValuesGrid';

import { BenefitsHero } from '@/components/coopmaza/beneficios/BenefitsHero';
import { BenefitsGrid } from '@/components/coopmaza/beneficios/BenefitsGrid';
import { ImpactBlock } from '@/components/coopmaza/beneficios/ImpactBlock';
import { CommunityImpact } from '@/components/coopmaza/beneficios/CommunityImpact';

import { ContactHero } from '@/components/coopmaza/contacto/ContactHero';
import { ContactCards } from '@/components/coopmaza/contacto/ContactCards';
import { ContactMap } from '@/components/coopmaza/contacto/ContactMap';
import { ContactFAQ } from '@/components/coopmaza/contacto/ContactFAQ';
import { ContactCTA } from '@/components/coopmaza/contacto/ContactCTA';

import { ServicesHero } from '@/components/coopmaza/servicios/ServicesHero';
import { ServicesGrid } from '@/components/coopmaza/servicios/ServicesGrid';
import { DigitalBanner } from '@/components/coopmaza/servicios/DigitalBanner';
import { HowItWorks } from '@/components/coopmaza/servicios/HowItWorks';

import { TransparencyHero } from '@/components/coopmaza/transparencia/TransparencyHero';
import { TransparencyCategories } from '@/components/coopmaza/transparencia/TransparencyCategories';
import { TransparencyCommitment } from '@/components/coopmaza/transparencia/TransparencyCommitment';
import { TransparencyFeatured } from '@/components/coopmaza/transparencia/TransparencyFeatured';
import { TransparencyLibrary } from '@/components/coopmaza/transparencia/TransparencyLibrary';
import { TransparencyCTA } from '@/components/coopmaza/transparencia/TransparencyCTA';

// Digital Portal Components
import { PublicLayout } from './layouts/PublicLayout';
import DigitalLanding from './pages/Landing';
import AbrirCuenta from './pages/AbrirCuenta';
import Prestamos from './pages/Prestamos';
import PrestamoDetail from './pages/prestamos/PrestamoDetail';
import Login from './pages/Login';
import { AdminLayout } from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import SolicitudDetail from './pages/admin/SolicitudDetail';

// ── Landing Page Views ──
function IndexPage() {
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

// ──────────────────────────────────────────────
// ROUTE DEFINITIONS
// ──────────────────────────────────────────────
const rootRoute = createRootRoute({});

// Main Landing Website Routes (coopmaza.com)
const landingIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});

const nosotrosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/nosotros',
  component: NosotrosPage,
});

const beneficiosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/beneficios',
  component: BeneficiosPage,
});

const contactoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contacto',
  component: ContactoPage,
});

const serviciosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/servicios',
  component: ServiciosPage,
});

const transparenciaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/transparencia',
  component: TransparenciaPage,
});

// Digital Portal Routes (/digital/*)
const digitalRootRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/digital',
});

const digitalPublicLayoutRoute = createRoute({
  getParentRoute: () => digitalRootRoute,
  id: 'digitalPublic',
  component: PublicLayout,
});

const digitalIndexRoute = createRoute({
  getParentRoute: () => digitalPublicLayoutRoute,
  path: '/',
  component: DigitalLanding,
});

const digitalAbrirCuentaRoute = createRoute({
  getParentRoute: () => digitalPublicLayoutRoute,
  path: '/abrir-cuenta',
  component: AbrirCuenta,
});

const digitalPrestamosRoute = createRoute({
  getParentRoute: () => digitalPublicLayoutRoute,
  path: '/prestamos',
  component: Prestamos,
});

const digitalPrestamoDetailRoute = createRoute({
  getParentRoute: () => digitalPublicLayoutRoute,
  path: '/prestamos/$tipo',
  component: PrestamoDetail,
});

const loginRoute = createRoute({
  getParentRoute: () => digitalRootRoute,
  path: '/login',
  component: Login,
});

const adminRoute = createRoute({
  getParentRoute: () => digitalRootRoute,
  path: '/admin',
  component: AdminLayout,
});

const dashboardRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/',
  component: Dashboard,
});

const solicitudesRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/solicitudes',
  component: Dashboard,
});

const solicitudDetailRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/solicitudes/$id',
  component: SolicitudDetail,
});

// ──────────────────────────────────────────────
// ROUTE TREE
// ──────────────────────────────────────────────
const routeTree = rootRoute.addChildren([
  landingIndexRoute,
  nosotrosRoute,
  beneficiosRoute,
  contactoRoute,
  serviciosRoute,
  transparenciaRoute,
  digitalRootRoute.addChildren([
    digitalPublicLayoutRoute.addChildren([
      digitalIndexRoute,
      digitalAbrirCuentaRoute,
      digitalPrestamosRoute,
      digitalPrestamoDetailRoute,
    ]),
    loginRoute,
    adminRoute.addChildren([dashboardRoute, solicitudesRoute, solicitudDetailRoute]),
  ]),
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
