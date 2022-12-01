// Hooks
import { useLayoutEffect, useRef } from "react";
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
          start: "top 98%",
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

  return (
    <section ref={reviewSection} className={styles.reviewSection}>
      <div className="trigger">
        <h2 className={`title ${styles.sectionTitle}`}>
          The <span className="title-highlight">proof</span> is in the pudding{" "}
        </h2>
        <Swiper
          className="content"
          style={{ backgroundColor: "#1b1e1f", padding: "6em 2em" }}
          speed={800}
          spaceBetween={32}
          modules={[Pagination, A11y, Autoplay, Navigation]}
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
