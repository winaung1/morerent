import React from 'react'
import { CiSearch } from 'react-icons/ci'
import filter from "../assets/filter.svg";
export const Searchbar = ({width}) => {
  return (
    <div className={`flex items-center space-x-4 border px-2 py-1 rounded-full ${width}`}>
          <CiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full bg-transparent outline-none "
          />

          <img className="w-5" src={filter} alt="" />
        </div>
  )
}
