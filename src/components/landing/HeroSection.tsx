import { Star, Eye, Gift, Clock, ShieldCheck } from "lucide-react";

const heroImg =
  "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1920&q=70";
import { useState, useEffect } from "react";

function LiveViewerCounter() {
  const [count, setCount] = useState(48);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return Math.max(31, Math.min(67, next));
      });
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 text-sm text-foreground/80">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
      </span>
      <Eye className="w-4 h-4 text-foreground/60" />
      <span>
        <strong className="text-foreground">{count}</strong> birders viewing departures right now
      </span>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2">
      {[
        { value: timeLeft.days, label: "D" },
        { value: timeLeft.hours, label: "H" },
        { value: timeLeft.minutes, label: "M" },
        { value: timeLeft.seconds, label: "S" },
      ].map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-1">
          {i > 0 && <span className="text-cta font-bold">:</span>}
          <span className="bg-background/60 rounded px-2 py-1 text-lg font-bold text-foreground tabular-nums">
            {pad(unit.value)}
          </span>
          <span className="text-xs text-foreground/50">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <img
        src={heroImg}
        alt="Blue-footed Booby in the Galapagos Islands"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cta text-cta" />
                ))}
              </div>
              <span className="text-sm text-foreground/80">4.8 on Tripadvisor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Galapagos
              <br />
              <span className="text-cta">Birdwatching Cruises 2026</span>
            </h1>

            <p className="text-foreground/70 text-lg max-w-md">
              Spend 8 days tracking endemic seabirds, finches and waved albatross with naturalist guides — aboard the only expedition fleet that reaches the archipelago's top birding sites.
            </p>

            <button
              onClick={scrollToForm}
              className="bg-cta text-cta-foreground hover:opacity-90 transition-opacity text-lg font-bold px-10 py-4 rounded-lg shadow-lg shadow-cta/30 cursor-pointer"
            >
              Get Your Offer
            </button>

            <div className="pt-2">
              <LiveViewerCounter />
            </div>
          </div>

          {/* Right column — Offer card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-card/70 backdrop-blur-md border border-border rounded-2xl p-8 max-w-sm w-full space-y-6 shadow-2xl">
              {/* Countdown timer */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-cta text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  Offer Expires In
                </div>
                <CountdownTimer />
              </div>

              {/* Main offer */}
              <div className="space-y-3">
                <div className="flex items-baseline gap-3">
                  <Gift className="w-8 h-8 text-cta flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-3xl font-bold text-cta">3 FREE Nights</p>
                    <p className="text-foreground/60 text-sm">at GO Quito Hotel</p>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-3">
                  <p className="text-2xl font-bold text-foreground">
                    + <span className="text-cta">10% OFF</span>
                  </p>
                  <p className="text-foreground/60 text-sm">On selected departure dates</p>
                </div>
              </div>

              {/* Trust signals */}
              <div className="space-y-2 pt-2 border-t border-border/50">
                {[
                  "Best price guaranteed",
                  "No commitment required",
                  "Free personalized quote",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-foreground/80">
                    <ShieldCheck className="w-4 h-4 text-ocean-light flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
