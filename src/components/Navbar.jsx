import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { navLinks, navButtons } from '../data/navData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full bg-[#525AA0] rounded-none md:rounded-[15px] p-3 mx-auto flex items-center justify-between'>
      <div className='flex items-center'>
        <img src={logo} alt='logo' className='mb-1' />
      </div>
      <div className='hidden md:flex space-x-4 font-switzer text-[14px]'>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className='text-white hover:text-gray-300'>{link.text}</a>
        ))}
      </div>
      <div className='hidden md:flex space-x-4 text-[14px]'>
        {navButtons.map((button, index) => (
          <button key={index} className={`${button.className || 'text-white hover:text-gray-300'} flex items-center font-switzer`}>
            {button.text}
          </button>
        ))}
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='w-6 h-6' />
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-12 left-0 w-full bg-[#525AA0] flex flex-col items-center space-y-4 py-4 font-switzer text-[14px] md:hidden z-50'>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className='text-white hover:text-gray-300'>{link.text}</a>
          ))}
          {navButtons.map((button, index) => (
            <button key={index} className={`${button.className || 'text-white hover:text-gray-300'} flex items-center font-switzer`}>
              {button.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
