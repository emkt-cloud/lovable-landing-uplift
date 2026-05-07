import {
  Utensils,
  Wine,
  Sparkles,
  Wifi,
  Waves,
  Fish,
  Compass,
  Mountain,
  CheckCircle2,
} from "lucide-react";

const amenities = [
  { icon: Utensils, label: "Gourmet Dining" },
  { icon: Wine, label: "Lounge & Bar" },
  { icon: Sparkles, label: "Sun Deck & Jacuzzi" },
  { icon: Wifi, label: "Onboard Wi-Fi" },
  { icon: Waves, label: "Snorkeling & Kayaking" },
  { icon: Fish, label: "Scuba Diving (certified)" },
  { icon: Compass, label: "Glass-Bottom Boat" },
  { icon: Mountain, label: "Daily Guided Hikes" },
];

export function OnboardSection() {
  return (
    <section className="section-light py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cta mb-3">
          Onboard Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Everything you need, all included
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Meals, naturalist guides and gear come standard — so you can focus on the wildlife.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-3"
            >
              <span className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center">
                <a.icon className="w-5 h-5 text-cta" />
              </span>
              <p className="text-sm font-medium text-foreground">{a.label}</p>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="w-4 h-4 text-cta" />
          All meals, naturalist guides & snorkeling gear included
        </div>
      </div>
    </section>
  );
}
