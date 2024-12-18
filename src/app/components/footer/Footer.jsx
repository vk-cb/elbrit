import React from 'react'
import FooterCard from '../ui/FooterCard'
import logo from '../../../../public/images/logo.png'
import { footerData } from '@/app/utility/constants';
import Image from 'next/image';

import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-featureBackground h-[350px] px-[200px] text-white'>
    <div className=' flex gap-20 py-10 '>
     {footerData.map((d, index)=> 
      <FooterCard key={index+"footer"} text={d.text} heading={d.heading}>
        {d.icon}
      </FooterCard>)}
    </div>
    <div className='flex gap-40 items-center'>
    <Image src={logo} width={200} alt='Footer Logo'/>
    <p className='text-xs  w-[400px] tracking-wider leading-6'>Your health, physical and emotional well-being is important
to us. We are always by your side and have made it even
easier for you to find the necessary vitamins.</p>
    </div>
    <div className='flex items-center gap-2 pt-6'>
      <MdOutlineLocationOn size={18}/>
    <p className='text-xs tracking-wider'>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
    </div>
    </div>
  )
}

export default Footer


// 