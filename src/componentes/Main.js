import React, {useState} from 'react'
import logo from '../logo.svg';
import Boton from '../componentes/Boton'


export default function Main() {
    const [cantidad, setcantidad] = useState(0)
   
    function sumar(){
      setcantidad(cantidad +1)
    }
    function restar(){
      setcantidad(cantidad -1)
    }
  
  return (
    <>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Ejemplo prueba
          </p>
          <br></br>
          <Boton accion={sumar}  texto={"Sumar"}></Boton>
          <h3>{cantidad}</h3>
          <Boton accion={restar} texto={"Restar"}></Boton>
          </>
  )
}

























//  const [palabra, setPalabra] = useState("")


// const ingresarPalabra = (e) => {
//   let palabraNueva = e.target.value

//   setPalabra(palabraNueva)
// }

// function guardar(e){
//   e.preventDefault()
//   console.log("Nombre:" + palabra)
// }


/* <br></br>
          <input onBlur={ingresarPalabra} placeholder='ingrese su nombre'></input>
          <h3>{palabra}</h3>
          <Boton accion={guardar} texto={"Guardar"}></Boton> */