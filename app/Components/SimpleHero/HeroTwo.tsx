import {
  FaGit,
  FaJsSquare,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import Top from "./Top";
import Middle from "./Middle";
import ProfileImageTwo from "./ProfileImageTwo";

export default function HeroTwo() {
  return (
    <div className="flex flex-col h-[40rem] px-2 pt-4 justify-between">
      <div className=" grid grid-cols-2 w-full md:px-16 md:mb-4 h-fit relative md:pt-[68px]">
        <div className="flex flex-col md:gap-4 w-full">
          <p className=" text-slate-800 text-lg md:text-[34px]">hi, im</p>
          <p className="align-middle text-slate-800 pb-2 md:pb-10 tracking-tighter text-8xl md:text-[250px] leading-[50px] md:leading-[150px]">
            truls
          </p>
        </div>
        {/* <div className="mb-1 flex bottom-0 right-0 md:right-0 md:pr-16 md:bottom-[18px] absolute md:justify-end gap-1 px-2 md:gap-2 text-xl md:text-4xl text-[#afadae] opacity-50 md:opacity-100">
          <FaJsSquare />
          <FaGithub />
          <FaGit />
          <FaHtml5 />
          <FaCss3 />
          <FaReact />
          <FaNodeJs />
          <FaFigma />
        </div> */}
      </div>
      <Top></Top>
      <Middle></Middle>
      <ProfileImageTwo />
    </div>
  );
}
