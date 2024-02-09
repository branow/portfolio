'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

interface TypeAnimationTextParams {
  duration: number;
  labels: string[];
}

// 'Java Developer',
//           1000,
//           'Spring Boot',
//           1000,
//           'REST API',
//           1000,
//           'Full Stack with Reac.js Next.js',
//           1000

const TypeAnimationText = ({ duration, labels } : TypeAnimationTextParams) => {
  const sequence: (string | number | ((element: HTMLElement | null) => void | Promise<void>))[] = [];
  labels.forEach(label => {
    sequence.push(label);
    sequence.push(duration);
  })

  return (
    <>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </>
  )
}

export default TypeAnimationText