import shipLegend from "@/assets/ship-legend.jpg";
import shipCoral from "@/assets/ship-coral.jpg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Users,
  Anchor,
  Calendar,
  Bed,
  Utensils,
  Wine,
  Wifi,
  Waves,
  Mountain,
  Fish,
  Compass,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

type Ship = {
  id: string;
  name: string;
  tag: string;
  image: string;
  blurb: string;
  stats: { icon: typeof Users; label: string; value: string }[];
  cabins: { name: string; deck: string; size: string; details: string }[];
  itineraries: { days: string; name: string; desc: string }[];
  amenities: { icon: typeof Users; label: string }[];
};

const ships: Ship[] = [
  {
    id: "legend",
    name: "Galapagos Legend",
    tag: "Boutique Expedition Cruise",
    image: shipLegend,
    blurb:
      "Our flagship vessel and the fastest ship in the archipelago — swift transfers between islands mean more time exploring. Boutique design, gourmet dining, fitness center and sun deck for an exceptional onboard experience.",
    stats: [
      { icon: Users, label: "Guests", value: "100" },
      { icon: Bed, label: "Cabins", value: "57 across 4 decks" },
      { icon: Anchor, label: "Decks", value: "Earth · Sea · Moon · Sky" },
      { icon: Calendar, label: "Itineraries", value: "4, 5 & 8 days" },
    ],
    cabins: [
      { name: "Legend Balcony Suite", deck: "Moon Deck", size: "33 m² / 355 ft²", details: "Private balcony · panoramic windows · champagne · premium amenities" },
      { name: "Balcony Suite Plus", deck: "Sky & Moon Deck", size: "26 m² / 280 ft²", details: "Private balcony · double or triple · premium amenities" },
      { name: "Balcony Suite", deck: "Sky & Moon Deck", size: "22 m² / 237 ft²", details: "Private balcony · panoramic windows · champagne" },
      { name: "Legend Suite", deck: "Earth Deck", size: "20 m² / 215 ft²", details: "Up to quadruple · interconnected rooms available" },
      { name: "Junior Suite", deck: "Earth Deck", size: "15 m² / 161 ft²", details: "Double or triple · 2 panoramic windows" },
      { name: "Standard Plus", deck: "Earth & Sea Deck", size: "11 m² / 118 ft²", details: "Single or double accommodation" },
    ],
    itineraries: [
      { days: "4 days", name: "North Expedition", desc: "Santa Cruz, Genovesa, South Plaza & Santa Fe" },
      { days: "5 days", name: "West Expedition", desc: "Mosquera, Santiago, Rabida, Isabela, Fernandina" },
      { days: "4 days", name: "East Expedition", desc: "North Seymour, Bartolome, Santiago, San Cristobal" },
      { days: "5 days", name: "South Expedition", desc: "San Cristobal, Española, Floreana, Santa Cruz" },
      { days: "8 days", name: "Combined Expeditions", desc: "Combine any two routes for the full archipelago experience" },
    ],
    amenities: [
      { icon: Utensils, label: "Gourmet Dining" },
      { icon: Wine, label: "Charles Darwin Lounge & Bar" },
      { icon: Sparkles, label: "Fitness Center & Sun Deck" },
      { icon: Wifi, label: "Onboard Wi-Fi" },
      { icon: Waves, label: "Snorkeling & Kayaking" },
      { icon: Fish, label: "Scuba Diving (certified)" },
      { icon: Compass, label: "Glass-Bottom Boat" },
      { icon: Mountain, label: "Daily Guided Hikes" },
    ],
  },
  {
    id: "coral",
    name: "Coral I & Coral II",
    tag: "Expedition Yachts",
    image: shipCoral,
    blurb:
      "Elegant sister yachts for travelers seeking a more intimate, personalized Galapagos experience. Three beautifully appointed decks, open-air Jacuzzi, panoramic lounge and a home-away-from-home ambiance — perfect for couples, charter groups and small gatherings.",
    stats: [
      { icon: Users, label: "Guests", value: "Coral I: 36 · Coral II: 20" },
      { icon: Bed, label: "Cabins", value: "Sky · Earth · Sea decks" },
      { icon: Anchor, label: "Style", value: "Private-yacht feel" },
      { icon: Calendar, label: "Itineraries", value: "4, 5 & 8 days" },
    ],
    cabins: [
      { name: "Junior Cabin (Coral I)", deck: "Sky & Earth Deck", size: "12 m² / 128 ft²", details: "Twin or double · 2 picture windows" },
      { name: "Standard Plus (Coral I)", deck: "Sea Deck", size: "11 m² / 118 ft²", details: "Twin or double · 2 portholes" },
      { name: "Standard Cabin (Coral I)", deck: "Sea Deck", size: "8.8 m² / 94 ft²", details: "Twin or double · 2 portholes" },
      { name: "Junior Cabin (Coral II)", deck: "Sky & Earth Deck", size: "11 m² / 118 ft²", details: "Twin or double · 2 picture windows" },
      { name: "Standard Plus (Coral II)", deck: "Sea Deck", size: "11 m² / 118 ft²", details: "Twin or double · 2 portholes" },
    ],
    itineraries: [
      { days: "4 days", name: "North Expedition", desc: "Santa Cruz, Genovesa, Rabida, Bartolome" },
      { days: "5 days", name: "West Expedition", desc: "Santa Cruz, Isabela, Fernandina, Santiago" },
      { days: "4 days", name: "East Expedition", desc: "North Seymour, Santa Cruz, South Plaza, Santa Fe, Lobos" },
      { days: "5 days", name: "South Expedition", desc: "San Cristobal, Española, Floreana, Santa Cruz" },
      { days: "8 days", name: "Combined Expeditions", desc: "Combine any two routes for a full week of discovery" },
    ],
    amenities: [
      { icon: Utensils, label: "À la carte Restaurant" },
      { icon: Sparkles, label: "Al Fresco Dining & BBQ Nights" },
      { icon: Waves, label: "Open-air Jacuzzi" },
      { icon: Wine, label: "Lounge & Bar" },
      { icon: Wifi, label: "Onboard Wi-Fi" },
      { icon: Compass, label: "Auditorium & Lectures" },
      { icon: Fish, label: "Snorkeling, Kayak & Diving" },
      { icon: Mountain, label: "Daily Guided Excursions" },
    ],
  },
];

