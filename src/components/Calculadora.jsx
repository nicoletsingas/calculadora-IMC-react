import React from 'react'
import { useState } from 'react'
import Button from './Button'


const Calculadora = ({calcImc}) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const clearForm = (e) => {
        e.preventDefault();
        setHeight('');
        setWeight('');
    };

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, '');
    };

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);
        setHeight(updatedValue);
    };

    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);
        setWeight(updatedValue);
    };
    
  return (
    <div id='calc-container' className='flex flex-col items-center text-white h-fit w-[400px]'>
        <h2 className='text-2xl mb-5'>Calculadora de IMC</h2>
        <form id='imc-form' className='flex flex-col gap-5 w-full'>
            <div className=' flex flex-col gap-1'>
                <label htmlFor="height">Altura:</label>
                <input type="text" id="height" name="height" placeholder="Ex: 1,75" maxLength={4} className='border-b-2 border-white focus:outline-none' onChange={(e) => handleHeightChange(e)} value={height}/>
            </div>
            <div className=' flex flex-col gap-1'>
                <label htmlFor="weight">Peso:</label>
                <input type="text" id="weight" name="weight" placeholder="Ex: 60kg" maxLength={5} className='border-b-2 border-white focus:outline-none' onChange={(e) => handleWeightChange(e)} value={weight}/>
            </div>
            <div className='flex flex-row w-full justify-between'>
                <Button id="calculate-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default Calculadora