import React from 'react'
import Section from '../Section'
import LanguageBar from './LanguageBar'

const LanguagesSection = () => {
  return (
    <>
    <Section
      id="languages"
      title="Languages"
      content={
        <div className='flex flex-col gap-10 flex-wrap justify-center items-center
        lg:flex-row'>
          <LanguageBar language='Ukrainian' level='C2' />
          <LanguageBar language='English' level='B1' />
        </div>
      }
    />
  </>
  )
}

export default LanguagesSection