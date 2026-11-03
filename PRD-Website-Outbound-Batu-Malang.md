# Product Requirements Document (PRD)

## Website Landing Page Outbound Batu Malang

**Versi:** 1.0\
**Tanggal:** 2 November 2026\
**Status:** Draft siap menjadi acuan desain dan pengembangan\
**Platform:** Astro + HTML + CSS + Bootstrap\
**Jenis website:** Static website / landing page multi-halaman\
**Database:** Tidak menggunakan database\
**CTA utama:** WhatsApp `081217366600`

------------------------------------------------------------------------

## 1. Ringkasan Produk

Website ini merupakan website pemasaran untuk bisnis penyedia layanan
outbound, gathering, team building, dan aktivitas wisata berbasis
pengalaman di kawasan Batu dan Malang, Jawa Timur.

Website dibangun menggunakan **Astro** sebagai framework utama, HTML
semantik, CSS, dan Bootstrap untuk sistem layout serta komponen
antarmuka. Website harus berupa static-first website tanpa database,
tanpa CMS berbasis server, dan tanpa backend dinamis. Tujuan utamanya
adalah menghasilkan website yang cepat, ringan, mudah dirawat, mudah
dikembangkan, serta memiliki fondasi SEO teknis dan konten yang kuat.

Seluruh jalur konversi utama diarahkan ke WhatsApp dengan nomor
`081217366600`. Pengunjung dapat membuka percakapan untuk bertanya,
meminta penawaran, atau melakukan pemesanan.

### 1.1 Tujuan bisnis

1.  Menghasilkan prospek outbound dari calon pelanggan individu,
    keluarga, sekolah, komunitas, dan perusahaan.
2.  Menampilkan paket dan layanan secara jelas agar calon pelanggan
    mudah memahami pilihan kegiatan.
3.  Membangun kepercayaan melalui profil penyelenggara, galeri
    dokumentasi, informasi layanan, dan artikel edukatif.
4.  Meningkatkan visibilitas organik untuk pencarian terkait outbound
    Batu dan Malang.
5.  Mempermudah calon pelanggan menghubungi tim melalui WhatsApp.

### 1.2 Tujuan pengguna

Pengunjung harus dapat: - Memahami jenis kegiatan dan layanan yang
tersedia. - Menemukan paket yang sesuai dengan jumlah peserta,
kebutuhan, dan anggaran. - Melihat gambaran aktivitas melalui galeri. -
Memahami lokasi layanan, alur pemesanan, dan informasi penting. -
Membaca artikel panduan seputar outbound Batu Malang. - Menghubungi
penyelenggara melalui WhatsApp dengan satu atau beberapa klik.

### 1.3 Prinsip produk

-   **Static-first:** halaman dirender menjadi HTML statis saat build.
-   **No database:** tidak ada penyimpanan data pengguna atau konten di
    database.
-   **Performance-first:** aset ringan, JavaScript minimal, gambar
    teroptimasi.
-   **SEO-first:** struktur halaman, metadata, internal link, sitemap,
    robots, canonical, dan structured data.
-   **Helpful content:** konten harus informatif, spesifik, mudah
    dipahami, dan tidak dibuat hanya untuk mengulang keyword.
-   **Conversion-focused:** CTA WhatsApp terlihat jelas tetapi tidak
    mengganggu pengalaman membaca.
-   **Elegant dark design:** tampilan hitam yang elegan, rapi, modern,
    dan tetap memiliki kontras yang baik.

------------------------------------------------------------------------

## 2. Ruang Lingkup

### 2.1 Termasuk dalam proyek

-   Website multi-halaman dengan halaman Beranda, Tentang Kami, Paket,
    Layanan, Galeri, dan Blog.
-   Halaman detail paket, detail artikel, dan halaman pendukung yang
    dibutuhkan.
-   Navigasi desktop dan mobile.
-   Tombol WhatsApp pada area strategis.
-   Konten statis yang dikelola melalui file proyek.
-   SEO teknis, SEO on-page, AEO, dan GEO.
-   JSON-LD structured data yang relevan dan valid.
-   Sitemap XML dan robots.txt.
-   Optimasi performa, aksesibilitas, dan responsivitas.
-   Halaman 404.
-   Dokumentasi cara menjalankan, membangun, dan memperbarui konten.

### 2.2 Tidak termasuk dalam proyek

-   Database jenis apa pun.
-   Login, registrasi, dashboard, atau akun pelanggan.
-   Keranjang belanja dan pembayaran online.
-   Booking engine real-time.
-   Sinkronisasi ketersediaan jadwal.
-   Admin panel atau CMS berbasis server.
-   Penyimpanan formulir ke database.
-   Live chat selain tautan WhatsApp.
-   Klaim peringkat Google atau jaminan jumlah trafik.
-   Integrasi otomatis ke sistem CRM, kecuali ditambahkan pada fase
    lanjutan.

### 2.3 Konsekuensi pendekatan tanpa database

Konten paket, layanan, galeri, dan blog disimpan sebagai file di dalam
repository, misalnya Markdown, JSON, atau TypeScript. Perubahan konten
dilakukan melalui pengeditan file dan proses build/deploy ulang.

Jika di masa mendatang pemilik website membutuhkan admin panel, booking
real-time, atau pengelolaan konten oleh banyak editor, integrasi CMS
headless dapat dipertimbangkan tanpa harus mengubah seluruh fondasi
website.

------------------------------------------------------------------------

## 3. Target Audiens dan Kebutuhan

  -----------------------------------------------------------------------
  Segmen                  Kebutuhan utama         Informasi yang harus
                                                  ditonjolkan
  ----------------------- ----------------------- -----------------------
  Perusahaan              Gathering, team         Tujuan kegiatan,
                          building, outing kantor kapasitas, rundown,
                                                  fasilitas, penawaran

  Sekolah dan kampus      Edukasi, character      Keamanan, pendamping,
                          building, kegiatan      aktivitas, kelompok
                          kelompok                usia

  Komunitas               Outbound dan kegiatan   Pilihan aktivitas,
                          kebersamaan             fleksibilitas,
                                                  harga/paket

  Keluarga                Aktivitas rekreasi      Tingkat kesulitan, usia
                          bersama                 peserta, fasilitas

  Event organizer         Mitra pelaksana         Jenis layanan,
                          kegiatan                kapasitas, koordinasi,
                                                  portofolio

  Wisatawan               Aktivitas selama berada Lokasi, durasi, pilihan
                          di Batu/Malang          paket, cara reservasi
  -----------------------------------------------------------------------

### 3.1 Kebutuhan informasi utama

