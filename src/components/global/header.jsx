import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Drawer } from 'antd';

import { AiOutlineMenu, AiFillHome, AiFillProject } from 'react-icons/ai'

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

  return (
    <>
      <nav className='bg-blue-600 text-white static py-3 px-6 md:px-16 lg:px-20'>
        <div className='flex justify-between items-center'>
          <div>logo</div>
          <div className='gap-4 hidden md:flex'>
            {menu.map((item) => (
              <div key={item.slug} onClick={() => router.push(item.slug)} className='cursor-pointer'>
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
