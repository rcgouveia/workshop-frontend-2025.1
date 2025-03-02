import Header from "../../components/Header/Header";
import ListPokemons from "../../components/ListPokemons/ListPokemons";

export default function Cards() {
    return(
        <div>
              <main>
                <header>
                  <Header />
                </header>
                <ListPokemons/>
              </main>
              <main className="main-cards w-screen h-screen p-5 hover:text-6xl text-3xl transition-all duration-1000">
                <div className="flex flex-col items-center p-16">
                    <h1 className="text-white">
                        Embarque nessa Aventura
                    </h1>
                    <div className="transition-all duration-1000">
                        <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg" 
                        alt="Logo pokemonTCG"/>
                    </div>
                    <div className="flex justify-center p-16">
                        <img 
                        src="https://criticalhits.com.br/wp-content/uploads/2024/11/1730435869377.jpg" 
                        alt="" 
                        width={800}
                        className="shadow-neutral-500 shadow-2xl transition-all duration-1000" />
                    </div>
                </div>
              </main>
        </div>
    )
}