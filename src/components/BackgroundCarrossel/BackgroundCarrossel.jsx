'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";




export default function BackgroundCarrossel() {
    const images = [
        "assets/lugia-gif.gif",
        "assets/rayquaza-gif.gif",
        "assets/pokebola-gif.gif"
    ]

    return(
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <div className="relative w-full h-full"> 
                
                <Swiper modules={[Autoplay, EffectFade]} 
                effect="fade" 
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-screen w-screen">

                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${src})` }}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-neutral-800 z-10 pointer-events-none"></div>

                
            </div>
        </div>
    )
}
