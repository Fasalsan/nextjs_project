'use client';

import { useSearchParams } from 'next/navigation';
import Data from '../api/Data';

const categories = ['all', 'electronics', 'books'];

export default function useFilteredProducts() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';

  const filteredProducts =
    category === 'all'
      ? Data
      : Data.filter((product) => product.category === category);

  return {
    filteredProducts,
    currentCategory: category,
    categories,
  };
}
