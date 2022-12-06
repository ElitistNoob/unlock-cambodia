// Hooks
import { useLayoutEffect, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "../components/styles/Tours.module.scss";
// Data
import tourData from "../toursData";
// // Gsap
import { gsap } from "gsap";

export default function Tours(props) {
  const ref = useRef(null);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title", {
        opacity: 0,
        duration: 1,
        y: "0.25em",
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
        <h3>{tour.title}</h3>
        <div className={styles.info}>
          <p>{tour.minimumPax}</p>
          <p>{tour.length}</p>
          <p>${tour.price}</p>
        </div>
        <p className={styles.desc}>{tour.fullDesc}</p>
        <Link className="btn primary-btn" to={`/tours/${tour.url}`}>
          View Tour
        </Link>
      </div>
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
