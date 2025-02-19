import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "nwd501sj",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2025-19-02",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
