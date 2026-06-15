import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { triggerContactModal } from "./ContactButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/10 pt-20 pb-12 relative z-10 overflow-hidden">
      {/* Background ambient lighting/gradient */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-16">
          {/* Left Column: Get in Touch Title */}
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
              WANT TO START A PROJECT?
            </span>
            <h2 className="hero-heading font-black uppercase text-[clamp(2rem,5vw,72px)] leading-none mt-2 select-none tracking-tight">
              LET'S TALK
            </h2>
            <p className="text-sm font-light text-[#D7E2EA]/60 max-w-sm mt-4 leading-relaxed">
              Have an idea or need a creative hand on your digital products? Get in touch and let's craft a captivating experience together.
            </p>
            <button
              onClick={() => triggerContactModal()}
              className="mt-6 flex items-center gap-2 group text-sm font-bold uppercase tracking-wider text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
            >
              Start standard inquiry
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Column: Contact Details */}
          <div className="md:justify-self-end space-y-6 sm:space-y-8 w-full md:max-w-xs">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/40 block mb-2 font-medium">
                DROP A LINE
              </span>
              <a
                href="mailto:santhoshkumarbn07@gmail.com"
                className="flex items-center gap-3 text-base sm:text-lg font-semibold hover:text-purple-400 transition-colors break-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D7E2EA]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>santhoshkumarbn07@gmail.com</span>
              </a>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/40 block mb-2 font-medium">
                CALL DIRECTLY
              </span>
              <a
                href="tel:9080369918"
                className="flex items-center gap-3 text-base sm:text-lg font-semibold hover:text-purple-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D7E2EA]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 90803 69918</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#D7E2EA]/40">
          <p>© {currentYear} Santhosh Kumar BN. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-[#D7E2EA] transition-colors">About</a>
            <a href="#services" className="hover:text-[#D7E2EA] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#D7E2EA] transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
