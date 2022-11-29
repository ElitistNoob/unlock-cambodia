// Hooks
import { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "./styles/Footer.module.scss";
// Assets
import logo from "./assets/logo-light.png";
import facebook from "./assets/Facebook-icon.svg";
import instagram from "./assets/Instagram-icon.svg";
import twitter from "./assets/Twitter-icon.svg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  return (
    <>
      <section className={styles.footer}>
        <div className={styles.formContainer}>
          <div>
            <h2>
              Subscribe to Our{" "}
              <span className="title-highlight">Newsletter</span>
            </h2>
            <p>
              Get the Latest News from Us. Stay up-to-date on Cambodia’s exiting
              development and be the first to know about travel regulation and
              the such and such.
            </p>
          </div>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                type={"email"}
                placeholder={"Enter your email"}
              />
              <button className="btn primary-btn">Subscribe</button>
            </div>
          </form>
        </div>
        <div className={styles.info}>
          <div className={styles.col1}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>

            <p>
              Salakamreuk Road, Siem Reap, Cambodia <br /> 016 565 496 |
              info@UnlockCambodia.com
            </p>
            <div className={styles.media}>
              <Link className="social-media__icons" to="/">
                <img src={facebook} alt="" />
              </Link>
              <Link className="social-media__icons" to="/">
                <img src={instagram} alt="" />
              </Link>
              <Link className="social-media__icons instagram" to="/">
                <img src={twitter} alt="" />
              </Link>
            </div>
          </div>
          <div className={styles.col2}>
            <Link className="footer-nav__link" to="/Unlock-Cambodia">
              Home
            </Link>
            <Link className="footer-nav__link" to="/tours">
              Tours
            </Link>
            <Link className="footer-nav__link" to="/about-us">
              About Us
            </Link>
            <Link className="footer-nav__link" to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.copyright}>
        <div className={styles.container2}>
          <p className={styles.copyrightText}>
            Copyright © {year} Unlock Cambodia
          </p>
        </div>
      </div>
    </>
  );
}
