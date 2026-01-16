import { useEffect, useState, useRef } from "react";
import { Scissors, Users, Award, Star } from "lucide-react";

const stats = [
  {
    icon: Scissors,
    value: 10000,
    suffix: "+",
    label: "Haircuts Completed",
    color: "text-gold",
  },
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Clients",
    color: "text-gold",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    color: "text-gold",
  },
  {
    icon: Star,
    value: 5,
    suffix: ".0",
    label: "Average Rating",
    color: "text-gold",
  },
];

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(
            Math.round(increment * currentStep),
            stat.value
          );
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-foreground via-foreground/95 to-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c59032' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Our Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Numbers That <span className="text-gradient-gold">Speak</span>
          </h2>
          <p className="text-white/70 text-lg">
            Years of dedication, thousands of satisfied customers, and countless
            transformations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-lg overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Number */}
                <div className="text-center mb-3">
                  <span className="text-5xl md:text-6xl font-display font-bold text-white">
                    {counts[index].toLocaleString()}
                  </span>
                  <span className="text-4xl md:text-5xl font-display font-bold text-gold">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-white/70 text-center font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
