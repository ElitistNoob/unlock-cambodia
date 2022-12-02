// Hooks
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "../components/styles/Tours.module.scss";
// Data
import tourData from "../toursData";
// // Gsap
import { gsap } from "gsap";

export default function Tours(props) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });
      gsap.to(".span", {
        clipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
        duration: 1,
      });
      tourData.forEach(tour => {
        return gsap.from(`.card-${tour.id}`, {
          opacity: 0,
          duration: 1,
          y: "1em",
          ease: "power",
          stagger: 0.2,
        });
      });
    }, [ref]);
    return () => ctx.revert();
  }, []);

  const renderTourCards = tourData.map(tour => (
    <div key={tour.id} className={`card-${tour.id} ${styles.tourCard}`}>
      <img src={tour.featured} alt={tour.featuredAlt} />
      <div>
        <p>{tour.minimumPax}</p>
        <p>{tour.length}</p>
        <p>${tour.price}</p>
      </div>
      <h3>{tour.title}</h3>
      <p>{tour.fullDesc}</p>
      <Link className="btn primary-btn" to={`/tours/${tour.title}`}>
        View Tour
      </Link>
    </div>
  ));
  return (
    <section ref={ref}>
      <div className={styles.tourSection}>
        <h1 className="title">
          All <span className="span">Tours</span>
        </h1>
        <div className={styles.toursContainer}>{renderTourCards}</div>
      </div>
      <div className={`background ${styles.backgroundImage}`}></div>
    </section>
  );
}
