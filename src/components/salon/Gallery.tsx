import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import barberWorkingImage from "@/assets/barber-working.jpg";
import shampooStationImage from "@/assets/shampoo-station.jpg";
import salonToolsImage from "@/assets/salon-tools.jpg";
import stylingStationImage from "@/assets/styling-station.jpg";
import kidsHaircutImage from "@/assets/kids-haircut.jpg";

const galleryImages = [
  { src: heroImage, alt: "Modern salon interior with professional styling chairs" },
  { src: barberWorkingImage, alt: "Professional barber giving a stylish haircut" },
  { src: shampooStationImage, alt: "Comfortable shampoo station area" },
  { src: salonToolsImage, alt: "Professional barbershop tools and equipment" },
  { src: stylingStationImage, alt: "Individual styling station with mirror" },
  { src: kidsHaircutImage, alt: "Happy child getting a haircut" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our <span className="text-gold">Space</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a look inside The Cut Hut. Clean, modern, and welcoming — 
            the perfect place for your next haircut.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`aspect-square ${index === 0 ? "md:aspect-auto md:h-full" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
