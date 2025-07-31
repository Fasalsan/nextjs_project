// components/Header.js
'use client';

export default function Header() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Dashboard Header</h1>
            {/* You can add user info, logout button, etc here */}
        </header>
    );
}
