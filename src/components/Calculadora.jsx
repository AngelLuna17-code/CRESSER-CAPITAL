import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Calculadora = () => {
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('6');
    const [yieldAmount, setYieldAmount] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

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
        }
    };

    return (
        <section>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2'>
                    {/* Calculadora */}
                    <div>
                        <div className='grid grid-cols-2'>
                            {/* Cantidad */}
                            <div className='px-[10px]'>
                                <label htmlFor="amount">Cantidad:</label>
                                <br />
                                <input
                                    className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
                                    type="number"
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            {/* Cantidad */}
                            {/* Plazo */}
                            <div className='px-[10px]'>
                                <label htmlFor="term">Plazo:</label>
                                <br />
                                <select className='w-full p-[15px] bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
                                    id="term"
                                    value={term}
                                    onChange={(e) =>
                                        setTerm(e.target.value)}
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
                    {/* Calculadora */}
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculadora;