// Hooks
import { Link } from "react-router-dom";
// import { Context } from "./Context/winWidth";
import { useLayoutEffect, useRef } from "react";
// Styles
import styles from "./styles/Hero.module.scss";

import { gsap } from "gsap";

export default function Hero() {
  // const { winWidth } = useContext(Context);

  const heroSection = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".background", {
        transform: "matrix(-1, 0, 0, 1, 0, 0) scale(1)",
        opacity: 0.6,
        duration: 2,
        ease: "back",
      });
      gsap.to(".span", {
        clipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
        duration: 1,
        delay: 1,
      });
      gsap.from(".content > *:not(div)", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
        stagger: 0.4,
      });
    }, [heroSection]);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroSection} className={styles.heroSection}>
      <div className={`content ${styles.content}`}>
        <h1>
          Discover <span className="span">the</span>{" "}
          <span className="span">
            real
            <svg
              viewBox="0 0 259 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46 2.5C97 2.49984 325.881 7.55601 235.381 7.55587C150.365 7.55575 41.0815 14.0503 9.91086 15.3686M9.91086 15.3686C7.9001 15.4536 6.2144 15.5171 4.88123 15.556C1.05145 15.6675 3.23707 15.5373 9.91086 15.3686ZM9.91086 15.3686C41.5743 14.568 174.265 12.8989 244.881 32.0559"
                stroke="#F28E34"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Cambodia
        </h1>
        <p>
          At Unlock Cambodia we have selected some of the must do day trips that
          should be on everyone’s bucket list when travelling to Cambodia. Our
          handpicked day tours are perfect for all types of travelers, that are
          looking to unlock some of Cambodia’s hidden secrets.
        </p>
        <div className="content">
          <Link to="/tours" className="btn primary-btn">
            Find a Tour
          </Link>
          <Link to="/contact-us" className="btn">
            Need Help?
          </Link>
        </div>
      </div>
      <div className={`background ${styles.backgroundImage}`}></div>
    </section>
  );
}
