/* eslint-disable @next/next/no-img-element */
import type { Product } from "@/lib/types";

/** Client-default pattern: horizontally scrolling product row. */
export function ProductsRowScroll({ products, heading }: { products: Product[]; heading?: string }) {
  if (products.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16 text-center opacity-60">
        <p>TODO: add products to data/content-model.json to populate this row.</p>
      </section>
    );
  }
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        {heading && <h2 className="mb-6 text-3xl font-bold">{heading}</h2>}
      </div>
      <div className="flex gap-6 overflow-x-auto px-6 pb-4">
        {products.map((p) => (
          <a key={p.name} href={p.url ?? "#"} className="w-64 flex-shrink-0">
            {p.image ? (
              <img src={p.image} alt={p.name} className="aspect-square w-full rounded-xl object-cover" />
            ) : (
              <div className="aspect-square w-full rounded-xl bg-brand-surface" />
            )}
            <h3 className="mt-2 text-sm font-semibold">{p.name}</h3>
            {p.price && <p className="text-sm opacity-70">{p.price}</p>}
          </a>
        ))}
      </div>
    </section>
  );
}
