import type { FaqItem } from "@/lib/types";

export function Faq({ items }: { items: FaqItem[] }) {
  const list =
    items.length > 0
      ? items
      : [{ question: "TODO: add FAQs to data/content-model.json", answer: "This section renders them automatically." }];
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">Frequently asked questions</h2>
      <div className="divide-y divide-brand-text/10">
        {list.map((f, i) => (
          <details key={i} className="group py-4">
            <summary className="cursor-pointer list-none font-semibold">
              {f.question}
              <span className="float-right transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 leading-relaxed opacity-80">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
