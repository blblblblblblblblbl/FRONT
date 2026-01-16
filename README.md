# Jewelry Catalog (Next.js)

Одностраничная витрина украшений:
- карточки товара
- карусель фото (Embla core)
- характеристики и описание
- кнопка связи в Telegram (глобальный контакт)
- локальные изображения (WebP) в `public/`

## Быстрый старт

Требования: Node.js >= 20.

```bash
npm install
npm run dev
```

## Деплой (Vercel)

1) Залей проект в GitHub (репозиторий).
2) В Vercel нажми **Add New → Project** и выбери репозиторий.
3) Framework: Next.js (Vercel обычно определяет сам).
4) Node.js version: 20+.
5) Нажми **Deploy**.

Команды по умолчанию подходят:
- Build: `npm run build`
- Output: Next.js

## Деплой (свой сервер)

На сервере с Node.js 20+:

```bash
npm ci
npm run build
npm start
```

По умолчанию `next start` слушает `http://localhost:3000` — обычно его проксируют через Nginx/Caddy.

## Деплой (Selectel / российские провайдеры)

- VPS (рекомендуется): см. [deploy/selectel-vps.md](deploy/selectel-vps.md)
- Docker/контейнеры: в репозитории есть [Dockerfile](Dockerfile)

## Изображения

Картинки лежат в `public/images/products`. Сейчас в репозитории создаётся маленький placeholder WebP — замените на реальные фото.
