import Left from "./Left";
import Right from "./Right";
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

export default function Hero() {
  return (
    <div className=" hidden h-lvh md:flex flex-col w-full ">
      <header className="flex w-full justify-between">
        <div className="md:flex md:flex-col md:px-16 relative md:pt-[68px]">
          <div className="flex flex-col md:gap-4 w-full">
            <p className=" text-slate-800 text-[34px]">hi, im</p>
            <p className="align-middle text-slate-800 pb-2 md:pb-10 tracking-tighter md:text-[290px] leading-[50px] md:leading-[150px]">
              truls
            </p>
          </div>
        </div>

        <div className="flex mt-auto text-4xl text-[#afadae] opacity-50 md:opacity-100 px-16 pb-[0.4rem]">
          <FaJsSquare />
          <FaGithub />
          <FaGit />
          <FaHtml5 />
          <FaCss3 />
          <FaReact />
          <FaNodeJs />
          <FaFigma />
        </div>
      </header>
      <div className=" grid grid-cols-[40%_60%] h-full">
        <Left />
        <Right />
      </div>
    </div>
  );
}
