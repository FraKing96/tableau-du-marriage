export function SearchBar() {
  return (
    <div className="relative z-30 border-b border-gold/15 bg-cream px-0 py-4">
      <label htmlFor="guest-search" className="sr-only">
        Cerca il tuo nome
      </label>
      <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sage-dark/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            id="guest-search"
            name="guest-search"
            type="text"
            inputMode="search"
            enterKeyHint="search"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="words"
            spellCheck={false}
            placeholder="Cerca il tuo nome..."
            defaultValue=""
            className="relative z-10 block w-full rounded-2xl border border-gold/25 bg-white py-3.5 pl-12 pr-10 font-sans text-base text-charcoal shadow-sm outline-none placeholder:text-charcoal/35 focus:border-sage focus:ring-2 focus:ring-sage/20"
          />
        <button
          id="guest-search-clear"
          type="button"
          aria-label="Cancella ricerca"
          hidden
          className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-charcoal/40 active:bg-cream"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p
        id="guest-search-status"
        className="mt-2 hidden text-center font-sans text-xs text-charcoal/55"
        aria-live="polite"
      />
    </div>
  );
}
