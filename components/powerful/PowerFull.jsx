import { PowerData } from "@/data/powerful/PowerfulData";
import Button from "@/lib/button/Button";
import React from "react";
const PowerFull = () => {
  return (
    <div className="px-[11rem] container mx-auto max-md:px-12 max-sm:px-6 w-full h-auto ">
      <h1 className="text-center text-[2.5rem] py-5 font-extrabold text-black">
        Powerful products for every team
      </h1>
      <p className="text-left w-full text-2xl py-5 font-extrabold text-black">
        Powerful products for every team
      </p>
      <div className="grid grid-cols-2 gap-12 max-lg:gap-5 max-lg:grid-cols-1 w-full h-auto py-10">
        {PowerData.map((item) => {
          return (
            <div key={item.title}>
              <div className="flex items-center w-full py-1 justify-start gap-3 text-4xl ">
                <div className="icon text-[#1868DB]">
                  <div>{item.icon}</div>
                </div>
                <div className="power-title">
                  <div>{item.title}</div>
                </div>
              </div>
              <div className="py-5">{item.subtitle}</div>
              <Button>{item.btn}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PowerFull;
