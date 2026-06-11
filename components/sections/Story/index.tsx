import { decisionFor } from "@/lib/config";
import type { StoryContent } from "@/lib/types";
import { StorySplitImage } from "./Story.SplitImage";
import { StoryCentered } from "./Story.Centered";

export function Story({ pageId, content }: { pageId: string; content: StoryContent }) {
  const decision = decisionFor(pageId, "story.");
  if (decision?.variant === "aspirational") {
    return decision.patternType === "story.centered" ? (
      <StoryCentered content={content} />
    ) : (
      <StorySplitImage content={content} />
    );
  }
  return <StoryCentered content={content} />;
}
