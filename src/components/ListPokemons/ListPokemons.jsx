'use client'
import { useEffect, useState } from "react";
import CardPokemons from "../CardPokemons/CardPokemons";



export default function CardsPokemon() {

    const [data, setData] = useState([])
    const [seach, setSearch] = useState("")
    

    useEffect(() => {
        const randomPage = Math.floor(Math.random()* 100) + 1

        fetch(`https://api.pokemontcg.io/v2/cards?pageSize=10&page=${randomPage}`)
        .then((response) => response.json())
        .then((data) => setData(data.data)) 
        .catch((error) => console.error("Erro ao buscar os dados:", error))
    }, [])

    const filterCards = data.filter((card) =>
    card.name.toLowerCase().includes(seach.toLowerCase()))
    
    return(
        <main className="">
            <div className=" flex justify-center pt-44 m-6">
                <input 
                type="text" 
                className=" rounded-xl w-52 h-12 p-2" placeholder="Procure por um Pokemon" 
                onChange={(e) => setSearch(e.target.value)}/>
            </div>
            
            <div className="flex flex-wrap text-white justify-center gap-8 text-2xl pb-16">
                {(filterCards.map((card) => 
                <CardPokemons key={card.id} card={card} />))} 
            </div>
        </main>
    )
}