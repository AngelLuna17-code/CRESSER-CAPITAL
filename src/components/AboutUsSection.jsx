import React, { useEffect, useState } from 'react';

const AboutUsSection = () => {

    return (
        <div className='container mx-auto py-[50px] lg:py-[100px] px-[10px] lg:px-0'>
            <div>
                <div className='flex justify-center'>
                    <img
                        className='h-auto w-[50%] sm:w-[30%] lg:w-[15%]'
                        src="logo.png"
                        alt="logo"
                    />
                </div>
                <div className='mt-5'>
                    <h2 className='font-bold text-center'>
                        ¿Quiénes{' '}<span className='text-[#a18144]'>somos</span>?
                    </h2>
                    <div className='flex justify-center'>
                        <p className='text-xl mt-3 text-center lg:w-[50%]'>
                            CRESSER es una empresa especializada en el manejo de capital, donde nos enfocamos al 100% en colocar el capital en oportunidades únicas para obtener beneficios.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;