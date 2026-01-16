import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        className="w-16 h-16 rounded-full bg-gold hover:bg-gold-dark text-white shadow-premium-lg hover:shadow-glow-gold transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <a href="tel:+15123835821" aria-label="Call Little Sister Salon">
          <Phone className="w-7 h-7 animate-pulse" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingActionButton;
