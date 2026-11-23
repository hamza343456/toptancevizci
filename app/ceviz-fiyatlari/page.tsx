import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Package, Scale } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Ceviz Fiyatları | 10 kg ve Üzeri Güncel Teklif Alın",
  description:
    "İstanbul'da kabuklu ceviz ve iç ceviz fiyatları miktara, ürün türüne ve güncel piyasa koşullarına göre belirlenir. WhatsApp'tan özel teklif alın.",
  path: "/ceviz-fiyatlari",
});

const PRICING_FACTORS = [
  {
    icon: Scale,
    title: "Ürün Türü ve Sınıfı",
    description:
      "Kabuklu ceviz ile iç ceviz arasında işleme ve verimlilik farkı bulunur. İç cevizde kelebek veya kırık oranı gibi sınıflandırmalar da birim fiyatı etkiler.",
  },
  {
    icon: Package,
    title: "Sipariş Miktarı (10 kg ve Üzeri)",
    description:
      "Minimum 10 kg sipariş alt sınırından başlayarak toplam kilogram miktarı arttıkça miktara özel tekliflendirme yapılır.",
  },
  {
    icon: Calendar,
    title: "Sezon ve Güncel Piyasa Koşulları",
    description:
      "Tarım ürünlerinde hasat dönemi, stok durumu ve piyasa arz-talep dengesi fiyatların dönemsel olarak güncellenmesine neden olur.",
  },
  {
    icon: MapPin,
    title: "Ambalaj ve İstanbul Teslimat İlçesi",
    description:
      "Tercih edilen ambalaj tipi ve İstanbul içindeki teslimat ilçesi, toplam teklif ve lojistik planlamasında birlikte değerlendirilir.",
  },
];

export default function CevizFiyatlariPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Ceviz Fiyatları", href: "/ceviz-fiyatlari" },
        ]}
      />

      <section className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-leaf-700">
          Teklif Usulü Fiyatlandırma
        </p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl lg:text-5xl">
          Ceviz Fiyatları Nasıl Belirlenir?
        </h1>
        <p className="text-base leading-relaxed text-walnut-700 sm:text-lg">
          {SITE_CONFIG.name} web sitesinde sabit perakende ürün fiyatı
          yayınlanmaz. 10 kg ve üzeri kabuklu ceviz ve iç ceviz siparişleriniz
          için güncel stok ve miktarınıza göre WhatsApp üzerinden özel teklif
          sunulur.
        </p>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="space-y-8 lg:col-span-7">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-walnut-950">
              Fiyat Teklifini Etkileyen Başlıca Unsurlar
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {PRICING_FACTORS.map((factor) => {
                const Icon = factor.icon;
                return (
                  <div
                    key={factor.title}
                    className="rounded-2xl border border-cream-200 bg-white p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3.5 font-serif text-lg font-semibold text-walnut-950">
                      {factor.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-walnut-700">
                      {factor.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-cream-200 bg-cream-100/70 p-6 sm:p-7">
            <h2 className="font-serif text-xl font-semibold text-walnut-950">
              Güncel Fiyat Öğrenmenin En Hızlı Yolu
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-walnut-700 sm:text-base">
              Sağdaki teklif formunu doldurarak veya doğrudan WhatsApp butonuna
              tıklayarak istediğiniz ürünü, en az 10 kg olacak şekilde miktarı
              ve İstanbul teslimat ilçenizi iletmeniz yeterlidir. Web sitesi
              üzerinden ödeme alınmaz.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                label="WhatsApp'tan Güncel Fiyat Sor"
                variant="primary"
                size="md"
              />
              <Link
                href="/toptan-ceviz"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-walnut-900 hover:text-leaf-700"
              >
                <span>Toptan Tedarik Detayları</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <QuoteForm
            defaultProduct="Kabuklu Ceviz"
            heading="Güncel Fiyat Teklifi İste"
            subheading="Miktar ve teslimat ilçenizi belirtin, güncel teklif talebiniz WhatsApp'ta otomatik hazırlansın."
          />
        </div>
      </section>
    </div>
  );
}
