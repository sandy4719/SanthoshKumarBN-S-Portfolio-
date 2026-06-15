import React from "react";

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  id?: string;
}

export function triggerContactModal() {
  window.dispatchEvent(new CustomEvent("open-contact-modal"));
}

export default function ContactButton({ className = "", onClick, id }: ContactButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else {
      triggerContactModal();
    }
  };

  return (
    <button
      id={id || "contact-btn-trigger"}
      onClick={handleClick}
      className={`contact-btn rounded-full text-white font-medium uppercase tracking-widest cursor-pointer
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base ${className}`}
    >
      Contact Me
    </button>
  );
}
