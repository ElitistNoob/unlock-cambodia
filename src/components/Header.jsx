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
// Pages
import { Link } from "react-router-dom";
import { Context } from "./Context/winWidth";
// Gsap
import { gsap } from "gsap";
import { Sling as Hamburger } from "hamburger-react";

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
  const toggleMenu = () => {
    document.querySelector(".hamburger").style.transform =
      "translateX(50%) rotate(45deg)";
    window.getComputedStyle(
      document.querySelector(".hamburger"),
      "::before"
    ).style.transform = "rotate(90deg) translate(30%)";
    window.getComputedStyle(
      document.querySelector(".hamburger"),
      "::after"
    ).style.opacity = 0;
    setIsOpen(prevState => !prevState);
  };

  const changeNavBar = () =>
    window.scrollY >= 70 ? setIsScroll(true) : setIsScroll(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBar);
    return () => window.removeEventListener("scroll", changeNavBar);
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
      if (isOpen) {
        return {
          backgroundColor: "#141617",
        };
      }
      return {
        backgroundColor: "transparent",
      };
    } else {
      return {
        backgroundColor: "#141617",
      };
    }
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
        <Link to="/">
          <img
            className="logo"
            style={{ marginLeft: winWidth >= 1230 ? "0" : "1em" }}
            src={logoWhite}
            alt="logo"
          />
        </Link>
        <nav
          className="nav"
          style={{ transform: `translateY(${isOpen ? 80 : -200}px)` }}
        >
          <ul className="nav-menu">
            <li onClick={() => setIsOpen(false)}>
              <Link
                onMouseEnter={() =>
                  setIsHovered(prev => ({ ...prev, home: true }))
                }
                onMouseLeave={() =>
                  setIsHovered(prev => ({ ...prev, home: false }))
                }
                className="nav-link"
                to="/"
                id="home"
              >
                Home
                {isHovered.home && winWidth > 720 ? selectionSvg() : " "}
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
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
              >
                Tours
                {isHovered.tours && winWidth > 720 ? selectionSvg() : " "}
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
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
              >
                About Us
                {winWidth > 720 && isHovered.about ? selectionSvg() : " "}
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
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
              >
                Contact Us
                {isHovered.contact && winWidth > 720 ? selectionSvg() : " "}
              </Link>
            </li>
          </ul>
        </nav>

        <button className="toggle" onClick={toggleMenu}>
          <Hamburger size={32} color="white" rounded />
        </button>
      </ContainerStyled>
      {isScroll && !isOpen && (
        <div className="pageScrollBar" style={{ width: scrollBarWidth }}></div>
      )}
    </HeaderStyled>
  );
}
