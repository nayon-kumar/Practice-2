import React from 'react'
import cross from '../assets/crossMark.png'
import check from '../assets/checkMark.png'
import cardData from '../data/cardData.json' // import JSON

const PricingPlan = () => {
    return (
        <div>
            <div>
                <h3 className='text-center font-bold'>PRICING PLANS</h3>
                <h1 className='mt-[15px] text-3xl font-bold text-center'>The Best Solutions for Our Clients</h1>
                <p className='text-center w-[60%] mx-auto mt-[15px]'>
                    Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
                </p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                            <p className="text-7xl font-bold mb-6">{card.price}</p>

                            <div className="w-full space-y-3 mb-6">
                                {card.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <img src={feature.available ? check : cross} alt="" className="w-6 h-6" />
                                        <span>{feature.name}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="bg-yellow-500 text-[#190B00] font-bold px-6 py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer">
                                GET STARTED
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingPlan
