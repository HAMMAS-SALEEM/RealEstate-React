import React from 'react';
import devHouseLogo from '../assets/devhouse.jpeg';

const FooterLogo = () => (
  <div className='mb-6 md:mb-0'>
    <a href='https://devhouse.co/' className='flex items-center'>
      <img
        src={devHouseLogo}
        className='w-20 me-3'
        alt='DevHouse Logo'
      />
      <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
        DevHouse
      </span>
    </a>
  </div>
);

export default FooterLogo;
