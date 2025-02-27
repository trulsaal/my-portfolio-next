import Container from "../../Container";
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
    <main className="bg-white md:bg-[#d4d2d3] px-2 w-smw h-svh md:w-full md:px-16 flex md:grid md:grid-cols-[40%_60%] md:max-h-[600px] md:h-full ">
      <Container>
        <div className=" grid grid-cols-2 w-full p-2 md:px-16 md:mb-4 h-fit relative  md:pt-[68px]">
          <div className="flex flex-col md:gap-4 w-full">
            <p className=" text-slate-800 text-2xl md:text-[34px]">hi, im</p>
            <p className="align-middle text-slate-800 pb-2 md:pb-10 tracking-tighter text-8xl md:text-[250px] leading-[50px] md:leading-[150px]">
              truls
            </p>
          </div>
          <div className="flex bottom-0 right-0 md:right-0 md:pr-16 md:bottom-[18px] absolute md:justify-end gap-1 px-2 md:gap-2 text-xl md:text-4xl text-[#afadae] opacity-50 md:opacity-100">
            <FaJsSquare />
            <FaGithub />
            <FaGit />
            <FaHtml5 />
            <FaCss3 />
            <FaReact />
            <FaNodeJs />
            <FaFigma />
          </div>
        </div>
        <div className=" gap-4 flex flex-col">
          <Left>
            <div className="items-center font-normal tracking-wide text-lg flex leading-none md:leading-5 md:text-2xl text-gray-800">
              <span>
                self-thought designer and front-end developer
                <hr className="my-2 border-1 w-32 border-slate-400 md:hidden" />
                with passion for
                <span className="text-gray-500 font-normal"> timeless</span>
                <br />
                and
                <span className="text-gray-500 font-normal"> intuitive </span>
                design.
              </span>
            </div>
          </Left>
          <Right></Right>
        </div>
      </Container>
    </main>
  );
}
