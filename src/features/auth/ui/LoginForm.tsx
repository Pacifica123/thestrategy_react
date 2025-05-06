// src/features/auth/ui/LoginForm.tsx
import React, { useState } from 'react';
import { useAuthStore } from '../model/authStore';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useAuthStore(s => s.login);
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate('/dashboard');
        } catch (err) {
            alert((err as Error).message);
        }
    };

    return (
        <form onSubmit={onSubmit} style={{ maxWidth: 320 }}>
        <h2>Login</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign In</button>
        </form>
    );
};
