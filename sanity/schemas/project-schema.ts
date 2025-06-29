const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "mobileImage",
      title: "Mobile Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    { name: "url", title: "URL", type: "url" },
    {
      name: "downloadUrl",
      title: "Download URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "list",
      title: "List of tools",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
