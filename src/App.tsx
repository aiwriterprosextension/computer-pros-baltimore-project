import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ManagedServices from "./pages/services/ManagedServices";
import Cybersecurity from "./pages/services/Cybersecurity";
import Microsoft365 from "./pages/services/Microsoft365";
import AIEnablement from "./pages/services/AIEnablement";
import ProjectsMigrations from "./pages/services/ProjectsMigrations";
import Pricing from "./pages/services/Pricing";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import DataProcessingAgreement from "./pages/legal/DataProcessingAgreement";
import CookiePolicy from "./pages/legal/CookiePolicy";
import BusinessAssociateAgreement from "./pages/legal/BusinessAssociateAgreement";
import NotFound from "./pages/NotFound";
import Booking from "./pages/Booking";
import FreeChecklist from "./pages/FreeChecklist";
import ChecklistThankYou from "./pages/ChecklistThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Service Pages */}
            <Route path="/services/managed-services" element={<ManagedServices />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/microsoft-365" element={<Microsoft365 />} />
            <Route path="/services/ai-enablement" element={<AIEnablement />} />
            <Route path="/services/projects-migrations" element={<ProjectsMigrations />} />
            <Route path="/services/pricing" element={<Pricing />} />
            
            {/* Main Pages */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Funnel Pages */}
            <Route path="/booking" element={<Booking />} />
            <Route path="/free-checklist" element={<FreeChecklist />} />
            <Route path="/checklist-thank-you" element={<ChecklistThankYou />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/data-processing-agreement" element={<DataProcessingAgreement />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/business-associate-agreement" element={<BusinessAssociateAgreement />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
