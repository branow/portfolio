import React from 'react'
import Link from 'next/link'

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <>
      <div className='rounded-lg hover:shadow-lg hover:bg-gradient-to-t 
      hover:from-lemon-mist hover:to-transparent active:bg-lemon-mist'>
        <Link href={href}>
          <div className='mx-6 my-2 text-xl font-bold text-gray-700'>
          {title}
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavLink