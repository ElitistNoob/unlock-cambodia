// Hooks
import { Link } from "react-router-dom";
// Styles
import { SeperatorStyled } from "./styles/Seperator.Styled";
import styles from './styles/Footer.module.scss'
// Assets
import facebook from "./assets/Facebook-icon.svg";
import instagram from "./assets/Instagram-icon.svg";
import twitter from "./assets/Twitter-icon.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className={styles.footerSection}>
        <SeperatorStyled style={{marginBottom: "3em"}} />
        <div className={styles.container}>
          <div className={styles.col1}>
            <h4 className={styles.title}>Ask us anything</h4>
            <p className={styles.sectionSubs}>Unlock Cambodia Office</p>
            <p>
              Salakamreuk Road, Siem Reap, Cambodia <br /> 016 565 496 |
              info@UnlockCambodia.com
            </p>
          </div>
          <div className={styles.col2}>
            <h4 className={styles.title}>Subscribe Now</h4>
            <p>
              Receive our monthly newsletter to stay up-to-date on the latest
              travel offers!
            </p>
            <form className={styles.form}>
              <label>
                <input
                  type={"email"}
                  placeholder={"Enter your email"}
                />
                <span>Email</span>
                <button>Send</button>
              </label>
            </form>
          </div>
          <div className={styles.col3}>
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