import React from "react";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

export default function App() {
  return (
    <div className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans antialiased overflow-x-clip border-box selection:bg-purple-500/30 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee horizontal work tiles */}
      <MarqueeSection />

      {/* 3. About Section with 3D elements and scroll-reveal characters */}
      <AboutSection />

      {/* 4. Services list with custom delays */}
      <ServicesSection />

      {/* 5. Projects sticky vertical stacking cards layout */}
      <ProjectsSection />

      {/* 6. Footer section with contact details */}
      <Footer />

      {/* 7. Dynamic Contact Modal drawer */}
      <ContactModal />
    </div>
  );
}
