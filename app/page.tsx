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
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
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
          <div className="relative order-first md:order-none">
            {/* Warm fryer-light glow */}
            <div className="absolute inset-0 -z-0 m-auto h-80 w-80 rounded-full bg-brand-primary/50 blur-3xl md:h-[30rem] md:w-[30rem]" />
            <div className="absolute inset-0 -z-0 m-auto h-48 w-64 translate-y-6 rounded-full bg-brand-accent/25 blur-3xl md:h-64 md:w-96" />
            <div className="float-dish relative z-10">
              {/* Steam wisps rising off the plate */}
              <span className="steam left-[32%] top-[2%]" />
              <span className="steam left-[50%] top-[-4%]" style={{ animationDelay: "1.6s" }} />
              <span className="steam left-[64%] top-[4%]" style={{ animationDelay: "3.1s" }} />
              <img
                src={IMG.hero}
                alt="A steaming basket of Haire's hand-battered fried shrimp with crinkle fries, cocktail sauce, and coleslaw"
                className="mx-auto w-full max-w-lg md:max-w-none md:w-[115%] md:-ml-8 [filter:saturate(1.25)_contrast(1.08)_brightness(1.05)_drop-shadow(0_35px_45px_rgba(0,0,0,0.65))] [mask-image:radial-gradient(ellipse_68%_62%_at_center,black_52%,transparent_76%)]"
              />
            </div>
            <p className="relative z-10 mt-3 text-center font-heading text-3xl text-brand-accent md:-rotate-3 md:text-4xl">
              “It&apos;s the bomb!”
            </p>
          </div>
        </div>
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
                className="w-full max-w-sm rotate-[-2deg] rounded-xl border-8 border-white shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-2 rotate-2 rounded-lg bg-brand-accent px-4 py-2 font-heading text-sm text-brand-dark shadow-lg md:right-8">
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
                  className="group block h-full rounded-2xl bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="overflow-hidden rounded-xl">
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
              <div className="h-full rounded-2xl border border-brand-text/10 bg-white p-8 shadow-sm transition hover:shadow-xl">
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
