import React from 'react';

import { AiOutlineUser, AiOutlineMail, AiFillLinkedin,  } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const AboutLanding = () => {
  const userData = [
    {
      icon: <AiOutlineUser />,
      title: 'Full Name',
      data: 'Ferdiansyah Gunawan',
    },
    {
      icon: <AiOutlineMail />,
      title: 'Email',
      data: 'ferdiansyahbandung3@gmail.com',
    },
    {
      icon: <AiFillLinkedin />,
      title: 'Linkedin',
      data: <a href="https://www.linkedin.com/in/ferdiansyah-gunawan-891a42256/" target='_blank' className='underline cursor-pointer'>Click here</a>,
    },
    {
      icon: <CiLocationOn />,
      title: 'From',
      data: 'West Java',
    },
  ]

  return (
    <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
      <div>
        <p className='text-xl md:text-2xl font-bold border-b-4 border-blue-600 w-fit mb-2'>
          About Me
        </p>
        <p>
          I am a Frontend Developer with over 1 year of expertise in the IT industry, specializing React.js and Next.js. I have a strong commitment to crafting exceptional user experiences. I am eager to continually enhance my frontend skills to make a maximum contribution within the frontend team at your company.
        </p>
      </div>
      <div
        className='border-2 flex flex-col gap-6 rounded-md shadow-[10px_10px_0px_0px_#0856CF] lg:hover:shadow-[-10px_-10px_0px_0px_#0856CF] border-blue-600 p-6'
      >
        {userData.map((item) => (
          <div key={item.title} className='flex items-center gap-6'>
            <div className='flex justify-center items-center min-w-[42px] max-w-[42px] min-h-[42px] max-h-[42px] rounded bg-[#0856CF] text-white text-2xl'>
              {item.icon}
            </div>
            <div className='text-black flex flex-col'>
              <p className='text-lg md:text-xl font-bold'>{item.title} : </p>
              <p className='text-base font-medium'>{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutLanding;
