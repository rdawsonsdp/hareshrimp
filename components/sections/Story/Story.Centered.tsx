import type { StoryContent } from "@/lib/types";

/** Client-default pattern: centered story block. */
export function StoryCentered({ content }: { content: StoryContent }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
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
    </section>
  );
}
