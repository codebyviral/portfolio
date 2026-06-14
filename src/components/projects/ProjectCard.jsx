const ProjectCard = (props) => {
  return (
    <>
      <div className="group lg:w-1/2 transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full">
          <h2 className="uppercase pt-4 px-8 text-6xl p-2 font-[font1] border-4 rounded-full">
            Vior let project
          </h2>
        </div>
      </div>
      <div className="group lg:w-1/2 transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full">
          <h2 className="uppercase pt-4 px-8 text-6xl p-2 font-[font1] border-4 rounded-full">
            Vior let project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
