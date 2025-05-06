// src/features/auth/model/authStore.ts
import {create} from 'zustand';
import { registerApi, loginApi } from '../api/authApi';

type AuthState = {
    token: string | null;
    user: { id: number; username: string; email: string } | null;
    register: (u: string, e: string, p: string) => Promise<void>;
    login: (u: string, p: string) => Promise<void>;
    logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,
    async register(username, email, password) {
        const user = await registerApi(username, email, password);
        set({ user });
    },
    async login(username, password) {
        const { token, sub, iat, exp } = await loginApi(username, password);
        localStorage.setItem('jwt', token);
        set({ token });
        // по субу можно запросить профиль — либо разобрать токен, либо сразу хранить в user
    },
    logout() {
        localStorage.removeItem('jwt');
        set({ token: null, user: null });
    },
}));
