import { Phone, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Little Sister Salon interior"
          className="w-full h-full object-cover"
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold" />
            <p className="text-gold font-medium tracking-wide uppercase text-sm">
              Welcome to Little Sister Salon
            </p>
          </div>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 animate-fade-in text-shadow-premium"
            style={{ animationDelay: "0.1s" }}
          >
            Little Sister <span className="text-gradient-gold">Salon</span>
          </h1>

          <p
            className="text-2xl md:text-3xl text-white/90 mb-4 animate-fade-in font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Austin's Modern
          </p>
          <p
            className="text-2xl md:text-3xl text-gold mb-8 animate-fade-in font-display font-bold"
            style={{ animationDelay: "0.25s" }}
          >
            Hair Salon
          </p>

          <p
            className="text-white/80 text-lg md:text-xl mb-10 max-w-xl animate-fade-in leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Professional haircuts, color, styling, and treatments in South
            Austin. Walk-ins welcome!
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white text-lg px-8 py-7 shadow-glow-gold hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="tel:+15123835821">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-7 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              asChild
            >
              <a
                href="https://maps.google.com/?q=3715+S+1st+St+Unit+C,+Austin,+TX+78704"
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
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
