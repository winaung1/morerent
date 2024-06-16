import React from "react";
import { Searchbar } from "../components/Searchbar";
import { Ads } from "../components/Ads/Ads";
import koenigsegg from "../assets/popular/koenigsegg.svg";
import nissan from "../assets/popular/nissan.svg";
import { Filter } from "../components/Filters/Filter";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Popular } from "../components/popular/Popular";
import { Recommendation } from "../components/popular/Recommendation";

export const Homepage = () => {
  return (
    <div className="p-4">
      <Searchbar width={"w-full md:hidden"} />

      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        <Ads
          img={koenigsegg}
          att={"bg-blue-800"}
          bg={"linear"}
          title={"The Best Platform for Car Rental"}
          description={
            "Ease of doing a car rental safely and reliably. Of course at a low price."
          }
          action={"Rental Car"}
        />
        <Ads
          img={nissan}
          att={"bg-[#5CAFFC]"}
          bg={"linear2"}
          title={"Easy way to rent a car at a low price"}
          description={
            "Providing cheap car rental services and safe and comfortable facilities."
          }
          action={"Rental Car"}
        />
      </div>

      <div className="py-10 relative flex flex-col md:space-x-4 md:flex-row justify-between items-center">
        <Filter type={"Pick-Up"} />
        <div className=" bg-blue-500 drop-shadow-md p-2 w-12 h-14 flex items-center justify-center text-white rounded-lg">
          <FaArrowUp />
          <FaArrowDown />
        </div>
        <Filter type={"Drop-Off"} />
      </div>

      <Popular />
      <Recommendation />
      
      <div className="mx-auto w-fit my-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Show More Car
        </button>
      </div>
    </div>
  );
};