Pengunjung perlu memperoleh jawaban atas pertanyaan berikut: - Outbound
apa saja yang tersedia? - Di mana lokasi kegiatan? - Apakah
penyelenggara melayani perusahaan, sekolah, komunitas, dan keluarga? -
Berapa harga atau bagaimana cara mendapatkan penawaran? - Apa saja
fasilitas yang termasuk dalam paket? - Berapa minimal dan maksimal
peserta? - Apakah kegiatan dapat disesuaikan? - Bagaimana cara
reservasi? - Bagaimana menghubungi penyelenggara?

Informasi yang belum dikonfirmasi oleh pemilik bisnis harus ditandai
sebagai data yang perlu dilengkapi, bukan dibuat-buat.

------------------------------------------------------------------------

## 4. Arsitektur Informasi dan Struktur URL

Gunakan URL pendek, deskriptif, konsisten, huruf kecil, dan menggunakan
tanda hubung.

  Halaman             URL yang disarankan     Tujuan
  ------------------- ----------------------- --------------------------------
  Beranda             `/`                     Pengenalan brand dan konversi
  Tentang Kami        `/tentang-kami/`        Profil, nilai, pengalaman, tim
  Paket               `/paket/`               Daftar paket outbound
  Detail Paket        `/paket/[slug]/`        Rincian setiap paket
  Layanan             `/layanan/`             Daftar layanan
  Detail Layanan      `/layanan/[slug]/`      Penjelasan layanan tertentu
  Galeri              `/galeri/`              Dokumentasi kegiatan
  Blog                `/blog/`                Daftar artikel
  Detail Blog         `/blog/[slug]/`         Artikel lengkap
  Kontak              `/kontak/`              Kontak dan cara reservasi
  FAQ                 `/faq/`                 Jawaban pertanyaan umum
  Kebijakan Privasi   `/kebijakan-privasi/`   Informasi privasi
  404                 Halaman sistem          Penanganan URL tidak ditemukan

**Catatan:** halaman Kontak dan FAQ merupakan halaman pendukung yang
direkomendasikan agar kebutuhan pengguna dan SEO terpenuhi. Navigasi
utama tetap menampilkan enam halaman utama yang diminta.

### 4.1 Navigasi utama

Urutan menu desktop: 1. Beranda 2. Tentang Kami 3. Paket 4. Layanan 5.
Galeri 6. Blog 7. Tombol CTA "Konsultasi WhatsApp"

Pada layar mobile, menu berubah menjadi navigasi hamburger atau
offcanvas Bootstrap. CTA WhatsApp tetap mudah ditemukan.

### 4.2 Aturan URL

-   Gunakan trailing slash secara konsisten.
-   Hindari parameter URL untuk halaman konten.
-   Satu konten hanya memiliki satu URL canonical.
-   Hindari slug yang berubah-ubah.
-   Redirect URL lama ke URL baru jika ada perubahan slug.
-   Jangan membuat halaman tipis hanya untuk menargetkan variasi
    keyword.

------------------------------------------------------------------------

## 5. Persyaratan Fungsional

### FR-01 --- Beranda

Beranda harus memuat: - Hero section dengan headline yang menjelaskan
layanan dan lokasi. - Subheadline yang menjelaskan nilai utama
penyelenggara. - CTA utama ke WhatsApp. - CTA sekunder menuju halaman
paket. - Ringkasan keunggulan. - Ringkasan paket unggulan. - Ringkasan
layanan. - Alasan memilih penyelenggara. - Preview galeri. - Testimoni
asli jika tersedia dan telah mendapat izin. - Ringkasan artikel
terbaru. - FAQ pilihan. - CTA penutup. - Footer berisi navigasi dan
informasi bisnis.

### FR-02 --- Tentang Kami

Memuat: - Sejarah atau latar belakang usaha. - Profil penyelenggara. -
Visi dan misi bila tersedia. - Nilai dan standar pelayanan. - Tim atau
fasilitator jika datanya tersedia. - Dokumentasi kegiatan. - Area
layanan yang benar-benar dilayani. - CTA WhatsApp.

Jangan mencantumkan jumlah pengalaman, jumlah klien, sertifikasi, atau
klaim keselamatan yang belum dapat dibuktikan.

### FR-03 --- Paket

Halaman daftar paket harus: - Menampilkan kartu paket yang konsisten. -
Menampilkan nama paket, deskripsi, aktivitas, durasi, fasilitas, dan
harga jika sudah terkonfirmasi. - Menampilkan label "Hubungi untuk
penawaran" jika harga bergantung pada kebutuhan. - Menyediakan tautan ke
halaman detail paket. - Memiliki CTA WhatsApp pada setiap paket. -
Memiliki informasi faktor yang memengaruhi harga, seperti jumlah
peserta, lokasi, durasi, dan fasilitas, bila relevan.

Halaman detail paket harus memiliki: - Nama dan ringkasan paket. -
Sasaran peserta. - Aktivitas. - Durasi. - Fasilitas termasuk dan tidak
termasuk. - Lokasi atau opsi lokasi. - Ketentuan peserta. - Informasi
harga atau mekanisme penawaran. - FAQ paket. - CTA WhatsApp dengan pesan
yang sudah terisi.

### FR-04 --- Layanan

Layanan dapat mencakup kategori berikut apabila memang disediakan: -
Outbound training. - Team building. - Gathering perusahaan. - Family
gathering. - Outing kantor. - Kegiatan sekolah atau kampus. - Fun
games. - Leadership atau character building. - Event dan aktivitas
khusus.

Setiap layanan memiliki penjelasan tujuan, sasaran, format kegiatan,
pilihan penyesuaian, dan CTA. Hapus kategori yang tidak benar-benar
ditawarkan.

### FR-05 --- Galeri

Galeri menampilkan dokumentasi foto atau video kegiatan: - Setiap aset
memiliki alt text yang deskriptif. - Foto dikompresi dan menggunakan
format modern seperti WebP atau AVIF. - Gambar di bawah fold menggunakan
lazy loading. - Gambar hero atau gambar utama tidak boleh ditunda jika
menjadi elemen LCP. - Gunakan ukuran gambar responsif. - Jangan
menggunakan foto stok seolah-olah merupakan dokumentasi kegiatan asli. -
Jika menggunakan foto peserta, pastikan izin publikasi telah diperoleh.

Galeri dapat dikelompokkan berdasarkan kategori kegiatan, lokasi, atau
jenis peserta. Filter kategori boleh menggunakan JavaScript ringan dan
tidak membutuhkan database.

### FR-06 --- Blog

Blog menggunakan konten Markdown/MDX di repository. Fitur: - Daftar
artikel dengan pagination statis bila jumlah artikel banyak. - Kategori
atau tag yang relevan. - Gambar utama. - Judul, ringkasan, penulis,
tanggal terbit, dan tanggal pembaruan. - Daftar isi untuk artikel
panjang. - Internal link ke paket dan layanan yang relevan. - Artikel
terkait. - Breadcrumb. - CTA WhatsApp yang kontekstual. - Structured
data Article atau BlogPosting.

