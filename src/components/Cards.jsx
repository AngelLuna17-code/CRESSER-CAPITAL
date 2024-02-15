import React from 'react';

const Cards = () => {
    return (
        <section>
            <div id='cards' className='w-full paralax-2'>
                <div className='container mx-auto py-[50px] lg:py-[100px] px-[10px] lg:px-0'>
                    <div>
                        <h2 className='text-center'>
                            ¿Porqué{' '}<span className='text-[#a18144]'>invertir</span> con nosotros?
                        </h2>
                        <p className='text-center'>
                            Te ofrecemos
                        </p>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                        {/* Card 1 */}
                        <div className='bg-[#1b1b1b] hover:bg-[#2c2a2a] p-2 lg:p-5 flex items-center justify-center'>
                            <div className=''>
                                <div class="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16" className="transition-transform transform hover:scale-110 cursor-pointer text-[#a18144]">
                                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" />
                                    </svg>
                                </div>
                                <p className='text-center mt-3'>
                                    Oportunidades de inversión con rendimientos fijos que te brindarán estabilidad y crecimiento.
                                </p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        {/* Card 2 */}
                        <div className='bg-[#1b1b1b] hover:bg-[#2c2a2a] p-2 lg:p-5 flex items-center justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16" className="transition-transform transform hover:scale-110 cursor-pointer text-[#a18144]">
                                        <path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5z" />
                                        <path d="M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3 3 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3 3 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3 3 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708M6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586" />
                                    </svg>
                                </div>
                                <p className='text-center mt-3'>
                                    No somos empresa multinivel.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        {/* Card 3 */}
                        <div className='bg-[#1b1b1b] hover:bg-[#2c2a2a] p-2 lg:p-5 flex items-center justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16" className="transition-transform transform hover:scale-110 cursor-pointer text-[#a18144]">
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5m0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" />
                                    </svg>
                                </div>
                                <p className='text-center mt-3'>
                                    No ofrecemos rendimientos exagerados.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        {/* Card 4 */}
                        <div className='bg-[#1b1b1b] hover:bg-[#2c2a2a] p-2 lg:p-5 flex items-center justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16" className="transition-transform transform hover:scale-110 cursor-pointer text-[#a18144]">
                                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                                    </svg>
                                </div>
                                <p className='text-center mt-3'>
                                    No prometemos cosas imposibles.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;