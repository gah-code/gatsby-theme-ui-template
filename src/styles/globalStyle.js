import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  text-wrap: balance;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after { 
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}



body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 1.128rem;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        line-height: 1.7;
        font-weight: 400;
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
        outline: 0;
        } 
    }

    .btn,
    .btn:link,
    .btn:visited {
      font-size: 2rem;
      padding: 1.6rem 3.2rem;
      border-radius: 25px;
      text-decoration: none;
      display: inline-block;
      font-weight: 600;
      cursor: pointer;
      border: none;

      /* Put Transition on parent state */
      transition: all 0.3s;
    }
    
`

export default GlobalStyle
