// Hooks
import { useParams } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
// Data
import toursData from "../toursData";
// styles
import styles from "../components/styles/TourDetails.module.scss";
// components
import BookingForm from "../components/BookingForm";
// Gsap
import { gsap } from "gsap";

export default function TourDetails(props) {
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

  return (
    <main ref={ref} className={styles.tour}>
      <div className={styles.titleContainer}>
        <h1>{thisTour.title}</h1>
        <p>{thisTour.tagline}</p>
      </div>
      <section>
        <div className={styles.col1}>
          <div className={styles.infoContainer}>
            <p>{thisTour.length}</p>
            <p>{thisTour.minimumPax} Minimum</p>
            <p>{thisTour.schedule}</p>
            <p>{thisTour.fullDesc}</p>
          </div>
          <div className={styles.inclusions}>
            <h3>Inclusion</h3>
            <div>{inclusions()}</div>
            <h3>Exclusion</h3>
            <div>{exclusions()}</div>
          </div>
        </div>
        <BookingForm thisTour={thisTour} />
      </section>
      <div className={`background ${styles.tourBgImage}`}>
        <img src={thisTour.images[0]} alt="" />
      </div>
    </main>
  );
}
