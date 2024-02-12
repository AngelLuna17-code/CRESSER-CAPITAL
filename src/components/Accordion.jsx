import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const togglePanel = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section>
            <div className='w-full  py-[100px]'>
                <div className='container mx-auto'>
                    <div className='grid grid cols-1 lg:grid-cols-2'>
                        <div className='flex items-center justify-center'>
                            <h2>
                                Preguntas frecuentes
                            </h2>
                        </div>
                        <div className='mt-5 lg:mt-0'>
                            {/* Accordion 1 */}
                            <button className={`accordion ${activeIndex === 0 ? 'active' : ''}`} onClick={() => togglePanel(0)}>¿Dónde invertimos?</button>
                            <div className="panel" style={{ maxHeight: activeIndex === 0 ? '250px' : '0px' }}>
                                <div className='pb-4'>
                                    <h3 className='text-xl'>
                                        Invertimos en el mercado accionario
                                    </h3>
                                    <p>
                                        ugar donde se emiten, compran y venden acciones de empresas que cotizan en la bolsa de valores (largo plazo)
                                    </p>
                                    <h3 className='text-xl'>
                                        Mercado de divisas internacional
                                    </h3>
                                    <p>
                                        Donde se caracteriza por el libre intercambio de divisas y su principal objetivo es facilitar el comercio internacional y la inversión entre países (liquidez)
                                    </p>
                                </div>
                            </div>
                            {/* Accordion 1 */}
                            {/* Accordion 2 */}
                            <button className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => togglePanel(1)}>Nuestro fondo</button>
                            <div className="panel" style={{ maxHeight: activeIndex === 1 ? '250px' : '0px' }}>
                                <div className='pb-4'>
                                    <h3>
                                        Consigue estabilidad y tranquilidad financiera con la renta fija.
                                    </h3>
                                    <p>
                                        Obtén ingresos regulares y predecibles sin preocuparte por la volatilidad del mercado. Asegura tu futuro y disfruta de rendimientos estables.
                                    </p>
                                </div>
                            </div>
                            {/* Accordion 2 */}
                            {/* Accordion 3 */}
                            <button className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => togglePanel(2)}>¿Qué no somos?</button>
                            <div className="panel" style={{ maxHeight: activeIndex === 2 ? '250px' : '0px' }}>
                                <div className='pb-4'>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;