Setiap artikel wajib memiliki informasi yang bermanfaat, sumber yang
dapat dipertanggungjawabkan bila membuat klaim faktual, dan penulis atau
penanggung jawab editorial yang jelas.

### FR-07 --- WhatsApp CTA

Nomor tujuan: `081217366600`.

Gunakan format internasional pada URL WhatsApp: `6281217366600`.

Format dasar: `https://wa.me/6281217366600`

Format dengan pesan: `https://wa.me/6281217366600?text=...`

Pesan harus di-encode menggunakan `encodeURIComponent()` ketika URL
dibuat secara dinamis. Untuk tautan statis, pastikan karakter khusus
telah di-encode.

Contoh pesan: - Umum: "Halo, saya ingin bertanya tentang layanan
outbound di Batu Malang." - Paket: "Halo, saya tertarik dengan paket
\[NAMA PAKET\]. Mohon informasi detail dan penawarannya." - Gathering:
"Halo, saya ingin konsultasi kegiatan gathering untuk \[JUMLAH PESERTA\]
orang pada \[TANGGAL\]."

Aturan CTA: - Semua CTA penjualan dan konsultasi mengarah ke nomor
WhatsApp tersebut. - Tautan internal navigasi dan tautan informasional
tetap menuju halaman terkait; tidak perlu dipaksa menjadi WhatsApp. -
Gunakan `target="_blank"` dan `rel="noopener noreferrer"` pada tautan
eksternal yang membuka tab baru. - Tambahkan label aksesibel seperti
"Hubungi kami melalui WhatsApp". - Tombol floating WhatsApp boleh
digunakan, tetapi tidak menutupi konten, cookie notice, atau kontrol
penting pada mobile. - Jangan membuat klaim bahwa pesan telah terkirim.
Pengiriman tetap dilakukan oleh pengguna di aplikasi WhatsApp.

### FR-08 --- FAQ

FAQ berisi pertanyaan aktual dari calon pelanggan. Jawaban harus
ringkas, langsung, dan tidak kontradiktif dengan halaman paket atau
layanan.

FAQ dapat ditampilkan dengan accordion Bootstrap. Konten FAQ tetap
tersedia di HTML hasil render sehingga dapat dibaca tanpa JavaScript.

### FR-09 --- Footer

Footer memuat: - Nama brand. - Ringkasan singkat usaha. - Navigasi
utama. - Tautan paket dan layanan. - Kontak WhatsApp. - Alamat atau area
operasional jika sudah diverifikasi. - Jam operasional jika tersedia. -
Tautan kebijakan privasi. - Copyright tahun berjalan.

------------------------------------------------------------------------

## 6. Desain UI/UX

### 6.1 Arah visual

Tema visual: **Elegant Black Outdoor Experience**.

Kesan yang ingin dibangun: - Elegan. - Premium. - Tegas. - Modern. -
Profesional. - Dekat dengan alam dan aktivitas outdoor.

Tema hitam tidak boleh membuat teks sulit dibaca. Gunakan variasi warna
gelap dan aksen hangat agar hierarki visual jelas.

### 6.2 Palet warna

  Token                    Warna       Kegunaan
  ------------------------ ----------- ------------------------------
  `--color-bg`             `#090909`   Latar utama
  `--color-surface`        `#141414`   Kartu dan panel
  `--color-surface-2`      `#1D1D1D`   Hover dan section alternatif
  `--color-text`           `#F5F5F2`   Teks utama
  `--color-muted`          `#A7A7A0`   Teks sekunder
  `--color-border`         `#303030`   Border
  `--color-accent`         `#C8A96A`   Aksen emas
  `--color-accent-hover`   `#D9BD83`   Hover CTA
  `--color-success`        `#35A66F`   Status sukses seperlunya

Aksen emas digunakan secukupnya untuk CTA, garis dekoratif, ikon, atau
highlight. Jangan menjadikan semua elemen berwarna emas.

### 6.3 Tipografi

Rekomendasi: - Heading: `Manrope`, `Plus Jakarta Sans`, atau font
sans-serif modern. - Body: `Inter` atau system font. - Gunakan font
lokal/self-hosted bila memungkinkan untuk mengurangi ketergantungan
pihak ketiga. - Batasi variasi font weight. - Gunakan ukuran teks
responsif dengan `clamp()`.

### 6.4 Komponen visual

-   Navbar gelap dengan logo di kiri dan navigasi di kanan.
-   Hero dengan foto outdoor berkualitas tinggi dan overlay gelap.
-   Heading besar dan ringkas.
-   Tombol primer aksen emas.
-   Tombol sekunder outline.
-   Kartu paket dengan border halus dan hover sederhana.
-   Galeri dengan rasio gambar konsisten.
-   Section pembeda menggunakan variasi hitam dan charcoal.
-   Footer gelap dengan hierarki informasi yang jelas.

### 6.5 Layout dan responsivitas

-   Mobile-first.
-   Gunakan Bootstrap grid dan container.
-   Lebar konten artikel dibatasi agar nyaman dibaca.
-   Navigasi mobile mudah digunakan dengan satu tangan.
-   Tidak boleh ada horizontal overflow.
-   Tombol memiliki area sentuh yang memadai.
-   Kontras teks dan latar memenuhi WCAG AA sejauh memungkinkan.
-   Animasi tidak boleh menghambat aksesibilitas; hormati
    `prefers-reduced-motion`.

### 6.6 Gaya interaksi

-   Transisi sederhana sekitar 150--250 ms.
-   Hindari parallax berat dan animasi berlebihan.
-   Hindari video autoplay bersuara.
-   Gunakan hover dan focus state yang jelas.
-   Semua fungsi penting tetap dapat digunakan dengan keyboard.

------------------------------------------------------------------------

## 7. Arsitektur Teknologi

### 7.1 Stack

  Bagian               Teknologi
  -------------------- -----------------------------------------------
  Framework            Astro
  Bahasa               HTML, CSS, JavaScript
  Styling              Bootstrap 5 + CSS custom
  Konten blog          Markdown/MDX
  Data paket/layanan   File TypeScript/JSON atau content collections
  Rendering            Static Site Generation (SSG)
  Icon                 SVG inline atau library ringan
  Deployment           Static hosting
  Database             Tidak ada
  Backend              Tidak ada

### 7.2 Prinsip implementasi Astro

-   Gunakan Astro components untuk layout dan komponen halaman.
-   Gunakan SSG sebagai strategi default.
-   Jangan menambahkan adapter server jika tidak dibutuhkan.
-   Hindari hydration framework pada komponen yang dapat dibuat dengan
    HTML/CSS.
