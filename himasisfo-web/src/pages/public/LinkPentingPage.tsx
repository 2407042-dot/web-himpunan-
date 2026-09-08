export default function LinkPentingPage() {
  const links = [
    { title: 'Buku Panduan Akademik', desc: 'Panduan lengkap kurikulum dan aturan akademik', url: '#', icon: 'menu_book' },
    { title: 'Format Surat Mahasiswa', desc: 'Template surat izin, keterangan aktif, dll', url: '#', icon: 'description' },
    { title: 'Sistem Informasi Akademik', desc: 'Portal akademik universitas', url: '#', icon: 'language' },
    { title: 'Layanan E-Library', desc: 'Akses perpustakaan digital', url: '#', icon: 'local_library' },
    { title: 'Form Pendaftaran Lomba', desc: 'Borang partisipasi kompetisi nasional', url: '#', icon: 'emoji_events' },
    { title: 'Grup Diskusi Angkatan', desc: 'Tautan undangan grup komunikasi', url: '#', icon: 'forum' },
  ];

  return (
    <div className="bg-[#131313] min-h-screen text-[#e5e2e1] selection:bg-[#800000] selection:text-white pt-32 pb-24 px-4 md:px-16 overflow-x-hidden">
      <style>{`
        .glass-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
        }
        .glass-card:hover {
            box-shadow: 0 0 20px rgba(128, 0, 0, 0.3);
            border-color: rgba(128, 0, 0, 0.5);
            transform: translateY(-5px);
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-white mb-4 leading-tight">
            Direktori <span className="text-[#ffb4a8]">Link Penting</span>
          </h1>
          <p className="font-sans text-lg text-[#e2bfb9] max-w-2xl">
            Kumpulan tautan cepat untuk mengakses berbagai layanan, dokumen, dan sistem informasi krusial bagi mahasiswa.
          </p>
        </header>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-6 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-lg bg-[#201f1f] border border-white/10 flex items-center justify-center mb-4 group-hover:bg-[#800000] transition-colors duration-300">
                <span className="material-symbols-outlined text-[#e5e2e1] group-hover:text-white transition-colors">{link.icon}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#ffb4a8] transition-colors">{link.title}</h3>
              <p className="font-sans text-sm text-[#e2bfb9] mb-6 flex-1">{link.desc}</p>
              
              <div className="w-full flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <span className="font-sans text-xs font-semibold text-[#a6a7a8]">Akses Tautan</span>
                <span className="material-symbols-outlined text-[#ffb4a8] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
