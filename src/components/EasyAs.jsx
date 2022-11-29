// import { useContext } from "react";
// Contact
// import { Context } from "./Context/winWidth";
// Styles
import styles from "./styles/EasyAs.module.scss";
// Assets
import select from "./assets/select-icon.svg";
import send from "./assets/send-icon.svg";
import location from "./assets/location-icon.svg";

export default function Review() {
  // const { winWidth } = useContext(Context);
  return (
    <section className={styles.EasySection}>
      <h2>
        <span className="title-highlight">Why</span> Unlock Cambodia?
      </h2>
      <div className={styles.container}>
        <div>
          <img src={select} alt="" />
          <h3>Inside Knowledge</h3>
          <p>
            We've lived in Cambodia for 20 years. We know the Kingdom of
            Wonders' ins and outs.
          </p>
        </div>
        <hr />
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
    </section>
  );
}
