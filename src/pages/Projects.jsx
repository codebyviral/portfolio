import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1200&h=1920&s=505ea3cc92524cc5c493dfa12440beeb",
      image2:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920.jpg?w=1200&h=1920&s=b18d369df1e2ac454455ceb3ebb67edc",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_planches_horizontales_gammecomplete1024.jpg?w=1200&h=1920&s=5b47e5169be24eee33dc88a3211de348",
      image2:
        "https://k72.ca/images/caseStudies/OKA/OKA_Fromage_08_2692_srgb.jpg?w=1200&h=1920&s=4bf2c3ead1ed1552f0f3bfb12ada4544",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---FeaturedImage.jpg?w=1200&h=1920&s=c644f6373f81f0da579c3b214d08f1f4",
      image2:
        "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".hero-parent",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="lg:p-4 p-2 mb-[100vh]">
      <div className="pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase text-black">
          Projects
        </h2>
      </div>
      <div className="-lg:mt-20 hero-parent">
        {projects.map((item, id) => (
          <div
            key={`pc-${id}`}
            className="hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
          >
            <ProjectCard image1={item.image1} image2={item.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
