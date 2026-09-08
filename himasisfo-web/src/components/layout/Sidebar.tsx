import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import type { Role } from '../../types';

interface SidebarLink {
  to: string;
  icon: string;
  label: string;
  roles?: Role[];
}

const sidebarLinks: SidebarLink[] = [
  { to: '/admin', icon: 'dashboard', label: 'Dashboard' },
  { to: '/admin/agenda', icon: 'calendar_month', label: 'Agenda' },
  { to: '/admin/laporan', icon: 'assignment', label: 'Laporan Kegiatan' },
  { to: '/admin/rekap', icon: 'summarize', label: 'Rekap', roles: ['ketua', 'wakil', 'sekretaris', 'ristek'] },
  { to: '/admin/keuangan', icon: 'payments', label: 'Keuangan', roles: ['ketua', 'wakil', 'sekretaris', 'bendahara'] },
  { to: '/admin/persetujuan', icon: 'fact_check', label: 'Persetujuan Info', roles: ['ketua', 'sekretaris', 'humas'] },
  { to: '/admin/berita', icon: 'newspaper', label: 'Kelola Berita', roles: ['ristek', 'publikasi_dok', 'humas', 'medinfo'] },
  { to: '/admin/galeri', icon: 'photo_library', label: 'Kelola Galeri', roles: ['ristek', 'publikasi_dok'] },
  { to: '/admin/aspirasi', icon: 'forum', label: 'Aspirasi', roles: ['ristek', 'humas'] },
  { to: '/admin/bug', icon: 'bug_report', label: 'Log Bug', roles: ['ristek'] },
  { to: '/admin/pengguna', icon: 'manage_accounts', label: 'Pengguna', roles: ['ristek'] },
  { to: '/admin/pengaturan', icon: 'settings', label: 'Pengaturan', roles: ['ristek'] },
];

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const visibleLinks = sidebarLinks.filter(l => !l.roles || (currentUser && l.roles.includes(currentUser.role)));

  const initials = currentUser?.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'A';

  return (
    <aside className="bg-[#1c1b1b] text-primary-fixed font-medium fixed left-0 top-0 h-full w-64 shadow-xl flex flex-col z-50">
      {/* Brand */}
      <div className="px-5 py-6 border-b border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg maroon-gradient flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <div>
            <p className="font-display font-bold text-headline-sm text-white">HIMASISFO</p>
            <p className="text-secondary-fixed-dim text-label-sm">Admin Portal</p>
          </div>
        </div>
        {/* User info */}
        <div className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
            {initials}
          </div>
          <div className="overflow-hidden">
            <p className="text-white text-label-md truncate">{currentUser?.name}</p>
            <p className="text-secondary-fixed-dim text-label-sm capitalize">{currentUser?.role}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        {visibleLinks.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/admin'}
            onClick={onClose}
            className={({ isActive }) =>
              isActive ? 'sidebar-link-active text-label-md mb-0.5' : 'sidebar-link text-label-md mb-0.5'
            }
          >
            <span className="material-symbols-outlined text-[20px]">{l.icon}</span>
            {l.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-white/10 p-2">
        <a href="/" className="sidebar-link text-label-md mb-1">
          <span className="material-symbols-outlined text-[20px]">public</span>
          Lihat Website
        </a>
        <button onClick={handleLogout} className="sidebar-link text-label-md w-full text-left text-rose-400 hover:text-rose-300">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
