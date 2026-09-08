import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock users for development (no Firebase needed)
const MOCK_USERS: Record<string, User & { password: string }> = {
  'ketua@himasisfo.ac.id': { uid: 'u_ketua', name: 'Nama Ketua', email: 'ketua@himasisfo.ac.id', role: 'ketua', createdAt: new Date(), password: 'ketua123' },
  'wakil@himasisfo.ac.id': { uid: 'u_wakil', name: 'Nama Wakil Ketua', email: 'wakil@himasisfo.ac.id', role: 'wakil', createdAt: new Date(), password: 'wakil123' },
  'sekretaris@himasisfo.ac.id': { uid: 'u_sekum', name: 'Nama Sekretaris', email: 'sekretaris@himasisfo.ac.id', role: 'sekretaris', createdAt: new Date(), password: 'sekum123' },
  'bendahara@himasisfo.ac.id': { uid: 'u_bend', name: 'Nama Bendahara', email: 'bendahara@himasisfo.ac.id', role: 'bendahara', createdAt: new Date(), password: 'bend123' },
  'ristek@himasisfo.ac.id': { uid: 'u_ristek', name: 'Nama Kadiv Ristek', email: 'ristek@himasisfo.ac.id', role: 'ristek', unitType: 'divisi', unitId: 'ristek', createdAt: new Date(), password: 'ristek123' },
  'humas@himasisfo.ac.id': { uid: 'u_humas', name: 'Nama Kadiv Humas', email: 'humas@himasisfo.ac.id', role: 'humas', unitType: 'divisi', unitId: 'humas_kemitraan', createdAt: new Date(), password: 'humas123' },
  'publikasi@himasisfo.ac.id': { uid: 'u_pubdok', name: 'Nama Kadiv Publikasi', email: 'publikasi@himasisfo.ac.id', role: 'publikasi_dok', unitType: 'divisi', unitId: 'publikasi_dok', createdAt: new Date(), password: 'pubdok123' },
  'kadiv@himasisfo.ac.id': { uid: 'u_kadiv', name: 'Nama Kadiv Kompetensi', email: 'kadiv@himasisfo.ac.id', role: 'kadiv', unitType: 'divisi', unitId: 'kompetensi', createdAt: new Date(), password: 'kadiv123' },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 800)); // simulate network
    const user = MOCK_USERS[email];
    if (!user || user.password !== password) {
      setIsLoading(false);
      throw new Error('Email atau password salah.');
    }
    const { password: _, ...userWithoutPw } = user;
    setCurrentUser(userWithoutPw);
    setIsLoading(false);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

