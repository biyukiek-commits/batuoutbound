export interface PackageRundown {
  time: string;
  activity: string;
  desc: string;
}

export interface PackageFAQ {
  question: string;
  answer: string;
}

export interface OutboundPackage {
  id: string;
  slug: string;
  title: string;
  badge?: string;
  isPopular?: boolean;
  targetAudience: string;
  duration: string;
  minParticipants: string;
  summary: string;
  activities: string[];
  facilitiesIncluded: string[];
  facilitiesExcluded: string[];
  priceNote: string;
  recommendedLocations: string[];
  image: string;
  altText: string;
  rundownEstimate: PackageRundown[];
  participantRequirements: string[];
  packageFaqs: PackageFAQ[];
}

export const packagesData: OutboundPackage[] = [
  {
    id: "team-building-corporate",
    slug: "team-building-corporate",
    title: "Outbound Team Building Perusahaan",
    badge: "Paling Diminati",
    isPopular: true,
    targetAudience: "Perusahaan, Instansi Pemerintah, BUMN, Divisi Bisnis",
    duration: "Full Day (08.00 - 16.00 WIB)",
    minParticipants: "Minimal 30 Peserta",
    summary: "Simulasi dinamika kelompok terstruktur untuk meningkatkan kolaborasi, kepemimpinan, komunikasi efektif, dan problem solving tim kerja.",
    activities: [
      "Ice Breaking & Group Dynamic Energizer",
      "Trust & Synergy Building Challenges",
      "Problem Solving & Strategic Games",
      "Effective Communication Simulation",
      "Final Commitment Project & Debriefing"
    ],
    facilitiesIncluded: [
      "Fasilitator & Master Game profesional bersertifikat",
      "Peralatan & perlengkapan standar outbound keselamatan",
      "Sound system lapangan & audio wireless portable",
      "P3K standar & pendampingan tim medis siaga",
      "Air mineral free flow selama kegiatan",
      "Banner kegiatan selamat datang (ukuran 3x1 m)",
      "Dokumentasi foto & highlight video (drive link)"
    ],
    facilitiesExcluded: [
      "Transportasi bus / shuttle menuju lokasi kegiatan di Batu",
      "Konsumsi makan siang prasmanan & snack box (opsional add-on)",
      "Sewa aula tertutup / meeting room hotel jika dibutuhkan",
      "Pengeluaran pribadi peserta di luar kegiatan"
    ],
    priceNote: "Mulai Rp 150.000 / orang (Dapat disesuaikan dengan venue & konsumsi)",
    recommendedLocations: [
      "Coban Rondo Pine Forest, Batu",
      "Songgoriti Outbound Camp",
      "Kusuma Agrowisata Outdoor Ground"
    ],
    image: "/images/packages/team-building.webp",
    altText: "Aktivitas simulasi team building perusahaan di kawasan hutan pinus Kota Batu",
    rundownEstimate: [
      { time: "08.00 - 08.30", activity: "Kedatangan & Registrasi", desc: "Peserta tiba di venue, pembagian name tag, dan welcome drink teh hangat." },
      { time: "08.30 - 09.30", activity: "Ice Breaking & Group Conditioning", desc: "Senam ceria, games pemecah kebekuan, pembagian kelompok acak, dan pembuatan yel-yel." },
      { time: "09.30 - 11.30", activity: "Competition & Synergy Games", desc: "Rotasi tantangan rotasi pos simulasi problem solving, trust building, dan communication bridge." },
      { time: "11.30 - 13.00", activity: "Ishoma (Istirahat, Sholat & Makan)", desc: "Makan siang prasmanan masakan khas Batu dan ibadah santai." },
      { time: "13.00 - 15.00", activity: "Final Project & Big Dynamic", desc: "Skenario permainan besar yang melibatkan seluruh tim bekerja sama mencapai satu target bersama." },
      { time: "15.00 - 16.00", activity: "Debriefing & Closing Commitment", desc: "Refleksi makna pembelajaran dari trainer, pengumuman kelompok terbaik, dan foto bersama." }
    ],
    participantRequirements: [
      "Peserta dalam kondisi kesehatan fisik yang wajar",
      "Mengenakan pakaian training olahraga yang fleksibel",
      "Mengenakan sepatu kets / outdoor (bukan sandal jepit)",
      "Membawa baju ganti dan handuk kecil",
      "Membawa obat pribadi bagi yang memiliki riwayat sakit khusus"
    ],
    packageFaqs: [
      {
        question: "Apakah materi games bisa disesuaikan dengan nilai-nilai perusahaan (Core Values)?",
        answer: "Bisa. Sebelum hari H kami akan melakukan assessment singkat mengenai tujuan acara dan core values instansi Anda sehingga simulasi games dan debriefing sinkron dengan budaya kerja perusahaan."
      },
      {
        question: "Bagaimana jika peserta kami ada yang berusia di atas 50 tahun?",
        answer: "Kami menerapkan pendekatan low to medium impact yang aman. Permainan lebih menitikberatkan pada strategi pemikiran, komunikasi, dan koordinasi, bukan adu fisik ekstrem."
      }
    ]
  },
  {
    id: "fun-games-gathering",
    slug: "fun-games-gathering",
    title: "Family & Community Fun Gathering",
    badge: "Ramah Semua Usia",
    isPopular: false,
    targetAudience: "Keluarga Besar, Komunitas, Paguyuban, Alumni",
    duration: "Half Day s/d Full Day (Fleksibel)",
    minParticipants: "Minimal 25 Peserta",
    summary: "Aktivitas rekreasi luar ruangan yang menyenangkan, santai, dan penuh keceriaan untuk mempererat kehangatan serta kebersamaan antaranggota.",
    activities: [
      "Fun Ice Breaking & Yel-yel Kreasi",
      "Relay Games & Light Competition",
      "Intergenerational Bonding Games",
      "Doorprize Games & Fun Challenges",
      "Sesi Foto Bersama & Penutupan Hangat"
    ],
    facilitiesIncluded: [
      "Game Master & kru pendamping ramah anak & keluarga",
      "Perlengkapan aneka permainan fun games interaktif",
      "Sound system outdoor portabel & mic wireless",
      "Air mineral selama kegiatan & kotak P3K dasar",
      "Banner selamat datang kegiatan (spanduk foto)",
      "Dokumentasi foto momen kebersamaan"
    ],
    facilitiesExcluded: [
      "Tiket masuk wisata venue tambahan untuk wahana pribadi",
      "Makan siang prasmanan / barbeque (tersedia paket tambahan)",
      "Hadiah doorprize (bisa disediakan oleh panitia sendiri)"
    ],
    priceNote: "Mulai Rp 125.000 / orang (Harga hemat khusus keluarga/komunitas)",
    recommendedLocations: [
      "Taman Rekreasi Selecta Area Hijau",
      "Songgoriti Park Batu",
      "Coban Rais Camp Ground"
    ],
    image: "/images/packages/fun-gathering.webp",
    altText: "Keseruan fun games gathering keluarga dan komunitas di kawasan Batu Malang",
    rundownEstimate: [
      { time: "09.00 - 09.30", activity: "Kumpul Bersama & Pembukaan", desc: "Pembukaan santai oleh Game Master dan sambutan ketua paguyuban." },
      { time: "09.30 - 11.30", activity: "Fun Games Kolaboratif", desc: "Estafet balon ceria, tebak gaya, games kerjasama lintas generasi anak dan orang tua." },
      { time: "11.30 - 13.00", activity: "Makan Siang & Ramah Tamah", desc: "Santap siang bersama di bawah keteduhan pepohonan asri." },
      { time: "13.00 - 14.30", activity: "Doorprize Games & Foto Bersama", desc: "Pembagian hadiah undian, sesi foto keluarga besar, dan penutupan ceria." }
    ],
    participantRequirements: [
      "Terbuka untuk semua usia mulai anak-anak hingga lansia",
      "Pakaian santai dan alas kaki nyaman untuk rumput/alam terbuka",
      "Membawa topi atau pelindung panas jika diperlukan"
    ],
    packageFaqs: [
      {
        question: "Apakah anak balita dihitung biaya penuh?",
        answer: "Untuk anak usia di bawah 3 tahun tidak dikenakan biaya paket (free of charge)."
      },
      {
        question: "Apakah panitia boleh membawa konsumsi sendiri?",
        answer: "Boleh! Anda bebas membawa tumpeng atau masakan sendiri, atau memesan catering prasmanan melalui kami."
      }
    ]
  },
  {
    id: "outbound-karakter-sekolah",
    slug: "outbound-karakter-sekolah",
    title: "Outbound Edukasi & Karakter Siswa",
    badge: "Edukasi & Mandiri",
    isPopular: false,
    targetAudience: "SD, SMP, SMA/SMK, Pesantren, Organisasi Kampus",
    duration: "Full Day (07.30 - 15.00 WIB)",
    minParticipants: "Minimal 40 Peserta",
    summary: "Program pembentukan karakter, kemandirian, kedisiplinan, dan empati sosial berkonsep learning by doing di alam terbuka.",
    activities: [
      "PBB Ceria & Pembentukan Disiplin",
      "Simulasi Kepemimpinan & Kejujuran",
      "Obstacle Course & Ketangkasan Alam",
      "Low Impact Outdoor Team Games",
      "Refleksi Nilai & Apresiasi Diri"
    ],
    facilitiesIncluded: [
      "Trainer berpengalaman edukasi anak & remaja berlisensi",
      "Peralatan keselamatan games terstandar",
      "Pengawasan ketat rasio 1 fasilitator per 12 siswa",
      "P3K lengkap & pendampingan tim medis siaga",
      "Air mineral & sound system lapangan",
      "Sertifikat kegiatan peserta (softfile/cetak opsional)"
    ],
    facilitiesExcluded: [
      "Transportasi armada antar-jemput sekolah",
      "Konsumsi makan siang (dapat dipesan terpisah)",
      "Seragam kaos outbound (tersedia paket add-on bordir/sablon)"
    ],
    priceNote: "Mulai Rp 110.000 / siswa (Paket ramah anggaran sekolah/kampus)",
    recommendedLocations: [
      "Coban Talun Pine Forest Ground",
      "Bumi Perkemahan Pujon Malang",
      "Area Outbound Coban Rondo"
    ],
    image: "/images/packages/edukasi-sekolah.webp",
    altText: "Siswa sekolah mengikuti kegiatan outbound edukasi dan character building di alam terbuka Batu",
    rundownEstimate: [
      { time: "07.30 - 08.00", activity: "Apel Pembukaan & PBB Ceria", desc: "Upacara pembukaan sederhana, pengecekan barisan, dan pengondisian kedisiplinan." },
      { time: "08.00 - 11.30", activity: "Tantangan Karakter & Kerjasama", desc: "Permainan titian bambu, labirin komunikasi, evakuasi ranjau, dan estafet air kejujuran." },
      { time: "11.30 - 13.00", activity: "Ishoma & Makan Siang Mandiri", desc: "Mendidik adab makan bersama dan menjaga kebersihan lingkungan venue." },
      { time: "13.00 - 14.30", activity: "Refleksi Nilai & Renungan Diri", desc: "Sesi konseling motivasi hangat tentang bakti orang tua, guru, dan cita-cita masa depan." },
      { time: "14.30 - 15.00", activity: "Apel Penutupan & Pulang", desc: "Apresiasi siswa teladan dan persiapan kembali ke sekolah." }
    ],
    participantRequirements: [
      "Surat izin orang tua murid yang telah dihimpun pihak sekolah",
      "Seragam olahraga sekolah atau kaos angkatan",
      "Sepatu olahraga yang nyaman"
    ],
    packageFaqs: [
      {
        question: "Apakah guru pendamping dikenakan biaya?",
        answer: "Guru pendamping mendapatkan fasilitas gratis pendampingan (FOC) dengan rasio 1 guru gratis per 20 siswa."
      }
    ]
  },
  {
    id: "outbound-rafting-adventure",
    slug: "outbound-rafting-adventure",
    title: "Outbound + Rafting Sungai Kaliwatu",
    badge: "Adrenalin & Alam",
    isPopular: true,
    targetAudience: "Perusahaan, Pegawai Muda, Komunitas Petualang",
    duration: "Full Day (08.00 - 16.30 WIB)",
    minParticipants: "Minimal 20 Peserta",
    summary: "Kombinasi sempurna antara dinamika team building di darat dan tantangan arung jeram menyusuri arus segar Sungai Kaliwatu Batu.",
    activities: [
      "Morning Team Building & Warm-Up Games",
      "Safety Briefing & Fitting Pelampung/Helm",
      "Pengarungan Arung Jeram 7-9 KM (Grade II-III)",
      "River Rescuer & Rescue Simulation",
      "Makan Siang Prasmanan Khas Pedesaan & Coffee Break"
    ],
    facilitiesIncluded: [
      "Paket Outbound Team Building lengkap di darat",
      "Perahu rafting berstandar internasional, dayung, pelampung, helm SNI",
      "Skipper / River guide berlisensi di setiap perahu",
      "Tim rescue sungai & asuransi resmi arung jeram",
      "Transportasi lokal shuttle pengangkut dari finish point ke basecamp",
      "Makan siang prasmanan masakan tradisional khas pedesaan Batu",
      "Kamar bilas representatif dengan air bersih"
    ],
    facilitiesExcluded: [
      "Dokumentasi foto aksi jeram khusus perahu (tersedia fotografer sungai opsional)",
      "Alas kaki rafting (disarankan membawa sandal gunung sendiri)",
      "Transportasi bus rombongan dari kota asal ke Batu"
    ],
    priceNote: "Mulai Rp 295.000 / orang (Sudah termasuk rafting + outbound + makan)",
    recommendedLocations: [
      "Basecamp Kaliwatu Rafting Kota Batu",
      "Sungai Brantas Hulu Bumiaji",
      "Sahabat Air Rafting Batu"
    ],
    image: "/images/packages/rafting-adventure.webp",
    altText: "Kombinasi kegiatan outbound dan rafting arung jeram seru di Kaliwatu Batu Malang",
    rundownEstimate: [
      { time: "08.00 - 08.30", activity: "Tiba di Basecamp Kaliwatu", desc: "Registrasi dan pemanasan awal." },
      { time: "08.30 - 11.30", activity: "Sesi Outbound Team Building", desc: "Simulasi games kerjasama dan pembentukan soliditas di lapangan rumput asri." },
      { time: "11.30 - 12.30", activity: "Makan Siang Prasmanan & Istirahat", desc: "Makan siang dengan menu sayur lodeh, ayam goreng, sambal pedas khas Batu." },
      { time: "12.30 - 13.00", activity: "Briefing Rafting & Fitting Alat", desc: "Penjelasan instruktur mengenai teknik mendayung dan standar keselamatan perahu." },
      { time: "13.00 - 15.30", activity: "Pengarungan Arus Kaliwatu (7-9 KM)", desc: "Sensasi jeram memacu adrenalin menyusuri pemandangan tebing dan kebun apel." },
      { time: "15.30 - 16.30", activity: "Bilas Bersih, Teh Hangat & Selesai", desc: "Mandi bersih di basecamp dan menikmati wedang jahe / teh hangat penutup." }
    ],
    participantRequirements: [
      "Usia minimal 7 tahun dan maksimal 65 tahun dalam kondisi sehat",
      "Tidak memiliki riwayat penyakit jantung akut atau epilepsi",
      "Membawa pakaian ganti kering lengkap & perlengkapan mandi pribadi",
      "Memakai sandal gunung berkait atau sepatu air"
    ],
    packageFaqs: [
      {
        question: "Apakah peserta yang tidak bisa berenang tetap bisa ikut rafting?",
        answer: "Sangat aman! Seluruh peserta mengenakan life jacket pelampung daya apung tinggi berstandar SNI dan didampingi guide berpengalaman di setiap perahu."
      }
    ]
  },
  {
    id: "paintball-wargame-tactical",
    slug: "paintball-wargame-tactical",
    title: "Outbound Games + Paintball War Game",
    badge: "Strategi & Taktik",
    isPopular: false,
    targetAudience: "Perusahaan, Komunitas Hobi, Tim Sales/Operasional",
    duration: "Half Day s/d Full Day",
    minParticipants: "Minimal 20 Peserta",
    summary: "Uji kekompakan dan eksekusi strategi tim melalui simulasi tempur paintball seru di arena hutan pinus alami Kota Batu.",
    activities: [
      "Energizing Ice Breaking & Team Setup",
      "Briefing Strategi, Senjata & Regulasi Keamanan",
      "Skenario Capture the Flag & Elimination War",
      "Tactical Debriefing & Leadership Feedback"
    ],
    facilitiesIncluded: [
      "Marker / senapan paintball semi-otomatis berstandar",
      "Goggle masker pelindung wajah anti-pecah & rompi body armor",
      "Seragam loreng militer & 50 butir peluru per peserta",
      "Instruktur & wasit bersertifikat safety",
      "Air mineral & area istirahat teduh di bawah pinus"
    ],
    facilitiesExcluded: [
      "Isi ulang peluru tambahan (dapat dibeli di lokasi: Rp 25.000 / 20 peluru)",
      "Konsumsi makan siang (tersedia paket bundling)",
      "Transportasi peserta"
    ],
    priceNote: "Mulai Rp 225.000 / orang (Paket kombo outbound + paintball)",
    recommendedLocations: [
      "Arena Paintball Coban Rondo Batu",
      "Songgoriti Jungle War Ground"
    ],
    image: "/images/packages/paintball-war.webp",
    altText: "Simulasi pertempuran taktis paintball di arena hutan pinus Kota Batu",
    rundownEstimate: [
      { time: "08.30 - 09.00", activity: "Persiapan & Team Bonding", desc: "Ice breaking singkat dan pembagian batalyon tempur." },
      { time: "09.00 - 10.30", activity: "Outbound Strategy Games", desc: "Simulasi strategi komunikasi sebelum memasuki medan laga." },
      { time: "10.30 - 12.00", activity: "Paintball Battle Session", desc: "Pertempuran taktis skenario perebutan bendera dan pertahanan benteng di hutan pinus." },
      { time: "12.00 - 13.00", activity: "Evaluasi Taktis & Ramah Tamah", desc: "Debriefing kepemimpinan tim dan sesi foto kompi juara." }
    ],
    participantRequirements: [
      "Peserta berusia minimal 12 tahun",
      "Wajib mematuhi aturan wasit: goggle tidak boleh dilepas di dalam arena",
      "Mengenakan sepatu kets / outdoor bertali"
    ],
    packageFaqs: [
      {
        question: "Apakah peluru paintball berbahaya jika mengenai badan?",
        answer: "Peluru terbuat dari gelatin pewarna makanan alami yang mudah dicuci. Dengan rompi pelindung dan jarak tembak minimal 5 meter sesuai SOP, permainan ini sangat aman."
      }
    ]
  },
  {
    id: "gathering-menginap-2d1n",
    slug: "gathering-menginap-2d1n",
    title: "Paket Outbound 2 Hari 1 Malam (2D1N)",
    badge: "Paket Komplit",
    isPopular: false,
    targetAudience: "Perusahaan Tahunan, Rapat Kerja (Raker), Reuni Akbar",
    duration: "2 Hari 1 Malam (Menginap Villa / Resort / Glamping)",
    minParticipants: "Minimal 30 Peserta",
    summary: "Paket lengkap gathering terencana tanpa repot: penginapan nyaman, outbound motivasi, malam keakraban api unggun, dan wisata Batu.",
    activities: [
      "Hari 1: Check-in, Outbound Team Building, Coffee Break",
      "Hari 1 Malam: Gala Dinner, Malam Keakraban, Api Unggun & Musik",
      "Hari 2: Senam Pagi, Motivational Session, Wisata Petik Apel",
      "Penyerahan Hadiah & Check-out Santai"
    ],
    facilitiesIncluded: [
      "Akomodasi Hotel/Resort/Villa representatif di Batu (kapasitas 2-3 orang/kamar)",
      "Makan 3x (Prasmanan variatif) + Coffee Break 2x",
      "Program Outbound Team Building lengkap & fasilitator 2 hari",
      "Set api unggun, sound system malam keakraban, MC profesional",
      "Banner backdrop panggung & lapangan",
      "Dokumentasi lengkap foto dan highlight video drone"
    ],
    facilitiesExcluded: [
      "Tiket wahana wisata berbayar di luar rundown yang disepakati",
      "Pengeluaran laundry dan room service hotel pribadi",
      "Transportasi bus pariwisata luar kota (bisa dikoordinasikan)"
    ],
    priceNote: "Hubungi untuk penawaran kustom (Sesuai tipe penginapan yang dipilih)",
    recommendedLocations: [
      "Resort & Villa Bumiaji Batu",
      "Kawasan Glamping Songgoriti / Pujon",
      "Kusuma Resort Area Batu"
    ],
    image: "/images/packages/gathering-2d1n.webp",
    altText: "Gathering malam keakraban dengan api unggun di resort sejuk pegunungan Kota Batu",
    rundownEstimate: [
      { time: "Hari 1 - 13.00", activity: "Check-in & Welcome Drink", desc: "Penyambutan peserta dan pembagian kunci kamar penginapan." },
      { time: "Hari 1 - 14.30", activity: "Outbound Team Energizer", desc: "Dinamika kelompok di lapangan rumput asri resort." },
      { time: "Hari 1 - 19.00", activity: "Gala Dinner & Malam Keakraban", desc: "Makan malam prasmanan, pembagian doorprize, dan api unggun hangat." },
      { time: "Hari 2 - 06.30", activity: "Senam Pagi & Breakfast", desc: "Sarapan pagi dengan udara segar pegunungan Batu." },
      { time: "Hari 2 - 09.00", activity: "Wisata Petik Apel / Edukasi", desc: "Memetik apel langsung dari kebun petani lokal Kota Batu." },
      { time: "Hari 2 - 12.00", activity: "Check-out & Sayonara", desc: "Penyelesaian administrasi dan perjalanan pulang." }
    ],
    participantRequirements: [
      "Membawa kartu identitas (KTP/SIM) untuk registrasi penginapan",
      "Membawa jaket hangat (suhu malam Kota Batu berkisar 16-19°C)"
    ],
    packageFaqs: [
      {
        question: "Apakah bisa request tipe penginapan hotel bintang 3 atau bintang 4?",
        answer: "Bisa. Kami memiliki jaringan hotel dan resort rekanan mulai dari kelas villa keluarga, glamping bernuansa alam, hingga hotel berbintang di Batu."
      }
    ]
  }
];
