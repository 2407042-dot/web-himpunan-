import { useState } from 'react';
import { mockAgenda } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import { canManageAllAgenda } from '../../utils/rbac';
import type { Agenda } from '../../types';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function AgendaPage() {
  const { currentUser } = useAuth();
  const role = currentUser!.role;
  const [showForm, setShowForm] = useState(false);
  const [agendaList] = useState<Agenda[]>(mockAgenda);

  const visibleAgenda = canManageAllAgenda(role)
    ? agendaList
    : agendaList.filter(a => a.unitId === currentUser?.unitId);

  const statusColor: Record<string, string> = {
    draft: 'badge-draft',
    published: 'badge-published',
    reported: 'bg-blue-100 text-blue-700 badge',
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-display font-bold text-headline-lg text-on-surface">Manajemen Agenda</h1>
          <p className="text-secondary text-body-sm mt-1">{visibleAgenda.length} agenda {canManageAllAgenda(role) ? 'semua unit' : `unit ${currentUser?.unitId}`}</p>
        </div>
        <button onClick={() => setShowForm(true)} className="btn-primary">
          <span className="material-symbols-outlined text-base">add</span> Buat Agenda
        </button>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                {['Judul', 'Unit', 'Tanggal Kegiatan', 'PIC', 'Status', 'Aksi'].map(h => (
                  <th key={h} className="px-5 py-3 text-label-md text-secondary font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-body-sm">
              {visibleAgenda.map(a => (
                <tr key={a.id} className="border-b border-outline-variant/40 hover:bg-surface-container-lowest transition-colors">
                  <td className="px-5 py-3 font-medium text-on-surface max-w-[200px] truncate">{a.title}</td>
                  <td className="px-5 py-3 text-secondary capitalize">{a.unitName}</td>
                  <td className="px-5 py-3 text-secondary">{format(a.eventDate, 'd MMM yyyy', { locale: id })}</td>
                  <td className="px-5 py-3 text-secondary">{a.pic}</td>
                  <td className="px-5 py-3"><span className={statusColor[a.status]}>{a.status}</span></td>
                  <td className="px-5 py-3">
                    <div className="flex gap-1">
                      <button className="p-1.5 text-secondary hover:text-primary hover:bg-primary/5 rounded-md transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-base">edit</span>
                      </button>
                      <button className="p-1.5 text-secondary hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Input Laporan">
                        <span className="material-symbols-outlined text-base">assignment</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg animate-slide-up">
            <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant">
              <h2 className="font-display font-semibold text-headline-sm text-on-surface">Buat Agenda Baru</h2>
              <button onClick={() => setShowForm(false)} className="text-secondary hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form className="p-6 space-y-4" onSubmit={e => { e.preventDefault(); setShowForm(false); }}>
              <div>
                <label className="form-label">Judul Agenda <span className="text-error">*</span></label>
                <input placeholder="Contoh: Workshop UI/UX" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Tanggal Kegiatan <span className="text-error">*</span></label>
                <input type="date" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Deskripsi</label>
                <textarea rows={3} className="form-input resize-none" placeholder="Deskripsi singkat agenda..." />
              </div>
              <div>
                <label className="form-label">PIC <span className="text-error">*</span></label>
                <input placeholder="Nama penanggung jawab" className="form-input" required />
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">Batal</button>
                <button type="submit" className="btn-primary">Simpan Agenda</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
