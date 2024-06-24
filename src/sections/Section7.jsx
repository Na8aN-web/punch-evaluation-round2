import React from 'react';
import Arrow from '../assets/vectors/arrowyellow.png';
import { faqData } from '../data/faqData';

const SectionSeven = () => {
    return (
        <div className='skew-container bg-[#F3F3F3] py-20 md:py-40 mt-8 relative'>
            <div className="skew-content flex flex-col justify-center gap-16 items-end" >
                <h1 className='text-[30px] lg:text-[54px] w-full font-switzer font-bold text-center mb-0 md:mb-10'>
                    Frequently asked questions
                </h1>
                <div className='w-full'>
                    {faqData.map((faq, index) => (
                        <div key={index} className={`w-full flex flex-row text-lg lg:text-[22px] font-switzer relative group ${faq.mainCategory ? 'hover:bg-[#E8E8E8]' : 'border border-[#D6D6D6] text-center hover:bg-[#E8E8E8]'}`}>
                            <div className={`w-1/5 flex border border-[#D6D6D6]  justify-center items-center p-2 md:p-8 ${faq.mainCategory ? 'font-bold' : 'opacity-0'}`}>
                                {faq.mainCategory && faq.category}
                            </div>
                            <div className={`w-4/5 p-4 md:p-8 ${faq.mainCategory ? 'border border-[#D6D6D6] lg:pl-96 text-left' : 'lg:pl-96 text-left'}`}>
                                {faq.question}
                            </div>
                            <div className='absolute right-16 top-[43px] opacity-0 group-hover:opacity-100'>
                                <img src={Arrow} alt='arrow' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionSeven;
