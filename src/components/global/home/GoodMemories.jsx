import { useContext, useRef, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Slider from "react-slick";
import { MyContext } from "../../../App";
import { memoriesData } from "../../../data";
 
// JSON Data for the memories

const GoodMemories = () => {
  let sliderRef = useRef(null);
  const { memories, setIsPopUpOpen } = useContext(MyContext);

  const [slideNo, setSlideNo] = useState(1);
  const next = () => {
    sliderRef.slickNext();
    if (slideNo < 5) {
      setSlideNo(slideNo + 1);
    } else {
      setSlideNo(1);
    }
  };

  const previous = () => {
    sliderRef.slickPrev();
    if (slideNo > 1) {
      setSlideNo(slideNo - 1);
    } else {
      setSlideNo(5);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div ref={memories} className="bg-navColor pt-24 md:px-10 px-7">
      <div className="text-center">
        <h2 className="text-logoBlue text-xl md:text-2xl text-center font-semibold">
          Memories - Pristine Kyra Viman Nagar
        </h2>
      </div>
      <div className="relative">
        <div className="flex justify-end flex-wrap">
          <div className="my-auto relative lg:absolute xl:w-[32%] lg:w-[39%] w-full left-0 xl:top-32 lg:top-10 z-10 bg-logoBlue shadow-[10px_10px_0_black] h-fit p-5 lg:p-10 rounded-md">
            <h3 className="text-white text-4xl mb-5 font-bold">
              {memoriesData[slideNo - 1].title}
            </h3>
            <span className="text-white text-lg">
              {memoriesData[slideNo - 1].description}
            </span>
            <div className="flex items-center mt-10">
              <button
                onClick={() => setIsPopUpOpen(true)}
                className="uppercase rounded-md relative group overflow-hidden font-thin border text-white transition-all duration-1000 py-2 px-5"
              >
                <div className="absolute transition-all duration-700 rounded-[100%] -top-5 -bottom-5 -left-5 -right-5 group-hover:translate-y-0 translate-y-full bg-logoColor"></div>
                <span className="relative z-10">Know More</span>
              </button>
              <button
                className="button text-gray-300 text-4xl"
                onClick={previous}
              >
                <FaCaretLeft />
              </button>
              <button className="button text-gray-300 text-4xl" onClick={next}>
                <FaCaretRight />
              </button>
            </div>
          </div>
          <div className="xl:w-[70%] w-full lg:w-[90%]">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {memoriesData.map((memory, index) => (
                <img
                  src={memory.img}
                  key={index}
                  alt={`memory-${index}`}
                  className="rounded-md h-[85vh] grayscale"
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodMemories;
