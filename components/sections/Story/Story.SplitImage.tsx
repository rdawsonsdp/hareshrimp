/* eslint-disable @next/next/no-img-element */
import type { StoryContent } from "@/lib/types";

/** Aspirational pattern: split story — copy one side, image the other. */
export function StorySplitImage({ content }: { content: StoryContent }) {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">{content.heading}</h2>
          {content.body.map((b, i) => (
            <p key={i} className="mt-4 leading-relaxed opacity-80">
              {b}
            </p>
          ))}
          {content.cta && (
            <a href={content.cta.href} className="mt-6 inline-block font-semibold text-brand-primary underline">
              {content.cta.label}
            </a>
          )}
        </div>
        {content.image ? (
          <img src={content.image.src} alt={content.image.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" />
        ) : (
          <div className="aspect-[4/3] w-full rounded-2xl bg-brand-background" />
        )}
      </div>
    </section>
  );
}
