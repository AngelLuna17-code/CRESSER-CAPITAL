import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const togglePanel = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section>
            <div className='w-full py-[50px] lg:py-[100px] px-[10px] lg:px-0'>
                <div className='container mx-auto'>
                    <div className='grid grid cols-1 lg:grid-cols-2'>
                        <div className='mt-5 lg:mt-0 order-2 lg:order-1'>
                            {/* Accordion 1 */}
                            <button className={`accordion text-xl hover:text-[#a18144] ${activeIndex === 0 ? 'active' : ''}`} onClick={() => togglePanel(0)}>¿Dónde invertimos?</button>
                            <div className="panel" style={{ maxHeight: activeIndex === 0 ? '250px' : '0px' }}>
                                <div className='pb-4'>
                                    <p className='font-bold text-[#a18144]'>
                                        Invertimos en el mercado accionario
                                    </p>
                                    <p className='mt-2'>
                                        ugar donde se emiten, compran y venden acciones de empresas que cotizan en la bolsa de valores (largo plazo)
                                    </p>
                                    <p className='font-bold mt-5 text-[#a18144]'>
                                        Mercado de divisas internacional
                                    </p>
                                    <p className='mt-2'>
                                        Donde se caracteriza por el libre intercambio de divisas y su principal objetivo es facilitar el comercio internacional y la inversión entre países (liquidez)
                                    </p>
                                </div>
                            </div>
                            {/* Accordion 1 */}
                            {/* Accordion 2 */}
                            <button className={`accordion hover:text-[#a18144] ${activeIndex === 1 ? 'active' : ''}`} onClick={() => togglePanel(1)}>Nuestro fondo</button>
                            <div className="panel" style={{ maxHeight: activeIndex === 1 ? '250px' : '0px' }}>
                                <div className='pb-4'>
                                    <p className='text-[#a18144] font-bold'>
                                        Consigue estabilidad y tranquilidad financiera con la renta fija.
                                    </p>
                                    <p className='mt-2'>
                                        Obtén ingresos regulares y predecibles sin preocuparte por la volatilidad del mercado. Asegura tu futuro y disfruta de rendimientos estables.
                                    </p>
                                </div>
                            </div>
                            {/* Accordion 2 */}
                            {/* Accordion 3 */}
                            <button className={`accordion text-xl hover:text-[#a18144] ${activeIndex === 2 ? 'active' : ''}`} onClick={() => togglePanel(2)}>¿Qué no somos?</button>
                            <div className="panel" style={{ maxHeight: activeIndex === 2 ? '250px' : '0px' }}>
                                <div className='pb-4 font-bold'>
                                    <p>
                                        No somos una pirámide
                                    </p>
                                    <p>
                                        no somos un multinivel
                                    </p>
                                    <p>
                                        no somos esquema ponzi
                                    </p>
                                </div>
                            </div>
                            {/* Accordion 3 */}
                        </div>
                        <div className='flex items-center justify-center order-1 lg:order-2'>
                            <h2>
                                Preguntas frecuentes
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;