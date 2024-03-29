// Hooks
import { useState, useEffect } from "react";
// Styles
import styles from "../components/styles/FormSubmit.module.scss";

export default function FormSubmit() {
  const [count, setCount] = useState(10);
  const [referrer] = useState(JSON.parse(sessionStorage.getItem("lastUrl")));

  useEffect(() => {
    sessionStorage.clear();
    const intervalTimer = setInterval(() => {
      setCount(prevCount => (count > 0 ? prevCount - 1 : 0));
    }, 1000);
    return () => clearTimeout(intervalTimer);
  }, [count]);

  const redirect = () => {
    window.location.replace("/");
  };

  setTimeout(() => {
    redirect();
  }, 10000);

  return (
    <main className={styles.submitContainer}>
      {referrer === "/" ? (
        <>
          <h1>
            Thank you for <span className="title-highlight">subscribing</span>{" "}
            to our newsletter!
          </h1>
          <p>
            Look forward to receiving Cambodia related news and travel tips
            every month!
          </p>
          <p>Please keep an eye out for our email</p>
          <p>
            If you are not redirected in {count} seconds...{" "}
            <a href="/">click here</a>
          </p>
        </>
      ) : referrer === "/contact-us" ? (
        <>
          <h1>
            We have <span className="title-highlight">received</span> your
            message!
          </h1>
          <p>
            Thank you for getting in touch with us. We will get back to shortly.
          </p>
          <p>Please keep an eye out for our email</p>
          <p>
            If you are not redirected in {count} seconds...{" "}
            <a href="/">click here</a>
          </p>
        </>
      ) : (
        <>
          <h1>
            We have <span className="title-highlight">received</span> your
            booking!
          </h1>
          <p>
            Thank you for booking your tour with us. We look forward to seeing
            you on the morning of your tour.
          </p>
          <p>Please check your email for confirmation</p>
          <p>
            If you are not redirected in {count} seconds...{" "}
            <a href="/">click here</a>
          </p>
        </>
      )}
    </main>
  );
}
