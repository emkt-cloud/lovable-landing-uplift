import { useEffect, useState } from "react";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const form = document.getElementById("claim-form");
      if (!form) {
        setVisible(window.scrollY > 300);
        return;
      }
      const rect = form.getBoundingClientRect();
      setVisible(window.scrollY > 300 && rect.top > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-3 md:hidden">
      <button
        onClick={() =>
          document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" })
        }
        className="w-full bg-cta text-cta-foreground font-bold py-3 rounded-lg shadow-lg shadow-cta/30 cursor-pointer"
      >
        Get Your Offer
      </button>
    </div>
  );
}
