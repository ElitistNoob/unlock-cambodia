import { useState } from "react";
import styles from "./styles/bookingForm.module.scss";

export default function BookingForm({ thisTour }) {
  const [tourForm, setTourForm] = useState({
    tour: `${thisTour.title}`,
    pax: "1",
    first: "",
    last: "",
    date: "",
    hotel: "",
    price: 35,
  });

  const minDate = new Date().toLocaleDateString("en-ca");
  const totalPrice = tourForm.pax * thisTour.price;

  const onChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    console.log(tourForm);
    name === "pax"
      ? setTourForm(prevData => ({
          ...prevData,
          [name]: value,
          price: totalPrice,
        }))
      : setTourForm(prevData => ({
          ...prevData,
          [name]: value,
        }));
  };

  return (
    <form>
      <p>
        <span>From</span>${thisTour.price}
        <span> Per Person</span>
      </p>
      <div>
        <label htmlFor="pax">No. of Pax</label>
        <input
          onChange={onChange}
          id="pax"
          name="pax"
          value={tourForm.pax}
          type="number"
          // min="1"
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
      <div className={styles.priceContainer}>
        <p>Total: </p>
        <p id="price" name="price">
          {`USD $${tourForm.price}`}
        </p>
      </div>
      <p className={styles.notice}>
        *To be paid to your guide on the morning of the tour.
      </p>
      <button className={`btn primary-btn ${styles.formBtn}`}>Book Tour</button>
    </form>
  );
}
