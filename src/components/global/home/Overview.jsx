import OverviewImg from "../../../assets/home/overviewImg.png";
import { overviewText } from "../../../data";
import { useContext } from "react";
import { MyContext } from "../../../App";
import { ImPointRight } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";

const Overview = () => {
  const { setIsPopUpOpen, overview } = useContext(MyContext);

  return (
    <div
      ref={overview}
      className="grid grid-cols-1 lg:grid-cols-2 mx-auto  pt-12 gap-8 w-full md:px-5 px-3 2xl:px-40"
    >
      {/* Image Section */}
      <div className=" flex justify-center pt-12 pr-5 pb-12  ">
        <img
          src={OverviewImg}
          alt="Overview"
          className="shadow-[14px_14px_1px_#055354] w-full h-full "
        />
      </div>
      {/* Text Section */}
      <div>
        <h2>Pristine Kyra Viman Nagar - A Landmark for Splendid Living</h2>
        <p className=" ">
          Gracing the center of Pune’s most sought-after location, and ensconced
          in 3 acres of gorgeous greens, Pristine Kyra brings an unprecedented
          lifestyle to Viman Nagar.
        </p>
        <p className=" ">
          A rare confluence of lush vegetation and thoughtful outdoor spaces, it
          makes for the perfect private haven.
        </p>
        <p className=" ">
          Limited 3 and 4-bed palatial homes serenade you with endless views of
          the hills, while 5-star hospitality services help run your day,
          effortlessly. A trio of towers soaring 12 storeys high, grand
          clubhouse, rooftop café, and other luxuries to indulge in – it is a
          privilege only a rare few will access.
        </p>
        <div className="divide-y py-10   divide-black ">
          {overviewText.map((value, index) => (
            <p
              style={{ display: "-webkit-box" }}
              key={index}
              className="   p-[5px] px-3 m-0 "
            >
              <FaLongArrowAltRight className="text-logoBlue  mr-2" />
              {value}
            </p>
          ))}
        </div>
        <button
          onClick={() => setIsPopUpOpen(true)}
          className="bg-logoBlue   text-white  py-[6px] rounded-[4px] hover:bg-black px-9 "
        >
          <span className="relative  font-semibold z-10">
            Download Brochure
          </span>
        </button>
      </div>
    </div>
  );
};

export default Overview;
