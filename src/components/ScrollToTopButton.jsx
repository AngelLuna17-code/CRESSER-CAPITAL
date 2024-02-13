import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-3 right-4 lg:bottom-12 lg:right-10 bg-[#9a7b46] hover:bg-[#2b2314] text-white px-6 py-5 rounded-[100%] ${isVisible ? 'visible' : 'invisible'
                }`}
            onClick={scrollToTop}
        >
            ▲
        </button>
    );
};

export default ScrollToTopButton;
