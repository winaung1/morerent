import React from "react";

export const Ads = ({ img, att, bg, title, description, action }) => {
  return (
    <div
      className={`py-4 relative text-white w-full md:h-full ${bg} rounded my-3`}
    >
      <div className="p-4 w-full">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-sm py-3 w-80">{description}</p>
        <button className={`${att} rounded p-2`}>{action}</button>
        <img className="w-full md:h-60 mx-auto mt-4" src={img} alt="" />
      </div>
    </div>
  );
};
