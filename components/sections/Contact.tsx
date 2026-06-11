import type { ContactContent } from "@/lib/types";

export function Contact({ content }: { content: ContactContent }) {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Visit us</h2>
          {content.addresses.map((a, i) => (
            <p key={i} className="mt-3 opacity-80">
              {a}
            </p>
          ))}
          {content.phones.map((p, i) => (
            <p key={i} className="mt-3 font-semibold">
              <a href={`tel:${p.replace(/[^\d]/g, "")}`} className="text-brand-primary">
                {p}
              </a>
            </p>
          ))}
          {content.emails.map((e, i) => (
            <p key={i} className="mt-1">
              <a href={`mailto:${e}`} className="text-brand-primary underline">
                {e}
              </a>
            </p>
          ))}
        </div>
        <div className="flex min-h-48 items-center justify-center rounded-2xl bg-brand-background opacity-60">
          <p>TODO: embed a map here</p>
        </div>
      </div>
    </section>
  );
}
