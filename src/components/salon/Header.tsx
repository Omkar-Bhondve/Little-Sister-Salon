import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#team", label: "Team" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-2xl md:text-3xl font-display font-bold text-white">
                Little Sister <span className="text-gradient-gold">Salon</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors link-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Call Button - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-white shadow-glow-gold"
              >
                <a href="tel:+15123835821">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-56 max-w-[75vw] bg-foreground z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-display font-bold text-white">
              Little Sister <span className="text-gradient-gold">Salon</span>
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Austin's Modern Hair Salon
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex items-center justify-between px-4 py-4 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-base font-medium">{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                </a>
              ))}
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-white/10 space-y-3">
            <Button
              asChild
              className="w-full bg-gold hover:bg-gold-dark text-white shadow-glow-gold"
              size="lg"
            >
              <a href="tel:+15123835821">
                <Phone className="w-4 h-4 mr-2" />
                Call (512) 383-5821
              </a>
            </Button>

            <div className="text-center">
              <p className="text-white/50 text-xs">
                Tue-Sat: 9AM-5PM | Thu: 8AM-5PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
