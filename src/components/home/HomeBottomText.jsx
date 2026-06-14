import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-10">
      <p className="absolute lg:w-[17vw] w-64 right-0 lg:right-20 bottom-28 lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l’étincelle pour générer de l’émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </p>
      <div className="text-[6.5vw] lg:h-34 hover:border-[#D2FD50] hover:text-[#D2FD50] leading-[6vw] lg:px-14 lg:pt-5 px-4 pt-1 border-2 lg:border-3 flex items-center border-white rounded-full uppercase">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="text-[6.5vw] lg:h-34 hover:border-[#D2FD50] hover:text-[#D2FD50] leading-[6vw] lg:px-14 lg:pt-5 px-4 pt-1 border-2 lg:border-3 flex items-center  border-white rounded-full uppercase">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
