/* eslint-disable @next/next/no-img-element */
import type { HeroContent } from "@/lib/types";

/** Aspirational pattern: full-bleed hero, single dominant CTA. */
export function HeroFullBleed({ content }: { content: HeroContent }) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-brand-text text-center">
      {content.image && (
        <img
          src={content.image.src}
          alt={content.image.alt}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      )}
      <div className="relative z-10 max-w-2xl px-6 py-24">
        <h1 className="text-4xl font-bold text-white drop-shadow md:text-6xl">{content.heading}</h1>
        {content.sub && <p className="mt-4 text-lg text-white/90">{content.sub}</p>}
        {content.cta && (
          <a
            href={content.cta.href}
            className="mt-8 inline-block rounded-full bg-brand-primary px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            {content.cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
