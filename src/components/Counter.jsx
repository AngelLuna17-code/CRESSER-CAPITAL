import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('counter-section');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight && !startCounting) {
                    setStartCounting(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [startCounting]);

    useEffect(() => {
        if (startCounting) {
            const interval1 = setInterval(() => {
                setCount1(prevCount => (prevCount < 150 ? prevCount + 1 : 150));
            }, 10); // Intervalo de 10 milisegundos (rápido)

            const interval2 = setInterval(() => {
                setCount2(prevCount => (prevCount < 15 ? prevCount + 1 : 15));
            }, 50); // Intervalo de 50 milisegundos

            const interval3 = setInterval(() => {
                setCount3(prevCount => (prevCount < 100 ? prevCount + 1 : 100));
            }, 20); // Intervalo de 20 milisegundos

            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
            };
        }
    }, [startCounting]);

    return (
        <div id="counter-section" className='container mx-auto py-[100px]'>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                <div>
                   
                </div>
                <div className='text-center'>
                    <p>{count1}</p>
                </div>
                <div className='text-center'>
                    <p>{count2}</p>
                </div>
                <div className='text-center'>
                    <p>{count3}%</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
