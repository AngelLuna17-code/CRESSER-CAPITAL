import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Calculator() {
  const [amount, setAmount] = useState(0);
  const [plazo, setPlazo] = useState('6');
  const [rendimiento, setRendimiento] = useState('');
  const [total, setTotal] = useState('');
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    setAmount(0);
    setFillPercentage(0);
  }, []);

  const handleAmountChange = (e) => {
    const newValue = parseFloat(e.target.value);
    if (newValue <= 100000) {
      setAmount(newValue);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Monto excedido',
        text: 'El monto máximo que se puede ingresar es 100,000',
      });
    }
  };

  const handleRangeChange = (e) => {
    const newValue = parseFloat(e.target.value);
    if (newValue <= 100000) {
      setAmount(newValue);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Monto excedido',
        text: 'El monto máximo que se puede ingresar es 100,000',
      });
    }
  };

  const handleCalculate = () => {
    if (amount < 10000) {
      Swal.fire({
        icon: 'error',
        title: 'Monto bajo',
        text: 'Por favor indique un monto superior o igual a 10000',
      });
    } else {
      let totalr;
      let totalt;
      let maxTotal;
      switch (plazo) {
        case '6':
          totalr = (amount * 0.074).toFixed(2);
          totalt = (parseFloat(amount) + parseFloat(totalr)).toFixed(2);
          maxTotal = (100000 + 100000 * 0.18).toFixed(2);
          setRendimiento(totalr);
          setTotal(totalt);
          animateFill((totalt / maxTotal) * 100);
          break;
        case '12':
          totalr = (amount * 0.18).toFixed(2);
          totalt = (parseFloat(amount) + parseFloat(totalr)).toFixed(2);
          maxTotal = (100000 + 100000 * 0.18).toFixed(2);
          setRendimiento(totalr);
          setTotal(totalt);
          animateFill((totalt / maxTotal) * 100);
          break;
        default:
          break;
      }
    }
  };

  const animateFill = (percentage) => {
    let i = 0;
    const intervalId = setInterval(() => {
      setFillPercentage((prevPercentage) => {
        i += 1;
        if (prevPercentage >= percentage || i >= 100) {
          clearInterval(intervalId);
          return percentage;
        }
        return prevPercentage + 1;
      });
    }, 10);
  };

  const handleReset = () => {
    setAmount(0);
    setPlazo('6');
    setRendimiento('');
    setTotal('');
    setFillPercentage(0);
  };

  return (
    <section>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 py-[50px] lg:py-[100px]'>
        <div className='flex items-center justify-center'>
          <div>
            <div className='text-center'>
              <h2>
                Ten una previa de{' '}
                <br />
                <span className='text-[#a18144]'>tu dinero a crecer</span>
              </h2>
            </div>
            {/* Moneda */}
            <div className='coin mt-6'>
              <div className='relleno' style={{ backgroundColor: '#9a7b46', height: `${fillPercentage}%`, transition: 'height 1s ease-in-out' }}></div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
              </svg>
            </div>
            {/* Moneda */}
          </div>
        </div>
        {/* Calculadora */}
        <div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {/* Cantidad */}
            <div>
              <div>
                <label htmlFor="amount">Monto:</label>
                <input
                  className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={handleAmountChange}
                  max={100000}
                />
              </div>
              {/* Rango */}
              <div className='mt-5'>
                <label htmlFor="rangeAmount">Cantidad (rango):</label>
                <input
                  className='w-full h-2 rounded-lg appearance-none cursor-pointer mt-3 bg-[#9a7b46]'
                  type="range"
                  min="0"
                  max="100000"
                  value={amount}
                  onChange={handleRangeChange}
                />
              </div>
              {/* Rango */}
            </div>
            {/* Cantidad */}
            {/* Plazos */}
            <div>
              <label htmlFor="plazo">Plazo:</label>
              <select
                className='w-full p-[15px] bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
                id="plazo"
                value={plazo}
                onChange={(e) => setPlazo(e.target.value)}
              >
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
              </select>
            </div>
            {/* Plazos */}
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
          <div className='mt-3'>
            <label
              htmlFor="rendimiento">Rendimiento:</label>
            <input
              className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
              type="text"
              id="rendimiento"
              value={rendimiento}
              readOnly
            />
          </div>
          {/* Rendimiento */}
          {/* Total */}
          <div className='mt-3'>
            <label htmlFor="total">Total:</label>
            <input
              className='w-full p-3 bg-[#1b1b1b] hover:bg-[#2c2a2a] mt-3'
              type="text"
              id="total"
              value={total}
              readOnly
            />
          </div>
          {/* Total */}
          {/* Button limpiar */}
          <div className='flex items-center justify-center mt-5'>
            <button
              className='bg-[#4a5568] hover:bg-[#2c3344] text-white px-6 py-2 rounded-[15px] ml-3'
              onClick={handleReset}>
              Limpiar
            </button>
          </div>
          {/* Button limpiar */}
        </div>
        {/* Calculadora */}
      </div>
    </section>
  );
}

export default Calculator;