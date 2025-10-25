import React from 'react'

const GetInTouch = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="w-[90%] max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left bg-[#FFD800] rounded-2xl p-5 md:p-10">
        
        {/* Text Section */}
        <div>
          <h1 className="text-2xl md:text-2xl font-bold text-black mb-3">
            Have a Project in Mind?
          </h1>
          <p className="text-black">
            Nullam eget felis eget nunc lobortis. Faucibus ornare suspendisse sed nisi sagittis.
          </p>
        </div>

        {/* Button */}
        <button className="bg-white hover:bg-black text-black hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mt-6 md:mt-0">
          Get in Touch
        </button>
      </div>
    </div>
  )
}

export default GetInTouch
