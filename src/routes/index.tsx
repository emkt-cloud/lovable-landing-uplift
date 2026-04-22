import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { FleetSection } from "@/components/landing/FleetSection";
import { ContactForm } from "@/components/landing/ContactForm";
import { StickyBar } from "@/components/landing/StickyBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galapagos Cruise Deals 2026 — GoGalapagos" },
      { name: "description", content: "Get 3 FREE nights + up to 10% OFF on Galapagos expedition cruises. Limited availability. Claim your personalized offer now." },
      { property: "og:title", content: "Galapagos Cruise Deals 2026 — GoGalapagos" },
      { property: "og:description", content: "Get 3 FREE nights + up to 10% OFF on Galapagos expedition cruises." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <SocialProof />
      <FleetSection />
      <ContactForm />
      <StickyBar />
      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border">
        © 2026 GoGalapagos. All rights reserved.
      </footer>
    </div>
  );
}
