import React, { useState, useEffect } from 'react';


function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeAnimation, setFadeAnimation] = useState(false);

    const content = [
        {
            text: "Proyecta",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hero/slide-1.webp")',
        },
        {
            text: "Invierte",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hero/slide-2.webp")',
        },
        {
            text: "Crece",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hero/slide-3.webp")',
        },
        {
            text: "Gana",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hero/slide-4.webp")',
        },
    ];

    const handleNextImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % content.length);
            setFadeAnimation(false);
        }, 300);
    };

    const handlePrevImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
            setFadeAnimation(false);
        }, 300);
    };

    const autoPlayInterval = 3000;

    useEffect(() => {
        const autoPlayTimer = setInterval(() => {
            handleNextImage();
        }, autoPlayInterval);

        return () => {
            clearInterval(autoPlayTimer);
        };
    }, [currentImageIndex]);

    const currentContent = content[currentImageIndex];

    const divStyle = {
        backgroundImage: currentContent.backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#000',
        backgroundPosition: '50% 50%',
        overflow: 'hidden',
        backdropFilter: 'blur(0)',
        WebkitBackdropFilter: 'blur(0)',
        backgroundAttachment: "fixed",
    };

    return (
        <div className='w-full py-[250px] flex justify-between fade-container' style={divStyle}>
            <button onClick={handlePrevImage}
                className="w-[50px] text-grey hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 rounded-full">
                &lt;
            </button>
            <div className={` text-center ${fadeAnimation ? 'fade-out' : 'fade-in'}`}>
                <div className='flex justify-center'>
                    <img
                        className='h-auto w-[65%]'
                        src="logo.png"
                        alt="logo"
                    />
                </div>
                <div className='text-3xl mt-5'>
                    <h1 className='font-bold'>{currentContent.text}</h1>
                </div>
            </div>
            <button onClick={handleNextImage}
                className="w-[50px] text-grey hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 rounded-full">
                &gt;
            </button>
        </div>
    );
}

export default Hero;