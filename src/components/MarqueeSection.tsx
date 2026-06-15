import React, { useState, useEffect, useRef } from "react";

const row1Urls = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row2Urls = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export default function MarqueeSection() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Absolute top position in the document
      const sectionTop = window.scrollY + rect.top;
      // Scroll offset as requested: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Triple each array for seamless endless scrolling
  const tripledRow1 = [...row1Urls, ...row1Urls, ...row1Urls];
  const tripledRow2 = [...row2Urls, ...row2Urls, ...row2Urls];

  // Moves RIGHT: offset - 200
  const row1Transform = `translateX(${offset - 200}px)`;

  // Moves LEFT: -(offset - 200)
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <div
      id="marquee-section"
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 - Moves Right */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div
            className="flex gap-3 transition-transform duration-75 ease-out"
            style={{
              transform: row1Transform,
              willChange: "transform",
            }}
          >
            {tripledRow1.map((url, index) => (
              <img
                key={`r1-${index}`}
                src={url}
                alt={`Santhosh portfolio work ${index + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[420px] h-[270px] shrink-0 object-cover rounded-2xl select-none"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Left */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div
            className="flex gap-3 transition-transform duration-75 ease-out"
            style={{
              transform: row2Transform,
              willChange: "transform",
            }}
          >
            {tripledRow2.map((url, index) => (
              <img
                key={`r2-${index}`}
                src={url}
                alt={`Santhosh portfolio creative work ${index + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[420px] h-[270px] shrink-0 object-cover rounded-2xl select-none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
