'use client';

import { useTranslation } from 'react-i18next';
import categoryTranslations from '../utils/categoryTranslations';

export default function Tabs({ categories, selectedCategory, onSelect }) {
    const { i18n } = useTranslation();
    const lang = i18n.language || 'en';

    return (
        <div
            className="
        sticky top-0 z-50 bg-white
        overflow-x-auto whitespace-nowrap
        border-b
        shadow-sm
        scrollbar-hide
      "
            style={{ WebkitOverflowScrolling: 'touch' }} // smooth scrolling on iOS
        >
            {categories.map((cat) => {
                const translated = categoryTranslations[lang]?.[cat] || cat;
                const isActive = selectedCategory === cat;

                return (
                    <button
                        key={cat}
                        className={`
              inline-block
              py-3 px-5
              font-medium
              border-b-4
              cursor-pointer
              ${isActive
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-600 hover:text-blue-600'
                            }
              transition-colors duration-200
              whitespace-nowrap
            `}
                        onClick={() => onSelect(cat)}
                    >
                        {translated}
                    </button>
                );
            })}
        </div>
    );
}
