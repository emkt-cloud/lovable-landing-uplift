import shipCoral from "@/assets/ship-coral.jpg";
import { Button } from "@/components/ui/button";
import { Users, Anchor, Calendar, Bed, Compass, Binoculars } from "lucide-react";

const stats = [
  { icon: Users, label: "Capacity", value: "Coral I · 36   ·   Coral II · 20" },
  { icon: Bed, label: "Group size", value: "Small birding parties" },
  { icon: Anchor, label: "Style", value: "Quiet, low-impact landings" },
  { icon: Calendar, label: "Itineraries", value: "4, 5 & 8 days" },
  { icon: Compass, label: "Routes", value: "North · South · East circuits" },
  { icon: Binoculars, label: "Guiding", value: "Naturalist specialised in avifauna" },
];

function scrollToForm() {
  document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
}

export function FleetSection() {
  return (
    <section className="section-light py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-12 items-end">
          <div className="md:col-span-7">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cta mb-3">
              The Ship · Coral I & Coral II
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
              Small-group yachts,<br />
              built for serious birders.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted-foreground leading-relaxed">
              Intimate twin yachts with tighter groups, quieter zodiacs and flexible
              landings to follow the birds. Panoramic lounge for sea-watching, open
              deck for pelagic species and naturalist guides specialised in Galápagos
              avifauna.
            </p>
          </div>
        </div>

        {/* Editorial layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Image */}
          <div className="lg:col-span-7 relative">
            <div className="overflow-hidden rounded-sm">
              <img
                src={shipCoral}
                alt="Coral I & Coral II yachts in the Galápagos"
                className="w-full h-[420px] md:h-[520px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-5 left-6 bg-background border border-border rounded-sm px-5 py-3 items-center gap-3 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cta" />
              <span className="text-xs font-semibold tracking-widest uppercase text-foreground">
                Coral I & II  ·  Twin Expedition Yachts
              </span>
            </div>
          </div>

          {/* Stats panel */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border-t border-border">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-12 gap-4 py-4 border-b border-border items-center"
                >
                  <div className="col-span-1 text-cta">
                    <s.icon className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div className="col-span-5 text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="col-span-6 text-sm font-medium text-foreground text-right">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={scrollToForm}
                className="bg-cta text-cta-foreground hover:bg-cta/90 rounded-sm font-semibold tracking-wide"
                size="lg"
              >
                Request a Coral quote →
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                Limited spaces · 2026 birding departures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
