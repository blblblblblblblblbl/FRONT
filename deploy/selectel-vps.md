# Деплой на Selectel VPS (Ubuntu) — без Docker

Это самый простой и предсказуемый вариант: Next.js собирается на сервере и запускается через systemd, а наружу отдаётся через Nginx.

## 1) Подготовка сервера

- Ubuntu 22.04/24.04
- Открыты порты 80/443 (в панели Selectel + ufw при необходимости)

Установить Node.js 20+ (любой способ; ниже пример с NodeSource):

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs
node -v
npm -v
```

Установить Nginx:

```bash
sudo apt-get install -y nginx
sudo systemctl enable --now nginx
```

## 2) Заливка проекта на сервер

Создайте папку и права:

```bash
sudo mkdir -p /var/www/jewelry-catalog
sudo chown -R $USER:$USER /var/www/jewelry-catalog
```

Скопируйте код (вариант A: git):

```bash
cd /var/www/jewelry-catalog
git clone <URL_ВАШЕГО_REPO> .
```

или вариант B: rsync/scp архивом.

Сборка:

```bash
cd /var/www/jewelry-catalog
npm ci
npm run build
```

## 3) systemd-сервис

1) Скопируйте `deploy/jewelry-catalog.service` в `/etc/systemd/system/jewelry-catalog.service`
2) Убедитесь, что `WorkingDirectory` совпадает с `/var/www/jewelry-catalog`
3) Запустите:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now jewelry-catalog
sudo systemctl status jewelry-catalog --no-pager
```

## 4) Nginx

1) Скопируйте `deploy/nginx.selectel.conf` в `/etc/nginx/sites-available/jewelry-catalog`
2) Поменяйте `server_name` на ваш домен
3) Включите сайт и перезагрузите Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/jewelry-catalog /etc/nginx/sites-enabled/jewelry-catalog
sudo nginx -t
sudo systemctl reload nginx
```

## 5) HTTPS

Обычно ставят Certbot:

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx
```

## Обновление (redeploy)

```bash
cd /var/www/jewelry-catalog
git pull
npm ci
npm run build
sudo systemctl restart jewelry-catalog
```
