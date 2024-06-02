import { useState } from 'react';
import { Carousel } from 'react-daisyui';

interface ButtonCarouselProps {
  images: string[];
}

const ButtonCarousel = (props: ButtonCarouselProps) => {
  const [active, useActive] = useState<number>(0);

  const handleButtonClick = (i: number) => {};

  return (
    <Carousel className="rounded-box">
      {props.images.map((image, index) => {
        return <Carousel.Item src={image} index={index} />;
      })}
    </Carousel>
  );
};

export default ButtonCarousel;
