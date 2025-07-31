
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Tabs from './components/Tabs';
import Card from './components/Card';
import myProduct from './data/myProduct';
import ImageSlider from './components/ImageSlider';

export default function ClientHomePage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const { i18n } = useTranslation();
    const lang = i18n.language || 'en';

    // Define categories including "all"
    const categories = ['all', 'electronics', 'books', 'fashion', 'home', 'toys'];

    // Read category from URL query or default to 'all'
    const urlCategory = searchParams.get('category');
    const initialCategory = categories.includes(urlCategory) ? urlCategory : 'all';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    // When selectedCategory changes, update URL query param without reload
    const handleSelectCategory = (cat) => {
        setSelectedCategory(cat);
        // Update URL query param without refreshing the page
        const query = new URLSearchParams(window.location.search);
        if (cat === 'all') {
            query.delete('category'); // remove param for 'all'
        } else {
            query.set('category', cat);
        }
        const newUrl = `${window.location.pathname}?${query.toString()}`;
        router.replace(newUrl, { scroll: false });
    };

    // Keep URL and state in sync if user manually changes URL query param
    useEffect(() => {
        if (urlCategory && urlCategory !== selectedCategory && categories.includes(urlCategory)) {
            setSelectedCategory(urlCategory);
        }
    }, [urlCategory]);

    // Filter products by selected category
    const filteredProducts =
        selectedCategory === 'all'
            ? myProduct
            : myProduct.filter((p) => p.category === selectedCategory);

    return (

        <div>
            <div>
                <ImageSlider />
            </div>
            <Tabs
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={handleSelectCategory}
            />
            <div className=" p-4 bg-white">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                    {filteredProducts.map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            category={product.category}
                            currentCategory={selectedCategory}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
