import React from 'react';
import Image from 'next/image';

import HeroImage from '@/assets/image/myimage.svg'

const HeroLanding = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-12 items-center'>
      <div className='rounded-full overflow-hidden'>
        <Image src={HeroImage} alt='Ferdiansyah Gunawan' />
      </div>
      <div>
        <p className='text-3xl md:text-4xl lg:text-5xl'>Ferdiansyah Gunawan</p>
        <p className='text-2xl md:text-3xl'>I am Frontend Developer</p>
        <p className='text-2xl md:text-3xl'>Based in Bandung, Indonesia</p>
      </div>
    </div>
  );
}

export default HeroLanding;
