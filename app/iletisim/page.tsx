import {
  ExternalLink,
  Info,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Truck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "İletişim | WhatsApp Teklif, Telefon ve Sancaktepe Teslimat",
  description:
    "ToptanCevizci iletişim: WhatsApp teklif hattı (+90 551 087 35 12), direkt arama (0537 637 16 40), 50 kg+ Anadolu Yakası adrese teslim ve Sancaktepe yerinde teslim alma.",
  path: "/iletisim",
});

export default function IletisimPage() {
  const { contact } = SITE_CONFIG;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "İletişim", href: "/iletisim" },
        ]}
      />

      <section className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-leaf-700">
          Doğrudan İletişim
        </p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl lg:text-5xl">
          İletişim, Konum ve Teklif Talebi
        </h1>
        <p className="text-base leading-relaxed text-walnut-700 sm:text-lg">
          Kabuklu ceviz ve iç ceviz siparişleriniz için WhatsApp üzerinden
          teklif alabilir, telefonla doğrudan arayabilir veya Sancaktepe&apos;de
          yerinde görüp teslim almak için bizimle iletişime geçebilirsiniz.
        </p>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="space-y-6 lg:col-span-5">
          {/* Hızlı İletişim Kanalları */}
          <div className="rounded-2xl border border-cream-200 bg-white p-6 sm:p-7">
            <h2 className="font-serif text-xl font-semibold text-walnut-950">
              Hızlı İletişim Kanalları
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-walnut-700">
              10 kg ve üzeri sipariş teklifleri için WhatsApp hattımızdan
              yazabilir veya doğrudan telefonla görüşebilirsiniz.
            </p>
            <div className="mt-5 space-y-3">
              <WhatsAppButton
                label={`WhatsApp: ${SITE_CONFIG.whatsappDisplay}`}
                variant="primary"
                size="md"
                fullWidth
              />
              <a
                href={contact.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-walnut-300 bg-white px-5 py-2.5 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-100 sm:text-base"
              >
                <Phone className="h-4 w-4 text-leaf-700" aria-hidden="true" />
                <span>Direkt Ara: {contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Teslimat ve İşletme Bilgileri */}
          <div className="rounded-2xl border border-cream-200 bg-white p-6 sm:p-7">
            <h2 className="font-serif text-xl font-semibold text-walnut-950">
              Teslimat ve İşletme Bilgileri
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Truck
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-walnut-900">
                    Adrese Teslimat (50 kg ve Üzeri)
                  </dt>
                  <dd className="text-walnut-700">
                    50 kg ve üzeri alımlarda İstanbul Anadolu Yakası&apos;nda
                    adrese teslim imkânı sunulur.
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-walnut-900">
                    Yerinde Görerek Teslim Alma
                  </dt>
                  <dd className="text-walnut-700">
                    Dileyen müşterilerimiz Sancaktepe&apos;ye gelerek ürünleri
                    yerinde görüp teslim alabilir. Tam konum bilgisi için
                    gelmeden önce iletişime geçiniz.
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Package
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-walnut-900">
                    Minimum Sipariş Miktarı
                  </dt>
                  <dd className="text-walnut-700">
                    {SITE_CONFIG.minOrderKg} kg ve üzeri
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-walnut-900">
                    WhatsApp Teklif Hattı
                  </dt>
                  <dd className="text-walnut-700">
                    {SITE_CONFIG.whatsappDisplay}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf-700"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-walnut-900">
                    Direkt Arama
                  </dt>
                  <dd>
                    <a
                      href={contact.phoneHref}
                      className="font-medium text-walnut-800 underline decoration-walnut-300 underline-offset-2 hover:text-leaf-700"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <QuoteForm
            heading="Teklif ve İletişim Formu"
            subheading="Bilgilerinizi doldurarak teklif talebinizi doğrudan WhatsApp mesajı olarak iletebilirsiniz."
          />
        </div>
      </section>

      {/* Referans Konum Haritası (Sancaktepe Samandıra Merkez Metro İstasyonu) */}
      <section
        aria-labelledby="konum-harita-baslik"
        className="mt-14 rounded-2xl border border-cream-200 bg-white p-6 sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-leaf-700">
              Yerinde Teslim Bölgesi
            </p>
            <h2
              id="konum-harita-baslik"
              className="mt-1.5 font-serif text-2xl font-semibold text-walnut-950"
            >
              Sancaktepe Referans Konumu
            </h2>
            <p className="mt-1 text-sm text-walnut-700">
              Referans nokta: <strong>{contact.mapReferenceName}</strong>
            </p>
          </div>
          <a
            href={contact.mapExternalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-walnut-300 bg-cream-50 px-4 py-2 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-100"
          >
            <span>Google Haritalar&apos;da Aç</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-leaf-200 bg-leaf-50/80 p-4 text-sm leading-relaxed text-leaf-950">
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-leaf-700"
            aria-hidden="true"
          />
          <p>{contact.mapDisclaimer}</p>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-cream-200 bg-cream-100">
          <iframe
            title="Sancaktepe Samandıra Merkez Metro İstasyonu Referans Konumu"
            src={contact.mapEmbedUrl}
            className="h-80 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
