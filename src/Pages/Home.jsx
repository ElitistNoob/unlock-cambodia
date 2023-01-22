// Hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../components/Hooks/useTitle";
// Components
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Review from "../components/Review";
import EasyAs from "../components/EasyAs";
import Tailored from "../components/TailoredTours";
import TourList from "../components/TourList";

export default function Home() {
  const [currentPage] = useState(useLocation().pathname);

  useEffect(() => {
    sessionStorage.setItem("lastUrl", JSON.stringify(currentPage));
  }, [currentPage]);

  useTitle("Unlock Cambodia");

  return (
    <main>
      <Hero />
      <EasyAs />
      <Review />
      <Experiences />
      <Tailored />
      <TourList />
    </main>
  );
}
