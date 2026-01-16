import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marcus Thompson",
    role: "Regular Customer",
    review:
      "I've been coming to Little Sister Salon for over 2 years now. The consistency in quality and the friendly atmosphere keep me coming back. Best salon in South Austin, hands down!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Sarah Martinez",
    role: "UT Student",
    review:
      "The stylists at Little Sister Salon are incredibly talented. They really listen to what you want and deliver amazing results every time. I always leave feeling confident and beautiful!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "David Chen",
    role: "Local Professional",
    review:
      "Little Sister Salon has become my go-to spot for color and cuts. Professional service, great conversation, and I always leave looking sharp. Highly recommend to anyone in South Austin!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    name: "Jessica Williams",
    role: "Parent",
    review:
      "I love the modern, welcoming vibe at Little Sister Salon. The stylists are skilled professionals who really care about their craft. My hair has never looked better!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="hidden md:block py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Real Reviews from{" "}
            <span className="text-gradient-gold">Real People</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-background border-gold shadow-premium-lg overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold shadow-glow-gold">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-12 h-12 text-gold/30 mb-4 mx-auto md:mx-0" />

                  <p className="text-foreground text-xl md:text-2xl mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].review}"
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div>
                      <p className="text-gold font-display font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white shadow-glow-gold hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white shadow-glow-gold hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gold w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
