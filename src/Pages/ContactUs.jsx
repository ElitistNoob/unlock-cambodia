// Hooks
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import styles from "../components/styles/ContactForm.module.scss";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const ref = useRef(null);

  const changeHandler = event => {
    event.preventDefault();
    const { value, name } = event.target;

    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.to(".background", {
        transform: "matrix(-1, 0, 0, 1, 0, 0) scale(1)",
        opacity: 0.6,
        duration: 2,
        ease: "back",
      });
      gsap.to(".span", {
        clipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
        duration: 1,
        delay: 1,
      });
      gsap.from(".form", {
        opacity: 0,
        duration: 1,
        ease: "power",
        delay: 1,
      });
      tl.from(".title", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });
      tl.from(".form > *", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });
      gsap.from(".content > *", {
        opacity: 0,
        duration: 1,
        y: "1em",
        delay: 1,
        ease: "power",
      });
    }, [ref]);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref}>
      <section className={styles.container}>
        <h1 className="title">
          Contact <span className="span">Us</span>
        </h1>
        <div className={styles.flexContainer}>
          <div className={styles.col1}>
            <form
              className="form"
              action="mailto:sales@seeasiadifferently.com"
              // method="POST"
              // encType="multipart/form-data"
            >
              <div>
                <label htmlFor="firstName">First</label>
                <input
                  onChange={changeHandler}
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  type="text"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last</label>
                <input
                  onChange={changeHandler}
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  type="text"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={changeHandler}
                  id="email"
                  name="email"
                  value={formData.email}
                  type="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="comment">Comment</label>
                <textarea
                  onChange={changeHandler}
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button className="btn primary-btn">Submit</button>
            </form>
          </div>
          <div className={`content {styles.col2}`}>
            <h3>Unlock Cambodia's Office</h3>
            <p>Salakamreuk Road, Siem Reap, Cambodia</p>
            <h3>Direct Contact</h3>
            <p>016 565 496</p>
            <p>info@UnlockCambodia.com</p>
            <h3>Hours</h3>
            <p>8am to 5pm</p>
            <p>Monday to Friday</p>
          </div>
        </div>
      </section>
      <div className={`background ${styles.backgroundImage}`}></div>
    </main>
  );
}
