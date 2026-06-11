import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { FleetSection } from "@/components/landing/FleetSection";
import { ItinerarySection } from "@/components/landing/ItinerarySection";
import { IncludedSection } from "@/components/landing/IncludedSection";
import { OnboardSection } from "@/components/landing/OnboardSection";
import { HotelSection } from "@/components/landing/HotelSection";
import { CTASection } from "@/components/landing/CTASection";
import { FAQSection } from "@/components/landing/FAQSection";
import { ContactForm } from "@/components/landing/ContactForm";
import { StickyBar } from "@/components/landing/StickyBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galapagos Birdwatching Cruises 2026 — GoGalapagos" },
      { name: "description", content: "Birding expedition cruises in the Galapagos: waved albatross, blue-footed boobies, Darwin's finches. 3 FREE nights + 10% OFF. Naturalist-led, small groups." },
      { property: "og:title", content: "Galapagos Birdwatching Cruises 2026 — GoGalapagos" },
      { property: "og:description", content: "Naturalist-led birding cruises with 3 FREE nights + 10% OFF on selected departures." },
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
      <ItinerarySection />
      <IncludedSection />
      <OnboardSection />
      <HotelSection />
      <CTASection />
      <FAQSection />
      <ContactForm />
      <StickyBar />
      <footer className="section-light py-6 text-center text-xs text-muted-foreground border-t border-border">
        © 2026 GoGalapagos. All rights reserved.
      </footer>
    </div>
  );
}
