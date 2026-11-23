export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  summary: string;
  sections: {
    heading: string;
    body: string;
  }[];
  relatedHref: string;
  relatedLabel: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "kabuklu-ceviz-ve-ic-ceviz-secimi",
    title: "Kabuklu Ceviz mi, İç Ceviz mi? İhtiyaca Göre Doğru Ürün Seçimi",
    category: "Satın Alma Rehberi",
    readingTime: "3 dk okuma",
    summary:
      "Bireysel toplu alımlarda ve ticari mutfaklarda kabuklu ceviz ile iç ceviz arasında seçim yaparken kullanım amacı, depolama alanı ve hazırlık süresi belirleyicidir.",
    sections: [
      {
        heading: "Kabuklu Ceviz Hangi Durumlarda Tercih Edilir?",
        body: "Doğal kabuğu ürünü dış etkenlere karşı koruduğu için kabuklu ceviz, uzun süreli depolama planlayan kuruyemişçiler ve kendi ihtiyacını mevsimlik olarak karşılamak isteyen bireysel alıcılar tarafından sıkça tercih edilir.",
      },
      {
        heading: "İç Ceviz Hangi İşletmeler İçin Uygundur?",
        body: "Pastaneler, tatlı imalathaneleri, restoranlar ve catering mutfakları için hazırlık süresini azaltan iç ceviz, doğrudan üretime katılabilmesi nedeniyle pratik bir seçenektir.",
      },
    ],
    relatedHref: "/kabuklu-ceviz",
    relatedLabel: "Kabuklu Ceviz Sayfasını İncele",
  },
  {
    slug: "toplu-ceviz-aliminda-saklama-kosullari",
    title: "10 kg ve Üzeri Ceviz Alımlarında Doğru Saklama Koşulları",
    category: "Depolama & Koruma",
    readingTime: "3 dk okuma",
    summary:
      "Toplu olarak alınan kabuklu ve iç cevizlerin tazeliğini koruması için nem, sıcaklık ve ışık kontrolüne dikkat edilmesi gerekir.",
    sections: [
      {
        heading: "Serin, Kuru ve Işık Almayan Ortam",
        body: "Ceviz, yüksek yağ oranı nedeniyle sıcak ve nemli ortamlarda daha hızlı bayatlayabilir. Ürünlerin doğrudan güneş ışığından uzak, serin ve havadar bir depoda muhafaza edilmesi önerilir.",
      },
      {
        heading: "İç Cevizde Hava Temasını Azaltmak",
        body: "Kabuğu çıkarılmış iç ceviz, ortam kokularını ve nemi daha kolay çekebilir. Açılan ambalajların ağızlarının sıkıca kapatılması veya gıdaya uygun kaplarda saklanması ürün kalitesini korumaya yardımcı olur.",
      },
    ],
    relatedHref: "/ic-ceviz",
    relatedLabel: "İç Ceviz Sayfasını İncele",
  },
  {
    slug: "toptan-ceviz-teklifi-alirken-bilinmesi-gerekenler",
    title: "Toptan Ceviz Teklifi Alırken Hangi Bilgileri Paylaşmalısınız?",
    category: "Tedarik Süreci",
    readingTime: "2 dk okuma",
    summary:
      "Teklif sürecinin hızlı ve net ilerlemesi için ürün türü, kilogram miktarı ve teslimat ilçesinin baştan paylaşılması yeterlidir.",
    sections: [
      {
        heading: "Miktar ve Kullanım Amacının Önemi",
        body: "10 kg üzerindeki siparişlerde talep edilen kilogram aralığı ve ürünün hangi alanda kullanılacağı (perakende satış, tatlı üretimi veya mutfak kullanımı gibi) doğru ürün seçeneğinin önerilmesini kolaylaştırır.",
      },
      {
        heading: "İstanbul İçi Teslimat Planlaması",
        body: "İstanbul'daki teslimat ilçesinin teklif talebinde belirtilmesi, sevkiyat ve teslimat planlamasının baştan netleşmesini sağlar.",
      },
    ],
    relatedHref: "/toptan-ceviz",
    relatedLabel: "Toptan Ceviz Tedariki",
  },
];
