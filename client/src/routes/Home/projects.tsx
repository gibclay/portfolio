import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div>
        <h1 className="h1">Projects</h1>
        <div className="grid grid-cols-2 w-full">
          <div className="w-full p-4 content-center">
            <h2 className="h3">
              Brock Interactive Software Engineering System (BITES)
            </h2>
            <p className="text-lg text-center content-center">
              BITES is a webapp created by myself and 7 other students meant to
              provide a platform to host supplementary information helpful to
              aspiring Software Engineers.
            </p>
          </div>
          <div className="w-full p-10">
            <BitesCarousel />
          </div>
          <div className="w-1/2 self-center rounded-box content-center">
            placeholder
          </div>
          <div className="w-full p-8 content-center">
            <h2 className="h3">BuildMaster</h2>
            <p className="text-lg text-center content-center">Demo</p>
          </div>
        </div>
      </div>
    </>
  );
};

interface CarouselProps {}

const BitesCarousel = (props: CarouselProps) => {
  let args = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Link to="https://bitesapp.org/">
      <Slider {...args}>
        <div>
          <img
            className="rounded-box"
            src="src/assets/bites/bites-logo.png"
            alt="Bites logo"
          />
        </div>
        <div>
          <img
            className="rounded-box"
            src="src/assets/bites/bites-modules.png"
            alt="Bites Modules"
          />
        </div>
      </Slider>
    </Link>
  );
};

const BuildmasterCarousel = () => {
  let args = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...args}>
      <Link to="https://bitesapp.org/">
        <div>
          <img
            className="rounded-box"
            src="src/assets/bites/bites-logo.png"
            alt="Bites logo"
          />
        </div>
        <div>
          <img
            className="rounded-box"
            src="src/assets/bites/bites-modules.png"
            alt="Bites Modules"
          />
        </div>
      </Link>
    </Slider>
  );
};

export default Projects;
