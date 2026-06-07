import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        Developer
      </div>
      <div className="text-[9.5vw] justify-center flex items-start uppercase leading-[8vw]">
        who
        <div className="h-[7vw] w-[10vw] -mt-5 rounded-full overflow-hidden">
          <Video />
        </div>
        creates
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        solutions
      </div>
    </div>
  );
};

export default HomeHeroText;
