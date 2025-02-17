import React from 'react'
import Button from './Button'

const ImcTable = ({ data, imc, info, infoClass, resetCalc }) => {
    const getInfoClassColor = (infoClass) => {
        switch (infoClass) {
            case 'medium':
            return 'text-yellow-400';
            case 'good':
            return 'text-green-400';
            case 'bad':
            return 'text-red-400';
            default:
            return 'text-white';
        }
    };

    return (
        <div className='flex flex-col gap-5 text-white'>
            <p className='text-center text-2xl'>Seu Imc: <span className={getInfoClassColor(infoClass)}>{imc}</span></p>
            <p className='text-center text-2xl'>Situação atual: <span className={getInfoClassColor(infoClass)}>{info}</span></p>
            <h3 className='text-center text-[20px]'>Confira as classificações:</h3>
            <div>
                <table>
                    <thead>
                        <th className='p-2'>IMC</th>
                        <th className='p-2'>Classificação</th>
                        <th className='p-2'>Obesidade</th>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.info}>
                                <td className='text-center p-2'>{item.classification}</td>
                                <td className='text-center p-2'>{item.info}</td>
                                <td className='text-center p-2'>{item.obesity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Button id="back-btn" text="Voltar" action={resetCalc}/>
        </div>
    )
}

export default ImcTable