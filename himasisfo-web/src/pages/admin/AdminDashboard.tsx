import { useAuth } from '../../context/AuthContext';
import { mockAgenda, mockAspirations, mockBugReports, mockNews, mockFinancialReports } from '../../data/mockData';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { canViewFinancial, canViewRecap, isRistek } from '../../utils/rbac';

export default function AdminDashboard() {
  const { currentUser } = useAuth();
  const role = currentUser!.role;

  const totalAgenda = mockAgenda.length;
  const publishedAgenda = mockAgenda.filter(a => a.status === 'published').length;
  const pendingAspirations = mockAspirations.filter(a => a.status === 'baru').length;
  const openBugs = mockBugReports.filter(b => b.status !== 'selesai').length;
  const pendingNews = mockNews.filter(n => n.status === 'menunggu_sekum' || n.status === 'menunggu_ketua').length;

  const stats = [
    { label: 'Total Agenda', value: totalAgenda, icon: 'calendar_month', sub: `${publishedAgenda} published`, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Aspirasi Masuk', value: mockAspirations.length, icon: 'forum', sub: `${pendingAspirations} belum diproses`, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Info Menunggu', value: pendingNews, icon: 'pending_actions', sub: 'menunggu persetujuan', color: 'text-purple-600', bg: 'bg-purple-50' },
    ...(isRistek(role) ? [{ label: 'Bug Aktif', value: openBugs, icon: 'bug_report', sub: 'perlu ditangani', color: 'text-rose-600', bg: 'bg-rose-50' }] : []),
    ...(canViewFinancial(role) ? [{ label: 'Laporan Keuangan', value: mockFinancialReports.length, icon: 'payments', sub: 'total laporan', color: 'text-emerald-600', bg: 'bg-emerald-50' }] : []),
  ];

  const recentAgenda = [...mockAgenda].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 5);

  return (
    <div className="animate-fade-in">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="font-display font-bold text-headline-lg text-on-surface">
          Selamat datang, {currentUser?.name}! 👋
        </h1>
        <p className="text-secondary text-body-md mt-1">
          Role: <span className="font-medium text-primary capitalize">{role}</span>
          {currentUser?.unitId && <> · Unit: <span className="font-medium text-primary capitalize">{currentUser.unitId}</span></>}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="stat-card group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-label-md text-secondary">{s.label}</h3>
              <div className={`p-2 ${s.bg} rounded-md ${s.color} group-hover:bg-primary group-hover:text-white transition-colors`}>
                <span className="material-symbols-outlined text-xl">{s.icon}</span>
              </div>
            </div>
            <div className="font-display font-bold text-[36px] text-on-surface">{s.value}</div>
            <p className="text-label-sm text-secondary mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Agenda */}
      <div className="card overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
          <h2 className="font-display font-semibold text-headline-sm text-on-surface">Agenda Terbaru</h2>
          <a href="/admin/agenda" className="text-primary text-label-md font-medium hover:underline">Lihat Semua</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                {['Judul', 'Unit', 'Tanggal', 'PIC', 'Status'].map(h => (
                  <th key={h} className="px-5 py-3 text-label-md text-secondary font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-body-sm">
              {recentAgenda.map(a => (
                <tr key={a.id} className="border-b border-outline-variant/40 hover:bg-surface-container-lowest transition-colors">
                  <td className="px-5 py-3 font-medium text-on-surface">{a.title}</td>
                  <td className="px-5 py-3 text-secondary capitalize">{a.unitName}</td>
                  <td className="px-5 py-3 text-secondary">{format(a.eventDate, 'd MMM yyyy', { locale: id })}</td>
                  <td className="px-5 py-3 text-secondary">{a.pic}</td>
                  <td className="px-5 py-3">
                    <span className={`badge ${a.status === 'published' ? 'badge-published' : a.status === 'reported' ? 'bg-blue-100 text-blue-700 badge' : 'badge-draft'}`}>
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: 'add_circle', label: 'Buat Agenda', to: '/admin/agenda', show: true },
          { icon: 'assignment_add', label: 'Input Laporan', to: '/admin/laporan', show: true },
          { icon: 'summarize', label: 'Buat Rekap', to: '/admin/rekap', show: canViewRecap(role) },
          { icon: 'payments', label: 'Laporan Keuangan', to: '/admin/keuangan', show: canViewFinancial(role) },
        ].filter(a => a.show).map(a => (
          <a key={a.to} href={a.to} className="card p-4 flex flex-col items-center gap-2 text-center group hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">{a.icon}</span>
            <span className="text-label-md text-on-surface">{a.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
