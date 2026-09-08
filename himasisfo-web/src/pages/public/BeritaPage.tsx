import { Link } from 'react-router-dom';
import { mockNews } from '../../data/mockData';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function BeritaPage() {
  const published = mockNews.filter(n => n.status === 'published');
  
  // Separate featured news and grid news
  const featuredNews = published.length > 0 ? published[0] : null;
  const gridNews = published.length > 1 ? published.slice(1) : [];

  return (
    <div className="bg-[#131313] min-h-screen text-[#e5e2e1] selection:bg-[#800000] selection:text-white pt-32 pb-24 px-4 md:px-16 overflow-x-hidden">
      <style>{`
        .glass-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.1);
        }
        .glass-card:hover {
            box-shadow: 0 0 20px rgba(128, 0, 0, 0.3);
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-[#ffb4a8] mb-4">Media & Info</h1>
          <p className="font-sans text-lg text-[#e2bfb9] max-w-2xl">Pembaruan terbaru, artikel, dan liputan kegiatan dari Himpunan Mahasiswa Sistem Informasi.</p>
        </header>

        {/* Featured Article (Full Width) */}
        {featuredNews && (
          <section className="mb-12">
            <Link to={`/berita/${featuredNews.id}`} className="block glass-card rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 h-[500px] relative border border-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
                style={{ backgroundImage: `url('${featuredNews.imageUrl || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <span className="inline-block bg-[#800000] text-white font-sans text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-[0_0_10px_rgba(128,0,0,0.5)]">
                  LATEST NEWS
                </span>
                <h2 className="font-display text-[32px] md:text-[48px] leading-tight text-white font-bold mb-4 group-hover:text-[#ffb4a8] transition-colors line-clamp-2">
                  {featuredNews.title}
                </h2>
                <p className="font-sans text-lg text-[#e2bfb9] line-clamp-2 mb-6">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[#e2bfb9] font-sans text-sm font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span> 
                    {format(featuredNews.createdAt, 'd MMMM yyyy', { locale: id })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">schedule</span> 
                    5 min read
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Bento Grid for Updates & Announcements */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          
          {gridNews.map((news, index) => {
            // We use different span and styles based on index to create a bento grid feel
            if (index % 4 === 0) {
              // Standard News Card (4 cols)
              return (
                <Link key={news.id} to={`/berita/${news.id}`} className="md:col-span-4 glass-card rounded-xl overflow-hidden group cursor-pointer p-6 flex flex-col justify-between h-[300px] border border-white/10">
                  <div>
                    <span className="inline-block bg-[#353534] text-[#ffb4a8] font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4 border border-white/5">
                      {news.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#ffb4a8] transition-colors mb-2 line-clamp-2">{news.title}</h3>
                    <p className="font-sans text-[#e2bfb9] line-clamp-3 text-sm">{news.excerpt}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                    <span className="text-[#a6a7a8] font-sans text-xs font-semibold">{format(news.createdAt, 'd MMM yyyy', { locale: id })}</span>
                    <span className="material-symbols-outlined text-[#ffb4a8] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </Link>
              );
            }
            if (index % 4 === 1) {
              // Image Heavy Card (8 cols)
              return (
                <Link key={news.id} to={`/berita/${news.id}`} className="md:col-span-8 glass-card rounded-xl overflow-hidden group cursor-pointer relative h-[300px] border border-white/10">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ backgroundImage: `url('${news.imageUrl || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block bg-[#800000] text-white font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-2">
                      {news.category}
                    </span>
                    <h3 className="font-display text-3xl font-bold text-white mb-2 group-hover:text-[#ffb4a8] transition-colors line-clamp-1">{news.title}</h3>
                    <div className="flex items-center gap-2 text-[#e2bfb9] font-sans text-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      <span>Read Article</span>
                    </div>
                  </div>
                </Link>
              );
            }
            if (index % 4 === 2) {
              // Event Card (6 cols)
              return (
                <Link key={news.id} to={`/berita/${news.id}`} className="md:col-span-6 glass-card rounded-xl p-6 group cursor-pointer border-l-4 border-l-[#ffb4a8] border-y border-r border-white/10 h-[250px] flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-[#353534] p-3 rounded-lg text-center min-w-[70px]">
                      <span className="block font-sans text-xs font-bold text-[#ffb4a8] uppercase">{format(news.createdAt, 'MMM', { locale: id })}</span>
                      <span className="block font-display text-2xl text-white font-bold">{format(news.createdAt, 'dd', { locale: id })}</span>
                    </div>
                    <span className="bg-[#800000]/20 text-[#ffb4a8] px-2 py-1 rounded text-[12px] font-bold tracking-wider uppercase">{news.category}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#ffb4a8] transition-colors line-clamp-1">{news.title}</h3>
                  <p className="font-sans text-[#e2bfb9] mb-4 line-clamp-1 text-sm">{news.excerpt}</p>
                </Link>
              );
            }
            // Standard News Card (6 cols)
            return (
              <Link key={news.id} to={`/berita/${news.id}`} className="md:col-span-6 glass-card rounded-xl p-6 group cursor-pointer border border-white/10 h-[250px] flex flex-col justify-center">
                <span className="inline-block bg-[#353534] text-[#ffb4a8] font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4 w-fit border border-white/5">{news.category}</span>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#ffb4a8] transition-colors mb-2 line-clamp-1">{news.title}</h3>
                <p className="font-sans text-[#e2bfb9] line-clamp-2 mb-4 text-sm">{news.excerpt}</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-[#353534] border border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px] text-[#a6a7a8]">person</span>
                  </div>
                  <span className="text-[#a6a7a8] font-sans text-xs font-semibold">Admin HIMASISFO</span>
                </div>
              </Link>
            );
          })}

        </section>

        {gridNews.length === 0 && !featuredNews && (
          <div className="text-center py-12 glass-card rounded-xl border border-white/10">
            <span className="material-symbols-outlined text-4xl text-[#474746] mb-4">newspaper</span>
            <p className="text-[#a6a7a8] font-sans">Belum ada berita yang dipublikasikan.</p>
          </div>
        )}

        {published.length > 5 && (
          <div className="flex justify-center mt-8">
            <button className="glass-card text-white font-sans font-semibold text-sm px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20">
                Muat Lebih Banyak Artikel
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
