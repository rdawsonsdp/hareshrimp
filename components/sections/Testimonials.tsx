/**
 * Testimonials grid. Quotes are NOT auto-extracted — drop the client's real
 * reviews in here (or extend content-model.json with a testimonials array).
 */
export function Testimonials() {
  const placeholders = [
    { quote: "TODO: paste a real customer review here.", name: "Customer name" },
    { quote: "TODO: paste a real customer review here.", name: "Customer name" },
    { quote: "TODO: paste a real customer review here.", name: "Customer name" },
  ];
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">What customers say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {placeholders.map((t, i) => (
            <figure key={i} className="rounded-xl bg-brand-background p-6">
              <blockquote className="leading-relaxed opacity-80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
