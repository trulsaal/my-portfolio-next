const profileImage = {
  name: "profileImage",
  title: "Profile Image",
  type: "document",
  fields: [
    { name: "name", title: "Tittel", type: "string" },

    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "url", title: "URL", type: "url" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
  ],
};

export default profileImage;
