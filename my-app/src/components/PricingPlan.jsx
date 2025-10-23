import React from 'react'
import { motion } from 'framer-motion'
import cross from '../assets/crossMark.png'
import check from '../assets/checkMark.png'
import cardData from '../data/cardData.json' // import JSON

const PricingPlan = () => {
    return (
        <div className='mt-10'>
            <div>
                <motion.h3
                    className='text-center font-bold'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    PRICING PLANS
                </motion.h3>

                <motion.h1
                    className='mt-[15px] text-3xl font-bold text-center'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    The Best Solutions for Our Clients
                </motion.h1>

                <motion.p
                    className='text-center w-[60%] mx-auto mt-[15px]'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
                </motion.p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.03 }}
                        >
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingPlan
