/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import myProduct from '@/app/data/myProduct';
import { MdOutlineArrowBackIos } from "react-icons/md";

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

  useEffect(() => {
    if (product) {
      console.log('Product detail shown on screen:', product.title[lang] || product.title['en']);
    }
  }, [product]);

  if (!product) {
    return <div className="p-6 text-center">Product not found</div>;
  }

  return (
    <div className=" mx-auto p-4 bg-white h-screen">
      <div
        onClick={() => router.back()}
        className="bg-gray-300 text-white p-4 rounded-full w-fit cursor-pointer group transition duration-200 ease-in-out"
      >
        <MdOutlineArrowBackIos
          className="text-black cursor-pointer transform transition duration-200 ease-in-out group-hover:scale-125"
        />
      </div>


      <div className="flex flex-col md:flex-row gap-6 bg-white mt-4">
        {/* Left column: Title + category + desktop description */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {product.title[lang] || product.title['en']}
            </h1>
            <p className="text-sm mb-4">
              Category: {product.category}
            </p>

            {/* Desktop description: red text, visible from sm and up */}
            <p className="hidden sm:block text-black text-lg mt-6">
              {product.description[lang] || product.description['en']}
            </p>
          </div>
        </div>

        {/* Right column: Image + mobile description */}
        <div className="w-full md:w-1/2 flex flex-col">
          <img
            src={product.imageUrl}
            alt={product.title[lang] || product.title['en']}
            className="w-full h-auto object-cover"
          />

          {/* Mobile description: black text, visible only on mobile */}
          <p className="block sm:hidden text-black text-lg mt-4">
            {product.description[lang] || product.description['en']}
          </p>
        </div>
      </div>
    </div>
  );
}