-   Gunakan directive `client:*` hanya jika ada kebutuhan interaksi
    nyata.
-   Render konten utama di server/build time agar HTML dapat dibaca
    crawler.
-   Gunakan `getCollection()` atau mekanisme content collections Astro
    untuk konten blog.
-   Gunakan data statis untuk paket, layanan, FAQ, dan galeri.

### 7.3 Struktur direktori yang disarankan

``` text
outbound-batu/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── og/
│   └── images/
│       ├── hero/
│       ├── packages/
│       ├── services/
│       └── gallery/
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── Breadcrumb.astro
│   │   ├── SeoHead.astro
│   │   ├── PackageCard.astro
│   │   ├── ServiceCard.astro
│   │   ├── GalleryGrid.astro
│   │   ├── FAQAccordion.astro
│   │   └── ArticleCard.astro
│   ├── content/
│   │   └── blog/
│   │       ├── panduan-outbound-batu.md
│   │       └── tips-team-building.md
│   ├── data/
│   │   ├── packages.ts
│   │   ├── services.ts
│   │   ├── gallery.ts
│   │   ├── faq.ts
│   │   └── site.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── tentang-kami.astro
│   │   ├── paket/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── layanan/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── galeri.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── kontak.astro
│   │   ├── faq.astro
│   │   ├── kebijakan-privasi.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── global.css
│   │   └── custom.css
│   └── utils/
│       ├── whatsapp.ts
│       ├── seo.ts
│       └── schema.ts
├── astro.config.mjs
├── package.json
└── README.md
```

Struktur dapat disesuaikan dengan versi Astro dan kebutuhan proyek.
Jangan membuat file atau komponen hanya demi mengikuti struktur jika
belum diperlukan.

### 7.4 Bootstrap

-   Gunakan Bootstrap 5.
-   Import hanya CSS/JavaScript Bootstrap yang benar-benar diperlukan.
-   Jika memakai accordion, offcanvas, atau dropdown, gunakan JavaScript
    Bootstrap sesuai kebutuhan.
-   Hindari memuat beberapa versi Bootstrap.
-   Gunakan CSS custom untuk identitas visual, bukan mengubah semua
    komponen Bootstrap secara tidak terkontrol.
-   Pastikan komponen Bootstrap tetap aksesibel.

### 7.5 Hosting dan deployment

Website dapat di-deploy ke layanan static hosting yang mendukung output
Astro, seperti Cloudflare Pages, Netlify, Vercel static output, atau
hosting statis lain.

Persyaratan: - Build command: `npm run build`. - Output directory:
`dist`. - HTTPS aktif. - Domain utama dan redirect domain alternatif
ditetapkan. - Cache aset statis diaktifkan. - File HTML memiliki cache
policy yang sesuai dengan platform. - Deployment dapat dilakukan setiap
kali repository diperbarui.

------------------------------------------------------------------------

## 8. Persyaratan SEO

SEO harus dibangun sebagai bagian dari arsitektur dan proses editorial,
bukan hanya memasang plugin atau menambahkan keyword.

### 8.1 SEO teknis

Wajib: - HTML semantik (`header`, `nav`, `main`, `section`, `article`,
`footer`). - Satu H1 utama yang menggambarkan topik halaman. - Hierarki
H2 dan H3 logis. - Title unik untuk setiap halaman. - Meta description
unik. - Canonical URL absolut. - Open Graph metadata. - Twitter/X card
metadata. - Sitemap XML otomatis. - Robots.txt. - Breadcrumb pada
halaman dalam. - URL bersih. - Internal link yang relevan. - Gambar
memiliki alt text. - HTTPS. - Halaman 404 dengan status yang benar. -
Tidak ada halaman staging yang terindeks. - Hindari duplicate content. -
Pastikan semua halaman penting dapat dijangkau melalui internal link.

### 8.2 SEO on-page

Setiap halaman harus memiliki: - Search intent yang jelas. - Fokus topik
utama. - Judul yang deskriptif dan menarik. - Intro yang langsung
menjawab kebutuhan pengunjung. - Subheading yang memudahkan
pemindaian. - Informasi spesifik dan dapat diverifikasi. - Internal link
ke halaman paket/layanan terkait. - CTA yang sesuai dengan konteks
halaman. - Konten yang tidak berulang antarhalaman.

Contoh target topik, bukan kewajiban memasukkan frasa secara berulang: -
Outbound Batu Malang. - Paket outbound di Batu. - Tempat kegiatan
outbound di Batu Malang. - Team building Batu. - Gathering perusahaan di
Batu. - Outbound untuk sekolah di Malang. - Family gathering Batu
Malang.

Keyword final harus ditentukan melalui riset SERP, kompetitor, dan
kebutuhan bisnis. Jangan menganggap daftar ini sebagai data volume
pencarian.

### 8.3 Contoh metadata

Beranda: - Title:
`Outbound Batu Malang | Paket Outbound, Team Building & Gathering` -
Description:
`Temukan pilihan kegiatan outbound, team building, dan gathering di Batu Malang. Konsultasikan kebutuhan kegiatan Anda melalui WhatsApp.`

Tentang Kami: - Title:
`Tentang Kami | Penyelenggara Outbound Batu Malang` - Description:
`Kenali penyelenggara, pendekatan layanan, dan pilihan kegiatan outbound di kawasan Batu dan Malang.`

Paket: - Title:
`Paket Outbound Batu Malang | Pilihan Kegiatan dan Penawaran` -
Description:
`Lihat pilihan paket outbound Batu Malang, aktivitas, fasilitas, dan konsultasikan kebutuhan kegiatan Anda.`

Contoh di atas harus disesuaikan dengan nama brand, layanan yang
benar-benar tersedia, dan konten final.

### 8.4 SEO gambar

-   Nama file deskriptif, misalnya `team-building-outbound-batu.webp`.
-   Alt text menjelaskan isi foto secara natural.
-   Hindari keyword stuffing di alt text.
-   Gunakan `width` dan `height` untuk mencegah layout shift.
-   Gunakan `srcset` atau fitur image optimization Astro.
-   Kompres ukuran file.
-   Gunakan `loading="lazy"` untuk gambar non-kritis.
-   Gunakan `fetchpriority="high"` hanya untuk gambar hero/LCP yang
    benar-benar prioritas.

### 8.5 Sitemap dan robots

Sitemap harus berisi URL canonical yang boleh diindeks. Halaman 404, URL
redirect, dan halaman non-index tidak dimasukkan.

Contoh `robots.txt`:

``` text
User-agent: *
Allow: /

Sitemap: https://DOMAIN-UTAMA/sitemap-index.xml
```

