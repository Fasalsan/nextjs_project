/* eslint-disable @next/next/no-img-element */
'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Button from './Button';

export default function Card({ id, title, description, imageUrl, price, currentCategory }) {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';
    const router = useRouter();

    const handleViewDetail = (e) => {
        e.preventDefault();
        router.push(`/product/${id}?category=${currentCategory}`);
    };

    return (
        <div className="border rounded shadow hover:shadow-lg transition overflow-hidden">
            <img src={imageUrl} alt={title[lang] || title['en'] || 'Product Image'} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col gap-3">
                <div className='flex justify-between items-center Fz'>
                    <h2 className="font-bold text-lg mb-1">{title[lang] || title['en']}</h2>
                    <h2 className='text-red-600 font-medium'>Price: {price}$</h2>
                </div>
                {/* <p className="text-gray-600 text-sm">
                    {(description[lang] ?? description['en'] ?? '').substring(0, 60)}...
                </p> */}
                {/* <p className="mt-2 text-xs text-gray-500">Category: {category}</p> */}
                <div className='flex justify-center items-center'>
                    <Button
                        className='w-full rounded-full'
                        onClick={handleViewDetail}>
                        {t('viewDetail')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
