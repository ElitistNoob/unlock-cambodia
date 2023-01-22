// Hooks
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../components/Hooks/useTitle";
// GSAP
import { gsap } from "gsap";

import styles from "../components/styles/ContactForm.module.scss";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const [currentPage] = useState(useLocation().pathname);

  useEffect(() => {
    sessionStorage.setItem("lastUrl", JSON.stringify(currentPage));
  }, [currentPage]);

  useTitle("Contact Us | Unlock Cambodia");

  const ref = useRef(null);

  const changeHandler = event => {
    event.preventDefault();
    const { value, name } = event.target;

    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".background", {
        transform: "matrix(-1, 0, 0, 1, 0, 0) scale(1)",
        opacity: 0.6,
        duration: 2,
        ease: "back",
      });
      gsap.to(".span", {
        clipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
        duration: 1,
      });
      gsap.from(".content", {
        opacity: 0,
        duration: 1,
        y: "1em",
        ease: "power",
      });
    }, [ref]);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref}>
      <section className={`content ${styles.container}`}>
        <h1>
          Contact <span className="span">Us</span>
        </h1>
        <div className={styles.flexContainer}>
          <div className={styles.col1}>
            <form
              action="https://formsubmit.co/a7f728ae1baaf38e76a31e0014183edb"
              method="POST"
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
              {/* Redirect to custom page */}
              <input
                type="hidden"
                name="_next"
                value="https://unlockcambodia.com/form-submit"
              ></input>
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
              {/* formsubmit.co */}
              {/* Hidden field that if filled by bot, form will be ignored */}
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
              ></input>
              {/* Custom Subject Field */}
              <input
                type="hidden"
                name="_subject"
                value={`New Message from ${formData.firstName}`}
              ></input>
              {/* Sends an automated response to sender*/}
              <input
                type="hidden"
                name="_autoresponse"
                value={`Hi ${formData.firstName}, Thank you for getting in touch with us, we will get back you shortly.`}
              ></input>
              <input type="hidden" name="_template" value="table"></input>
              {/* formsubmit.co */}
            </form>
          </div>
          <div className={styles.col2}>
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
