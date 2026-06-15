import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "3D Modeling",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handleOpen);
    return () => window.removeEventListener("open-contact-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Compile pre-filled subject and body for standard mailto dispatch
    const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formState.projectType} - ${formState.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Santhosh,\n\n` +
      `You have received a new project inquiry from your website portfolio:\n\n` +
      `• Client Name: ${formState.name}\n` +
      `• Client Email: ${formState.email}\n` +
      `• Category: ${formState.projectType}\n\n` +
      `Project Brief / Details:\n` +
      `"${formState.message}"\n\n` +
      `Best regards,\n` +
      `${formState.name}`
    );

    // Trigger the client mail program
    window.location.href = `mailto:santhoshkumarbn07@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setFormState({ name: "", email: "", projectType: "3D Modeling", message: "" });
      }, 2500);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border-2 border-[#D7E2EA]/20 bg-[#0C0C0C] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#D7E2EA]/10 hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-[#D7E2EA]" />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">Message Sent!</h3>
                <p className="text-sm font-light text-[#D7E2EA]/60 max-w-xs">
                  Thank you! Santhosh will get back to you within 24 hours to discuss your project.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium sm:block hidden">
                    LET'S CREATE SOMETHING REMARKABLE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight hero-heading mt-1">
                    START A PROJECT
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[0.8rem] uppercase tracking-wider text-[#D7E2EA]/60 mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#141414] border border-[#D7E2EA]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.8rem] uppercase tracking-wider text-[#D7E2EA]/60 mb-2 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#141414] border border-[#D7E2EA]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.8rem] uppercase tracking-wider text-[#D7E2EA]/60 mb-2 font-medium">
                      What can Santhosh help you with?
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full bg-[#141414] border border-[#D7E2EA]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                    >
                      <option value="3D Modeling">3D Modeling & Assets</option>
                      <option value="Rendering">Product Rendering</option>
                      <option value="Motion Design">Motion Graphics & Animations</option>
                      <option value="Branding">Branding & Corporate Identity</option>
                      <option value="Web Design">Full Web Experience Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.8rem] uppercase tracking-wider text-[#D7E2EA]/60 mb-2 font-medium">
                      Project Brief
                    </label>
                    <textarea
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell Santhosh about your vision, goals, and timeline..."
                      rows={4}
                      className="w-full bg-[#141414] border border-[#D7E2EA]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center pt-2 gap-4">
                    <div className="text-xs text-[#D7E2EA]/40 space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        <a href="mailto:santhoshkumarbn07@gmail.com" className="hover:text-purple-400 transition-colors">santhoshkumarbn07@gmail.com</a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        <a href="tel:9080369918" className="hover:text-purple-400 transition-colors">9080369918</a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Remote / Worldwide</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="sm:w-auto w-full contact-btn px-8 py-3.5 text-xs sm:text-sm rounded-full text-white uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
