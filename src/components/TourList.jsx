// Hooks
import { Link } from "react-router-dom";
import { useContext } from "react";
// Context
import { Context } from "./Context/winWidth";
// Styles
import styles from './styles/TourList.module.scss'
// Data
import tourData from "../toursData";
// Assets
import arrow from "./assets/arrow-right.svg";
import arrowLight from "./assets/arrow-right-light.svg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
// import Swiper modules styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function TourList() {
  const { winWidth } = useContext(Context)
  
  const renderTourCards = tourData.map(tour => (
    <SwiperSlide key={tour.id}>
      <div className={styles.tourCard} >
        <img src={tour.images[0]} alt="yes" className={styles.tourImg} />
        <span className={styles.tourPrice}>${tour.price}</span>
        <h3 className={styles.tourTitle}>{tour.title}</h3>
        <p className={styles.tourBody}>{tour.shortDesc}</p>
        <Link className={styles.tourLink} to="/">
          View Tour
          <img src={arrow} alt="" />
        </Link>
      </div>
    </SwiperSlide>
  ));
  
  return (
    <section className={styles.tourSection}>
        <div className={styles.titleContainer}>
          <h2>
            <span className="title-highlight">More</span> tours
          </h2>
          <Link className={styles.viewMoreBtn} to="/tours">
            View all <img src={arrowLight} alt="" />
          </Link>
        </div>
        <Swiper
          speed={800}
          spaceBetween={32}
          modules={[Pagination, A11y, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={
            winWidth > 1220 ? 3 : winWidth > 620 ? 2 : 1
          }
          autoplay
        >
          <div className={styles.toursContainer}>{renderTourCards}</div>
        </Swiper>
    </section>
  );
}