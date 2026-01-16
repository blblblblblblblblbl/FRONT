import type { Catalog } from "@/domain/types/catalog";
import { ProductCard } from "@/ui/components/ProductCard";

type Props = {
  catalog: Catalog;
};

export function CatalogView({ catalog }: Props) {
  return (
    <section>
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        {catalog.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            telegramUsername={catalog.telegramUsername}
          />
        ))}
      </div>
    </section>
  );
}
