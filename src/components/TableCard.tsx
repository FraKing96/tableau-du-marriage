import type { Table } from "@/data/tables";
import { normalize } from "@/lib/search";

type TableCardProps = {
  table: Table;
};

export function TableCard({ table }: TableCardProps) {
  return (
    <article
      id={`table-${table.id}`}
      data-table-card
      data-table-name={normalize(table.name)}
      className="rounded-3xl border border-gold/20 bg-white/70 p-5 shadow-sm transition-all duration-300 sm:p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Tavolo {table.id}
          </span>
          <h2 className="mt-1 font-display text-xl font-medium text-charcoal sm:text-2xl">
            {table.name}
          </h2>
        </div>
        <span
          data-guest-count
          className="flex h-9 min-w-9 items-center justify-center rounded-full bg-sage/10 font-sans text-sm font-medium text-sage-dark"
        >
          {table.guests.length}
        </span>
      </div>

      <ul className="grid gap-2 sm:grid-cols-2">
        {table.guests.map((guest) => (
          <li
            key={`${table.id}-${guest.name}`}
            data-guest
            data-guest-name={normalize(guest.name)}
            className="rounded-xl bg-cream/60 px-3 py-2.5 font-sans text-sm text-charcoal/80 transition-colors"
          >
            {guest.name}
          </li>
        ))}
      </ul>
    </article>
  );
}
