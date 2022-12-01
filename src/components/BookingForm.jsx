import { useState, useEffect } from "react";
import styles from "./styles/bookingForm.module.scss";

export default function BookingForm({ thisTour, closeModal }) {
  const [tourForm, setTourForm] = useState({
    tour: `${thisTour.title}`,
    pax: 2,
    first: "",
    last: "",
    email: "",
    date: "",
    hotel: "",
    price: "",
  });

  const minDate = new Date().toLocaleDateString("en-ca");

  useEffect(() => {
    setTourForm(prevData => ({
      ...prevData,
      price: tourForm.pax * thisTour.price,
    }));
  }, [tourForm.pax]);

  const onChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    setTourForm(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div id="formModal" className={styles.formModal}>
      <form
        className={styles.bookingForm}
        action="https://formsubmit.co/6923cca6c2285b24310ce0a6f63bad0a"
        method="POST"
      >
        <button className={styles.clodeModalBtn} onClick={closeModal}></button>
        <p>
          <span>From</span>${thisTour.price}
          <span> Per Person</span>
        </p>
        {/* Hidden values */}
        <input type="hidden" name="tour" value={tourForm.tour} />
        {/* Hidden values */}
        <div>
          <label htmlFor="pax">No. of Pax</label>
          <input
            onChange={onChange}
            id="pax"
            name="pax"
            value={tourForm.pax}
            type="number"
            min="2"
            max="100"
            required
          />
        </div>
        <div>
          <label htmlFor="first">First</label>
          <input
            onChange={onChange}
            id="first"
            name="first"
            value={tourForm.first}
            type="text"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label htmlFor="last">Last</label>
          <input
            onChange={onChange}
            id="last"
            name="last"
            value={tourForm.last}
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={onChange}
            id="email"
            name="email"
            value={tourForm.email}
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            onChange={onChange}
            id="date"
            name="date"
            value={tourForm.date}
            min={minDate}
            type="date"
            required
          />
        </div>
        <div>
          <label htmlFor="hotel">Hotel</label>
          <input
            onChange={onChange}
            id="hotel"
            name="hotel"
            value={tourForm.hotel}
            type="hotel"
            placeholder="Where will you be staying?"
            required
          />
        </div>
        {/* formsubmit.co */}
        {/* Hidden field that if filled by bot, form will be ignored */}
        <input type="text" name="_honey" style={{ display: "none" }}></input>
        {/* Custom Subject Field */}
        <input
          type="hidden"
          name="_subject"
          value={`New submission for ${tourForm.tour}`}
        ></input>
        {/* Redirect to custom page */}
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/form-submit"
        ></input>
        {/* Sends an automated response to sender*/}
        <input
          type="hidden"
          name="_autoresponse"
          value={`Hi ${tourForm.first}, Thank you for your ${tourForm.tour} submission. We look forward to seeing you on the ${tourForm.date}. We will be picking you up from the ${tourForm.hotel} 30 minutes before the start of your tour.`}
        ></input>
        <input type="hidden" name="_template" value="table"></input>
        {/* formsubmit.co */}
        {/* Hidden values */}
        <input
          type="hidden"
          name="total"
          value={`USD $${tourForm.price} - Payable to your guide on the morning of your tour.`}
        />
        {/* Hidden values */}
        <div className={styles.priceContainer}>
          <p>Total: </p>
          <p id="price" name="price">
            {`USD $${tourForm.price}`}
          </p>
        </div>
        <p className={styles.notice}>
          *To be paid to your guide on the morning of the tour.
        </p>
        <button type="submit" className={`btn primary-btn ${styles.formBtn}`}>
          Book Tour
        </button>
      </form>
    </div>
  );
}
