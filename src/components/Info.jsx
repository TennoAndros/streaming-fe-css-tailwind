import React from "react";
import Watch from "../assets/Watch.jpg";

const Info = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Watch} alt="TV Watch" />
        <div className="flex flex-col justify-center">
          <p className="text-[#fb8500] font-bold">WATCH EVERYWHERE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#023047]">
            Enjoy on your TV & download your shows to watch offline
          </h1>
          <p className="text-[#023047]">
            Watch a variety of streaming services on Smart TVs, Playstation,
            Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
          <button className="bg-[#023047] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto md:mx-0 py-3 text-[#fb8500]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
