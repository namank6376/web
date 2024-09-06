import image from "../assets/photo1.jpg";
import additionalImage from "../assets/photo2.jpg"; // Use for the new photo

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-20">
      <div className="lg:w-1/2 px-6 lg:px-12">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center lg:text-left tracking-wide">
          About
          <span className="text-blue-600 bg-clip-text"> us</span>
        </h1>
        <p className="mt-10 text-lg text-center lg:text-left text-neutral-500 max-w-4xl">
          Scholity Technologies focuses on enhancing healthcare systems, 
          particularly in remote and suburban areas, through innovative technology. 
          The goal is to address critical delays in medical interventions by leveraging real-time data transmission between ambulances and hospitals.
        </p>
       
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end px-6 lg:px-12 mt-10 lg:mt-0">
        <img
          src={additionalImage}
          alt="Additional information"
          className="rounded-lg max-w-full border border-blue-700 shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
