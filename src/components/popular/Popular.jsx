import React from "react";
import { carData } from "../../api/carapi";
import { CarCard } from "../CarCard";
export const Popular = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <h1 className=" opacity-50">Popular</h1>
        <button className="text-blue-500">View All</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {carData.popular.map((car, index) => (
            <CarCard
              CarName={car.title}
              type={car.type_of_car}
              fuel={car.gas_capacity}
              manuelOrAutomatic={car.transmission}
              people={car.seating_capacity}
              img={car.image}
              rate={car.price_for_rent}
            />
        ))}
      </div>
    </div>
  );
};
