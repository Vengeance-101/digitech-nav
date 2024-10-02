import { bannerVideo } from "@/utils/media/MediaImport";
import React from "react";
const Banner = () => {
  return (
    <section className="w-full h-full ">
      <video
        src={bannerVideo}
        className="w-full h-full "
        playsInline={true}
        muted
        autoPlay
        loop
      ></video>
    </section>
  );
};

export default Banner;
