import Container from "./Components/Container";
import Header from "./Components/Upper/Header";

import { Outfit } from "next/font/google";

import Project from "./Components/Work-section/Project";
import HeroTwo from "./Components/SimpleHero/HeroTwo";
import WorkHeader from "./Components/Work-section/WorkHeader";
const outfitFont = Outfit({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <div className={` flex flex-col md:gap-10 ${outfitFont.className}`}>
      <Header></Header>
      <Container>
        <HeroTwo />
        {/* <Hero /> */}
      </Container>
      <section className="bg-slate-900">
        <WorkHeader></WorkHeader>
        <Project></Project>
      </section>
    </div>
  );
}
