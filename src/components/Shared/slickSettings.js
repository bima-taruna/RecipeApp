import { ImArrowLeft, ImArrowRight } from "react-icons/im";
const settings = {
  dots: true,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ImArrowRight />,
  prevArrow: <ImArrowLeft />,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;
