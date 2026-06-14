import { useGSAP } from "@gsap/react";
import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import { useContext, useRef } from "react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  const animateNav = () => {
    const tl = gsap.timeline();
    tl.to(".stair", {
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".link", {
      rotateX: 0,
      opacity: 1,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navLinks", {
      opacity: 1,
    });
  };

  const animateNavReverse = () => {
    const tl = gsap.timeline();

    tl.to(".navLinks", {
      opacity: 0,
      duration: 0.15,
    });

    tl.to(
      ".link",
      {
        rotateX: 90,
        opacity: 0,
        stagger: 0.05,
      },
      "<",
    );

    tl.to(".stair", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.from(fullNavLinksRef.current, {
      opacity: 0,
    });
    tl.to(".navLinks", {
      opacity: 1,
    });
    tl.to(".full-screen-navbar", {
      display: "none",
    });
  };

  useGSAP(() => {
    if (navOpen) {
      console.log("navOpen", navOpen);
      gsap.to(".full-screen-navbar", {
        display: "block",
      });
      animateNav();
    } else {
      animateNavReverse();
    }
  }, [navOpen]);
  return (
    <div
      ref={fullScreenRef}
      id="full-screen-nav"
      className="full-screen-navbar hidden text-white overflow-hidden h-screen w-full absolute z-50"
    >
      <div className="h-screen w-full fixed">
        <div className={`h-screen fixed w-full flex`}>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className=" navLinks flex w-full justify-between lg:p-5 p-2 items-start">
          <div className="p-2">
            <div className="w-36 w-24">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            onClick={() => setNavOpen(false)}
            className="lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer"
          >
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 absolute -rotate-45 origin-top transform bg-white"></div>
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 absolute right-0 rotate-45 origin-top transform bg-white"></div>
          </div>
        </div>
        <div className="py-36">
            <div className="link relative link border-t border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] uppercase lg:leading-[0.8] lg:pt-6.5 pt-3 text-center">
              Projects
            </h1>
            <div className="absolute moveLink flex top-0 bg-[#D2FD50] text-black">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project2}
                  alt=""
                />
              </div>
            </div>
          </div>
           <div className="link relative link border-t border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] uppercase lg:leading-[0.8] lg:pt-6.5 pt-3 text-center">
              About me
            </h1>
            <div className="absolute moveLink flex top-0 bg-[#D2FD50] text-black">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project2}
                  alt=""
                />
              </div>
            </div>
          </div>
           <div className="link relative link border-t border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] uppercase lg:leading-[0.8] lg:pt-6.5 pt-3 text-center">
              Contacts
            </h1>
            <div className="absolute moveLink flex top-0 bg-[#D2FD50] text-black">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project2}
                  alt=""
                />
              </div>
            </div>
          </div>
            <div className="link relative link border-t border-white">
            <h1 className="font-[font2] text-5xl lg:text-[8vw] uppercase lg:leading-[0.8] lg:pt-6.5 pt-3 text-center">
              Blogs
            </h1>
            <div className="absolute moveLink flex top-0 bg-[#D2FD50] text-black">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] lg:pt-6.5 pt-4 text-center">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src={project2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
