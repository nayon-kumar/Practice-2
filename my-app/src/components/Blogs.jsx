import React from 'react'
import { motion } from 'framer-motion'
import laptop from '../assets/laptop.jpg'
import book from '../assets/book.jpg'
import female from '../assets/female.jpg'

const Blogs = () => {
    return (
        <div>
            <div>
                <motion.h1
                    className='mt-[15px] text-3xl font-bold text-center'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Latest from Blog
                </motion.h1>

                <motion.p
                    className='text-center w-[90%] md:w-[60%] mx-auto mt-[15px]'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
                </motion.p>
            </div>

            <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-12">

                {/* Card 1 */}
                <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="overflow-hidden">
                        <img 
                            src={book} 
                            alt="Book" 
                            className="w-full h-full object-cover mb-4 transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="flex gap-4 text-sm mb-2 p-4">
                        <a href="#" className="bg-[#FFC900] px-2 text-[15px]">AGENCY</a>
                        <a href="#" className="bg-[#FFC900] px-2 text-[15px]">NEWS</a>
                    </div>
                    <div className="px-4 pb-4">
                        <h1 className="text-[20px] font-bold text-gray-900 mb-2">
                            Massa Vitae Toutor Condimentum Lacinia Quis
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.… 
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="overflow-hidden">
                        <img 
                            src={laptop} 
                            alt="Laptop" 
                            className="w-full h-full object-cover mb-4 transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="flex gap-4 text-sm mb-2 p-4">
                        <a href="#" className="bg-[#FFC900] px-2 text-[15px]">NEWS</a>
                    </div>
                    <div className="px-4 pb-4">
                        <h1 className="text-[20px] font-bold text-gray-900 mb-2">
                            Venenatis Urna Cursus Eget Nunc Scelerisque
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.… 
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="overflow-hidden">
                        <img 
                            src={female} 
                            alt="Female" 
                            className="w-full h-full object-cover mb-4 transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="flex gap-4 text-sm mb-2 p-4">
                        <a href="#" className="bg-[#FFC900] px-2 text-[15px]">NEWS</a>
                    </div>
                    <div className="px-4 pb-4">
                        <h1 className="text-[20px] font-bold text-gray-900 mb-2">
                            Donec Adipiscing Tristique Risus Nec Feugiat
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.… 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blogs
