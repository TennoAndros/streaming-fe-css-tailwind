import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[hsl(199,64%,88%)]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#fb8500]">TENNOtv.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
          accusamus. Aut sapiente rerum eos cupiditate commodi velit itaque
          minus repellendus?
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#8ecae6]">More</h6>
          <ul>
            <li className="py-2 text-sm">Media Center</li>
            <li className="py-2 text-sm">Ways to Watch</li>
            <li className="py-2 text-sm">Redeem Gift Cards</li>
            <li className="py-2 text-sm">Buy Gift Cards</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#8ecae6]">Support</h6>
          <ul>
            <li className="py-2 text-sm">FAQ</li>
            <li className="py-2 text-sm">Help Center</li>
            <li className="py-2 text-sm">Account</li>
            <li className="py-2 text-sm">Contact Us</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#8ecae6]">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#8ecae6]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Legal Guarantee</li>
            <li className="py-2 text-sm">Privacy</li>
            <li className="py-2 text-sm">Terms of Use</li>
            <li className="py-2 text-sm">Legal Notices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
