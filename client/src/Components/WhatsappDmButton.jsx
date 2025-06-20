import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappDmButton = () => {
  const phoneNumber = "919404900388";
  const message = "Hi! I'm interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-green-500 bg-green-100 text-green-700 font-medium transition-all duration-300 hover:bg-green-600 hover:text-white"
    >
      <FaWhatsapp className="text-lg" />
      <span className="text-sm sm:text-base">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsappDmButton;
