// Hooks
import { useParams } from "react-router-dom";
import { useState, useLayoutEffect, useRef } from "react";
// Data
import toursData from "../toursData";
// styles
import styles from "../components/styles/TourDetails.module.scss";
// components
import BookingForm from "../components/BookingForm";
import TourList from "../components/TourList";
// Gsap
import { gsap } from "gsap";

export default function TourDetails(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tourTitle } = useParams();
  const ref = useRef(null);
  const thisTour = toursData.find(tour => tour.title === tourTitle);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".background", {
        transform: "matrix(-1, 0, 0, 1, 0, 0) scale(1)",
        opacity: 0.6,
        duration: 2,
        ease: "back",
      });
    }, [ref]);
    return () => ctx.revert();
  }, []);

  const inclusions = () => {
    const { inclusion } = thisTour;
    return inclusion.map(item => <p key={inclusion.indexOf(item)}>{item}</p>);
  };
  const exclusions = () => {
    const { exclusion } = thisTour;
    return exclusion.map(item => <p key={exclusion.indexOf(item)}>{item}</p>);
  };

  const highlights = thisTour.highlights
    .map(highlight => {
      return (
        <div key={thisTour.highlights.indexOf(highlight)}>
          <img src={highlight.img} alt="" />
          <p>{highlight.title}</p>
          {/* <p>{highlight.description}</p> */}
        </div>
      );
    })
    .splice(0, 4);

  const clickHandler = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const closeModal = event => {
    event.preventDefault();
    return (event.target.id === "formModal") & isModalOpen
      ? setIsModalOpen(false)
      : "";
  };

  if (isModalOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <main ref={ref} className={styles.tour} onClick={closeModal}>
      <div className={styles.titleContainer}>
        <h1>{thisTour.title}</h1>
        <p>{thisTour.tagline}</p>
      </div>
      <section className={styles.tourInfo}>
        <div className={styles.col1}>
          <div className={styles.infoContainer}>
            <p>{thisTour.length}</p>
            <p>{thisTour.minimumPax} Minimum</p>
            <p>{thisTour.schedule}</p>
            <button onClick={clickHandler}>Book Now</button>
            <p>{thisTour.fullDesc}</p>
          </div>
          <div className={styles.inclusions}>
            <h3>Inclusion</h3>
            <div>{inclusions()}</div>
            <h3>Exclusion</h3>
            <div>{exclusions()}</div>
          </div>
        </div>
        {isModalOpen && (
          <div id="formModal" className={styles.formModal}>
            <BookingForm thisTour={thisTour} />
          </div>
        )}
      </section>
      <section className={styles.tourHighlights}>
        <h2>
          Tour <span className="title-highlight">Highlights</span>
        </h2>
        <div className={styles.container}>{highlights}</div>
      </section>
      <TourList thisTour={thisTour.title} />
      <div className={`background ${styles.tourBgImage}`}>
        <img src={thisTour.images[0]} alt="" />
      </div>
    </main>
  );
}
