import { decisionFor } from "@/lib/config";
import type { Product } from "@/lib/types";
import { ProductsGridThreeCol } from "./Products.GridThreeCol";
import { ProductsRowScroll } from "./Products.RowScroll";

export function Products({
  pageId,
  products,
  heading,
}: {
  pageId: string;
  products: Product[];
  heading?: string;
}) {
  const decision = decisionFor(pageId, "products.");
  if (decision?.variant === "aspirational") {
    return decision.patternType === "products.row-scroll" ? (
      <ProductsRowScroll products={products} heading={heading} />
    ) : (
      <ProductsGridThreeCol products={products} heading={heading} />
    );
  }
  return <ProductsRowScroll products={products} heading={heading} />;
}
