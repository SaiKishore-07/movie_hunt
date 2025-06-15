export function convertMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}

export function formatCurrency(amount) {
  if (!amount || amount === 0) return "N/A";
  return `$${amount.toLocaleString()}`;
}
