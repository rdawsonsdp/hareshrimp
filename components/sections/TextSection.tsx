export function TextSection({ heading, body }: { heading?: string; body: string[] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      {heading && <h2 className="mb-4 text-2xl font-bold">{heading}</h2>}
      {body.length > 0 ? (
        body.map((b, i) => (
          <p key={i} className="mt-3 leading-relaxed opacity-80">
            {b}
          </p>
        ))
      ) : (
        <p className="opacity-60">TODO: add copy for this section.</p>
      )}
    </section>
  );
}
