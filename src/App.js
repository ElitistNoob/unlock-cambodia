//  Hooks
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/Unlock-Cambodia" element={<Home />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
