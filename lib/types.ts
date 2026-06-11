/** Minimal content contracts consumed by section components. */
export interface Img {
  src: string;
  alt: string;
}
export interface Cta {
  label: string;
  href: string;
}
export interface HeroContent {
  heading: string;
  sub?: string;
  image?: Img;
  cta?: Cta;
}
export interface Product {
  name: string;
  price?: string;
  image?: string;
  url?: string;
}
export interface StoryContent {
  heading: string;
  body: string[];
  image?: Img;
  cta?: Cta;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface ContactContent {
  phones: string[];
  emails: string[];
  addresses: string[];
}
export interface Decision {
  recommendationId: string;
  pageId: string;
  sectionIndex: number;
  variant: "aspirational" | "client";
  patternType: string;
}