Ganti `DOMAIN-UTAMA` dengan domain produksi. Pastikan path sitemap
sesuai konfigurasi Astro yang digunakan.

### 8.6 Canonical dan indexability

-   Setiap halaman publik memiliki canonical ke URL finalnya sendiri.
-   Halaman yang identik atau sangat mirip harus dikonsolidasikan.
-   Halaman hasil filter yang tidak memiliki nilai pencarian tersendiri
    tidak perlu diindeks.
-   Jangan menggunakan `noindex` pada halaman utama yang ingin
    diranking.
-   Periksa hasil build untuk memastikan tidak ada canonical staging.

------------------------------------------------------------------------

## 9. AEO --- Answer Engine Optimization

AEO bertujuan membuat informasi website mudah dipahami dan dikutip oleh
sistem pencarian berbasis jawaban maupun asisten AI. Tidak ada markup
yang menjamin sebuah website akan dipilih sebagai jawaban.

Persyaratan: 1. Jawab pertanyaan inti secara langsung pada paragraf awal
halaman. 2. Gunakan heading berbentuk pertanyaan ketika sesuai dengan
kebutuhan pengguna. 3. Sediakan FAQ yang benar-benar ditanyakan
pelanggan. 4. Gunakan definisi singkat untuk istilah seperti outbound,
team building, gathering, dan fun games. 5. Tampilkan detail operasional
yang jelas: durasi, peserta, aktivitas, fasilitas, lokasi, dan ketentuan
jika datanya tersedia. 6. Gunakan tabel untuk membandingkan paket jika
membantu pembaca. 7. Hindari jawaban kabur seperti "harga terjangkau"
tanpa konteks. 8. Cantumkan tanggal pembaruan artikel bila relevan. 9.
Tampilkan identitas penulis atau penanggung jawab konten. 10. Gunakan
sumber tepercaya untuk klaim faktual.

### 9.1 Format konten jawaban

Contoh struktur: - Pertanyaan: "Apa itu outbound?" - Jawaban langsung:
definisi singkat. - Penjelasan: tujuan dan contoh kegiatan. - Informasi
praktis: siapa yang cocok mengikuti. - Tautan terkait: paket atau
layanan yang relevan.

### 9.2 FAQ dan structured data

FAQ harus terlihat oleh pengunjung dan isi markup harus sama dengan
konten yang terlihat. Jangan menambahkan FAQ schema untuk pertanyaan
yang tidak ditampilkan.

Google membatasi tampilan FAQ rich results untuk sebagian besar website.
FAQ tetap bermanfaat bagi pengguna dan pemahaman konten, tetapi jangan
menjanjikan rich result.

------------------------------------------------------------------------

## 10. GEO --- Generative Engine Optimization dan Local Entity Signals

Dalam PRD ini, GEO berarti mengoptimalkan kejelasan entitas dan
informasi agar mudah dipahami mesin pencari generatif serta sistem
pencarian berbasis lokasi. GEO bukan jaminan tampil di jawaban AI.

### 10.1 Identitas entitas bisnis

Informasi berikut harus konsisten di seluruh website: - Nama resmi
brand. - Jenis usaha. - Deskripsi bisnis. - Nomor WhatsApp. - URL
website. - Logo. - Alamat fisik jika benar-benar ada dan boleh
dipublikasikan. - Area layanan yang benar-benar dilayani. - Profil media
sosial resmi. - Jam operasional jika tersedia.

Jangan mengarang alamat kantor, koordinat, nomor telepon lain, akun
sosial, atau jam operasional.

### 10.2 Local SEO

-   Gunakan nama lokasi secara natural: Batu, Kota Batu, dan Malang
    sesuai cakupan layanan yang nyata.
-   Jelaskan area layanan secara spesifik.
-   Buat halaman lokasi khusus hanya jika ada layanan dan konten unik
    yang relevan di lokasi tersebut.
-   Cantumkan alamat dan peta hanya jika alamat benar-benar valid.
-   Buat atau optimalkan Google Business Profile jika bisnis memenuhi
    syarat.
-   Pastikan nama, alamat, dan nomor telepon konsisten di direktori
    bisnis yang digunakan.
-   Kumpulkan ulasan pelanggan asli dan minta izin sebelum
    mempublikasikannya.
-   Jangan membeli ulasan atau membuat testimoni fiktif.

### 10.3 Entity clarity

Website harus menjelaskan secara konsisten: - Siapa penyelenggaranya? -
Layanan apa yang disediakan? - Di wilayah mana layanan dilakukan? -
Siapa target pesertanya? - Bagaimana cara menghubungi penyelenggara? -
Apa bukti pengalaman atau dokumentasi yang tersedia?

### 10.4 Konten yang mudah dipahami mesin

-   Gunakan nama brand secara konsisten.
-   Hindari informasi bisnis yang berbeda antarhalaman.
-   Gunakan structured data yang sesuai dengan konten nyata.
-   Hubungkan halaman paket, layanan, artikel, dan organisasi melalui
    internal link.
-   Sertakan penulis dan sumber bila diperlukan.
-   Jangan menambahkan file atau markup khusus yang mengklaim dapat
    menjamin indexing oleh AI.

------------------------------------------------------------------------

## 11. Structured Data JSON-LD

Gunakan JSON-LD di dalam elemen `<script type="application/ld+json">`.
Data harus sesuai dengan informasi yang terlihat dan benar-benar dapat
diverifikasi.

### 11.1 Schema yang direkomendasikan

  -----------------------------------------------------------------------
  Halaman                             Schema
  ----------------------------------- -----------------------------------
  Seluruh website                     Organization atau LocalBusiness
                                      yang sesuai

  Seluruh website                     WebSite

  Beranda                             WebPage

  Halaman dalam                       WebPage

  Halaman dalam                       BreadcrumbList

  Paket                               Service atau Product hanya jika
                                      benar-benar merepresentasikan
                                      penawaran

  Layanan                             Service

  Artikel                             Article atau BlogPosting

  FAQ                                 FAQPage hanya jika sesuai pedoman
                                      dan isi terlihat

  Galeri                              ImageObject bila berguna dan
                                      datanya lengkap
  -----------------------------------------------------------------------

Jangan menambahkan semua jenis schema ke semua halaman. Pilih yang
paling sesuai dengan konten.

### 11.2 Organization / LocalBusiness

Pilih tipe paling spesifik yang benar-benar sesuai dengan bisnis.
`Organization` dapat digunakan jika tidak ada tipe LocalBusiness yang
cocok atau informasi lokasi fisik belum tersedia. Jangan menggunakan
alamat fiktif hanya agar dapat memakai LocalBusiness.

Contoh template:

