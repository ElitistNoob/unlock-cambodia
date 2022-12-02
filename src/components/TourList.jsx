// Hooks
import { Link } from "react-router-dom";
import { useContext, useLayoutEffect, useRef } from "react";
// Context
import { Context } from "./Context/winWidth";
// Styles
import styles from "./styles/TourList.module.scss";
// Data
import tourData from "../toursData";
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
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TourList({ thisTour }) {
  const { winWidth } = useContext(Context);

  const section = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
      tourData.forEach(tour => {
        return gsap.from(`.card-${tour.id}`, {
          scrollTrigger: {
            trigger: ".trigger",
            start: "top 80%",
          },
          opacity: 0,
          duration: 1,
          y: "1em",
          ease: "power",
          stagger: 0.2,
        });
      });
    }, [section]);
    return () => ctx.revert();
  }, []);

  const filteredData = tourData.filter(tour => tour.title !== thisTour);

  const renderTourCards = filteredData.map(tour => {
    return (
      <SwiperSlide key={tour.id}>
        <div className={`card-${tour.id} ${styles.tourCard}`}>
          <img src={tour.featured} alt={tour.featuredAlt} />
          <div>
            <p>{tour.minimumPax}</p>
            <p>{tour.length}</p>
            <p>${tour.price}</p>
          </div>
          <h3>{tour.title}</h3>
          <p>{tour.fullDesc}</p>
          <Link className="btn primary-btn" to={`/tours/${tour.url}`}>
            View Tour
          </Link>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section ref={section} id="tourSelection" className={styles.tourSection}>
      <div className={`trigger ${styles.titleContainer}`}>
        <h2 className="title">
          <span className="title-highlight">Unlock</span> Cambodia tours
        </h2>
        <Link className="title btn primary-btn" to="/tours">
          View all tours
        </Link>
      </div>
      <Swiper
        speed={800}
        spaceBetween={32}
        modules={[Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={winWidth > 1220 ? 3 : winWidth > 620 ? 2 : 1}
      >
        <div className={styles.toursContainer}>{renderTourCards}</div>
      </Swiper>
    </section>
  );
}
