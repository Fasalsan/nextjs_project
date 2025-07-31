/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';
import myProduct from '@/app/data/myProduct';

export default function ProductDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';

  const id = params?.id;
  const currentCategory = searchParams.get('category') || 'all';

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    const foundProduct = myProduct.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="p-6 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <Button onClick={() => router.back()}>Back</Button>
      <h1 className="text-2xl font-bold mb-2">{product.title[lang] || product.title['en']}</h1>

      <p className="text-sm text-gray-500 mb-6">Category: {product.category}</p>
      <img
        src={product.imageUrl}
        alt={product.title[lang] || product.title['en']}
        className="w-full h-64 object-cover rounded my-4"
      />
      <p className="text-gray-700 mb-4">{product.description[lang] || product.description['en']}</p>
    </div>
  );
}
