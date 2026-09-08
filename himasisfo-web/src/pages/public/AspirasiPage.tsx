import { useState } from 'react';

export default function AspirasiPage() {
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    category: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Mock network request instead of Firebase
      await new Promise(r => setTimeout(r, 1000));
      
      setSuccess(true);
      setFormData({ name: '', nim: '', category: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#131313] min-h-screen text-[#e5e2e1] pt-32 pb-24 px-4 md:px-16 selection:bg-[#800000] selection:text-white overflow-x-hidden">
      <style>{`
        .glass-panel {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .maroon-glow:hover {
            box-shadow: 0 0 20px rgba(128, 0, 0, 0.3);
        }
        
        .input-dark {
            background-color: #0A0A0A;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #e5e2e1;
        }
        
        .input-dark:focus {
            border-color: #800000;
            outline: none;
            box-shadow: 0 0 0 1px #800000;
        }
        
        .input-dark::placeholder {
            color: rgba(229, 226, 225, 0.3);
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto w-full">
        <div className="mb-12">
          <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-white mb-4 leading-tight">Penyampaian Aspirasi</h1>
          <p className="font-sans text-lg text-[#e2bfb9] max-w-2xl">Suara Anda adalah fondasi perubahan. Sampaikan aspirasi, keluhan, atau saran Anda secara profesional melalui form di bawah ini.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
              {success && (
                <div className="absolute top-0 left-0 w-full bg-[#1e4620] text-white text-center py-2 font-semibold animate-fade-in z-10">
                  Aspirasi berhasil dikirim! Terima kasih atas masukan Anda.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block font-sans text-sm font-semibold text-white mb-2" htmlFor="name">Nama Lengkap</label>
                    <input 
                      className="input-dark w-full rounded-lg px-4 py-3 font-sans transition-colors" 
                      id="name" 
                      name="name" 
                      placeholder="Masukkan nama Anda" 
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  {/* Student ID Field */}
                  <div>
                    <label className="block font-sans text-sm font-semibold text-white mb-2" htmlFor="nim">Nomor Induk Mahasiswa (NIM)</label>
                    <input 
                      className="input-dark w-full rounded-lg px-4 py-3 font-sans transition-colors" 
                      id="nim" 
                      name="nim" 
                      placeholder="Masukkan NIM Anda" 
                      type="text"
                      required
                      value={formData.nim}
                      onChange={e => setFormData({...formData, nim: e.target.value})}
                    />
                  </div>
                </div>

                {/* Category Field */}
                <div>
                  <label className="block font-sans text-sm font-semibold text-white mb-2" htmlFor="category">Kategori Aspirasi</label>
                  <select 
                    className="input-dark w-full rounded-lg px-4 py-3 font-sans transition-colors" 
                    id="category" 
                    name="category"
                    required
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                  >
                    <option disabled value="">Pilih Kategori</option>
                    <option value="akademik">Akademik & Pendidikan</option>
                    <option value="fasilitas">Fasilitas Kampus</option>
                    <option value="kemahasiswaan">Kegiatan Kemahasiswaan</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block font-sans text-sm font-semibold text-white mb-2" htmlFor="message">Pesan Aspirasi</label>
                  <textarea 
                    className="input-dark w-full rounded-lg px-4 py-3 font-sans transition-colors resize-none" 
                    id="message" 
                    name="message" 
                    placeholder="Tuliskan detail aspirasi, saran, atau keluhan Anda di sini..." 
                    rows={6}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button 
                    className="bg-[#800000] text-white px-8 py-3 rounded-lg font-sans font-semibold hover:bg-[#b22b1d] transition-all duration-300 maroon-glow flex items-center gap-2 disabled:opacity-50" 
                    type="submit"
                    disabled={loading}
                  >
                    <span>{loading ? 'Mengirim...' : 'Kirim Aspirasi'}</span>
                    {!loading && <span className="material-symbols-outlined text-sm">send</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="glass-panel rounded-xl p-6 md:p-8 h-full sticky top-28 border border-white/10">
              <h3 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffb4a8]">info</span>
                Proses Aspirasi
              </h3>
              
              <ul className="space-y-6 relative border-l border-white/10 ml-3 pl-6">
                <li className="relative">
                  <div className="absolute w-3 h-3 bg-[#800000] rounded-full -left-[1.95rem] top-1.5 border-2 border-[#131313]"></div>
                  <h4 className="font-sans font-bold text-white mb-1">1. Penerimaan</h4>
                  <p className="font-sans text-[#e2bfb9] text-sm">Aspirasi Anda diterima secara rahasia dan masuk ke sistem database utama kami.</p>
                </li>
                <li className="relative">
                  <div className="absolute w-3 h-3 bg-[#353534] rounded-full -left-[1.95rem] top-1.5 border-2 border-[#131313]"></div>
                  <h4 className="font-sans font-bold text-white mb-1">2. Verifikasi</h4>
                  <p className="font-sans text-[#e2bfb9] text-sm">Tim kami meninjau validitas dan mengkategorikan isu untuk penanganan yang tepat.</p>
                </li>
                <li className="relative">
                  <div className="absolute w-3 h-3 bg-[#353534] rounded-full -left-[1.95rem] top-1.5 border-2 border-[#131313]"></div>
                  <h4 className="font-sans font-bold text-white mb-1">3. Tindak Lanjut</h4>
                  <p className="font-sans text-[#e2bfb9] text-sm">Diskusikan dengan pihak terkait (Birokrasi Kampus, Fakultas, atau Dosen).</p>
                </li>
                <li className="relative">
                  <div className="absolute w-3 h-3 bg-[#353534] rounded-full -left-[1.95rem] top-1.5 border-2 border-[#131313]"></div>
                  <h4 className="font-sans font-bold text-white mb-1">4. Resolusi</h4>
                  <p className="font-sans text-[#e2bfb9] text-sm">Pembaruan status akan diinformasikan melalui email atau kanal publikasi kami.</p>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-sans text-sm font-semibold text-[#a6a7a8] text-center">Butuh bantuan mendesak?</p>
                <a className="block text-center text-[#ffb4a8] hover:text-[#800000] transition-colors font-sans font-bold mt-2" href="#">Hubungi Hotline Kami</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
