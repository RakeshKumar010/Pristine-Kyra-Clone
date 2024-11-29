import React, { useContext, useRef } from "react";

import { MyContext } from "../../../App";
import Icon1 from "../../../assets/icons/amenitieicon1.png";
import Icon2 from "../../../assets/icons/amenitieicon2.png";
import Icon3 from "../../../assets/icons/amenitieicon3.png";
import Icon4 from "../../../assets/icons/amenitieicon4.png";
import Icon5 from "../../../assets/icons/amenitieicon5.png";
import Icon6 from "../../../assets/icons/amenitieicon6.png";
import Icon7 from "../../../assets/icons/amenitieicon7.png";
import Icon8 from "../../../assets/icons/amenitieicon8.png";
import Slider from "react-slick";

const data = [
  {
    icon: Icon1,
    para: "Multipurpose court",
  },
  {
    icon: Icon2,
    para: "Jogging Track",
  },
  {
    icon: Icon3,
    para: "Amphitheater",
  },
  {
    icon: Icon4,
    para: "Swimming Pool",
  },

  {
    icon: Icon6,
    para: "Yoga / Aerbics Room",
  },
  {
    icon: Icon7,
    para: "Kids Play Area",
  },
  {
    icon: Icon8,
    para: "Entrance Lobby",
  },
  {
    icon: Icon5,
    para: "Gymnasium",
  },
];

const Amenities = () => {
  const { amenitie } = useContext(MyContext);
  let sliderRef = useRef(null);

  const settings = {
    infinite: true,

    slidesToShow: 4,
    autoplay: true,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1109,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 909,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div ref={amenitie} className="md:px-10 px-7 my-20">
      <div className="text-center">
        <h2>Project Amenities - Pristine Kyra Viman Nagar</h2>
        <p className="text-center">
          When the interior is unparalleled, the exterior cannot be less. Which
          is why, we have matched the amenities to your <br /> aspirations of a
          unique lifestyle.
        </p>
      </div>
      <div className="md:px-5 px-3 2xl:px-40 ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {data.map(({ icon, para }, index) => {
            return (
              <div className="px-2"> 
                <div
                  id="amenitieSlider"
                  key={index}
                  className="border-[1px] py-3     border-logoBlue rounded-md    "
                >
                  <img
                    src={icon}
                    alt={para}
                    className={"w-16 rounded-full bg-white"}
                  />
                  <p className="  mb-0 font-semibold text-nowrap">{para}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Amenities;
