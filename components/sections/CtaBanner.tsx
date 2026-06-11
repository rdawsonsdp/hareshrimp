/** Announcement / urgency banner. Copy comes from the client's own content. */
export function CtaBanner({ text, href }: { text: string; href?: string }) {
  const inner = (
    <p className="px-4 py-2.5 text-center text-sm font-medium text-white">{text}</p>
  );
  return (
    <div className="bg-brand-primary">
      {href ? <a href={href}>{inner}</a> : inner}
    </div>
  );
}
