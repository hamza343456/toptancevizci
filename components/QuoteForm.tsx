"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Info, MessageCircle } from "lucide-react";
import {
  ISTANBUL_DISTRICTS,
  PRODUCT_OPTIONS,
  SITE_CONFIG,
} from "@/lib/config";
import { buildFormQuoteMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

interface QuoteFormProps {
  defaultProduct?: string;
  heading?: string;
  subheading?: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  product?: string;
  quantityKg?: string;
  district?: string;
}

export function QuoteForm({
  defaultProduct = "Kabuklu Ceviz",
  heading = "WhatsApp Teklif Formu",
  subheading = "Bilgilerinizi doldurun; teklif mesajınız otomatik olarak hazırlanıp WhatsApp üzerinden açılsın.",
}: QuoteFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(defaultProduct);
  const [quantityKg, setQuantityKg] = useState("10");
  const [district, setDistrict] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = "Lütfen ad ve soyadınızı girin.";
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone.trim() || phoneDigits.length < 10) {
      nextErrors.phone = "Lütfen geçerli bir telefon numarası girin.";
    }

    if (!product) {
      nextErrors.product = "Lütfen ürün seçin.";
    }

    const parsedQty = Number(quantityKg);
    if (!quantityKg.trim() || Number.isNaN(parsedQty)) {
      nextErrors.quantityKg = "Lütfen kilogram cinsinden miktar girin.";
    } else if (parsedQty < SITE_CONFIG.minOrderKg) {
      nextErrors.quantityKg = `Minimum sipariş miktarı ${SITE_CONFIG.minOrderKg} kg'dır. ${SITE_CONFIG.minOrderKg} kg altındaki talepler gönderilemez.`;
    }

    if (!district) {
      nextErrors.district = "Lütfen İstanbul teslimat ilçesini seçin.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedUrl(null);
      return;
    }

    const message = buildFormQuoteMessage({
      fullName,
      phone,
      product,
      quantityKg: Number(quantityKg),
      district,
      note,
    });

    const whatsappUrl = buildWhatsAppUrl(message);
    setSubmittedUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-2xl border border-cream-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-semibold text-walnut-950">
          {heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-walnut-700">
          {subheading}
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Ad Soyad */}
          <div>
            <label
              htmlFor="quote-full-name"
              className="mb-1.5 block text-sm font-medium text-walnut-900"
            >
              Ad Soyad <span className="text-red-700">*</span>
            </label>
            <input
              id="quote-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Örn. Ahmet Yılmaz"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "error-full-name" : undefined}
              className="w-full rounded-lg border border-cream-300 bg-cream-50/40 px-3.5 py-2.5 text-sm text-walnut-950 placeholder:text-walnut-400 focus:border-leaf-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf-600/20"
            />
            {errors.fullName && (
              <p
                id="error-full-name"
                className="mt-1.5 flex items-center gap-1 text-xs text-red-700"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Telefon */}
          <div>
            <label
              htmlFor="quote-phone"
              className="mb-1.5 block text-sm font-medium text-walnut-900"
            >
              Telefon <span className="text-red-700">*</span>
            </label>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05XX XXX XX XX"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "error-phone" : undefined}
              className="w-full rounded-lg border border-cream-300 bg-cream-50/40 px-3.5 py-2.5 text-sm text-walnut-950 placeholder:text-walnut-400 focus:border-leaf-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf-600/20"
            />
            {errors.phone && (
              <p
                id="error-phone"
                className="mt-1.5 flex items-center gap-1 text-xs text-red-700"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Ürün Seçimi */}
          <div>
            <label
              htmlFor="quote-product"
              className="mb-1.5 block text-sm font-medium text-walnut-900"
            >
              Ürün Seçimi <span className="text-red-700">*</span>
            </label>
            <select
              id="quote-product"
              name="product"
              required
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              aria-invalid={Boolean(errors.product)}
              className="w-full rounded-lg border border-cream-300 bg-cream-50/40 px-3.5 py-2.5 text-sm text-walnut-950 focus:border-leaf-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf-600/20"
            >
              {PRODUCT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.product && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-700">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.product}</span>
              </p>
            )}
          </div>

          {/* Miktar (kg) */}
          <div>
            <label
              htmlFor="quote-quantity"
              className="mb-1.5 block text-sm font-medium text-walnut-900"
            >
              Miktar (kg) <span className="text-red-700">*</span>
            </label>
            <input
              id="quote-quantity"
              name="quantityKg"
              type="number"
              min={SITE_CONFIG.minOrderKg}
              step="1"
              required
              value={quantityKg}
              onChange={(e) => setQuantityKg(e.target.value)}
              aria-invalid={Boolean(errors.quantityKg)}
              aria-describedby="quantity-hint"
              className="w-full rounded-lg border border-cream-300 bg-cream-50/40 px-3.5 py-2.5 text-sm text-walnut-950 focus:border-leaf-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf-600/20"
            />
            <p id="quantity-hint" className="mt-1 text-xs text-walnut-600">
              Minimum sipariş miktarı {SITE_CONFIG.minOrderKg} kg&apos;dır.
            </p>
            {errors.quantityKg && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-700">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.quantityKg}</span>
              </p>
            )}
          </div>
        </div>

        {/* İstanbul Teslimat İlçesi */}
        <div>
          <label
            htmlFor="quote-district"
            className="mb-1.5 block text-sm font-medium text-walnut-900"
          >
            İstanbul Teslimat İlçesi <span className="text-red-700">*</span>
          </label>
          <select
            id="quote-district"
            name="district"
            required
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            aria-invalid={Boolean(errors.district)}
            aria-describedby={errors.district ? "error-district" : undefined}
            className="w-full rounded-lg border border-cream-300 bg-cream-50/40 px-3.5 py-2.5 text-sm text-walnut-950 focus:border-leaf-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf-600/20"
          >
            <option value="">İlçe seçiniz</option>
            {ISTANBUL_DISTRICTS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.district && (
            <p
              id="error-district"
              className="mt-1.5 flex items-center gap-1 text-xs text-red-700"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.district}</span>
            </p>
          )}
        </div>

        {/* Açıklama */}
        <div>
          <label
            htmlFor="quote-note"
            className="mb-1.5 block text-sm font-medium text-walnut-900"
          >
            Açıklama (Opsiyonel)
          </label>
          <textarea
            id="quote-note"
            name="note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Kullanım alanı, ambalaj tercihi veya teslimat zamanı gibi notlarınızı ekleyebilirsiniz."
            className="w-full rounded-lg border border-cream-300 bg-cream-50/40 px-3.5 py-2.5 text-sm text-walnut-950 placeholder:text-walnut-400 focus:border-leaf-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf-600/20"
          />
        </div>

        {/* Veri Paylaşımı Bilgilendirmesi */}
        <div className="flex items-start gap-2.5 rounded-lg border border-cream-200 bg-cream-50 p-3.5 text-xs leading-relaxed text-walnut-700">
          <Info
            className="mt-0.5 h-4 w-4 shrink-0 text-leaf-700"
            aria-hidden="true"
          />
          <p>
            Bu formda girdiğiniz bilgiler hiçbir sunucuya veya veritabanına
            kaydedilmez. Gönder butonuna bastığınızda bilgileriniz yalnızca
            teklif talebinizi iletmek üzere <strong>WhatsApp</strong> üzerinden
            paylaşılır.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-leaf-700 px-5 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-leaf-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-700"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span>WhatsApp ile Teklif Talebi Gönder</span>
        </button>

        {submittedUrl && (
          <div
            role="status"
            className="flex items-start gap-2.5 rounded-lg border border-leaf-200 bg-leaf-50 p-4 text-sm text-leaf-900"
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-leaf-700"
              aria-hidden="true"
            />
            <div>
              <p className="font-medium">
                Teklif mesajınız WhatsApp için hazırlandı.
              </p>
              <p className="mt-1 text-xs text-leaf-800">
                Yeni sekme otomatik açılmadıysa{" "}
                <a
                  href={submittedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-leaf-950"
                >
                  buraya tıklayarak WhatsApp&apos;ı açabilirsiniz
                </a>
                .
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
