import React from "react";
import IngredientCard from "../ui/IngredientCard";
import { ingredientData } from "@/app/utility/constants";
import ingredient from '../../../../public/images/ingredient.png'
import Image from "next/image";
const Ingredient = () => {
  const firstTwo = ingredientData.filter((d,i)=>(d.className==="bg-hero-second" || d.className==="bg-hero-first"))
  const lastThree = ingredientData.filter((d,i)=>!(d.className ==="bg-hero-second" || d.className ==="bg-hero-first"))
 
  return (
    <section className="py-10 bg-white">
      <div className="container w-[80%] mx-auto">
        <div className="flex gap-6 justify-between">

        
        <div className="w-[600px]">
          <p className="uppercase text-textPrimary font-semibold">Ingredient</p>
          <h2 className="text-4xl tracking-wide text-featureBackground font-bold  mb-6">
            Better Ingredients
          </h2>
          <p className=" text-gray-500 mb-8">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high-quality products!
          </p>
        </div>
<div className="flex gap-10">


        {firstTwo.map((d, i) => (
            <IngredientCard
              key={i + "ingredientData"}
              title={d.title}
              description={d.description}
              className={d.className}
            />
          ))}
          </div>
</div>
        {/* Card Grid */}
        <div className=" flex gap-10 pt-10">
          {lastThree.map((d, i) => (
            <IngredientCard
              key={i + "ingredientData"}
              title={d.title}
              description={d.description}
              className={d.className}
            />
          ))}
          <div>

          <Image height={250} src={ingredient} alt="ingredient"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredient;
