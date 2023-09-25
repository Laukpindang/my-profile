import React from 'react';
import Image from 'next/image';

import { AiFillLock } from 'react-icons/ai'

const CardProject = ({ data }) => {
  return (
    <>
      {data.status === 'private' ? (
        <div className='flex justify-center items-center aspect-video mb-4 bg-[#0856CF]'>
          <div className='flex items-center gap-2 text-white'>
            <AiFillLock size={30} />
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold'>Private</p>
          </div>
        </div>
      ) : (
        <div className='mb-4 aspect-video'>
          <Image src={data.photo} alt={data.title} />
        </div>
      )}
      <div className='grid grid-cols-3 gap-2 mb-2'>
        {data.techStack.map((tech) => (
          <div key={tech} className='bg-blue-600 rounded-lg text-center text-white p-2'>{tech}</div>
        ))}
      </div>
      <div>
        <p className='text-base md:text-lg font-bold'>
          {data.title}
        </p>
      </div>
    </>
  );
}

export default CardProject;
