import { mockMembers } from '../../data/mockData';

export default function ProfilPage() {
  const getMember = (roleKeyword: string) => mockMembers.find(m => m.position.toLowerCase().includes(roleKeyword.toLowerCase()))?.name || '-';

  return (
    <div className="bg-[#131313] min-h-screen text-[#e5e2e1] pt-24 pb-24 px-4 md:px-16 selection:bg-[#800000] selection:text-white">
      {/* Inline styles for the specific template classes */}
      <style>{`
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
        }
        .glass-card:hover {
            box-shadow: 0 0 20px rgba(128, 0, 0, 0.3);
            border-color: rgba(128, 0, 0, 0.5);
        }
        .leadership-card {
            background: rgba(128, 0, 0, 0.1);
            border: 1px solid rgba(128, 0, 0, 0.3);
        }
        .leadership-card:hover {
            box-shadow: 0 0 30px rgba(128, 0, 0, 0.5);
            border-color: rgba(255, 180, 168, 0.5);
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <section className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h1 className="font-display font-extrabold text-4xl md:text-[64px] leading-tight text-white mb-4">Aparatur Organisasi</h1>
            <p className="font-sans text-lg text-[#e2bfb9]">Para pemimpin dan penggerak di balik visi dan misi organisasi kami. Dedikasi tinggi untuk inovasi dan keunggulan.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="px-6 py-2 rounded-full border border-[#5a413d] text-white hover:bg-white/5 transition-colors font-semibold text-sm">Unduh Struktur</button>
          </div>
        </section>

        {/* Leadership (Bento Grid Style) */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-2xl text-[#ffb4a8] mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-[#ffb4a8] rounded-full"></span>
            Dewan Pimpinan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Chairman Card (Spans 8 cols) */}
            <div className="md:col-span-8 glass-card leadership-card rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 transition-all duration-300 group cursor-pointer">
              <div className="w-48 h-48 rounded-lg overflow-hidden shrink-0 border border-[#ffb4a8]/20 bg-[#201f1f] flex items-center justify-center">
                <span className="material-symbols-outlined text-[80px] text-[#474746] group-hover:scale-110 transition-transform duration-500">person</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block bg-[#800000] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Ketua Umum</span>
                <h3 className="font-display font-bold text-3xl text-white mb-2">{getMember('Ketua HIMASISFO')}</h3>
                <p className="font-sans text-[#e2bfb9] mb-4">"Memimpin dengan visi, bergerak dengan aksi nyata untuk kemajuan bersama."</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a className="text-[#e2bfb9] hover:text-[#ffb4a8] transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
                  <a className="text-[#e2bfb9] hover:text-[#ffb4a8] transition-colors" href="#"><span className="material-symbols-outlined">link</span></a>
                </div>
              </div>
            </div>

            {/* Vice Chairman Card (Spans 4 cols) */}
            <div className="md:col-span-4 glass-card leadership-card rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border border-[#ffb4a8]/20 bg-[#201f1f] flex items-center justify-center">
                <span className="material-symbols-outlined text-[60px] text-[#474746] group-hover:scale-110 transition-transform duration-500">person</span>
              </div>
              <span className="inline-block bg-[#353534] text-[#ffb4a8] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-[#ffb4a8]/20">Wakil Ketua</span>
              <h3 className="font-display font-bold text-2xl text-white mb-1">{getMember('Wakil Ketua')}</h3>
              <p className="font-sans text-[#e2bfb9] text-sm">Fokus pada operasional dan harmoni internal.</p>
            </div>
            
          </div>
        </section>

        {/* Departments Grid */}
        <section>
          <h2 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-[#353534] rounded-full"></span>
            Divisi & Departemen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sekretaris', name: getMember('Sekretaris'), desc: 'Administrasi Umum' },
              { title: 'Bendahara', name: getMember('Bendahara'), desc: 'Keuangan' },
              { title: 'Kadep PSDM', name: getMember('Kadep PSDM'), desc: 'Pengembangan SDM' },
              { title: 'Kaderisasi', name: getMember('Kaderisasi'), desc: 'Regenerasi' },
              { title: 'Kompetensi', name: getMember('Kompetensi'), desc: 'Akademik' },
              { title: 'Ristek', name: getMember('Ristek'), desc: 'Riset Teknologi' },
              { title: 'Kadep ADKWU', name: getMember('Kadep ADKWU'), desc: 'Administrasi Kewirausahaan' },
              { title: 'Kewirausahaan', name: getMember('Kewirausahaan'), desc: 'Bisnis' },
              { title: 'Kadep MEDINFO', name: getMember('Kadep MEDINFO'), desc: 'Media & Informasi' },
              { title: 'Publikasi', name: getMember('Publikasi'), desc: 'Konten Digital' },
              { title: 'Humas', name: getMember('Humas'), desc: 'Kemitraan Luar' },
            ].map((dep, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-white/10 bg-[#201f1f] grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[50px] text-[#474746] group-hover:text-white transition-colors duration-500">person</span>
                </div>
                <span className="text-xs font-semibold text-[#ffb4a8] uppercase tracking-wider mb-1">{dep.title}</span>
                <h4 className="font-display font-bold text-lg text-white mb-1">{dep.name}</h4>
                <p className="text-sm font-sans text-[#e2bfb9] mb-4">{dep.desc}</p>
                <div className="w-full h-px bg-white/5 my-2"></div>
                <div className="flex gap-2 justify-center w-full mt-2">
                  <div className="w-6 h-6 rounded-full bg-[#353534] border border-white/10 flex items-center justify-center"><span className="material-symbols-outlined text-[12px] text-[#a6a7a8]">person</span></div>
                  <div className="w-6 h-6 rounded-full bg-[#353534] border border-white/10 flex items-center justify-center"><span className="material-symbols-outlined text-[12px] text-[#a6a7a8]">person</span></div>
                  <div className="w-6 h-6 rounded-full bg-[#353534] border border-white/10 flex items-center justify-center text-[10px] text-[#a6a7a8]">+3</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
