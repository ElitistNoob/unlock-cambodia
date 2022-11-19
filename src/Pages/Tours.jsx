// Hooks
// import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "../components/styles/Tours.module.scss";
// Data
import tourData from "../toursData";
// // Gsap
// import { gsap } from "gsap";

export default function Tours(props) {
  //   const ref = useRef(null);
  //   useLayoutEffect(() => {
  //     const ctx = gsap.context(() => {
  //       gsap.to(".background", {
  //         transform: "matrix(-1, 0, 0, 1, 0, 0) scale(1)",
  //         opacity: 0.6,
  //         duration: 2,
  //         ease: "back",
  //       });
  //     }, [ref]);
  //     return () => ctx.revert();
  //   }, []);
  const renderTourCards = tourData.map(tour => (
    <div key={tour.id} className={styles.tourCard}>
      <img className={`card-${tour.id}`} src={tour.images[0]} alt="yes" />
      <div className={`card-${tour.id}`}>
        <p>{tour.minimumPax}</p>
        <p>{tour.length}</p>
        <p>${tour.price}</p>
      </div>
      <h3 className={`card-${tour.id}`}>{tour.title}</h3>
      <p className={`card-${tour.id}`}>{tour.fullDesc}</p>
      <Link
        className={`card-${tour.id} btn primary-btn`}
        to={`/tours/${tour.title}`}
      >
        View Tour
      </Link>
    </div>
  ));
  return (
    <section>
      <div className={styles.tourSection}>
        <h1>
          All <span>Tours</span>
        </h1>
        <div className={styles.toursContainer}>{renderTourCards}</div>
      </div>
      <div className={`background ${styles.backgroundImage}`}></div>
    </section>
  );
}
