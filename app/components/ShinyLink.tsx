import React from 'react'
import Link from 'next/link'


interface ShinyLinkParams {
  href: string;
  title: string;
}

const ShinyLink = ({ href, title } : ShinyLinkParams) => {
  return (
    <>
      <div className='relative'>
        <Link href={href}>
          <div className='shine-container px-8 py-3 rounded-xl shine bg-gradient-to-br from-lemon-mist 
            via-subtle-shadow to-light-gray shadow-xl shadow-subtle-shadow 
            hover:shadow-olive-yellow active:bg-lemon-mist'>
            <div className='text-2xl font-bold text-deep-midnight'>
              {title}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ShinyLink