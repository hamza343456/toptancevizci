import Link from "next/link";
import { MapPin, Package, Phone, Truck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-walnut-800 bg-walnut-950 text-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marka Özeti */}
          <div className="space-y-4">
            <div>
              <p className="font-serif text-xl font-semibold text-cream-50">
                {SITE_CONFIG.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-walnut-300">
                İstanbul Ceviz Satışı ve Tedariki
              </p>
            </div>
            <p className="text-sm leading-relaxed text-walnut-200">
              İstanbul genelinde bireysel alıcılar, kuruyemişçiler, pastaneler,
              restoranlar ve gıda işletmeleri için 10 kg ve üzeri kabuklu ceviz
              ve iç ceviz tedariki.
            </p>
            <div className="flex flex-col gap-2 text-sm text-walnut-200">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-leaf-400" aria-hidden="true" />
                Yerinde teslim: {SITE_CONFIG.contact.pickupRegion}
              </span>
              <span className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 shrink-0 text-leaf-400" aria-hidden="true" />
                50 kg+ Anadolu Yakası adrese teslim
              </span>
              <span className="inline-flex items-center gap-2">
                <Package className="h-4 w-4 shrink-0 text-leaf-400" aria-hidden="true" />
                Minimum sipariş: {SITE_CONFIG.minOrderKg} kg
              </span>
            </div>
          </div>

          {/* Ürünler ve Tedarik */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50">
              Ürünler &amp; Tedarik
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-walnut-200">
              <li>
                <Link
                  href="/kabuklu-ceviz"
                  className="transition-colors hover:text-white"
                >
                  Kabuklu Ceviz
                </Link>
              </li>
              <li>
                <Link
                  href="/ic-ceviz"
                  className="transition-colors hover:text-white"
                >
                  İç Ceviz
                </Link>
              </li>
              <li>
                <Link
                  href="/toptan-ceviz"
                  className="transition-colors hover:text-white"
                >
                  Toptan Ceviz
                </Link>
              </li>
              <li>
                <Link
                  href="/ceviz-fiyatlari"
                  className="transition-colors hover:text-white"
                >
                  Ceviz Fiyatları
                </Link>
              </li>
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50">
              Kurumsal
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-walnut-200">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="transition-colors hover:text-white"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="transition-colors hover:text-white"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hızlı Teklif ve İletişim */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50">
              Teklif ve İletişim
            </h2>
            <p className="text-sm leading-relaxed text-walnut-200">
              Güncel stok ve miktara özel fiyat bilgisi için WhatsApp üzerinden
              yazabilir veya doğrudan arayabilirsiniz. Web sitesi üzerinden
              ödeme alınmaz.
            </p>
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-cream-50 transition-colors hover:text-leaf-300"
            >
              <Phone className="h-4 w-4 text-leaf-400" aria-hidden="true" />
              <span>Direkt Arama: {SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <div>
              <WhatsAppButton
                label="WhatsApp'tan Teklif Al"
                variant="primary"
                size="sm"
              />
            </div>
            <p className="text-xs leading-relaxed text-walnut-300">
              Yerinde görüp teslim almak için tam konum bilgisi adına lütfen
              iletişime geçin.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-walnut-800 pt-6 text-xs text-walnut-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Tüm hakları saklıdır.
          </p>
          <p>
            Sancaktepe, İstanbul • 10 kg ve üzeri kabuklu ceviz ve iç ceviz
            tedariki
          </p>
        </div>
      </div>
    </footer>
  );
}
