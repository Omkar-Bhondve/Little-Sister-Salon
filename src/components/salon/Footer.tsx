import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section with Gradient Background */}
      <div className="relative py-20 md:py-32 bg-gradient-to-br from-foreground via-foreground to-foreground/90 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm0 3.657l10.485 10.485-1.414 1.414L32 6.485 22.929 15.556l-1.414-1.414L32 3.657z' fill='%23c59032' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial opacity-20" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <p className="text-gold font-medium tracking-wide uppercase text-sm">
              Walk-Ins Welcome
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 text-shadow-premium">
            Ready for a Fresh <span className="text-gradient-gold">Cut?</span>
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Visit us today — no appointment needed. Experience the difference at
            Austin's premier salon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white text-lg px-10 py-7 shadow-glow-gold hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="tel:+15124796911">
                <Phone className="w-5 h-5 mr-2" />
                Call (512) 479-6911
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-10 py-7 backdrop-blur-sm hover:scale-105 transition-all duration-300"
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

      {/* Main Footer Content */}
      <div className="bg-foreground py-16 relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                The Cut <span className="text-gradient-gold">Hut</span>
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Austin's friendly neighborhood hair salon & barbershop. Quality
                cuts, great vibes, unbeatable service.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="group w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-gold"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-gold"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-gold"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gold rounded-full" />
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  "About",
                  "Services",
                  "Pricing",
                  "Team",
                  "Gallery",
                  "Reviews",
                  "FAQ",
                ].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-white/70 hover:text-gold transition-colors link-underline group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                      {link}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gold rounded-full" />
                Contact
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+15124796911"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Call Us</p>
                    <p className="font-medium">(512) 479-6911</p>
                  </div>
                </a>

                <a
                  href="mailto:info@thecuthut.com"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Email</p>
                    <p className="font-medium">info@thecuthut.com</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=911+W+24th+St,+Austin,+TX+78705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Location</p>
                    <p className="font-medium">
                      911 W 24th St
                      <br />
                      Austin, TX 78705
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gold rounded-full" />
                Hours
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/70 font-medium">Mon - Sat</p>
                    <p className="text-white text-lg font-display font-bold">
                      9AM - 7PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/70 font-medium">Sunday</p>
                    <p className="text-white text-lg font-display font-bold">
                      10AM - 5PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Open Now Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-green-400 font-medium text-sm">Open Now</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm">
                © {currentYear} The Cut Hut. All rights reserved. Crafted with
                ❤️ in Austin.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white shadow-glow-gold hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
