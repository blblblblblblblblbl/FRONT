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
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/606d65a75b0bf431caac39a68d53388a57d6626457f9f5412a29d9ecaa2ae414/6984f1d9/N6W-Xlr76DrRBTUYNMH3QSSEpPGE59XhV9zXbSQS0OCI8U5TCwtHxKE_8nqLitStlD59iX3YnEgDuHCjyABG9A%3D%3D?uid=0&filename=bus001_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora1" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/3454570abc5e6acbe157dc593a35905def19c1659f0d6eb9e6f1993406aec315/6984f22a/KCjaECHiTBePhg_hk3o7AWuyyk0CEx3l3MLUkgiLP3rcfVKAp3KzQQB7xs3VtmafuxnhG1jb8n673852bbXMUA%3D%3D?uid=0&filename=bus001_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora2" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/0d26b2bd91211abc6e24d9daa6720f9f8fe7d8bd8ade9eeb4a64a308f1bc467b/6984f249/rx1EZnTU80-kfrNX_Jo_gWuyyk0CEx3l3MLUkgiLP3r27Jwn02Jsek3ZsQnPJ4ag8eaFdE0ttBcd3Xj5j04t5Q%3D%3D?uid=0&filename=bus001_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora3" }
      ],
      specs: {
        sku: "BUS-001",
        weightGrams: 2.1,
      }
    }
  ]
};
