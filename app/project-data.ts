export type Project = {
  title: string;
  slug: string;
  images: {
    desktop: { src: string; alt: string };
    mobile?: { src: string; alt: string };
  };
  url?: string;
  content: string;
  tools: string[];
  featured?: boolean;
  date?: string;
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export const projects: Project[] = [
  {
    title: "ADHD MAPPING TOOL FOR WORK PLACES AND ENVIROMENTS",
    slug: "adhd-mapping-tool-for-work-places-and-enviroments",
    images: {
      desktop: { src: "/ADHD1.png", alt: "Image of project ADHD mapping" }, 
      mobile: { src: "/ADHD2.png", alt: "Image of project ADHD mapping mobile" },
    },
    content:
      "A simple tool made for people with ADHD and other challenges in productivity, concentration and work-desipline. It isn't allways easey to understand what your co-worker needs or what you your self need to do to optimize your current situation at work. I made this simple mapping tool that in short time puts in tho words what people need in terms of small adjustments in the workplace, or to give colleagues a better understanding of who they are. There is no diagnostics, just a simple mapping to get to know what the person needs. Shown in a simple way for it to be told to whoever needs it.",
    tools: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Docker",
      "Figma",
      "GitHub",
      "ChatGPT",
      "Next.js",
    ],
    featured: true,
  },
  {
    title: "SPESIALISTBEDRIFTEN AS - BRANNTEKNISK",
    slug: "spesialistbedriften-as-brannteknisk",
    images: {
      desktop: { src: "/branntekniskPreview.png", alt: "Image of brannteknisk site" }, // TODO: add desktop image src + alt
      mobile: { src: "/branntekniskMobile.png", alt: "Image of brannteknisk site mobile" }, // TODO: add mobile image src + alt
    },
    content:
      "Full marketing website with different sections and pages for different services refarding BIM and fire safety consulting. Designed in FIGMA, made with React, Sanity and NEXT.js",
    tools: [
      "React",
      "TypeScript",
      "Next.js",
      "Figma",
      "Sanity",
      "Tailwind CSS",
    ],
  },
  
  {
    title: "KUNSTKAJA.NO",
    slug: "kunstkaja-no",
    images: {
      desktop: { src: "/kunstkajaPreview.png", alt: "Image of kunstkaja site" }, // TODO: add desktop image src + alt
      mobile: { src: "/kunstKajaMobile.png", alt: "Image of kunstkaja site mobile" }, // TODO: add mobile image src + alt
    },
    content:
      "Full sales and gallery website for artist making mainly paitings and other art. Designed in FIGMA with focus on slick and modern design, - developed with React, NEXT.js and Sanity.",
    tools: [
      "React",
      "TypeScript",
      "Next.js",
      "Sanity",
      "Tailwind CSS",
      "Figma",
    ],
  },
];

export function getAllProjects() {
  return projects;
}
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
