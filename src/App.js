//  Hooks
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
import TourDetails from "./Pages/TourDetails";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import FormSubmit from "./Pages/FormSubmit";

function App() {
  return (
    <>
      <Helmet>
        <title>Unlock Cambodia</title>
        <meta
          name="Short Tours in Cambodia"
          content="Travel to Cambodia in style"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="icon" href="/public/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/tours/:tourTitle" element={<TourDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/form-submit" element={<FormSubmit />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
