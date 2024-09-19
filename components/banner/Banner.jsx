import Image from "next/image";
import React from "react";
import Button from "@/lib/button/Button";

const Banner = () => {
  return (
    <div className="py-[4.5rem] w-full h-full overflow-hidden ">
      <div className="w-full py-[6.6rem] max-xl:py-36  bg-[#0065FF]  relative overflow-hidden">
        <div className="max-xl:container  mx-auto">
          <h1 className="text-[3rem]    relative z-10 text-white text-center font-extrabold tracking-tighter ">
            Put your mission into motion
          </h1>
          <p className=" text-center  relative z-10 text-white text-[1.2rem] font-light  mt-5">
            Atlassian’s products accelerate your journey from ideation to
            reality.
          </p>
        </div>
        <Image
          src="/bannerLeft.png"
          width={680}
          height={600}
          className=" max-xl:w-[60%] -z-1 absolute bottom-0 left-0 max-xl:-left-44"
        />
        <Image
          src="/bannerRight.png"
          width={680}
          height={600}
          className="max-xl:w-[60%] -z-1 absolute bottom-0 right-0 max-xl:-right-44 "
        />
        <div className="banner-content"></div>
      </div>

      <div className="w-full mt-14 container mx-auto">
        <h1 className="text-center text-[2.4rem]  text-[#253858] tracking-tighter">
          Our cloud products are powered by the Atlassian platform
        </h1>
        <p className="text-center  text-lg mt-5 text-[#253858] ">
          Connect all of your teams, tools, and data to increase
        </p>
        <p className="text-center  text-lg text-[#253858] ">
          productivity and scale your organization.
        </p>
        <p className="text-center mt-7">
          <Button>Explore our platform</Button>
        </p>
      </div>
    </div>
  );
};

export default Banner;
