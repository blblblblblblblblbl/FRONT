import { getCatalogRepository } from "@/data/catalog/getCatalogRepository";

export function getProductBySlug(slug: string) {
  return getCatalogRepository().getProductBySlug(slug);
}
