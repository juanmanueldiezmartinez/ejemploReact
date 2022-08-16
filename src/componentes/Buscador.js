import React, {useState, useEffect} from 'react'

export default function Buscador() {
    const [id, setid] = useState(1)
    const [personajeUnico, setpersonajeUnico] = useState({})

    const url = "https://rickandmortyapi.com/api/character"
    //LLAMAMOS A LA API NUEVAMENTE PERO CON UN ID QUE LE PASAMOS PARA BUSCAR UN SOLO PERSONAJE
    async function getPersonajeById(id) {
        
        const response = await fetch(`${url}/${id}`);
        const data = await response.json()

        setpersonajeUnico(data)
      }

      //USAMOS USEEFFECT PARA QUE ESTE ATENTO A CUANDO CAMBIA EL ID TIENE QUE RENDERIZAR EL COMPONENTE DE NUEVO
      useEffect(() => {getPersonajeById(id);}, [id])

      const buscar = (e) => {
        setid(e.target.value)
    }

    //investigar renderizado condicional
  return (
    <div className='buscador'>
        <form>
            <h2>Busca un personaje por ID</h2>
            <input className='buscadorInput' onBlur={buscar} placeholder='Ingrese el id'></input>
        </form>
        <div>
        <div style={{margin:"20px"}}>{/* asi se pone estilos en linea en react, se los trata como un obj  */}
        <div>{`Nombre: ${personajeUnico.name}`}</div>
        <div>{`ID: ${personajeUnico.id}`}</div>
        <div>{`Estado: ${personajeUnico.status}`}</div>
        </div>
        <div>
        <h2>Imagen</h2>
        <img src={personajeUnico.image} alt={"imagen de personaje"}/>
        </div>
        </div>
    </div>
  )
}