``` html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://DOMAIN-UTAMA/#organization",
  "name": "NAMA BRAND",
  "url": "https://DOMAIN-UTAMA/",
  "logo": "https://DOMAIN-UTAMA/images/logo.png",
  "description": "Penyedia layanan outbound dan kegiatan kelompok di Batu dan Malang.",
  "telephone": "+6281217366600",
  "areaServed": [
    {
      "@type": "City",
      "name": "Kota Batu"
    },
    {
      "@type": "City",
      "name": "Malang"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6281217366600",
    "contactType": "customer service",
    "availableLanguage": ["Indonesian"]
  }
}
</script>
```

Ganti placeholder dengan data resmi. Hapus properti yang belum dapat
dibuktikan. Area layanan harus sesuai cakupan sebenarnya.

### 11.3 WebSite

``` html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://DOMAIN-UTAMA/#website",
  "url": "https://DOMAIN-UTAMA/",
  "name": "NAMA BRAND",
  "publisher": {
    "@id": "https://DOMAIN-UTAMA/#organization"
  },
  "inLanguage": "id-ID"
}
</script>
```

### 11.4 WebPage dan BreadcrumbList

Contoh breadcrumb:

``` html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": "https://DOMAIN-UTAMA/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Paket",
      "item": "https://DOMAIN-UTAMA/paket/"
    }
  ]
}
</script>
```

Setiap halaman harus menghasilkan breadcrumb yang sesuai dengan posisi
URL dan navigasi aktual.

### 11.5 Service

Contoh template:

``` html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Outbound Team Building",
  "serviceType": "Kegiatan outbound dan team building",
  "provider": {
    "@id": "https://DOMAIN-UTAMA/#organization"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Batu dan Malang"
  },
  "url": "https://DOMAIN-UTAMA/layanan/team-building/"
}
</script>
```

Gunakan hanya untuk layanan yang benar-benar ditawarkan.

### 11.6 Article / BlogPosting

``` html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "JUDUL ARTIKEL",
  "description": "RINGKASAN ARTIKEL",
  "image": ["https://DOMAIN-UTAMA/images/blog/GAMBAR.webp"],
  "datePublished": "2026-11-02",
  "dateModified": "2026-11-02",
  "author": {
    "@type": "Organization",
    "name": "NAMA BRAND"
  },
  "publisher": {
    "@id": "https://DOMAIN-UTAMA/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://DOMAIN-UTAMA/blog/SLUG-ARTIKEL/"
  },
  "inLanguage": "id-ID"
}
</script>
```

Tanggal, penulis, gambar, URL, dan isi harus berasal dari data artikel
yang nyata.

### 11.7 FAQPage

FAQPage hanya digunakan bila halaman benar-benar berisi daftar
pertanyaan dan jawaban yang terlihat. Terapkan sesuai pedoman mesin
pencari terkini dan jangan mengharapkan FAQ rich result untuk semua
website.

### 11.8 Implementasi teknis schema

-   Buat helper terpusat, misalnya `src/utils/schema.ts`.
-   Buat schema per tipe halaman.
-   Serialisasi objek dengan `JSON.stringify()`.
-   Pastikan karakter dan input aman saat dirender ke script.
-   Hindari schema duplikat dari beberapa komponen.
-   Gunakan `@id` yang stabil untuk entitas utama.
-   Pastikan URL absolut memakai domain produksi.
-   Validasi menggunakan Schema.org Validator dan Google Rich Results
    Test.
-   Jangan menandai rating, harga, ulasan, atau ketersediaan yang tidak
    benar.

------------------------------------------------------------------------

## 12. Strategi Konten dan Editorial

### 12.1 Halaman inti

Konten inti harus dibuat sebelum website diluncurkan: - Beranda. -
Tentang Kami. - Paket. - Detail paket yang benar-benar tersedia. -
Layanan. - Detail layanan yang benar-benar tersedia. - Galeri dengan
foto asli. - Kontak. - FAQ.

### 12.2 Rekomendasi topik blog awal

Daftar berikut adalah ide editorial, bukan klaim volume pencarian:

1.  Panduan Memilih Paket Outbound di Batu Malang.
2.  Manfaat Team Building untuk Kekompakan Tim Kerja.
3.  Ide Kegiatan Gathering Perusahaan di Batu.
4.  Perbedaan Outbound, Team Building, dan Fun Games.
5.  Tips Menyiapkan Kegiatan Outbound untuk Sekolah.
6.  Hal yang Perlu Ditanyakan Sebelum Memesan Paket Outbound.
7.  Contoh Rundown Kegiatan Outbound Satu Hari.
8.  Cara Menentukan Aktivitas Outbound Berdasarkan Jumlah Peserta.

### 12.3 Standar kualitas artikel

Setiap artikel: - Menjawab satu intent utama. - Memiliki judul yang
spesifik. - Menyediakan ringkasan yang menjelaskan manfaat artikel. -
Memiliki struktur heading logis. - Memberikan contoh atau langkah
praktis. - Menghindari pengulangan keyword yang tidak natural. -
Menyertakan internal link yang relevan. - Menampilkan tanggal terbit dan
pembaruan secara jujur. - Menggunakan gambar yang relevan dan memiliki
hak penggunaan. - Memiliki penulis atau editor yang bertanggung jawab.

### 12.4 Data yang harus dikonfirmasi pemilik bisnis

-   Nama brand.
-   Deskripsi resmi bisnis.
-   Tahun berdiri.
-   Alamat atau lokasi operasional.
-   Area layanan.
-   Daftar paket.
-   Harga atau kebijakan penawaran.
-   Durasi kegiatan.
-   Minimal dan maksimal peserta.
-   Fasilitas yang disediakan.
-   Aktivitas yang tersedia.
-   Standar keselamatan dan kualifikasi fasilitator.
-   Foto kegiatan.
-   Testimoni dan izin publikasi.
-   Logo dan akun media sosial resmi.
-   Jam operasional.

------------------------------------------------------------------------

## 13. Persyaratan Performa

Target internal yang disarankan: - Lighthouse Performance: 90+ pada
kondisi pengujian yang wajar. - Lighthouse SEO: 95+. - Lighthouse
Accessibility: 90+. - Lighthouse Best Practices: 90+.

Angka tersebut adalah target pengembangan, bukan jaminan hasil di semua
perangkat dan jaringan.

### 13.1 Core Web Vitals

Target pengalaman pengguna: - LCP: ≤ 2,5 detik. - INP: ≤ 200 ms. - CLS:
≤ 0,1.

Evaluasi dengan data lapangan bila tersedia, bukan hanya hasil simulasi
Lighthouse.

### 13.2 Teknik optimasi

