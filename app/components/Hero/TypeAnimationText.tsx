'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

interface TypeAnimationTextParams {
  duration: number;
  labels: string[];
}

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