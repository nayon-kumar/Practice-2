import React from 'react';
import logo from '../assets/logo-dark.svg';
import profile from '../assets/profile.png';

const HeaderArea = ({ onServicesClick }) => {
  return (
    <nav className="bg-white px-6 md:px-12 py-4 flex items-center justify-between">
      
      <div className="text-2xl font-bold text-indigo-600">
        <img className='h-[35px] mt-5 ml-[50px] cursor-pointer' src={logo} alt="" />
      </div>
      
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium mt-2.5">
        <li className="hover:text-indigo-600 cursor-pointer transition hover:underline hover:decoration-yellow-500 hover:decoration-2 hover:underline-offset-10">Home</li>
        
        <li
          onClick={onServicesClick}
          className="hover:text-indigo-600 cursor-pointer transition hover:underline hover:decoration-yellow-500 hover:decoration-2 hover:underline-offset-10"
        >
          Services
        </li>

        <li className="hover:text-indigo-600 cursor-pointer transition hover:underline hover:decoration-yellow-500 hover:decoration-2 hover:underline-offset-10">About</li>
        <li className="hover:text-indigo-600 cursor-pointer transition hover:underline hover:decoration-yellow-500 hover:decoration-2 hover:underline-offset-10">Blog</li>
        <li className="hover:text-indigo-600 cursor-pointer transition hover:underline hover:decoration-yellow-500 hover:decoration-2 hover:underline-offset-10">Contact</li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-indigo-600 transition">
          <img src={profile} alt="" />
          <span className="font-medium">Login</span>
        </div>
        <button className="bg-yellow-500 text-[#2F2505] px-4 py-2 rounded-full font-medium hover:bg-yellow-600 transition cursor-pointer">
          Get in Touch
        </button>
      </div>
    </nav>
  )
}

export default HeaderArea;
