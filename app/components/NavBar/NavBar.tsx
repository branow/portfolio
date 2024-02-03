import React from 'react'
import NavLink from './NavLink'

export const NavBar = () => {
  return (
    <>
      <div className='w-full pt-2 pb-4 bg-gradient-to-b from-gray-500 to-transparent'>
        <div className='flex flex-row justify-center'>
          <NavLink href={'/'} title={'Home'} />
          <NavLink href={'/'} title={'About'} />
          <NavLink href={'/'} title={'Portfolio'} />
          <NavLink href={'/'} title={'Education'} />
          <NavLink href={'/'} title={'Contact'} />
        </div>
      </div>
    </>
  )
}
