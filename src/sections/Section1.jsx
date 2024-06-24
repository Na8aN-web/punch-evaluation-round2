import React, { useState } from 'react';
import Heroicon from '../assets/hero-icon.png';
import Submitvector from '../assets/vectors/submit.png';
import { talentTabData } from '../data/talentTabData';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('IT & Development');

    return (
        <div className='w-full mx-auto my-12 md:my-24 px-4 md:px-0'>
            <h1 className='text-[30px] lg:text-[54px] font-switzer font-bold text-center md:w-[671px] mx-auto'>
                Finding the right fit
                <div className='inline-flex relative mx-2 w-8 md:w-16 h-5 md:h-10'>
                    <img src={Heroicon} alt="fit icon" className="hero-icon absolute left-0 z-30" />
                    <img src={Heroicon} alt="fit icon" className="absolute left-0 z-20" />
                    <img src={Heroicon} alt="fit icon" className="hero-icon2 absolute left-0 z-10" />
                </div>
                has never been easier.
            </h1>
            <p className='text-center font-switzer text-lg md:text-lg lg:text-[22px] md:w-[582px] mx-auto text-gray-600 mt-4'>
                With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
            </p>
            <div className='flex justify-center mt-8'>
                <input
                    type='text'
                    placeholder='Looking for design'
                    className='border text-md md:text-[16px] font-switzer border-gray-300 px-4 md:px-6 py-3 md:py-4 rounded-l-[15px] w-2/3 md:w-1/3 relative left-1 outline-none'
                />
                <button className='flex justify-center items-center bg-[#FFBE2E] text-white w-12 md:w-[74px] h-[50px] md:h-[74px] rounded-r-[15px] rounded-l-[15px] relative right-3'>
                    <img src={Submitvector} alt="submit icon" className="inline-block w-4 md:w-[25px] h-2.5 md:h-[15px]" />
                </button>
            </div>

            <div className='bg-[#F8F8F8] flex flex-col justify-center w-[100%] md:w-[75%] mx-auto py-8 px-4 md:px-8 rounded-[15px] mt-8'>
                <div className='flex justify-center'>
                    {talentTabData.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(tab.name)}
                            className={`px-4 md:px-8 text-[12px] md:text-[16px] py-2 relative font-switzer ${tab.name === 'IT & Development' ? 'left-2 rounded-l-full' : 'right-2 rounded-r-full'} ${activeTab === tab.name ? 'bg-[#C7F4C2] text-[#202229] font-bold rounded-full z-10' : 'bg-gray-200 text-gray-700 z-0'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className='mt-8 mx-auto justify-between'>
                    {talentTabData.map((tab, index) => (
                        activeTab === tab.name && (
                            <div key={index} className='w-full max-w-screen-lg'>
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-x-12 md:gap-x-24 lg:gap-x-48 gap-4 font-switzer text-[#959595]'>
                                    {tab.items.map((item, index) => (
                                        <div key={index} className={`text-left hover:text-black ${item === 'Explore More' ? 'text-black font-bold cursor-pointer' : ''}`}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
