import React from 'react'
import fotosMujeres from '../images/images.jpg'

export default function Hero() {
  return(
    <section className='hero'>
      <img className='hero--foto' src={fotosMujeres} alt="Fotos de mujeres" />
      <h1 className='hero--header'>Experiencias en línea</h1>
      <p className='hero--texto'>Únase a actividades interactivas únicas dirigidas por
         anfitriones únicos, todo sin salir de casa.</p>
    </section>
  )
}