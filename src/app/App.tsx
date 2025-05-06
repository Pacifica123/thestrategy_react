import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import DashboardPage from '../pages/dashboard';
// import {BoardPage} from '../pages/board/[id]';

export const App = () => (
    <Routes>
    <Route path="/login"    element={<LoginPage />} />
    <Route path="/reg" element={<RegisterPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
);
