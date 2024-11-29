import { useContext } from "react"; 
import { MyContext } from "../../../App"; 
import Banner1 from "../../../assets/img/banner1.jpg";
const Main = () => {
  const { home, setIsPopUpOpen } = useContext(MyContext);
  return (
    <div
      ref={home}
      className="flex relative w-full justify-center items-center mt-20 md:mt-16 2xl:mt-20   h-44  md:h-[89vh] 2xl:h-screen bg-black"
    >
      <img
        src={'https://pristine-kyra-vimannagar.in/uploads/Image/Kyra_Brochure_WhatsApp.pdf_(2)2.png'}
        alt="..."
        className="absolute w-full h-full mx-10 object-cover"
      /> 
       
    </div>
  );
};

export default Main;
