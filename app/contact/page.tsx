/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/Reveal";
import { LOCATIONS, SOCIAL } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Haire's Gulf Shrimp — pickup orders, catering, food truck bookings, and wholesale batter mix inquiries.",
};

export default function Page() {
  return (
    <>
      <section className="bg-brand-accent py-16 text-center text-brand-dark">
        <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-primary">
          We&apos;d love to hear from you
        </p>
        <h1 className="mt-3 text-5xl md:text-6xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-xl px-6 opacity-75">
          The fastest way to get shrimp is to call the shop. For catering, wholesale, or anything
          else, send us a message below.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Direct contact */}
          <Reveal>
            <h2 className="font-heading text-2xl">Call the shop</h2>
            <div className="mt-6 space-y-6">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="border border-brand-text/10 bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-lg">{loc.short}</h3>
                  {loc.address.map((line) => (
                    <p key={line} className="text-sm opacity-70">{line}</p>
                  ))}
                  <a
                    href={loc.phoneHref}
                    className="mt-3 inline-block rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-primary-dark"
                  >
                    {loc.phone}
                  </a>
                </div>
              ))}
              <p className="text-sm opacity-70">
                Or find us on{" "}
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-primary hover:underline"
                >
                  Instagram @haires_gulf_shrimp
                </a>
                .
              </p>
            </div>
          </Reveal>

          {/* Message form */}
          <Reveal delay={0.15}>
            <h2 className="font-heading text-2xl">Send a message</h2>
            <form className="mt-6 space-y-4" action="#" method="post">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold">First name</span>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="mt-1 w-full border border-brand-text/20 bg-white px-4 py-2.5 outline-none transition focus:border-brand-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold">Last name</span>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="mt-1 w-full border border-brand-text/20 bg-white px-4 py-2.5 outline-none transition focus:border-brand-primary"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-semibold">Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full border border-brand-text/20 bg-white px-4 py-2.5 outline-none transition focus:border-brand-primary"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full border border-brand-text/20 bg-white px-4 py-2.5 outline-none transition focus:border-brand-primary"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Catering inquiry, wholesale order, food truck booking…"
                  className="mt-1 w-full border border-brand-text/20 bg-white px-4 py-2.5 outline-none transition focus:border-brand-primary"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-brand-primary px-8 py-3.5 font-bold text-white transition hover:bg-brand-primary-dark"
              >
                Send
              </button>
              <p className="text-xs opacity-50">
                Form submission is not wired to a backend yet — for anything urgent, call the shop.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
