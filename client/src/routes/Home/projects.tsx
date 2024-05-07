import ButtonCarousel from "@src/libs/components/buttonCarousel";

const Projects = () => {
  return (
    <div>
      <h1 className="h1">Projects</h1>
      <div className="flex flex-row w-full">
        <p className="w-1/2 text-lg text-center content-center">
          Brock Interactive Software Engineering System (Bites)
        </p>
        <div className="w-1/2 self-center content-center">
          <ButtonCarousel
            images={[
              "src/assets/bites/bites-logo.png",
              "src/assets/bites/bites-modules.png",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-1/2 self-center border rounded-box content-center">
          placeholder
        </div>
        <p className="text-lg w-1/2 text-center content-center">BuildMaster</p>
      </div>
    </div>
  );
};

export default Projects;
