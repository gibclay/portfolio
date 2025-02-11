import heavy_logo from '@src/assets/heavy/heavy_logo.svg';

export const Experience = () => {
  let experiences = [
    {
      name: 'Heavy4Rent',
      logo: heavy_logo,
    },
  ];
  let itemSizes = 400;

  return (
    <>
      <h1 className="h1" id="experience">
        Experience
      </h1>
      <div className="grid grid-cols-2">
        {/* Map experience from list. */}
        {experiences.map((experience) => {
          return (
            <div className="bg-base-200 p-2 m-4 rounded-box">
              <img
                src={experience.logo}
                alt={experience.name + 'logo'}
                className="centered"
                style={{ height: itemSizes, width: itemSizes }}
              />
              <h3 className="h2">{experience.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
