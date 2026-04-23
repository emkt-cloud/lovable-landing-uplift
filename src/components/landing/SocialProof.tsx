import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely unforgettable. The crew was incredible and every island visit exceeded our expectations.",
    rating: 5,
  },
  {
    name: "James & Linda K.",
    text: "Best vacation we've ever taken. The wildlife encounters were magical. Worth every penny.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Professional service from start to finish. The booking process was seamless and stress-free.",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="py-16 px-4 bg-card">
      {/* Rating bar */}
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 mb-12">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-cta text-cta" />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">4.8 / 5</p>
            <p className="text-xs text-muted-foreground">Tripadvisor</p>
          </div>
        </div>
        <div className="h-8 w-px bg-border hidden sm:block" />
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-cta text-cta" />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">4.7 / 5</p>
            <p className="text-xs text-muted-foreground">Trustpilot</p>
          </div>
        </div>
        <div className="h-8 w-px bg-border hidden sm:block" />
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-semibold">150,000+</span> happy travelers
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-secondary rounded-xl p-6 relative"
          >
            <Quote className="w-8 h-8 text-cta/30 absolute top-4 right-4" />
            <div className="flex gap-0.5 mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-cta text-cta" />
              ))}
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed mb-4">
              "{t.text}"
            </p>
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
