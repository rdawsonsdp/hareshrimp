/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Reveal";
import { OpenNow } from "@/components/OpenNow";
import { LOCATIONS, IMG } from "@/lib/site";

export const metadata = {
  title: "Locations",
  description:
    "Find Haire's Gulf Shrimp at 7448 S Vincennes Ave in Greater Grand Crossing or 1156 S Jefferson St in the South Loop. Hours, phone numbers, and directions.",
};

export default function Page() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-center text-white">
        <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-accent">
          Two spots, one recipe
        </p>
        <h1 className="mt-3 text-5xl md:text-6xl">Our Locations</h1>
        <p className="mx-auto mt-4 max-w-xl px-6 text-white/70">
          The original shack in Greater Grand Crossing, and our newest spot in the South Loop.
          Call ahead for speedy pickup — your order hits the fryer when you do.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 0.15}>
              <div className="overflow-hidden rounded-2xl border border-brand-text/10 bg-white shadow-sm transition hover:shadow-xl">
                <img
                  src={i === 0 ? IMG.storefront : IMG.dinnerFries}
                  alt={loc.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    {loc.badge && (
                      <p className="inline-block rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-secondary">
                        {loc.badge}
                      </p>
                    )}
                    <OpenNow schedule={loc.schedule} className="bg-brand-surface" />
                  </div>
                  <h2 className="mt-4 font-heading text-2xl">{loc.short}</h2>
                  {loc.address.map((line) => (
                    <p key={line} className="text-sm opacity-70">{line}</p>
                  ))}
                  <dl className="mt-5 space-y-1.5 border-t border-brand-text/10 pt-5 text-sm">
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
                      Call {loc.phone}
                    </a>
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 border-brand-text/15 px-5 py-2.5 text-sm font-bold transition hover:border-brand-primary hover:text-brand-primary"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`/menu#${loc.id}`}
                      className="rounded-full border-2 border-brand-text/15 px-5 py-2.5 text-sm font-bold transition hover:border-brand-primary hover:text-brand-primary"
                    >
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 rounded-2xl bg-brand-surface p-10 text-center">
            <h2 className="font-heading text-2xl">Can&apos;t make it to us?</h2>
            <p className="mx-auto mt-3 max-w-xl opacity-75">
              Order delivery through Uber Eats, DoorDash, Grubhub, or Soul Delivered — a community
              delivery service helping local restaurants grow. Or book the Haire&apos;s food truck
              and we&apos;ll bring the fryer to you.
            </p>
            <a
              href="/catering"
              className="mt-6 inline-block rounded-full bg-brand-primary px-7 py-3 font-bold text-white transition hover:bg-brand-primary-dark"
            >
              Catering &amp; Food Truck
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
