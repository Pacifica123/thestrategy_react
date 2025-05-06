// src/pages/dashboard/index.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deserializeStruct } from '../../shared/factories/StructFactory';
import { Taskboard } from '../../entities/board/model/Taskboard';

type RawListResponse = {
    items: Array<{ type: string; [key: string]: any }>;
};

export default function DashboardPage() {
    const navigate = useNavigate();
    const [boards, setBoards] = useState<Taskboard[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Допустим, у бэка есть эндпоинт /api/v1/struct?context=dashboard
        fetch('/api/v1/struct?context=dashboard', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
            if (!res.ok) throw new Error('Failed to load dashboard');
            return res.json() as Promise<RawListResponse>;
        })
        .then(({ items }) => {
            const tbs = items
            .map(item => deserializeStruct(item))
            .filter((e): e is Taskboard => e instanceof Taskboard);
            setBoards(tbs);
        })
        .catch(err => {
            console.error(err);
            // можно перенаправить на /login, если авторизация сбилась
        })
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading your boards…</div>;
    if (boards.length === 0)
        return (
            <div>
            <h2>No boards yet</h2>
            <button onClick={() => navigate('/board/new')}>Create your first board</button>
            </div>
        );

    return (
        <div>
        <h1>Your Boards</h1>
        <ul>
        {boards.map(board => (
            <li key={board.id}>
            <a onClick={() => navigate(`/board/${board.id}`)}>{board.title}</a>
            </li>
        ))}
        </ul>
        </div>
    );
}
