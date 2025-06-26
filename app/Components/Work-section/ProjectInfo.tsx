import { getProjects } from "@/sanity/sanity-util";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectInfo() {
  const projects = await getProjects();

  return (
    <div className="">
      <div className="flex flex-col ">
        {projects.map((project) => (
          <div
            className="text-white flex md:grid grid-cols-[40%_60%] flex-col px-5 pt-8  md:p-48 md:min-h-96 h-full md:h-lvh "
            key={project._id}
          >
            <div className="md:flex flex flex-col h-full border-b md:border-none border-slate-700 gap-5 md:gap-5 ">
              <div>
                <h1 className="md:text-5xl text-2xl font-bold tracking-wider mb-1">
                  {project.name.toUpperCase()}
                </h1>
                <div className="text-slate-300 text-sm md:text-base">
                  <PortableText value={project.content} />
                </div>
              </div>

              <ul className="flex flex-col gap-4 md:gap-5">
                <h1 className="text-base md:text-lg font-bold">
                  Development tools
                </h1>
                {project.list &&
                  project.list.map((listItem: string, index: number) => (
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
              {project.downloadUrl ? (
                <Link
                  href={project.downloadUrl}
                  className="hover:bg-green-700 hover:border-green-800 transition-all duration-150 border-2 py-4 flex justify-center rounded-lg w-full md:w-fit md:px-10 md:text-lg mb-8"
                >
                  DOWNLOAD
                </Link>
              ) : project.url ? (
                <Link
                  href={project.url}
                  className="hover:bg-slate-900 hover:border-slate-800 transition-all duration-150 border-2 py-4 flex justify-center rounded-lg w-full md:w-fit md:px-10 md:text-lg mb-8"
                >
                  VIEW PROJECT
                </Link>
              ) : null}
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
