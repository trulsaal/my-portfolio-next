import Top from "./Top";
import Middle from "./Middle";
import ProfileImageTwo from "./ProfileImageTwo";

export default function HeroTwo() {
  return (
    <div className="md:hidden flex flex-col h-lvh px-2 pt-4 justify-between">
      <div className=" grid grid-cols-2 w-full md:px-16 md:mb-4 h-fit relative md:pt-[68px]">
        <div className="flex flex-col md:gap-4 w-full">
          <p className=" text-slate-800 text-lg md:text-[34px]">hi, im</p>
          <p className="align-middle text-slate-800 pb-2 md:pb-10 tracking-tighter text-8xl md:text-[250px] leading-[50px] md:leading-[150px]">
            truls
          </p>
        </div>
      </div>
      <Top></Top>
      <Middle></Middle>
      <ProfileImageTwo />
    </div>
  );
}
