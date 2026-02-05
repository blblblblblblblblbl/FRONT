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
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/606d65a75b0bf431caac39a68d53388a57d6626457f9f5412a29d9ecaa2ae414/6984f1d9/N6W-Xlr76DrRBTUYNMH3QSSEpPGE59XhV9zXbSQS0OCI8U5TCwtHxKE_8nqLitStlD59iX3YnEgDuHCjyABG9A%3D%3D?uid=0&filename=bus001_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora1" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/3454570abc5e6acbe157dc593a35905def19c1659f0d6eb9e6f1993406aec315/6984f22a/KCjaECHiTBePhg_hk3o7AWuyyk0CEx3l3MLUkgiLP3rcfVKAp3KzQQB7xs3VtmafuxnhG1jb8n673852bbXMUA%3D%3D?uid=0&filename=bus001_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora2" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/0d26b2bd91211abc6e24d9daa6720f9f8fe7d8bd8ade9eeb4a64a308f1bc467b/6984f249/rx1EZnTU80-kfrNX_Jo_gWuyyk0CEx3l3MLUkgiLP3r27Jwn02Jsek3ZsQnPJ4ag8eaFdE0ttBcd3Xj5j04t5Q%3D%3D?uid=0&filename=bus001_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora3" }
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
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/d6a4860bf7c4516656c3e3c85f7164fb5972cfbd6e4afe002e9ae8649fc7c3cb/6984f8b7/KxfkFjvfRKdH2cmfTAMBAwLzsIoLD0GxeVOGmOeno5x-tur27jcvZ6L2V5CEcZiCz1X72BFGUlaF2jQ3MOSm9w%3D%3D?uid=0&filename=bracelet001_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora1" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/b89d5f61559b45fdd12e3a3fbc6eab4f4842ffc393c142605d0dc4d62faf19a7/6984f8d2/KCjaECHiTBePhg_hk3o7AWuyyk0CEx3l3MLUkgiLP3rcfVKAp3KzQQB7xs3VtmafuxnhG1jb8n673852bbXMUA%3D%3D?uid=0&filename=bracelet001_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora2" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/7371dc635457723092a6f58549abb1098cdf02cbb89bb2691ee62619cfabe011/6984f8df/7vasSF1lyYTKnr60gj2ozmIDv5AvLMQffEluktusrSCC2LXcNK7pmdkSMQF21gIQkKjDrjjZYe6tbkVfwxjk2g%3D%3D?uid=0&filename=bracelet001_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora3" }
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
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/b0d7b5b036a73d96e42cc6dabad8727fe33889bd48ee1fec1ff5d769cefb9455/69851046/UACgmMZUUHBeO60ypX3IGH1J2Vu5gPfCGtiv5coEaAEQsvr0zFCBOhqMsqyAVu_N8B_8vmyXBGyzs3-jywSxlg%3D%3D?uid=0&filename=bus002_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora1" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/40bce984f56fff17d8b31f6bbe9325b96d718f91814e9f91007887942410c709/69851068/XBx46ZugDliA-GX_qPD6RH1J2Vu5gPfCGtiv5coEaAGUU2zEKEDkTi6EBOuBuxOrXjyDfQAkr793jKDLRm25mg%3D%3D?uid=0&filename=bus002_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora2" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/765b2262cf682cb7c35979e6ea986ba44690da7694d15db431865a152640fb95/6985107c/7s-k-_QehUheYw3KNlC3bM7i4PpYp_CDwT_QRGbiiQT9FhQZYhxWBlnuOaTN_F4UJebDwHHNsfJHWZc6XnvveQ%3D%3D?uid=0&filename=bus002_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora3" }
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
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/d77f4605ef9ff829bb8e9893bf4c15ce6e39dc3085b36e6743b26bf2b1439502/698511a9/cADC4wvGvK5WncTYlzZipjSgvzNTENnjkyFKOGSm6vJJWPcgUalhuHtzqK2TcFuFvMe_O6zmSEbFoH1WIe2XRw%3D%3D?uid=0&filename=bracelet002_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora1" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/502613841baf18d7c1a02fbe633b80ba4f0e204ba73b1514bd7aa1117d2e1a09/698511ba/O34Ci-NcJkuutYpS6Ceo9DSgvzNTENnjkyFKOGSm6vJrk9tUKEUi_9eT_OHLRlc56WRntaq4p-FPAw7scPv1Kw%3D%3D?uid=0&filename=bracelet002_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora2" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/04b160553a0cabc7b7e96af0684b7b92563bba0842de60d7f20d5434a87c590d/698511c8/7s-k-_QehUheYw3KNlC3bM7i4PpYp_CDwT_QRGbiiQT9FhQZYhxWBlnuOaTN_F4UJebDwHHNsfJHWZc6XnvveQ%3D%3D?uid=0&filename=bracelet002_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora3" }
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
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/e386de4924b2f879ba3ce029e9eb03a2e9031bfd91efd4b02289704a7a60bebd/69851307/MQi2bYWFGOJawa7oHSxIdeUmqsSyng_30FZJflNle0QFoQSnRXPZsrVwJ8DVaVOKPwHYahK6QvoCItOtcZnKdQ%3D%3D?uid=0&filename=earrings001_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora1" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/e042ab2ca47ec6774c4261920c9507c9614d20619926b9fe321aac0e19cd7ab6/69851319/OpqRuRkFf29s7uFaMBS0mXRoVLscH6ycjHoOT7e1izNI2pKDiun4drsPZuGJQBxOCBDgv5uLfQ6nqnBQGQV28g%3D%3D?uid=0&filename=earrings001_2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora2" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/f03f5d9c9a0a137a51d5a95fe01d90e366b6885a2ab15ac01e199f6e0d872a9a/6985132b/iHZTNjwfrH1MOQbG1Zd9UHIgIuv2OVm3ZrHUFnlIzpSYSdhb7uzjwOoEnVOVQS5MUhNartxeQucUibV1qqINyA%3D%3D?uid=0&filename=earrings001_3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora3" },
        { kind: "remote", url: "https://downloader.disk.yandex.ru/preview/ea669411fcb3509c0d4bb34d232eef394f937b99ca5a2f7bcf254da4c5a976ea/69851338/7s-k-_QehUheYw3KNlC3bM7i4PpYp_CDwT_QRGbiiQT9FhQZYhxWBlnuOaTN_F4UJebDwHHNsfJHWZc6XnvveQ%3D%3D?uid=0&filename=earrings001_4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048", alt: "Кольцо Aurora4" }
      ],
      specs: {
        sku: "earrings001",
        weightGrams: 2.1,
      }
    }
  ]
};