-   Utamakan HTML statis hasil Astro.
-   Minimalkan JavaScript.
-   Hindari library besar yang tidak dibutuhkan.
-   Optimalkan gambar ke WebP/AVIF.
-   Tetapkan dimensi gambar.
-   Lazy load gambar non-kritis.
-   Preload font hanya jika benar-benar diperlukan.
-   Gunakan `font-display: swap`.
-   Self-host font jika layak.
-   Minifikasi CSS dan JS melalui build.
-   Aktifkan compression Brotli/Gzip di hosting.
-   Gunakan cache untuk aset dengan nama file ber-hash.
-   Hindari embed pihak ketiga yang berat di atas fold.
-   Gunakan poster image untuk video.

------------------------------------------------------------------------

## 14. Aksesibilitas dan Keamanan

### 14.1 Aksesibilitas

-   Semua gambar informatif memiliki alt text.
-   Gambar dekoratif menggunakan alt kosong.
-   Form atau kontrol memiliki label yang jelas jika kelak ada.
-   Navigasi dapat digunakan dengan keyboard.
-   Focus state terlihat.
-   Kontras warna memadai.
-   Heading berurutan.
-   Link memiliki tujuan yang jelas.
-   Tombol tidak hanya dibedakan dengan warna.
-   Gunakan `aria-expanded` dan atribut terkait untuk komponen
    interaktif.
-   Hormati `prefers-reduced-motion`.

### 14.2 Keamanan

-   Tidak menyimpan data sensitif karena tidak ada database.
-   Tidak menaruh secret/API key di kode frontend.
-   Hindari memasukkan HTML mentah dari sumber tidak tepercaya.
-   Perbarui dependency secara berkala.
-   Gunakan HTTPS.
-   Terapkan security headers melalui hosting bila tersedia.
-   Gunakan `rel="noopener noreferrer"` untuk tautan eksternal yang
    membuka tab baru.
-   Validasi konten Markdown/MDX dan sumber gambar.
-   Jangan membuat formulir yang seolah-olah mengirim data jika tidak
    ada sistem pemrosesan.

------------------------------------------------------------------------

## 15. Analitik dan Pengukuran

Analitik bersifat opsional dan harus mempertimbangkan privasi serta
ketentuan yang berlaku.

Metrik yang disarankan: - Pengunjung organik. - Klik CTA WhatsApp. -
Halaman masuk dari pencarian. - Halaman paket yang paling sering
dikunjungi. - Artikel yang menghasilkan kunjungan ke halaman layanan. -
Rasio klik CTA terhadap kunjungan halaman. - Core Web Vitals lapangan. -
Jumlah pertanyaan atau prospek yang masuk melalui WhatsApp, dicatat
secara manual oleh tim bila tidak ada integrasi.

Jika memakai Google Analytics, Google Tag Manager, atau alat analitik
lain: - Gunakan hanya jika diperlukan. - Dokumentasikan tujuan
pengumpulan data. - Pasang mekanisme persetujuan cookie bila
diwajibkan. - Jangan memasang script analitik berat tanpa kebutuhan. -
Kebijakan privasi harus menjelaskan layanan pihak ketiga yang digunakan.

------------------------------------------------------------------------

## 16. Kriteria Penerimaan (Acceptance Criteria)

### 16.1 Fungsi dan navigasi

-   [ ] Enam halaman utama tersedia.
-   [ ] Halaman pendukung yang disepakati tersedia.
-   [ ] Semua tautan internal menuju URL yang benar.
-   [ ] Semua CTA penjualan dan konsultasi mengarah ke WhatsApp
    `6281217366600`.
-   [ ] Pesan WhatsApp pada halaman paket menyebut nama paket yang
    tepat.
-   [ ] Menu desktop dan mobile berfungsi.
-   [ ] Halaman 404 tersedia.
-   [ ] Tidak ada tombol yang terlihat aktif tetapi tidak memiliki
    fungsi.

### 16.2 Konten

-   [ ] Informasi bisnis telah diverifikasi pemilik.
-   [ ] Paket dan layanan sesuai penawaran aktual.
-   [ ] Tidak ada harga, fasilitas, testimoni, atau klaim fiktif.
-   [ ] Galeri menggunakan aset yang memiliki izin.
-   [ ] Artikel memiliki metadata editorial.
-   [ ] FAQ terlihat dan jawabannya konsisten.

### 16.3 SEO

-   [ ] Setiap halaman memiliki title unik.
-   [ ] Setiap halaman memiliki meta description.
-   [ ] Canonical benar.
-   [ ] Hanya satu H1 utama per halaman.
-   [ ] Heading tersusun logis.
-   [ ] Sitemap dapat diakses.
-   [ ] Robots.txt dapat diakses.
-   [ ] Open Graph tersedia.
-   [ ] Alt text gambar relevan.
-   [ ] Internal link berfungsi.
-   [ ] Tidak ada halaman penting yang tidak sengaja `noindex`.
-   [ ] Structured data valid dan sesuai konten.
-   [ ] Tidak ada URL staging pada metadata produksi.

### 16.4 Performa dan tampilan

-   [ ] Build berhasil tanpa error.
-   [ ] Website dapat dimuat tanpa JavaScript untuk konten inti.
-   [ ] Tampilan mobile, tablet, dan desktop baik.
-   [ ] Tidak ada horizontal overflow.
-   [ ] Gambar telah dioptimalkan.
-   [ ] Tidak ada layout shift besar.
-   [ ] CTA tidak menutupi konten penting.
-   [ ] Kontras dan focus state memadai.

### 16.5 Pengujian

-   [ ] Uji Chrome, Firefox, Safari, dan Edge sejauh tersedia.
-   [ ] Uji perangkat mobile Android dan iOS.
-   [ ] Uji semua link WhatsApp.
-   [ ] Uji sitemap dan robots.
-   [ ] Uji JSON-LD dengan validator.
-   [ ] Uji Lighthouse.
-   [ ] Uji halaman 404.
-   [ ] Uji link gambar dan aset.
-   [ ] Uji build production, bukan hanya development server.

------------------------------------------------------------------------

## 17. Tahapan Pengerjaan

### Fase 1 --- Discovery dan persiapan konten

-   Konfirmasi nama brand dan identitas bisnis.
-   Kumpulkan daftar paket dan layanan.
-   Verifikasi area layanan dan informasi kontak.
-   Kumpulkan foto, logo, dan testimoni berizin.
-   Tentukan domain utama.
-   Riset intent pencarian dan kompetitor.

**Output:** brief bisnis, daftar konten, dan sitemap final.

### Fase 2 --- Design system dan wireframe

-   Tetapkan palet hitam dan aksen emas.
-   Tentukan tipografi.
-   Buat komponen dasar.
-   Rancang wireframe desktop dan mobile.
-   Tentukan penempatan CTA.

**Output:** panduan visual dan rancangan halaman.

### Fase 3 --- Development

