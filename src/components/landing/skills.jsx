import React from 'react';

import { BiLogoGit, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { AiFillGithub, AiFillGitlab, AiOutlineAntDesign } from 'react-icons/ai';
import { SiNextdotjs, SiChakraui, SiFramer, SiHeadlessui } from 'react-icons/si'

const SkillsLanding = () => {
  const skillList = [
    {
      name: 'Git',
      icon: <BiLogoGit />,
    },
    {
      name: 'Github',
      icon: <AiFillGithub />,
    },
    {
      name: 'Gitlab',
      icon: <AiFillGitlab />,
    },
    {
      name: 'JavaScript',
      icon: <BiLogoJavascript />,
    },
    {
      name: 'TypeScript',
      icon: <BiLogoTypescript />,
    },
    {
      name: 'React.js',
      icon: <BiLogoReact />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Tailwind',
      icon: <BiLogoTailwindCss />,
    },
    {
      name: 'ANT Design',
      icon: <AiOutlineAntDesign />,
    },
    {
      name: 'Chakra UI',
      icon: <SiChakraui />,
    },
    {
      name: 'Framer Motion',
      icon: <SiFramer />,
    },
    {
      name: 'Headless UI',
      icon: <SiHeadlessui />,
    },
  ];

  return (
    <div>
      <p className='text-xl md:text-2xl font-bold border-b-4 border-blue-600 w-fit mb-2'>
        My skills
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
        {skillList.map((skill, i) => (
          <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            key={i}
            className='border-[2px] border-[#0856CF] p-4 rounded-md flex items-center gap-5 text-black duration-200 hover:text-white hover:bg-[#0856CF]'
          >
            <div className='w-[42px] h-[42px] bg-[#0856CF] flex justify-center items-center text-2xl text-white rounded'>
              {skill.icon}
            </div>
            <p className='text-base md:text-lg'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsLanding;
