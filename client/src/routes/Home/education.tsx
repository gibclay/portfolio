import { Hero } from 'react-daisyui';

export interface iEducationProps {}

export const Education = (props: iEducationProps) => {
  return (
    <>
      <h1 className="h1" id="education">
        Education
      </h1>
      <Hero
        style={{
          backgroundImage:
            'url(https://brocku.ca/about/wp-content/uploads/primary-site/sites/8/Brock-Panorama-Nov-5-2021-crop-1800x724.jpg?x59347)',
          // paddingBottom: "31%",
          backgroundPositionX: 0,
          backgroundPositionY: '30%',
        }}
        className="w-full rounded-box bg-no-repeat" //bg-no-repeat bg-contain
      >
        <Hero.Overlay />
        <Hero.Content
          className="h-full"
          style={{ paddingTop: '12%', paddingBottom: '12%' }}
        >
          <div className="bg-opacity-85 bg-base-100 rounded-box centered max-w-lg pt-1 pb-8">
            <h3 className="text-3xl font-bold m-8">Brock University</h3>
            <p className="text-xl font-semibold">
              Bachelors Honors Computer Science
            </p>
            <p className="text-xl font-semibold">(2019-2024)</p>
          </div>
        </Hero.Content>
      </Hero>
    </>
  );
};
