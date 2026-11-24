import type { Metadata } from "next";
import { ProductInfo, SITE_CONFIG } from "./config";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function getCanonicalUrl(path: string): string {
  const normalizedPath =
    path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.siteUrl}${normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/images/hero-ceviz.webp",
}: PageMetadataInput): Metadata {
  const canonical = getCanonicalUrl(path);
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${SITE_CONFIG.siteUrl}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url: canonical,
      siteName: SITE_CONFIG.name,
      title,
      description,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
    },
  };
}

export function getOrganizationSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
    areaServed: {
      "@type": "City",
      name: SITE_CONFIG.city,
    },
  };

  if (SITE_CONFIG.contact.email) {
    schema.email = SITE_CONFIG.contact.email;
  }
  if (SITE_CONFIG.contact.phoneSchema) {
    schema.telephone = SITE_CONFIG.contact.phoneSchema;
  }
  if (SITE_CONFIG.contact.streetAddress) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.streetAddress,
      addressLocality: SITE_CONFIG.contact.addressLocality,
      addressCountry: SITE_CONFIG.contact.addressCountry,
    };
  }

  return schema;
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
    inLanguage: "tr-TR",
  };
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.href),
    })),
  };
}

/**
 * Sabit fiyat gösterilmeyen, teklif usulü tedarik sayfaları için
 * Google Search Console ile tam uyumlu Service yapılandırılmış verisi üretir.
 */
export function getProductSchema(product: ProductInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${product.name} Satışı ve Tedariki`,
    serviceType: "Ceviz Satışı ve Tedariki",
    description: product.shortDescription,
    image: `${SITE_CONFIG.siteUrl}${product.image}`,
    url: getCanonicalUrl(`/${product.slug}`),
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: SITE_CONFIG.city,
    },
  };
}
