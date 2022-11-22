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
        It's as <span className="title-highlight">Easy</span> as 1 - 2 - 3
      </h2>
      <div className={styles.container}>
        <div>
          <img src={select} alt="" />
          <h3>Select a Tour</h3>
          <p>Browse through our tours and select one that interest you.</p>
        </div>
        <hr />
        <div>
          <img src={send} alt="" />
          <h3>Send us your Details</h3>
          <p>
            Let us know the date you want to go and where you will be staying.
          </p>
        </div>
        <hr />
        <div>
          <img src={location} alt="" />
          <h3>Pay on Location</h3>
          <p>Book now and pay nothing until the very morning of your tour.</p>
        </div>
      </div>
    </section>
  );
}
