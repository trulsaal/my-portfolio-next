import { ReactNode } from "react";
import ProfileImage from "../../ProfileImage";

export default function Left() {
  return (
    <div className=" md:bg-[#d4d2d3] h-full px-16 flex justify-between relative">
      <div className="my-auto font-normal tracking-tight flex leading-7 w-80 text-2xl text-slate-800 ">
        <span>
          self-thought designer and front-end developer with passion for
          <span className="text-slate-500 font-normal"> timeless</span>
          <br />
          and
          <span className="text-slate-500 font-normal"> intuitive </span>
          design.
        </span>
      </div>
      <div className="flex items-center absolute bottom-0 -right-72">
        <ProfileImage></ProfileImage>
      </div>
    </div>
  );
}
