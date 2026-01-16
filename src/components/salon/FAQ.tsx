import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "No appointment necessary! We welcome walk-ins during all business hours. However, if you prefer to schedule a specific time, feel free to give us a call.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We're open Monday through Saturday from 9 AM to 7 PM, and Sundays from 10 AM to 5 PM. We're here when you need us!",
  },
  {
    question: "How long does a typical haircut take?",
    answer:
      "Most haircuts take between 20-30 minutes. We pride ourselves on efficient, quality service that fits your busy schedule.",
  },
  {
    question: "Do you offer services for children?",
    answer:
      "Absolutely! We specialize in kid-friendly haircuts and have patient stylists who make the experience fun and comfortable for children of all ages.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit cards, and digital payment methods. Your convenience is our priority!",
  },
  {
    question: "Can I get a beard trim without a haircut?",
    answer:
      "Yes! We offer standalone beard trimming and shaping services. Our barbers are experts in facial hair grooming.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers. Here's everything you need to know
            about Little Sister Salon.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg overflow-hidden border border-border hover:border-gold transition-all duration-300 shadow-premium"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-display font-bold text-foreground group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Still have questions?{" "}
            <a
              href="tel:+15123835821"
              className="text-gold hover:underline font-medium link-underline"
            >
              Give us a call
            </a>{" "}
            or{" "}
            <a
              href="#contact"
              className="text-gold hover:underline font-medium link-underline"
            >
              send us a message
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
