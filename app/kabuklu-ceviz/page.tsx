import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PRODUCTS, SITE_CONFIG } from "@/lib/config";
import { createPageMetadata, getProductSchema } from "@/lib/seo";

const product = PRODUCTS["kabuklu-ceviz"];

export const metadata = createPageMetadata({
  title: "Kabuklu Ceviz Satışı ve Tedariki | İstanbul 10 kg+",
  description:
    "İstanbul'da bireysel alıcılar, kuruyemişçiler ve gıda işletmeleri için 10 kg ve üzeri kabuklu ceviz tedariki. WhatsApp üzerinden miktara özel teklif alın.",
  path: "/kabuklu-ceviz",
  image: product.image,
});

export default function KabukluCevizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <JsonLd data={getProductSchema(product)} />
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Kabuklu Ceviz", href: "/kabuklu-ceviz" },
        ]}
      />

      {/* Ürün Üst Bölümü */}
      <section className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream-200 bg-cream-100">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-5 lg:col-span-6">
          <p className="inline-flex rounded-full border border-leaf-200 bg-leaf-50 px-3 py-1 text-xs font-medium text-leaf-800">
            {product.minOrderNote} • {SITE_CONFIG.region}
          </p>

          <h1 className="font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl">
            İstanbul&apos;da Kabuklu Ceviz Satışı ve Tedariki
          </h1>

          <p className="text-base leading-relaxed text-walnut-700">
            {product.shortDescription} {product.heroSummary}
          </p>

          <div className="rounded-xl border border-cream-200 bg-cream-100/70 p-4 text-sm text-walnut-800">
            Sabit perakende fiyat listesi yerine, talep ettiğiniz kilogram
            miktarına ve teslimat ilçenize göre güncel teklif paylaşıyoruz.
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <WhatsAppButton
              label="Kabuklu Ceviz Teklifi Al"
              productName="Kabuklu Ceviz"
              variant="primary"
              size="lg"
            />
            <a
              href="#teklif-formu"
              className="inline-flex items-center justify-center rounded-lg border border-walnut-300 bg-white px-5 py-3 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-100"
            >
              Teklif Formuna Git
            </a>
          </div>
        </div>
      </section>

      {/* Ürün Bilgileri & Kullanım Alanları */}
      <section className="mt-14 grid gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <div className="rounded-2xl border border-cream-200 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-walnut-950">
              Ürün ve Tedarik Bilgileri
            </h2>
            <p className="mt-2 text-sm text-walnut-600">
              Menşei, kalibre ve hasat dönemi gibi parti bazlı bilgiler güncel
              stoğa göre değişiklik gösterebildiğinden teklif aşamasında
              netleştirilir.
            </p>

            <dl className="mt-6 divide-y divide-cream-200">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-1 py-3.5 sm:grid-cols-3 sm:gap-4"
                >
                  <dt className="text-sm font-semibold text-walnut-900">
                    {spec.label}
                  </dt>
                  <dd className="text-sm text-walnut-700 sm:col-span-2">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-cream-200 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-walnut-950">
              Kimler İçin Uygundur?
            </h2>
            <ul className="mt-4 space-y-3">
              {product.useCases.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-walnut-700 sm:text-base"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-leaf-700"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-cream-50 p-4 text-xs leading-relaxed text-walnut-700">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-walnut-600"
                aria-hidden="true"
              />
              <p>
                Kabuğu çıkarılmış, doğrudan mutfak veya pastane kullanımına
                uygun ürün arıyorsanız{" "}
                <Link
                  href="/ic-ceviz"
                  className="font-semibold text-leaf-700 underline hover:text-leaf-800"
                >
                  İç Ceviz
                </Link>{" "}
                sayfamızı inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-cream-200 bg-cream-100/70 p-6">
            <div>
              <h2 className="font-serif text-lg font-semibold text-walnut-950">
                İç Ceviz Tedarikini de İnceleyin
              </h2>
              <p className="mt-1 text-sm text-walnut-700">
                Pastane, restoran ve gıda üretimi için 10 kg+ iç ceviz seçenekleri.
              </p>
            </div>
            <Link
              href="/ic-ceviz"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-leaf-800 hover:text-leaf-900"
            >
              <span>İç Ceviz</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Teklif Formu */}
        <div id="teklif-formu" className="scroll-mt-24 lg:col-span-5">
          <QuoteForm
            defaultProduct="Kabuklu Ceviz"
            heading="Kabuklu Ceviz Teklif Formu"
            subheading="En az 10 kg kabuklu ceviz siparişleriniz için formu doldurup doğrudan WhatsApp üzerinden teklif talep edebilirsiniz."
          />
        </div>
      </section>
    </div>
  );
}
