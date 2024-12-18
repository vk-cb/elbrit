import React from "react";

const BlogCard = ({ title, date1,date2, index  }) => {
  return (
    <div >
      <div className="relative">
        <div
          className={`rounded-3xl overflow-hidden p-10 bg-blog-1 bg-no-repeat ${
            index % 2 === 0 ? "h-[380px] bg-contain" : "h-[200px] bg-cover"
          } w-[300px]  `}
        >
          <p className="text-lg font-semibold text-white pt-6">
            The Covid-19 Epidemic In 2022 Is Back
          </p>
        </div>
        {date1 &&
        <div className="bg-textPrimary w-28 rounded-r-full py-1 justify-center flex items-center absolute top-4 -left-2">
          <p className="text-white font-medium">{date1}</p>
        </div>}
      </div>

      <div className="relative">

      
        <div
          className={` my-4 rounded-xl overflow-hidden p-10 bg-blog-2 bg-no-repeat w-[300px] ${
            index % 2 === 0 ? "h-[200px]" : "h-[380px] bg-contain"
          } relative`}
        >
          <p className="text-lg font-semibold text-white pt-6">
            The Covid-19 Epidemic In 2023 Is Back
          </p>
        </div>
        {date2 && 
        <div className="absolute top-4 -left-2 bg-textPrimary w-28 rounded-r-full py-1 justify-center flex items-center">
          <p className="text-white font-medium">{date2}</p>
        </div>}
        </div>
    </div>
  );
};

export default BlogCard;
