import { tables } from "@/data/tables";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { TableCard } from "./TableCard";

const searchScript = `
(() => {
  function normalize(text) {
    try {
      return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\\u0300-\\u036f]/g, "");
    } catch {
      return String(text || "").toLowerCase();
    }
  }

  function initTableauSearch() {
    const input = document.getElementById("guest-search");
    const clearButton = document.getElementById("guest-search-clear");
    const status = document.getElementById("guest-search-status");
    const emptyState = document.getElementById("guest-search-empty");
    const cards = Array.from(document.querySelectorAll("[data-table-card]"));

    if (!input || !clearButton || !status || !emptyState || cards.length === 0) {
      return;
    }

    function applyFilter() {
      const rawQuery = input.value || "";
      const query = normalize(rawQuery.trim());
      let visibleTables = 0;
      let matchingGuests = 0;

      clearButton.hidden = rawQuery.trim().length === 0;

      cards.forEach((card) => {
        const tableName = card.getAttribute("data-table-name") || "";
        const tableMatches = query.length > 0 && tableName.includes(query);
        const guests = Array.from(card.querySelectorAll("[data-guest]"));
        const count = card.querySelector("[data-guest-count]");
        let visibleGuests = 0;
        let tableHasMatch = false;

        guests.forEach((guest) => {
          const guestName = guest.getAttribute("data-guest-name") || "";
          const guestMatches = query.length > 0 && guestName.includes(query);
          const shouldShowGuest = query.length === 0 || tableMatches || guestMatches;

          guest.hidden = !shouldShowGuest;
          guest.style.backgroundColor = guestMatches ? "rgba(138, 154, 123, 0.15)" : "";
          guest.style.color = guestMatches ? "var(--sage-dark)" : "";
          guest.style.fontWeight = guestMatches ? "600" : "";

          if (shouldShowGuest) {
            visibleGuests += 1;
          }

          if (tableMatches || guestMatches) {
            tableHasMatch = true;
          }
        });

        const shouldShowTable = query.length === 0 || tableHasMatch;
        card.hidden = !shouldShowTable;
        card.style.borderColor = query.length > 0 && shouldShowTable ? "var(--sage)" : "";
        card.style.boxShadow =
          query.length > 0 && shouldShowTable
            ? "0 18px 45px rgba(92, 107, 82, 0.14)"
            : "";

        if (count) {
          count.textContent = String(visibleGuests);
        }

        if (shouldShowTable) {
          visibleTables += 1;
        }

        if (query.length > 0) {
          matchingGuests += tableMatches
            ? guests.length
            : guests.filter((guest) =>
                (guest.getAttribute("data-guest-name") || "").includes(query),
              ).length;
        }
      });

      emptyState.hidden = query.length === 0 || visibleTables > 0;

      if (query.length === 0) {
        status.classList.add("hidden");
        status.textContent = "";
      } else {
        status.classList.remove("hidden");
        status.textContent =
          matchingGuests === 0
            ? "Nessun risultato trovato"
            : matchingGuests + " " + (matchingGuests === 1 ? "invitato trovato" : "invitati trovati");
      }
    }

    function applyAfterInput() {
      window.requestAnimationFrame(applyFilter);
    }

    function clearSearch(event) {
      if (event) {
        event.preventDefault();
      }
      input.value = "";
      applyFilter();
      input.focus();
    }

    input.addEventListener("beforeinput", applyAfterInput);
    input.addEventListener("input", applyFilter);
    input.addEventListener("change", applyFilter);
    input.addEventListener("keyup", applyFilter);
    input.addEventListener("search", applyFilter);
    input.addEventListener("compositionend", applyFilter);
    clearButton.addEventListener("click", clearSearch);
    clearButton.addEventListener("touchend", clearSearch);

    applyFilter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTableauSearch, { once: true });
  } else {
    initTableauSearch();
  }

  window.addEventListener("pageshow", initTableauSearch);
})();
`;

export function WeddingTableau() {
  return (
    <div className="min-h-full bg-cream">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6">
        <Header />
        <SearchBar />

        <section className="mt-6 space-y-4" aria-label="Elenco tavoli">
          {tables.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </section>

        <div
          id="guest-search-empty"
          hidden
          className="mt-6 rounded-3xl border border-gold/20 bg-white/60 px-6 py-12 text-center"
        >
          <p className="font-display text-xl text-charcoal/70">
            Nessun invitato trovato
          </p>
          <p className="mt-2 font-sans text-sm text-charcoal/50">
            Prova a cercare con un altro nome
          </p>
        </div>

        <footer className="mt-12 text-center">
          <p className="font-display text-lg italic text-charcoal/45">
            Con amore, Nicole & Francesco
          </p>
        </footer>
      </div>
      <script dangerouslySetInnerHTML={{ __html: searchScript }} />
    </div>
  );
}
