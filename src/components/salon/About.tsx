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
                alt="Professional barber at The Cut Hut"
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
              Your Neighborhood <span className="text-gold">Barbershop</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Welcome to <strong className="text-foreground">The Cut Hut</strong> — your go-to 
                hair salon and barbershop in the heart of Austin's West Campus neighborhood. 
                We've been proudly serving the UT community and local residents with quality 
                haircuts, styling, and grooming services.
              </p>
              <p>
                Whether you're a student rushing between classes, a busy professional, or a 
                parent with kids in tow, we've got you covered. Our experienced stylists and 
                barbers deliver quick, quality cuts at <strong className="text-foreground">competitive prices</strong> — 
                no appointment needed.
              </p>
              <p>
                Step into our relaxed, welcoming atmosphere where everyone is treated like 
                family. From classic cuts to modern styles, we cater to <strong className="text-foreground">men, 
                women, and children</strong> of all ages.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-display font-bold text-gold">Walk-In</p>
                <p className="text-sm text-muted-foreground">Welcome</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-display font-bold text-gold">All Ages</p>
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
