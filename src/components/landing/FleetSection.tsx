import shipLegend from "@/assets/ship-legend.jpg";
import shipCoral from "@/assets/ship-coral.jpg";
import { Users, Utensils, Waves, Binoculars } from "lucide-react";

const ships = [
  {
    name: "Galapagos Legend",
    image: shipLegend,
    capacity: "100 guests",
    description: "Our flagship expedition vessel with spacious cabins and panoramic decks.",
  },
  {
    name: "Coral I & II",
    image: shipCoral,
    capacity: "36 guests",
    description: "Intimate yachts for a more personal Galapagos experience.",
  },
];

const included = [
  { icon: Utensils, label: "All Meals" },
  { icon: Waves, label: "Snorkeling Gear" },
  { icon: Binoculars, label: "Guided Tours" },
  { icon: Users, label: "Naturalist Guide" },
];

export function FleetSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Our Fleet
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the perfect vessel for your Galapagos adventure
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ships.map((ship) => (
            <div key={ship.name} className="bg-card rounded-xl overflow-hidden border border-border">
              <img
                src={ship.image}
                alt={ship.name}
                className="w-full h-56 object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{ship.name}</h3>
                <p className="text-sm text-cta font-medium mb-2">
                  <Users className="w-4 h-4 inline mr-1" />
                  {ship.capacity}
                </p>
                <p className="text-sm text-muted-foreground">{ship.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="text-lg font-semibold text-center text-foreground mb-6">
            What's Included
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {included.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-cta" />
                </div>
                <span className="text-sm text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
