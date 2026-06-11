import modelJson from "@/data/content-model.json";
import brandJson from "@/data/brand-tokens.json";
import type { ContactContent, FaqItem, HeroContent, Img, Product, StoryContent } from "@/lib/types";

/* ===== Content selectors (content layer) =====
 * All copy, products, and imagery come from the client's extracted
 * content-model.json. Edit that file (or wire up a headless CMS) and every
 * section updates — no component changes needed. */

interface ModelSection {
  role: string;
  heading?: string;
  body: string[];
  images: Img[];
  ctas: { label: string; href: string }[];
}
interface ModelPage {
  url: string;
  path: string;
  title: string;
  metaDescription?: string;
  headings: { level: number; text: string }[];
  sections: ModelSection[];
  text: string;
}
interface Model {
  siteUrl: string;
  siteName: string;
  pages: ModelPage[];
  products: Product[];
  faqs: FaqItem[];
  story?: string;
  contact: ContactContent & { socialLinks: string[] };
}

const model = modelJson as unknown as Model;
const brand = brandJson as unknown as {
  logo?: { src: string; alt?: string };
  imageLibrary: Img[];
};

export const siteName = model.siteName;
export const logo = brand.logo;

function homePage(): ModelPage | undefined {
  return model.pages.find((p) => p.path === "/") ?? model.pages[0];
}

function bigImages(): Img[] {
  return brand.imageLibrary.filter(
    (i) => !/logo|icon|badge/i.test(i.src + (i.alt ?? ""))
  );
}

export function heroContent(): HeroContent {
  const home = homePage();
  const h1 = home?.headings.find((h) => h.level === 1)?.text;
  const heroSection = home?.sections.find((s) => s.role === "hero");
  return {
    heading: h1 || siteName,
    sub:
      home?.metaDescription ||
      heroSection?.body[0] ||
      "TODO: one sentence stating your value proposition.",
    image: heroSection?.images[0] ?? bigImages()[0],
    cta: { label: "Shop now", href: shopPath() },
  };
}

export function shopPath(): string {
  return "/menu";
}

export function products(): Product[] {
  return model.products;
}

export function story(): StoryContent {
  const storySection = model.pages
    .flatMap((p) => p.sections)
    .find((s) => s.role === "story");
  const body =
    storySection?.body.slice(0, 3) ??
    (model.story ? [model.story.slice(0, 600)] : ["TODO: tell your story here."]);
  return {
    heading: storySection?.heading ?? "Our story",
    body,
    image: storySection?.images[0] ?? bigImages()[1],
    cta: { label: "Read more", href: "/about" },
  };
}

export function faqs(): FaqItem[] {
  return model.faqs;
}

export function contact(): ContactContent {
  return model.contact;
}

export function gallery(): Img[] {
  return bigImages().slice(0, 8);
}

export function announcement(): string {
  // Surfaces the client's own shipping/pickup message if one was extracted.
  const m = homePage()?.text.match(/[^.!?]*(?:free shipping|nationwide|same.day|pickup|order by)[^.!?]*[.!?]?/i);
  return m?.[0].trim().slice(0, 120) ?? "TODO: your promo or shipping-deadline message";
}

/** Best-matching client page for a generated page id (e.g. "collections-cakes"). */
function matchPage(idHint: string): ModelPage | undefined {
  const tokens = idHint.split("-").filter((t) => t.length > 2);
  let best: ModelPage | undefined;
  let bestScore = 0;
  for (const p of model.pages) {
    const score = tokens.filter((t) => p.path.toLowerCase().includes(t)).length;
    if (score > bestScore) {
      best = p;
      bestScore = score;
    }
  }
  return best;
}

/** Hero content for any generated page, derived from the matching client page. */
export function pageHero(idHint: string, fallbackTitle: string): HeroContent {
  if (idHint === "home") return heroContent();
  const page = matchPage(idHint);
  const firstSection = page?.sections[0];
  return {
    heading: page?.headings.find((h) => h.level <= 2)?.text ?? fallbackTitle,
    sub: page?.metaDescription ?? firstSection?.body[0],
    image: firstSection?.images[0] ?? bigImages()[2] ?? bigImages()[0],
    cta: { label: "Shop now", href: shopPath() },
  };
}

/** Body copy for generic text sections, pulled from the matching client page. */
export function pageCopy(idHint: string): { heading?: string; body: string[] } {
  const page = matchPage(idHint);
  if (!page) return { body: [] };
  const body = page.sections
    .flatMap((s) => s.body)
    .filter((b) => b.length > 30)
    .slice(0, 5);
  return { heading: page.sections.find((s) => s.heading)?.heading, body };
}
