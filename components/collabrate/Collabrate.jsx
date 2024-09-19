import React from "react";
import Button from "@/lib/button/Button";
import { colabrate } from "@/data/collaborate/CollabrateData";
const Collabrate = () => {
  return (
    <div className="container mx-auto max-md:px-12 px-[11rem] w-full max-sm:px-6  h-auto ">
      <p className="text-left w-full text-2xl py-5 font-extrabold text-black">
        Collaborate
      </p>
      <div className="grid grid-cols-2 max-lg:gap-5 max-lg:grid-cols-1 gap-12 w-full h-auto py-10">
        {colabrate.map((item) => {
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

export default Collabrate;
