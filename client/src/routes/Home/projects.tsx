import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export const Projects = () => {
  let carouselArgs = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    autoplay: true,
  };

  return (
    <>
      <h1 className="h1">Projects</h1>
      <div className="grid grid-cols-2 w-full">
        {/* BITES */}

        <div className="w-full p-4 content-center">
          <h2 className="h3">
            Brock Interactive Software Engineering System (BITES)
          </h2>
          <p className="text-lg text-center content-center">
            BITES is a webapp created by myself and 7 other students meant to
            provide a platform to host supplementary information helpful to
            aspiring Software Engineers.
          </p>
          <Link
            to="https://bitesapp.org/"
            className="btn centered btn-secondary btn-wide my-8 col-span-2"
          >
            Visit BITES
          </Link>
        </div>
        <div className="w-full p-10">
          <BitesCarousel args={carouselArgs} />
        </div>

        {/* BuildMaster */}

        <div className="w-full p-10">
          <BuildmasterCarousel args={carouselArgs} />
        </div>
        <div className="w-full p-8 content-center">
          <h2 className="h3">BuildMaster</h2>
          <p className="text-lg centered content-center">
            BuildMaster is a frontend demo for a Do It Yourself PC Builder
            application. It is made to showcase principles of frontend
            development and User Experience.
          </p>
          <p className="btn btn-secondary btn-wide text-center mx-auto btn-md my-8 col-span-2">
            Visit BuildMaster
          </p>
        </div>
      </div>
    </>
  );
};

interface CarouselProps {
  args: any;
}

const BitesCarousel = (props: CarouselProps) => {
  return (
    <Link to="https://bitesapp.org/">
      <Slider {...props.args}>
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

const BuildmasterCarousel = (props: CarouselProps) => {
  return (
    <Slider {...props.args}>
      <div>
        <img
          className="rounded-box"
          src="src/assets/buildmaster/buildmaster-front.png"
          alt="Bites logo"
        />
      </div>
      <div>
        <img
          className="rounded-box"
          src="src/assets/buildmaster/buildmaster-build.png"
          alt="Bites Modules"
        />
      </div>
      <div>
        <img
          className="rounded-box"
          src="src/assets/buildmaster/buildmaster-details.png"
          alt="Bites Modules"
        />
      </div>
      <div>
        <img
          className="rounded-box"
          src="src/assets/buildmaster/buildmaster-service.png"
          alt="Bites Modules"
        />
      </div>
    </Slider>
  );
};
