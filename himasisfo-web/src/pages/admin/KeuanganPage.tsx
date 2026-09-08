import { useState } from 'react';
import { mockFinancialReports } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import { canManageFinancial } from '../../utils/rbac';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const MONTHS = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function formatRp(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);
}

export default function KeuanganPage() {
  const { currentUser } = useAuth();
  const canManage = canManageFinancial(currentUser!.role);
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(mockFinancialReports[0]);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-display font-bold text-headline-lg text-on-surface">Laporan Keuangan</h1>
          <p className="text-secondary text-body-sm mt-1">Laporan keuangan HIMASISFO per bulan</p>
        </div>
        {canManage && (
          <button onClick={() => setShowForm(true)} className="btn-primary">
            <span className="material-symbols-outlined text-base">add</span> Input Laporan
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="space-y-3">
          {mockFinancialReports.map(f => (
            <button key={f.id} onClick={() => setSelected(f)}
              className={`w-full text-left card p-4 transition-all ${selected.id === f.id ? 'border-primary bg-primary/5' : ''}`}>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-label-md text-on-surface">{MONTHS[f.month]} {f.year}</span>
                <span className={`badge ${f.balance >= 0 ? 'badge-published' : 'badge-new'}`}>
                  {f.balance >= 0 ? 'Surplus' : 'Defisit'}
                </span>
              </div>
              <p className="text-secondary text-label-sm mt-1">Saldo: {formatRp(f.balance)}</p>
            </button>
          ))}
        </div>

        {/* Detail */}
        {selected && (
          <div className="lg:col-span-2 card p-6 animate-fade-in">
            <h2 className="font-display font-bold text-headline-sm text-on-surface mb-6">
              Laporan {MONTHS[selected.month]} {selected.year}
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Pemasukan', value: selected.income, color: 'text-emerald-600', bg: 'bg-emerald-50', icon: 'trending_up' },
                { label: 'Pengeluaran', value: selected.expense, color: 'text-rose-600', bg: 'bg-rose-50', icon: 'trending_down' },
                { label: 'Saldo Akhir', value: selected.balance, color: 'text-blue-600', bg: 'bg-blue-50', icon: 'account_balance_wallet' },
              ].map(s => (
                <div key={s.label} className={`${s.bg} rounded-xl p-4 text-center`}>
                  <span className={`material-symbols-outlined ${s.color} text-2xl`}>{s.icon}</span>
                  <p className="text-secondary text-label-sm mt-1">{s.label}</p>
                  <p className={`font-display font-bold text-headline-sm ${s.color}`}>{formatRp(s.value)}</p>
                </div>
              ))}
            </div>
            {selected.notes && (
              <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant">
                <p className="text-label-sm font-semibold text-secondary mb-1">Catatan</p>
                <p className="text-body-sm text-on-surface">{selected.notes}</p>
              </div>
            )}
            <p className="text-label-sm text-secondary mt-4">
              Dibuat oleh {selected.createdByName} · {format(selected.createdAt, 'd MMM yyyy', { locale: id })}
            </p>
          </div>
        )}
      </div>

      {/* Input Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-slide-up">
            <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant">
              <h2 className="font-display font-semibold text-headline-sm">Input Laporan Keuangan</h2>
              <button onClick={() => setShowForm(false)}><span className="material-symbols-outlined">close</span></button>
            </div>
            <form className="p-6 space-y-4" onSubmit={e => { e.preventDefault(); setShowForm(false); }}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="form-label">Bulan</label>
                  <select className="form-input">
                    {MONTHS.slice(1).map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Tahun</label>
                  <input type="number" defaultValue={2025} className="form-input" />
                </div>
              </div>
              <div>
                <label className="form-label">Total Pemasukan (Rp)</label>
                <input type="number" placeholder="0" className="form-input" />
              </div>
              <div>
                <label className="form-label">Total Pengeluaran (Rp)</label>
                <input type="number" placeholder="0" className="form-input" />
              </div>
              <div>
                <label className="form-label">Catatan</label>
                <textarea rows={3} className="form-input resize-none" />
              </div>
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">Batal</button>
                <button type="submit" className="btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
