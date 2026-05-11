import {
  Utensils,
  Wine,
  Sparkles,
  Mountain,
  Waves,
  Compass,
  Anchor,
  Shirt,
  Wifi,
  Plane,
  Shield,
  CreditCard,
} from "lucide-react";

const included = [
  { icon: Utensils, label: "All meals onboard" },
  { icon: Wine, label: "Lounge & bar access" },
  { icon: Sparkles, label: "Sun deck & jacuzzi" },
  { icon: Mountain, label: "Daily guided hikes" },
  { icon: Waves, label: "Snorkeling gear" },
  { icon: Compass, label: "Naturalist guides (EN/ES)" },
];

const notIncluded = [
  { icon: Plane, label: "International & domestic flights" },
  { icon: CreditCard, label: "Galapagos National Park fee ($200)" },
  { icon: CreditCard, label: "Transit Control Card ($20)" },
  { icon: Anchor, label: "Kayak rental" },
  { icon: Shirt, label: "Wetsuit rental" },
  { icon: Wifi, label: "Onboard Wi-Fi" },
  { icon: Shield, label: "Travel insurance" },
  { icon: Wine, label: "Premium beverages & gratuities" },
];

export function IncludedSection() {
  return (
    <section className="section-light py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cta mb-3">
            What's Covered
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Included & Not Included
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-cta/15 text-cta flex items-center justify-center text-sm font-bold">
                ✓
              </span>
              Included
            </h3>
            <ul className="space-y-3">
              {included.map((i) => (
                <li key={i.label} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-md bg-cta/10 flex items-center justify-center shrink-0">
                    <i.icon className="w-4 h-4 text-cta" />
                  </span>
                  <span className="text-sm text-foreground">{i.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-muted text-foreground/70 flex items-center justify-center text-sm font-bold">
                +
              </span>
              Not Included
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((i) => (
                <li key={i.label} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-md bg-muted flex items-center justify-center shrink-0">
                    <i.icon className="w-4 h-4 text-foreground/70" />
                  </span>
                  <span className="text-sm text-foreground">{i.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
