import React from "react";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton, { triggerContactModal } from "./ContactButton";

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] select-none">
      
      {/* Absolute low-opacity background heading for modern layered look */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2 className="hero-heading text-[17.5vw] whitespace-nowrap opacity-10 font-bold select-none leading-none">
          HI, I&apos;M SANDY
        </h2>
      </div>



      {/* Floating Panel: Mini Service Indicators list on High Screens */}
      <div className="absolute bottom-[28%] left-4 sm:left-6 lg:left-10 w-[240px] p-4 z-40 hidden lg:block select-none">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3.5 group opacity-90 cursor-pointer hover:opacity-100 transition-opacity" onClick={() => handleScrollTo("services")}>
            <span className="text-xl font-black italic text-[#D7E2EA]/70">01</span>
            <div className="h-[1px] w-6 bg-white/30 group-hover:w-8 transition-all"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D7E2EA]">3D Modeling</span>
          </div>
          <div className="flex items-center gap-3.5 group opacity-50 cursor-pointer hover:opacity-100 transition-opacity" onClick={() => handleScrollTo("services")}>
            <span className="text-xl font-black italic text-[#D7E2EA]/70">02</span>
            <div className="h-[1px] w-6 bg-white/30 group-hover:w-8 transition-all"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D7E2EA]">Rendering</span>
          </div>
          <div className="flex items-center gap-3.5 group opacity-50 cursor-pointer hover:opacity-100 transition-opacity" onClick={() => handleScrollTo("services")}>
            <span className="text-xl font-black italic text-[#D7E2EA]/70">03</span>
            <div className="h-[1px] w-6 bg-white/30 group-hover:w-8 transition-all"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D7E2EA]">Motion Design</span>
          </div>
        </div>
      </div>

      {/* 1. Navbar with J. Logo on Left */}
      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="text-xs sm:text-sm md:text-base font-black tracking-wider text-[#D7E2EA] font-sans pr-4 cursor-default selection:bg-transparent uppercase">
            Santhosh Kumar BN
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-5 sm:gap-8 md:gap-10 lg:gap-12">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("about");
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("services");
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70"
            >
              Price
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("projects");
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                triggerContactModal();
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70"
            >
              Contact
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Main content layer containing Heading */}
      <div className="relative flex-grow flex items-center justify-center z-20 pointer-events-none">
        <div className="w-full overflow-hidden text-center">
          <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m sandy
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait with Magnet component */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] pointer-events-auto flex justify-center"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center"
        >
          <img
            src="https://cdn.corenexis.com/f/FspyYd0icrL.png"
            alt="Santhosh Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover select-none filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          />
        </Magnet>
      </FadeIn>

      {/* Floating Center Indicator: Scroll to explore */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none md:block hidden">
        <div className="flex flex-col items-center gap-1 opacity-40 animate-bounce-slow">
          <span className="text-[9px] uppercase tracking-[0.6em] text-[#D7E2EA] font-semibold text-center whitespace-nowrap pl-[0.6em]">
            Scroll to explore
          </span>
        </div>
      </div>

      {/* Bottom Bar info & button */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <div className="flex flex-col items-start">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[3.2vw] sm:text-[1.8vw] md:text-[1.3vw] lg:text-[1.1vw]">
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          
          {/* Theme Dynamic Addition: PULSING Hire Status marker */}
          <FadeIn delay={0.45} y={20}>
            <div className="flex items-center gap-2 mt-4 select-none bg-white/[0.03] border border-white/5 rounded-full px-3 py-1 scale-95 origin-left shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_6px_#10b981]"></span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#D7E2EA]/60 font-semibold select-none">
                Available for hire
              </span>
            </div>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
