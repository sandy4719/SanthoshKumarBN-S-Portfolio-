import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LiveProjectButton from "./LiveProjectButton";
import FadeIn from "./FadeIn";

const projects = [
  {
    num: "01",
    category: "Client Work",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
    link: "https://nextlevelsite.example.com",
  },
  {
    num: "02",
    category: "Personal Project",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
    link: "https://aurabrand.example.com",
  },
  {
    num: "03",
    category: "Client Work",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
    link: "https://solarisdigital.example.com",
  },
];

export default function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] pb-32 -mt-10 sm:-mt-12 md:-mt-14 z-10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pt-28">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,11vw,160px)] leading-none text-center mb-20 tracking-tight">
            Project
          </h2>
        </FadeIn>

        {/* Sticky stacking container */}
        <div className="relative flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            // Target scale calculation for card stacking effect as described:
            // targetScale = 1 - (totalCards - 1 - index) * 0.03
            const targetScale = 1 - (projects.length - 1 - index) * 0.03;

            return (
              <ProjectCard
                key={project.num}
                project={project}
                index={index}
                targetScale={targetScale}
                isMobile={isMobile}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  targetScale: number;
  isMobile: boolean;
  key?: any;
}

function ProjectCard({ project, index, targetScale, isMobile }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Tracks the scroll of this specific card container to handle the scaling transition
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Scales down slightly as we scroll past the center
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  // Smoothly damp the card opacity so it fades out very slightly when covered
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);

  // Combined top calculation for responsive sticky layering
  const baseOffset = isMobile ? "6rem" : "8rem";
  const indexOffset = `${index * 28}px`;
  const stickyTop = `calc(${baseOffset} + ${indexOffset})`;

  return (
    <div
      ref={cardRef}
      className="sticky h-[85vh] w-full flex items-start justify-center z-10"
      style={{
        top: stickyTop,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          transformOrigin: "top center",
        }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA]/30 hover:border-[#D7E2EA]/50 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col justify-between h-auto gap-6 sm:gap-8 transition-colors duration-500"
      >
        {/* Top Header Row of Project Card */}
        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center w-full gap-4 pb-4 border-b border-[#D7E2EA]/10">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Massive Stealth styled Identifier */}
            <span className="font-sans font-black text-[#D7E2EA]/20 text-[clamp(2.2rem,6vw,90px)] leading-none select-none">
              {project.num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#D7E2EA]/50 font-medium">
                {project.category}
              </span>
              <h3 className="font-extrabold uppercase tracking-tight text-[clamp(1.2rem,2.8vw,2.3rem)] text-[#D7E2EA] leading-none mt-1.5 font-sans">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="shrink-0 sm:w-auto w-full">
            <LiveProjectButton
              className="sm:w-auto w-full text-xs sm:text-sm py-2 sm:py-2.5 px-6 sm:px-8 border shadow-sm transition-all hover:scale-105 active:scale-95"
              onClick={() => {
                alert(`Redirecting dummy link to portfolio preview of ${project.name}!`);
              }}
            />
          </div>
        </div>

        {/* Bottom Image grid Row */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 w-full items-stretch flex-grow min-h-0">
          {/* Column 1 - 40% Width with 2 stacked images */}
          <div className="w-[40%] flex flex-col gap-4 sm:gap-6 justify-between select-none">
            <div
              className="w-full relative overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10 shadow-md group shrink-0"
              style={{
                height: "clamp(100px, 16vw, 230px)",
              }}
            >
              <img
                src={project.images.col1_1}
                alt={`${project.name} detail frame 1`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div
              className="w-full relative overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10 shadow-md group flex-grow"
              style={{
                height: "clamp(120px, 22vw, 340px)",
              }}
            >
              <img
                src={project.images.col1_2}
                alt={`${project.name} detail frame 2`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Column 2 - 60% Width with 1 tall image */}
          <div className="w-[60%] flex select-none">
            <div className="w-full relative overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10 shadow-md group">
              <img
                src={project.images.col2}
                alt={`${project.name} primary preview`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
