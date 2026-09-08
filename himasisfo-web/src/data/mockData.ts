import type { News, GalleryItem, Aspiration, Agenda, AgendaReport, FinancialReport, BugReport, ImportantLink, SiteSettings, StructureMember, Department } from '../types';

export const mockSiteSettings: SiteSettings = {
  siteName: 'HIMASISFO',
  chairmanName: 'Nama Ketua',
  chairmanMessage: 'Selamat datang di portal resmi HIMASISFO. Bersama kami berkomitmen untuk membangun generasi mahasiswa Sistem Informasi yang unggul, inovatif, dan berdaya saing tinggi.',
  visi: 'Menjadi himpunan mahasiswa yang profesional, inovatif, dan berkontribusi nyata bagi pengembangan ilmu sistem informasi serta masyarakat.',
  misi: [
    'Mengembangkan kompetensi akademik dan non-akademik anggota.',
    'Membangun jaringan kemitraan dengan industri dan institusi.',
    'Mendorong riset dan inovasi di bidang teknologi informasi.',
    'Menjadi wadah aspirasi dan pengembangan karakter mahasiswa.',
  ],
  aboutText: 'HIMASISFO (Himpunan Mahasiswa Sistem Informasi) adalah organisasi kemahasiswaan yang menaungi mahasiswa Program Studi Sistem Informasi. Didirikan dengan semangat kolaborasi dan inovasi.',
  contactEmail: 'himasisfo@kampus.ac.id',
  socialMedia: {
    instagram: 'https://instagram.com/himasisfo',
    twitter: 'https://twitter.com/himasisfo',
    youtube: 'https://youtube.com/@himasisfo',
  },
};

export const mockDepartments: Department[] = [
  { id: 'psdm', name: 'PSDM', description: 'Departemen Pengembangan Sumber Daya Manusia bertanggung jawab atas peningkatan kualitas, karakter, dan kompetensi seluruh anggota himpunan.', type: 'departemen' },
  { id: 'adkwu', name: 'ADKWU', description: 'Departemen Administrasi, Keuangan, dan Kewirausahaan mengelola tata usaha, sirkulasi finansial, serta menumbuhkan jiwa wirausaha mahasiswa.', type: 'departemen' },
  { id: 'medinfo', name: 'MEDINFO', description: 'Departemen Media dan Informasi menjadi pusat komunikasi, publikasi, dan pengelolaan citra positif himpunan di mata publik.', type: 'departemen' },
  { id: 'kaderisasi', name: 'Kaderisasi', description: 'Bertanggung jawab dalam proses rekrutmen, pembinaan kader baru, serta menjaga solidaritas dan regenerasi kepengurusan.', type: 'divisi', parentId: 'psdm' },
  { id: 'kompetensi', name: 'Kompetensi', description: 'Fokus pada peningkatan kemampuan akademik dan hard-skill mahasiswa melalui berbagai pelatihan, workshop, dan mentoring.', type: 'divisi', parentId: 'psdm' },
  { id: 'ristek', name: 'Ristek', description: 'Mewadahi minat mahasiswa dalam bidang Riset dan Teknologi, serta mendorong inovasi dan kompetisi IT.', type: 'divisi', parentId: 'psdm' },
  { id: 'kesekretariatan', name: 'Kesekretariatan', description: 'Mengelola segala urusan administrasi, persuratan, pengarsipan, dan inventaris kesekretariatan himpunan.', type: 'divisi', parentId: 'adkwu' },
  { id: 'kewirausahaan', name: 'Kewirausahaan', description: 'Mencari peluang pendanaan mandiri untuk himpunan melalui program bisnis, merchandise, dan kemitraan strategis.', type: 'divisi', parentId: 'adkwu' },
  { id: 'humas_kemitraan', name: 'Humas & Kemitraan', description: 'Menjalin relasi dan kerja sama dengan pihak eksternal seperti alumni, birokrat kampus, instansi, dan himpunan lain.', type: 'divisi', parentId: 'medinfo' },
  { id: 'publikasi_dok', name: 'Publikasi & Dokumentasi', description: 'Mengelola media sosial, membuat desain visual, serta mendokumentasikan seluruh kegiatan himpunan.', type: 'divisi', parentId: 'medinfo' },
];

