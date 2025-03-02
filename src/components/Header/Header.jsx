'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Header(){
    const router = useRouter()

    return(
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between px-6 backdrop-blur-xl bg-black/50 shadow-2xl"> 
                <div className="flex items-center gap-8">
                    <Link href="/" >
                        <Image 
                        src="/assets/logo-cardforge.png" 
                        alt="Logo CardForge" 
                        width={160} 
                        height={32}
                        className="w-40 h-40"
                        />
                    </Link>
                </div>

                <nav className="md:flex items-center hidden gap-8">
                    <Link 
                    href="/" 
                    className="text-2xl text-gray-300 hover:text-white transition-colors">Inicio
                    </Link>

                    <Link 
                    href="/cards" 
                    className="text-2xl text-gray-300 hover:text-white transition-colors">Cards
                    </Link>
                </nav>

                <button 
                onClick={() => router.push("/cardsSort")} 
                className="bg-white rounded-xl text-black w-32 h-12">
                Sortear Cartas</button>
            </div>
        </header>
    )
}