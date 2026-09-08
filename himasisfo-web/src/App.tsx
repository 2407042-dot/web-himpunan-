import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RoleGuard } from './guards/RoleGuard';

// Layouts
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';

// Public Pages
import BerandaPage from './pages/public/BerandaPage';
import BeritaPage from './pages/public/BeritaPage';
import GaleriPage from './pages/public/GaleriPage';
import AspirasiPage from './pages/public/AspirasiPage';
import ProfilPage from './pages/public/ProfilPage';
import LinkPentingPage from './pages/public/LinkPentingPage';

// Auth
import LoginPage from './pages/auth/LoginPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AgendaPage from './pages/admin/AgendaPage';
import KeuanganPage from './pages/admin/KeuanganPage';
import AspirasiAdminPage from './pages/admin/AspirasiAdminPage';
import {
  LaporanPage, RekapPage, PersetujuanPage, BeritaAdminPage,
  GaleriAdminPage, BugPage, PenggunaPage, PengaturanPage
} from './pages/admin/PlaceholderPages';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<BerandaPage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/berita" element={<BeritaPage />} />
            <Route path="/berita/:id" element={<BeritaPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/aspirasi" element={<AspirasiPage />} />
            <Route path="/link-penting" element={<LinkPentingPage />} />
          </Route>

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<RoleGuard><AdminLayout /></RoleGuard>}>
            <Route index element={<AdminDashboard />} />
            <Route path="agenda" element={<AgendaPage />} />
            <Route path="laporan" element={<LaporanPage />} />
            <Route path="rekap" element={<RoleGuard allowedRoles={['ketua','wakil','sekretaris','ristek']}><RekapPage /></RoleGuard>} />
            <Route path="keuangan" element={<RoleGuard allowedRoles={['ketua','wakil','sekretaris','bendahara']}><KeuanganPage /></RoleGuard>} />
            <Route path="persetujuan" element={<RoleGuard allowedRoles={['ketua','sekretaris','humas']}><PersetujuanPage /></RoleGuard>} />
            <Route path="berita" element={<RoleGuard allowedRoles={['ristek','publikasi_dok','humas','medinfo']}><BeritaAdminPage /></RoleGuard>} />
            <Route path="galeri" element={<RoleGuard allowedRoles={['ristek','publikasi_dok']}><GaleriAdminPage /></RoleGuard>} />
            <Route path="aspirasi" element={<RoleGuard allowedRoles={['ristek','humas']}><AspirasiAdminPage /></RoleGuard>} />
            <Route path="bug" element={<RoleGuard allowedRoles={['ristek']}><BugPage /></RoleGuard>} />
            <Route path="pengguna" element={<RoleGuard allowedRoles={['ristek']}><PenggunaPage /></RoleGuard>} />
            <Route path="pengaturan" element={<RoleGuard allowedRoles={['ristek']}><PengaturanPage /></RoleGuard>} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
