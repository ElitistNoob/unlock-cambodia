import styles from "./styles/TailoredTours.module.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Assets
import img1 from "./assets/tailored-tour-img1.jpg";
import img2 from "./assets/Cambodia-Sen-Monorom.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
  const experienceSection = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 90%",
        },
      });
      gsap.from(".trigger", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 90%",
        },
        opacity: 0,
        duration: 1,
        y: "1em",
        scale: 0.8,
        ease: "back",
      });
      gsap.from(".content", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 90%",
        },
        opacity: 0,
        duration: 1,
        ease: "power",
        y: "1em",
        stagger: 0.1,
        delay: 0.5,
      });
      tl.from(".image", {
        opacity: 0,
        marginTop: "-3em",
        stagger: 0.3,
      });
      tl.to(".svg", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        opacity: 1,
        duration: 1,
        easer: "power",
      });
    }, [experienceSection]);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={experienceSection} className={styles.section}>
      <div className={`trigger ${styles.col2}`}>
        <img
          className="image"
          src={img2}
          alt="Men swimming in jungle waterfall"
        />
        <img
          className="image"
          src={img1}
          alt="Man riding motorbike in front of independence monument"
        />
      </div>
      <div className={`trigger ${styles.col1}`}>
        <h2 className="content">
          <span className="title-highlight">Tailored</span> Tours / Holidays
        </h2>
        <p className={`content ${styles.sectionBody}`}>
          Cambodia has so much more to offer the intrepid tourist; so if you are
          looking to Unlock more of Cambodia than just our day trips. Then
          please get in touch with one of our travel specialists that will be
          able to put together a tailored itinerary just for you.
        </p>
      </div>
    </section>
  );
}
