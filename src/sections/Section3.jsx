import React from 'react';
import Heroicon from '../assets/hero-icon2.png';
import Groove1 from '../assets/groovelogo1.png';
import Groove2 from '../assets/groovelogo2.png';
import ArrowRight from '../assets/vectors/subpurple.svg';
import ArrowLeft from '../assets/vectors/subpurple2.png';
import Apostrophe from '../assets/apostrophe.png';

const SectionThree = () => {
    return (
        <div className='relative skew-container bg-[#202229] py-20 px-8 lg:py-60 lg:px-16'>
            <img src={Apostrophe} alt="fit icon" className="absolute right-0 top-0 w-12 h-12 lg:w-[221px] lg:h-[175px]" /> 
            <div className="skew-content flex flex-col lg:flex-row lg:justify-end gap-8 lg:gap-16 lg:items-end justify-start items-start">
                <div className="lg:w-1/2">
                    <h1 className='text-[30px] lg:text-[54px] w-full md:w-[379px] font-switzer font-bold text-left text-white'>
                        How it worked for Jason
                        <img src={Heroicon} alt="fit icon" className="inline-block w-12 h-12 lg:w-14 lg:h-14 ml-2" /> at
                        
                        <img src={Groove1} alt="fit icon" className="inline-block w-36 lg:w-48 h-auto ml-2" />
                    </h1>
                    <p className='text-lg lg:text-[22px] font-switzer text-left text-white my-8 w-full lg:w-[460px]'>
                        Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.
                    </p>
                    <div className='flex gap-4'>
                        <img src={ArrowLeft} alt="left icon" className="w-6 h-6 lg:w-[50px] lg:h-[50px]" />
                        <img src={ArrowRight} alt="fit icon" className="w-6 h-6 lg:w-[50px] lg:h-[50px]" />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="flex items-center py-8 lg:py-16 font-switzer">
                        <img src={Groove2} alt="Logo" className="mr-6 w-12 h-12 lg:w-[100px] lg:h-[100px]" />
                        <div>
                            <h1 className="text-xl lg:text-3xl text-white font-bold">Jason Makki</h1>
                            <p className="text-[#C6C4C4] text-sm lg:text-base">Engineer at GROOVE.</p>
                            <p className="text-[#C6C4C4] text-sm lg:text-base">San Francisco</p>
                        </div>
                    </div>
                    <p className='text-lg lg:text-[22px] text-white w-full lg:w-[500px]'>
                        Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;
