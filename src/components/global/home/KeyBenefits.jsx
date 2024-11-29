import keyb1 from "../../../assets/img/keyb1.jpg";
import keyb2 from "../../../assets/img/keyb2.jpg";
import keyb3 from "../../../assets/img/keyb3.jpg";
import keyb4 from "../../../assets/img/keyb4.jpg";
const data = [
  {
    image: keyb1,
    title: "Central Location",
    para: "Ensures you are close to existing & potential clients",
  },
  {
    image: keyb2,
    title: "Matchless Connectivity",
    para: "Easy commutes for you and your employees",
  },
  {
    image: keyb3,
    title: "Enhanced Brand",
    para: "Plush interiors that justify the premium you command from your clients",
  },
  {
    image: keyb4,
    title: "Stunning Full-glazed Glass Façade",
    para: "Reflects heat, reduces electricity consumption",
  },
];
const KeyBenefits = () => {
  return (
    <div className="md:px-10 px-7 pt-24">
      
      <h2 className="text-logoBlue text-xl md:text-2xl text-center font-semibold">
      Key Benefits - Pristine Kyra Viman Nagar
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4  text-center gap-10">
        {data.map(({ image, title, para }, index) => {
          return (
            <div
              key={index}
              className=" border rounded-md  bg-gradient-to-t hover:from-logoBlue/10 hover:border-black transition-all duration-1000  "
            >
              <img src={image} alt={title} className="w-full rounded-t-md " />
              <div className="m-2">
                <p className=" text-logoBlue font-semibold m-0 p-0">{title}</p>
                <p className="m-0 p-0">{para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyBenefits;
