import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which months are best for birdwatching in the Galapagos?",
    a: "Birding is excellent year-round, but April–December is peak for waved albatross on Española (courtship April–June, chicks until December). March–May brings active courtship for blue-footed and Nazca boobies. June–November is the cool, dry Garúa season with abundant seabird activity and best pelagic conditions.",
  },
  {
    q: "How many species can I expect to see in 8 days?",
    a: "Most birders log 40–55 species on an 8-day northern/western circuit, including 20+ Galapagos endemics: waved albatross, flightless cormorant, Galapagos penguin, lava gull, Galapagos hawk, several Darwin's finches and the Floreana, Hood and Galapagos mockingbirds.",
  },
  {
    q: "Are the guides trained in ornithology?",
    a: "All onboard guides are certified Naturalist Guides by the Galapagos National Park and trained in local avifauna, calls and behaviour. They carry reference material and help you complete a daily species checklist. Specialised birding guides can be requested in advance for an additional fee.",
  },
  {
    q: "What gear should I bring?",
    a: "Bring 8x or 10x binoculars, a telephoto lens (300mm+) and neutral-coloured clothing. We provide spotting scopes onboard for shared use. Tripods are welcome on landings. A waterproof dry bag for zodiac transfers is recommended.",
  },
  {
    q: "How do I claim the 3 FREE nights + 10% OFF promotion?",
    a: "Submit the form on this page. Our team will confirm availability within 24 hours, lock your cabin and apply the promotional pricing. The 3 free nights are at GO Quito Hotel as part of your Galapagos birding package.",
  },
  {
    q: "What's the deposit and payment policy?",
    a: "Promotional fares require immediate full non-refundable payment to secure availability. Spaces are limited, deals apply to new bookings only and cannot be combined with other offers. Payments are processed in U.S. Dollars; major credit cards and PayPal accepted.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Promotional fares are non-refundable. For standard rates: cancellations 121+ days prior carry no penalty; 120–61 days a USD $500 per-person fee applies; within 60 days the full cruise rate is forfeited. Date changes are preferable to cancellations and may carry a smaller penalty.",
  },
  {
    q: "What's included for birders specifically?",
    a: "All meals (with early-bird breakfasts before dawn landings), naturalist guide, daily excursions to bird hotspots, species checklist, evening briefings, snorkeling gear and shared spotting scopes. Park fee ($200), Transit Control Card ($20), flights, Wi-Fi, wetsuits, premium drinks, gratuities and insurance are not included.",
  },
  {
    q: "Is travel insurance required?",
    a: "Yes. Travel insurance is mandatory for all passengers and must be arranged before arriving in Ecuador. We recommend coverage for trip cancellation, medical, accident, baggage, evacuation and high-value optical equipment.",
  },
  {
    q: "Are there age or health restrictions?",
    a: "Children under 12 require a signed waiver and a copy of a legal representative's passport. Passengers with physical disabilities or health conditions must notify us in writing in advance — for safety, we may decline service if information has been omitted.",
  },
];

export function FAQSection() {
  return (
    <section className="section-light py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cta mb-3">
            Need to know
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="bg-card border border-border rounded-xl px-5">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b last:border-b-0 border-border"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/80 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Promotional terms are subject to availability and may be modified or withdrawn without
          previous notice. Different offers cannot be combined.
        </p>
      </div>
    </section>
  );
}
