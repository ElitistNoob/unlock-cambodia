//  Hooks
import { useLayoutEffect, useRef } from "react";
// Styles
import styles from "../components/styles/AboutUs.module.scss";
// Assets
import teamPhoto from "../components/assets/unlockCambodia-team.jpg";
// Gsap
import { gsap } from "gsap";

export default function AboutUs() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".content", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });
      gsap.to(".span", {
        clipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
        duration: 1,
      });
    }, [ref]);
    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.main} ref={ref}>
      <div className={`content ${styles.aboutUs}`}>
        <h1>
          Our <span className="span title-highlight">Story</span>
        </h1>
        <img className="content" src={teamPhoto} alt="Unlock Cambodia Team" />
        <div>
          <p>
            Unlock Cambodia has been arranging trips, tours and adventures since
            2010. The starting point in all of this was when English and Czech
            couple Peter and Eva decided to see what hidden gems Cambodia had to
            offer; after the average tourist at the time spend only 3 days in
            Cambodia. At the time seeing Angkor what was pretty much the only
            site that tourists wanted to see before moving on. But there had to
            be more to Cambodia that just the temples right!
          </p>
          <p>
            This is when we teamed up with local Cambodian Synak (Brian) Ork;
            with the aim of Unlocking Cambodia for everyone that wants to
            discover more about the country’s secrets and hidden gems.
          </p>
        </div>
      </div>
    </main>
  );
}
