// Hooks
import { useRef, useLayoutEffect } from "react";
// Styles
import styles from "./styles/EasyAs.module.scss";
// Assets
import select from "./assets/select-icon.svg";
import send from "./assets/send-icon.svg";
import location from "./assets/location-icon.svg";
// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Review() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 98%",
        },
      });
      tl.from(".content", {
        opacity: 0,
        duration: 1,
        ease: "power",
        y: "1em",
        stagger: 0.1,
        delay: 0.5,
      });
      tl.from(".hr:after", {
        y: "1em",
        ease: "bounce",
      });
    }, [ref]);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref}>
      <div className={`trigger ${styles.EasySection}`}>
        <h2 className="content">
          <span className="title-highlight">Why</span> Unlock Cambodia?
        </h2>
        <div className={`content ${styles.container}`}>
          <div>
            <img src={select} alt="" />
            <h3>Inside Knowledge</h3>
            <p>
              We've lived in Cambodia for 20 years. We know the Kingdom of
              Wonders' ins and outs.
            </p>
          </div>
          <hr className="hr" />
          <div>
            <img src={send} alt="" />
            <h3>Best Guides</h3>
            <p>
              Knowledgeable and charismatic, our guides are the bests in the
              business.
            </p>
          </div>
          <hr />
          <div>
            <img src={location} alt="" />
            <h3>Pay on Location</h3>
            <p>No Payment required until the very morning of your tour.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
