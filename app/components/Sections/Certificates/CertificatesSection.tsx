import React from 'react'
import Section from '../Section';
import Carousel from '../../Carousel';
import Image from 'next/image';
import java from '@/public/certificates/softserve-javase.jpg'
import english from '@/public/certificates/softserve-english.jpg'

const CerticatesSection = () => {
  return (
    <>
      <Section
        id="certificates"
        title="Certificates"
        content={
          <Carousel elements={[
            <Image className='rounded-2xl' alt='Java SoftServe Academy Certification' src={java} />,
            <Image className='rounded-2xl' alt='English SoftServe Academy Evaluation' src={english} />
          ]} />
        }
      />
    </>
  );
}

export default CerticatesSection