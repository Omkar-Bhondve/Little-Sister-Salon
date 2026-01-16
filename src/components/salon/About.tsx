import barberWorkingImage from "@/assets/barber-working.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={barberWorkingImage}
                alt="Professional stylist at Little Sister Salon"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Your Modern <span className="text-gold">Hair Salon</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Welcome to{" "}
                <strong className="text-foreground">Little Sister Salon</strong>{" "}
                — your modern hair salon in South Austin. We specialize in
                professional cuts, custom color, styling, and treatments that
                bring out your best look.
              </p>
              <p>
                Our talented stylists are passionate about creating beautiful,
                personalized styles that complement your unique personality.
                From classic cuts to the latest trends, we deliver{" "}
                <strong className="text-foreground">exceptional results</strong>{" "}
                in a warm, welcoming environment.
              </p>
              <p>
                Located on South 1st Street, we're proud to serve the Austin
                community with quality hair care services. Walk-ins are always
                welcome, and we look forward to helping you look and feel your
                best.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-display font-bold text-gold">
                  Walk-In
                </p>
                <p className="text-sm text-muted-foreground">Welcome</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-display font-bold text-gold">
                  All Ages
                </p>
                <p className="text-sm text-muted-foreground">Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
