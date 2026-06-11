/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Reveal";
import { NEWS, IMG } from "@/lib/site";

export const metadata = {
  title: "Our Story",
  description:
    "From Big Mama's kitchen to a train caboose to a South Side institution — the story of Finnie Haire and Haire's Gulf Shrimp.",
};

const CHAPTERS = [
  {
    era: "The 1970s",
    title: "Big Mama's kitchen",
    body: "Long before there was a restaurant, there was a recipe. Finnie Haire's mother — Big Mama to everyone who loved her — called the family into her kitchen one afternoon and showed them how she fried shrimp. Her nephew Michael Haire Baldwin still tells the story of that day. The batter, the seasoning, the timing: all of it got passed down by hand, the way the best recipes always are.",
  },
  {
    era: "The early 1980s",
    title: "The train caboose",
    body: "Finnie Haire took Big Mama's recipe and opened up shop in the most South Side spot imaginable: a converted train caboose. No investors, no franchise playbook — just fresh shrimp, hot oil, and a line out front that kept getting longer. As the family puts it, no one stood in his way.",
  },
  {
    era: "Today",
    title: "A neighborhood institution",
    body: "Haire's is now a proud Black-owned, women-led family business anchored at 75th & Vincennes in Greater Grand Crossing, with a second home in the South Loop and a food truck rolling out to events across Chicago. Thrillist rates it among the city's top 10 shrimp shacks. The recipe? Still Big Mama's.",
  },
];

export default function Page() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-dark py-20 text-center text-white">
        <img
          src={IMG.storefront}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative z-10 px-6">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-accent">
            Est. early 1980s · Greater Grand Crossing
          </p>
          <h1 className="mt-3 text-5xl md:text-7xl">
            The Story of
            <span className="block text-brand-accent">Haire&apos;s</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            A family recipe, a train caboose, and four decades of fried shrimp on Chicago&apos;s
            South Side.
          </p>
        </div>
      </section>

      {/* Chapters timeline */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <ol className="relative space-y-16 border-l-2 border-brand-primary/30 pl-8 md:pl-12">
          {CHAPTERS.map((c, i) => (
            <li key={c.era} className="relative">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary font-heading text-sm text-white md:-left-[57px]">
                {i + 1}
              </span>
              <Reveal>
                <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-primary">
                  {c.era}
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl">{c.title}</h2>
                <p className="mt-4 text-lg leading-relaxed opacity-80">{c.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Finnie portrait + pull quote */}
      <section className="bg-brand-surface py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <img
              src={IMG.finnie}
              alt="Finnie Haire, founder of Haire's Gulf Shrimp"
              className="mx-auto w-full max-w-sm rotate-1 rounded-xl border-8 border-white shadow-2xl"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-4xl md:text-5xl">Finnie Haire</h2>
            <p className="mt-6 text-lg leading-relaxed opacity-80">
              Founder, fryer, and the reason half the South Side knows what a shrimp bomb bag is.
              Finnie built Haire&apos;s from a caboose into a Chicago legend, and the family has
              carried it forward ever since — same corner, same standards, same recipe.
            </p>
            <p className="mt-4 font-heading text-2xl text-brand-primary">
              &ldquo;It&apos;s the bomb!&rdquo;
            </p>
            <p className="mt-1 text-sm opacity-60">— what everybody says after the first bite</p>
          </Reveal>
        </div>
      </section>

      {/* In the news */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-4xl md:text-5xl">In the News</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <Reveal key={n.headline} delay={i * 0.1}>
              <blockquote className="h-full rounded-2xl border border-brand-text/10 bg-white p-7 shadow-sm">
                <span className="font-heading text-3xl text-brand-accent">&ldquo;</span>
                <p className="font-semibold leading-snug">{n.headline}</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Batter mix */}
      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-accent">
              The secret&apos;s out
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl">Take the recipe home</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Haire&apos;s Authentic Louisiana Taste Shrimp Batter &amp; Breading Mix — the same
              kosher-certified blend used in our kitchens — is available for wholesale and retail
              buyers. Mix, batter, fry, enjoy.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-brand-primary px-8 py-4 text-lg font-bold transition hover:bg-brand-primary-dark"
            >
              Ask About Wholesale
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src={IMG.batterMix}
              alt="Haire's Gulf Shrimp batter and breading mix"
              className="mx-auto w-full max-w-xs drop-shadow-2xl"
            />
          </Reveal>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {(["Mix", "Batter", "Fry", "Enjoy"] as const).map((step, i) => (
            <Reveal key={step} delay={i * 0.1}>
              <figure>
                <img
                  src={IMG.food[i]}
                  alt={`Step ${i + 1}: ${step}`}
                  className="aspect-square w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 text-center font-heading text-sm text-brand-accent">
                  {i + 1}. {step}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
