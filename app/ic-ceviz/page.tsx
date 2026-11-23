import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PRODUCTS, SITE_CONFIG } from "@/lib/config";
import { createPageMetadata, getProductSchema } from "@/lib/seo";

const product = PRODUCTS["ic-ceviz"];

export const metadata = createPageMetadata({
  title: "İç Ceviz Satışı ve Tedariki | İstanbul 10 kg+",
  description:
    "Pastaneler, restoranlar, kuruyemişçiler ve toplu alıcılar için İstanbul'da 10 kg ve üzeri iç ceviz tedariki. WhatsApp üzerinden teklif alın.",
  path: "/ic-ceviz",
  image: product.image,
});

export default function IcCevizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <JsonLd data={getProductSchema(product)} />
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "İç Ceviz", href: "/ic-ceviz" },
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
            İstanbul&apos;da İç Ceviz Satışı ve Tedariki
          </h1>

          <p className="text-base leading-relaxed text-walnut-700">
            {product.shortDescription} {product.heroSummary}
          </p>

          <div className="rounded-xl border border-cream-200 bg-cream-100/70 p-4 text-sm text-walnut-800">
            Mutfak, tatlı üretimi veya perakende satış kullanımınıza göre mevcut
            iç ceviz seçenekleri ve güncel kilogram fiyatı WhatsApp üzerinden
            paylaşılır.
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <WhatsAppButton
              label="İç Ceviz Teklifi Al"
              productName="İç Ceviz"
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
              Ürün sınıfı, form ve ambalaj bilgileri mevcut partiye göre
              değişkenlik gösterebildiğinden teklif aşamasında teyit edilir.
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
              Kullanım Alanları
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
                Uzun süreli depolamaya uygun bütün ürün arıyorsanız{" "}
                <Link
                  href="/kabuklu-ceviz"
                  className="font-semibold text-leaf-700 underline hover:text-leaf-800"
                >
                  Kabuklu Ceviz
                </Link>{" "}
                sayfamızı inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-cream-200 bg-cream-100/70 p-6">
            <div>
              <h2 className="font-serif text-lg font-semibold text-walnut-950">
                Kabuklu Ceviz Seçeneklerini İnceleyin
              </h2>
              <p className="mt-1 text-sm text-walnut-700">
                Kuruyemişçiler ve toplu alıcılar için 10 kg+ kabuklu ceviz tedariki.
              </p>
            </div>
            <Link
              href="/kabuklu-ceviz"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-leaf-800 hover:text-leaf-900"
            >
              <span>Kabuklu Ceviz</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Teklif Formu */}
        <div id="teklif-formu" className="scroll-mt-24 lg:col-span-5">
          <QuoteForm
            defaultProduct="İç Ceviz"
            heading="İç Ceviz Teklif Formu"
            subheading="En az 10 kg iç ceviz siparişleriniz için formu doldurup doğrudan WhatsApp üzerinden teklif talep edebilirsiniz."
          />
        </div>
      </section>
    </div>
  );
}
