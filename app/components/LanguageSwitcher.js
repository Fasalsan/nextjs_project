'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Image from 'next/image';
import usFlag from '../assets/flags/us.png';
import khFlag from '../assets/flags/kh.webp';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const languages = {
        en: { label: 'English', flag: usFlag },
        km: { label: 'ភាសាខ្មែរ', flag: khFlag },
    };

    const currentLang = i18n.language === 'km' ? 'km' : 'en';

    return (
        <div className="relative inline-block">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm hover:bg-gray-100 text-sm font-medium text-gray-700 transition cursor-pointer"
            >
                <Image
                    src={languages[currentLang].flag}
                    alt="Current Language Flag"
                    width={20}
                    height={14}
                    className=""
                />
                <span>{languages[currentLang].label}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-20 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1">
                        {Object.entries(languages).map(([key, { label, flag }]) => (
                            <li key={key}>
                                <button
                                    onClick={() => changeLanguage(key)}
                                    className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                                        currentLang === key ? 'bg-gray-50 font-semibold' : ''
                                    }`}
                                >
                                    <Image
                                        src={flag}
                                        alt={`${label} Flag`}
                                        width={20}
                                        height={14}
                                        className=""
                                    />
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
