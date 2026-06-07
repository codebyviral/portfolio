import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <Link className="text-[6.5vw] leading-[6vw] px-10 pt-3 border-5 flex items-center border-white rounded-full uppercase">
        Projects
      </Link>
      <Link className="text-[6.5vw] leading-[6vw] px-10 pt-3 border-5 flex items-center  border-white rounded-full uppercase">
        about me
      </Link>
    </div>
  );
};

export default HomeBottomText;
