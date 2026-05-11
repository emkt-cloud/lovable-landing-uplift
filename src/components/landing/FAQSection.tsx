import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I claim the 3 FREE nights + 10% OFF promotion?",
    a: "Simply submit the form on this page. Our team will reach out within 24 hours to confirm availability, lock your cabin and apply your promotional pricing. The 3 free nights apply to GO Quito Hotel as part of your Galapagos cruise package.",
  },
  {
    q: "What's the deposit and payment policy?",
    a: "Promotional deals require immediate full non-refundable payment to secure availability. Spaces are limited, deals apply to new bookings only and cannot be combined with other offers. Payments are processed in U.S. Dollars; major credit cards and PayPal accepted.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Promotional fares are non-refundable. For standard rates: cancellations 121+ days prior to departure carry no penalty; 120–61 days a USD $500 fee per person applies; within 60 days the full cruise rate is forfeited. Date changes are preferable to cancellations and may carry a smaller penalty.",
  },
  {
    q: "What's included in the cruise rate?",
    a: "All meals onboard, naturalist guides (EN/ES), daily guided excursions, snorkeling gear, lounge access, sun deck and jacuzzi. Galapagos National Park fee ($200), Transit Control Card ($20), flights, Wi-Fi, wetsuit/kayak rentals, premium drinks, gratuities and travel insurance are not included.",
  },
  {
    q: "Do I need travel insurance?",
    a: "Yes. Travel insurance is mandatory for all passengers and must be arranged before arriving in Ecuador. We recommend coverage for trip cancellation, medical, accident, baggage and evacuation.",
  },
  {
    q: "Are there any age or health restrictions?",
    a: "Children under 12 require a signed waiver and a copy of a legal representative's passport. Passengers with physical disabilities or health conditions must notify us in writing in advance — for safety, we may decline service if information has been omitted.",
  },
  {
    q: "Can I book a scuba diving add-on?",
    a: "Yes, on select itineraries. A valid international PADI Open Water (or higher) certification is required. Depending on depth and dive plan, intermediate or advanced certification plus a minimum number of logged dives may be required.",
  },
  {
    q: "What languages are the guides in?",
    a: "All onboard guides are fluent in English and Spanish. German, Italian and French guides are available only when groups exceed 6 passengers and a non-refundable deposit is placed. No refund applies if a specific-language guide is not provided.",
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
