import React from 'react'
import design from '../assets/design-icon.svg'
import development from '../assets/development-icon.svg'
import brand from '../assets/brand-icon.svg'
import marketing from '../assets/marketing-icon.svg'

const ServiceArea = () => {
  return (
    <div className="px-6 md:px-12 lg:px-15 py-16 lg:pt-[300px]">
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        <div className="lg:w-2/5 text-center lg:text-left">
          <h3 className="font-bold text-lg uppercase tracking-wide">Our Services</h3>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            We Create Best Digital Products
          </h1>
          <p className="mt-4 text-gray-600 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
            Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. 
            Praesent tristique enim lorem. Phasellus a auctor lacus proin vitae accumsan nunc.
          </p>
          <button className="mt-6 bg-yellow-500 text-[#190B00] font-bold px-6 py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer">
            Explore More
          </button>
        </div>

        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-[-100px]">
         
          <div className="bg-white shadow-md rounded-xl lg:mt-[-150px] p-6 hover:shadow-lg lg:h-[400px] transition">
            <img src={design} alt="" className="mb-5 w-16 h-16 object-contain" />
            <h2 className="lg:mt-[60px] text-xl font-semibold mb-2">UX/UI Design</h2>
            <p className="text-gray-600 text-sm">Fusce dignissim blandit justo, eget elementum.</p>
          </div>

          <div className="bg-white shadow-md lg:h-[400px] rounded-xl p-6 hover:shadow-lg transition">
            <img src={brand} alt="" className="mb-4 w-16 h-16 object-contain" />
            <h2 className="lg:mt-[60px] text-xl font-semibold mb-2">Brand Identity</h2>
            <p className="text-gray-600 text-sm">Fusce dignissim blandit justo, eget elementum.</p>
          </div>

          <div className="bg-white lg:h-[400px] lg:mt-[-150px] shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img src={marketing} alt="" className="mb-4 w-16 h-16 object-contain" />
            <h2 className="lg:mt-[60px] text-xl font-semibold mb-2">Marketing & SEO</h2>
            <p className="text-gray-600 text-sm">Fusce dignissim blandit justo, eget elementum.</p>
          </div>

          <div className="bg-white lg:h-[400px] shadow-md rounded-xl p-6  hover:shadow-lg transition">
            <img src={development} alt="" className="mb-4 w-16 h-16 object-contain" />
            <h2 className="lg:mt-[60px] text-xl font-semibold mb-2">Web Development</h2>
            <p className="text-gray-600 text-sm">Fusce dignissim blandit justo, eget elementum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceArea
