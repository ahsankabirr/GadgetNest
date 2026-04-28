import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    document.title = "Gadget Nest | Home";
  }, []);
  return (
    <div>
      <div className="hero  md:absolute md:pb-80 left-0 right-0">
        <div className="hero-content text-center ">
          <div className="md:max-w-9/12">
            <h1 className="text-3xl md:text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="md:max-w-8/12 py-6 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white rounded-full text-[#9538E2]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center  ">
        <div className="">
          <img
            className="md:w-[1062px] md:h-[563px] md:bg-white/50 md:border-2 border-white-400 p-5 rounded-3xl relative top-12 md:top-72 "
            src="https://i.ibb.co/gbgXWtdy/banner.jpg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
