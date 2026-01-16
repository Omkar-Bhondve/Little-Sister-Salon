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
      <div className="relative py-12 md:py-32 bg-gradient-to-br from-foreground via-foreground to-foreground/90 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm mb-4 md:mb-6">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <p className="text-gold font-medium tracking-wide uppercase text-xs md:text-sm">
              Walk-Ins Welcome
            </p>
          </div>

          <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-3 md:mb-4 text-shadow-premium px-4">
            Ready for a Fresh <span className="text-gradient-gold">Cut?</span>
          </h2>
          <p className="text-white/80 text-base md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto px-4">
            Visit us today — no appointment needed. Experience the difference at
            Austin's premier salon.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-glow-gold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="tel:+15123835821">
                <Phone className="w-5 h-5 mr-2" />
                Call (512) 383-5821
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground text-base md:text-lg px-8 md:px-10 py-6 md:py-7 backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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

      {/* Main Footer Content */}
      <div className="bg-foreground py-10 md:py-16 relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

        <div className="container mx-auto px-4">
          {/* Mobile-Optimized Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
            {/* Logo & About - Mobile Centered */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 md:mb-4">
                Little Sister <span className="text-gradient-gold">Salon</span>
              </h3>
              <p className="text-white/70 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                Austin's modern hair salon. Professional cuts, color, styling,
                and treatments with a personal touch.
              </p>

              {/* Social Icons - Centered on Mobile */}
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="https://instagram.com/littlesistersalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-gold"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-gold"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-gradient-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-gold"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links - Mobile Optimized */}
            <div className="md:block hidden">
              <h4 className="text-base md:text-lg font-display font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gold rounded-full" />
                Quick Links
              </h4>
              <nav className="space-y-2 md:space-y-3">
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
                    className="block text-white/70 hover:text-gold transition-colors link-underline group text-sm md:text-base"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                      {link}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info - Mobile Card Style */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-base md:text-lg font-display font-bold text-white mb-4 md:mb-6 flex items-center gap-2 justify-center md:justify-start">
                <div className="w-1 h-6 bg-gold rounded-full" />
                Contact
              </h4>

              {/* Phone - Prominent on Mobile */}
              <a
                href="tel:+15123835821"
                className="flex items-center gap-3 p-3 md:p-0 rounded-lg md:rounded-none bg-white/5 md:bg-transparent text-white hover:text-gold transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/20 md:bg-white/10 flex items-center justify-center group-hover:bg-gold/30 md:group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-gold md:text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Call Us</p>
                  <p className="font-semibold md:font-medium text-base">
                    (512) 383-5821
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@littlesistersalon.com"
                className="flex items-center gap-3 p-3 md:p-0 rounded-lg md:rounded-none bg-white/5 md:bg-transparent text-white/70 hover:text-gold transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Email</p>
                  <p className="font-medium text-sm md:text-base break-all">
                    info@littlesistersalon.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.google.com/?q=3715+S+1st+St+Unit+C,+Austin,+TX+78704"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 md:p-0 rounded-lg md:rounded-none bg-white/5 md:bg-transparent text-white/70 hover:text-gold transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Location</p>
                  <p className="font-medium text-sm md:text-base">
                    3715 S 1st St Unit C
                    <br />
                    Austin, TX 78704
                  </p>
                </div>
              </a>
            </div>

            {/* Hours - Mobile Card Style */}
            <div>
              <h4 className="text-base md:text-lg font-display font-bold text-white mb-4 md:mb-6 flex items-center gap-2 justify-center md:justify-start">
                <div className="w-1 h-6 bg-gold rounded-full" />
                Hours
              </h4>
              <div className="space-y-3 bg-white/5 md:bg-transparent p-4 md:p-0 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 md:bg-white/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/70 font-medium text-sm">
                      Tue - Sat
                    </p>
                    <p className="text-white text-base md:text-lg font-display font-bold">
                      9AM - 5PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 md:bg-white/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/70 font-medium text-sm">
                      Thursday
                    </p>
                    <p className="text-white text-base md:text-lg font-display font-bold">
                      8AM - 5PM
                    </p>
                  </div>
                </div>

                {/* Open Now Badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-green-400 font-medium text-xs md:text-sm">
                    Open Now
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Mobile Optimized */}
          <div className="pt-6 md:pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
              <p className="text-white/50 text-xs md:text-sm order-2 md:order-1">
                © {currentYear} Little Sister Salon. All rights reserved.
                <br className="md:hidden" />
                <span className="hidden md:inline"> </span>
                Crafted with ❤️ in Austin.
              </p>

              <div className="flex items-center gap-4 md:gap-6 order-1 md:order-2">
                <a
                  href="#"
                  className="text-white/50 hover:text-gold text-xs md:text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/50 hover:text-gold text-xs md:text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button - Hidden on Mobile */}
        <button
          onClick={scrollToTop}
          className="hidden md:flex absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white shadow-glow-gold hover:scale-110 transition-all duration-300 items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
