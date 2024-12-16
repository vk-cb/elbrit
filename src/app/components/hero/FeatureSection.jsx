import React from 'react'
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { PiRecycle } from "react-icons/pi";
import { GiLeafSwirl } from "react-icons/gi";
import { FaFlask, FaLeaf } from "react-icons/fa6";
import FeaturedRoundCard from '../ui/FeaturedRoundCard';
const FeatureSection = () => {
  return (
    <div className='relative bg-featureBackground rounded-3xl h-[420px]'>
     

      
      <div className=' px-20 grid grid-cols-3 gap-y-16 absolute w-full -top-12'>
          <FeaturedRoundCard heading="Clinically Studied" description1="All products that we offer have" description2="undergone lab and safety tests">
            <FaFlask/>
          </FeaturedRoundCard>
          <FeaturedRoundCard heading="Vegetarian Friendly" description1="We have a wide selection of vegetarian " description2="products to meet your needs">
            <FaLeaf/>
          </FeaturedRoundCard>
          <FeaturedRoundCard heading="Made in India" description1="Shop local and explore health products " description2="made right here in India">
            <LiaFlagUsaSolid/>
          </FeaturedRoundCard>
          <FeaturedRoundCard heading="Free Shipping" description1="We deliver to your door with no " description2="shipping costs on your orders">
            <MdOutlineShoppingCartCheckout/>
          </FeaturedRoundCard>
          <FeaturedRoundCard heading="No Risk" description1="We ensure that all products are safe " description2="and within their use-by date">
            <PiRecycle/>
          </FeaturedRoundCard>
          <FeaturedRoundCard heading="GMO free" description1="Natural, no modified products and " description2="derivatives for those who need it">
            <GiLeafSwirl/>
          </FeaturedRoundCard>
        
        </div>
        
    </div>
  )
}

export default FeatureSection