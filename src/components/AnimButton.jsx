import React, { useState } from 'react'
import Submit from '../assets/vectors/submit-white.png';

const AnimButton = ({ text, smaller }) => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} className="text-lg lg:text-[22px] font-switzer text-center flex flex-row gap-2 items-center mt-4">
            <div className={`relative ${smaller ? 'w-[150px]' : 'w-[240px]'} `}>
                <div className={`${smaller ? ' lg:h-[50px] rounded-[20px] p-4' : ' lg:h-[74px] rounded-[30px] p-5'} bg-[#202229] justify-end  flex items-center transition-all duration-300 ease-linear ${isHovered ? 'w-[100%]' : 'w-[30%]'}`}>
                    <img src={Submit} alt='submit' className={`object-cover ${smaller ? 'h-[10px] w-[16px]' : 'w-[25px] h-[15px]'}`} />
                </div>
                <div className={`transition-all  text-left duration-300 ease-linear ${smaller ? 'relative bottom-[35px] md:bottom-[39px] left-16 text-[15px]' : 'relative bottom-[42px] md:bottom-[52px] left-20 text-[22px]'} font-semibold font-switzer ${isHovered ? '-translate-x-12 text-white' : ''}`}>{text}</div>
            </div>
        </div>
    )
}

export default AnimButton;