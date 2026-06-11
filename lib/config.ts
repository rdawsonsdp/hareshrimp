import configJson from "@/data/transplant-config.json";
import type { Decision } from "@/lib/types";

const decisions = configJson.decisions as Decision[];

/**
 * Variant resolution — the only place structure decisions are read.
 * "aspirational" renders the adopted pattern; anything else falls back to the
 * client-default variant for that family.
 */
export function decisionFor(pageId: string, patternPrefix: string): Decision | undefined {
  const matches = decisions.filter(
    (d) => d.pageId === pageId && d.patternType.startsWith(patternPrefix)
  );
  // An adopted pattern wins over a declined one in the same family.
  return matches.find((d) => d.variant === "aspirational") ?? matches[0];
}

export function adopted(patternType: string): boolean {
  return decisions.some((d) => d.patternType === patternType && d.variant === "aspirational");
}
