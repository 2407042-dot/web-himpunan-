# Portal Web HIMASISFO

Portal Web Himpunan Mahasiswa Sistem Informasi (HIMASISFO) adalah platform digital resmi untuk mempublikasikan informasi organisasi, mendokumentasikan kegiatan, menjadi wadah aspirasi anggota, serta menyediakan sistem pelaporan kegiatan terpusat dengan role-based access control (RBAC).

## Teknologi yang Digunakan
- **Frontend Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Backend & Database:** Firebase (Authentication, Firestore, Hosting)
- **Desain & Arsitektur:** Modern Web Design dengan RBAC (Role-Based Access Control)

## Struktur Repositori
- `himasisfo-web/`: Source code utama untuk website (React).
- `prd.md`: Product Requirements Document lengkap dari sistem ini.
- `stitch_portal_digital_himasisfo/`: UI Mockups / prototipe halaman web (Desktop & Mobile).
- `strukturalv2.drawio`: Diagram struktur.

## Cara Menjalankan Secara Lokal

1. Masuk ke direktori web:
   ```bash
   cd himasisfo-web
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

Aplikasi akan berjalan secara default di `http://localhost:5173`.
