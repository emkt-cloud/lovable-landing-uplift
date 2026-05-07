import { MapPin, Plane, Sunrise, Sunset } from "lucide-react";

type Day = { day: string; am: string; pm: string };

const days: Day[] = [
  {
    day: "Monday",
    am: "Arrival at Baltra Airport — welcome aboard the Galapagos Legend",
    pm: "Black Turtle Cove (Santa Cruz) — glide through mangroves spotting rays & reef sharks",
  },
  {
    day: "Tuesday",
    am: "El Barranco & Prince Phillip's Steps (Genovesa) — seabird paradise atop dramatic cliffs",
    pm: "Darwin Bay (Genovesa) — frigatebirds, red-footed boobies & a coral-sand beach",
  },
  {
    day: "Wednesday",
    am: "South Plaza Island — vivid red sesuvium plants and playful land iguanas",
    pm: "Santa Fe Island — snorkel with sea lions in a turquoise bay",
  },
  {
    day: "Thursday",
    am: "Bachas Beach & Charles Darwin Research Station — meet the giant tortoises",
    pm: "Mosquera Islet — sandy haven of sea lion colonies",
  },
  {
    day: "Friday",
    am: "Egas Port (Santiago) — fur seal grottos and lava-rock tide pools",
    pm: "Rabida Island — surreal red-sand beach and flamingo lagoon",
  },
  {
    day: "Saturday",
    am: "Urbina Bay (Isabela) — uplifted coral reef and giant land iguanas",
    pm: "Tagus Cove (Isabela) — historic anchorage with panoramic Darwin Lake views",
  },
  {
    day: "Sunday",
    am: "Punta Espinosa (Fernandina) — the largest marine iguana colony in the world",
    pm: "Punta Vicente Roca (Isabela) — zodiac ride past sea turtles & Galapagos penguins",
  },
  {
    day: "Monday",
    am: "Highlands Tortoise Reserve (Santa Cruz) — wild giant tortoises in their natural habitat",
    pm: "Transfer to Baltra Airport — farewell to the islands",
  },
];

export function ItinerarySection() {
  return (
    <section className="section-light py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — title + map placeholder */}
          <div className="lg:sticky lg:top-8 self-start">
            <p className="text-sm text-muted-foreground mb-1">Sample Itinerary — Galapagos Legend</p>
            <h2 className="text-3xl md:text-4xl font-bold text-cta mb-2">
              North & West Expedition
            </h2>
            <p className="text-lg text-foreground/80 mb-6">8 Days / 7 Nights</p>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-cta mb-3">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Route Highlights</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• 13 visitor sites across 8 islands</li>
                <li>• Genovesa, Isabela & Fernandina — only on long itineraries</li>
                <li>• Snorkeling, kayaking & guided hikes daily</li>
                <li>• Naturalist guides certified by the National Park</li>
              </ul>
            </div>
          </div>

          {/* Right — day-by-day */}
          <div className="space-y-5">
            {days.map((d, i) => (
              <div key={i} className="border-b border-border pb-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-cta text-cta-foreground text-xs font-bold px-2.5 py-1 rounded">
                    Day {i + 1}
                  </span>
                  <h3 className="font-semibold text-foreground">{d.day}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    {i === 0 ? (
                      <Plane className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                    ) : (
                      <Sunrise className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                    )}
                    <p className="text-foreground/80">
                      <span className="font-semibold text-foreground">am:</span> {d.am}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    {i === days.length - 1 ? (
                      <Plane className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                    ) : (
                      <Sunset className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                    )}
                    <p className="text-foreground/80">
                      <span className="font-semibold text-foreground">pm:</span> {d.pm}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
