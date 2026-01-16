import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Stop by The Cut Hut Today
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-8">
            Walk-Ins Always Welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
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

      {/* Footer Info */}
      <div className="py-12 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo & About */}
            <div>
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                The Cut <span className="text-gold">Hut</span>
              </h3>
              <p className="text-primary-foreground/70 mb-4">
                Austin's friendly neighborhood hair salon & barbershop. 
                Serving the West Campus community with quality cuts since day one.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-primary-foreground mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#about" className="block text-primary-foreground/70 hover:text-gold transition-colors">
                  About Us
                </a>
                <a href="#services" className="block text-primary-foreground/70 hover:text-gold transition-colors">
                  Services
                </a>
                <a href="#gallery" className="block text-primary-foreground/70 hover:text-gold transition-colors">
                  Gallery
                </a>
                <a href="#reviews" className="block text-primary-foreground/70 hover:text-gold transition-colors">
                  Reviews
                </a>
                <a href="#contact" className="block text-primary-foreground/70 hover:text-gold transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-primary-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="tel:+15124796911"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 (512) 479-6911
                </a>
                <a
                  href="https://maps.google.com/?q=911+W+24th+St,+Austin,+TX+78705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  911 W 24th St<br />
                  Austin, TX 78705
                </a>
              </div>
              <div className="mt-4">
                <p className="text-sm text-primary-foreground/50">Hours:</p>
                <p className="text-primary-foreground/70">Mon - Sat: 9AM - 7PM</p>
                <p className="text-primary-foreground/70">Sun: 10AM - 5PM</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} The Cut Hut. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
