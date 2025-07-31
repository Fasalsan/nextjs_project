'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        { href: '/dashboard', label: 'Home' },
        { href: '/dashboard/profile', label: 'Profile' },
        { href: '/dashboard/settings', label: 'Settings' },
    ];

    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
            <h2 className="text-xl font-bold mb-6">Dashboard</h2>
            <nav className="flex flex-col space-y-3">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`p-2 rounded hover:bg-gray-700 ${pathname === href ? 'bg-gray-700 font-semibold' : ''
                            }`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
