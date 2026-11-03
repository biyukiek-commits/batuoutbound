export interface GalleryItem {
  id: string;
  title: string;
  category: "team-building" | "gathering" | "rafting" | "adventure";
  categoryLabel: string;
  location: string;
  image: string;
  altText: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sinergi Tim Dinamika Kolaborasi",
    category: "team-building",
    categoryLabel: "Team Building",
    location: "Coban Rondo Pine Forest, Kota Batu",
    image: "/images/gallery/team-building-hutan-pinus.webp",
    altText: "Aktivitas games outbound sinergi kelompok di bawah naungan pohon pinus sejuk Coban Rondo Kota Batu",
    caption: "Simulasi games kerjasama tim untuk memperkuat komunikasi dan saling percaya antar karyawan."
  },
  {
    id: "gal-2",
    title: "Fun Games & Ice Breaking Ceria",
    category: "gathering",
    categoryLabel: "Gathering",
    location: "Kusuma Agrowisata Ground, Batu",
    image: "/images/gallery/fun-games-ceria.webp",
    altText: "Ratusan peserta gathering corporate tertawa ceria saat sesi ice breaking dan yel-yel di Batu",
    caption: "Mencairkan suasana dan menumbuhkan antusiasme positif sebelum masuk ke materi utama kegiatan."
  },
  {
    id: "gal-3",
    title: "Arung Jeram Arus Kaliwatu Batu",
    category: "rafting",
    categoryLabel: "Rafting Adventure",
    location: "Sungai Kaliwatu, Bumiaji, Kota Batu",
    image: "/images/gallery/rafting-kaliwatu.webp",
    altText: "Perahu arung jeram melintasi jeram berbatu alami di aliran sungai Kaliwatu Kota Batu",
    caption: "Uji adrenalin bersama menyusuri aliran sungai alami dengan pemandangan tebing pegunungan hijau."
  },
  {
    id: "gal-4",
    title: "Simulasi Problem Solving Games",
    category: "team-building",
    categoryLabel: "Team Building",
    location: "Songgoriti Outbound Park, Batu",
    image: "/images/gallery/problem-solving-group.webp",
    altText: "Kelompok peserta berdiskusi merancang strategi menyelesaikan tantangan pipa bocor outbound",
    caption: "Melatih kepemimpinan kolektif, pembagian peran, dan ketenangan mengeksekusi strategi."
  },
  {
    id: "gal-5",
    title: "Taktikal Paintball Wargame di Hutan",
    category: "adventure",
    categoryLabel: "Adventure",
    location: "Hutan Pinus Pujon, Malang Raya",
    image: "/images/gallery/paintball-tactical.webp",
    altText: "Peserta mengenakan seragam loreng dan goggle pengaman saat bertempur taktis di arena paintball Batu",
    caption: "Adu strategi, kecepatan koordinasi regu, dan fokus dalam simulasi tempur eliminasi."
  },
  {
    id: "gal-6",
    title: "Malam Keakraban & Api Unggun Hangat",
    category: "gathering",
    categoryLabel: "Gathering",
    location: "Resort Pegunungan Bumiaji, Batu",
    image: "/images/gallery/api-unggun-gathering.webp",
    altText: "Suasana hangat melingkar di sekeliling api unggun saat malam keakraban gathering 2D1N di Batu",
    caption: "Momen intim refleksi diri, berbagi cerita, dan menyatukan tekad bersama di bawah langit malam sejuk."
  }
];

