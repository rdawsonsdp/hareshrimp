/* eslint-disable @next/next/no-img-element */
import type { HeroContent } from "@/lib/types";

/** Client-default pattern: split hero — copy card beside imagery. */
export function HeroSplitCard({ content }: { content: HeroContent }) {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">{content.heading}</h1>
          {content.sub && <p className="mt-4 text-lg opacity-80">{content.sub}</p>}
          {content.cta && (
            <a
              href={content.cta.href}
              className="mt-8 inline-block rounded-lg bg-brand-primary px-8 py-3 font-semibold text-white transition hover:opacity-90"
            >
              {content.cta.label}
            </a>
          )}
        </div>
        {content.image && (
          <img
            src={content.image.src}
            alt={content.image.alt}
            className="aspect-square w-full rounded-2xl object-cover"
          />
        )}
      </div>
    </section>
  );
}
