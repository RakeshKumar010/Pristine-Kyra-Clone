import LocationMap from "../../../assets/img/location_map.png";
import { useContext } from "react";
import { MyContext } from "../../../App";
import Icon1 from "../../../assets/icons/locationIcon1.svg";
import Icon2 from "../../../assets/icons/locationIcon2.svg";
import Icon3 from "../../../assets/icons/locationIcon3.svg";
import Icon4 from "../../../assets/icons/locationIcon4.svg";
import Icon5 from "../../../assets/icons/locationIcon5.svg";
import Icon6 from "../../../assets/icons/locationIcon6.svg";
import { FaMapMarkerAlt } from "react-icons/fa";

const data = [
  {
    para: "Reliance Mart 5.5 km",
  },
  {
    para: " Pune Railway Station 15 km",
  },
  {
    para: "Pune International Airport 10 km",
  },
  {
    para: "Phoenix Market City 8 km",
  },
  {
    para: "Hotel Radisson Blu 5.5 km",
  },
  {
    para: "Podar International School 4.6 km",
  },
];

const Location = () => {
  const { location } = useContext(MyContext);

  return (
    <div ref={location} className="   pt-24 md:px-5 px-3 2xl:px-40">
      <div className="text-center">
        <h2>Location Highlights - Pristine Kyra Viman Nagar</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-10">
        <div className="grid  gap-2 ">
          {data.map(({ para }, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#fffdf1] p-3"
              >
                <FaMapMarkerAlt className="text-sm text-logoBlue" />
                <p className="m-0">{para}</p>
              </div>
            );
          })}
        </div>
        <img src={LocationMap} alt="Location Map" className="" />
      </div>
    </div>
  );
};

export default Location;
