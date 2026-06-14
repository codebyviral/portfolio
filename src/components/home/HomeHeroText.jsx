import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-100 lg:mt-0 pt-5 text-center">
      <div className="lg:text-[9.5vw]  text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        Developer
      </div>
      <div className="lg:text-[9.5vw]  text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]">
        who
        <div className="h-[7vw] w-[10vw] mt-0.5 lg:-mt-5 rounded-full overflow-hidden">
          <Video />
        </div>
        creates
      </div>
      <div className="lg:text-[9.5vw]  text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        solutions
      </div>
    </div>
  );
};

export default HomeHeroText;
