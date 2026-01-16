import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const phoneNumber = "15124796911";
  const defaultMessage =
    "Hi! I'd like to book an appointment at The Cut Hut. When are you available?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="hidden md:block fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50">
      {isExpanded && (
        <div className="absolute bottom-20 md:bottom-24 right-0 bg-background border border-gold rounded-xl shadow-premium-lg p-4 w-64 md:w-72 animate-fade-in">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
          <h3 className="font-display font-bold text-foreground mb-3 text-base md:text-lg">
            Contact Us
          </h3>
          <div className="space-y-2">
            <a
              href="tel:+15124796911"
              className="block w-full text-left px-4 py-3 rounded-lg bg-gold hover:bg-gold-dark text-white transition-colors font-medium text-sm md:text-base"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Call Now
            </a>
            <a
              href="sms:+15124796911"
              className="block w-full text-left px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors font-medium text-sm md:text-base"
            >
              📱 Send SMS
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors font-medium text-sm md:text-base"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold hover:bg-gold-dark text-white shadow-premium-lg hover:shadow-glow-gold transition-all duration-300 hover:scale-110"
        size="icon"
      >
        {isExpanded ? (
          <X className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Phone className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
        )}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
