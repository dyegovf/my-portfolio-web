export function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function formatPeriod(startDate, endDate) {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Atual";

  return `${start} - ${end}`;
}
