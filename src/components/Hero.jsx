import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#fb8500] font-bold p-2">
          GROWING EVERYDAY WITH YOU FOR YOU
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-5">
          Unlimited movies, TV shows and more
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            High quality & quantity from
          </p>
          {/* Buyer to Buyer,Buyer to Customer, Software as a Service */}
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["NTFLX", "XMAX", "SNEY"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#8ecae6]">
          Watch anywhere. Cancel anytime.
        </p>
        <button className="bg-[#fb8500] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#023047]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
