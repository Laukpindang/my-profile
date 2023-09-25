import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Drawer } from 'antd';

import { AiOutlineMenu, AiFillHome, AiFillProject } from 'react-icons/ai'
import LogoImage from '../../assets/image/logo.svg'

const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  const menu = [
    {
      slug: '/',
      title: 'Home',
      icon: <AiFillHome size={30} />,
    },
    {
      slug: '/project',
      title: 'Project',
      icon: <AiFillProject size={30} />
    },
  ]

  console.log(router.pathname);

  return (
    <>
      <nav className='bg-blue-600 text-white static py-3 px-6 md:px-16 lg:px-20'>
        <div className='flex justify-between items-center'>
          <div className='w-[140px] h-[45px] overflow-hidden cursor-pointer' onClick={() => router.push('/')}>
            <Image src={LogoImage} alt='logo' width={140} height={45} />
          </div>
          <div className='gap-4 hidden md:flex items-center'>
            {menu.map((item) => (
              <div
                key={item.slug}
                onClick={() => router.push(item.slug)}
                className={`cursor-pointer ${item.slug === router.pathname ? 'font-bold text-lg' : ''}`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='md:hidden'>
            <AiOutlineMenu onClick={() => setOpen(true)} />
          </div>
        </div>
      </nav>
      <Drawer title='Menu' open={open} onClose={() => setOpen(false)} placement='top'>
        <ul>
          {menu.map((item) => (
            <li
              key={item.slug}
              onClick={() => {
                setOpen(false)
                setTimeout(() => {
                  router.push(item.slug)
                }, 500);
              }}
            >
              <div className='flex flex-row items-center gap-3 mb-4'>
                {item.icon}
                {item.title}
              </div>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
}

export default Header;
