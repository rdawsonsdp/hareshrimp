/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Reveal";
import { OpenNow } from "@/components/OpenNow";
import { LOCATIONS, IMG, type MenuCategory } from "@/lib/site";

export const metadata = {
  title: "Menu",
  description:
    "Shrimp bomb bags, shrimp dinners, po' boys and more. See the full menu and prices for both Haire's Gulf Shrimp locations in Chicago.",
};

function MenuCategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <div className="break-inside-avoid rounded-2xl border border-brand-text/10 bg-white p-7 shadow-sm">
      <h3 className="font-heading text-xl text-brand-primary">{category.name}</h3>
      {category.note && <p className="mt-1 text-sm italic opacity-60">{category.note}</p>}
      <ul className="mt-4 space-y-3">
        {category.items.map((item) => (
          <li key={item.name + (item.note ?? "")}>
            <div className="flex items-baseline">
              <span className="font-bold">{item.name}</span>
              <span className="menu-leader" />
              <span className="font-heading text-brand-primary">{item.price}</span>
            </div>
            {item.note && <p className="text-xs opacity-60">{item.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 text-center text-white">
        <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-accent">
          Hand-battered · Fried to order
        </p>
        <h1 className="mt-3 text-5xl md:text-6xl">The Menu</h1>
        <p className="mx-auto mt-4 max-w-xl px-6 text-white/70">
          Every order starts the same way it has for forty years: fresh shrimp, Big Mama&apos;s
          batter, hot oil. Pick your location — prices vary slightly between the two.
        </p>
        <div className="mt-8 flex justify-center gap-3 px-6">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.id}
              href={`#${loc.id}`}
              className="rounded-full border-2 border-white/30 px-6 py-2.5 text-sm font-bold transition hover:border-brand-accent hover:text-brand-accent"
            >
              {loc.short} ↓
            </a>
          ))}
        </div>
      </section>

      {/* Food strip */}
      <section className="grid grid-cols-2 sm:grid-cols-4">
        {[IMG.food[3], IMG.dinnerFries, IMG.dinnerSpaghetti, IMG.food[2]].map((src) => (
          <img key={src} src={src} alt="" className="aspect-square w-full object-cover" />
        ))}
      </section>

      {/* Location menus */}
      {LOCATIONS.map((loc, idx) => (
        <section
          key={loc.id}
          id={loc.id}
          className={`scroll-mt-24 py-16 md:py-20 ${idx % 2 ? "bg-brand-surface" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    {loc.badge && (
                      <p className="inline-block rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-secondary">
                        {loc.badge}
                      </p>
                    )}
                    <OpenNow schedule={loc.schedule} className="bg-white shadow-sm" />
                  </div>
                  <h2 className="mt-3 text-3xl md:text-4xl">{loc.short}</h2>
                  <p className="mt-1 text-sm opacity-70">
                    {loc.address.join(", ")} ·{" "}
                    <a href={loc.phoneHref} className="font-bold text-brand-primary hover:underline">
                      {loc.phone}
                    </a>
                  </p>
                </div>
                <div className="text-right text-xs opacity-70">
                  {loc.hours.map((h) => (
                    <p key={h.days}>
                      <span className="font-semibold">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="mt-8 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
              {loc.menu.map((cat, i) => (
                <Reveal key={cat.name} delay={Math.min(i * 0.08, 0.3)}>
                  <MenuCategoryBlock category={cat} />
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-10 rounded-2xl bg-brand-dark p-8 text-center text-white">
                <p className="font-heading text-2xl">Ready when you are.</p>
                <p className="mt-2 text-sm text-white/70">
                  For speedy pickup and carry-out, call {loc.short}:
                </p>
                <a
                  href={loc.phoneHref}
                  className="mt-4 inline-block rounded-full bg-brand-primary px-8 py-3 text-lg font-bold transition hover:bg-brand-primary-dark"
                >
                  {loc.phone}
                </a>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-white/50">
                  <span>Or order delivery:</span>
                  {loc.delivery.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/25 px-3 py-1 font-bold text-white/80 transition hover:border-brand-accent hover:text-brand-accent"
                    >
                      {p.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
