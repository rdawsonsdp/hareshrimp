/* eslint-disable @next/next/no-img-element */
import type { Img } from "@/lib/types";

export function Gallery({ images }: { images: Img[] }) {
  if (images.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl columns-2 gap-4 px-6 py-16 md:columns-3">
      {images.map((img, i) => (
        <img key={i} src={img.src} alt={img.alt} className="mb-4 w-full rounded-xl" />
      ))}
    </section>
  );
}
