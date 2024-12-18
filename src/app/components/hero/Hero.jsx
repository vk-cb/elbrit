import Image from "next/image";
import Button from "../ui/Button";
import HeroFeature from "../ui/heroFeature";
import FeatureSection from "./FeatureSection";
import { heroText } from "@/app/utility/constants";

const Hero = () => {
  return (
    <section className="bg-heroBackground min-h-[100vh] mx-6 relative px-6 lg:px-20 mb-[300px]">
      <div className="container mx-auto border">
        <h1 className="text-xl sm:text-3xl text-center  md:text-5xl 2xl:text-9xl xl:text-7xl md:font-bold font-semibold  text-textPrimary py-8 ">
          Essential Vitamins
        </h1>

        <div className="w-full  sm:px-6 2xl:px-40 xl:px-20 pt-10 lg:px-10 flex flex-col sm:flex-row  sm:justify-between">
          <div className="sm:w-[300px] mt-20  w-full">
            <p className="text-lightText text-lg font-medium text-center sm:text-start">
              Online Medical Supplies
            </p>
            <p className="text-featureBackground font-semibold text-2xl my-6 sm:text-start text-center">
              Get Your Vitamins & Minerals
            </p>
            <div className="flex justify-center sm:justify-normal mb-6 sm:mb-0">

            <Button text="Explore" className="uppercase px-8 " />
            </div>
          </div>
          <div className="flex flex-col sm:justify-end justify-center gap-4 bottom-0 w-[400px]r-blue-700">
            {
              heroText.map((d,i)=>(
            <HeroFeature
            key={i+"heroText"}
              heading={d.heading}
              description1={d.description1}
              description2={d.description2}
            >
              {d.icon}
            </HeroFeature>
            ))
          }
           
          </div>
        </div>

        <div className="mt-8 absolute top-[25px] sm:top-[110px] sm:right-[43%] right-[30%]">
          <Image
            src="/images/product.png"
            alt="Product"
            // className="2xl:w-[300px] 2xl:h-[300px] xl:w-[250px] xl:h-[250px]"
            width={300}
            height={300}
            className="w-[150px] h-[150px] sm:h-[250px] md:h-[300px] sm:w-[250px] md:w-[300px]"
          />
        </div>
      </div>
      <div className="absolute -bottom-[600px] sm:-bottom-[200px] sm:right-[180px] right-[35px] sm:w-[80%] w-[90%]">
        <FeatureSection/>
      </div>
    </section>
  );
};

export default Hero;
