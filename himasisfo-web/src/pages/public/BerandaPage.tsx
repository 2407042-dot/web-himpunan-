import { Link } from 'react-router-dom';
import { mockNews, mockSiteSettings } from '../../data/mockData';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function BerandaPage() {
  const s = mockSiteSettings;
  const published = mockNews.filter(n => n.status === 'published').slice(0, 3);

  return (
    <div className="bg-[#131313] min-h-screen text-[#e5e2e1] selection:bg-[#800000] selection:text-white overflow-x-hidden">
      <style>{`
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }
        .glass-card:hover {
            box-shadow: 0 0 20px rgba(128, 0, 0, 0.3);
            border-color: rgba(128, 0, 0, 0.5);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-4 md:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/80 via-[#131313]/60 to-[#131313] z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#800000]/20 via-[#131313]/0 to-[#131313]/0 z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-6 pt-12 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel w-fit border-[#800000]/30">
              <span className="w-2 h-2 rounded-full bg-[#ffb4a8] animate-pulse"></span>
              <span className="font-sans text-sm font-semibold text-[#ffb4a8] tracking-widest uppercase">Portal Digital Resmi</span>
            </div>
            <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-white leading-[1.1]">
              Sinergi Teknologi,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb4a8] to-[#800000]">Inovasi Mahasiswa.</span>
            </h1>
            <p className="font-sans text-lg text-[#e2bfb9] max-w-2xl leading-relaxed">
              {s.chairmanMessage}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/layanan/administrasi" className="bg-[#800000] text-white px-8 py-4 rounded-lg hover:bg-[#b22b1d] transition-colors text-center flex items-center justify-center gap-2 font-semibold group shadow-[0_0_15px_rgba(128,0,0,0.5)] hover:shadow-[0_0_25px_rgba(178,43,29,0.7)]">
                Akses Layanan
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/profil" className="glass-panel text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-center border-white/20 font-semibold">
                Profil Himpunan
              </Link>
            </div>
          </div>
          
          {/* Hero Decorative Element (Bento-style preview) */}
          <div className="col-span-1 lg:col-span-4 hidden lg:flex flex-col gap-4">
            <div className="glass-card p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-[#ffb4a8]">auto_awesome</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#ffb4a8] mb-2">Visi Kami</h3>
              <p className="font-sans text-[#e2bfb9]">{s.visi}</p>
            </div>
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-[#800000]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-sans text-sm text-white font-semibold uppercase tracking-wider">Statistik Pengunjung</h3>
                <span className="material-symbols-outlined text-[#800000]">monitoring</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-display font-extrabold text-[40px] leading-none text-[#ffb4a8]">1.2k+</span>
                <span className="font-sans text-[#e2bfb9] mb-1">Akses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Overview / Features */}
      <section className="py-24 px-4 md:px-16 bg-[#0e0e0e] relative z-20 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display font-extrabold text-3xl md:text-[40px] text-white mb-4">Layanan Terpadu</h2>
              <p className="font-sans text-lg text-[#e2bfb9]">Fasilitas utama yang disediakan untuk mendukung kebutuhan akademik, administrasi, dan penyampaian aspirasi mahasiswa Sistem Informasi.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/layanan/akademik" className="glass-card p-8 rounded-2xl group cursor-pointer block">
              <div className="w-14 h-14 rounded-xl bg-[#201f1f] flex items-center justify-center mb-6 group-hover:bg-[#800000] transition-colors duration-300 border border-white/10 group-hover:border-[#ffb4a8]/50">
                <span className="material-symbols-outlined text-[28px] text-[#e5e2e1] group-hover:text-white transition-colors">library_books</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Bank Materi</h3>
              <p className="font-sans text-sm text-[#e2bfb9] leading-relaxed">Akses modul pembelajaran dan arsip akademik terpusat.</p>
            </Link>
            
            <Link to="/layanan/kewirausahaan" className="glass-card p-8 rounded-2xl group cursor-pointer block">
              <div className="w-14 h-14 rounded-xl bg-[#201f1f] flex items-center justify-center mb-6 group-hover:bg-[#800000] transition-colors duration-300 border border-white/10 group-hover:border-[#ffb4a8]/50">
                <span className="material-symbols-outlined text-[28px] text-[#e5e2e1] group-hover:text-white transition-colors">storefront</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Katalog Produk</h3>
              <p className="font-sans text-sm text-[#e2bfb9] leading-relaxed">Pusat merchandise resmi dan produk kewirausahaan himpunan.</p>
            </Link>
            
            <Link to="/aspirasi" className="glass-card p-8 rounded-2xl group cursor-pointer block">
              <div className="w-14 h-14 rounded-xl bg-[#201f1f] flex items-center justify-center mb-6 group-hover:bg-[#800000] transition-colors duration-300 border border-white/10 group-hover:border-[#ffb4a8]/50">
                <span className="material-symbols-outlined text-[28px] text-[#e5e2e1] group-hover:text-white transition-colors">campaign</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Aspirasi Corner</h3>
              <p className="font-sans text-sm text-[#e2bfb9] leading-relaxed">Sampaikan keluhan, kritik, dan saran untuk program studi.</p>
            </Link>

            <Link to="/layanan/administrasi" className="glass-card p-8 rounded-2xl group cursor-pointer block">
              <div className="w-14 h-14 rounded-xl bg-[#201f1f] flex items-center justify-center mb-6 group-hover:bg-[#800000] transition-colors duration-300 border border-white/10 group-hover:border-[#ffb4a8]/50">
                <span className="material-symbols-outlined text-[28px] text-[#e5e2e1] group-hover:text-white transition-colors">folder_open</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Arsip & Surat</h3>
              <p className="font-sans text-sm text-[#e2bfb9] leading-relaxed">Layanan administrasi persuratan dan sertifikat digital.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 px-4 md:px-16 relative z-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="font-sans text-sm text-[#ffb4a8] font-bold tracking-widest uppercase mb-2 block">Media Informasi</span>
              <h2 className="font-display font-extrabold text-3xl md:text-[40px] text-white">Kabar Terbaru</h2>
            </div>
            <Link to="/berita" className="inline-flex items-center gap-2 px-6 py-3 bg-[#201f1f] hover:bg-[#353534] text-white rounded-full font-semibold transition-colors border border-white/10">
              Lihat Semua <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {published.map(news => (
              <article key={news.id} className="glass-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer">
                <div className="h-56 overflow-hidden relative border-b border-white/10">
                  {news.imageUrl
                    ? <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    : <div className="w-full h-full bg-[#201f1f] flex items-center justify-center"><span className="material-symbols-outlined text-5xl text-[#474746]">image</span></div>
                  }
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur border border-white/10 text-[#ffb4a8] px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                    {news.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col bg-[#131313]/50">
                  <span className="text-[#a6a7a8] text-sm font-medium mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {format(news.createdAt, 'd MMMM yyyy', { locale: id })}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ffb4a8] transition-colors line-clamp-2 mb-3 leading-snug">{news.title}</h3>
                  <p className="font-sans text-sm text-[#e2bfb9] line-clamp-2 mb-6 flex-1">{news.excerpt}</p>
                  <Link to={`/berita/${news.id}`} className="inline-flex items-center gap-2 text-[#ffb4a8] font-bold group/link mt-auto">
                    Baca Selengkapnya <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-2 transition-transform">arrow_right_alt</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
