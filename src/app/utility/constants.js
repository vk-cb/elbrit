import { MdOutlinePhoneInTalk, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaEnvelope, FaFlask, FaLeaf, FaMapMarkerAlt } from "react-icons/fa";
import { LuPill } from "react-icons/lu";
import { LiaFlagUsaSolid, LiaWeightSolid } from "react-icons/lia";
import { GiFruitBowl, GiLeafSwirl } from "react-icons/gi";
import { PiRecycle } from "react-icons/pi";
export const footerData = [
  {
    heading: "Phone Number",
    text: "+974 3118 1843",
    icon: <MdOutlinePhoneInTalk size={36} />,
  },
  {
    heading: "Email Address",
    text: "Elbrithcqhr@gmail.com",
    icon: <FaEnvelope size={36} />,
  },
  {
    heading: "Office Location",
    text: "Ambassador Street, Zone 61,",
    icon: <FaMapMarkerAlt size={36} />,
  },
];

export const ingredientData = [
  {
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    className: "bg-hero-first",
  },
  {
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    className: "bg-hero-second",
  },
  {
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    className: "bg-hero-third",
  },
  {
    title: "Hyaluronic Acid",
    description: `For smooth,
      supple and soft skin!`,
    className: "bg-hero-fourth",
  },
  {
    title: "Lactobacillus",
    description: `Invigorate your gut 
      microbiome`,
    className: "bg-hero-fifth",
  },
];

export const heroText = [
  {
    heading: "Vitamins",
    description1: "Increased Vitamins and",
    description2: "minerals in your diet",
    icon: <LuPill />,
  },
  {
    heading: "Weight Loss",
    description1: "Weight Loss ",
    description2: "Find scientifically proven solutions",
    icon: <LiaWeightSolid />,
  },
  {
    heading: "Functional Foods",
    description1: "Functional Foods",
    description2: "From protein powers to baby formula",
    icon: <GiFruitBowl />,
  },
];

export const heroFeatured = [
  {
    heading: "Clinically Studied",
    description1: "All products that we offer have",
    description2: "undergone lab and safety tests",
    icon: <FaFlask/>
  },
  {
    heading: "Vegetarian Friendly",
    description1: "We have a wide selection of vegetarian",
    description2: "products to meet your needs",
    icon: <FaLeaf />,
  },
  {
    heading: "Made in India",
    description1: "Shop local and explore health products",
    description2: "made right here in India",
    icon: <LiaFlagUsaSolid />,
  },
  {
    heading: "Free Shipping",
    description1: "We deliver to your door with no",
    description2: "shipping costs on your orders",
    icon: <MdOutlineShoppingCartCheckout />,
  },
  {
    heading: "No Risk",
    description1: "We ensure that all products are safe",
    description2: "and within their use-by date",
    icon: <PiRecycle />,
  },
  {
    heading: "GMO free",
    description1: "Natural, no modified products and",
    description2: "derivatives for those who need it",
    icon: <GiLeafSwirl />,
  },
];

export const blogData = [
  {
    date1 : "20 APR",
    date2 : "20 APR",
  },
  {
    date1 : "20 APR",
    date2 : "",
  },
  {
    date1 : "20 APR",
    date2 : "20 APR",
  },
  {
    date1 : "20 APR",
    date2 : "17 APR",
  },
]