function scrollToForm() {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
}

export function FleetSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cta mb-3">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Two ways to discover the Galapagos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare cabins, itineraries and onboard amenities — all in one place.
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
              {/* Hero row */}
              <div className="grid lg:grid-cols-2 gap-8 mb-10">
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

              {/* Cabins */}
              <div className="mb-10">
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Bed className="w-5 h-5 text-cta" /> Cabins & Suites
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ship.cabins.map((c) => (
                    <div
                      key={c.name}
                      className="bg-card border border-border rounded-lg p-4 hover:border-cta/50 transition-colors"
                    >
                      <p className="font-semibold text-foreground text-sm">{c.name}</p>
                      <p className="text-xs text-cta mb-2">
                        {c.deck} · {c.size}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itineraries + Amenities */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-cta" /> Itineraries
                  </h4>
                  <ul className="space-y-3">
                    {ship.itineraries.map((it) => (
                      <li
                        key={it.name}
                        className="bg-card border border-border rounded-lg p-4 flex gap-4 items-start"
                      >
                        <span className="shrink-0 bg-cta/10 text-cta text-xs font-bold px-2.5 py-1 rounded">
                          {it.days}
                        </span>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{it.name}</p>
                          <p className="text-xs text-muted-foreground">{it.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cta" /> Onboard & Activities
                  </h4>
                  <div className="bg-card border border-border rounded-lg p-5">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ship.amenities.map((a) => (
                        <li key={a.label} className="flex items-center gap-3 text-sm text-foreground">
                          <span className="w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center shrink-0">
                            <a.icon className="w-4 h-4 text-cta" />
                          </span>
                          {a.label}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border mt-5 pt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-cta" />
                      All meals, naturalist guides & snorkeling gear included
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
