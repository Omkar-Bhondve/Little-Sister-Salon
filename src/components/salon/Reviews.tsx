import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Marcus T.",
    review:
      "Quick and friendly service! Best barbershop in West Campus. The guys really know what they're doing.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    review:
      "Great haircut — fast walk-in experience! I was in and out in under 30 minutes with a perfect cut.",
    rating: 5,
  },
  {
    name: "David K.",
    review:
      "Love this place! No appointment needed and the prices are super reasonable. My go-to spot for years.",
    rating: 5,
  },
  {
    name: "Jessica M.",
    review:
      "Finally found a salon that's great with kids! My son actually looks forward to getting his hair cut now.",
    rating: 5,
  },
];

const Reviews = () => {
  const averageRating = 5.0;

  return (
    <section
      id="reviews"
      className="hidden md:block py-20 md:py-32 bg-secondary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm0 3.657l10.485 10.485-1.414 1.414L32 6.485 22.929 15.556l-1.414-1.414L32 3.657zM12.686 4.686L0 17.372V0h12.686zm34.628 0L60 17.372V0H47.314zM0 20.686L12.686 33.372 0 46.058V20.686zM60 20.686v25.372L47.314 33.372 60 20.686zM0 49.372L12.686 62.058 0 74.744V49.372zm60 0v25.372L47.314 62.058 60 49.372zM32 56.828l-9.071 9.071-1.414-1.414L32 54l10.485 10.485-1.414 1.414L32 56.828zm0-3.656L21.515 42.687l1.414-1.414L32 50.343l9.071-9.07 1.414 1.414L32 53.172z' fill='%23c59032' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-7 h-7 text-gold fill-gold drop-shadow-lg"
              />
            ))}
          </div>
          <p className="text-2xl font-display font-bold text-gold mb-2">
            {averageRating.toFixed(1)} out of 5
          </p>
          <p className="text-muted-foreground">
            Based on hundreds of happy customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-lg group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-12 h-12 text-gold/20 group-hover:text-gold/40 transition-colors duration-300" />

                  {/* Star Rating */}
                  <div className="flex gap-1">
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
                </div>

                <p className="text-foreground text-lg mb-6 italic leading-relaxed">
                  "{review.review}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <p className="text-gold font-medium font-display">
                    — {review.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Join our happy customers!{" "}
            <a
              href="#contact"
              className="text-gold hover:underline font-medium link-underline"
            >
              Book your appointment
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
