import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
export const HeroSection = () => {
  var settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
  };

  const CardHeo = [
    {
      id: 1,
      image: "hero-background-one",
    },
    {
      id: 2,
      image: "hero-background-two",
    },
    {
      id: 3,
      image: "hero-background-three",
    },
    {
      id: 4,
      image: "hero-background-four",
    },
    {
      id: 5,
      image: "hero-background-five",
    },
  ];
  

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {CardHeo.map((data, index) => (
          <div
            key={index}
            className={`${data.image} w-full h-screen bg-fixed relative`}
          ></div>
        ))}
      </Slider>
    </div>
  );
};

