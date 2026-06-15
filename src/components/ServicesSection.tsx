import React from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    id: "01",
    name: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    id: "02",
    name: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    id: "03",
    name: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    id: "04",
    name: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    id: "05",
    name: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(2.5rem,11vw,160px)] leading-none text-center mb-16 sm:mb-20 md:mb-28 tracking-tight">
            Services
          </h2>
        </FadeIn>

        {/* Services List Container */}
        <div className="w-full max-w-5xl border-t border-[#0C0C0C]/15">
          {services.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.1}
              y={30}
              className="border-b border-[#0C0C0C]/15"
            >
              <div className="flex items-start gap-6 sm:gap-12 md:gap-16 py-8 sm:py-10 md:py-12 text-left">
                {/* Left Number */}
                <span className="font-sans font-black text-[#0C0C0C] text-[clamp(2.5rem,10vw,140px)] leading-none select-none shrink-0 w-[1.5ch] md:w-[2ch]">
                  {item.id}
                </span>

                {/* Right stacked Title and Description */}
                <div className="flex flex-col justify-center space-y-2 sm:space-y-3 pt-1 md:pt-4">
                  <h3 className="font-sans font-medium uppercase text-[#0C0C0C] text-[clamp(1.1rem,2.2vw,2.1rem)] leading-none select-none">
                    {item.name}
                  </h3>
                  <p className="font-sans font-light leading-relaxed text-[#0C0C0C] opacity-70 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
