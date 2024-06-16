import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaHeart } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Searchbar } from "./Searchbar";
export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-10">
        <h1 className="text-3xl text-[#3563E9]">MORENT</h1>
        <div className="hidden md:block">
        <Searchbar width={'md:w-[400px]'}/>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="md:flex items-center space-x-2 hidden">
          <FaHeart className="border p-2 rounded-full text-4xl" />
          <div className="relative">
            <FaBell className="border p-2 rounded-full text-4xl" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <FaGear className="border p-2 rounded-full text-4xl" />
        </div>
        <img
          className="w-8 h-8 rounded-full object-cover"
          src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};
