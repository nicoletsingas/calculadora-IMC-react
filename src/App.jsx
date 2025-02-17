import './App.css';
import { useState } from 'react';
import { data } from './data/data';

import Calculadora from './components/Calculadora';
import ImcTable from './components/ImcTable';

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;

    const weightFloat = +weight.replace(',', '.');
    const heightFloat = +height.replace(',', '.');
    const imcresult = (weightFloat /(heightFloat * heightFloat)).toFixed(1);

    setImc(imcresult);

    data.forEach((item) => {
      if (imcresult >= item.min && imcresult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();
    setImc('');
    setInfo('');
    setInfoClass('');
  }

  const [imc, setImc] = useState('');
  const [info, setInfo] = useState('');
  const [infoClass, setInfoClass] = useState('');

  return (
    <div className='container bg-gray-700 w-full h-full rounded-xl p-8'>
      {!imc ? <Calculadora calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/> }
    </div>
  )
}

export default App
