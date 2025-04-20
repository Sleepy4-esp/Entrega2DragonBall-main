import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="Escroto">
        <ul>            
            <Link to={"/"} className='item'>Inicio</Link>
            <Link to={"/filter/Male"} className='item'>Masculino</Link>            
            <Link to={"/filter/Female"} className='item'>Femenino</Link>            
            <Link to={"/filter/Acercade"} className='item'>Acerca de</Link>            
        </ul>
    </nav>
  )
}

export default NavBar