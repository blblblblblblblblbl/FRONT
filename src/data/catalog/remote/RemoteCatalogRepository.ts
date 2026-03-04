import type { CatalogRepository } from "@/data/catalog/CatalogRepository";
import type { Catalog } from "@/domain/types/catalog";

const CATALOG_URL = "https://s3.regru.cloud/jew-photos/catalog.json";

export class RemoteCatalogRepository implements CatalogRepository {
  private normalizeCatalog(raw: unknown): Catalog {
    const isObject = (value: unknown): value is Record<string, unknown> =>
      typeof value === "object" && value !== null;

    const rawCatalog: Record<string, unknown> = isObject(raw) ? raw : {};

    const telegramUsername =
      typeof rawCatalog["telegramUsername"] === "string"
        ? (rawCatalog["telegramUsername"] as string)
        : "";

    const rawProducts = Array.isArray(rawCatalog["products"])
      ? (rawCatalog["products"] as unknown[])
      : [];

    const normalizedProducts = rawProducts
      .filter(isObject)
      .map((product) => {
        const mediaValue = product["media"];
        const imagesValue = product["images"];

        const media = Array.isArray(mediaValue)
          ? mediaValue
          : Array.isArray(imagesValue)
            ? imagesValue
            : [];

        const productWithoutImages: Record<string, unknown> = { ...product };
        delete productWithoutImages["images"];

        return { ...productWithoutImages, media };
      });

    return {
      telegramUsername,
      products: normalizedProducts,
    } as unknown as Catalog;
  }

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

    const raw = await response.json();
    return this.normalizeCatalog(raw);
  }

  async getCatalog() {
    return this.loadCatalog();
  }

  async getProductBySlug(slug: string) {
    const catalog = await this.loadCatalog();
    return catalog.products.find((product) => product.slug === slug) ?? null;
  }
}
