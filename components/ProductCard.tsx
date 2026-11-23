import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductInfo } from "@/lib/config";
import { WhatsAppButton } from "./WhatsAppButton";

interface ProductCardProps {
  product: ProductInfo;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white transition-colors hover:border-walnut-300">
      <Link
        href={`/${product.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-cream-100"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-3 inline-flex w-fit items-center rounded-md bg-cream-100 px-2.5 py-1 text-xs font-medium text-walnut-700">
          {product.minOrderNote}
        </div>

        <h3 className="font-serif text-2xl font-semibold text-walnut-950">
          <Link
            href={`/${product.slug}`}
            className="transition-colors hover:text-leaf-700"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-walnut-700 sm:text-base">
          {product.shortDescription}
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-cream-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-walnut-900 transition-colors hover:text-leaf-700"
          >
            <span>Ürün Detayını İncele</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <WhatsAppButton
            label="Teklif Al"
            productName={product.name}
            variant="outline"
            size="sm"
          />
        </div>
      </div>
    </article>
  );
}
