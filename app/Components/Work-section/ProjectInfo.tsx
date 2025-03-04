import { getProjects } from "@/sanity/sanity-util";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function ProjectInfo() {
  const projects = await getProjects();

  return (
    <div className="">
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div
            className="border-b-2 border-slate-500 bg-transparent text-white flex w-lvw flex-col p-8 gap-2 min-h-96 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
            key={project._id}
          >
            <h1 className="text-4xl font-bold tracking-wider">
              {project.name.toUpperCase()}
            </h1>
            <div className="text-gray-400">
              <PortableText value={project.content} />
            </div>

            <ul>
              <h1 className="text-lg font-bold">Development tools</h1>
              {project.list &&
                project.list.map((listItem, index) => (
                  <li className="text-gray-400" key={index}>
                    + {listItem}
                  </li>
                ))}
            </ul>
            <button className="border-2 py-4 rounded-lg my-10 ">
              View project
            </button>
            <div className="flex mx-auto">
              <Image width={250} height={250} alt={"Alt"} src={project.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
