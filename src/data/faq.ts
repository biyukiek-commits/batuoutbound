export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const homepageFaqs: FAQItem[] = [
  {
    id: "faq-lokasi",
    question: "Di mana saja lokasi kegiatan outbound di kawasan Batu dan Malang?",
    answer: "Lokasi kegiatan dapat disesuaikan dengan preferensi Anda. Pilihan venue populer kami meliputi Kawasan Hutan Pinus Coban Rondo, Kusuma Agrowisata Outdoor Ground, Songgoriti Park, Coban Rais, Coban Talun, area wisata Kaliwatu, serta berbagai resort, hotel, atau villa rekanan di Kota Batu dan Malang Raya."
  },
  {
    id: "faq-peserta",
    question: "Berapa minimal dan maksimal jumlah peserta yang dapat dilayani?",
    answer: "Untuk paket reguler, kami merekomendasikan minimal 20 hingga 30 peserta agar dinamika kelompok berjalan optimal. Namun, kami juga sering memfasilitasi rombongan skala besar mulai dari 50, 100, hingga lebih dari 500 peserta dengan pembagian fasilitator proporsional (rasio 1 fasilitator mendampingi 10-15 peserta)."
  },
  {
    id: "faq-kustomisasi",
    question: "Apakah rundown kegiatan, tema games, dan fasilitas bisa dikustomisasi?",
    answer: "Sangat bisa! Setiap perusahaan, sekolah, atau komunitas memiliki tujuan unik (seperti penguatan leadership, peningkatan sales target, atau rekreasi santai). Tim kami akan menyusun proposal rancangan program, jenis games, durasi waktu, serta opsi konsumsi (snack/prasmanan) sesuai kebutuhan spesifik dan anggaran Anda."
  },
  {
    id: "faq-fasilitas",
    question: "Fasilitas apa saja yang umumnya sudah termasuk dalam paket outbound?",
    answer: "Standar paket outbound kami telah mencakup: Master Game / Fasilitator berlisensi, kru lapangan profesional, peralatan lengkap permainan, sound system portable lapangan, banner selamat datang/kegiatan, air mineral selama acara, kotak P3K standar, dan dokumentasi foto kegiatan (via Google Drive). Paket tambahan seperti makan siang prasmanan, coffee break, kaos seragam, rafting, atau penginapan dapat dimasukkan sesuai kesepakatan."
  },
  {
    id: "faq-reservasi",
    question: "Bagaimana alur pemesanan jadwal dan sistem pembayarannya?",
    answer: "Caranya sangat mudah: 1) Hubungi kami via WhatsApp 081217366600 untuk konsultasi tanggal, perkiraan peserta, dan konsep; 2) Kami kirimkan penawaran proposal & rundown detail; 3) Setelah disetujui, Anda cukup melakukan Down Payment (DP) untuk mengunci tanggal dan lokasi; 4) Pelunasan dilakukan menjelang hari H atau saat pelaksanaan sesuai MoU."
  },
  {
    id: "faq-cuaca",
    question: "Bagaimana jika saat kegiatan berlangsung cuaca hujan di Kota Batu?",
    answer: "Keamanan dan kenyamanan peserta adalah prioritas utama. Kawasan Batu yang sejuk terkadang mengalami hujan lokal. Kami selalu menyiapkan skenario rencana cadangan (Plan B), seperti penyediaan jas hujan darurat, perpindahan ke area aula/semi-indoor teduh di venue terpilih, atau modifikasi jenis permainan yang tetap dinamis dan energik tanpa mengurangi esensi kegiatan."
  }
];

