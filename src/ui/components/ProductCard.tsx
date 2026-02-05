import type { Product } from "@/domain/types/catalog";
import { buildTelegramLink } from "@/lib/telegram";
import { ProductCarousel } from "@/ui/components/ProductCarousel";

type Props = {
  product: Product;
  telegramUsername: string;
};

function formatRub(amount: number): string {
  const formatted = amount.toLocaleString("ru-RU");
  return `${formatted} ₽`;
}

export function ProductCard({ product, telegramUsername }: Props) {
  const tgLink = buildTelegramLink(telegramUsername);

  const pair = (label: string, value: string): readonly [string, string] => [
    label,
    value,
  ];

  const specs: Array<readonly [string, string]> = [
    pair("Артикул (SKU)", product.specs.sku),
    ...(typeof product.specs.weightGrams === "number"
      ? [pair("Вес", `${product.specs.weightGrams} г`)]
      : [pair("Вес", "—")]),
  ];

  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-soft">
      <ProductCarousel images={product.images} title={product.title} />

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold leading-tight">{product.title}</h2>
          <p className="mt-1 text-xs text-neutral-500">{product.specs.sku}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold">
            {formatRub(product.price.amount)}
          </div>
          <div
            className={
              "mt-1 inline-flex rounded-full px-2 py-1 text-[11px] " +
              (product.available
                ? "bg-emerald-50 text-emerald-700"
                : "bg-neutral-100 text-neutral-600")
            }
          >
            {product.available ? "В наличии" : "Нет в наличии"}
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-700">{product.description}</p>

      <div className="mt-4">
        <h3 className="text-sm font-semibold">Характеристики</h3>
        <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          {specs.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-3">
              <dt className="text-neutral-500">{label}</dt>
              <dd className="text-neutral-800">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Removed Уход / Доставка / Возврат fields per request */}
      </div>

      <div className="mt-5">
        <a
          href={tgLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl border-2 border-neutral-900 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
        >
          Связаться с продавцом в Telegram
        </a>
        <p className="mt-2 text-center text-[11px] text-neutral-500">
          Ответим как можно быстрее
        </p>
      </div>
    </article>
  );
}
