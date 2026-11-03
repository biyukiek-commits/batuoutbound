export interface ArticleSection {
  heading: string;
  content: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  publishDateFormatted: string;
  readTime: string;
  author: string;
  image: string;
  altText: string;
  tags: string[];
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: "art-1",
    slug: "panduan-memilih-paket-outbound-batu-malang",
    title: "Panduan Lengkap Memilih Paket Outbound di Batu Malang Sesuai Kebutuhan Tim",
    excerpt: "Ketahui faktor penting mulai dari penentuan target kegiatan, pemilihan lokasi alam berhawa sejuk, rasio fasilitator, hingga estimasi anggaran sebelum memutuskan reservasi.",
    category: "Panduan",
    publishDate: "2026-10-28",
    publishDateFormatted: "28 Oktober 2026",
    readTime: "5 menit baca",
    author: "Tim Editorial Batu Outbound",
    image: "/images/blog/panduan-outbound.webp",
    altText: "Panduan memilih paket outbound di Batu Malang untuk rombongan kantor dan komunitas",
    tags: ["Outbound Batu", "Tips Gathering", "Team Building"],
    introduction: "Merencanakan kegiatan outbound atau gathering kantor di kawasan Kota Batu dan Malang memerlukan kecermatan agar anggaran yang dikeluarkan berbanding lurus dengan dampak kekompakan tim yang diharapkan. Udara sejuk pegunungan Batu memang menjadi magnet utama, namun pemilihan paket yang tepat bergantung pada pemahaman kebutuhan organisasi Anda.",
    sections: [
      {
        heading: "1. Tentukan Sasaran Utama Kegiatan Sejak Awal",
        content: "Sebelum melihat rincian harga, tentukan apakah agenda Anda berfokus pada refreshing santai (Fun Gathering) atau pembedahan dinamika kerja (Team Building & Synergy Training). Jika targetnya adalah mempererat silaturahmi tanpa tekanan kompetisi, pilihlah fun games santai. Namun jika perusahaan sedang menghadapi tantangan target baru atau perubahan struktur manajemen, modul team building terstruktur adalah pilihan terbaik."
      },
      {
        heading: "2. Sesuaikan Karakteristik Peserta dengan Lokasi Venue",
        content: "Kota Batu menawarkan beragam pilihan lokasi dengan karakteristik berbeda. Venue seperti Hutan Pinus Coban Rondo menyajikan keteduhan alami di ketinggian, cocok untuk corporate outbound yang membutuhkan privasi dan konsentrasi. Sementara area Selecta atau Songgoriti lebih ramah untuk gathering yang melibatkan anak-anak dan lansia karena kontur tanahnya yang relatif datar dan fasilitas umumnya yang lengkap."
      },
      {
        heading: "3. Perhatikan Rasio Pendampingan Fasilitator dan Keamanan",
        content: "Standar keselamatan (safety) merupakan hal mutlak dalam kegiatan luar ruang. Pastikan penyelenggara menyediakan rasio fasilitator yang memadai, idealnya 1 fasilitator mendampingi 10 hingga 15 peserta. Rasio ini menjamin setiap peserta terpantau dengan baik, dinamika kelompok berjalan aktif, dan prosedur pertolongan pertama (P3K) selalu siaga."
      },
      {
        heading: "4. Transparansi Fasilitas dan Rencana Kontinjensi (Plan B)",
        content: "Tanyakan secara rinci fasilitas apa saja yang sudah termasuk (peralatan, sound system, air mineral, konsumsi, banner, dan dokumentasi) serta apa yang dikecualikan. Selain itu, mengingat iklim pegunungan Batu yang sejuk dan terkadang terjadi hujan lokal, pastikan provider outbound memiliki skenario cadangan seperti aula semi-indoor agar acara tetap berlangsung lancar."
      }
    ],
    conclusion: "Dengan merumuskan tujuan, memilih venue yang tepat, dan bermitra dengan penyelenggara berlisensi, kegiatan outbound Anda di Batu Malang akan menjadi investasi berharga bagi soliditas tim."
  },
  {
    id: "art-2",
    slug: "manfaat-team-building-untuk-produktivitas-kerja",
    title: "5 Manfaat Nyata Outbound Team Building untuk Produktivitas dan Soliditas Karyawan",
    excerpt: "Bagaimana simulasi experiential learning di alam bebas mampu meruntuhkan sekat ego antar divisi, melatih komunikasi asertif, dan menyalakan kembali semangat kerja tim.",
    category: "Team Building",
    publishDate: "2026-10-20",
    publishDateFormatted: "20 Oktober 2026",
    readTime: "4 menit baca",
    author: "Tim Fasilitator",
    image: "/images/blog/manfaat-team-building.webp",
    altText: "Peserta saling bergandengan tangan dalam simulasi team building yang mempererat kerjasama",
    tags: ["Produktivitas", "Leadership", "Budaya Kerja"],
    introduction: "Rutinitas kerja berulang dan tekanan target sering kali memicu kejenuhan serta memunculkan sekat (silo mentality) antar divisi dalam sebuah organisasi. Outbound team building berbasis experiential learning bukan sekadar rekreasi bersama, melainkan metode teruji untuk merekatkan kembali sinergi organisasi.",
    sections: [
      {
        heading: "1. Meruntuhkan Sekat dan Batasan Struktural",
        content: "Di lapangan terbuka, status jabatan dan hierarki formal melebur menjadi peran fungsional kelompok. Staf junior dan pimpinan senior bermain bersama dalam posisi setara. Hal ini menciptakan suasana inklusif yang meluruhkan rasa canggung dan membangun kedekatan emosional yang tulus."
      },
      {
        heading: "2. Melatih Komunikasi Dua Arah yang Asertif",
        content: "Banyak simulasi outbound yang menuntut peserta menyampaikan instruksi secara presisi di bawah keterbatasan waktu atau keterbatasan indera (seperti permainan mata tertutup). Latihan ini membiasakan karyawan untuk mendengarkan secara aktif dan berbicara dengan jelas tanpa asumsi sepihak."
      },
      {
        heading: "3. Mengasah Kemampuan Problem Solving Kolektif",
        content: "Tantangan fisik dan logika di alam terbuka memaksa tim untuk berpikir kreatif di luar kebiasaan (out of the box). Anggota tim belajar bagaimana menghargai ide orang lain, memilih solusi terbaik, dan mengeksekusi strategi dengan disiplin tinggi."
      },
      {
        heading: "4. Menumbuhkan Rasa Saling Percaya (Trust Building)",
        content: "Kepercayaan adalah fondasi utama kecepatan kerja. Melalui tantangan saling menjaga keselamatan rekan, karyawan merasakan langsung bahwa keberhasilan individu sangat bertumpu pada integritas dan komitmen rekan satu timnya."
      },
      {
        heading: "5. Mengisi Ulang Energi dan Antusiasme Baru",
        content: "Berada di alam terbuka Kota Batu dengan pepohonan pinus dan udara bersih terbukti menurunkan tingkat hormon stres (kortisol). Karyawan pulang dengan pikiran yang segar dan antusiasme baru untuk menghadapi tantangan perusahaan."
      }
    ],
    conclusion: "Mengadakan team building tahunan adalah langkah strategis manajemen untuk merawat aset paling berharga perusahaan: sumber daya manusia yang solid, loyal, dan produktif."
  },
  {
    id: "art-3",
    slug: "perbedaan-outbound-team-building-dan-fun-games",
    title: "Mengenal Perbedaan Outbound Training, Team Building, dan Fun Games Gathering",
    excerpt: "Jangan sampai salah pilih! Pahami perbedaan sasaran, intensitas fisik, kedalaman materi refleksi, dan format rundown dari masing-masing tipe kegiatan luar ruang.",
    category: "Edukasi",
    publishDate: "2026-10-15",
    publishDateFormatted: "15 Oktober 2026",
    readTime: "6 menit baca",
    author: "Master Game Batu Outbound",
    image: "/images/blog/perbedaan-outbound.webp",
    altText: "Ilustrasi perbandingan antara fun games rekreasi dan team building berorientasi karakter",
    tags: ["Edukasi Outbound", "Rundown", "Panduan HR"],
    introduction: "Istilah outbound sering kali digunakan secara umum untuk menyebut semua kegiatan luar ruangan. Namun dalam industri pengembangan SDM, terdapat perbedaan mendasar antara Outbound Training, Team Building, dan Fun Games Gathering.",
    sections: [
      {
        heading: "1. Fun Games Gathering: Fokus pada Rekreasi & Keceriaan",
        content: "Tujuan utama fun games adalah pelepas stres (refreshing) dan kebersamaan. Aturan permainan sederhana, tidak membutuhkan ketahanan fisik tinggi, dan dipenuhi gelak tawa. Tipe ini sangat cocok untuk family gathering, reuni akbar, atau outing santai di mana pesertanya mencakup berbagai kalangan usia."
      },
      {
        heading: "2. Team Building: Fokus pada Dinamika Kelompok & Kerjasama",
        content: "Team building dirancang dengan struktur permainan yang menuntut strategi dan pembagian peran. Terdapat pos-pos rotasi tantangan dan kompetisi sehat antar kelompok. Di akhir setiap sesi, fasilitator memberikan ulasan singkat mengenai apa yang berjalan baik dan apa yang perlu diperbaiki dalam kerjasama tim."
      },
      {
        heading: "3. Outbound Training / Character Building: Fokus pada Perubahan Sikap",
        content: "Ini adalah tingkat paling mendalam yang berorientasi pada pelatihan kompetensi personal (leadership, disiplin, resiliensi). Biasanya dipandu oleh trainer bersertifikat dengan instrumen evaluasi perilaku. Simulasi sering kali melibatkan tantangan rintangan alam dengan debriefing psikologis yang mendalam."
      }
    ],
    conclusion: "Pastikan Anda mengomunikasikan ekspektasi utama kepada tim penyedia agar desain games dan fasilitator yang ditugaskan tepat sasaran dengan kebutuhan organisasi Anda."
  }
];

// Alias preview for backward compatibility
export const previewArticles = articlesData.map((a) => ({
  id: a.id,
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  category: a.category,
  publishDate: a.publishDate,
  publishDateFormatted: a.publishDateFormatted,
  readTime: a.readTime,
  author: a.author,
  image: a.image,
  altText: a.altText
}));
