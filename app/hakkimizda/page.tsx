import Link from "next/link";
import { ArrowRight, MapPin, MessageSquare, Package, Scale } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Hakkımızda | İstanbul Ceviz Satışı ve Tedariki",
  description:
    "ToptanCevizci hakkında: İstanbul odaklı, 10 kg ve üzeri kabuklu ceviz ve iç ceviz tedarik yaklaşımımız ve teklif usulü çalışma modelimiz.",
  path: "/hakkimizda",
});

const PRINCIPLES = [
  {
    icon: Package,
    title: "Net Ürün Odağı",
    description:
      "Yalnızca kabuklu ceviz ve iç ceviz satışı ve tedarikine odaklanarak sade, anlaşılır bir ürün yapısı sunuyoruz.",
  },
  {
    icon: Scale,
    title: "Şeffaf Teklif Modeli",
    description:
      "10 kg ve üzeri her talep için ürün türü, miktar ve güncel piyasa koşullarına göre özel teklif hazırlıyoruz.",
  },
  {
    icon: MapPin,
    title: "İstanbul Odaklı Hizmet",
    description:
      "Faaliyetimizi İstanbul genelindeki bireysel toplu alıcılara, kuruyemişçilere, pastanelere, restoranlara ve gıda işletmelerine göre planlıyoruz.",
  },
  {
    icon: MessageSquare,
    title: "Doğrudan WhatsApp İletişimi",
    description:
      "Sipariş ve teklif süreçlerini karmaşık e-ticaret adımları yerine doğrudan WhatsApp iletişimi üzerinden yürütüyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hakkımızda", href: "/hakkimizda" },
        ]}
      />

      <section className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-leaf-700">
          Kurumsal
        </p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl lg:text-5xl">
          {SITE_CONFIG.name} Hakkında
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-walnut-700 sm:text-lg">
          {SITE_CONFIG.name}, İstanbul&apos;da kabuklu ceviz ve iç ceviz satışı
          ve tedariki alanında faaliyet gösteren bir gıda tedarik girişimidir.
          Minimum 10 kg sipariş yapısıyla hem bireysel toplu alıcılara hem de
          kuruyemişçiler, pastaneler, restoranlar ve gıda işletmelerine teklif
          usulü hizmet sunar.
        </p>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {PRINCIPLES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-cream-200 bg-white p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-xl font-semibold text-walnut-950">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-walnut-700">
                {item.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className="mt-12 rounded-2xl border border-cream-200 bg-cream-100/70 p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold text-walnut-950">
          Nasıl Çalışıyoruz?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-walnut-700 sm:text-base">
          Web sitemizde sabit ürün fiyatı gösterilmez ve çevrimiçi ödeme
          alınmaz. Ürün detay sayfalarındaki teklif formu veya WhatsApp
          bağlantıları üzerinden talep iletildiğinde, mevcut stok ve miktara
          uygun teklif doğrudan paylaşılır.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton
            label="WhatsApp'tan Teklif Al"
            variant="primary"
            size="md"
          />
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-walnut-300 bg-white px-5 py-2.5 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-50"
          >
            <span>İletişim Bilgileri</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
