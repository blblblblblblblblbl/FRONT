import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type TileSize = {
  label: string;
  dimensions: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  imageUrl: string;
  imageAlt: string;
};

type Store = {
  name: string;
  url: string;
  searchUrl: string;
  note: string;
};

const TILE_SIZES: TileSize[] = [
  {
    label: "Мозаика 10×10 мм / 5×5 см",
    dimensions: "5×5 или 10×10 см",
    pros: [
      "Визуально увеличивает маленькое пространство за счёт большого количества швов",
      "Идеально облегает криволинейные поверхности и ниши",
      "Классический ретро-стиль, широкий выбор цветов",
      "Хорошее сцепление на влажных поверхностях (много швов = много затирки)",
    ],
    cons: [
      "Много швов — значит много уборки и риск потемнения затирки",
      "Монтаж дольше и дороже по работе",
      "Может выглядеть «пёстро» при неудачном подборе цвета",
    ],
    bestFor: "Акцентная стена, пол в душевой зоне, ниши",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    imageAlt: "Белая мозаичная плитка 10×10 в ванной",
  },
  {
    label: "Квадрат 15×15 см",
    dimensions: "15×15 см",
    pros: [
      "Классика для маленьких ванных — проверенный формат",
      "Хорошо смотрится в помещениях до 4–5 м²",
      "Широкий выбор в российских магазинах, доступная цена",
      "Ретро- и современные стили: белая глянцевая, метро-плитка",
    ],
    cons: [
      "Швов всё ещё много — регулярная чистка обязательна",
      "На больших стенах монотонно без акцентов",
    ],
    bestFor: "Стены небольших ванных комнат до ~5 м²",
    imageUrl:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
    imageAlt: "Белая плитка 15×15 в ванной комнате",
  },
  {
    label: "Квадрат 20×20 см",
    dimensions: "20×20 см",
    pros: [
      "Оптимальный баланс для комнат 3–6 м²",
      "Меньше швов, чем у 15×15 — проще уход",
      "Популярный формат → большой выбор коллекций",
    ],
    cons: [
      "Для ванной 3.88 м² на стене смотрится чуть крупновато",
      "Нужна точная разметка, иначе подрезки заметны",
    ],
    bestFor: "Стены ванных 4–8 м², пол средних помещений",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
    imageAlt: "Светлая плитка 20×20 в ванной",
  },
  {
    label: "Прямоугольник 30×60 см",
    dimensions: "30×60 см",
    pros: [
      "Визуально «вытягивает» помещение по вертикали — отлично при потолке 2.7 м",
      "Мало швов — легко мыть",
      "Современный, лаконичный вид",
    ],
    cons: [
      "Для 3.88 м² кажется крупным — нужна осторожная укладка",
      "Много подрезков в маленьком помещении = больше отходов (~15–20%)",
      "Тяжелее и дороже монтаж (требует ровного основания)",
    ],
    bestFor: "Стены при высоких потолках, создание эффекта простора",
    imageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    imageAlt: "Большая прямоугольная плитка 30×60 в ванной",
  },
];

const STORES: Store[] = [
  {
    name: "Леруа Мерлен Новосибирск",
    url: "https://leroymerlin.ru/stores/novosibirsk/",
    searchUrl:
      "https://leroymerlin.ru/catalogue/plitka-dlya-vanny/?q=plitka+dlya+vannoj",
    note: "3 магазина в Новосибирске, самовывоз или доставка",
  },
  {
    name: "Керама Марацци — дилеры в Новосибирске",
    url: "https://www.kerama-marazzi.com/where-to-buy/?city=Novosibirsk",
    searchUrl:
      "https://www.kerama-marazzi.com/catalogue/bathroom/?size=15x15&color=white",
    note: "Официальный производитель, широкий выбор коллекций",
  },
  {
    name: "Плиткин Дом Новосибирск",
    url: "https://plitkin-dom.ru/",
    searchUrl: "https://plitkin-dom.ru/catalog/plitka/dlya-vannoj/",
    note: "Специализированный магазин плитки в Новосибирске",
  },
  {
    name: "СтройМаркет — плитка Новосибирск",
    url: "https://stroymarket-nsk.ru/",
    searchUrl: "https://stroymarket-nsk.ru/catalog/plitka/",
    note: "Строительный гипермаркет, доставка по Новосибирску",
  },
  {
    name: "OBI Новосибирск",
    url: "https://www.obi.ru/magaziny/novosibirsk/",
    searchUrl: "https://www.obi.ru/catalog/plitka-dlya-vanny/",
    note: "Широкий ассортимент, самовывоз в Новосибирске",
  },
];

const RECOMMENDATIONS = {
  roomArea: 3.88,
  ceilingHeight: 2.7,
  topPick: "15×15 или 20×20 см (белая глянцевая)",
  reasoning: [
    "Для площади 3.88 м² и потолка 2.7 м оптимален формат 15×15 или 20×20 см — не перегружает взгляд и хорошо заполняет стену.",
    "Белая глянцевая плитка отражает свет и визуально увеличивает небольшое пространство.",
    "Глянец при потолке 2.7 м создаёт ощущение высоты за счёт отражений.",
    "Формат 30×60, уложенный вертикально, тоже визуально поднимет потолок — хороший современный вариант, но будьте готовы к ~15% отходов при подрезке.",
  ],
  tipsTitle: "Практические советы для вашей ванной",
  tips: [
    "Рассчитайте площадь стен: периметр × высота = примерно 12–14 м² с вычетом проёмов. Возьмите запас 10–15%.",
    "Белая плитка + светлая затирка = минимум видимых загрязнений и уход проще.",
    "Для пола выбирайте матовую нескользящую плитку (R9–R11 по DIN) с противоскользящим покрытием.",
    "Комбинируйте: стены — 15×15 белая глянцевая, пол — 20×20 матовая светло-серая.",
    "Укладка «кирпичиком» (смещение швов) делает маленькую ванную динамичнее.",
    "При высоте 2.7 м укладывайте плитку от пола до потолка — горизонтальные бордюры «разрезают» пространство.",
  ],
};

