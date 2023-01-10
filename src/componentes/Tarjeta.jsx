import React from 'react'
import katieZaferes from '../images/images-1.jpg'
import estrellaRoja from '../images/star.png'

export default function Tarjeta({rating,reviewCount,country,title,price}) {
  return (
    <div className='tarjeta'>
      <img className={'tarjeta--imagen'}  src={katieZaferes} alt="Foto de la atleta" />
      <div className='tarjeta--estrellas'>
        <img className='tarjeta--estrella' src={estrellaRoja} alt="Imagen de una estrella roja" />
        <span>{rating}</span>
        <span className='gray'>({reviewCount}) </span>
        <span className='gray'>{country}</span>
      </div>
      <p>{title}</p>
      <p><span className='bold'>Desde{price}€</span> / persona</p>
    </div>
  )
}

