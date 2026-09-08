import { mockGallery } from '../../data/mockData';

export default function GaleriPage() {
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
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-white mb-4 leading-tight">
            Galeri <span className="text-[#ffb4a8]">Kegiatan</span>
          </h1>
          <p className="font-sans text-lg text-[#e2bfb9] max-w-2xl">
            Dokumentasi momen-momen berharga dari berbagai program kerja dan aktivitas Himpunan Mahasiswa.
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGallery.map(item => (
            <div key={item.id} className="glass-card rounded-xl overflow-hidden group cursor-pointer relative h-[300px]">
              {item.imageUrl ? (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                ></div>
              ) : (
                <div className="absolute inset-0 bg-[#201f1f] flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-[#353534]">image</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#800000] text-white font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-2">
                  {item.category || 'Dokumentasi'}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-1 line-clamp-2">{item.caption}</h3>
                <p className="font-sans text-sm text-[#e2bfb9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">{new Date(item.uploadDate).toLocaleDateString('id-ID')}</p>
              </div>
            </div>
          ))}
        </div>

        {mockGallery.length === 0 && (
          <div className="text-center py-24 glass-card rounded-xl border border-white/10">
            <span className="material-symbols-outlined text-5xl text-[#474746] mb-4">photo_library</span>
            <p className="font-sans text-[#a6a7a8]">Belum ada dokumentasi kegiatan.</p>
          </div>
        )}
      </div>
    </div>
  );
}
