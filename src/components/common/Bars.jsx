import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Bars = (props) => {
  const currentPath = useLocation().pathname;

  const barParent = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });

    tl.to(barParent.current, {
      display: "block",
    });

    tl.from(".bar", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".bar", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(barParent.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });
  }, [currentPath]);

  return (
    <div className="">
      <div ref={barParent} className="h-screen fixed z-10 top-0 w-full">
        <div className="h-full fixed w-full flex">
          <div className="bar h-full w-1/5 bg-black"></div>
          <div className="bar h-full w-1/5 bg-black"></div>
          <div className="bar h-full w-1/5 bg-black"></div>
          <div className="bar h-full w-1/5 bg-black"></div>
          <div className="bar h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Bars;
