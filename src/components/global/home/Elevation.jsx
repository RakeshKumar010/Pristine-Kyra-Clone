import React, { useContext, useRef } from "react";
import GalleryImg1 from "../../../assets/slider/gallery_img1.jpg";
import GalleryImg2 from "../../../assets/slider/gallery_img2.jpg";
import GalleryImg3 from "../../../assets/slider/gallery_img3.jpg";
import GalleryImg4 from "../../../assets/slider/gallery_img4.jpg";
import GalleryImg5 from "../../../assets/slider/gallery_img5.jpg";
import GalleryImg6 from "../../../assets/img/banner1.jpg";
import GalleryImg7 from "../../../assets/img/banner2.jpg";
import Slider from "react-slick";
import { MyContext } from "../../../App"; 
const sliderImgData = [
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg4,
  GalleryImg5,
  GalleryImg6,
  GalleryImg7,
];
const Elevation = () => {
  const { gallery } = useContext(MyContext);
  let sliderRef = useRef(null);
 

  const settings = {
    infinite: true,

    slidesToShow: 4,
    speed: 1500,
    responsive: [
      {
        breakpoint: 909,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div ref={gallery} className="   py-16 md:px-5 px-3 2xl:px-40 ">
      <h2 className="text-center ">
        Gallery - Pristine Kyra Viman Nagar
      </h2>
      <div className=" px-4">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {sliderImgData.map((value, index) => (
            <div key={index}  className="mx-auto pt-10">
            <img
              src={value}
              alt={`slider-duplicate-${index}`}
              className="h-64 hover:-translate-y-2 transition-all duration-700  w-full md:w-[270px] rounded-md "
              key={`duplicate-${index}`}
            />
            </div>
          ))}
        </Slider>
         
      </div>
    </div>
  );
};

export default Elevation;
