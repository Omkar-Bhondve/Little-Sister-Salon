import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDateTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon. For immediate service, give us a call!",
    });
    setFormData({ name: "", phone: "", email: "", preferredDateTime: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop by for a walk-in or reach out to us. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-4">
              <a
                href="tel:+15124796911"
                className="flex items-center gap-4 p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="text-lg font-medium text-foreground">+1 (512) 479-6911</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=911+W+24th+St,+Austin,+TX+78705"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <MapPin className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="text-lg font-medium text-foreground">911 W 24th St, Austin, TX 78705</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-secondary rounded-lg">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="text-lg font-medium text-foreground">Mon - Sat: 9AM - 7PM</p>
                  <p className="text-sm text-muted-foreground">Sun: 10AM - 5PM</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0!2d-97.7445!3d30.2855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a5c0000001%3A0x0!2s911%20W%2024th%20St%2C%20Austin%2C%20TX%2078705!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Cut Hut Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 md:p-10 rounded-lg">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredDateTime">Preferred Date & Time</Label>
                <Input
                  id="preferredDateTime"
                  name="preferredDateTime"
                  type="datetime-local"
                  value={formData.preferredDateTime}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Walk-ins are always welcome! This form is for inquiries only.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
