import React from 'react'
import banner from '../assets/home-hero-new@2x.jpg'

const BannerArea = () => {
    return (
        <section className="px-4 md:px-8 lg:px-16 py-8">
            
            <div
                className="relative rounded-3xl overflow-hidden h-[800px] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                
                <div className="absolute inset-0"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Digital Products For Business
                    </h1>
                    <p className="text-sm md:text-base mb-6 leading-relaxed">
                        Nunc lacus lacus sit amet accumsan est pulvinar non praesent
                        tristique enim lorem phasellus auctor lacus.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full transition duration-300">
                        More Details
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BannerArea
