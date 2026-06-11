/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Reveal";
import { OpenNow } from "@/components/OpenNow";
import { OrderNow } from "@/components/OrderNow";
import { SITE, LOCATIONS, RATINGS, IMG } from "@/lib/site";

export const metadata = { title: "Haire's Gulf Shrimp | Louisiana Southern Flavor in Chicago" };

const FAVORITES = [
  {
    name: "The Shrimp Bomb Bag",
    price: "from $18",
    image: IMG.food[3],
    blurb:
      "The order that made the name. A paper bag packed with hand-battered Gulf shrimp, fried crisp and dusted in Louisiana spice.",
  },
  {
    name: "Shrimp Dinner w/ Fries",
    price: "from $20.99",
    image: IMG.dinnerFries,
    blurb: "Fifteen golden shrimp over a bed of fries with coleslaw on the side. The full South Side experience.",
  },
  {
    name: "Shrimp Dinner w/ Spaghetti",
    price: "from $20.99",
    image: IMG.dinnerSpaghetti,
    blurb: "The classic Chicago shrimp-house move — crispy shrimp piled over saucy spaghetti. Trust us.",
  },
  {
    name: "Pans for the Party",
    price: "from $60",
    image: IMG.food[2],
    blurb:
      "Sixty or 120 pieces, fried fresh and ready for the block party, the office, or the family reunion.",
  },
];

