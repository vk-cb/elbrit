import React from 'react'

const HeroFeature = ({children, heading, description1, description2}) => {
  return (
    <div className='flex gap-4'>
        <div className='bg-featureBackground flex justify-center items-center text-3xl font-thin w-14 h-14 rounded-full text-white'>
            {children}
        </div>
        <div className='flex flex-col'>
            <p className='text-lg font-semibold pb-2 text-featureBackground'>{heading}</p>
            <span className='text-xs text-lightText font-medium'>{description1}</span>
            <span className='text-xs text-lightText font-medium'>{description2}</span>
        </div>
    </div>
  )
}

export default HeroFeature