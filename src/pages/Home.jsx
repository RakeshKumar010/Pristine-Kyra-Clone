import React, { useContext, useEffect } from "react";
import Navbar from "../components/global/Navbar";
import Overview from "../components/global/home/Overview";
import Location from "../components/global/home/Location";
import Amenities from "../components/global/home/Amenities";
import Price from "../components/global/home/Price";
import Contact from "../components/global/home/Contact";
import Main from "../components/global/home/Main";
import Footer from "../components/global/Footer";
import UnitPlan from "../components/global/home/UnitPlan";
import Loan from "../components/global/home/Loan";
import View360 from "../components/global/home/View360";
import GoodMemories from "../components/global/home/GoodMemories";
import Elevation from "../components/global/home/Elevation";
import { MyContext } from "../App";
import HeaderDetails from "../components/global/home/HeaderDetails";
import KeyBenefits from "../components/global/home/KeyBenefits";
import ScrollButton from "../components/global/ScrollButton";
import AboutDeveloper from "../components/global/home/AboutDeveloper";
import HeartViman from "../components/global/home/HeartViman";
import Video from "../components/global/home/Video";

const Home = () => {
  const { setIsPopUpOpen } = useContext(MyContext);
  useEffect(() => {
    setTimeout(() => {
      // setIsPopUpOpen(true);
    }, 4000);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="  ">
        <Main />
        <HeaderDetails />
        <Overview />
        <HeartViman />
        <Amenities />
        <Price />
        <UnitPlan />
        <Elevation />
        <Video />
        <Location />
        <AboutDeveloper />
        <Contact />
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
};

export default Home;
