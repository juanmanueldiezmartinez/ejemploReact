import React from 'react'
import { Link } from 'react-router-dom'
//no usamos <a></a> porque una de las ideas principales en react es que no se recargue la pagina y link nos provee eso

export default function NavBar() {
  return (
    <nav className='nav'>  
    {/* usamos to="" en vez de usar href="" */}
        <Link className='link' to='/'>Inicio</Link>
        <Link className='link' to='/personajes'>Personajes</Link>
        <Link className='link' to='/buscador'>Buscador</Link>
    </nav>
  )
}
