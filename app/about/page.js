import AboutHero from "../../components/about/AboutHero";
import Expertise from "../../components/about/Expertise";
import OurStory from "../../components/about/OurStory";

export const metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Expertise />
    </>
  );
}
