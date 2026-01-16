import type { CatalogRepository } from "@/data/catalog/CatalogRepository";
import { StaticCatalogRepository } from "@/data/catalog/static/StaticCatalogRepository";

let singleton: CatalogRepository | null = null;

export function getCatalogRepository(): CatalogRepository {
  if (!singleton) singleton = new StaticCatalogRepository();
  return singleton;
}
