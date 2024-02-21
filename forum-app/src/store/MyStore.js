import { create } from 'zustand';

export const useStore = create((set) => ({
  user: null,
  setUser: (data) => set((state) => ({ user: data })),
}));
