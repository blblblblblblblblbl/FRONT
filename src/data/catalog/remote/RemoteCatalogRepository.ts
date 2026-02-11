import type { CatalogRepository } from "@/data/catalog/CatalogRepository";
import type { Catalog } from "@/domain/types/catalog";

const CATALOG_URL = "https://s3.regru.cloud/jew-photos/catalog.json";

export class RemoteCatalogRepository implements CatalogRepository {
  private async loadCatalog(): Promise<Catalog> {
    const response = await fetch(CATALOG_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to load catalog: ${response.status} ${response.statusText}`);
    }

    return (await response.json()) as Catalog;
  }

  async getCatalog() {
    return this.loadCatalog();
  }

  async getProductBySlug(slug: string) {
    const catalog = await this.loadCatalog();
    return catalog.products.find((product) => product.slug === slug) ?? null;
  }
}
