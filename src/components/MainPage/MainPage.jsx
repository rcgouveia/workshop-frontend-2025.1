import Image from "next/image"

export default function MainPage() {
    return (
        <>
            <main className="flex flex-col items-center min-h-screen pt-24">
                    <div className=" bg-black/80 flex flex-col items-center relative m-36 rounded-3xl shadow-2xl">
                        <Image 
                        src="/assets/cardforge-league.png" 
                        alt="Logo CardForge" 
                        width={320} 
                        height={32}
                        quality={100}
                        className="w-auto h-auto image-rendering-pixelated"
                        />
                        <div className="flex flex-col items-center text-white p-4 rounded-2xl text-2xl">
                            <h1>No CardForge League, a paixão por Pokémon e Trading Card Games (TCG) se unem para criar uma </h1>
                                    
                            <h1 className="text-xl">experiência única para treinadores e colecionadores. Aqui, você encontrará um espaço feito para quem </h1>
                            <h1 className="text-lg">
                            vive a emoção dos duelos, busca cartas raras e quer se destacar no mundo competitivo.
                            </h1>
                        </div>
                    </div>
                
            </main>
            <main className="bg-black w-screen h-screen">
                <div className="flex justify-center gap-4 pt-28">
                    <div className="bg-white w-auto h-auto flex flex-col justify-end text-center shadow-xl shadow-zinc-900">
                        <img src="https://tcg.pokemon.com/assets/img/news/items/pt-br/sv08pt5-news-ptbr.jpg" alt="" width={510} height={100}/>
                        <h1 className="text-xl">Não perca a mais nova expansão de Pokémon Estampas</h1>
                        <h1 className="text-xl">Ilustradas, que já está disponível: Escarlate</h1>
                        <h1 className="text-xl">e Violeta — Evoluções Prismáticas!</h1>

                        <button className="m-10 text-white flex items-center justify-center self-center bg-black w-32 h-10 rounded-xl hover:bg-orange-600 transition-all duration-700 ease-in-out">Saiba Mais!</button>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-white w-auto h-auto flex flex-col justify-end text-center shadow-xl shadow-zinc-900">
                            <img src="https://tcg.pokemon.com/assets/img/news/items/pt-br/sv08-news-ptbr.jpg" alt="" width={510} height={100}/>
                            <h1 className="text-xl">Não perca a mais nova expansão de Pokémon</h1>
                            <h1 className="text-xl">Estampas Ilustradas, que já está disponível: </h1>
                            <h1 className="text-xl">Escarlate e Violeta — Fagulhas Impetuosas!</h1>

                            <button className="m-10 text-white flex items-center justify-center self-center bg-black w-32 h-10 rounded-xl hover:bg-orange-600 transition-all duration-700 ease-in-out">Saiba Mais!</button>
                        </div>
                    </div>
                </div>


            </main>
        </>
    )
}