import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Cut Hut salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-0">
        <div className="max-w-3xl">
          <p className="text-gold font-medium tracking-widest uppercase mb-4 animate-fade-in">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            The Cut Hut
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Austin's Friendly Neighborhood<br />
            <span className="text-gold">Hair Salon & Barbershop</span>
          </p>
          <p className="text-white/70 text-lg mb-10 max-w-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            No appointment needed. Walk-ins always welcome. Serving men, women, and children in West Campus.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+15124796911">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6"
              asChild
            >
              <a
                href="https://maps.google.com/?q=911+W+24th+St,+Austin,+TX+78705"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
