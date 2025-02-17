import React from 'react'

const Button = ({id, text, action}) => {
  const handleAction = (e) => {
    action(e);
  };

  return (
    <button id={id} className='button-componente rounded-lg uppercase cursor-pointer bg-[#F44236] w-[150px] text-white opacity-90 mt-5 hover:opacity-100' onClick={handleAction}>{text}</button>
  )
}

export default Button