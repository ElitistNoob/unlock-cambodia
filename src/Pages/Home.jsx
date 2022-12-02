// Components
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Review from "../components/Review";
import EasyAs from "../components/EasyAs";
import Tailored from "../components/TailoredTours";
import TourList from "../components/TourList";

export default function Home() {
  return (
    <main>
      <Hero />
      <EasyAs />
      <Review />
      <Experiences />
      <Tailored />
      <div style={{ padding: "0 1em" }}>
        <TourList />
      </div>
    </main>
  );
}
