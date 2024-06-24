import React from 'react';
import Skills from '../assets/vectors/skills.png';
import Categories from '../assets/vectors/categories.png';
import Profiles from '../assets/vectors/profiles.png';
import TalentCard from '../components/TalentCard';
import AnimButton from '../components/AnimButton';
import { dummyProfessionalData } from '../data/dummyProfessionalData';


function SectionTwo() {
    return (
        <div className='bg-[#EDEFFF] skew-container py-20 lg:py-20 md:py-40 px-8 lg:px-16'>
            <div className='skew-content'>
                <h2 className='text-[30px] lg:text-[54px] text-center font-bold font-switzer mx-auto pb-6 md:pb-12 py-6 md:pt-24 w-full lg:w-[977px]'>
                    Your one-stop marketplace for finding the talent your business needs.
                </h2>
                <div className='flex flex-col lg:flex-row lg:justify-between items-start'>
                    <div className='flex flex-col justify-between font-switzer w-full'>
                        {dummyProfessionalData.map((item, index) => (
                            <div key={index} className='flex flex-col my-8 justify-between lg:w-[380px] w-full'>
                                <h3 className='text-xl lg:text-2xl mb-4'>{item.Title}</h3>
                                <div className='grid grid-cols-2 gap-3'>
                                    <p className='text-sm lg:text-base'>
                                        <img src={Skills} alt="fit icon" className="inline-block w-4 h-5 lg:w-4 lg:h-[21px]" /> {item.Skills} Skills
                                    </p>
                                    <p className='text-sm lg:text-base'>
                                        <img src={Categories} alt="fit icon" className="inline-block w-4 lg:w-[18px] lg:h-[18px]" /> {item.Categories} Sub-categories
                                    </p>
                                    <p className='text-sm lg:text-base'>
                                        <img src={Profiles} alt="fit icon" className="inline-block w-4 lg:w-4 lg:h-[18px]" /> {item.Profiles} Profiles
                                    </p>
                                </div>
                            </div>
                        ))}
                        <AnimButton text='Explore more'/>
                    </div>
                    <div className='flex flex-col items-start mt-8 lg:mt-0 w-full'>
                        <TalentCard />
                        <p className="font-switzer text-lg lg:text-xl mt-4">
                            <strong>30 more</strong> to explore
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;
