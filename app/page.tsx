import { getProjects } from "@/sanity/sanity-util";
import Container from "./Components/Container";
import Header from "./Components/Upper/Header";
import Hero from "./Components/Lower/Hero/Hero";
import { PortableText } from "next-sanity";
import { Outfit } from "next/font/google";
import Image from "next/image";

import Project from "./Components/Work-section/Project";
const outfitFont = Outfit({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <div className={` flex flex-col md:gap-10 ${outfitFont.className}`}>
      <Header></Header>
      <Container>
        <Hero />
      </Container>
      <section className="bg-slate-900">
        <Container>
          <Project></Project>
        </Container>
      </section>
    </div>
  );
}
