import { Ship, Mountain, Utensils, Waves, CheckCircle2 } from "lucide-react";

const amenities = [
  { icon: Ship, label: "4, 5 & 8-day birding itineraries" },
  { icon: Mountain, label: "Daily dawn excursions with naturalist" },
  { icon: Utensils, label: "All meals & early-bird breakfasts" },
  { icon: Waves, label: "Scope-friendly decks & quiet zodiacs" },
];

export function OnboardSection() {
  return (
    <section className="section-light py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cta mb-3">
          Onboard Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Designed around bird activity
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Early breakfasts, flexible landings and naturalist guides certified by the Galapagos National Park — so you're on the trail when the birds are.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
          Naturalist guide, species checklist & spotting scope use included
        </div>
      </div>
    </section>
  );
}
