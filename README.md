# ToptanCevizci Web Sitesi

İstanbul odaklı ceviz satışı ve tedariki için Next.js App Router, TypeScript ve Tailwind CSS ile geliştirilmiş kurumsal, SEO uyumlu ve WhatsApp teklif odaklı web sitesi.

## Kurulum ve Çalıştırma

```bash
npm install
cp .env.example .env.local
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Ortam Değişkenleri

`.env.local` (veya Vercel Environment Variables) içinde aşağıdaki değerleri güncelleyin:

- `NEXT_PUBLIC_SITE_URL`: Canlı domain adresiniz (ör. `https://toptancevizci.com`)
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Uluslararası formatta, `+` ve boşluk olmadan WhatsApp numaranız (ör. `905XXXXXXXXX`)

Merkezi işletme, ürün ve iletişim ayarları `lib/config.ts` dosyasından yönetilir.

## Üretim Derlemesi ve Kontroller

```bash
npm run typecheck
npm run lint
npm run build
```

## Vercel Yayınlama

Projeyi GitHub/GitLab/Bitbucket reposuna yükleyip Vercel üzerinden içe aktarın ve `NEXT_PUBLIC_SITE_URL` ile `NEXT_PUBLIC_WHATSAPP_NUMBER` ortam değişkenlerini tanımlayın.
