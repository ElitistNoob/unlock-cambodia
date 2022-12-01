// Hooks
import { useState, useEffect } from "react";
// Styles
import styles from "../components/styles/FormSubmit.module.scss";

export default function FormSubmit() {
  const [count, setCount] = useState(5);

  useEffect(() => {
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
      <h1>
        We have <span className="title-highlight">received</span> your booking!
      </h1>
      <p>
        Thank you for booking your tour with us. We look forward to seeing you
        on the morning of your tour.
      </p>
      <p>Please check your email for confirmation</p>
      <p>
        If you are not redirected in {count} seconds...{" "}
        <a href="/">click here</a>
      </p>
    </main>
  );
}
