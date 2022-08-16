import React from 'react'

function Boton({texto, accion}) {
  return (
   <button onClick={accion} className='boton'>{texto}</button>
  )
}

export default Boton;
