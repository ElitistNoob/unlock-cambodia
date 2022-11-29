// Components
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Review from "../components/Review";
import EasyAs from "../components/EasyAs";
import Tailored from "../components/TailoredTours";
// import PopularTour from "../components/PopularTour";
import TourList from "../components/TourList";

export default function Home() {
  return (
    <main>
      <Hero />
      <EasyAs />
      <Experiences />
      <Tailored />
      <Review />
      <TourList />
    </main>
  );
}
