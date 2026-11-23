import { SITE_CONFIG } from "./config";

export interface QuoteMessageInput {
  fullName: string;
  phone: string;
  product: string;
  quantityKg: number;
  district: string;
  note?: string;
}

/**
 * WhatsApp numarasını uluslararası formatta (+ ve boşluk olmadan) temizler.
 * Yer tutucu (WHATSAPP_NUMBER) kullanılıyorsa olduğu gibi korur.
 */
export function getNormalizedWhatsAppNumber(): string {
  const raw = SITE_CONFIG.whatsappNumber.trim();
  if (!raw || raw === "WHATSAPP_NUMBER") {
    return "WHATSAPP_NUMBER";
  }
  const digitsOnly = raw.replace(/\D/g, "");
  return digitsOnly || "WHATSAPP_NUMBER";
}

/**
 * https://wa.me/TELEFONNUMARASI?text=... biçiminde,
 * Türkçe karakterleri doğru kodlanmış WhatsApp bağlantısı oluşturur.
 */
export function buildWhatsAppUrl(message: string): string {
  const phone = getNormalizedWhatsAppNumber();
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encodedText}`;
}

export function buildGeneralQuoteMessage(productName?: string): string {
  if (productName) {
    return `Merhaba ToptanCevizci, İstanbul için 10 kg ve üzeri ${productName} siparişi hakkında güncel teklif almak istiyorum.`;
  }
  return "Merhaba ToptanCevizci, İstanbul için 10 kg ve üzeri ceviz siparişi hakkında teklif almak istiyorum.";
}

export function buildFormQuoteMessage(input: QuoteMessageInput): string {
  const lines = [
    "Merhaba ToptanCevizci, web siteniz üzerinden ceviz teklif talebi gönderiyorum:",
    "",
    `• Ad Soyad: ${input.fullName.trim()}`,
    `• Telefon: ${input.phone.trim()}`,
    `• Ürün: ${input.product}`,
    `• Miktar: ${input.quantityKg} kg`,
    `• İstanbul Teslimat İlçesi: ${input.district}`,
  ];

  const cleanNote = input.note?.trim();
  if (cleanNote) {
    lines.push(`• Açıklama: ${cleanNote}`);
  }

  lines.push("", "Güncel fiyat ve tedarik bilgisi hakkında dönüş rica ederim.");

  return lines.join("\n");
}
