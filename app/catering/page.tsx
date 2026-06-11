/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Reveal";
import { CATERING_MENU, LOCATIONS, IMG } from "@/lib/site";

export const metadata = {
  title: "Catering & Food Truck",
  description:
    "Bring Haire's famous Louisiana shrimp to your next event. Catering pans, corporate orders, and the Haire's Gulf Shrimp food truck across Chicago.",
};

export default function Page() {
  const [vincennes] = LOCATIONS;
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark py-20 text-center text-white">
        <img src={IMG.hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative z-10 px-6">
          <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-accent">
            Pans, parties &amp; the food truck
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl">Catering</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Weddings, block parties, office lunches — if there&apos;s a crowd, we&apos;ll feed it.
            Order catering pans from the shop or book the Haire&apos;s food truck for your event.
          </p>
          <a
            href={vincennes.phoneHref}
            className="mt-8 inline-block rounded-full bg-brand-primary px-8 py-4 text-lg font-bold transition hover:bg-brand-primary-dark"
          >
            Call {vincennes.phone} to Book
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <h2 className="text-center text-4xl md:text-5xl">Catering Menu</h2>
          <p className="mt-3 text-center opacity-70">
            A large pan feeds roughly 15–20 hungry guests. Plan accordingly — leftovers never survive.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CATERING_MENU.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-brand-text/10 bg-white p-7 shadow-sm">
                <h3 className="font-heading text-xl text-brand-primary">{cat.name}</h3>
                <ul className="mt-4 space-y-3">
                  {cat.items.map((item) => (
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
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 grid items-center gap-10 rounded-2xl bg-brand-surface p-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl">The Haire&apos;s Food Truck</h2>
              <p className="mt-4 leading-relaxed opacity-75">
                The taste of the original shack, on wheels. Our food truck brings hand-battered
                shrimp to events all over Chicago — corporate catering is a specialty. Tell us your
                date, headcount, and location and we&apos;ll take it from there.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={vincennes.phoneHref}
                  className="rounded-full bg-brand-primary px-6 py-3 font-bold text-white transition hover:bg-brand-primary-dark"
                >
                  Call to Inquire
                </a>
                <a
                  href="/contact"
                  className="rounded-full border-2 border-brand-text/15 px-6 py-3 font-bold transition hover:border-brand-primary hover:text-brand-primary"
                >
                  Send a Message
                </a>
              </div>
            </div>
            <img
              src={IMG.storefront}
              alt="Haire's Gulf Shrimp"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
