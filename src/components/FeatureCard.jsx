import React from 'react';
import AnimButton from './AnimButton';

const FeatureCard = ({ title, description, image, buttonText, color }) => {
    return (
        <div className="p-16 bg-[#EDEFFF] min-w-[1300px] lg:min-w-[1300px] ">
            <div className='flex flex-row justify-between items-center bg-white p-16 rounded-[20px] shadow-sm max-h-[652px] min-h-[652px] overflow-visible'>
                <div className="relative">
                    <h3 className="text-[30px] lg:text-[54px] font-switzer font-bold mb-4">{title}</h3>
                    <ul className="text-lg my-10 list-none relative">
                        {description.map((desc, index) => (
                            <li key={index} className="flex items-start font-switzer mb-2" style={{ color: '#000', position: 'relative' }}>
                                <span className={`block w-[18px] h-[7px] rounded-md mr-2`} style={{ backgroundColor: color, position: 'absolute', top: '10px' }}></span>
                                <span style={{ marginLeft: '1.5rem' }}>{desc}</span>
                            </li>
                        ))}
                    </ul>
                    <AnimButton text={buttonText}/>
                </div>
                <div className="flex items-center justify-between relative z-0">
                    <img src={image} alt={title} className="object-contain" />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
