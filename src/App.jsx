
import React from 'react'
import './App.css'
import Hero from './componentes/Hero'
import Navegacion from './componentes/Navegacion'
import Tarjeta from './componentes/Tarjeta'

function App() {
  

  return (
      // <Hero />
    <>
      <Navegacion />
      <Tarjeta 
        rating= "5.0"
        reviewCount={6}
        country="USA"
        title="Lecciones de vida con Katie Zaferes"
        price={136}
        
      
      />

    </>
  )
}

export default App

