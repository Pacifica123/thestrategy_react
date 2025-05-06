// src/features/auth/api/authApi.ts
interface UserDto {
    id: number;
    username: string;
    email: string;
}
interface TokenDto {
    token: string; // JWT
}

let API_LOCAL_ROOT = 'http://127.0.0.1:5000';
let API_ROOT = API_LOCAL_ROOT;

export async function registerApi(username: string, email: string, password: string): Promise<UserDto> {
    const res = await fetch(API_ROOT+'/api/v1/auth/reg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });
    if (!res.ok) throw new Error('Registration failed');
    return res.json();
}

export async function loginApi(username: string, password: string): Promise<{ token: string; sub: string; iat: number; exp: number }> {
    const res = await fetch(API_ROOT+'/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
}
