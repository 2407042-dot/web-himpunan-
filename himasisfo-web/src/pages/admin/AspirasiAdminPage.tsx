import { useState } from 'react';
import { mockAspirations } from '../../data/mockData';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import type { AspirationStatus } from '../../types';

const statusLabel: Record<AspirationStatus, string> = { baru: 'Baru', diproses: 'Diproses', selesai: 'Selesai' };
const statusClass: Record<AspirationStatus, string> = { baru: 'badge-new', diproses: 'badge-pending', selesai: 'badge-published' };

export default function AspirasiAdminPage() {
  const [filter, setFilter] = useState<AspirationStatus | 'semua'>('semua');
  const filtered = filter === 'semua' ? mockAspirations : mockAspirations.filter(a => a.status === filter);

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="font-display font-bold text-headline-lg text-on-surface">Aspirasi Masuk</h1>
        <p className="text-secondary text-body-sm mt-1">{mockAspirations.length} total aspirasi</p>
      </div>
      <div className="flex gap-2 mb-6">
        {(['semua', 'baru', 'diproses', 'selesai'] as const).map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded-full text-label-md font-medium capitalize transition-colors ${filter === s ? 'bg-primary text-white' : 'bg-white border border-outline-variant text-secondary hover:border-primary'}`}>
            {s === 'semua' ? 'Semua' : statusLabel[s as AspirationStatus]}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filtered.map(a => (
          <div key={a.id} className="card p-5">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary text-xs">{a.senderName.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-label-md text-on-surface">{a.senderName}</p>
                    <p className="text-secondary text-label-sm">{a.email}</p>
                  </div>
                  <span className="badge bg-surface-container text-secondary text-[10px] uppercase">{a.category}</span>
                </div>
                <p className="text-body-md text-on-surface-variant ml-11">{a.message}</p>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className={statusClass[a.status]}>{statusLabel[a.status]}</span>
                <p className="text-secondary text-label-sm">{format(a.submittedAt, 'd MMM yyyy', { locale: id })}</p>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-secondary">
            <span className="material-symbols-outlined text-4xl mb-2 block">inbox</span>
            <p>Tidak ada aspirasi dengan status ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}
