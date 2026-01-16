import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
}

const transformations: BeforeAfterImage[] = [
  {
    before:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop",
    title: "Classic Gentleman's Cut",
  },
  {
    before:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop",
    title: "Modern Fade Style",
  },
];

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    let clientX: number;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Transformations
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Before & <span className="text-gradient-gold">After</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See the amazing transformations our skilled stylists create every
            day.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative aspect-square rounded-2xl overflow-hidden shadow-premium-lg cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleMove}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img
                src={transformations[currentIndex].after}
                alt="After"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 px-4 py-2 bg-gold rounded-lg shadow-glow-gold">
                <p className="text-white font-bold text-sm">AFTER</p>
              </div>
            </div>

            {/* Before Image (Overlay with clip) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={transformations[currentIndex].before}
                alt="Before"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 left-4 px-4 py-2 bg-foreground rounded-lg">
                <p className="text-white font-bold text-sm">BEFORE</p>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-premium-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full shadow-glow-gold flex items-center justify-center cursor-ew-resize">
                <MoveHorizontal className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mt-6">
            <h3 className="text-2xl font-display font-bold text-foreground">
              {transformations[currentIndex].title}
            </h3>
            <p className="text-muted-foreground mt-2">
              Drag the slider to see the transformation
            </p>
          </div>

          {/* Navigation Dots */}
          {transformations.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`View transformation ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
