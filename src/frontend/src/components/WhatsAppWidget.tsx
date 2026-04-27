import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_URL =
  "https://wa.me/919751174855?text=Hello%20PAPADIX%20FOODS%2C%20I%20am%20interested%20in%20your%20products";

export default function WhatsAppWidget() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 group"
      data-ocid="whatsapp_widget"
    >
      {/* Tooltip */}
      <span
        className="
          absolute bottom-full right-0 mb-2 px-3 py-1.5
          text-xs font-medium text-white rounded-lg whitespace-nowrap
          opacity-0 pointer-events-none
          group-hover:opacity-100
          transition-opacity duration-200
          shadow-md
        "
        style={{ background: "#128C7E" }}
        role="tooltip"
      >
        Chat on WhatsApp
        <span
          className="absolute top-full right-4 border-4 border-transparent"
          style={{ borderTopColor: "#128C7E" }}
          aria-hidden="true"
        />
      </span>

      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-50"
        style={{ background: "#25D366" }}
        aria-hidden="true"
      />

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-ocid="whatsapp_widget.button"
        className="
          relative flex items-center justify-center
          w-14 h-14 rounded-full shadow-lg
          transition-transform duration-200
          hover:scale-110 focus:scale-110
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
        "
        style={{ background: "#25D366" }}
      >
        <SiWhatsapp className="text-white" size={28} />
      </a>
    </div>
  );
}
