import { Outfit } from "next/font/google";

import Project from "./Components/Work-section/Project";
import HeroTwo from "./Components/MobileHero/HeroTwo";
import WorkHeader from "./Components/Work-section/WorkHeader";
import Hero from "./Components/Lower/Hero/Hero";

import PageWrapper from "./Components/PageWrapper";

const outfitFont = Outfit({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <PageWrapper>
      <div className={` flex flex-col ${outfitFont.className}`}>
        <HeroTwo />
        <Hero />
        <section className="bg-gradient-to-b from-slate-900 to-slate-800">
          <WorkHeader></WorkHeader>
          <Project></Project>
        </section>
      </div>
    </PageWrapper>
  );
}
