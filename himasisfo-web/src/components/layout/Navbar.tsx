import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/profil', label: 'Aparatur' },
  { to: '/berita', label: 'Media & Info' },
  { to: '/galeri', label: 'Galeri' },
  { to: '/aspirasi', label: 'Aspirasi' },
  { to: '/link-penting', label: 'Direktori Link' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? 'shadow-lg bg-[#131313]/95 backdrop-blur-xl' : 'bg-[#131313]/80 backdrop-blur-xl'}`} id="main-nav">
      <div className="flex justify-between items-center px-4 md:px-16 h-20 max-w-[1280px] mx-auto">
        {/* Brand */}
        <Link to="/" className="font-display font-bold text-2xl text-[#ffb4a8] tracking-tighter flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white overflow-hidden shadow-[0_0_15px_rgba(128,0,0,0.5)] group-hover:scale-105 transition-transform duration-300">
            <img src="/favicon.svg" alt="Logo HIMASISFO" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="leading-none mb-1">HIMASISFO</span>
            <span className="text-[10px] font-sans text-white/70 tracking-widest uppercase">Sistem Informasi</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-sans text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 active:scale-95 ${
                  isActive
                    ? 'text-[#ffb4a8] relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#ffb4a8] after:rounded-full bg-white/5'
                    : 'text-[#e5e2e1]/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        
        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {currentUser ? (
            <button onClick={() => navigate('/admin')} className="font-sans font-semibold text-sm bg-[#201f1f] text-white px-6 py-2.5 rounded-full hover:bg-[#353534] border border-white/10 transition-colors active:scale-95 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">space_dashboard</span>
              Dashboard
            </button>
          ) : (
            <button onClick={() => navigate('/login')} className="font-sans font-semibold text-sm bg-[#800000] text-white px-6 py-2.5 rounded-full hover:bg-[#b22b1d] shadow-[0_0_15px_rgba(128,0,0,0.4)] transition-colors active:scale-95 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">login</span>
              Login Admin
            </button>
          )}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-[#ffb4a8] p-2 rounded-md hover:bg-white/5" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#131313] border-b border-white/10 shadow-xl animate-fade-in">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? 'bg-[#800000]/20 text-[#ffb4a8]' : 'text-[#e5e2e1]/80 hover:bg-white/5'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="h-px bg-white/10 my-2"></div>
            {currentUser ? (
              <button
                onClick={() => navigate('/admin')}
                className="w-full flex items-center justify-center gap-2 bg-[#201f1f] text-white font-semibold px-4 py-3 rounded-xl border border-white/10"
              >
                <span className="material-symbols-outlined text-[18px]">space_dashboard</span>
                Dashboard Admin
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="w-full flex items-center justify-center gap-2 bg-[#800000] text-white font-semibold px-4 py-3 rounded-xl"
              >
                Login Pengurus
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
