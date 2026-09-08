import type { Role } from '../types';

export function canManageAllAgenda(role: Role) {
  return role === 'sekretaris' || role === 'ristek';
}
export function canManageContent(role: Role) {
  return ['ristek', 'publikasi_dok', 'humas', 'medinfo'].includes(role);
}
export function canViewFinancial(role: Role) {
  return ['ketua', 'wakil', 'sekretaris', 'bendahara'].includes(role);
}
export function canManageFinancial(role: Role) {
  return role === 'bendahara';
}
export function canViewRecap(role: Role) {
  return ['ketua', 'wakil', 'sekretaris', 'ristek'].includes(role);
}
export function canCreateRecap(role: Role) {
  return role === 'sekretaris';
}
export function canApproveNews(role: Role) {
  return role === 'sekretaris' || role === 'ketua';
}
export function canCreateDraft(role: Role) {
  return role === 'humas';
}
export function isRistek(role: Role) {
  return role === 'ristek';
}
