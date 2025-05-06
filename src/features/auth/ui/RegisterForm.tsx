// src/features/auth/ui/RegisterForm.tsx
import React, { useState } from 'react';
import { useAuthStore } from '../model/authStore';
import { useNavigate } from 'react-router-dom';

export const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const register = useAuthStore(s => s.register);
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(username, email, password);
            navigate('/login');
        } catch (err) {
            alert((err as Error).message);
        }
    };

    return (
        <form onSubmit={onSubmit} style={{ maxWidth: 320 }}>
        <h2>Register</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign Up</button>
        </form>
    );
};
