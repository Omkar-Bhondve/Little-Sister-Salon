import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Marcus T.",
    review: "Quick and friendly service! Best barbershop in West Campus. The guys really know what they're doing.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    review: "Great haircut — fast walk-in experience! I was in and out in under 30 minutes with a perfect cut.",
    rating: 5,
  },
  {
    name: "David K.",
    review: "Love this place! No appointment needed and the prices are super reasonable. My go-to spot for years.",
    rating: 4,
  },
  {
    name: "Jessica M.",
    review: "Finally found a salon that's great with kids! My son actually looks forward to getting his hair cut now.",
    rating: 5,
  },
];

const Reviews = () => {
  const averageRating = 4.5;

  return (
    <section id="reviews" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Our Clients <span className="text-gold">Say</span>
          </h2>
          
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 ${
                  star <= averageRating
                    ? "text-gold fill-gold"
                    : star - 0.5 <= averageRating
                    ? "text-gold fill-gold/50"
                    : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-lg font-medium text-foreground ml-2">
              {averageRating} out of 5
            </span>
          </div>
          <p className="text-muted-foreground">
            Based on customer reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-gold/30 mb-4" />
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "text-gold fill-gold"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-foreground text-lg mb-6 italic">
                  "{review.review}"
                </p>
                
                <p className="text-gold font-medium">— {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
