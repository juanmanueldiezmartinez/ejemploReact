import React from 'react'
import { useState, useEffect } from 'react';  //HOOKS

export default function Personajes() {
    const [personajes, setpersonajes] = useState([])


    // explicacion promesas y asincronia --- aca vemos como no nos llega la informacion
    
    // const datos = [{name: "ironman"}, {name:"capitan america"}, {name: "spiderman"}]

    // const mostrarDatos = () => {
    //     setTimeout(() => {
    //         return datos
    //     }, 1500);
    // }
    // console.log(mostrarDatos())



    //FETCH A UNA API EXTERNA --- NOS TRAEMOS LOS DATOS PARA USARLOS EN NUESTRA APP
    const url = "https://rickandmortyapi.com/api/character"

    async function getApi() {
        const response = await fetch(url);
        const data = await response.json()

        setpersonajes(data.results)
      }

    //USAMOS EL HOOK USEEFFECT  
    useEffect(() => {getApi();},[])

    //MOSTRAMOS EL NOMBRE DE TODOS LOS PERSONAJES EN PANTALLA CON MAP --- LLAMAMOS A LA CONSTANTE(ARRAY) EN EL RETURN
    const mostrar = personajes.map(
      (personaje) =>
    <div style={{margin: "20px"}}>
        <div style={{margin:"20px"}}>{/* asi se pone estilos en linea en react, se los trata como un obj  */}
        <div>{`Nombre: ${personaje.name}`}</div>
        <div>{`ID: ${personaje.id}`}</div>
        <div>{`Estado: ${personaje.status}`}</div>
        </div>
        <div>
        <h2>Imagen</h2>
        <img src={personaje.image} alt={"imagen de personaje"}/>
        </div>
    </div>
     )
  
  return (
    <div className='listadoPersonajes'>{mostrar}</div>
  )
}
