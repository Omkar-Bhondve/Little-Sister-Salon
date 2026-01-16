import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "15123835821"; // Your phone number with country code (no + or spaces)
  const defaultMessage =
    "Hi! I'd like to book an appointment at Little Sister Salon. When are you available?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-4 z-50 md:hidden w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-premium-lg hover:shadow-glow-gold transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 animate-pulse group-hover:animate-none" />

      {/* Notification Badge */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">1</span>
      </div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-premium">
        Chat with us!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45" />
      </div>
    </button>
  );
};

export default WhatsAppButton;
