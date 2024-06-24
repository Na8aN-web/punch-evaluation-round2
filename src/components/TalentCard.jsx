import React from 'react';
import Submit from '../assets/vectors/submit.png'
import { stackData } from '../data/stackData';


const StackCard = ({ name, images }) => (
    <div className='bg-white p-6  rounded-lg shadow-md mb-6'>
        <h3 className='text-md md:text-[16px] font-switzer mb-4'>{name}</h3>
        <div className='flex lg:flex-row flex-col gap-4 justify-between'>
            {images.map((img, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <div className='w-24 h-24 bg-[#F6F6F6] rounded-full flex items-center justify-center mb-2'>
                            <img src={img.image} alt={img.name} className=' object-cover rounded-full' />
                        </div>
                        <p className='text-center font-semibold font-switzer text-[14px] w-[80px]'>{img.name}</p>
                    </div>
            ))}
            <div className='w-full flex justify-center'>
            <div className='w-[96px] h-[96px] bg-[#F6F6F6] rounded-[30px] flex items-center justify-center mb-2'>
                <img src={Submit} alt='submit' className=' object-cover ' />
            </div>
            </div>
        </div>
    </div>
);

function TalentCard() {
    return (
        <div className='w-full lg:w-[730px] mx-auto  py-8'>
            <div className='space-y-6'>
                {stackData.map((stack, index) => (
                    <StackCard key={index} name={stack.name} images={stack.images} />
                ))}
            </div>
        </div>
    );
}

export default TalentCard;
