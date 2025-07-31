'use client';

import { useEffect } from 'react';

export default function Modal({ show, onClose, children }) {
    useEffect(() => {
        if (show) {
            // Prevent background scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [show]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black font-bold"
                    aria-label="Close modal"
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}
