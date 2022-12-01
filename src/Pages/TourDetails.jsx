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
import { useEffect } from "react";

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
      gsap.from(".content", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });
      gsap.from(".highlights", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 90%",
        },
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
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
        </div>
      );
    })
    .splice(0, 4);

  const clickHandler = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main ref={ref} className={styles.tour}>
      <div className={`content ${styles.titleContainer}`}>
        <h1>{thisTour.title}</h1>
        <p>{thisTour.tagline}</p>
      </div>
      <section className={styles.tourInfo}>
        <div className={styles.col1}>
          <div className={`content ${styles.infoContainer}`}>
            <p>{thisTour.length}</p>
            <p>{thisTour.minimumPax} Minimum</p>
            <p>{thisTour.schedule}</p>
            <button className="btn primary-btn" onClick={clickHandler}>
              Book Now
            </button>
            <p>{thisTour.fullDesc}</p>
          </div>
          <div className={`content ${styles.inclusions}`}>
            <h3>Inclusion</h3>
            <div>{inclusions()}</div>
            <h3>Exclusion</h3>
            <div>{exclusions()}</div>
          </div>
        </div>
        {isModalOpen && (
          <BookingForm thisTour={thisTour} closeModal={closeModal} />
        )}
      </section>
      <section className={`trigger highlights ${styles.tourHighlights}`}>
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
