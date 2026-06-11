/** Inline newsletter signup. Wire the form action to your email provider. */
export function Newsletter() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h2 className="text-2xl font-bold">Stay in the loop</h2>
      <p className="mt-2 opacity-70">New items, seasonal specials, and order deadlines.</p>
      <form className="mx-auto mt-6 flex max-w-md gap-2" action="#">
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="flex-1 rounded-lg border border-brand-text/20 bg-brand-background px-4 py-3"
        />
        <button className="rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white">
          Sign up
        </button>
      </form>
    </section>
  );
}
