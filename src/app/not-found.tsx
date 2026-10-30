import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-floor opacity-20" aria-hidden="true" />
      <div className="house relative flex min-h-[70vh] flex-col justify-center py-20">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 text-[clamp(2.6rem,7vw,5.4rem)]">
          Signal <span className="neon-magenta">lost.</span>
        </h1>
        <p className="mt-5 max-w-[46ch] text-body">
          That page left the grid. Check the address, or take the long way home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn">
            Back to base
          </Link>
          <Link href="/products" className="btn btn-ghost">
            The line
          </Link>
        </div>
      </div>
    </section>
  );
}
