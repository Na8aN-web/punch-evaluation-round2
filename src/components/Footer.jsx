import React from 'react';
import Logo from '../assets/logo.png';
import { footerLinks, footerButtons, footerLegal } from '../data/footerData';

const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-[#0C0C0C] to-[#202229] text-white mt-[-32px] pt-24">
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row pb-24 px-8 lg:px-16 justify-between w-full">
                    <div className="mb-8 md:mb-0 w-full md:w-2/5">
                        <img src={Logo} alt="Zwilt Logo" className="h-8 mb-4" />
                        <p className="max-w-xs my-8 text-white font-switzer text-[14px]">
                            We take complex hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool.
                        </p>
                        <div className="flex flex-col mt-16 gap-4">
                            <div>
                                <h3 className='text-[#808080] text-[14px] font-semibold'>LINKS AND REDIRECTS</h3>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                {footerButtons.map((button, index) => (
                                    <button
                                        key={index}
                                        className="bg-[#292B34] hover:bg-yellow-600 text-white font-switzer text-[15px] py-4 px-12 rounded-[20px]"
                                    >
                                        {button.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full md:w-3/5">
                        <div className="font-switzer text-[30px] lg:text-[54px] font-semibold mb-12">
                            Connecting the right people to the right businesses.
                        </div>
                        <div className='flex flex-col md:flex-row md:space-x-16 justify-between'>
                            {footerLinks.map((section, index) => (
                                <div key={index} className="mb-8 md:mb-0">
                                    <h4 className="font-semibold text-[14px] text-[#808080] font-switzer mb-4">
                                        {section.title}
                                    </h4>
                                    <ul className='text-[18px] font-switzer'>
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex} className='mb-4'>
                                                <a href={link.href} className="pb-2 hover:border-[#808080] hover:border-b-[1px]">
                                                    {link.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="my-4 border-t border-gray-700 font-switzer text-md md:text-[16px] pt-4 px-8 lg:px-16 flex justify-between items-center ">
                    <p>All rights reserved by Zwilt</p>
                    <div className="flex text-[#808080] space-x-4">
                        {footerLegal.map((legal, index) => (
                            <a key={index} href={legal.href} className="underline">
                                {legal.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
