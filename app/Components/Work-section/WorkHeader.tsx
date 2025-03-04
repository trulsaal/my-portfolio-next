import DevImage from "./DevImage";

export default function WorkHeader() {
  return (
    <div className="flex flex-col gap-2 p-8">
      <span className="text-nowrap tracking-tight font-semibold leading-tight text-3xl md:text-[100px] text-white">
        design & developer projects
      </span>

      <div className="w-full flex justify-between rounded-lg h-fit items-center">
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />

        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />

        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg" />

        {/* <DevImage srcSet="https://img.icons8.com/?size=100&id=YSWCDCSF4H3N&format=png&color=FFFFFF" /> */}
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
        <DevImage srcSet="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
      </div>

      <div className="grid grid-cols-2 space-x-2 h-fit text-gray-400">
        <div className="">
          <h1 className="font-bold">Design</h1>
          <p className="text-sm leading-tight">
            While the inner creative in me will be found making logos and brand
            identeties, creating fluent user experience while staying modern and
            fashionable the thing that I am committed to.
          </p>
        </div>
        <div className="">
          <h1 className="font-bold">Development</h1>
          <p className="text-sm  leading-tight">
            Fast, resilient solutions optimized for scale - built with
            JavaScript and the right tools togehter with AI. Scalability and
            performance are the core priorities in my work.
          </p>
        </div>
      </div>
    </div>
  );
}
