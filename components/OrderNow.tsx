"use client";

import { useState } from "react";
import { LOCATIONS } from "@/lib/site";

/**
 * "Order Now" button that opens a popover with real delivery links per
 * location — the actual conversion event, not a detour to the menu page.
 */
export function OrderNow({
  label = "Order Now",
  className,
  panelAlign = "right",
}: {
  label?: string;
  className: string;
  panelAlign?: "right" | "center";
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={className}
      >
        {label}
      </button>
      {open && (
        <>
          <button
            type="button"
            aria-label="Close order menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute z-50 mt-2 w-80 border border-brand-text/10 bg-white p-5 text-left text-brand-text shadow-2xl ${
              panelAlign === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
            }`}
          >
            <p className="font-heading text-sm">Order delivery from:</p>
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="mt-3">
                <p className="text-[11px] font-bold uppercase tracking-widest opacity-50">
                  {loc.short}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {loc.delivery.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-brand-surface px-3.5 py-1.5 text-xs font-bold transition hover:bg-brand-primary hover:text-white"
                    >
                      {p.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <p className="mt-4 border-t border-brand-text/10 pt-3 text-xs opacity-60">
              Even faster: call ahead for pickup —{" "}
              <a href={LOCATIONS[0].phoneHref} className="font-bold text-brand-primary">
                {LOCATIONS[0].phone}
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
