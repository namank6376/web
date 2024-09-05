
import image from "../assets/photo1.jpg";
import image2 from "../assets/photo2.jpg";

const HeroSection = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="h1 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    Revolutionizing Healthcare, One Sync 
        <span className="bg-gradient-to-r from-blue-500 text-transparent bg-clip-text">
          {" "}
          at a Time </span>
   </h1>
   <p className="mt-10 text-lg text-cente text-neutral-500 max-w-4xl">
   Elevate emergency care with Scholity Technologies. Our cutting-edge solutions seamlessly connect ambulances and hospitals, ensuring critical data is shared in real-time. Join us in revolutionizing healthcare and safeguarding lives when every second counts!
   </p>
   <div className="flex justify-center my-10">
    <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
      Excited?
    </a>
    
   </div>
   <div className="flex mt-10 justify-center">
    <img src={image} alt="" className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4"/>
    <img src={image2} alt="" className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4"/>

    
   </div>
   </div>
  )
};

export default HeroSection;