import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export const footerData = [
    {
        heading : "Phone Number",
        text: "+974 3118 1843",
        icon: <MdOutlinePhoneInTalk size={36} />
    },
    {
        heading : "Email Address",
        text: "Elbrithcqhr@gmail.com",
        icon: <FaEnvelope size={36} /> 
    },
    {
        heading : "Office Location",
        text: "Ambassador Street, Zone 61,",
        icon: <FaMapMarkerAlt size={36} />
    },
]

export const ingredientData = [
    { title: "Vitamin C", description: "Vitamin C as ascorbic acid", className: "bg-hero-first" },
    { title: "Vitamin B3", description: "Niacin for healthy gut and skin", className: "bg-hero-second" },
    { title: "Magnesium", description: "Boost energy and support muscle function", className: "bg-hero-third" },
    { 
      title: "Hyaluronic Acid", description: `For smooth,
      supple and soft skin!`, className: "bg-hero-fourth" 
    },
    { 
      title: "Lactobacillus", description: `Invigorate your gut 
      microbiome`, className: "bg-hero-fifth" 
    },
  ];
  