export default function TileAdvisorPage() {
  return (
    <>
      <Head>
        <title>Выбор плитки для ванной — советник</title>
        <meta
          name="description"
          content="Как выбрать плитку и её размер для небольшой ванной комнаты 3.88 м². Сравнение форматов, плюсы и минусы, ссылки на магазины в Новосибирске."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* Back link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-800"
        >
          ← На главную
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Как выбрать плитку для ванной
          </h1>
          <p className="mt-2 text-neutral-600">
            Площадь ванной{" "}
            <strong>{RECOMMENDATIONS.roomArea} м²</strong>, высота потолков{" "}
            <strong>{RECOMMENDATIONS.ceilingHeight} м</strong> — подбираем
            оптимальный формат и цвет.
          </p>
        </div>

        {/* Recommendation banner */}
        <div className="mb-10 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-5">
          <h2 className="text-lg font-semibold text-emerald-800">
            ✅ Наша рекомендация: {RECOMMENDATIONS.topPick}
          </h2>
          <ul className="mt-3 space-y-1">
            {RECOMMENDATIONS.reasoning.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-emerald-900">
                <span className="mt-0.5 shrink-0 text-emerald-500">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practical tips */}
        <div className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h2 className="mb-3 text-lg font-semibold text-blue-800">
            💡 {RECOMMENDATIONS.tipsTitle}
          </h2>
          <ul className="space-y-2">
            {RECOMMENDATIONS.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-blue-900">
                <span className="mt-0.5 shrink-0 font-bold text-blue-400">
                  {i + 1}.
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tile size comparison */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">
            Сравнение форматов плитки
          </h2>
          <div className="flex flex-col gap-6">
            {TILE_SIZES.map((tile) => (
              <article
                key={tile.label}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-56">
                    <Image
                      src={tile.imageUrl}
                      alt={tile.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 224px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-5">
                    <h3 className="text-lg font-semibold">{tile.label}</h3>
                    <p className="mt-1 text-xs text-neutral-500">
                      Подходит для: {tile.bestFor}
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Pros */}
                      <div>
                        <h4 className="mb-1 text-sm font-semibold text-emerald-700">
                          Плюсы
                        </h4>
                        <ul className="space-y-1">
                          {tile.pros.map((pro, i) => (
                            <li
                              key={i}
                              className="flex gap-1.5 text-xs text-neutral-700"
                            >
                              <span className="mt-0.5 shrink-0 text-emerald-500">
                                ✓
                              </span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cons */}
                      <div>
                        <h4 className="mb-1 text-sm font-semibold text-red-600">
                          Минусы
                        </h4>
                        <ul className="space-y-1">
                          {tile.cons.map((con, i) => (
                            <li
                              key={i}
                              className="flex gap-1.5 text-xs text-neutral-700"
                            >
                              <span className="mt-0.5 shrink-0 text-red-400">
                                ✗
                              </span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stores */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-semibold">
            Где купить в Новосибирске
          </h2>
          <p className="mb-5 text-sm text-neutral-500">
            Магазины с наличием в Новосибирске или доставкой по городу.
          </p>
          <div className="flex flex-col gap-4">
            {STORES.map((store) => (
              <div
                key={store.name}
                className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {store.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {store.note}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
                    >
                      Магазин
                    </a>
                    <a
                      href={store.searchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border-2 border-neutral-900 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-50"
                    >
                      Каталог плитки →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual examples */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-semibold">
            Примеры белой плитки в маленьких ванных
          </h2>
          <p className="mb-5 text-sm text-neutral-500">
            Фотографии для вдохновения (нажмите для просмотра в источнике).
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              {
                url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
                alt: "Белая плитка 15×15 в ванной — классика",
                caption: "15×15 белая глянец",
              },
              {
                url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
                alt: "Светлая ванная с современной плиткой",
                caption: "20×20 светлая матовая",
              },
              {
                url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
                alt: "Современная ванная с прямоугольной плиткой",
                caption: "30×60 вертикальная укладка",
              },
              {
                url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                alt: "Мозаика в ванной — детали",
                caption: "Мозаика 5×5 — акцент",
              },
              {
                url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
                alt: "Минималистичная белая ванная",
                caption: "Белый глянец + световые акценты",
              },
              {
                url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
                alt: "Ванная с комбинированной плиткой",
                caption: "Комбинация форматов",
              },
            ].map((photo) => (
              <a
                key={photo.url}
                href={photo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-neutral-200"
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={photo.url}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <p className="px-2 py-1.5 text-xs text-neutral-600">
                  {photo.caption}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          Советы носят рекомендательный характер. Окончательный выбор зависит от
          личных предпочтений, освещения и общего стиля интерьера.
        </footer>
      </main>
    </>
  );
}
