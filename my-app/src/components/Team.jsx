import React from 'react'
import profile1 from '../assets/team-member-1@2x.jpg'
import profile2 from '../assets/team-member-2@2x.jpg'
import profile3 from '../assets/team-member-3@2x.jpg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const Team = () => {
    return (
        <div className="px-6 md:px-12 lg:px-24 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h3 className='font-bold text-lg'>Good work, good people</h3>
                <h1 className='mt-4 text-3xl md:text-4xl font-bold'>Our Professional Team</h1>
                <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
                    Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem.
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-10">
                {/* Card 1 */}
                <div className="bg-white rounded-lg flex-1 min-w-[250px] max-w-[500px] flex flex-col">
                    {/* Big image full width of card */}
                    <img src={profile1} alt="Profile" className="w-full rounded-[20px] object-cover" />
                    
                    {/* Content below image */}
                    <div className="p-6 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Terry Green</h3>
                        <p className="text-gray-500 mb-4">Chief Executive</p>
                        <div className="flex gap-4">
                            <img src={facebook} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                            <img src={twitter} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                            <img src={instagram} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg flex-1 min-w-[250px] max-w-[500px] flex flex-col">
                    <img src={profile2} alt="Profile" className="w-full rounded-[20px] object-cover" />
                    <div className="p-6 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Brandon Hudson</h3>
                        <p className="text-gray-500 mb-4">Developer</p>
                        <div className="flex gap-4">
                            <img src={facebook} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                            <img src={twitter} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                            <img src={instagram} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg flex-1 min-w-[250px] max-w-[500px] flex flex-col">
                    <img src={profile3} alt="Profile" className="w-full rounded-[20px] object-cover" />
                    <div className="p-6 flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Sara Fox</h3>
                        <p className="text-gray-500 mb-4">Web Designer</p>
                        <div className="flex gap-4">
                            <img src={facebook} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                            <img src={twitter} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                            <img src={instagram} alt="" className="cursor-pointer h-6 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
