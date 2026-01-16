import { useState } from "react";
import { X, Percent } from "lucide-react";

const SpecialOfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 animate-fade-in">
      <div className="bg-gradient-gold shadow-premium-lg">
        <div className="container mx-auto px-3 md:px-4 py-2 md:py-3">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                <Percent className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-display font-bold text-sm sm:text-base md:text-lg lg:text-xl truncate">
                  🎉 New Customer Special: 20% OFF!
                </p>
                <p className="text-white/90 text-xs hidden sm:block">
                  Walk in today and mention this offer. Limited time only!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <a
                href="tel:+15124796911"
                className="hidden sm:inline-flex px-4 md:px-6 py-2 bg-white text-foreground rounded-lg font-medium hover:bg-white/90 transition-colors text-sm md:text-base"
              >
                Claim Offer
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Close banner"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
