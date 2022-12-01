import styles from "./styles/Experiences.module.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Assets
import img1 from "./assets/solo-group-experience.jpg";
import img2 from "./assets/grouptype-img2.jpg";
import arrowTop from "./assets/curved-drawn-arrow.svg";
import arrowDown from "./assets/curved-drawn-arrow.svg";

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
          start: "top 98%",
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
      <div className={`trigger ${styles.col1}`}>
        <h2 className="content">
          Choose between a group or private{" "}
          <span className="title-highlight">Experience</span>
        </h2>
        <p className={`content ${styles.sectionBody}`}>
          Be more social and meet other people as you travel. Also traveling
          this way also helps to keep the costs down to a minimum. Alternatively
          choose a private experience that you can enjoy with a special loved
          one, friend(s) or family.{" "}
        </p>
      </div>
      <div className={`trigger ${styles.col2}`}>
        <img className="image" src={img1} alt="Cambodia joined group tour" />
        <img className="image" src={img2} alt="Cambodia private tour" />
        <img className="svg" src={arrowTop} alt="" />
        <img className="svg" src={arrowDown} alt="" />
      </div>
    </section>
  );
}
