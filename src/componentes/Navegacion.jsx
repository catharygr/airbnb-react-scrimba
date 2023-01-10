import React from 'react'
import logoAirbnb from '../images/airbnb.svg'


export default function Navegacion() {
  return(
    <nav>
      <img className='nav--logo' src={logoAirbnb} alt='Logo de airbnb' />
    </nav>
  )
}