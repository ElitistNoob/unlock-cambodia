// Hooks
import { useContext, useLayoutEffect, useRef } from "react";
// Context
import { Context } from "./Context/winWidth";
// Styles
import styles from "./styles/Review.module.scss";
// assets
import review1 from "../components/assets/review-photo.jpg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Navigation } from "swiper";
// import Swiper modules styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
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
          start: "top 90%",
        },
      });
      tl.to(".svgContainer", {
        display: "block",
      });
      tl.from(".title", {
        opacity: 0,
        duration: 0.5,
        y: "1em",
        ease: "power",
      });
      gsap.from(".content", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 90%",
        },
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
        delay: 0.825,
      });
    }, [reviewSection]);
    return () => ctx.revert();
  }, []);

  const { winWidth } = useContext(Context);

  // const svgImg = () => (
  //   <svg
  //     className={`svgContainer ${styles.arrowContainer}`}
  //     width="150"
  //     height="auto"
  //     viewBox="0 0 75 84"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       className={styles.arrow}
  //       d="M72.8255 2C64.6588 19.5 39.8255 56.2 5.82547 63M5.82547 63C3.82547 63.6667 0.425467 63.9 2.82547 59.5C9.49212 52.3333 22.3254 35.2 20.3254 24M5.82547 63C14.1588 65.8333 31.7254 73.6 35.3254 82"
  //       stroke="#F28E34"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //     />
  //   </svg>
  // );

  return (
    <section ref={reviewSection} className={styles.reviewSection}>
      <div className="trigger">
        {/* {winWidth > 1120 && svgImg()} */}
        <h2 className={`title ${styles.sectionTitle}`}>
          The <span className="title-highlight">proof</span> is in the pudding{" "}
        </h2>
        <Swiper
          style={{ backgroundColor: "#1b1e1f", padding: "6em 2em" }}
          speed={800}
          spaceBetween={32}
          modules={[Pagination, A11y, Autoplay, Navigation]}
          // slidesPerView={winWidth > 1220 ? 3 : winWidth > 580 ? 2 : 1}
          navigation
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className={styles.card}>
              <img src={review1} alt="person" />
              <p>
                A great experience from beginning to end. From the first contact
                to the last good bye everything was simple and easy.
              </p>
              <p className="title-highlight">Donna Reed</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <img src={review1} alt="person" />
              <p>
                The Perfect way to see Siem Reap. Our Guide and driver were
                amazing and the tour was beyond what we were expecting.
              </p>
              <p className="title-highlight">Sam Drew</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <img src={review1} alt="person" />
              <p>
                After booking a day trip, we wanted to see more and the Unlock
                Cambodia team put together a fabulous 5 day adventure.
              </p>
              <p className="title-highlight">Liam Thomas</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
