import Head from "next/head";
import Link from "next/link";

type Attraction = {
  id: string;
  title: string;
  description: string;
  address: string;
};

const attractions: Attraction[] = [
  {
    id: "red-square",
    title: "Красная площадь",
    description:
      "Главная площадь Москвы, признанный символ России. Здесь расположены Кремль, Собор Василия Блаженного, Мавзолей Ленина и ГУМ.",
    address: "Красная пл., Москва",
  },
  {
    id: "kremlin",
    title: "Московский Кремль",
    description:
      "Крепость в центре Москвы, официальная резиденция Президента России. Включает соборы, музеи и знаменитую Оружейную палату.",
    address: "Красная пл., 1, Москва",
  },
  {
    id: "st-basil",
    title: "Собор Василия Блаженного",
    description:
      "Православный храм на Красной площади, построенный в 1555–1561 гг. по приказу Ивана Грозного. Один из главных символов России.",
    address: "Красная пл., 2, Москва",
  },
  {
    id: "tretyakov",
    title: "Третьяковская галерея",
    description:
      "Крупнейший музей русского изобразительного искусства в мире. Хранит более 190 000 экспонатов: иконы, живопись, скульптуру.",
    address: "Лаврушинский пер., 10, Москва",
  },
  {
    id: "bolshoi",
    title: "Большой театр",
    description:
      "Один из самых известных театров оперы и балета в мире. Основан в 1776 году, поражает роскошным убранством зала.",
    address: "Театральная пл., 1, Москва",
  },
  {
    id: "gorky-park",
    title: "Парк Горького",
    description:
      "Культовый городской парк на берегу Москвы-реки. Место для прогулок, спорта, кафе и культурных мероприятий.",
    address: "Крымский Вал, 9, Москва",
  },
  {
    id: "vdnkh",
    title: "ВДНХ",
    description:
      "Выставочный центр с уникальными советскими павильонами, фонтанами и широкими аллеями. Рядом находится Останкинская башня.",
    address: "проспект Мира, 119, Москва",
  },
  {
    id: "arbat",
    title: "Арбат",
    description:
      "Старейшая пешеходная улица Москвы длиной около километра. Художники, сувениры, уличные музыканты и уютные кафе.",
    address: "ул. Арбат, Москва",
  },
  {
    id: "cathedral-of-christ",
    title: "Храм Христа Спасителя",
    description:
      "Кафедральный собор Русской православной церкви, самый высокий православный храм в мире. Возведён заново в 1990-х годах.",
    address: "ул. Волхонка, 15, Москва",
  },
  {
    id: "sparrow-hills",
    title: "Воробьёвы горы",
    description:
      "Природный заказник с лучшей панорамной точкой Москвы. Рядом — здание МГУ и трамплин для прыжков с трамплина.",
    address: "Воробьёвы горы, Москва",
  },
];

export default function MoscowPage() {
  return (
    <>
      <Head>
        <title>Достопримечательности Москвы</title>
        <meta
          name="description"
          content="Топ достопримечательностей Москвы, которые стоит посетить: Красная площадь, Кремль, Третьяковская галерея и другие."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-800"
          >
            ← Назад
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Достопримечательности Москвы
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            {attractions.length} мест, которые стоит посетить в столице России.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {attractions.map((attraction, index) => (
            <li
              key={attraction.id}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-700">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-lg font-semibold leading-tight">
                    {attraction.title}
                  </h2>
                  <p className="mt-1 text-xs text-neutral-500">
                    {attraction.address}
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <footer className="mt-12 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          Информация носит ознакомительный характер.
        </footer>
      </main>
    </>
  );
}
