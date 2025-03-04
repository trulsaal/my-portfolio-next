import { ReactNode } from "react";
import ProfileImage from "../../ProfileImage";
import ProfileImageTwo from "../../SimpleHero/ProfileImageTwo";

interface Props {
  children: ReactNode;
}
export default function Left({ children }: Props) {
  return (
    <div className="md:rounded-none rounded-2xl flex flex-col gap-16 bg-gradient-to-r  from-slate-100 from-0% py-4 to-white to-45%  w-full ">
      <div className=" md:bg-[#d4d2d3] flex justify-between ">
        <div className="flex px-2 md:px-0 rounded-2xl">{children}</div>
        <div className="flex p-2">
          <ProfileImageTwo />
        </div>
      </div>
      {/* <div className="px-2 grid grid-cols-2 space-x-2 h-fit">
        <div className="">
          <h1>Design</h1>
          <p className="text-sm text-gray-600 leading-tight">
            While the inner creative in me will be found making logos and brand
            identeties, creating fluent user experience while staying modern and
            fashionable the thing that I am committed to.
          </p>
        </div>
        <div className="">
          <h1 className="">Development</h1>
          <p className="text-sm text-gray-600 leading-tight">
            Fast, resilient solutions optimized for scale - built with
            JavaScript and the right tools togehter with AI. Scalability and
            performance are the core priorities in my work.
          </p>
        </div>
      </div> */}
    </div>
  );
}
