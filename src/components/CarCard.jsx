import React from "react";
import { LuFuel } from "react-icons/lu";
import { TbSteeringWheel } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import shadow from "../assets/shadow.png";
export const CarCard = ({
  CarName,
  type,
  fuel,
  manuelOrAutomatic,
  people,
  rate,
  img,
}) => {
  return (
    <div className=" bg-white drop-shadow-md p-4 rounded my-4 cursor-pointer">
      <div className="flex justify-between pb-2">
        <div>
          <h1 className="font-semibold">{CarName}</h1>
          <p className="opacity-60">{type}</p>
        </div>
        <CiHeart className="text-xl" />
      </div>
      <div className="relative">
        <img className="w-full" src={img} alt="" />
        <div className="absolute bottom-0 left-0 w-full">
          <img className="w-full" src={shadow} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-1 opacity-60">
          <LuFuel />
          <p>{fuel}</p>
        </div>
        <div className="flex items-center space-x-1 opacity-60">
          <TbSteeringWheel />
          <p>{manuelOrAutomatic}</p>
        </div>
        <div className="flex items-center space-x-1 opacity-60">
          <IoPeopleOutline />
          <p>{people}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 justify-between">
        <p className="text-xl">
          ${rate}/ <span className="opacity-60 text-sm">day</span>
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Rent Now
        </button>
      </div>
    </div>
  );
};