export default function Page() {
  const [vincennes, southLoop] = LOCATIONS;
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-brand-dark text-white">
        {/* The food IS the backdrop — real plate, shot on the counter */}
        <img
          src={IMG.dinnerFries}
          alt="A fresh basket of Haire's hand-battered fried shrimp and crinkle fries on the counter"
          className="hero-zoom absolute inset-0 h-full w-full object-cover object-[68%_center] [filter:saturate(1.25)_contrast(1.18)_brightness(0.9)]"
        />
        {/* Warm grade + vignette: keeps it a scene, not a cut-out */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/75 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-dark/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(27,15,7,0.6)_100%)]" />
        {/* Steam drifting off the plate */}
        <span className="steam right-[14%] top-[38%] hidden md:block" />
        <span className="steam right-[26%] top-[46%] hidden md:block" style={{ animationDelay: "2.2s" }} />
        <span className="steam right-[20%] top-[30%] hidden md:block" style={{ animationDelay: "3.6s" }} />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="inline-block rounded-full border border-brand-accent/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-accent">
                Chicago&apos;s South Side · Since the early 1980s
              </p>
              <OpenNow schedule={vincennes.schedule} className="bg-white/10 text-white" />
            </div>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
              Louisiana
              <span className="block text-brand-accent">Southern</span>
              Flavor
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/80">
              {SITE.tagline}. Big Mama&apos;s family recipe, hand-battered and fried to order —
              rated one of the top 10 shrimp shacks in Chicago by Thrillist.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <OrderNow
                panelAlign="center"
                className="rounded-full bg-brand-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-primary-dark"
              />
              <a
                href="/menu"
                className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:border-brand-accent hover:text-brand-accent"
              >
                See the Menu
              </a>
            </div>
            <a
              href="/about"
              className="mt-5 inline-block text-sm font-semibold text-white/60 underline underline-offset-4 transition hover:text-brand-accent"
            >
              It started in a train caboose — read the story →
            </a>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              {[vincennes, southLoop].map((loc) => (
                <a key={loc.id} href={loc.phoneHref} className="group">
                  <span className="block text-xs uppercase tracking-widest text-white/40">
                    {loc.short} pickup
                  </span>
                  <span className="font-bold text-white group-hover:text-brand-accent">{loc.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="absolute bottom-14 right-12 z-10 hidden -rotate-6 font-heading text-4xl text-brand-accent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:block">
          “It&apos;s the bomb!”
        </p>
      </section>

      {/* ===== Ratings strip ===== */}
      <section className="border-y border-brand-text/10 bg-brand-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5">
          {RATINGS.slice(0, 5).map((r) => (
            <div key={r.platform} className="text-center">
              <p className="text-sm font-extrabold">★ {r.score}</p>
              <p className="text-[11px] uppercase tracking-widest opacity-60">{r.platform}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Story teaser ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={IMG.finnie}
                alt="Finnie Haire, founder of Haire's Gulf Shrimp"
                className="w-full max-w-sm rotate-[-2deg] border-8 border-white shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-2 rotate-2 bg-brand-accent px-4 py-2 font-heading text-sm text-brand-dark shadow-lg md:right-8">
                Finnie Haire, founder
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-primary">
              The Story of Haire&apos;s
            </p>
            <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
              It started in a train caboose.
            </h2>
            <p className="mt-6 text-lg leading-relaxed opacity-80">
              In the early 1980s, Finnie Haire began selling fried shrimp out of a converted train
              caboose on Chicago&apos;s South Side. The recipe came from his mother — known to
              everyone as &ldquo;Big Mama&rdquo; — who taught the family her secret in her own
              kitchen back in the &apos;70s.
            </p>
            <p className="mt-4 text-lg leading-relaxed opacity-80">
              Four decades later, this Black-owned, women-led family business is still frying
              shrimp the same way at 75th &amp; Vincennes in Greater Grand Crossing — and now in
              the South Loop too.
            </p>
            <a
              href="/about"
              className="mt-8 inline-block rounded-full border-2 border-brand-primary px-7 py-3 font-bold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              Read the Full Story
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== Crowd favorites ===== */}
      <section className="bg-brand-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-accent">
                  Fried to order
                </p>
                <h2 className="mt-3 text-4xl md:text-5xl">Crowd Favorites</h2>
              </div>
              <a href="/menu" className="font-bold text-brand-accent hover:underline">
                Full menu &amp; prices →
              </a>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FAVORITES.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.1}>
                <a
                  href="/menu"
                  className="group block h-full bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-2">
                    <h3 className="font-heading text-lg leading-snug">{f.name}</h3>
                    <span className="whitespace-nowrap rounded-full bg-brand-primary px-3 py-1 text-xs font-bold">
                      {f.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.blurb}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Locations ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-center font-heading text-sm uppercase tracking-[0.25em] text-brand-primary">
            Two spots, one recipe
          </p>
          <h2 className="mt-3 text-center text-4xl md:text-5xl">Come Get You Some</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 0.15}>
              <div className="h-full border border-brand-text/10 bg-white p-8 shadow-sm transition hover:shadow-xl">
                <div className="flex flex-wrap items-center gap-2">
                  {loc.badge && (
                    <p className="inline-block rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-secondary">
                      {loc.badge}
                    </p>
                  )}
                  <OpenNow schedule={loc.schedule} className="bg-brand-surface" />
                </div>
                <h3 className="mt-4 font-heading text-2xl">{loc.short}</h3>
                {loc.address.map((line) => (
                  <p key={line} className="text-sm opacity-70">{line}</p>
                ))}
                <dl className="mt-4 space-y-1 border-t border-brand-text/10 pt-4 text-sm">
                  {loc.hours.map((h) => (
                    <div key={h.days} className="flex justify-between">
                      <dt className="font-semibold">{h.days}</dt>
                      <dd className="opacity-70">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={loc.phoneHref}
                    className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-primary-dark"
                  >
                    {loc.phone}
                  </a>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-brand-text/15 px-5 py-2.5 text-sm font-bold transition hover:border-brand-primary hover:text-brand-primary"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="bg-brand-primary py-20 text-center text-white">
        <Reveal>
          <h2 className="px-6 text-4xl md:text-6xl">Hungry yet?</h2>
          <p className="mx-auto mt-4 max-w-xl px-6 text-lg text-white/85">
            Call ahead for speedy pickup, or order online for delivery. Catering and the Haire&apos;s
            food truck are ready for your next event.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 px-6">
            <OrderNow
              panelAlign="center"
              className="rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-primary shadow-lg transition hover:-translate-y-0.5"
            />
            <a
              href="/catering"
              className="rounded-full border-2 border-white/60 px-8 py-4 text-lg font-bold transition hover:bg-white/10"
            >
              Book Catering
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
