/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const images = [
    'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/08/background-cong-nghe-24-1.jpg',
    'https://t4.ftcdn.net/jpg/05/18/41/91/360_F_518419158_yXXBww2r5Z3XoutBxRX8KHNZOpPjhC03.jpg',
    'https://img.freepik.com/free-photo/3d-rendering-hexagonal-texture-background_23-2150796417.jpg?semt=ais_hybrid&w=740&q=80',
    'https://static.vecteezy.com/system/resources/thumbnails/027/878/238/small_2x/3d-rendering-dark-hexagonal-background-sci-fi-background-photo.jpg',
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    function prevSlide() {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }

    function nextSlide() {
        setCurrentIndex((currentIndex + 1) % images.length);
    }

    return (
     <div className="relative w-full max-h-140 mx-auto overflow-hidden">
            {/* Aspect ratio 16:9 */}
            <div className="relative aspect-[16/9]">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Language Switcher at top right */}
                <div className="absolute top-4 right-4 z-20">
                    <LanguageSwitcher />
                </div>

                {/* Prev button */}
                {/* <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    aria-label="Previous Slide"
                >
                    ‹
                </button> */}

                {/* Next button */}
                {/* <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    aria-label="Next Slide"
                >
                    ›
                </button> */}
            </div>

            {/* Dots */}
            {/* <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div> */}
        </div>
    );
}