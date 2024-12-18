import FeaturedRoundCard from '../ui/FeaturedRoundCard';
import { heroFeatured } from '@/app/utility/constants';
const FeatureSection = () => {
  return (
    <div className='relative bg-featureBackground rounded-3xl h-[420px]'>
      <div className=' px-20 grid grid-cols-3 gap-y-16 absolute w-full -top-12'>
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