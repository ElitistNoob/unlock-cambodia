// Components
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Review from "../components/Review";
import PopularTour from "../components/PopularTour";
import TourList from "../components/TourList";

export default function Home() {
  return (
    <main>
      <Hero />
      <Review />
      <Experiences />
      <PopularTour />
      <TourList />
    </main>
  );
}
