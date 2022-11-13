import styles from "./styles/Experiences.module.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
  const experienceSection = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".box",
        },
      });
      tl.from(".box", {
        opacity: 0,
        duration: 1,
        y: "1em",
        scale: 0.8,
        ease: "back",
      });
      tl.from(".content", {
        opacity: 0,
        duration: 1,
        ease: "power",
        y: "1em",
        stagger: 0.3,
      });
    }, [experienceSection]);
    return () => ctx.revert();
  });

  return (
    <section ref={experienceSection}>
      <div className={`box ${styles.experienceSection}`}>
        <h2 className={`content ${styles.sectionTitle}`}>
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
    </section>
  );
}
