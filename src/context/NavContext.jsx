import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const NavContext = ({ children }) => {
  const [navColor, setnavColor] = useState("white");
  const [navOpen, setNavOpen] = useState(false);

  const location = useLocation().pathname;

  useEffect(() => {
    if (location == "/projects" || location == "/about") {
      setnavColor("black");
    } else {
      setnavColor("white");
    }
  }, [location]);

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setnavColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
