import { Hero } from "react-daisyui";

export const Education = () => {
  return (
    <div className="w-full">
      <h1 className="h1">Education</h1>
      <Hero
        style={{
          backgroundImage:
            "url(https://brocku.ca/about/wp-content/uploads/primary-site/sites/8/Brock-Panorama-Nov-5-2021-crop-1800x724.jpg?x59347)",
          paddingBottom: "31%",
        }}
        className="w-full rounded-box bg-no-repeat bg-contain"
      >
        <Hero.Overlay />
        <Hero.Content className="h-full">
          <h3 className="text-3xl font-bold m-8">Brock University</h3>
          <p className="text-xl">Bachelors Honors Computer Science</p>
          <p className="text-xl">(2019-2024)</p>
        </Hero.Content>
      </Hero>
    </div>
  );
};
