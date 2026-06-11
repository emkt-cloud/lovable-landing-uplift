import { useState } from "react";
import { MapPin, Sunrise, Sunset, Plane } from "lucide-react";

type Day = {
  label: string;
  date: string;
  title: string;
  am: string;
  pm: string;
  image: string;
};

const days: Day[] = [
  {
    label: "Day 1",
    date: "Monday",
    title: "Baltra → Black Turtle Cove",
    am: "Arrival at Baltra. Welcome briefing and species checklist handover with your naturalist guide.",
    pm: "Black Turtle Cove — silent zodiac drift through mangroves: lava herons, yellow warblers, brown pelicans and great blue herons.",
    image:
      "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 2",
    date: "Tuesday",
    title: "Genovesa — Bird Island",
    am: "Prince Phillip's Steps — red-footed boobies, Nazca boobies, great frigatebirds and short-eared owls hunting storm petrels in broad daylight.",
    pm: "Darwin Bay — swallow-tailed gulls (the world's only nocturnal gull), lava gulls and large ground finches at arm's length.",
    image:
      "https://images.unsplash.com/photo-1583309217394-d4ea7fd86ba4?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 3",
    date: "Wednesday",
    title: "South Plaza & Santa Fe",
    am: "South Plaza — Audubon shearwaters, red-billed tropicbirds nesting in the cliffs and the endemic Galapagos shearwater overhead.",
    pm: "Santa Fe — Galapagos hawk, Galapagos dove and the endemic Santa Fe land iguana along the trail.",
    image:
      "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 4",
    date: "Thursday",
    title: "Santa Cruz Highlands",
    am: "Highlands scalesia forest — vermilion flycatcher, woodpecker finch and the elusive Galapagos rail in pastures and ponds.",
    pm: "Twin craters & lava tunnels — short-eared owl, dark-billed cuckoo and Darwin's tree finches.",
    image:
      "https://images.unsplash.com/photo-1551649001-7a2482d98d05?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 5",
    date: "Friday",
    title: "Floreana — Punta Cormorant",
    am: "Flamingo lagoon — greater flamingos feeding, white-cheeked pintails, common stilts and migratory shorebirds.",
    pm: "Post Office Bay & Champion Islet — Floreana mockingbird (one of the rarest birds on Earth) viewed from the panga.",
    image:
      "https://images.unsplash.com/photo-1535116519611-6dadb78e6f9b?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 6",
    date: "Saturday",
    title: "Española — Punta Suárez",
    am: "Waved albatross colony (April–December) — courtship dances at point-blank range, Nazca boobies and the endemic Española mockingbird.",
    pm: "Gardner Bay — Hood mockingbird, Galapagos hawk and yellow warblers along the beach.",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 7",
    date: "Sunday",
    title: "Fernandina & Isabela",
    am: "Punta Espinosa — flightless cormorants nesting, Galapagos penguins (the only penguin north of the equator) and lava herons fishing.",
    pm: "Punta Vicente Roca — pelagic zodiac: brown noddies, Audubon shearwaters and possible whale sightings.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 8",
    date: "Monday",
    title: "Highlands → Departure",
    am: "El Chato Reserve — last chance for vegetarian finch, Galapagos flycatcher and a final tortoise encounter in the cloud forest.",
    pm: "Transfer to Baltra Airport with your fully annotated species checklist.",
    image:
      "https://images.unsplash.com/photo-1500829243541-74b677fecc30?auto=format&fit=crop&w=1200&q=70",
  },
];

export function ItinerarySection() {
  const [active, setActive] = useState(0);
  const day = days[active];
  const isFirst = active === 0;
  const isLast = active === days.length - 1;

  return (
    <section className="section-light py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-1">Sample Birding Itinerary — Galapagos Legend</p>
          <h2 className="text-3xl md:text-4xl font-bold text-cta">
            North, West & Southern Birding Circuit
          </h2>
          <p className="text-lg text-foreground/80">8 Days / 7 Nights · 50+ species checklist</p>
        </div>

        {/* Mobile: horizontal day tabs */}
        <div className="lg:hidden -mx-4 px-4 mb-4 overflow-x-auto">
          <div className="flex gap-2 w-max pb-2">
            {days.map((d, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold border transition ${
                    isActive
                      ? "bg-cta text-cta-foreground border-cta"
                      : "bg-card text-foreground border-border"
                  }`}
                >
                  Day {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-6">
          {/* Desktop day rail */}
          <aside className="hidden lg:block space-y-1.5">
            <div className="bg-cta text-cta-foreground rounded-lg px-3 py-2 font-semibold text-xs uppercase tracking-wider">
              Itinerary & Excursions
            </div>
            {days.map((d, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-lg border p-2.5 flex gap-2.5 items-center transition ${
                    isActive
                      ? "bg-cta/10 border-cta"
                      : "bg-card border-border hover:border-cta/50"
                  }`}
                >
                  <div
                    className={`shrink-0 w-9 h-9 rounded-md flex flex-col items-center justify-center text-[9px] font-bold uppercase ${
                      isActive ? "bg-cta text-cta-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <span className="leading-none">Day</span>
                    <span className="text-sm leading-none mt-0.5">{i + 1}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground leading-tight">{d.date}</p>
                    <p className="text-xs font-semibold text-foreground truncate leading-tight">
                      {d.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </aside>

          {/* Selected day */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="aspect-[16/6] lg:aspect-[16/5] w-full overflow-hidden bg-muted">
              <img
                src={day.image}
                alt={day.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-cta text-cta-foreground text-xs font-bold px-2.5 py-1 rounded">
                  {day.label}
                </span>
                <span className="text-sm text-muted-foreground">{day.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{day.title}</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border p-4">
                  <div className="flex items-center gap-2 text-cta mb-2">
                    {isFirst ? <Plane className="w-4 h-4" /> : <Sunrise className="w-4 h-4" />}
                    <span className="text-xs font-bold uppercase tracking-wider">Morning</span>
                  </div>
                  <p className="text-sm text-foreground/80">{day.am}</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <div className="flex items-center gap-2 text-cta mb-2">
                    {isLast ? <Plane className="w-4 h-4" /> : <Sunset className="w-4 h-4" />}
                    <span className="text-xs font-bold uppercase tracking-wider">Afternoon</span>
                  </div>
                  <p className="text-sm text-foreground/80">{day.pm}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-cta" />
                Visitor sites operated under Galapagos National Park regulations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
