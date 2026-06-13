import { weddingInfo } from "@/data/tables";

export function Header() {
  return (
    <header className="relative overflow-hidden px-5 pb-10 pt-12 text-center sm:px-8 sm:pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-blush/30 blur-3xl" />
        <div className="absolute -right-12 top-20 h-56 w-56 rounded-full bg-sage/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <p className="relative mb-3 font-sans text-xs font-medium uppercase tracking-[0.35em] text-sage-dark sm:text-sm">
        {weddingInfo.subtitle}
      </p>

      <h1 className="relative font-display text-4xl font-light leading-tight text-charcoal sm:text-5xl md:text-6xl">
        {weddingInfo.couple}
      </h1>

      <div className="relative mx-auto mt-5 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
        <p className="font-sans text-sm tracking-wide text-charcoal/70 sm:text-base">
          {weddingInfo.date}
        </p>
        <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
      </div>

      <p className="relative mt-2 font-sans text-sm italic text-charcoal/55">
        {weddingInfo.venue}
      </p>
    </header>
  );
}
