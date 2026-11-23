import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  MapPin,
  Package,
  Phone,
  Store,
  Truck,
  Utensils,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Toptan Ceviz Tedariki İstanbul | 10 kg ve Üzeri",
  description:
    "İstanbul'da kuruyemişçiler, pastaneler, restoranlar, gıda işletmeleri ve toplu alıcılar için 10 kg ve üzeri kabuklu ve iç ceviz tedariki. 50 kg+ Anadolu Yakası adrese teslim.",
  path: "/toptan-ceviz",
});

const SECTORS = [
  {
    icon: Store,
    title: "Kuruyemişçiler ve Perakende Satış",
    description:
      "Reyon ve paketli satış ihtiyaçları için 10 kg ve üzeri kabuklu ceviz ve iç ceviz tedariki.",
  },
  {
    icon: Utensils,
    title: "Pastaneler, Restoranlar ve Kafeler",
    description:
      "Tatlı üretimi, baklava, pasta ve mutfak hazırlıkları için düzenli veya proje bazlı iç ceviz tedariki.",
  },
  {
    icon: Building2,
    title: "Gıda İşletmeleri ve Toplu Alıcılar",
    description:
      "İmalathaneler, catering firmaları ve 10 kg üzeri toplu alım yapan bireysel müşteriler için miktara özel teklif.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "İhtiyacınızı Belirtin",
    description:
      "Kabuklu ceviz, iç ceviz veya karma sipariş tercihinizi, en az 10 kg olacak şekilde miktarınızı ve İstanbul teslimat ilçenizi paylaşın.",
  },
  {
    step: "02",
    title: "Güncel Teklif Alın",
    description:
      "Mevcut stok durumuna, ürün seçeneğine ve talep ettiğiniz kilogram aralığına göre WhatsApp üzerinden özel teklif iletilir.",
  },
  {
    step: "03",
    title: "Teslimat veya Yerinde Teslim Alma",
    description:
      "50 kg ve üzeri alımlarda İstanbul Anadolu Yakası'nda adrese teslimat planlanabilir; dileyen müşteriler Sancaktepe'de ürünleri yerinde görüp teslim alabilir.",
  },
];

export default function ToptanCevizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Toptan Ceviz", href: "/toptan-ceviz" },
        ]}
      />

      {/* Üst Başlık */}
      <section className="max-w-3xl space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full border border-leaf-200 bg-leaf-50 px-3 py-1 text-xs font-medium text-leaf-800">
          <Package className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Minimum {SITE_CONFIG.minOrderKg} kg • {SITE_CONFIG.region}</span>
        </p>

        <h1 className="font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl lg:text-5xl">
          İstanbul&apos;da Toptan Ceviz Tedariki
        </h1>

        <p className="text-base leading-relaxed text-walnut-700 sm:text-lg">
          {SITE_CONFIG.name}, İstanbul genelinde 10 kg ve üzeri kabuklu ceviz ve
          iç ceviz ihtiyacı olan işletmelere ve toplu alıcılara teklif usulü
          tedarik sunar.
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <WhatsAppButton
            label="Toptan Teklif Al"
            variant="primary"
            size="lg"
          />
          <a
            href={SITE_CONFIG.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-walnut-300 bg-white px-5 py-3 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-100"
          >
            <Phone className="h-4 w-4 text-leaf-700" aria-hidden="true" />
            <span>Direkt Ara: {SITE_CONFIG.contact.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* Hedef Sektörler */}
      <section className="mt-14" aria-labelledby="sektorler-baslik">
        <h2
          id="sektorler-baslik"
          className="font-serif text-2xl font-semibold text-walnut-950 sm:text-3xl"
        >
          Kimlere Tedarik Sağlıyoruz?
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="rounded-2xl border border-cream-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-walnut-950">
                  {sector.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-walnut-700">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Süreç ve Teklif Formu */}
      <section className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="space-y-8 lg:col-span-7">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-walnut-950 sm:text-3xl">
              Toptan Sipariş ve Teklif Süreci
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-walnut-700 sm:text-base">
              Web sitemiz üzerinden çevrimiçi ödeme alınmaz; tüm toplu sipariş
              detayları doğrudan iletişimle şeffaf biçimde planlanır.
            </p>
          </div>

          <div className="space-y-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-2xl border border-cream-200 bg-white p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-walnut-900 text-sm font-semibold text-cream-50">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-walnut-950">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-walnut-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/kabuklu-ceviz"
              className="flex items-center justify-between rounded-xl border border-cream-200 bg-cream-100/70 p-5 transition-colors hover:border-walnut-300"
            >
              <div>
                <p className="font-serif text-lg font-semibold text-walnut-950">
                  Kabuklu Ceviz
                </p>
                <p className="mt-1 text-xs text-walnut-700">
                  Ürün detayları ve 10 kg+ teklif
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-walnut-700" aria-hidden="true" />
            </Link>

            <Link
              href="/ic-ceviz"
              className="flex items-center justify-between rounded-xl border border-cream-200 bg-cream-100/70 p-5 transition-colors hover:border-walnut-300"
            >
              <div>
                <p className="font-serif text-lg font-semibold text-walnut-950">
                  İç Ceviz
                </p>
                <p className="mt-1 text-xs text-walnut-700">
                  Pastane, restoran ve gıda tedariki
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-walnut-700" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-cream-200 bg-white p-5 text-sm text-walnut-700">
            <Truck
              className="mt-0.5 h-5 w-5 shrink-0 text-leaf-700"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-walnut-950">
                50 kg ve Üzeri Anadolu Yakası Adrese Teslim
              </p>
              <p className="mt-1">
                50 kg ve üzeri siparişlerde İstanbul Anadolu Yakası&apos;nda
                adrese teslimat yapılabilir. Teslimat planı sipariş miktarına ve
                ilçeye göre teklif aşamasında netleştirilir.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-cream-200 bg-white p-5 text-sm text-walnut-700">
            <MapPin
              className="mt-0.5 h-5 w-5 shrink-0 text-leaf-700"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-walnut-950">
                Sancaktepe&apos;de Yerinde Görerek Teslim Alma
              </p>
              <p className="mt-1">
                Dileyen müşterilerimiz Sancaktepe&apos;ye gelerek ürünleri
                yerinde inceleyip teslim alabilir. Tam konum bilgisi için
                gelmeden önce{" "}
                <Link
                  href="/iletisim"
                  className="font-semibold text-leaf-700 underline hover:text-leaf-800"
                >
                  iletişim sayfamızdan
                </Link>{" "}
                bize ulaşabilirsiniz.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-cream-200 bg-white p-5 text-sm text-walnut-700">
            <ClipboardCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-leaf-700"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-walnut-950">
                Düzenli Alımlar İçin Ön Görüşme
              </p>
              <p className="mt-1">
                Aylık veya haftalık düzenli tüketimi olan işletmeler, formdaki
                açıklama alanına periyot bilgisini ekleyerek teklif isteyebilir.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <QuoteForm
            defaultProduct="Kabuklu ve İç Ceviz (Karma)"
            heading="Toptan Ceviz Teklif Formu"
            subheading="10 kg ve üzeri toptan alım talebinizi doldurun; WhatsApp üzerinden hızlı dönüş sağlayalım."
          />
        </div>
      </section>
    </div>
  );
}
