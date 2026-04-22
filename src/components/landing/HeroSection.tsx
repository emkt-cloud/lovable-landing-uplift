import heroImg from "@/assets/hero-galapagos.jpg";
import { Star } from "lucide-react";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Galapagos Islands aerial view with cruise ship"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Tripadvisor badge */}
        <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-cta text-cta" />
            ))}
          </div>
          <span className="text-sm text-foreground/80">4.8 on Tripadvisor</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
          Galapagos Cruise Deals 2026
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-cta mb-2">
          3 FREE nights + up to 10% OFF
        </p>
        <p className="text-foreground/70 text-lg mb-8">
          Limited availability · Best price guaranteed
        </p>

        <button
          onClick={scrollToForm}
          className="bg-cta text-cta-foreground hover:opacity-90 transition-opacity text-lg font-bold px-10 py-4 rounded-lg shadow-lg shadow-cta/30 cursor-pointer"
        >
          Get Your Offer
        </button>
      </div>
    </section>
  );
}
