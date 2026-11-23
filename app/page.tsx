import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Scale,
} from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HOME_FAQS, PRODUCTS, SITE_CONFIG } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "İstanbul'da Ceviz Satışı ve Tedariki (10 kg ve Üzeri)",
  description:
    "ToptanCevizci ile İstanbul'da 10 kg ve üzeri kabuklu ceviz ve iç ceviz siparişleriniz için WhatsApp üzerinden miktara özel teklif alın. 50 kg+ Anadolu Yakası adrese teslim ve Sancaktepe yerinde teslim.",
  path: "/",
});

const WHY_ITEMS = [
  {
    icon: Package,
    title: "Toplu Sipariş İmkânı",
    description:
      "Bireysel toplu alımlardan düzenli işletme taleplerine kadar 10 kg ve üzeri tüm siparişlerde planlı tedarik desteği.",
  },
  {
    icon: Scale,
    title: "Teklif Usulü Fiyatlandırma",
    description:
      "Sabit perakende listeleri yerine ürün türüne, kilogram miktarına ve güncel stok durumuna göre müşteriye özel teklif.",
  },
  {
    icon: MapPin,
    title: "Anadolu Yakası Teslim & Yerinde Görerek Alım",
    description:
      "50 kg ve üzeri alımlarda İstanbul Anadolu Yakası'nda adrese teslim; dileyenler için Sancaktepe'de yerinde görüp teslim alma imkânı.",
  },
  {
    icon: MessageSquare,
    title: "Doğrudan Müşteri İletişimi",
    description:
      "WhatsApp teklif hattı ve direkt telefon iletişimiyle aracı adımlar olmadan hızlı bilgi ve teklif paylaşımı.",
  },
];

const TARGET_BUYERS = [
  "Kuruyemişçiler",
  "Pastaneler ve Tatlı Üreticileri",
  "Restoranlar ve Kafeler",
  "Gıda İşletmeleri ve İmalathaneler",
  "10 kg+ Alım Yapan Bireysel Müşteriler",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Alanı */}
      <Hero />

      {/* 2. Ürünlerimiz */}
      <section
        id="urunlerimiz"
        aria-labelledby="urunlerimiz-baslik"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-leaf-700">
            Ürünlerimiz
          </p>
          <h2
            id="urunlerimiz-baslik"
            className="mt-2 font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl"
          >
            Kabuklu Ceviz ve İç Ceviz Tedariki
          </h2>
          <p className="mt-3 text-base leading-relaxed text-walnut-700">
            İhtiyacınıza uygun ürünü inceleyin; ürün detay sayfalarındaki teklif
            formu veya WhatsApp üzerinden 10 kg ve üzeri siparişleriniz için
            güncel teklif isteyin.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ProductCard product={PRODUCTS["kabuklu-ceviz"]} />
          <ProductCard product={PRODUCTS["ic-ceviz"]} />
        </div>
      </section>

      {/* 3. Neden ToptanCevizci? */}
      <section
        aria-labelledby="neden-baslik"
        className="border-y border-cream-200 bg-cream-100/70"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-leaf-700">
              Çalışma Yaklaşımımız
            </p>
            <h2
              id="neden-baslik"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl"
            >
              Neden {SITE_CONFIG.name}?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-walnut-700">
              Ceviz alımında sade, şeffaf ve doğrudan iletişim kuran bir tedarik
              süreci sunuyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cream-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-walnut-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-walnut-700">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Toplu Sipariş Alanı */}
      <section
        aria-labelledby="toplu-siparis-baslik"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="overflow-hidden rounded-3xl border border-walnut-800 bg-walnut-900 text-cream-50">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:items-center lg:p-12">
            <div className="space-y-5 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-walnut-700 bg-walnut-800 px-3.5 py-1 text-xs font-medium text-cream-100">
                <Building2 className="h-3.5 w-3.5 text-leaf-300" />
                <span>10 kg ve Üzeri Toplu Siparişler</span>
              </div>

              <h2
                id="toplu-siparis-baslik"
                className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
              >
                İşletmeniz veya Toplu Alımlarınız İçin Özel Teklif Alın
              </h2>

              <p className="text-base leading-relaxed text-walnut-200">
                Minimum {SITE_CONFIG.minOrderKg} kg olmak üzere tek seferlik
                veya düzenli ceviz ihtiyaçlarınızda teklif alabilirsiniz. 50 kg
                ve üzeri alımlarda İstanbul Anadolu Yakası&apos;nda adrese
                teslimat yapılabilir; dileyen müşterilerimiz Sancaktepe&apos;ye
                gelerek ürünleri yerinde görüp teslim alabilir.
              </p>

              <ul className="flex flex-wrap gap-2 pt-1">
                {TARGET_BUYERS.map((buyer) => (
                  <li
                    key={buyer}
                    className="rounded-lg border border-walnut-700 bg-walnut-800/70 px-3 py-1.5 text-xs font-medium text-cream-100"
                  >
                    {buyer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-2xl border border-walnut-700 bg-walnut-950/60 p-6 lg:col-span-5">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-cream-50">
                <ClipboardList
                  className="h-5 w-5 text-leaf-400"
                  aria-hidden="true"
                />
                <span>Teklif Süreci Nasıl İşler?</span>
              </div>
              <ol className="space-y-2.5 text-sm text-walnut-200">
                <li>1. Ürün türünü (kabuklu veya iç ceviz) seçin.</li>
                <li>2. En az 10 kg olacak şekilde miktarı ve ilçeyi belirtin.</li>
                <li>
                  3. WhatsApp veya telefonla güncel teklif ve teslimat bilgisini
                  alın.
                </li>
              </ol>

              <div className="flex flex-col gap-3 pt-2">
                <WhatsAppButton
                  label="WhatsApp'tan Teklif Al"
                  variant="primary"
                  size="md"
                  fullWidth
                />
                <a
                  href={SITE_CONFIG.contact.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-walnut-700 bg-walnut-800/80 px-4 py-2.5 text-sm font-medium text-cream-50 transition-colors hover:bg-walnut-800"
                >
                  <Phone className="h-4 w-4 text-leaf-300" aria-hidden="true" />
                  <span>Direkt Ara: {SITE_CONFIG.contact.phoneDisplay}</span>
                </a>
                <Link
                  href="/ceviz-fiyatlari"
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-cream-100 transition-colors hover:text-white"
                >
                  <span>Fiyatlandırma hakkında bilgi alın</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sıkça Sorulan Sorular */}
      <section
        id="sss"
        aria-labelledby="sss-baslik"
        className="border-t border-cream-200 bg-cream-100/50"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-leaf-700">
              Merak Edilenler
            </p>
            <h2
              id="sss-baslik"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl"
            >
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <FAQ items={HOME_FAQS} />

          <div className="mt-10 rounded-2xl border border-cream-200 bg-white p-6 text-center sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-walnut-950">
              Başka bir sorunuz mu var?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-walnut-700">
              Ürün seçimi, 50 kg üzeri Anadolu Yakası teslimatı veya
              Sancaktepe&apos;de yerinde görüp teslim alma detayları için bize
              doğrudan ulaşabilirsiniz.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                label="WhatsApp ile İletişime Geç"
                variant="primary"
                size="md"
              />
              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-walnut-300 bg-white px-5 py-2.5 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-100"
              >
                <Phone className="h-4 w-4 text-leaf-700" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-1.5 rounded-lg border border-walnut-300 bg-white px-5 py-2.5 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-100"
              >
                <span>Konum ve İletişim</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
