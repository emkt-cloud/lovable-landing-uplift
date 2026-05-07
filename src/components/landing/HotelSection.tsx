import { Award, MapPin, Leaf, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Award,
    title: "South America's Leading New Hotel 2025",
    desc: "Recognized by the World Travel Awards for design and service excellence.",
  },
  {
    icon: MapPin,
    title: "Privileged Quito location",
    desc: "Panoramic Andean views, minutes from the historic UNESCO city center.",
  },
  {
    icon: Leaf,
    title: "Sustainable & locally inspired",
    desc: "Eco-innovative design celebrating Ecuadorian art, colors and textures.",
  },
  {
    icon: Sparkles,
    title: "World-class amenities",
    desc: "Gourmet dining, spa, rooftop and curated experiences for every traveler.",
  },
];

export function HotelSection() {
  const scrollToForm = () =>
    document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-light py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cta/10 text-cta rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
              <Gift className="w-3.5 h-3.5" />
              Included in your offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              3 FREE Nights at GO Quito Hotel
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Begin and end your Galapagos adventure in luxury. Stay at the award-winning
              GO Quito Hotel — a tribute to the Andes blending elegant design,
              eco-innovation and authentic Ecuadorian culture, all in the heart of Quito.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center shrink-0">
                    <h.icon className="w-5 h-5 text-cta" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{h.title}</p>
                    <p className="text-sm text-muted-foreground">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-cta text-cta-foreground hover:bg-cta/90"
            >
              Claim Your 3 Free Nights
            </Button>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src="https://gogalapagos.com/hs-fs/hubfs/Portada-1.webp"
              alt="GO Quito Hotel"
              className="w-full h-full object-cover min-h-[360px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
