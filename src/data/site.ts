export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string; // 6281217366600 format
  email: string;
  address: {
    city: string;
    region: string;
    province: string;
    country: string;
    fullAddress: string;
  };
  operationalHours: string;
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    tiktok?: string;
  };
  navLinks: {
    name: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Batu Outbound Adventure",
  tagline: "Penyedia Layanan Outbound, Team Building & Gathering di Batu Malang",
  description: "Pilihan terbaik kegiatan outbound, team building, gathering perusahaan, outing kantor, dan character building sekolah di kawasan sejuk Batu dan Malang, Jawa Timur.",
  url: "https://outboundbatumalang.com", // Canonical production domain
  phone: "0812-1736-6600",
  phoneFormatted: "+62 812-1736-6600",
  whatsappNumber: "6281217366600",
  email: "info@outboundbatumalang.com",
  address: {
    city: "Kota Batu",
    region: "Malang Raya",
    province: "Jawa Timur",
    country: "Indonesia",
    fullAddress: "Kawasan Wisata Kota Batu & Malang, Jawa Timur, Indonesia"
  },
  operationalHours: "Senin - Minggu: 07.30 - 21.00 WIB (Layanan Konsultasi WhatsApp 24 Jam)",
  socials: {
    instagram: "https://instagram.com/outboundbatu_malang",
    facebook: "https://facebook.com/outboundbatumalang",
    youtube: "https://youtube.com/@outboundbatumalang",
    tiktok: "https://tiktok.com/@outboundbatu"
  },
  navLinks: [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami/" },
    { name: "Paket", href: "/paket/" },
    { name: "Layanan", href: "/layanan/" },
    { name: "Galeri", href: "/galeri/" },
    { name: "Blog", href: "/blog/" }
  ]
};

