import { getProjects } from "@/sanity/sanity-util";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function ProjectInfo() {
  const projects = await getProjects();

  return (
    <div className="">
      <div className="flex flex-col gap-8 p-4">
        {projects.map((project) => (
          <div
            className="bg-gradient-to-r from-slate-100 from-0% py-4 to-white to-45% rounded-md w-full flex flex-col p-4 gap-2 min-h-96"
            key={project._id}
          >
            <h1 className="font-bold tracking-wider">
              {project.name.toUpperCase()}
            </h1>
            <div className="text-gray-800">
              <PortableText value={project.content} />
            </div>

            <ul>
              <h1 className="font-bold">Development tools</h1>
              {project.list &&
                project.list.map((listItem, index) => (
                  <li className="text-gray-800" key={index}>
                    + {listItem}
                  </li>
                ))}
            </ul>
            <div className="flex mx-auto mt-4">
              <Image width={250} height={250} alt={"Alt"} src={project.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
