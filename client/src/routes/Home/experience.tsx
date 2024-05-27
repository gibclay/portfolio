import heavy_logo from "@src/assets/heavy/heavy_logo.svg";

export const Experience = () => {
  let experiences = [
    {
      name: "Heavy4Rent",
      logo: heavy_logo,
    },
  ];
  return (
    <>
      <h1 className="h1">Experience</h1>
      <div className="grid">
        {/* Map experience from list. */}
        {experiences.map((experience) => {
          return (
            <div className="bg-base-200 p-2 rounded-box">
              <img src={experience.logo} alt={experience.name + "logo"} />
              <h3 className="h2 mt-2">{experience.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
