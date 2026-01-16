import type { CatalogRepository } from "@/data/catalog/CatalogRepository";
import { catalog } from "@/data/catalog/static/catalog";

export class StaticCatalogRepository implements CatalogRepository {
  async getCatalog() {
    return catalog;
  }

  async getProductBySlug(slug: string) {
    return catalog.products.find((p) => p.slug === slug) ?? null;
  }
}
