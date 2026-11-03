export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface OutboundService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  keyBenefits: string[];
  typicalActivities: string[];
  customizationOptions: string[];
  recommendedVenues: string[];
  serviceFaqs: ServiceFAQ[];
  icon: string;
  image: string;
  altText: string;
}

export const servicesData: OutboundService[] = [
  {
    id: "team-building",
    slug: "team-building",
    title: "Team Building & Synergy Training",
    shortDesc: "Membangun soliditas, kepercayaan tim, kepemimpinan adaptif, dan komunikasi efektif melalui simulasi luar ruang.",
    fullDesc: "Program terstruktur yang dirancang khusus untuk memecahkan silo antar departemen, menguatkan empati, serta melatih sinergi tim kerja agar siap menghadapi target perusahaan.",
    targetAudience: "Perusahaan, Korporasi, BUMN, Divisi Bisnis, Instansi Pemerintah",
    keyBenefits: [
      "Mengurangi konflik internal dan memperkuat kepercayaan antar individu",
      "Mengasah pemecahan masalah (problem solving) di bawah tekanan",
      "Meningkatkan komitmen terhadap target bersama"
    ],
    typicalActivities: [
      "Trust Fall & Synergy Rope Challenges",
      "Blind Lead & Active Listening Simulation",
      "Pipeline & Resource Allocation Game",
      "Tower Building Strategy Under Pressure",
      "Sesi Refleksi & Komitmen Sinergi (Debriefing)"
    ],
    customizationOptions: [
      "Penyesuaian tema simulasi dengan Core Values perusahaan",
      "Pilihan durasi: Half Day, Full Day, atau 2D1N Camp",
      "Integrasi sesi seminar motivasi indoor / motivational speaker"
    ],
    recommendedVenues: [
      "Kawasan Hutan Pinus Coban Rondo Kota Batu",
      "Songgoriti Outbound Ground",
      "Lapangan Hijau Kusuma Agrowisata"
    ],
    serviceFaqs: [
      {
        question: "Apakah peserta akan dipaksa melakukan aktivitas fisik berat?",
        answer: "Tidak. Fokus kami adalah dinamika kelompok dan psikologi tim, bukan ketahanan militer. Aktivitas disesuaikan dengan kondisi fisik seluruh rentang usia karyawan."
      }
    ],
    icon: "users-gear",
    image: "/images/services/team-building-service.webp",
    altText: "Layanan outbound team building profesional di Kota Batu Malang"
  },
  {
    id: "gathering-perusahaan",
    slug: "gathering-perusahaan",
    title: "Company Gathering & Employee Outing",
    shortDesc: "Pelepas penat dan momen rekreasi apresiasi tahunan untuk seluruh staf dan pimpinan dengan sentuhan games hangat.",
    fullDesc: "Solusi gathering perusahaan all-in-one di Batu Malang yang memadukan rekreasi alam sejuk, games interaktif ceria, panggung hiburan, hingga kuliner khas daerah.",
    targetAudience: "Karyawan kantor, instansi dinas, mitra korporat, asosiasi profesi",
    keyBenefits: [
      "Refreshing total dari rutinitas beban kerja harian",
      "Mempererat relasi horizontal dan vertikal tanpa batasan struktural",
      "Meningkatkan loyalitas dan rasa memiliki terhadap perusahaan"
    ],
    typicalActivities: [
      "Fun Energizing Games di Lapangan Luas",
      "Yel-yel Kreatif & Atraksi Spontan",
      "Panggung Keakraban, Live Music & Doorprize",
      "Makan Siang Prasmanan Khas Pedesaan",
      "Eksplorasi Wisata Ikonik Kota Batu"
    ],
    customizationOptions: [
      "Pemilihan venue: Resort berbintang, villa eksklusif, atau taman rekreasi",
      "Tambahan konsep Gala Dinner & Api Unggun malam hari",
      "Paket seragam polo shirt / kaos sablon acara"
    ],
    recommendedVenues: [
      "Selecta Park Green Area Batu",
      "Coban Rais Camp Area",
      "Hotel & Resort Bumiaji"
    ],
    serviceFaqs: [
      {
        question: "Apakah gathering bisa digabung dengan rapat kerja tahunan (Raker)?",
        answer: "Bisa. Kami dapat mengatur rundown yang membagi waktu antara sesi meeting formal di ruang pertemuan ber-AC dan sesi refreshing outbound di sore atau hari berikutnya."
      }
    ],
    icon: "briefcase",
    image: "/images/services/gathering-service.webp",
    altText: "Layanan company gathering dan outing kantor di venue terbuka Batu Malang"
  },
  {
    id: "family-community-gathering",
    slug: "family-community-gathering",
    title: "Family & Community Gathering",
    shortDesc: "Kegiatan santai bertema kehangatan untuk keluarga besar, paguyuban, komunitas hobi, maupun ikatan alumni.",
    fullDesc: "Desain acara gathering inklusif dengan permainan yang aman dan menyenangkan untuk anak-anak, remaja, hingga lansia di venue asri Batu.",
    targetAudience: "Keluarga besar, alumni sekolah/kampus, komunitas hobi, paguyuban warga",
    keyBenefits: [
      "Permainan yang ramah untuk semua rentang usia",
      "Suasana santai tanpa beban fisik berlebih",
      "Dokumentasi penuh kehangatan kenangan bersama"
    ],
    typicalActivities: [
      "Estafet Tawa & Games Kekompakan Pasangan",
      "Permainan Ceria Edukatif Anak-Anak",
      "Senam Sehat Ringan Bersama",
      "Tukar Kado & Pembagian Hadiah Kenangan",
      "Sesi Foto Rombongan Keluarga Besar"
    ],
    customizationOptions: [
      "Pilihan venue piknik santai atau villa privat dengan kolam renang",
      "Menu konsumsi prasmanan tradisional atau menu kids-friendly",
      "Penyediaan photobooth dekorasi foto keluarga"
    ],
    recommendedVenues: [
      "Taman Rekreasi Selecta Kota Batu",
      "Songgoriti Camp Ground",
      "Villa Rekanan Kawasan Bumiaji"
    ],
    serviceFaqs: [
      {
        question: "Berapa kapasitas peserta minimal untuk gathering keluarga?",
        answer: "Idealnya mulai dari 20-25 orang. Untuk grup keluarga besar hingga ratusan orang pun fasilitas lapangan kami sangat memadai."
      }
    ],
    icon: "heart-hands",
    image: "/images/services/family-service.webp",
    altText: "Layanan family gathering dan komunitas dengan kegiatan ramah keluarga di Batu"
  },
  {
    id: "character-building-edukasi",
    slug: "character-building-edukasi",
    title: "Outbound Edukasi & Character Building",
    shortDesc: "Program pembentukan karakter, kedisiplinan, kemandirian, dan kepemimpinan untuk siswa dan mahasiswa.",
    fullDesc: "Metode experiential learning di alam bebas untuk menumbuhkan nilai-nilai integritas, kepedulian kawan, dan ketangguhan mental generasi muda.",
    targetAudience: "SD, SMP, SMA, SMK, Pesantren, Organisasi Kampus (BEM/HIMA)",
    keyBenefits: [
      "Menumbuhkan kemandirian dan rasa tanggung jawab sosial",
      "Melatih kedisiplinan dan sopan santun lewat dinamika kelompok",
      "Didampingi fasilitator sabar dan bersertifikasi edukatif"
    ],
    typicalActivities: [
      "PBB Ceria & Latihan Ketegasan Sikap",
      "Simulasi Mengatasi Rintangan Alam",
      "Problem Solving Kelompok Kecil",
      "Games Kerjasama & Empati Rekan",
      "Refleksi Motivasi & Apresiasi Diri"
    ],
    customizationOptions: [
      "Penyesuaian modul dengan kurikulum sekolah atau LDKS",
      "Pilihan format: 1 Hari (Full Day) atau Perkemahan Edukasi 2D1N",
      "Sertifikat kepesertaan resmi untuk seluruh siswa"
    ],
    recommendedVenues: [
      "Bumi Perkemahan Coban Talun Batu",
      "Hutan Pinus Coban Rondo",
      "Bumi Perkemahan Pujon Malang"
    ],
    serviceFaqs: [
      {
        question: "Apakah aspek keselamatan siswa terjamin saat kegiatan di alam?",
        answer: "Sangat terjamin. Kami menerapkan rasio pengawasan ketat 1 fasilitator per 10-12 siswa, peralatan keselamatan teruji, serta tim P3K siaga di lokasi."
      }
    ],
    icon: "graduation-cap",
    image: "/images/services/education-service.webp",
    altText: "Layanan outbound edukasi dan character building sekolah di alam Batu Malang"
  },
  {
    id: "arung-jeram-rafting",
    slug: "arung-jeram-rafting",
    title: "Rafting & Water Adventure Kaliwatu",
    shortDesc: "Sensasi arung jeram seru di sungai alami Kota Batu dengan standar keamanan tinggi dan pemandu berlisensi.",
    fullDesc: "Petualangan arung jeram menyusuri jeram Grade II-III Kaliwatu yang menantang namun aman untuk pemula, dipadukan pemandangan tebing dan perkebunan apel asri.",
    targetAudience: "Grup perusahaan, rombongan wisata, pecinta petualangan, komunitas muda",
    keyBenefits: [
      "Peralatan rescue standar nasional (SNI) & asuransi resmi",
      "Skipper / River guide berlisensi di setiap perahu",
      "Bisa digabung dengan paket outbound darat atau gathering"
    ],
    typicalActivities: [
      "Fitting Helm & Pelampung Sesuai Ukuran",
      "Safety Briefing & Teknik Dayung Dasar",
      "Pengarungan Sungai Jeram Kaliwatu (7-9 KM)",
      "Tantangan Jeram 'Vortex' & Jeram 'Gojekan'",
      "Bilas Bersih & Menikmati Kuliner Tradisional"
    ],
    customizationOptions: [
      "Kombinasi Outbound Team Building + Rafting (Paket Kombo)",
      "Pilihan menu makan siang prasmanan masakan khas Batu",
      "Dokumentasi fotografer aksi jeram khusus"
    ],
    recommendedVenues: [
      "Basecamp Kaliwatu Rafting Bumiaji Batu",
      "Sungai Brantas Hulu Batu"
    ],
    serviceFaqs: [
      {
        question: "Apakah aman bagi peserta yang sama sekali belum pernah berarung jeram?",
        answer: "Sangat aman. Karakter jeram Kaliwatu berada pada Grade II-III yang cocok untuk pemula dan keluarga, dengan pendampingan skipper terlatih di setiap perahu."
      }
    ],
    icon: "water-waves",
    image: "/images/services/rafting-service.webp",
    altText: "Layanan petualangan rafting arung jeram Kaliwatu di Kota Batu"
  },
  {
    id: "paintball-outdoor-wargame",
    slug: "paintball-outdoor-wargame",
    title: "Paintball War Game Battle",
    shortDesc: "Simulasi tempur strategi militer di arena hutan pinus dengan peralatan pengaman lengkap dan wasit profesional.",
    fullDesc: "Uji kecepatan berpikir, komunikasi taktis lapangan, dan kepemimpinan tim di bawah atmosfer kompetisi seru dan aman di alam terbuka.",
    targetAudience: "Divisi perusahaan, komunitas petualang, grup kawan, tim sales/operasional",
    keyBenefits: [
      "Marker semi-otomatis terawat dan akurat",
      "Full body protection: google helm, rompi, dan seragam",
      "Beragam skenario: Capture the Flag, VIP Protection, Elimination"
    ],
    typicalActivities: [
      "Pemberian Seragam Tempur Loreng & Rompi",
      "Briefing SOP Penggunaan Marker & Masker",
      "Skenario Game 1: Battle of Annihilation (Eliminasi Regu)",
      "Skenario Game 2: Capture The Opponent's Flag (Perebutan Bendera)",
      "Debriefing Kerjasama Taktis Lapangan"
    ],
    customizationOptions: [
      "Penambahan kuota amunisi peluru per orang",
      "Bundling dengan Outbound Games atau Rafting",
      "Penyediaan medali atau piala tim juara wargame"
    ],
    recommendedVenues: [
      "Arena Paintball Coban Rondo Hutan Pinus Batu",
      "Songgoriti Jungle War Arena"
    ],
    serviceFaqs: [
      {
        question: "Berapa lama durasi permainan paintball berlangsung?",
        answer: "Durasi efektif berkisar antara 1,5 hingga 2 jam, tergantung pada jumlah babak dan tempo pengeluaran amunisi masing-masing regu."
      }
    ],
    icon: "crosshair",
    image: "/images/services/paintball-service.webp",
    altText: "Layanan simulasi taktis paintball wargame di hutan pinus Batu Malang"
  }
];
