import React from 'react'

const FooterCard = ({children,heading,text}) => {
  return (
    <div className='bg-footerCard w-[400px] h-24 rounded-lg flex items-center gap-6 px-6'>
        <div className='text-white'>
            {children}
        </div>
        <div className='flex flex-col tracking-wide  text-white'>
            <span>{heading}</span>
            <span className='font-medium'>{text}</span>
        </div>
    </div>
  )
}

export default FooterCard