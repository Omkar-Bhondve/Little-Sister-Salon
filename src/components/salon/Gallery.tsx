import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import barberWorkingImage from "@/assets/barber-working.jpg";
import shampooStationImage from "@/assets/shampoo-station.jpg";
import salonToolsImage from "@/assets/salon-tools.jpg";
import stylingStationImage from "@/assets/styling-station.jpg";
import kidsHaircutImage from "@/assets/kids-haircut.jpg";

const galleryImages = [
  {
    src: heroImage,
    alt: "Modern salon interior with professional styling chairs",
  },
  {
    src: barberWorkingImage,
    alt: "Professional barber giving a stylish haircut",
  },
  { src: shampooStationImage, alt: "Comfortable shampoo station area" },
  { src: salonToolsImage, alt: "Professional barbershop tools and equipment" },
  { src: stylingStationImage, alt: "Individual styling station with mirror" },
  { src: kidsHaircutImage, alt: "Happy child getting a haircut" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our <span className="text-gradient-gold">Space</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a look inside Little Sister Salon. Clean, modern, and welcoming
            — the perfect place for your next haircut.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-lg group cursor-pointer shadow-premium hover:shadow-premium-lg transition-all duration-500 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`aspect-square ${
                  index === 0 ? "md:aspect-auto md:h-full" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-2 shadow-glow-gold">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm block">
                    View Image
                  </span>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-gold text-white transition-all duration-300 flex items-center justify-center group"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-premium-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
