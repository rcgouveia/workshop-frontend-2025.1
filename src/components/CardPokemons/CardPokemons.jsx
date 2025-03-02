export default function CardPokemon({ card }) {
    return (
        <div className="p-2">
            <div className="pr-4 rounded-lg  text-center">
                {(<img src={card.images.large} alt={card.name} className=" hover:w-60 hover:duration-500 transition-all ease-out w-48 mx-auto" />)}
                <div className="w-48 mx-auto bg-opacity-85 rounded-2xl" >

                    <h2 className="text-xl font-bold">{card.name}</h2>
                    <p>Tipo: {card.types ? card.types[0] : "Desconhecido"}</p>
                    
                </div>
            </div>
        </div>
    );
}