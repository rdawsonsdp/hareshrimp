import { decisionFor } from "@/lib/config";
import type { HeroContent } from "@/lib/types";
import { HeroFullBleed } from "./Hero.FullBleed";
import { HeroSplitCard } from "./Hero.SplitCard";

/**
 * Variant family entry point: reads transplant-config and renders the chosen
 * structure. Content and color are identical across variants — only layout
 * differs.
 */
export function Hero({ pageId, content }: { pageId: string; content: HeroContent }) {
  const decision = decisionFor(pageId, "hero.");
  if (decision?.variant === "aspirational") {
    return decision.patternType === "hero.split-card" ? (
      <HeroSplitCard content={content} />
    ) : (
      <HeroFullBleed content={content} />
    );
  }
  return <HeroSplitCard content={content} />;
}
