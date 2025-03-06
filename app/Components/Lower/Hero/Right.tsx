import Link from "next/link";

export default function Right() {
  return (
    <div className="bg-[#afadae] flex px-16 justify-end">
      <div className="flex flex-col w-fit my-auto">
        <Link
          href="#workSection"
          className="text-slate-800 text-[6rem] tracking-tighter font-bold leading-none w-fit hover:text-slate-700 transition-all duration-150"
        >
          check out my work
        </Link>
        <button className="text-white leading-none text-[6rem] tracking-tighter font-bold w-full text-start hover:text-slate-200 transition-all duration-150">
          contact
        </button>
      </div>
    </div>
  );
}
