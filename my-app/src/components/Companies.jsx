import React from 'react'
import slack from '../assets/slack-logo.svg'
import dropbox from '../assets/dropbox-logo.svg'
import shopify from '../assets/shopify-logo.svg'
import google from '../assets/google-logo.svg'

const Companies = () => {
    return (
        <div className='bg-gray-100'>
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 p-6 bg-gray-50 border-t border-b border-gray-200 w-[90%] mx-auto">
                {/* Text Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-[#FFD800]">200+</h1>
                    <p className="text-gray-600">Trusted Companies</p>
                </div>

                <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-15">
                    <img src={slack} alt="Slack" className="w-28" />
                    <img src={dropbox} alt="Dropbox" className="w-28" />
                    <img src={shopify} alt="Shopify" className="w-28" />
                    <img src={google} alt="Google" className="w-28" />
                </div>
            </div>
        </div>
    )
}

export default Companies
