import type { Catalog } from "@/domain/types/catalog";

export const catalog: Catalog = {
  telegramUsername: "kblblblblbl",
  products: [
    {
      id: "p1",
      slug: "bus001",
      title: "Бусы флюорит",
      description:"Бусы из натурального флюорита, ювелирная огранка, размер камней 8 мм, длина 46см",
      price: { amount: 3200, currency: "RUB" },
      available: true,
      images: [
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bus001/bus001_1.jpg", alt: "Бусы флюорит 1" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bus001/bus001_2.jpg", alt: "Бусы флюорит 2" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bus001/bus001_3.jpg", alt: "Бусы флюорит 3" }
      ],
      specs: {
        sku: "bus001",
        weightGrams: 2.1,
      }
    },
    {
      id: "p1",
      slug: "bracelet001",
      title: "Браслет флюорит",
      description:"Браслет из натурального флюорита, ювелирная огранка, длина 18см",
      price: { amount: 3500, currency: "RUB" },
      available: true,
      images: [
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bracelet001/bracelet001_1.jpg", alt: "Браслет флюорит 1" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bracelet001/bracelet001_2.jpg", alt: "Браслет флюорит 2" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bracelet001/bracelet001_3.jpg", alt: "Браслет флюорит 3" }
      ],
      specs: {
        sku: "bracelet001",
        weightGrams: 2.1,
      }
    },
    {
      id: "p3",
      slug: "bus002",
      title: "Бусы агат оранжевый",
      description:"Бусы из натурального агата оранжевого, размер камней 8 мм, ювелирная огранка, длина 43см",
      price: { amount: 2500, currency: "RUB" },
      available: true,
      images: [
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bus002/bus002_1.jpg", alt: "Бусы агат оранжевый 1" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bus002/bus002_2.jpg", alt: "Бусы агат оранжевый 2" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bus002/bus002_3.jpg", alt: "Бусы агат оранжевый 3" }
      ],
      specs: {
        sku: "bus002",
        weightGrams: 2.1,
      }
    },
    {
      id: "p4",
      slug: "bracelet002",
      title: "Браслет агат оранжевый",
      description:"Браслет из натурального агата оранжевого, размер камней 8 мм, ювелирная огранка, длина 18см",
      price: { amount: 2500, currency: "RUB" },
      available: true,
      images: [
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bracelet002/bracelet002_1.jpg", alt: "Браслет агат оранжевый 1" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bracelet002/bracelet002_2.jpg", alt: "Браслет агат оранжевый 2" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/bracelet002/bracelet002_3.jpg", alt: "Браслет агат оранжевый 3" }
      ],
      specs: {
        sku: "bracelet002",
        weightGrams: 2.1,
      }
    },
    {
      id: "p5",
      slug: "earrings001",
      title: "Серьги агат индийский",
      description:"Серьги из натурального индийского агата оранжевого, размер камней 10 мм, замок из латуни с позолотой 18к, размер 30мм, на среднюю мочку уха",
      price: { amount: 2000, currency: "RUB" },
      available: true,
      images: [
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/earrings001/earrings001_1.jpg", alt: "Серьги агат индийский 1" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/earrings001/earrings001_2.jpg", alt: "Серьги агат индийский 2" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/earrings001/earrings001_3.jpg", alt: "Серьги агат индийский 3" },
        { kind: "remote", url: "https://s3.regru.cloud/jew-photos/earrings001/earrings001_4.jpg", alt: "Серьги агат индийский 4" }
      ],
      specs: {
        sku: "earrings001",
        weightGrams: 2.1,
      }
    }
  ]
};
