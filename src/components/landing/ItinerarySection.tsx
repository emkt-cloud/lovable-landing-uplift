import { useState } from "react";
import {
  MapPin,
  Sunrise,
  Sunset,
  Plane,
  Check,
  Plus,
  Utensils,
  Wine,
  Sparkles,
  Wifi,
  Waves,
  Mountain,
  Anchor,
  Shirt,
} from "lucide-react";

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
    am: "Arrival at Baltra Airport — welcome aboard the Galapagos Legend with a refreshing tropical cocktail.",
    pm: "Black Turtle Cove (Santa Cruz) — glide silently through mangroves spotting rays, sea turtles & reef sharks.",
    image:
      "https://images.unsplash.com/photo-1518790802543-9c1f17fdb4d8?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 2",
    date: "Tuesday",
    title: "Genovesa — Bird Island",
    am: "Prince Phillip's Steps — climb dramatic cliffs into a seabird paradise of frigatebirds & Nazca boobies.",
    pm: "Darwin Bay — coral-sand beach surrounded by red-footed boobies and swallow-tailed gulls.",
    image:
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 3",
    date: "Wednesday",
    title: "South Plaza & Santa Fe",
    am: "South Plaza Island — vivid red sesuvium plants and playful land iguanas under cactus forests.",
    pm: "Santa Fe Island — snorkel with curious sea lions in a turquoise, sheltered bay.",
    image:
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 4",
    date: "Thursday",
    title: "Santa Cruz Highlands",
    am: "Bachas Beach & Charles Darwin Station — meet the giant tortoises and learn about island conservation.",
    pm: "Mosquera Islet — sandy haven of sea lion colonies, perfect for sunset photography.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 5",
    date: "Friday",
    title: "Santiago & Rabida",
    am: "Egas Port (Santiago) — fur seal grottos and lava-rock tide pools teeming with marine life.",
    pm: "Rabida Island — surreal red-sand beach, flamingo lagoon & some of the best snorkeling of the trip.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 6",
    date: "Saturday",
    title: "Isabela — Urbina & Tagus",
    am: "Urbina Bay — walk over an uplifted coral reef in search of giant land iguanas.",
    pm: "Tagus Cove — kayak past historic graffiti and hike to Darwin Lake's panoramic viewpoint.",
    image:
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 7",
    date: "Sunday",
    title: "Fernandina & Isabela",
    am: "Punta Espinosa (Fernandina) — the largest marine iguana colony on Earth, surrounded by lava fields.",
    pm: "Punta Vicente Roca — zodiac ride past sea turtles, Galapagos penguins & flightless cormorants.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=70",
  },
  {
    label: "Day 8",
    date: "Monday",
    title: "Highlands → Departure",
    am: "Highlands Tortoise Reserve — wild giant tortoises in their natural cloud-forest habitat.",
    pm: "Transfer to Baltra Airport — farewell to the islands with memories for a lifetime.",
    image:
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=70",
  },
];

const included = [
  { icon: Utensils, label: "Dining" },
  { icon: Wine, label: "Lounge & Bar" },
  { icon: Sparkles, label: "Jacuzzi" },
  { icon: Mountain, label: "Daily Guided Hikes" },
  { icon: Waves, label: "Snorkeling" },
];

const addOns = [
  { icon: Anchor, label: "Kayak" },
  { icon: Shirt, label: "Wetsuit" },
  { icon: Wifi, label: "Wi-Fi" },
];

export function ItinerarySection() {
  const [active, setActive] = useState(0);
  const day = days[active];
  const isFirst = active === 0;
  const isLast = active === days.length - 1;

  return (
    <section className="section-light py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1">Sample Itinerary — Galapagos Legend</p>
          <h2 className="text-3xl md:text-4xl font-bold text-cta">
            North & West Expedition
          </h2>
          <p className="text-lg text-foreground/80">8 Days / 7 Nights</p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Left — day rail */}
          <aside className="space-y-2 lg:max-h-[640px] lg:overflow-y-auto pr-1">
            <div className="bg-cta text-cta-foreground rounded-lg px-4 py-3 font-semibold text-sm uppercase tracking-wider">
              Itinerary & Excursions
            </div>
            {days.map((d, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-lg border p-3 flex gap-3 items-start transition ${
                    isActive
                      ? "bg-cta/10 border-cta"
                      : "bg-card border-border hover:border-cta/50"
                  }`}
                >
                  <div
                    className={`shrink-0 w-10 h-10 rounded-md flex flex-col items-center justify-center text-[10px] font-bold uppercase ${
                      isActive ? "bg-cta text-cta-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <span className="leading-none">Day</span>
                    <span className="text-base leading-none mt-0.5">{i + 1}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{d.date}</p>
                    <p className="text-sm font-semibold text-foreground truncate">{d.title}</p>
                  </div>
                </button>
              );
            })}
          </aside>

          {/* Right — selected day */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="aspect-[16/8] w-full overflow-hidden bg-muted">
              <img
                src={day.image}
                alt={day.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-cta text-cta-foreground text-xs font-bold px-2.5 py-1 rounded">
                  {day.label}
                </span>
                <span className="text-sm text-muted-foreground">{day.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-5">{day.title}</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
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

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-cta/15 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-cta" />
                    </span>
                    <p className="text-sm font-semibold text-foreground">Included</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {included.map((a) => (
                      <li
                        key={a.label}
                        className="inline-flex items-center gap-1.5 text-xs bg-cta/10 text-foreground rounded-full px-3 py-1.5 border border-cta/20"
                      >
                        <a.icon className="w-3.5 h-3.5 text-cta" />
                        {a.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                      <Plus className="w-3.5 h-3.5 text-foreground/70" />
                    </span>
                    <p className="text-sm font-semibold text-foreground">Additional Cost</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {addOns.map((a) => (
                      <li
                        key={a.label}
                        className="inline-flex items-center gap-1.5 text-xs bg-muted text-foreground rounded-full px-3 py-1.5 border border-border"
                      >
                        <a.icon className="w-3.5 h-3.5 text-foreground/70" />
                        {a.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
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
