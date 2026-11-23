"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/lib/config";

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-cream-200 rounded-2xl border border-cream-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-walnut-950 transition-colors hover:bg-cream-50 sm:px-6"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={[
                    "h-5 w-5 shrink-0 text-walnut-500 transition-transform duration-200",
                    isOpen ? "rotate-180 text-leaf-700" : "",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 text-sm leading-relaxed text-walnut-700 sm:px-6 sm:text-base"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
