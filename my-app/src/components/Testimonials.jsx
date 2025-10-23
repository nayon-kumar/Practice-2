import React from 'react'
import { motion } from 'framer-motion'
import testimonialsData from '../data/testimonialsData.json'
import female from '../assets/avatar-1@2x.jpg'
import male from '../assets/avatar-2@2x.jpg'

const images = {
  "../assets/avatar-1@2x.jpg": female,
  "../assets/avatar-2@2x.jpg": male,
}

const Testimonials = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 bg-gray-100">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className='font-bold text-lg'>Testimonials</h3>
        <h1 className='mt-4 text-3xl md:text-4xl font-bold'>What Our Client's Say</h1>
        <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
          Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-10">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 min-w-[280px] max-w-[500px] flex flex-col items-center text-center p-6"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={images[testimonial.image]}
              alt={testimonial.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-gray-200 shadow-sm"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h2>
            <p className="text-gray-600 leading-relaxed">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
