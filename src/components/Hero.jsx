// Hooks
import { Link } from "react-router-dom";
import { Context } from "./Context/winWidth";
import { useContext, useLayoutEffect, useRef } from "react";
// Styles
import styles from "./styles/Hero.module.scss";
//  Images
import img1 from "./assets/hero-grid-img1.jpg";
import img2 from "./assets/hero-grid-img2.jpg";
import img3 from "./assets/hero-grid-img3.jpg";
import img4 from "./assets/hero-grid-img4.jpg";
import abstractSquare from "./assets/abstract-square.svg";

import { gsap } from "gsap";

export default function Hero() {
  const { winWidth } = useContext(Context);

  const heroSection = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.to(".background", {
        transform: "matrix(-1, 0, 0, 1, 0, 0) scale(1)",
        opacity: 0.6,
        duration: 2,
        ease: "back",
      });
      tl.from(".imgAnim", {
        opacity: 0,
        duration: 1,
        y: "-6em",
        scale: 0.6,
        ease: "power1.ing",
        stagger: 0.2,
      });
      tl.from(".title", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });
      tl.to(".span", {
        clipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
        duration: 1,
      });
      tl.from(".content", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
        stagger: 0.3,
      });
    }, heroSection);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroSection} className={styles.heroSection}>
      <div className={styles.content}>
        <div>
          <h1 className={`title ${styles.title}`}>
            Discover <span className="span">the</span>{" "}
            <span className="span">
              real
              <svg
                id="path"
                className={styles.path}
                viewBox="0 0 316 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.0571 10.1212C77.2571 8.72125 126.457 4.82125 174.057 3.12125C221.657 1.42125 267.657 1.32124 291.057 1.62125C314.457 1.92125 330.357 -0.678738 291.057 4.62127C251.757 9.92127 149.157 20.9213 94.5571 28.1213C39.9571 35.3213 31.1571 37.6213 18.0571 40.6213C4.95714 43.6213 -16.5429 45.0213 29.0571 43.1213C74.6571 41.2213 203.157 33.0213 246.057 31.1213C288.957 29.2213 267.357 31.0213 243.557 33.6213C219.757 36.2213 155.157 40.7213 127.057 44.1213C98.9571 47.5213 99.0571 49.3213 103.057 50.6213C107.057 51.9213 124.557 51.9213 147.057 50.6213C169.557 49.3213 201.857 45.4213 215.557 44.1213"
                  stroke="#F28E34"
                  strokeWidth="6"
                />
              </svg>
            </span>{" "}
            Cambodia
          </h1>

          <p className={`content ${styles.body}`}>
            At Unlock Cambodia we have selected some of the must do day trips
            that should be on everyone’s bucket list when travelling to
            Cambodia. Our handpicked day tours are perfect for all types of
            travelers, that are looking to unlock some of Cambodia’s hidden
            secrets.
          </p>
          <Link
            to="/contact-us"
            className={`content btn primary-btn ${styles.heroBtn}`}
          >
            Get Started
          </Link>
        </div>
        <div className={styles.imgGallery}>
          <img className="imgAnim" src={img1} alt="" />
          <img className="imgAnim" src={img2} alt="" />
          <img className="imgAnim" src={img3} alt="" />
          <img className="imgAnim" src={img4} alt="" />
          <img
            className="imgAnim"
            src={winWidth > 920 ? abstractSquare : img3}
            alt=""
          />
        </div>
      </div>
      <div className={`background ${styles.backgroundImage}`}></div>
    </section>
  );
}
