import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1c1b1b] w-full py-lg mt-auto border-t-4 border-primary">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg maroon-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-display font-bold text-headline-sm text-primary-fixed">HIMASISFO</span>
            </div>
            <p className="text-secondary-fixed-dim text-body-sm leading-relaxed">
              Himpunan Mahasiswa Sistem Informasi — Bersinergi membangun teknologi dan inovasi.
            </p>
          </div>
          <div>
            <h3 className="text-primary-fixed font-semibold text-label-md mb-3 uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-2">
              {[['/', 'Beranda'], ['/profil', 'Profil Organisasi'], ['/berita', 'Berita & Kegiatan'], ['/galeri', 'Galeri'], ['/aspirasi', 'Aspirasi Corner']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-secondary-fixed-dim hover:text-primary-fixed text-body-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-primary-fixed font-semibold text-label-md mb-3 uppercase tracking-wider">Kontak</h3>
            <div className="space-y-2 text-secondary-fixed-dim text-body-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primary-fixed">mail</span>
                <span>himasisfo@kampus.ac.id</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primary-fixed">photo_camera</span>
                <span>@himasisfo</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-fixed-dim text-body-sm">© 2025 HIMASISFO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary-fixed-dim hover:text-primary-fixed text-body-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-secondary-fixed-dim hover:text-primary-fixed text-body-sm transition-colors">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
