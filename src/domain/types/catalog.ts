import type { ImageRef } from "@/domain/types/media";

export type Money = {
  amount: number;
  currency: "RUB";
};

export type JewelrySpecs = {
  sku: string;
  material?: string;
  assay?: string;
  metalColor?: string;
  plating?: string;
  stones?: string;
  weightGrams?: number;
  size?: string;
  style?: string;
  collection?: string;
  handmade?: boolean;
  care?: string;
  shipping?: string;
  returns?: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: Money;
  available: boolean;
  images: ImageRef[];
  specs: JewelrySpecs;
};

export type Catalog = {
  telegramUsername: string;
  products: Product[];
};
