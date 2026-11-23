export const SITE_CONFIG = {
  name: "ToptanCevizci",
  legalName: "ToptanCevizci",
  region: "İstanbul, Türkiye",
  city: "İstanbul",
  country: "TR",
  locale: "tr_TR",
  language: "tr",
  minOrderKg: 10,
  anadoluDeliveryMinKg: 50,
  /**
   * Domain kesinleştiğinde NEXT_PUBLIC_SITE_URL ortam değişkenini güncelleyin.
   * Canonical URL, sitemap.xml, robots.txt ve Open Graph bu değeri kullanır.
   */
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://toptancevizci.example.com"
  ).replace(/\/+$/, ""),
  /**
   * WhatsApp numarası uluslararası formatta, "+" ve boşluk olmadan girilmelidir.
   */
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905510873512",
  whatsappDisplay: "+90 551 087 35 12",
  /**
   * İşletme iletişim ve teslimat bilgileri.
   * Doğrulanmamış alanlar null bırakılmıştır.
   */
  contact: {
    streetAddress: null as string | null,
    addressLocality: "Sancaktepe, İstanbul",
    addressCountry: "TR",
    phoneDisplay: "0537 637 16 40",
    phoneHref: "tel:+905376371640",
    phoneSchema: "+905376371640",
    email: null as string | null,
    workingHours: null as string | null,
    pickupRegion: "Sancaktepe, İstanbul",
    deliverySummary:
      "50 kg ve üzeri alımlarda İstanbul Anadolu Yakası'nda adrese teslim; dileyen müşteriler için Sancaktepe'de yerinde görerek teslim alma imkânı.",
    mapReferenceName: "Samandıra Merkez Metro İstasyonu (Sancaktepe, İstanbul)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Samand%C4%B1ra+Merkez+Metro+%C4%B0stasyonu,+Sancaktepe,+%C4%B0stanbul&ll=40.98361,29.23139&hl=tr&z=15&output=embed",
    mapExternalUrl:
      "https://www.google.com/maps/search/?api=1&query=40.98361,29.23139",
    mapDisclaimer:
      "Haritada referans nokta olarak Sancaktepe Samandıra Merkez Metro İstasyonu gösterilmektedir. Ürünleri yerinde görüp teslim almak ve tam konum bilgisini öğrenmek için lütfen gelmeden önce bizimle iletişime geçin.",
  },
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kabuklu Ceviz", href: "/kabuklu-ceviz" },
  { label: "İç Ceviz", href: "/ic-ceviz" },
  { label: "Toptan Ceviz", href: "/toptan-ceviz" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const FOOTER_EXTRA_LINKS: NavLink[] = [
  { label: "Ceviz Fiyatları", href: "/ceviz-fiyatlari" },
  { label: "Blog", href: "/blog" },
];

export interface ProductSpecItem {
  label: string;
  value: string;
  isPlaceholder?: boolean;
}

export interface ProductInfo {
  slug: "kabuklu-ceviz" | "ic-ceviz";
  name: string;
  shortDescription: string;
  heroSummary: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  minOrderNote: string;
  useCases: string[];
  specs: ProductSpecItem[];
}

export const PRODUCTS: Record<"kabuklu-ceviz" | "ic-ceviz", ProductInfo> = {
  "kabuklu-ceviz": {
    slug: "kabuklu-ceviz",
    name: "Kabuklu Ceviz",
    shortDescription:
      "Bireysel toplu alımlar, kuruyemişçiler ve gıda işletmeleri için 10 kg ve üzeri miktarlarda kabuklu ceviz tedariki.",
    heroSummary:
      "Kabuklu ceviz siparişlerinizde güncel stok durumuna ve talep ettiğiniz miktara göre WhatsApp üzerinden özel teklif hazırlıyoruz.",
    image: "/images/kabuklu-ceviz.webp",
    imageAlt:
      "Doğal çuval içinde kabuklu cevizler - ToptanCevizci İstanbul ceviz tedariki",
    imageWidth: 1200,
    imageHeight: 896,
    minOrderNote: "Minimum sipariş: 10 kg ve üzeri",
    useCases: [
      "Kuruyemiş mağazaları ve perakende satış noktaları",
      "Doğrudan toplu alım yapan bireysel müşteriler",
      "Kendi bünyesinde işleme yapan gıda işletmeleri",
      "Düzenli stok planlaması yapan ticari alıcılar",
    ],
    specs: [
      { label: "Minimum Sipariş Miktarı", value: "10 kg" },
      { label: "Fiyatlandırma", value: "Miktara ve güncel stoğa göre özel teklif" },
      {
        label: "Teslimat ve Yerinde Teslim",
        value:
          "50 kg ve üzeri alımlarda İstanbul Anadolu Yakası adrese teslim; Sancaktepe'de yerinde görüp teslim alma seçeneği (tam konum için iletişime geçin)",
      },
      {
        label: "Menşei / Çeşit",
        value: "Güncel parti bilgisi teklif aşamasında paylaşılır (sonradan güncellenebilir)",
        isPlaceholder: true,
      },
      {
        label: "Kalibre / Boyut",
        value: "Mevcut stok kalibresi teklif aşamasında teyit edilir (sonradan güncellenebilir)",
        isPlaceholder: true,
      },
      {
        label: "Hasat Dönemi",
        value: "Stoktaki partinin hasat bilgisi iletilir (sonradan güncellenebilir)",
        isPlaceholder: true,
      },
      {
        label: "Ambalaj Seçenekleri",
        value: "Çuval / koli seçenekleri sipariş miktarına göre belirlenir (sonradan güncellenebilir)",
        isPlaceholder: true,
      },
    ],
  },
  "ic-ceviz": {
    slug: "ic-ceviz",
    name: "İç Ceviz",
    shortDescription:
      "Pastaneler, restoranlar, tatlı üreticileri, kuruyemişçiler ve bireysel toplu alıcılar için 10 kg ve üzeri iç ceviz tedariki.",
    heroSummary:
      "Mutfak, imalathane ve satış ihtiyaçlarınıza uygun iç ceviz siparişleri için miktar ve teslimat ilçesine göre WhatsApp üzerinden hızlı teklif alın.",
    image: "/images/ic-ceviz.webp",
    imageAlt:
      "Seramik kasede kelebek formunda iç ceviz - ToptanCevizci İstanbul iç ceviz tedariki",
    imageWidth: 1200,
    imageHeight: 896,
    minOrderNote: "Minimum sipariş: 10 kg ve üzeri",
    useCases: [
      "Pastaneler, baklava ve tatlı imalathaneleri",
      "Restoran, kafe ve catering mutfakları",
      "Kuruyemişçiler ve gıda satış noktaları",
      "10 kg ve üzeri alım yapan bireysel müşteriler",
    ],
    specs: [
      { label: "Minimum Sipariş Miktarı", value: "10 kg" },
      { label: "Fiyatlandırma", value: "Miktara ve ürün sınıfına göre özel teklif" },
      {
        label: "Teslimat ve Yerinde Teslim",
        value:
          "50 kg ve üzeri alımlarda İstanbul Anadolu Yakası adrese teslim; Sancaktepe'de yerinde görüp teslim alma seçeneği (tam konum için iletişime geçin)",
      },
      {
        label: "Ürün Sınıfı / Form",
        value: "Kelebek, yarım veya kırık stok seçenekleri teklif aşamasında paylaşılır (sonradan güncellenebilir)",
        isPlaceholder: true,
      },
      {
        label: "Menşei / Çeşit",
        value: "Güncel parti bilgisi teklif aşamasında paylaşılır (sonradan güncellenebilir)",
        isPlaceholder: true,
      },
      {
        label: "Hasat Dönemi",
        value: "Stoktaki partinin hasat bilgisi iletilir (sonradan güncellenebilir)",
        isPlaceholder: true,
      },
      {
        label: "Ambalaj Seçenekleri",
        value: "Vakumlu veya kolili ambalaj bilgisi teklifte teyit edilir (sonradan güncellenebilir)",
        isPlaceholder: true,
      },
    ],
  },
};

export const PRODUCT_OPTIONS = [
  { value: "Kabuklu Ceviz", label: "Kabuklu Ceviz" },
  { value: "İç Ceviz", label: "İç Ceviz" },
  { value: "Kabuklu ve İç Ceviz (Karma)", label: "Kabuklu ve İç Ceviz (Karma)" },
] as const;

export const ISTANBUL_DISTRICTS: string[] = [
  "Adalar",
  "Arnavutköy",
  "Ataşehir",
  "Avcılar",
  "Bağcılar",
  "Bahçelievler",
  "Bakırköy",
  "Başakşehir",
  "Bayrampaşa",
  "Beşiktaş",
  "Beykoz",
  "Beylikdüzü",
  "Beyoğlu",
  "Büyükçekmece",
  "Çatalca",
  "Çekmeköy",
  "Esenler",
  "Esenyurt",
  "Eyüpsultan",
  "Fatih",
  "Gaziosmanpaşa",
  "Güngören",
  "Kadıköy",
  "Kağıthane",
  "Kartal",
  "Küçükçekmece",
  "Maltepe",
  "Pendik",
  "Sancaktepe",
  "Sarıyer",
  "Silivri",
  "Sultanbeyli",
  "Sultangazi",
  "Şile",
  "Şişli",
  "Tuzla",
  "Ümraniye",
  "Üsküdar",
  "Zeytinburnu",
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    question: "Minimum sipariş miktarı nedir?",
    answer:
      "Hem kabuklu ceviz hem de iç ceviz siparişlerinde minimum sipariş miktarı 10 kg'dır. Bireysel müşteriler ve işletmeler 10 kg ve üzeri tüm miktarlar için teklif talep edebilir.",
  },
  {
    question: "Adrese teslimat ve yerinde teslim alma nasıl yapılıyor?",
    answer:
      "50 kg ve üzeri alımlarda İstanbul Anadolu Yakası'nda adrese teslim imkânı sunuyoruz. Dileyen müşterilerimiz ise Sancaktepe'ye gelerek ürünleri yerinde görüp teslim alabilir. Tam konum bilgisi için gelmeden önce telefon veya WhatsApp üzerinden bizimle iletişime geçmeniz yeterlidir.",
  },
  {
    question: "Web sitesinde neden sabit ürün fiyatı yer almıyor?",
    answer:
      "Ceviz fiyatları; ürün türüne (kabuklu veya iç ceviz), talep edilen kilogram miktarına, güncel sezon ve piyasa koşullarına göre değişiklik gösterebilir. Bu nedenle her talep için WhatsApp üzerinden güncel ve müşteriye özel teklif sunuyoruz.",
  },
  {
    question: "Sipariş ve bilgi için nasıl ulaşabilirim?",
    answer:
      "WhatsApp teklif hattımız (+90 551 087 35 12) üzerinden veya ürün sayfalarındaki teklif formunu doldurarak mesaj gönderebilir, doğrudan görüşmek için 0537 637 16 40 numarasını arayabilirsiniz.",
  },
  {
    question: "Web sitesi üzerinden çevrimiçi ödeme alınıyor mu?",
    answer:
      "Hayır. Web sitesi üzerinden kart veya çevrimiçi ödeme alınmaz. Teklif, sipariş onayı ve ödeme detayları iletişim sürecinde karşılıklı olarak netleştirilir.",
  },
  {
    question: "Bireysel müşteriler de sipariş verebilir mi?",
    answer:
      "Evet. Kuruyemişçiler, pastaneler, restoranlar ve gıda işletmelerinin yanı sıra 10 kg ve üzeri alım yapmak isteyen bireysel müşteriler de teklif alabilir ve dilerlerse Sancaktepe'den yerinde görüp teslim alabilir.",
  },
];
