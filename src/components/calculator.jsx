import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Calculator() {
  const [amount, setAmount] = useState(0);
  const [plazo, setPlazo] = useState('6');
  const [rendimiento, setRendimiento] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    setAmount(0);
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
      switch (plazo) {
        case '6':
          totalr = amount * 0.074;
          totalt = parseFloat(amount) + parseFloat(totalr);
          setRendimiento(totalr);
          setTotal(totalt);
          break;
        case '12':
          totalr = amount * 0.18;
          totalt = parseFloat(amount) + parseFloat(totalr);
          setRendimiento(totalr);
          setTotal(totalt);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className='text-black'>
      <label htmlFor="amount">Monto:</label>
      <input type="number" id="amount" value={amount} onChange={handleAmountChange} max={100000} />
      <input type="range" min="0" max="100000" value={amount} onChange={handleRangeChange} />
      <br />
      <label htmlFor="plazo">Plazo:</label>
      <select id="plazo" value={plazo} onChange={(e) => setPlazo(e.target.value)}>
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
      </select>
      <br />
      <button onClick={handleCalculate}>Calcular</button>
      <br />
      <label htmlFor="rendimiento">Rendimiento:</label>
      <input type="text" id="rendimiento" value={rendimiento} readOnly />
      <br />
      <label htmlFor="total">Total:</label>
      <input type="text" id="total" value={total} readOnly />
    </div>
  );
}

export default Calculator;