export const mockMembers: StructureMember[] = [
  { id: 'm1', name: 'Nama Ketua', position: 'Ketua HIMASISFO', departmentId: 'bph' },
  { id: 'm2', name: 'Nama Wakil Ketua', position: 'Wakil Ketua HIMASISFO', departmentId: 'bph' },
  { id: 'm3', name: 'Nama Sekretaris', position: 'Sekretaris', departmentId: 'bph' },
  { id: 'm4', name: 'Nama Bendahara', position: 'Bendahara', departmentId: 'bph' },
  { id: 'm5', name: 'Nama Kadep PSDM', position: 'Kepala Departemen PSDM', departmentId: 'psdm' },
  { id: 'm6', name: 'Nama Kadep ADKWU', position: 'Kepala Departemen ADKWU', departmentId: 'adkwu' },
  { id: 'm7', name: 'Nama Kadep MEDINFO', position: 'Kepala Departemen MEDINFO', departmentId: 'medinfo' },
  { id: 'm8', name: 'Nama Kadiv Kaderisasi', position: 'Kepala Divisi Kaderisasi', departmentId: 'kaderisasi' },
  { id: 'm9', name: 'Nama Kadiv Kompetensi', position: 'Kepala Divisi Kompetensi', departmentId: 'kompetensi' },
  { id: 'm10', name: 'Nama Kadiv Ristek', position: 'Kepala Divisi Ristek', departmentId: 'ristek' },
  { id: 'm11', name: 'Nama Kadiv Kesekretariatan', position: 'Kepala Divisi Kesekretariatan', departmentId: 'kesekretariatan' },
  { id: 'm12', name: 'Nama Kadiv Kewirausahaan', position: 'Kepala Divisi Kewirausahaan', departmentId: 'kewirausahaan' },
  { id: 'm13', name: 'Nama Kadiv Humas', position: 'Kepala Divisi Humas & Kemitraan', departmentId: 'humas_kemitraan' },
  { id: 'm14', name: 'Nama Kadiv Publikasi', position: 'Kepala Divisi Publikasi & Dokumentasi', departmentId: 'publikasi_dok' },
];

