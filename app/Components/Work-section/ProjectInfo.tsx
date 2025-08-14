// /src/components/ProjectInfo.tsx
// Refactored to consume the local projects.data.ts structure.

import { getAllProjects } from "../../project-data"; // Adjust the import path as necessary
import Image from "next/image";
import Link from "next/link";

export default function ProjectInfo() {
  // getAllProjects is synchronous (no remote fetch)
  const projects = getAllProjects();

  return (
    <div>
      <div className="flex flex-col ">
        {projects.map((project) => (
          <div
            className="text-white flex md:grid grid-cols-[40%_60%] flex-col px-5 pt-8 md:p-48 md:min-h-96 h-full md:h-lvh"
            key={project.slug}
          >
            {/* Left column: text + actions */}
            <div className="md:flex flex flex-col h-full border-b md:border-none border-slate-700 gap-5 md:gap-5">
              <div>
                <h1 className="md:text-5xl text-2xl font-bold tracking-wider mb-1">
                  {project.title.toUpperCase()}
                </h1>
                <div className="text-slate-300 text-sm md:text-base whitespace-pre-line">
                  {project.content}
                </div>
              </div>

              {/* Tools list */}
              <ul className="flex flex-col gap-4 md:gap-5">
                <h2 className="text-base md:text-lg font-bold">Development tools</h2>
                {project.tools?.map((tool, index) => (
                  <li
                    className="text-slate-200 flex flex-col pl-5 md:text-base text-sm"
                    key={`${project.slug}-tool-${index}`}
                  >
                    + {tool}
                  </li>
                ))}
              </ul>

              {/* Mobile image (desktop image used on small screens) */}
              {project.images.desktop?.src ? (
                <div className="md:hidden flex m-auto">
                  <Image
                    width={400}
                    height={400}
                    alt={
                      project.images.desktop.alt ||
                      `${project.title} desktop image`
                    }
                    src={project.images.desktop.src}
                  />
                </div>
              ) : null}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                
                {project.url ? (
                  <Link
                    href={project.url}
                    className="hover:bg-slate-900 hover:border-slate-800 transition-all duration-150 border-2 py-4 flex justify-center rounded-lg w-full md:w-fit md:px-10 md:text-lg"
                  >
                    VIEW PROJECT
                  </Link>
                ) : null}
              </div>
            </div>

            {/* Right column: images on desktop */}
            <div className="hidden md:flex relative m-auto w-fit">
              {project.images.desktop?.src ? (
                <div className="hidden md:flex mx-auto">
                  <Image
                    width={1000}
                    height={800}
                    alt={
                      project.images.desktop.alt ||
                      `${project.title} desktop image`
                    }
                    src={project.images.desktop.src}
                    priority
                  />
                </div>
              ) : null}

              {project.images.mobile?.src ? (
                <div className="absolute z-10 right-0 top-44 w-fit h-96 rounded-lg object-contain">
                  <Image
                    width={200}
                    height={800}
                    alt={
                      project.images.mobile.alt ||
                      `${project.title} mobile image`
                    }
                    src={project.images.mobile.src}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
