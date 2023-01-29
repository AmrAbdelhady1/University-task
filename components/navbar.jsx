import { React, useState } from 'react'
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube
} from 'react-icons/ti'
import { RxInstagramLogo } from 'react-icons/rx'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const links = [
    {
      key: 'facebook',
      icon: <TiSocialFacebook />,
      path: 'facebook'
    },
    {
      key: 'twitter',
      icon: <TiSocialTwitter />,
      path: 'twitter'
    },
    {
      key: 'linkedin',
      icon: <TiSocialLinkedin />,
      path: 'linkedin'
    },
    {
      key: 'youtube',
      icon: <TiSocialYoutube />,
      path: 'youtube'
    },
    {
      key: 'instagram',
      icon: <RxInstagramLogo />,
      path: 'instagram'
    }
  ]

  const navLinks = ['RESEARCH & TECHNOLOGIES', 'TRANSLATION', 'PEOPLE', 'NEWS & EVENTS']

  return (
    <div className='font-rotbold'>
      <div className='bg-teal-600 text-white pl-3 pr-20 xl:px-16 py-2 flex justify-between text-xl relative'>

        <ul className='flex items-center gap-2'>
          <li>
            Follow us:
          </li>
          {links.map(item => {
            return (
              <li key={item.key} className=' inline-block'>
                <Link href={item.path}>
                  {item.icon}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='lg:pr-36 pr-2'>
          <button className='bg-white bg-opacity-20 px-4 lg:px-8 absolute min-h-full top-0'>
            عربي
          </button>
        </div>

      </div>

      <div className=' flex justify-between pl-4 lg:pl-16 py-2 pr-6 text-teal-600'>

        <div>
          <Image alt='logo' 
          src='/images/Logo.jpg'
          width={150} 
          height={150} />
        </div>

        <ul className='hidden lg:flex lg:text-xl items-center lg:gap-5 gap-2'>
          <li className='text-yellow-400'>HOME</li>
          {navLinks.map((item, idx) => {
            return (
              <li key={idx}>
                {item}
                <IoIosArrowDown className=' inline-block' />
              </li>
            )
          })}
          <button className=' flex flex-col items-center text-white bg-yellow-400 py-4 px-2 gap-2 hover:scale-110'>
            <BsSearch/>
            Search
          </button>
        </ul>

        <div className='mt-5 lg:hidden' onClick={() => setToggle(!toggle)}>
          {(toggle) ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={toggle ? 'lg:hidden text-white fixed bg-teal-600 text-lg overflow-hidden min-h-screen w-[50%] pt-6 pl-2 left-0 top-0 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='text-yellow-400 p-4 border-b border-white'>HOME</li>
          {navLinks.map((item, idx) => {
            return (
              <li key={idx} className='p-4 border-b border-white'>
                {item}
                <IoIosArrowDown className=' inline-block' />
              </li>
            )
          })}
          <button className='mt-5 w-[95%] flex justify-center text-xl items-center text-white bg-yellow-400 py-4 px-2 gap-4 hover:bg-opacity-40'>
            <BsSearch/>
            Search
          </button>
        </ul>

      </div>

    </div>
  )
}

export default Navbar