import React from 'react';
import { cardData } from '../data/cardData';
import AnimButton from './AnimButton';

const SlantTab = () => {
    return (
        <>
            {
                cardData.map((card) => (
                    <div key={card.cardnumber} className='skew-container my-8' style={{ backgroundColor: card.background }}>
                        <div className="skew-content flex flex-col justify-start p-2 md:p-4">
                            <div className="flex md:flex-row flex-col gap-10 md:gap-0 items-center justify-between mb-8">
                                <div className="w-full md:w-[480px] flex flex-col sm:flex-row justify-start items-center sm:items-start">
                                    <div
                                        className="text-[100px] font-switzer font-semibold leading-none"
                                        style={{
                                            background: `linear-gradient(to bottom, ${card.dark}, ${card.background})`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        {card.cardnumber}
                                    </div>
                                    <div className="ml-4 flex flex-col items-start">
                                        <div className="text-[20px] md:text-[34px] w-full md:w-[295px] font-switzer font-semibold">{card.title}</div>
                                        <div className="text-md md:text-[16px] font-switzer py-2 md:py-2 text-[#202229]" >{card.details}</div>
                                        <AnimButton text={card.buttonText} smaller="true" />
                                    </div>
                                </div>
                                <div className="">
                                    <img src={card.image} alt={`Card ${card.cardnumber}`} className=" object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default SlantTab;
