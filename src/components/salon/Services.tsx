import { Scissors, SprayCan, Baby, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Adult Haircuts",
    description: "Classic and modern styles for men and women. Our skilled stylists deliver precision cuts tailored to your face shape and lifestyle.",
  },
  {
    icon: SprayCan,
    title: "Shampoo & Style",
    description: "Relaxing shampoo treatment with professional blow-dry styling. Perfect for a fresh, polished look.",
  },
  {
    icon: Baby,
    title: "Kids' Haircuts",
    description: "Patient, kid-friendly service in a fun atmosphere. We make haircuts enjoyable for children of all ages.",
  },
  {
    icon: Sparkles,
    title: "Beard Trims",
    description: "Expert beard shaping and trimming. From stubble to full beards, we'll keep your facial hair looking sharp.",
  },
  {
    icon: Zap,
    title: "Quick Walk-In Cuts",
    description: "In a rush? Our efficient service gets you looking great fast. No appointment needed — just walk in!",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What We <span className="text-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From quick trims to complete transformations, we provide a full range of 
            hair care services for the whole family.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-background border-border hover:border-gold transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Questions about our services?{" "}
            <a href="tel:+15124796911" className="text-gold hover:underline font-medium">
              Give us a call
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
