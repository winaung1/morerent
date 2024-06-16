import React from "react";

export const Filter = ({ type }) => {
  return (
    <div className="my-8 p-4 bg-white drop-shadow-md rounded w-full">
      <div className="flex space-x-2">
        <input type="radio" name={type} id={type} />
        <label className="text-xl" htmlFor={type}>{type}</label>
      </div>

      <div className="flex justify-between py-3">
        <div>
          <h3>Locations</h3>
          <select className="opacity-60" name="" id="">
            <option value="Semarang">Semarange</option>
          </select>
        </div>
        <hr  className=" bg-black/20 w-[1px] h-12"/>
        <div>
          <h3>Date</h3>
          <select className="opacity-60" name="" id="">
            <option value="4">21 July 2024</option>
          </select>
        </div>
        <hr  className=" bg-black/20 w-[1px] h-12"/>
        <div>
          <h3>Time</h3>
          <select className="opacity-60" name="" id="">
            <option value="1">01.00</option>
          </select>
        </div>
      </div>

    </div>
  );
};
