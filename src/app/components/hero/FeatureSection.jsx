import FeaturedRoundCard from '../ui/FeaturedRoundCard';
import { heroFeatured } from '@/app/utility/constants';
const FeatureSection = () => {
  return (
    <div className='relative  bg-featureBackground rounded-3xl sm:h-[420px] w-[350px] sm:w-auto h-[700px]'>
      <div className='px-2 sm:px-20 grid sm:grid-cols-3 grid-cols-2 sm:gap-0 gap-4 sm:gap-y-16 gap-y-4 absolute w-full -top-12'>
          {heroFeatured.map((d,i)=>(
          <FeaturedRoundCard key={i+"heroFeatured"} heading={d.heading} description1={d.description1} description2={d.description2}>
            {d.icon}
          </FeaturedRoundCard>
          ))}
        </div>
        
    </div>
  )
}

export default FeatureSection