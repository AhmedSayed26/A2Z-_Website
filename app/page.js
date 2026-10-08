import BuildImpact from "../components/home/BuildImpact";
import Clients from "../components/home/Clients";
import Different from "../components/home/Different";
import Hero from "../components/home/Hero";
import HowImpact from "../components/home/HowImpact";
import Presence from "../components/home/Presence";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Ticker from "../components/home/Ticker";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Clients />
      <HowImpact />
      <Different />
      <Presence />
      <Skills />
      <BuildImpact />
      <Projects />
    </>
  );
}