export const mockNews: News[] = [
  {
    id: 'n1', title: 'Seminar Nasional Teknologi Informasi & Bisnis Digital 2025',
    content: '<p>HIMASISFO dengan bangga mengumumkan pelaksanaan Seminar Nasional Teknologi Informasi dan Bisnis Digital 2025. Acara ini menghadirkan pembicara dari berbagai perusahaan teknologi terkemuka di Indonesia.</p><p>Seminar akan membahas tren terkini dalam dunia teknologi informasi, transformasi digital bisnis, dan peluang karir di era revolusi industri 4.0.</p>',
    excerpt: 'Pendaftaran untuk seminar nasional tahunan telah dibuka. Dapatkan insight langsung dari praktisi industri tech terkemuka.',
    category: 'Acara', author: 'u1', authorName: 'Kadiv Humas', status: 'published',
    createdAt: new Date('2025-04-12'), publishedAt: new Date('2025-04-12'),
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    id: 'n2', title: 'Open Recruitment Pengurus HIMASISFO Periode 2025/2026',
    content: '<p>HIMASISFO membuka kesempatan bagi mahasiswa Sistem Informasi untuk bergabung menjadi pengurus periode 2025/2026. Ini adalah kesempatan emas untuk mengembangkan diri dan berkontribusi nyata bagi organisasi.</p>',
    excerpt: 'Bergabunglah menjadi bagian dari kepengurusan HIMASISFO. Daftarkan dirimu dan kembangkan potensi leadership.',
    category: 'Organisasi', author: 'u1', authorName: 'Kadiv Humas', status: 'published',
    createdAt: new Date('2025-04-05'), publishedAt: new Date('2025-04-05'),
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    id: 'n3', title: 'Pelatihan Web Development Intensif Batch 3',
    content: '<p>Divisi Kompetensi HIMASISFO kembali menghadirkan pelatihan Web Development Intensif Batch 3. Program ini dirancang untuk mahasiswa yang ingin mendalami pengembangan web modern.</p>',
    excerpt: 'Tingkatkan skill coding kamu melalui pelatihan web development intensif selama 4 minggu bersama mentor berpengalaman.',
    category: 'Akademik', author: 'u1', authorName: 'Kadiv Publikasi', status: 'published',
    createdAt: new Date('2025-03-28'), publishedAt: new Date('2025-03-28'),
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
  },
  {
    id: 'n4', title: 'Kunjungan Industri ke PT. Teknologi Nusantara',
    content: '<p>HIMASISFO mengadakan kunjungan industri ke PT. Teknologi Nusantara sebagai bagian dari program pengembangan wawasan industri bagi mahasiswa Sistem Informasi.</p>',
    excerpt: 'Kunjungan industri ke salah satu perusahaan teknologi terkemuka untuk menambah wawasan dunia kerja.',
    category: 'Kegiatan', author: 'u1', authorName: 'Kadiv Humas', status: 'published',
    createdAt: new Date('2025-03-15'), publishedAt: new Date('2025-03-15'),
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
];

export const mockGallery: GalleryItem[] = [
  { id: 'g1', imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', caption: 'Seminar Nasional TI 2025', category: 'kegiatan', uploadedBy: 'u1', uploadDate: new Date('2025-04-12') },
  { id: 'g2', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', caption: 'Open Recruitment 2025', category: 'kegiatan', uploadedBy: 'u1', uploadDate: new Date('2025-04-05') },
  { id: 'g3', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', caption: 'Pelatihan Web Dev Batch 3', category: 'kegiatan', uploadedBy: 'u1', uploadDate: new Date('2025-03-28') },
  { id: 'g4', imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80', caption: 'Juara 1 Hackathon Regional', category: 'prestasi', uploadedBy: 'u1', uploadDate: new Date('2025-03-20') },
  { id: 'g5', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', caption: 'Best Paper Award Konferensi SI', category: 'prestasi', uploadedBy: 'u1', uploadDate: new Date('2025-03-10') },
  { id: 'g6', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', caption: 'Kunjungan Industri', category: 'kegiatan', uploadedBy: 'u1', uploadDate: new Date('2025-03-15') },
];

export const mockAspirations: Aspiration[] = [
  { id: 'a1', senderName: 'Mahasiswa A', email: 'a@kampus.ac.id', category: 'Akademik', message: 'Mohon diadakan lebih banyak workshop sertifikasi internasional seperti AWS atau Google Cloud.', status: 'baru', submittedAt: new Date('2025-04-10') },
  { id: 'a2', senderName: 'Mahasiswa B', email: 'b@kampus.ac.id', category: 'Fasilitas', message: 'Ruang sekretariat HIMASISFO kurang nyaman. Perlu ada AC dan meja kerja yang lebih baik.', status: 'diproses', submittedAt: new Date('2025-04-08') },
  { id: 'a3', senderName: 'Mahasiswa C', email: 'c@kampus.ac.id', category: 'Kegiatan', message: 'Usul untuk ada kegiatan mentoring dengan alumni yang sudah bekerja di perusahaan tech.', status: 'selesai', submittedAt: new Date('2025-04-01') },
];

export const mockAgenda: Agenda[] = [
  { id: 'ag1', title: 'Workshop UI/UX Design Thinking', description: 'Workshop intensif selama 2 hari', eventDate: new Date('2025-04-20'), unitType: 'divisi', unitId: 'kompetensi', unitName: 'Kompetensi', pic: 'Nama Kadiv Kompetensi', status: 'published', createdBy: 'u1', createdAt: new Date('2025-04-01') },
  { id: 'ag2', title: 'Rapat Koordinasi Bulanan', description: 'Rapat koordinasi semua divisi', eventDate: new Date('2025-04-15'), unitType: 'departemen', unitId: 'psdm', unitName: 'PSDM', pic: 'Nama Kadep PSDM', status: 'reported', createdBy: 'u2', createdAt: new Date('2025-03-30') },
  { id: 'ag3', title: 'Pelatihan Kepemimpinan Kaderisasi', description: 'Program kaderisasi anggota baru', eventDate: new Date('2025-05-01'), unitType: 'divisi', unitId: 'kaderisasi', unitName: 'Kaderisasi', pic: 'Nama Kadiv Kaderisasi', status: 'draft', createdBy: 'u3', createdAt: new Date('2025-04-05') },
  { id: 'ag4', title: 'Bazaar Kewirausahaan HIMASISFO', description: 'Event bazaar tahunan', eventDate: new Date('2025-05-10'), unitType: 'divisi', unitId: 'kewirausahaan', unitName: 'Kewirausahaan', pic: 'Nama Kadiv Kewirausahaan', status: 'published', createdBy: 'u4', createdAt: new Date('2025-04-08') },
];

export const mockAgendaReports: AgendaReport[] = [
  { id: 'ar1', agendaId: 'ag2', agendaTitle: 'Rapat Koordinasi Bulanan', summary: 'Rapat berjalan lancar dihadiri semua kadiv', results: 'Disepakati program kerja kuartal 2 dan pembagian tugas antar divisi.', obstacles: 'Beberapa kadiv hadir terlambat karena jadwal kuliah bentrok.', documentationUrls: [], createdAt: new Date('2025-04-16'), createdBy: 'u2', createdByName: 'Nama Sekretaris' },
];

export const mockFinancialReports: FinancialReport[] = [
  { id: 'f1', month: 3, year: 2025, income: 5000000, expense: 3200000, balance: 1800000, notes: 'Pemasukan dari iuran anggota dan sponsor seminar.', createdBy: 'u1', createdByName: 'Nama Bendahara', createdAt: new Date('2025-04-01') },
  { id: 'f2', month: 4, year: 2025, income: 3500000, expense: 2100000, balance: 1400000, notes: 'Pengeluaran untuk keperluan open recruitment.', createdBy: 'u1', createdByName: 'Nama Bendahara', createdAt: new Date('2025-05-01') },
];

export const mockBugReports: BugReport[] = [
  { id: 'b1', reporterName: 'Admin', description: 'Halaman galeri lambat loading saat lebih dari 50 foto', severity: 'sedang', status: 'dalam_proses', reportedAt: new Date('2025-04-10') },
  { id: 'b2', reporterName: 'User', description: 'Form aspirasi tidak menampilkan pesan sukses', severity: 'ringan', status: 'baru', reportedAt: new Date('2025-04-12') },
];

export const mockImportantLinks: ImportantLink[] = [
  { id: 'l1', title: 'Portal Akademik Kampus', url: '#', description: 'Sistem informasi akademik mahasiswa', icon: 'school', category: 'Akademik', order: 1 },
  { id: 'l2', title: 'Google Drive HIMASISFO', url: '#', description: 'Dokumen dan file organisasi', icon: 'folder_open', category: 'Dokumen', order: 2 },
  { id: 'l3', title: 'Instagram HIMASISFO', url: '#', description: 'Media sosial resmi HIMASISFO', icon: 'photo_camera', category: 'Sosial Media', order: 3 },
  { id: 'l4', title: 'YouTube Channel', url: '#', description: 'Video kegiatan dan dokumentasi', icon: 'play_circle', category: 'Sosial Media', order: 4 },
  { id: 'l5', title: 'Form Aspirasi', url: '#', description: 'Sampaikan aspirasi kamu', icon: 'forum', category: 'Layanan', order: 5 },
  { id: 'l6', title: 'Modul Kuliah', url: '#', description: 'Kumpulan modul dan materi kuliah', icon: 'menu_book', category: 'Akademik', order: 6 },
];
