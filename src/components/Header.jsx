// Hooks
import {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";
// Styles
import { HeaderStyled } from "./styles/Header.Styled";
import { ContainerStyled } from "./styles/Container.Styled";
// Assets
import logoWhite from "./assets/logo-light.png";
import logoBlack from "./assets/logo-dark.png";
// Pages
import { Link } from "react-router-dom";
import { Context } from "./Context/winWidth";
// Gsap
import { gsap } from "gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const [isHovered, setIsHovered] = useState({
    home: false,
    tours: false,
    about: false,
    contact: false,
  });

  const { winWidth } = useContext(Context);

  // Changes NavBar on scroll
  const toggleMenu = () => setIsOpen(prevState => !prevState);

  const changeNavBar = () =>
    window.scrollY >= 70 ? setIsScroll(true) : setIsScroll(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBar);
  }, []);

  //  Scroll Progress Bar
  useEffect(() => {
    window.addEventListener("scroll", progressBar);
  }, []);

  const progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const winHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${(scrollTotal / winHeight) * 100}%`;
    setScrollBarWidth(scroll);
  };

  // Inline Styles
  const headerStyle = () => {
    if (!isScroll) {
      return {
        backgroundColor: "transparent",
      };
    } else {
      return {
        backgroundColor: "#fff",
      };
    }
  };

  const scrollStyle = (value1, value2) => {
    if (isOpen || !isScroll) {
      return value1;
    } else {
      return value2;
    }
  };

  const logoMargin = () => {
    return { marginLeft: winWidth >= 1230 ? "0" : "1em" };
  };

  const element = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".container", {
        y: 0,
        duration: 1,
      });
      return () => ctx.revert();
    }, [element]);
  });

  const selectionSvg = () => {
    return (
      <svg
        className="path-container"
        viewBox="0 0 340 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          d="M325.755 30.584C267.422 5.58399 123.055 -24.116 12.2554 57.084C1.75543 74.584 -5.34457 112.584 50.2554 124.584C119.755 139.584 270.255 152.584 330.255 86.584C337.255 78.4173 342.155 58.584 305.755 44.584C269.355 30.584 229.255 24.4173 213.755 23.084"
          stroke="#F28E34"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <HeaderStyled ref={element} isOpen={isOpen} style={headerStyle()}>
      <ContainerStyled className="container">
        <img
          className="logo"
          style={logoMargin()}
          src={scrollStyle(logoWhite, logoBlack)}
          alt="logo"
        />
        <nav
          className="nav"
          style={{ transform: `translateX(${isOpen ? 0 : -100}%)` }}
        >
          <ul className="nav-menu">
            <li onClick={toggleMenu}>
              <Link
                onMouseEnter={() =>
                  setIsHovered(prev => ({ ...prev, home: true }))
                }
                onMouseLeave={() =>
                  setIsHovered(prev => ({ ...prev, home: false }))
                }
                className="nav-link"
                to="/Unlock-Cambodia"
                id="home"
                style={{
                  color: scrollStyle(
                    "var(--clr-primary-light)",
                    "var(--clr-primary-dark)"
                  ),
                }}
              >
                Home
                {isHovered.home && winWidth > 720 ? selectionSvg() : " "}
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                onMouseEnter={() =>
                  setIsHovered(prev => ({ ...prev, tours: true }))
                }
                onMouseLeave={() =>
                  setIsHovered(prev => ({ ...prev, tours: false }))
                }
                id="tours"
                className="nav-link"
                to="/tours"
                style={{
                  color: scrollStyle(
                    "var(--clr-primary-light)",
                    "var(--clr-primary-dark)"
                  ),
                }}
              >
                Tours
                {isHovered.tours && winWidth > 720 ? selectionSvg() : " "}
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                onMouseEnter={() =>
                  setIsHovered(prev => ({ ...prev, about: true }))
                }
                onMouseLeave={() =>
                  setIsHovered(prev => ({ ...prev, about: false }))
                }
                id="about"
                className="nav-link"
                to="/about-us"
                style={{
                  color: scrollStyle(
                    "var(--clr-primary-light)",
                    "var(--clr-primary-dark)"
                  ),
                }}
              >
                About Us
                {winWidth > 720 && isHovered.about ? selectionSvg() : " "}
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                onMouseEnter={() =>
                  setIsHovered(prev => ({ ...prev, contact: true }))
                }
                onMouseLeave={() =>
                  setIsHovered(prev => ({ ...prev, contact: false }))
                }
                id="contact"
                className="nav-link"
                to="/contact-us"
                style={{
                  color: scrollStyle(
                    "var(--clr-primary-light)",
                    "var(--clr-primary-dark)"
                  ),
                }}
              >
                Contact Us
                {isHovered.contact && winWidth > 720 ? selectionSvg() : " "}
              </Link>
            </li>
          </ul>
        </nav>

        <button className="toggle" onClick={toggleMenu}>
          <span
            className="hamburger"
            style={{
              backgroundColor: scrollStyle(
                "var(--clr-primary-light)",
                "var(--clr-primary-dark)"
              ),
            }}
          ></span>
        </button>
      </ContainerStyled>
      {isScroll && !isOpen && (
        <div className="pageScrollBar" style={{ width: scrollBarWidth }}></div>
      )}
    </HeaderStyled>
  );
}