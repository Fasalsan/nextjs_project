'use client';

import { useState } from 'react';

export default function LoginForm({ onSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Please enter username and password');
            return;
        }

        try {
            // Example static token login (replace with real API call)
            localStorage.setItem('token', 'static-token-123');
            onSuccess();
        } catch {
            setError('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}

            <input
                type="text"
                placeholder="Username"
                className="w-full border p-2 rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
                Login
            </button>
        </form>
    );
}
