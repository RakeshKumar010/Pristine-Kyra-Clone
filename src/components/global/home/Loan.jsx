import Banks1 from "../../../assets/brands/bank1.jpg";
import Banks2 from "../../../assets/brands/bank2.png";
import Banks3 from "../../../assets/brands/bank3.webp";
import Banks4 from "../../../assets/brands/bank4.jpg";
import Banks5 from "../../../assets/brands/bank5.png";

const Loan = () => {
  return (
    <div className=" md:px-10 px-7 pt-24">
      <div className="text-center mb-20">
        
        <h2 className="text-logoBlue text-xl md:text-2xl text-center font-semibold">
        Approved Banks for home loan
      </h2>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between items-center pb-20 gap-10 ">
        <img src={Banks1} alt="Banks1" className="h-10  " />
        <img src={Banks3} alt="Banks3" className="h-10  " />
        <img src={Banks2} alt="Banks2" className="h-10  " />
        <img src={Banks5} alt="Banks4" className="h-10  " />
        <img src={Banks4} alt="Banks4" className="h-10  " />
      </div>
    </div>
  );
};

export default Loan;