-   Setup Astro.
-   Setup Bootstrap.
-   Buat layout dan komponen reusable.
-   Buat seluruh halaman.
-   Buat data statis dan content collections.
-   Implementasi WhatsApp CTA.
-   Implementasi galeri dan blog.

**Output:** website berfungsi pada environment development.

### Fase 4 --- SEO, AEO, GEO

-   Implementasi metadata.
-   Implementasi canonical dan Open Graph.
-   Implementasi sitemap dan robots.
-   Implementasi JSON-LD.
-   Perbaiki struktur konten dan internal link.
-   Implementasi breadcrumb.
-   Validasi entitas dan informasi lokal.

**Output:** website siap audit SEO.

### Fase 5 --- QA dan optimasi

-   Uji semua halaman.
-   Uji responsive.
-   Uji aksesibilitas.
-   Uji link WhatsApp.
-   Audit performa.
-   Validasi schema.
-   Perbaiki error dan broken link.

**Output:** release candidate.

### Fase 6 --- Deployment

-   Hubungkan repository ke static hosting.
-   Atur domain dan HTTPS.
-   Konfigurasi redirect.
-   Uji URL produksi.
-   Submit sitemap ke Google Search Console.
-   Pasang analitik bila disetujui.
-   Dokumentasikan prosedur pembaruan konten.

**Output:** website live dan dokumentasi operasional.

------------------------------------------------------------------------

## 18. Risiko dan Mitigasi

  -----------------------------------------------------------------------
  Risiko                  Dampak                  Mitigasi
  ----------------------- ----------------------- -----------------------
  Informasi paket belum   Halaman tidak           Gunakan placeholder
  lengkap                 meyakinkan              internal dan minta
                                                  konfirmasi sebelum
                                                  publikasi

  Foto tidak tersedia     Galeri kurang kuat      Jadwalkan dokumentasi
                                                  asli; jangan mengaku
                                                  foto stok sebagai
                                                  dokumentasi

  Konten terlalu tipis    SEO lemah               Buat konten berdasarkan
                                                  kebutuhan pengguna dan
                                                  pengalaman nyata

  Terlalu banyak          Performa menurun        Gunakan Astro
  JavaScript                                      static-first dan
                                                  progressive enhancement

  Schema tidak sesuai     Informasi terstruktur   Generate dari data
                          menyesatkan             aktual dan validasi

  Informasi lokasi tidak  Local SEO terganggu     Tetapkan satu sumber
  konsisten                                       data bisnis

  CTA mengganggu mobile   UX menurun              Uji floating CTA pada
                                                  beberapa ukuran layar

  Perubahan konten sulit  Proses update lambat    Dokumentasikan format
                                                  file dan prosedur build

  Klaim berlebihan        Kepercayaan dan         Wajib verifikasi klaim
                          reputasi turun          sebelum publikasi
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 19. Asumsi dan Keputusan yang Masih Harus Dikonfirmasi

PRD ini menggunakan asumsi berikut: 1. Website berbahasa Indonesia. 2.
Website bersifat company profile dan lead generation. 3. Tidak ada
database maupun backend. 4. WhatsApp merupakan kanal konversi utama. 5.
Tema visual dominan hitam dengan aksen emas. 6. Lokasi pemasaran utama
adalah Batu dan Malang. 7. Harga paket dapat ditampilkan jika pemilik
bisnis memberikan data yang valid; jika tidak, gunakan CTA untuk meminta
penawaran. 8. Konten blog disimpan di repository. 9. Website akan
menggunakan domain milik pemilik bisnis.

Hal yang harus dikonfirmasi sebelum development final: - Nama brand dan
logo. - Domain. - Alamat resmi atau apakah bisnis hanya melayani di
lokasi pelanggan/venue mitra. - Daftar paket dan harga. - Daftar layanan
aktual. - Durasi, kapasitas, fasilitas, dan batasan tiap paket. - Foto
dokumentasi dan izin publikasi. - Testimoni yang dapat diverifikasi. -
Akun media sosial resmi. - Jam operasional. - Apakah perlu halaman
khusus untuk lokasi tertentu.

------------------------------------------------------------------------

## 20. Definisi Selesai (Definition of Done)

Proyek dianggap selesai jika: - Seluruh halaman yang disepakati sudah
dibuat. - Desain hitam elegan konsisten di desktop dan mobile. - Konten
utama telah diverifikasi pemilik bisnis. - Semua CTA konversi mengarah
ke nomor WhatsApp yang benar. - Website dapat dibangun menjadi static
output tanpa database. - SEO teknis dan metadata terpasang. - AEO dan
GEO diterapkan melalui kualitas jawaban, konsistensi entitas, dan
informasi lokal. - JSON-LD sesuai tipe konten dan valid. - Sitemap dan
robots aktif. - Performa, aksesibilitas, dan responsivitas telah
diuji. - Tidak ada error kritis atau tautan rusak. - Dokumentasi
instalasi, build, deploy, dan update konten tersedia.

------------------------------------------------------------------------

## 21. Referensi Teknis Resmi

Gunakan dokumentasi resmi terbaru ketika implementasi: - Astro:
https://docs.astro.build/ - Astro Content Collections:
https://docs.astro.build/en/guides/content-collections/ - Bootstrap:
https://getbootstrap.com/docs/ - Google Search Central:
https://developers.google.com/search/docs - Google Search structured
data:
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data -
Schema.org: https://schema.org/ - Core Web Vitals:
https://web.dev/articles/vitals - WCAG:
https://www.w3.org/WAI/standards-guidelines/wcag/

------------------------------------------------------------------------

## 22. Catatan Implementasi untuk Developer

1.  Jangan mengisi placeholder seperti `DOMAIN-UTAMA`, `NAMA BRAND`,
    harga, alamat, atau testimoni dengan data rekaan.
2.  Simpan nomor WhatsApp di satu konfigurasi terpusat agar mudah
    diperbarui.
3.  Buat komponen SEO yang menerima title, description, canonical,
    image, dan schema per halaman.
4.  Pastikan setiap halaman memiliki metadata sendiri.
5.  Hindari menaruh seluruh konten website di satu file besar.
6.  Gunakan komponen reusable tanpa membuat abstraksi berlebihan.
7.  Semua konten penting harus sudah ada di HTML hasil build.
8.  Jangan menambahkan database, API backend, atau fitur booking dinamis
    dalam ruang lingkup awal.
9.  Jangan menyebut website "SEO pasti nomor satu", "pasti masuk AI",
    atau klaim hasil yang tidak dapat dijamin.
10. Prioritaskan akurasi informasi bisnis, pengalaman pengguna, dan
    kualitas konten di atas jumlah keyword.

**Akhir dokumen PRD --- Website Outbound Batu Malang.**
