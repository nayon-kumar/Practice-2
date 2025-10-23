import React from 'react'
import { motion } from 'framer-motion'
import servicesData from '../data/services.json'

import design from '../assets/design-icon.svg'
import brand from '../assets/brand-icon.svg'
import marketing from '../assets/marketing-icon.svg'
import development from '../assets/development-icon.svg'

const icons = {
  "../assets/design-icon.svg": design,
  "../assets/brand-icon.svg": brand,
  "../assets/marketing-icon.svg": marketing,
  "../assets/development-icon.svg": development,
}

const ServiceArea = () => {
  return (
    <div className="px-6 md:px-12 lg:px-15 py-16 lg:pt-[300px] bg-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

        <motion.div
          className="lg:w-2/5 text-center lg:text-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="font-bold text-lg uppercase tracking-wide">Our Services</h3>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            We Create Best Digital Products
          </h1>
          <p className="mt-4 text-gray-600 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
            Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. 
            Praesent tristique enim lorem. Phasellus a auctor lacus proin vitae accumsan nunc.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-yellow-500 text-[#190B00] font-bold px-6 py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer"
          >
            Explore More
          </motion.button>
        </motion.div>

        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-[-100px]">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={`bg-white shadow-md rounded-[30px] p-6 hover:shadow-lg lg:h-[400px] transition ${service.extraClass || ''}`}
              initial={{ opacity: 0, y: 80 }}               
              whileInView={{ opacity: 1, y: 0 }}           
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}         
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.img
                src={icons[service.icon]}
                alt={service.title}
                className="mb-5 w-16 h-16 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: index * 0.15 }}
                viewport={{ once: true }}
              />
              <h2 className="lg:mt-[60px] text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ServiceArea
