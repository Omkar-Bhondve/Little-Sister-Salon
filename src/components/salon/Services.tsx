import { Scissors, Palette, Sparkles, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Professional Cuts",
    description:
      "Expert haircuts for all styles and lengths. From classic to contemporary, our stylists create looks that complement your unique personality.",
  },
  {
    icon: Palette,
    title: "Color Services",
    description:
      "Single process color, custom highlights, and balayage. Transform your look with our professional coloring techniques.",
  },
  {
    icon: Sparkles,
    title: "Styling & Blowouts",
    description:
      "Professional styling and blowouts for any occasion. Leave feeling polished and camera-ready.",
  },
  {
    icon: Heart,
    title: "Hair Treatments",
    description:
      "Deep conditioning and restorative treatments. Keep your hair healthy, shiny, and beautiful.",
  },
  {
    icon: Zap,
    title: "Walk-Ins Welcome",
    description:
      "No appointment needed! Our friendly team is ready to help you look and feel your best. Just walk in!",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-secondary relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From quick trims to complete transformations, we provide a full
            range of hair care services for the whole family.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-background border-border hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-lg hover-tilt shimmer overflow-hidden relative"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-6 group-hover:bg-gradient-gold group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-premium">
                  <service.icon className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Questions about our services?{" "}
            <a
              href="tel:+15123835821"
              className="text-gold hover:underline font-medium link-underline"
            >
              Give us a call
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
