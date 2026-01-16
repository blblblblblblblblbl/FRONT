import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { getCatalog } from "@/domain/use-cases/getCatalog";
import { buildTelegramLink } from "@/lib/telegram";
import { CatalogView } from "@/ui/views/CatalogView";

export const getStaticProps: GetStaticProps = async () => {
  const catalog = await getCatalog();

  return {
    props: { catalog },
  };
};

export default function HomePage({
  catalog,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const telegramUsername = catalog.telegramUsername?.trim() ?? "";
  const tgLink = telegramUsername ? buildTelegramLink(telegramUsername) : "";

  return (
    <>
      <Head>
        <title>Каталог украшений</title>
        <meta
          name="description"
          content="Витрина украшений: карточки товаров, карусель фото, контакт в Telegram"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Украшения ручной работы
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-neutral-600">
                Листайте фото в карточках и пишите продавцу в Telegram.
              </p>
            </div>

            {tgLink ? (
              <a
                href={tgLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-900 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
              >
                Написать в Telegram
              </a>
            ) : null}
          </div>
        </div>

        <CatalogView catalog={catalog} />

        <footer className="mt-12 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          Фото хранятся локально в Vercel (обновление через redeploy).
        </footer>
      </main>
    </>
  );
}
