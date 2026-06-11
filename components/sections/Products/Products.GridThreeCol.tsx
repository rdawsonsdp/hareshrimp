/* eslint-disable @next/next/no-img-element */
import type { Product } from "@/lib/types";

/** Aspirational pattern: three-column product grid, price-bearing CTAs. */
export function ProductsGridThreeCol({ products, heading }: { products: Product[]; heading?: string }) {
  if (products.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16 text-center opacity-60">
        <p>TODO: add products to data/content-model.json to populate this grid.</p>
      </section>
    );
  }
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {heading && <h2 className="mb-8 text-3xl font-bold">{heading}</h2>}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <a key={p.name} href={p.url ?? "#"} className="group block">
            {p.image ? (
              <img
                src={p.image}
                alt={p.name}
                className="aspect-square w-full rounded-xl object-cover transition group-hover:scale-[1.02]"
              />
            ) : (
              <div className="aspect-square w-full rounded-xl bg-brand-surface" />
            )}
            <h3 className="mt-3 font-semibold">{p.name}</h3>
            <p className="mt-1 inline-block rounded-full bg-brand-primary px-4 py-1 text-sm font-medium text-white">
              {p.price ? `${p.price} · Order` : "Order"}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
