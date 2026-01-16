export function buildTelegramLink(username: string): string {
  const clean = username.trim().replace(/^@/, "");
  return `https://t.me/${encodeURIComponent(clean)}`;
}
