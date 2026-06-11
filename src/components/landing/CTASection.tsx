import { ArrowRight } from "lucide-react";

export function CTASection() {
  const scrollToForm = () =>
    document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-light py-16 px-4">
      <div className="max-w-4xl mx-auto text-center bg-card border border-border rounded-2xl p-10 md:p-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Ready to tick off your Galapagos list?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          3 FREE nights at GO Quito Hotel + 10% OFF on your birding cruise. Albatross season (April–December) sells out fastest — request your personalised quote in under 24 hours.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 bg-cta text-cta-foreground hover:opacity-90 transition-opacity text-lg font-bold px-10 py-4 rounded-lg shadow-lg shadow-cta/30 cursor-pointer"
        >
          Request My Birding Quote
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
