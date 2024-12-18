import Image from "next/image";


const IngredientCard = ({
  title,
  description,
  className
}) => {
  return (
    <div
      className={`sm:w-[380px] w-[320px] h-[250px] p-5 rounded-lg relative flex flex-col justify-between  bg-cover bg-no-repeat ${className}`}
    >
      {/* Text Content */}
      <div>
        <h3 className="text-xl font-semibold text-featureBackground mb-2">{title}</h3>
        <p className="text-lightText font-semibold text-base">{description}</p>
      </div>

      {/* See More Link */}
      <a
        href="#"
        className="text-textPrimary font-semibold text-sm underline hover:text-blue-500"
      >
        SEE MORE
      </a>
    </div>
  );
};

export default IngredientCard;
