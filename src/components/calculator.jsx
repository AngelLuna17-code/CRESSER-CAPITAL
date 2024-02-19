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
            <div className='coin'>
              <div className='relleno'
                style={{ backgroundColor: '#9a7b46', width: `${fillPercentage}%`, transition: 'width 1s ease-in-out' }}>
              </div>
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