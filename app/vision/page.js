import FutureGoals from "../../components/vision/FutureGoals";
import VisionHero from "../../components/vision/VisionHero";
import VisionStatement from "../../components/vision/VisionStatement";
import VisionValues from "../../components/vision/VisionValues";

export const metadata = {
  title: "Our vision",
};

export default function VisionPage() {
  return (
    <>
      <VisionHero />
      <VisionStatement />
      <VisionValues />
      <FutureGoals />
    </>
  );
}
