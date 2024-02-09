import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';


interface IconLinkParams {
  Icon: IconType;
  href: string;
  size: number;
}

const IconLink = ({ Icon, href, size }: IconLinkParams) => {
  return (
    <>
      <Link href={href} target="_blank">
        <div className='w-fit rounded-full text-deep-midnight
        shadow-lg shadow-gray-300 bg-gradient-to-b from-white 
      to-gray-300 '>
          <div className='w-fit p-3 rounded-full hover:bg-light-gray 
          active:bg-lemon-mist'>
            <Icon size={size}></Icon>
          </div>
        </div>
      </Link>
    </>
  )
}

export default IconLink