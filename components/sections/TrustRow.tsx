/**
 * Trust badge row. The default badges are placeholders — replace with the
 * client's real credentials (awards, review score, guarantees).
 */
export function TrustRow({ badges }: { badges?: string[] }) {
  const items =
    badges && badges.length > 0
      ? badges
      : ["TODO: award or press mention", "TODO: review score", "TODO: shipping guarantee"];
  return (
    <div className="overflow-hidden border-y border-brand-text/10 bg-brand-surface">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-4 text-sm font-medium uppercase tracking-wide opacity-70">
        {items.map((b, i) => (
          <span key={i}>★ {b}</span>
        ))}
      </div>
    </div>
  );
}
