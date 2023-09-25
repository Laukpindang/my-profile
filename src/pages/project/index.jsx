import React from 'react';
import CardProject from '@/components/project/card';
import GainImage from '@/assets/image/gain.svg'

const Project = () => {
  const projectList = [
    {
      title: 'Gain',
      status: 'public',
      techStack: ['Next.js', 'D3', 'Prisma'],
      photo: GainImage
    },
    {
      title: 'Bahana',
      status: 'private',
      techStack: ['ANTD', 'Tailwind', 'React.js'],
    },
  ]

  return (
    <div>
      <div className='flex items-center justify-start md:justify-center gap-10 mb-10'>
        <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-black'>
          Project
        </p>
        <div className='flex-grow mt-2 md:flex w-[180px] h-[5px] duration-200 rounded bg-[#0856CF]' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {projectList.map((project, key) => (
          <div key={key}>
            <CardProject data={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
