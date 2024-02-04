import React from 'react'
import Section from './Section'
import LanguageBar from './LanguageBar'

const LanguagesSection = () => {
  return (
    <>
    <Section
      title="Languages"
      content={
        <div className='flex flex-row gap-20 flex-wrap'>
          <LanguageBar language='Ukrainian' level='C2' />
          <LanguageBar language='English' level='B1' />
        </div>
      }
    />
  </>
  )
}

export default LanguagesSection