'use client';

export default function Button({ children, onClick, className = '', type = 'button' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
}
