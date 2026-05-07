import shipLegend from "@/assets/ship-legend.jpg";
import shipCoral from "@/assets/ship-coral.jpg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Users, Anchor, Calendar, Bed } from "lucide-react";

type Ship = {
  id: string;
  name: string;
  tag: string;
  image: string;
  blurb: string;
  stats: { icon: typeof Users; label: string; value: string }[];
};

const ships: Ship[] = [
  {
    id: "legend",
    name: "Galapagos Legend",
    tag: "Boutique Expedition Cruise",
    image: shipLegend,
    blurb:
      "Our flagship and the fastest ship in the archipelago — swift transfers between islands mean more time exploring. Boutique design, gourmet dining, fitness center and sun deck for an exceptional onboard experience.",
    stats: [
      { icon: Users, label: "Guests", value: "100" },
      { icon: Bed, label: "Cabins", value: "57 across 4 decks" },
      { icon: Anchor, label: "Decks", value: "Earth · Sea · Moon · Sky" },
      { icon: Calendar, label: "Itineraries", value: "4, 5 & 8 days" },
    ],
  },
  {
    id: "coral",
    name: "Coral I & Coral II",
    tag: "Expedition Yachts",
    image: shipCoral,
    blurb:
      "Elegant sister yachts for travelers seeking a more intimate, personalized Galapagos experience. Three beautifully appointed decks, open-air Jacuzzi, panoramic lounge and a home-away-from-home ambiance.",
    stats: [
      { icon: Users, label: "Guests", value: "Coral I: 36 · Coral II: 20" },
      { icon: Bed, label: "Cabins", value: "Sky · Earth · Sea decks" },
      { icon: Anchor, label: "Style", value: "Private-yacht feel" },
      { icon: Calendar, label: "Itineraries", value: "4, 5 & 8 days" },
    ],
  },
];

function scrollToForm() {
  document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
}

export function FleetSection() {
  return (
    <section className="section-light py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cta mb-3">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Two ways to discover the Galapagos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pick the ship that best fits your travel style.
          </p>
        </div>

        <Tabs defaultValue="legend" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 h-auto p-1 bg-card border border-border">
            {ships.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="py-3 text-sm font-semibold data-[state=active]:bg-cta data-[state=active]:text-cta-foreground"
              >
                {s.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {ships.map((ship) => (
            <TabsContent key={ship.id} value={ship.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img
                    src={ship.image}
                    alt={ship.name}
                    className="w-full h-full object-cover min-h-[280px]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-semibold tracking-widest uppercase text-cta mb-2">
                    {ship.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {ship.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{ship.blurb}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {ship.stats.map((s) => (
                      <div key={s.label} className="bg-card border border-border rounded-lg p-3">
                        <div className="flex items-center gap-2 text-cta mb-1">
                          <s.icon className="w-4 h-4" />
                          <span className="text-xs uppercase tracking-wide">{s.label}</span>
                        </div>
                        <p className="text-sm font-semibold text-foreground">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToForm}
                    className="bg-cta text-cta-foreground hover:bg-cta/90 w-full sm:w-auto"
                    size="lg"
                  >
                    Get a Quote for {ship.id === "legend" ? "the Legend" : "Coral Yachts"}
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
