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
        <div className='paralax-1 w-full'>
            <div id="counter-section" className='container mx-auto py-[100px] px-[10px] lg:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                    {/* Col 1 */}
                    <div className='text-center flex items-center justify-center'>
                        <h2>
                            0 perdidas
                        </h2>
                    </div>
                    {/* Col 1 */}
                    {/* Col 2 */}
                    <div className='text-center flex items-center justify-center'>
                        <div>
                            <h2>
                                {count1}
                            </h2>
                            <p className='text-xl'>
                                <span className='text-[#a18144] '>
                                    inversionistas
                                </span>
                                {' '}
                                felices
                            </p>
                        </div>
                    </div>
                    {/* Col 2 */}
                    {/* Col 3 */}
                    <div className='text-center flex items-center justify-center'>
                        <div>
                            <h2>
                                {count2}
                            </h2>
                            <p className='text-xl'>
                                15 empresas
                                {' '}
                                <span className='text-[#a18144]'>
                                    invirtiendo
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* Col 3 */}
                    {/* Col 4 */}
                    <div className='text-center flex items-center justify-center'>
                        <div>
                            <h2>
                                Inversión
                                {' '}
                                <span className='text-[#a18144]'>
                                    {count3}
                                    %
                                </span>
                                {' '}
                                segura
                            </h2>
                            <p className='text-xl'>
                                Hasta un rendimiento bruto del
                                {' '}
                                <span className='text-[#a18144]'>
                                    20%
                                </span>
                                .
                            </p>
                        </div>

                    </div>
                    {/* Col 4 */}
                </div>
            </div>
        </div>
    );
};

export default Counter;