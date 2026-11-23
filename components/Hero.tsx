import Image from "next/image";
import { MapPin, Package, Phone, Truck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="border-b border-cream-200 bg-cream-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        {/* Metin Alanı */}
        <div className="space-y-6 lg:col-span-6">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-leaf-200 bg-leaf-50 px-3.5 py-1.5 text-xs font-medium text-leaf-800">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{SITE_CONFIG.region}</span>
            <span className="text-leaf-400" aria-hidden="true">
              •
            </span>
            <Package className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Minimum {SITE_CONFIG.minOrderKg} kg</span>
          </div>

          <h1 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-walnut-950 sm:text-4xl lg:text-5xl">
            İstanbul&apos;da Ceviz Satışı ve Tedariki
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-walnut-700 sm:text-lg">
            Kabuklu ceviz ve iç ceviz siparişleriniz için 10 kg ve üzeri
            miktarlarda teklif alın.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <WhatsAppButton
              label="WhatsApp'tan Teklif Al"
              variant="primary"
              size="lg"
            />
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-walnut-300 bg-white px-5 py-3.5 text-base font-medium text-walnut-900 transition-colors hover:bg-cream-100"
            >
              <Phone className="h-4 w-4 text-leaf-700" aria-hidden="true" />
              <span>Ara: {SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex flex-col gap-1.5 pt-1 text-xs leading-relaxed text-walnut-600">
            <p className="inline-flex items-center gap-1.5">
              <Truck
                className="h-3.5 w-3.5 shrink-0 text-leaf-700"
                aria-hidden="true"
              />
              <span>
                50 kg ve üzeri alımlarda İstanbul Anadolu Yakası&apos;nda adrese
                teslim; dileyenler için Sancaktepe&apos;de yerinde görüp teslim
                alma imkânı.
              </span>
            </p>
            <p>
              Web sitesi üzerinden ödeme alınmaz; fiyatlar miktara göre özel
              teklif ile paylaşılır.
            </p>
          </div>
        </div>

        {/* Hero Görseli */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-cream-200 bg-cream-100 shadow-sm sm:aspect-[16/9]">
            <Image
              src="/images/hero-ceviz.webp"
              alt="Doğal keten kumaş ve ceviz ahşap masa üzerinde kabuklu ceviz ve iç ceviz - ToptanCevizci İstanbul"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
