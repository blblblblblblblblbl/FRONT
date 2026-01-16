import { getCatalogRepository } from "@/data/catalog/getCatalogRepository";

export function getCatalog() {
  return getCatalogRepository().getCatalog();
}
