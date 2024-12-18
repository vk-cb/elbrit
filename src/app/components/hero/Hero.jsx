import Image from "next/image";
import Button from "../ui/Button";
import HeroFeature from "../ui/heroFeature";
import FeatureSection from "./FeatureSection";
import { heroText } from "@/app/utility/constants";

const Hero = () => {
  return (
    <section className="bg-heroBackground min-h-[100vh] mx-6 relative px-20 mb-[300px]">
      <div className="container mx-auto ">
        <h1 className="text-9xl font-bold text-center text-textPrimary py-8">
          Essential Vitamins
        </h1>

        <div className="w-full  px-40 flex justify-between">
          <div className="w-[300px] mt-20">
            <span className="text-lightText text-lg font-medium">
              Online Medical Supplies
            </span>
            <p className="text-featureBackground font-semibold text-2xl my-6">
              Get Your Vitamins & Minerals
            </p>
            <Button text="Explore" className="uppercase px-8" />
          </div>
          <div className="flex flex-col justify-end gap-4 bottom-0 w-[400px]">
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

        <div className="mt-8 absolute top-[110px] right-[43%] ">
          <Image
            src="/images/product.png"
            alt="Product"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="absolute  -bottom-[200px] right-[180px] w-[80%]">
        <FeatureSection/>
      </div>
    </section>
  );
};

export default Hero;
