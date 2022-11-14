// Hooks
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
// Styles
import styles from "./styles/PopularTour.module.scss";
// Assets
import img1 from "./assets/angkor-tour-1.jpg";
import img2 from "./assets/angkor-tour-2.jpg";
import img3 from "./assets/angkor-tour-3.jpg";
// Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PopularTour() {
  const section = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".imgAnim", {
        scrollTrigger: {
          trigger: ".popularTour",
          // start: "top 80%",
        },
        opacity: 0,
        duration: 1,
        // y: "-6em",
        scale: 0.9,
        ease: "power1.ing",
        stagger: 0.2,
      });
      gsap.from(".content", {
        scrollTrigger: {
          trigger: ".popularTour",
          start: "top 80%",
        },
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
        stagger: 0.1,
      });
    }, [section]);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section}>
      <div className={`popularTour ${styles.tourSection}`}>
        <h2 className={styles.sectionTitle}>
          Most <span className="title-highlight">Popular</span> Tour
        </h2>
        <div className={styles.imgGrid}>
          <img
            className={`imgAnim ${styles.img}`}
            src={img1}
            alt="amazing"
          ></img>
          <img
            className={`imgAnim ${styles.img}`}
            src={img2}
            alt="amazing"
          ></img>
          <img
            className={`imgAnim ${styles.img}`}
            src={img3}
            alt="amazing"
          ></img>
        </div>
        <div className={styles.tourContainer}>
          <h3 className={`content ${styles.tourTitle}`}>Angkor Temple Tour</h3>
          <p className={`content ${styles.tourBody}`}>
            At Unlock Cambodia we have selected some of the must do day trips
            that should be on everyone’s bucket list when travelling to
            Cambodia. Our handpicked day tours are perfect for all types of
            travelers, that are looking to unlock some of Cambodia’s hidden
            secrets.
          </p>
          <div className={`content ${styles.tourInfo}`}>
            <p className={`content ${styles.tourLength}`}>
              <strong>Length</strong>: 3 hours
            </p>
            <span className={`content ${styles.seperator}`}>|</span>
            <p className={`content ${styles.tourPrice}`}>
              <strong>Price</strong>: $20
            </p>
            <Link to="/contact-us" className="content btn primary-btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
