import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BLOG_ARTICLES } from "@/lib/blog-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog | Ceviz Seçimi, Saklama ve Toptan Alım Rehberi",
  description:
    "Kabuklu ceviz ve iç ceviz seçimi, toplu alımlarda doğru saklama koşulları ve İstanbul'da toptan ceviz teklif süreci hakkında pratik rehberler.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      <section className="max-w-3xl space-y-4">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-leaf-700">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Bilgi &amp; Rehber</span>
        </p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-walnut-950 sm:text-4xl lg:text-5xl">
          Ceviz Tedariki ve Kullanımı Hakkında Rehberler
        </h1>
        <p className="text-base leading-relaxed text-walnut-700 sm:text-lg">
          10 kg ve üzeri ceviz alımlarında ürün seçimi, muhafaza koşulları ve
          teklif süreci hakkında sade ve pratik bilgiler.
        </p>
      </section>

      <section className="mt-12 space-y-8">
        {BLOG_ARTICLES.map((article) => (
          <article
            key={article.slug}
            id={article.slug}
            className="rounded-2xl border border-cream-200 bg-white p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-walnut-600">
              <span className="rounded-md bg-leaf-50 px-2.5 py-1 text-leaf-800">
                {article.category}
              </span>
              <span>{article.readingTime}</span>
            </div>

            <h2 className="mt-3 font-serif text-2xl font-semibold text-walnut-950">
              {article.title}
            </h2>

            <p className="mt-3 text-base leading-relaxed text-walnut-700">
              {article.summary}
            </p>

            <div className="mt-6 grid gap-5 border-t border-cream-200 pt-6 sm:grid-cols-2">
              {article.sections.map((section) => (
                <div key={section.heading} className="space-y-2">
                  <h3 className="font-serif text-lg font-semibold text-walnut-900">
                    {section.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-walnut-700">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-cream-200 pt-5">
              <Link
                href={article.relatedHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-walnut-900 transition-colors hover:text-leaf-700"
              >
                <span>{article.relatedLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <WhatsAppButton
                label="WhatsApp'tan Teklif Al"
                variant="outline"
                size="sm"
              />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
