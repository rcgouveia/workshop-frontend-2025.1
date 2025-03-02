'use client'
import { useState } from "react"

export default function SortCarts(){
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [showPack, setShowPack] = useState(true)

    async function SortearCartas() {
        setLoading(true)
        setShowPack(false)

        const randomPage = Math.floor(Math.random() * 100) + 1;
        try{
            const response = await fetch(`https://api.pokemontcg.io/v2/cards?pageSize=10&page=${randomPage}`)
            
            const data = await response.json()

            if (data.data){
                const cartasComImagem = data.data.filter(card => card.images && card.images.large)

                if (cartasComImagem.length > 0) {
                    const embaralharCartas = cartasComImagem.sort(() => 0.5 - Math.random())
                    setCards(embaralharCartas.slice(0, 6))
                } else {
                    setCards([])
                }
            }
        } catch (error) {
            console.error("Erro" , error)
        } finally {
            setLoading(false)
        }
    }
    return(
            <div>
                <div className="flex flex-col justify-center items-center">
                {showPack && (
                    <div className="pt-72">
                        <img 
                        src="https://www.pokebeach.com/news/2023/01/Pokemon_TCG_Scarlet_Violet_Booster_Wrap_Miraidon.png" 
                        alt="Pacote de Pokemon TCG" 
                        width={250}
                        className="cursor-pointer transition transform hover:scale-105"
                        onClick={SortearCartas}
                        />
                    </div>
                )}

                    {loading && <p className="text-lg text-gray-300">Monte seu Deck</p>}

                    
                    <div className="flex flex-wrap text-white justify-center gap-8 text-2xl pb-16 pt-96 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
                        {cards.map((card, index) => (
                            <img 
                            key={index}
                            src={card.images.large}
                            alt={card.name} 
                            width={200}
                            className=" hover:w-60 hover:duration-500 transition-all ease-out w-48 mx-auto shadow-lg rounded-lg flex-wrap"
                            /> 
                        ))}
                        
                    </div>
                    
                </div>
            </div>
    )
}