import { createGlobalStyle } from "styled-components";
import sparks from "../assets/spark.svg";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: var(--clr-primary-light);
    background-color: var(--clr-primary-dark);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  :root {
      /* Font Sizes */

      --fs-h1: 2.375rem; //38px
      --fs-h2: 1.5rem; // 24px
      --fs-h3: 1.25rem;
      --fs-h4: 1.25rem;
      --fs-body: 1rem; //16px
      --fs-btn: 1.125rem;

      @media (min-width: 720px) {
        :root {
          --fs-h1: 3.625rem; // 58px 
          --fs-h2: 2rem; // 32px
          --fs-body: 1.125rem; //18px
          --fs-btn: 1.25rem;
        } 
      }

      @media (min-width: 1220px) {
        :root {
          --fs-h2: 2.25rem; // 36px
          --fs-body: 1.125rem; //18px
          --fs-btn: 1.5rem;
        } 

      @media (min-width: 1440px) {
        :root {
          --fs-h1: 6.125rem; // 98px 
        } 
      }
    }

      /* Font Weights */

      --fw-light: 300;
      --fw-normal: 400;
      --fw-medium: 500;
      --fw-semi: 600;
      --fw-bold: 700;
      --fw-extra: 800;
      --fw-black: 900;

      /* Colors */
      --clr-primary-dark: #141617;
      --clr-primary-light: #fff;
      --clr-accent: #F28E34;

      /* Gradient */
      --gradient: linear-gradient(95.98deg, #F28E34 0%, #BD6414 97.67%);
    }

    img {
      max-width: 100%;
    }

    /* Typgraphy */

    h1 {
      position: relative;
      font-size: var(--fs-h1);
      font-weight: var(--fw-black);
      line-height: 1.1;
      text-transform: uppercase;
      text-align: left;
    }

    h2 {
      font-size: var(--fs-h2);
      font-weight: var(--fw-medium);
    }

    h3,
    h4 {
      font-size: var(--fs-h3);
      font-weight: var(--fw-semi);
    }

    p {
      font-size: var(--fs-body);
      line-height: 1.8;
      font-weight: var(--fw-light);
      color: #ffffff99
    }

    ul {
      padding: 0;
    }

    li {
      list-style-type: none;
    }

    a {
      text-decoration: none;
    }

    .title-highlight {
      color: var(--clr-accent);
    }

    /* Button */

  .btn {
    padding: 0.4em 1em;
    border-radius: 4px;
    height: fit-content;
    cursor: pointer;
  }

  .btn:hover {
    background: var(--clr-primary-light);
    color: var(--clr-primary-dark);
  }

  .primary-btn {
    position: relative;
    color: var(--clr-primary-light);
    background-image: var(--gradient);
    font-size: var(--fs-btn);
    font-weight: var(--fw-semi);
    box-shadow: 8px 8px 13px rgba(0, 0, 0, 0.2);
  }

  .primary-btn::after {
    content: "";
      position: absolute;
      background-image: url(${sparks});
      top: -1.25em;
      right: -1.75em;
      width: 30px;
      aspect-ratio: 1;
      background-size: contain;
      background-repeat: no-repeat;
      clip-path: circle(0% at 0% 100%);
      transition: 150ms ease-out;
      opacity: 0;
  }

  .primary-btn:hover::after {
    clip-path: circle(100% at 50% 50%);
      opacity: 1;
  }

  @media (min-width: 980px) {
    .primary-btn:hover::after {
        width: 40px;
      } 
    }

    /* Swiper */
    .swiper-pagination {
    bottom: -1em;
    position: unset;
    margin-top: 2em;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: var(--clr-accent);
    transform: scale(1.5);
  }

  .swiper-pagination-bullet {
    background-color: var(--clr-primary-light);
    transition: 250ms;
  }

`;
