// Types for HIMASISFO Portal

export type Role =
  | 'ketua'
  | 'wakil'
  | 'sekretaris'
  | 'bendahara'
  | 'kadiv'
  | 'kadep'
  | 'ristek'
  | 'publikasi_dok'
  | 'humas'
  | 'medinfo';

export type UnitType = 'departemen' | 'divisi';

export interface User {
  uid: string;
  name: string;
  email: string;
  role: Role;
  unitType?: UnitType;
  unitId?: string;
  photoUrl?: string;
  createdAt: Date;
}

export type NewsStatus = 'draft' | 'menunggu_sekum' | 'menunggu_ketua' | 'published';

export interface News {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
  category: string;
  author: string;
  authorName: string;
  status: NewsStatus;
  createdAt: Date;
  publishedAt?: Date;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  category: 'kegiatan' | 'prestasi';
  uploadedBy: string;
  uploadDate: Date;
}

export type AspirationStatus = 'baru' | 'diproses' | 'selesai';

export interface Aspiration {
  id: string;
  senderName: string;
  email: string;
  category: string;
  message: string;
  status: AspirationStatus;
  submittedAt: Date;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  type: UnitType;
  parentId?: string;
}

export interface StructureMember {
  id: string;
  name: string;
  position: string;
  departmentId: string;
  photoUrl?: string;
  nim?: string;
}

export type AgendaStatus = 'draft' | 'published' | 'reported';

export interface Agenda {
  id: string;
  title: string;
  description: string;
  eventDate: Date;
  unitType: UnitType;
  unitId: string;
  unitName: string;
  pic: string;
  status: AgendaStatus;
  createdBy: string;
  createdAt: Date;
}

export interface AgendaReport {
  id: string;
  agendaId: string;
  agendaTitle: string;
  summary: string;
  results: string;
  obstacles: string;
  documentationUrls: string[];
  createdAt: Date;
  createdBy: string;
  createdByName: string;
}

export interface WeeklyReport {
  id: string;
  weekStart: Date;
  weekEnd: Date;
  notes: string;
  compiledBy: string;
  compiledByName: string;
  agendaCount: number;
  reportCount: number;
  createdAt: Date;
}

export interface MonthlyReport {
  id: string;
  month: number;
  year: number;
  notes: string;
  compiledBy: string;
  compiledByName: string;
  agendaCount: number;
  reportCount: number;
  createdAt: Date;
}

export interface FinancialReport {
  id: string;
  month: number;
  year: number;
  income: number;
  expense: number;
  balance: number;
  notes: string;
  createdBy: string;
  createdByName: string;
  createdAt: Date;
}

export type BugSeverity = 'ringan' | 'sedang' | 'berat';
export type BugStatus = 'baru' | 'dalam_proses' | 'selesai';

export interface BugReport {
  id: string;
  reporterName: string;
  description: string;
  severity: BugSeverity;
  status: BugStatus;
  reportedAt: Date;
  notes?: string;
}

export interface ImportantLink {
  id: string;
  title: string;
  url: string;
  description: string;
  icon?: string;
  category: string;
  order: number;
}

export interface SiteSettings {
  siteName: string;
  chairmanName: string;
  chairmanMessage: string;
  chairmanPhotoUrl?: string;
  visi: string;
  misi: string[];
  aboutText: string;
  contactEmail: string;
  socialMedia: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
}
