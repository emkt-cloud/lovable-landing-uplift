import { useState } from "react";
import { CalendarIcon, Send, Shield, Clock, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function ContactForm() {
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="claim-form" className="section-light py-16 px-4">
        <div className="max-w-lg mx-auto text-center py-12">
          <div className="w-16 h-16 bg-cta/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
          <p className="text-muted-foreground">
            We've received your request. Our team will send your personalized offer within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="claim-form" className="section-light py-16 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">
          Claim Your Galapagos Birding Deal
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Personalised quote with departure dates by bird season — in under 24 hours
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
            <Input
              required
              placeholder="John Smith"
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
            <Input
              required
              type="email"
              placeholder="john@example.com"
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Number of Guests *</label>
            <Select required>
              <SelectTrigger className="bg-secondary border-border text-foreground">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <SelectItem key={n} value={String(n)}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </SelectItem>
                ))}
                <SelectItem value="9+">9+ guests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Preferred Travel Date *</label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "flex h-9 w-full items-center rounded-md border border-border bg-secondary px-3 py-1 text-sm",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              WhatsApp / Phone <span className="text-muted-foreground">(optional)</span>
            </label>
            <Input
              type="tel"
              placeholder="+1 555 123 4567"
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cta text-cta-foreground hover:opacity-90 transition-opacity text-lg font-bold py-4 rounded-lg shadow-lg shadow-cta/30 cursor-pointer mt-2"
          >
            Get My Offer Now
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> No commitment
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5" /> Free quote
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Reply within 24h
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
