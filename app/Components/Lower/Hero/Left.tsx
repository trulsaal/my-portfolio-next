import { ReactNode } from "react";
import ProfileImage from "../../ProfileImage";

export default function Left() {
  return (
    <div className=" md:bg-[#d4d2d3] h-full px-16 flex justify-between relative">
      <div className="pt-24 outline font-normal tracking-wide flex leading-7 w-80 text-2xl text-gray-800 ">
        <span>
          self-thought designer and front-end developer with passion for
          <span className="text-gray-500 font-normal"> timeless</span>
          <br />
          and
          <span className="text-gray-500 font-normal"> intuitive </span>
          design.
        </span>
      </div>
      <div className="flex items-center absolute bottom-0 -right-20">
        <ProfileImage></ProfileImage>
      </div>
    </div>
  );
}
