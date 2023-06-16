import React from "react";

const Νewsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to receive offers, news?
          </h1>
          <p>Sign up here and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-[#023047]"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-[#fb8500] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 text-[#023047]">
              Sign up
            </button>
          </div>
          <p>
            We care about your personal information protection. Read our{" "}
            <span className="text-[#fb8500]">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Νewsletter;
