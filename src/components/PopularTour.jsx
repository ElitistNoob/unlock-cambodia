// Hooks
import { Link } from "react-router-dom";
// Styles
import styles from './styles/PopularTour.module.scss'
// Assets
import img1 from "./assets/angkor-tour-1.jpg";
import img2 from "./assets/angkor-tour-2.jpg";
import img3 from "./assets/angkor-tour-3.jpg";

export default function PopularTour() {
  return (
    <section className={styles.tourSection}>
        <h2 className={styles.sectionTitle}>
          Most <span className="title-highlight">Popular</span> Tour
        </h2>
        <div className={styles.imgGrid}>
          <img className={styles.img} src={img1} alt="amazing"></img>
          <img className={styles.img} src={img2} alt="amazing"></img>
          <img className={styles.img} src={img3} alt="amazing"></img>
        </div>
        <div className={styles.tourContainer}>
          <h3 className={styles.tourTitle}>Angkor Temple Tour</h3>
          <p className={styles.tourBody}>
            At Unlock Cambodia we have selected some of the must do day trips
            that should be on everyone’s bucket list when travelling to
            Cambodia. Our handpicked day tours are perfect for all types of
            travelers, that are looking to unlock some of Cambodia’s hidden
            secrets.
          </p>
          <div className={styles.tourInfo}>
            <p className={styles.tourLength}>
              <strong>Length</strong>: 3 hours
            </p>
            <span className={styles.seperator}>|</span>
            <p className={styles.tourPrice}>
              <strong>Price</strong>: $20
            </p>
            <Link to="/contact-us" className="btn primary-btn">
              Book Now
            </Link>
          </div>
        </div>
    </section>
  );
}