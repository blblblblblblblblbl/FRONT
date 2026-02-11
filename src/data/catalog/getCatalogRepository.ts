import type { CatalogRepository } from "@/data/catalog/CatalogRepository";
import { RemoteCatalogRepository } from "@/data/catalog/remote/RemoteCatalogRepository";

let singleton: CatalogRepository | null = null;

export function getCatalogRepository(): CatalogRepository {
  if (!singleton) singleton = new RemoteCatalogRepository();
  return singleton;
}
