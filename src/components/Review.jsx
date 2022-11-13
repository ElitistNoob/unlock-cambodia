// Hooks
import { useContext, useLayoutEffect, useRef } from "react";
// Context
import { Context } from "./Context/winWidth";
// Styles
import styles from "./styles/Review.module.scss";
// assets
import review1 from "../components/assets/review-photo.jpg";
import speechBubble from "./assets/speech-bubble.svg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
// import Swiper modules styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Review() {
  const reviewSection = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 80%",
        },
      });

      tl.to(".svgContainer", {
        display: "block",
        stagger: 0.1,
      });

      tl.from(".card", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });

      gsap.from(".title", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 80%",
        },
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });
    }, [reviewSection]);
    return () => ctx.revert();
  });

  const { winWidth } = useContext(Context);

  const svgImg = () => (
    <svg
      className={`svgContainer ${styles.arrowContainer}`}
      width="150"
      height="auto"
      viewBox="0 0 75 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.arrow}
        d="M72.8255 2C64.6588 19.5 39.8255 56.2 5.82547 63M5.82547 63C3.82547 63.6667 0.425467 63.9 2.82547 59.5C9.49212 52.3333 22.3254 35.2 20.3254 24M5.82547 63C14.1588 65.8333 31.7254 73.6 35.3254 82"
        stroke="#F28E34"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <section ref={reviewSection}>
      <div className={`trigger ${styles.reviewSection}`}>
        {winWidth > 1120 && svgImg()}
        <h2 className={`title ${styles.sectionTitle}`}>
          The <span className="title-highlight">proof</span> is in the pudding{" "}
          <img src={speechBubble} alt="" />
        </h2>
        <Swiper
          speed={800}
          spaceBetween={32}
          modules={[Pagination, A11y, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={winWidth > 1220 ? 3 : winWidth > 580 ? 2 : 1}
          // autoplay
        >
          <SwiperSlide className={`card ${styles.container}`}>
            <h2 className={styles.reviewTitle}>A wonderful tour</h2>
            <p className={styles.reviewBody}>
              After our day trip, we wanted to see more and they put together a
              fabulous 5 day adventure
            </p>
            <div className={styles.reviewUser}>
              <img className={styles.reviewPic} src={review1} alt="person" />
              <p className={styles.reviewName}>Liam Thomas</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`card ${styles.container}`}>
            <h2 className={styles.reviewTitle}>A wonderful tour</h2>
            <p className={styles.reviewBody}>
              After our day trip, we wanted to see more and they put together a
              fabulous 5 day adventure
            </p>
            <div className={styles.reviewUser}>
              <img className={styles.reviewPic} src={review1} alt="person" />
              <p className={styles.reviewName}>Liam Thomas</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`card ${styles.container}`}>
            <h2 className={styles.reviewTitle}>A wonderful tour</h2>
            <p className={styles.reviewBody}>
              After our day trip, we wanted to see more and they put together a
              fabulous 5 day adventure
            </p>
            <div className={styles.reviewUser}>
              <img className={styles.reviewPic} src={review1} alt="person" />
              <p className={styles.reviewName}>Liam Thomas</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`card ${styles.container}`}>
            <h2 className={styles.reviewTitle}>A wonderful tour</h2>
            <p className={styles.reviewBody}>
              After our day trip, we wanted to see more and they put together a
              fabulous 5 day adventure
            </p>
            <div className={styles.reviewUser}>
              <img className={styles.reviewPic} src={review1} alt="person" />
              <p className={styles.reviewName}>Liam Thomas</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`card ${styles.container}`}>
            <h2 className={styles.reviewTitle}>A wonderful tour</h2>
            <p className={styles.reviewBody}>
              After our day trip, we wanted to see more and they put together a
              fabulous 5 day adventure
            </p>
            <div className={styles.reviewUser}>
              <img className={styles.reviewPic} src={review1} alt="person" />
              <p className={styles.reviewName}>Liam Thomas</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
