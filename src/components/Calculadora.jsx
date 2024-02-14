import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Calculadora = () => {
    const [amount, setAmount] = useState('10000'); // Set initial amount to '10000'
    const [term, setTerm] = useState('6');
    const [yieldAmount, setYieldAmount] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [cleaned, setCleaned] = useState(false);

    const handleCalculate = () => {
        if (amount < 10000) {
            Swal.fire({
                icon: 'error',
                title: 'Monto bajo',
                text: 'Por favor indique un monto superior o igual a 10000',
            });
        } else {
            let totalr, totalt;
            switch (term) {
                case '6':
                    totalr = amount * 0.074;
                    totalt = parseFloat(amount) + parseFloat(totalr);
                    setYieldAmount(totalr);
                    setTotalAmount(totalt);
                    break;
                case '12':
                    totalr = amount * 0.18;
                    totalt = parseFloat(amount) + parseFloat(totalr);
                    setYieldAmount(totalr);
                    setTotalAmount(totalt);
                    break;
                default:
                    break;
            }
            setCleaned(true);
        }
    };

    const handleClear = () => {
        setAmount('10000');
        setYieldAmount('');
        setTotalAmount('');
        setCleaned(false);
    };

    return (
        <section>
            <div className='container mx-auto py-[50px] lg:py-[100px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex items-center justify-center'>
                        <h2>
                            Ten una previa de{' '}
                            <br />
                            <span className='text-[#a18144]'>tu dinero a crecer</span>
                        </h2>
                        {/* Div cuadrado que se llena */}
                        <div className="square">
                            <div className="fill" style={{ height: `${(amount / 100000) * 100}%` }}>
                                <svg className='text-[#ffffff]' xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg>
                            </div>
                        </div>
                        {/* Div cuadrado que se llena */}
                    </div>
                    {/* Calculadora */}
                    <div className='mt-5 lg:mt-0'>
                        <div className='grid grid-cols-2'>
                            {/* Cantidad */}
                            <div className='px-[10px] relative'>
                                <label htmlFor="amount">Cantidad:</label>
                                <br />
                                <input
                                    className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
                                    type="number"
                                    id="amount"
                                    value={cleaned ? '' : amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            {/* Range Input */}
                            <div className='px-[10px]'>
                                <label htmlFor="rangeAmount">Cantidad (rango):</label>
                                <br />
                                <input
                                    type="range"
                                    id="rangeAmount"
                                    className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-3'
                                    min="10000"
                                    max="100000"
                                    step="10000"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            {/* Range Input */}
                            {/* Plazo */}
                            <div className='px-[10px]'>
                                <label htmlFor="term">Plazo:</label>
                                <br />
                                <select
                                    className='w-full p-[15px] bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
                                    id="term"
                                    value={term}
                                    onChange={(e) => setTerm(e.target.value)}
                                >
                                    <option value="6">6 meses</option>
                                    <option value="12">12 meses</option>
                                </select>
                            </div>
                            {/* Plazo */}
                        </div>
                        {/* Button calcular */}
                        <div className='flex items-center justify-center mt-5'>
                            <button
                                className='bg-[#9a7b46] hover:bg-[#2b2314] text-white px-6 py-2 rounded-[15px]'
                                onClick={handleCalculate}>
                                Calcular
                            </button>
                        </div>
                        {/* Button calcular */}
                        <div>
                            {/* Rendimiento */}
                            <div className='mt-3 px-[10px]'>
                                <label htmlFor="yield">Rendimiento:</label>
                                <br />
                                <input
                                    className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
                                    type="text"
                                    id="yield"
                                    value={yieldAmount}
                                    readOnly
                                />
                            </div>
                            {/* Rendimiento */}
                            {/* Total */}
                            <div className='mt-3 px-[10px]'>
                                <label htmlFor="total">Total:</label>
                                <br />
                                <input
                                    className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
                                    type="text"
                                    id="total"
                                    value={totalAmount}
                                    readOnly
                                />
                            </div>
                            {/* Total */}
                        </div>
                        {/* botón limpiar */}
                        <div className='flex items-center justify-center mt-5'>
                            <button
                                className='bg-[#9a7b46] hover:bg-[#2b2314] text-white px-6 py-2 rounded-[15px] ml-4'
                                onClick={handleClear}>
                                Limpiar
                            </button>
                        </div>
                        {/* botón limpiar */}
                    </div>
                    {/* Calculadora */}
                </div>
            </div>
        </section>
    );
};

export default Calculadora;
