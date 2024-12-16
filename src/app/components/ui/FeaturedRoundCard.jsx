import React from 'react'

const FeaturedRoundCard = ({children, heading, description1, description2}) => {
  return (
    <div className='flex flex-col items-center gap-4 '>
        <div className='bg-white  flex justify-center items-center text-4xl font-thin w-24 h-24 rounded-full text-textPrimary'>
            {children}
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-lg font-semibold py-2 text-white'>{heading}</p>
            <span className='text-xs text-white '>{description1}</span>
            <span className='text-xs text-white '>{description2}</span>
        </div>
    </div>
  )
}

export default FeaturedRoundCard