import type { Catalog } from "@/domain/types/catalog";

export const catalog: Catalog = {
  telegramUsername: "kblblblblbl",
  products: [
    {
      id: "p1",
      slug: "bus001",
      title: "Бусы",
      description:"Бусы из натурального флюорита, ювелирная огранка, размер камней 8 мм, длина 46см",
      price: { amount: 3200, currency: "RUB" },
      available: true,
      images: [
        { kind: "local", path: "/images/products/bus001_1.jpg", alt: "Кольцо Aurora1" },
        { kind: "local", path: "/images/products/bus001_2.jpg", alt: "Кольцо Aurora2" },
        { kind: "local", path: "/images/products/bus001_3.jpg", alt: "Кольцо Aurora2" }
      ],
      specs: {
        sku: "BUS-001",
        weightGrams: 2.1,
      }
    }
  ]
};
