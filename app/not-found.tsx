import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-leaf-700">
        404 • Sayfa Bulunamadı
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-walnut-950 sm:text-4xl">
        Aradığınız sayfa mevcut değil
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-walnut-700">
        Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Ana sayfaya dönerek
        kabuklu ceviz ve iç ceviz tedarik sayfalarımıza ulaşabilirsiniz.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-walnut-900 px-5 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-walnut-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Ana Sayfaya Dön</span>
        </Link>
        <WhatsAppButton
          label="WhatsApp'tan Teklif Al"
          variant="outline"
          size="md"
        />
      </div>
    </section>
  );
}
