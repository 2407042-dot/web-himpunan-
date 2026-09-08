import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const demoAccounts = [
    { role: 'Ketua', email: 'ketua@himasisfo.ac.id', pw: 'ketua123' },
    { role: 'Sekretaris', email: 'sekretaris@himasisfo.ac.id', pw: 'sekum123' },
    { role: 'Bendahara', email: 'bendahara@himasisfo.ac.id', pw: 'bend123' },
    { role: 'Ristek (Super Admin)', email: 'ristek@himasisfo.ac.id', pw: 'ristek123' },
    { role: 'Humas', email: 'humas@himasisfo.ac.id', pw: 'humas123' },
    { role: 'Kadiv Kompetensi', email: 'kadiv@himasisfo.ac.id', pw: 'kadiv123' },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 maroon-gradient relative overflow-hidden flex-col justify-center items-center p-12 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <span className="font-display font-bold text-3xl">H</span>
          </div>
          <h1 className="font-display font-bold text-[40px] mb-3">HIMASISFO</h1>
          <p className="text-white/80 text-body-lg max-w-sm">Portal resmi administrasi Himpunan Mahasiswa Sistem Informasi.</p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl maroon-gradient flex items-center justify-center mx-auto mb-4 shadow-lg lg:hidden">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h2 className="font-display font-bold text-headline-lg text-on-surface">Login Admin</h2>
            <p className="text-secondary text-body-sm mt-1">Masuk dengan akun HIMASISFO kamu</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-xl">mail</span>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@himasisfo.ac.id" className="form-input pl-10" required />
              </div>
            </div>
            <div>
              <label className="form-label">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-xl">lock</span>
                <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="form-input pl-10 pr-10" required />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary">
                  <span className="material-symbols-outlined text-xl">{showPw ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-error-container text-on-error-container rounded-md p-3 text-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span> {error}
              </div>
            )}

            <button type="submit" disabled={isLoading} className="btn-primary w-full justify-center py-3 mt-2">
              {isLoading ? <><span className="material-symbols-outlined animate-spin text-base">progress_activity</span> Memproses...</> : 'Login'}
            </button>
          </form>

          {/* Demo accounts */}
          <div className="mt-8 p-4 bg-surface-container-low rounded-lg border border-outline-variant">
            <p className="text-label-sm text-secondary font-semibold mb-3 uppercase tracking-wider">Akun Demo</p>
            <div className="grid grid-cols-1 gap-1.5">
              {demoAccounts.map(a => (
                <button key={a.email} onClick={() => { setEmail(a.email); setPassword(a.pw); }}
                  className="text-left px-3 py-2 rounded-md hover:bg-white text-label-sm text-on-surface-variant hover:text-primary transition-colors flex items-center justify-between group">
                  <span className="font-medium">{a.role}</span>
                  <span className="text-secondary group-hover:text-primary">{a.email}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
