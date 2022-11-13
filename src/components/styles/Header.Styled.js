import styled from "styled-components";
import selection from "../assets/selection.svg";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0;
  }

  @media (min-width: 720px) {
    .container {
      padding: 1em 2rem;
      transform: translateY(-100%);
    }
  }

  @media (min-width: 1440px) {
    .container {
      padding: 1em 0;
    }
  }

  .nav-scroll {
    background-color: #fff;
    width: 100vw;
  }

  .logo {
    max-width: 170px;
    height: auto;
    z-index: 100;
  }

  .nav {
    position: fixed;
    top: 0;
    backdrop-filter: blur(62px);
    -webkit-backdrop-filter: blur(62px);
    background: linear-gradient(
      180deg,
      var(--clr-primary-dark) 50px,
      #14161799 50px
    );
    min-height: 100vh;
    width: 100%;
    transition: 150ms linear;
  }

  @media (min-width: 720px) {
    .nav {
      position: unset;
      min-height: unset;
      backdrop-filter: unset;
      -webkit-backdrop-filter: unset;
      background: unset;
      width: unset;
      align-items: center;
      transform: translateX(
        0
      ) !important; // TEMP: Need to change with window.innerWidth
    }
  }

  .nav-menu {
    text-align: left;
    padding: 0 1em;
    margin-top: 8em;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  }

  .nav-menu:first-child {
    border-top: 1px solid rgba(255 255 255 / 0.2);
  }

  @media (min-width: 720px) {
    .nav-menu {
      display: flex;
      gap: 2.25em;
      margin: 0;
      box-shadow: unset;
    }

    .nav-menu:first-child {
      border-top: unset;
    }
  }

  @media (min-width: 1230px) {
    .nav-menu {
      padding: 0;
    }
  }

  .nav-link {
    position: relative;
    display: block;
    font-size: 1.25rem;
    padding: 1em;
    margin-left: -1em;
    width: calc(100% + 1.75em);
    border-bottom: 1px solid rgba(255 255 255 / 0.2);
    background-color: rgba(255 255 255 / 0.1);
  }

  @media (min-width: 720px) {
    .nav-link {
      width: unset;
      margin-left: unset;
      padding: unset;
      border-bottom: unset;
      background-color: unset;
      overflow: visible;
      padding: 0.5em;
    }
  }

  .path-container {
    position: absolute;
    top: 50%;
    bottom: 0;
    right: 0;
    left: 0;
    transform: translateY(-50%);
  }

  .path {
    background-image: url(${selection});
    background-size: cover;
    z-index: 1;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: trace 0.5s ease-in-out forwards;

    @keyframes trace {
      0% {
        stroke-dashoffset: 868;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
  }

  /* Mobile Toggle */

  .toggle {
    position: relative;
    width: 50px;
    aspect-ratio: 1;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  @media (min-width: 720px) {
    .toggle {
      display: none;
    }
  }

  .hamburger {
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: ${props =>
      props.isOpen ? "translateX(50%) rotate(45deg)" : "translateX(50%)"};
    width: 32px;
    height: 4px;
    border-radius: 50px;
    transition: 150ms linear;
  }

  .hamburger::before,
  .hamburger::after {
    content: "";
    position: absolute;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: inherit;
    border-radius: inherit;
  }

  .hamburger::before {
    top: -10px;
    transform: ${props =>
      props.isOpen ? " rotate(90deg) translate(30%)" : ""};
  }

  .hamburger::after {
    top: 10px;
    opacity: ${props => (props.isOpen ? 0 : "")};
  }

  .pageScrollBar {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    background: var(--gradient);
    border-radius: 0 50px 50px 0;
  }
`;
