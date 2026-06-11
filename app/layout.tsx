/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./globals.css";
import { SITE, LOCATIONS, SOCIAL, IMG } from "@/lib/site";
import { OrderNow } from "@/components/OrderNow";

export const metadata: Metadata = {
  title: {
    default: "Haire's Gulf Shrimp | Louisiana Southern Flavor in Chicago",
    template: "%s | Haire's Gulf Shrimp",
  },
  description: SITE.description,
  icons: { icon: "/images/logo.png" },
};

const NAV = [
  { title: "Menu", path: "/menu" },
  { title: "Our Story", path: "/about" },
  { title: "Locations", path: "/locations" },
  { title: "Catering", path: "/catering" },
  { title: "Contact", path: "/contact" },
];

const TICKER = [
  "“It's the bomb!”",
  "Rated a top 10 shrimp shack in Chicago — Thrillist",
  "One of a kind, FRESH taste",
  "A South Side staple since the early 1980s",
  "Hand-battered & fried to order",
];

function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="overflow-hidden bg-brand-primary text-white" aria-hidden="true">
      <div className="marquee-track py-1.5 text-xs font-semibold uppercase tracking-widest">
        {items.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-4">{t}</span>
            <span className="text-brand-accent">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [vincennes, southLoop] = LOCATIONS;
  return (
    <html lang="en">
      <head>
        {/* LosLana Niu Pro (400/700) via Adobe Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/jmw1nja.css" />
      </head>
      <body>
        <Ticker />
        <header className="sticky top-0 z-40 border-b border-brand-text/10 bg-brand-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
            <a href="/" className="flex items-center gap-3">
              <img src={IMG.logo} alt="" className="h-11 w-auto" />
              <span className="hidden font-heading text-lg leading-none sm:block">
                Haire&apos;s
                <span className="block text-xs tracking-widest text-brand-primary">GULF SHRIMP</span>
              </span>
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              {NAV.map((n) => (
                <a
                  key={n.path}
                  href={n.path}
                  className="text-sm font-semibold uppercase tracking-wide transition hover:text-brand-primary"
                >
                  {n.title}
                </a>
              ))}
            </nav>
            <OrderNow className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-brand-primary-dark" />
          </div>
          <nav className="flex justify-center gap-5 border-t border-brand-text/10 px-4 py-2 md:hidden">
            {NAV.map((n) => (
              <a key={n.path} href={n.path} className="text-xs font-semibold uppercase tracking-wide">
                {n.title}
              </a>
            ))}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-brand-primary text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
            <div className="md:col-span-2">
              <img src={IMG.logo} alt={SITE.name} className="h-16 w-auto" />
              <p className="mt-4 font-heading text-xl">{SITE.tagline}</p>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                Big Mama&apos;s recipe, fried fresh on Chicago&apos;s South Side since the early
                1980s. Black-owned, women-led, family-run.
              </p>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-brand-accent hover:underline"
              >
                @haires_gulf_shrimp on Instagram →
              </a>
            </div>
            {[vincennes, southLoop].map((loc) => (
              <div key={loc.id}>
                <h4 className="font-heading text-sm uppercase tracking-wider text-brand-accent">
                  {loc.short}
                </h4>
                {loc.address.map((line) => (
                  <p key={line} className="mt-1 text-sm text-white/70">{line}</p>
                ))}
                <a href={loc.phoneHref} className="mt-2 block text-sm font-bold hover:text-brand-accent">
                  {loc.phone}
                </a>
                <dl className="mt-3 space-y-1 text-xs text-white/50">
                  {loc.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-2">
                      <dt>{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
        </footer>

        {/* Sticky mobile call-to-action */}
        <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-brand-text/10 bg-brand-background/95 p-3 backdrop-blur md:hidden">
          <a
            href={vincennes.phoneHref}
            className="flex-1 rounded-full border-2 border-brand-primary py-2.5 text-center text-sm font-bold text-brand-primary"
          >
            Call to Order
          </a>
          <a
            href="/menu"
            className="flex-1 rounded-full bg-brand-primary py-2.5 text-center text-sm font-bold text-white"
          >
            See the Menu
          </a>
        </div>
      </body>
    </html>
  );
}
