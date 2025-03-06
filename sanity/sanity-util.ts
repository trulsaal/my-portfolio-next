import { ProfileImage } from "@/Types/ProfileImage";
import { Project } from "@/Types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "nwd501sj",
    dataset: "production",
    apiVersion: "2025-02-19",
  });
  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    "mobileImage": mobileImage.asset->url,
    url,
    content,
    list
  
    }`
  );
}
export async function getProfileImage() {
  const client = createClient({
    projectId: "nwd501sj",
    dataset: "production",
    apiVersion: "2025-02-19",
  });

  return client.fetch(
    groq`*[_type == "profileImage"] | order(_createdAt desc) [0] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "nwd501sj",
    dataset: "production",
    apiVersion: "2025-02-19",
  });
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    "mobileImage": mobileImage.asset->url,
    url,
    content,
    list
  
    }`,
    { slug }
  );
}
