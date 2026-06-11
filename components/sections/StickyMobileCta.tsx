import type { Cta } from "@/lib/types";

/** Persistent bottom action bar on small screens — one unmistakable next step. */
export function StickyMobileCta({ cta }: { cta: Cta }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden">
      <a
        href={cta.href}
        className="block rounded-full bg-brand-primary py-3.5 text-center text-lg font-semibold text-white shadow-xl"
      >
        {cta.label}
      </a>
    </div>
  );
}
