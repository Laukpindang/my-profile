import React from 'react';
import Image from 'next/image';

import HeroImage from '@/assets/image/myimage.svg'

const HeroLanding = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-12 mb-6 items-center'>
      <div className='rounded-full overflow-hidden'>
        <Image src={HeroImage} alt='Ferdiansyah Gunawan' />
      </div>
      <div>
        <p className='text-3xl md:text-4xl lg:text-5xl font-bold'>Ferdiansyah Gunawan</p>
        <p className='text-xl md:text-2xl font-medium'>I am Frontend Developer</p>
        <p className='text-xl md:text-2xl font-medium'>Based in Bandung, Indonesia</p>
      </div>
    </div>
  );
}

export default HeroLanding;
