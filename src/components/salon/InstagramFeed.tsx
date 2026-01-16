import { Instagram, ExternalLink } from "lucide-react";

const instagramPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop",
    likes: 234,
    caption: "Fresh cut for the weekend! 💈✨",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop",
    likes: 189,
    caption: "Transformation Tuesday! 🔥",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop",
    likes: 312,
    caption: "Classic gentleman's style 👔",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
    likes: 267,
    caption: "Precision fade perfection ✂️",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=400&fit=crop",
    likes: 198,
    caption: "Modern style, timeless look 💯",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    likes: 245,
    caption: "Another satisfied customer! 😊",
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 mb-4">
            <Instagram className="w-5 h-5 text-purple-500" />
            <p className="text-purple-500 font-medium tracking-wide uppercase text-sm">
              Follow Us
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            See Our Work on{" "}
            <span className="text-gradient-gold">Instagram</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Follow @littlesistersalon for daily style inspiration, special
            offers, and behind-the-scenes content!
          </p>

          <a
            href="https://instagram.com/littlesistersalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-premium hover:shadow-premium-lg"
          >
            <Instagram className="w-5 h-5" />
            Follow @littlesistersalon
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com/littlesistersalon"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <Instagram className="w-8 h-8 text-white mb-2" />
                <p className="text-white text-sm font-medium mb-1">
                  ❤️ {post.likes}
                </p>
                <p className="text-white/80 text-xs text-center line-clamp-2">
                  {post.caption}
                </p>
              </div>

              {/* Instagram Icon Badge */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Tag us in your photos with{" "}
            <span className="text-gold font-medium">#LittleSisterSalon</span>{" "}
            for a chance to be featured!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
