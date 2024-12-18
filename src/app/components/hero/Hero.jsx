import Image from "next/image";
import Button from "../ui/Button";
import HeroFeature from "../ui/heroFeature";
import { LuPill } from "react-icons/lu";
import { LiaWeightSolid } from "react-icons/lia";
import { GiFruitBowl } from "react-icons/gi";
import FeatureSection from "./FeatureSection";

const Hero = () => {
  return (
    <section className="bg-heroBackground min-h-[90vh] mx-6 relative px-20 mb-[300px]">
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
            <HeroFeature
              heading="Vitamins"
              description1="Increased Vitamins and"
              description2="minerals in your diet"
            >
              <LuPill />
            </HeroFeature>
            <HeroFeature
              heading="Weight Loss"
              description1="Weight Loss "
              description2="Find scientifically proven solutions
"
            >
              <LiaWeightSolid />
            </HeroFeature>
            <HeroFeature
              heading="Functional Foods"
              description1="Functional Foods"
              description2="From protein powers to baby formula"
            >
              <GiFruitBowl />
            </HeroFeature>
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
