// Hooks
import { Link } from "react-router-dom";
// Styles
import styles from "../components/styles/TourList.module.scss";
// Data
import tourData from "../toursData";
// Assets
import arrow from "../components/assets/arrow-right.svg";

export default function Tours(props) {
  const renderTourCards = tourData.map(tour => (
    <div className={styles.tourCard} key={tour.id}>
      <img src={tour.images[0]} alt="yes" className={styles.tourImg} />
      <span className={styles.tourPrice}>${tour.price}</span>
      <h3 className={styles.tourTitle}>{tour.title}</h3>
      <p className={styles.tourBody}>{tour.shortDesc}</p>
      <Link className={styles.tourLink} to={`/tours/${tour.title}`}>
        View Tour
        <img src={arrow} alt="" />
      </Link>
    </div>
  ));
  return (
    <section className={styles.tourSection}>
      <h1>Tours</h1>
      {renderTourCards}
    </section>
  );
}
