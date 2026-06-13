export function normalize(text: string) {
  try {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  } catch {
    return text.toLowerCase();
  }
}

export function matchesQuery(text: string, query: string) {
  const trimmed = query.trim();
  if (!trimmed) return true;
  return normalize(text).includes(normalize(trimmed));
}
