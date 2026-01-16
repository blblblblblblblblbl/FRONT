import type { Catalog, Product } from "@/domain/types/catalog";

export interface CatalogRepository {
  getCatalog(): Promise<Catalog>;
  getProductBySlug(slug: string): Promise<Product | null>;
}
