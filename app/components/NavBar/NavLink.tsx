import React from 'react'
import Link from 'next/link'

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <>
      <div className='rounded-lg text-neutral-content hover:bg-frosted-silver
          hover:text-white active:bg-pale-yellow'>
        <Link href={href}>
          <div className='px-6 py-2 text-xl font-bold '>
          {title}
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavLink