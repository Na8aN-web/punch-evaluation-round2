import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { whyChooseData } from '../data/whyChooseData';


const SectionSix = () => {
    return (
        <div className="relative mt-12 overflow-hidden transform skew-y-[-2deg]">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className=" bg-[#EDEFFF] overflow-hidden">
                <div className="transform skew-y-[2deg] px-8 lg:px-16 flex overflow-x-scroll space-x-8 ">
                    <div className="min-w-[300px] md:min-w-[450px] flex flex-col items-left justify-center">
                        <h2 className="text-[30px] lg:text-[54px] font-switzer font-bold text-left">Why choose Zwilt?</h2>
                        <p className="text-lg lg:text-[22px] text-left py-8 font-switzer">We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
                    </div>
                    {whyChooseData.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            image={feature.image}
                            buttonText={feature.buttonText}
                            color={feature.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionSix;
