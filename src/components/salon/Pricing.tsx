import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Men's Haircut",
    price: "$25",
    popular: false,
    features: [
      "Professional styling",
      "Shampoo included",
      "Hot towel treatment",
      "Beard trim available (+$10)",
    ],
  },
  {
    name: "Women's Haircut",
    price: "$35",
    popular: true,
    features: [
      "Precision cut",
      "Shampoo & conditioning",
      "Blow-dry styling",
      "Style consultation",
    ],
  },
  {
    name: "Kids' Haircut",
    price: "$18",
    popular: false,
    features: [
      "Ages 12 and under",
      "Patient service",
      "Fun atmosphere",
      "Quick & efficient",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Affordable <span className="text-gradient-gold">Rates</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quality haircuts at competitive prices. No appointment needed — just
            walk in!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-premium-lg ${
                plan.popular
                  ? "border-gold shadow-glow-gold scale-105"
                  : "border-border hover:border-gold/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-gold text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <CardContent className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-display font-bold text-gold">
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gold hover:bg-gold-dark text-white shadow-glow-gold"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                  size="lg"
                  asChild
                >
                  <a href="tel:+15124796911">Book Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All prices are starting rates. Additional services available.{" "}
            <a
              href="#contact"
              className="text-gold hover:underline font-medium"
            >
              Contact us
            </a>{" "}
            for more details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
