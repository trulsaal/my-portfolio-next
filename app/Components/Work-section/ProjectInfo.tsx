import { getProjects } from "@/sanity/sanity-util";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function ProjectInfo() {
  const projects = await getProjects();

  return (
    <div className="">
      <div className="flex flex-col gap-8 ">
        {projects.map((project) => (
          <div
            className="bg-transparent text-white flex md:grid grid-cols-[40%_60%] w-lvw flex-col p-8 md:p-48 gap-4 md:min-h-96 h-lvh "
            key={project._id}
          >
            <div className="md:flex flex flex-col h-full gap-5 md:gap-5 ">
              <h1 className="md:text-5xl text-2xl font-bold tracking-wider">
                {project.name.toUpperCase()}
              </h1>
              <div className="text-slate-300 text-sm md:text-base">
                <PortableText value={project.content} />
              </div>

              <ul className="flex flex-col gap-4 md:gap-5">
                <h1 className="text-base md:text-lg font-bold">
                  Development tools
                </h1>
                {project.list &&
                  project.list.map((listItem, index) => (
                    <li
                      className="text-slate-200 flex flex-col pl-5 md:text-base text-sm"
                      key={index}
                    >
                      + {listItem}
                    </li>
                  ))}
              </ul>
              <div className="md:hidden flex m-auto">
                <Image
                  width={400}
                  height={400}
                  alt={"Alt"}
                  src={project.image}
                />
              </div>
              <button className="border-2 py-4 rounded-lg w-full md:w-fit md:px-10 md:text-lg">
                VIEW PROJECT
              </button>
            </div>

            <div className="hidden md:flex relative m-auto w-fit">
              <div className="hidden md:flex mx-auto ">
                <Image
                  width={1000}
                  height={800}
                  alt={"Alt"}
                  src={project.image}
                />
              </div>
              <div className="absolute z-10 right-0 top-44 w-fit h-96 rounded-lg object-contain">
                <Image
                  width={200}
                  height={800}
                  alt={"Alt"}
                  src={project.mobileImage}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
