import React from "react"
import Navegacion from "./components/Navegacion"
import Hero from "./components/Hero"
import Tarjeta from "./components/Tarjeta"
import data from "./data"
import './App.css'

export default function App() {
    const tarjetas = data.map(item => {
        return (
            <Tarjeta
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navegacion />
            <Hero />
            <section className="cards-list">
                {tarjetas}
            </section>
        </div>
    )
}