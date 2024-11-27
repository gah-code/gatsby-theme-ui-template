/** @jsxImportSource theme-ui */
import { Global, css } from "@emotion/react"
import theme from "../../gatsby-plugin-theme-ui"

const GlobalStyles = () => (
  <Global
    styles={css`
      /* Global Reset */
      :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font: inherit;
      }

      html {
        line-height: 1.5;
        scroll-behavior: smooth;
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        height: 100%;
        font-family: ${theme.fonts.body};
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
      }

      img,
      picture,
      svg {
        display: block;
        max-width: 100%;
      }

      button,
      input,
      textarea,
      select {
        font-family: inherit;
        font-size: 100%;
        margin: 0;
      }

      /* Custom Global Styles */
      button {
        cursor: pointer;
        background: ${theme.colors.primary};
        color: white;
        border-radius: 4px;
        border: none;
        padding: 8px 12px;
      }

      a {
        color: ${theme.colors.primary};
        text-decoration: none;

        &:hover {
          color: ${theme.colors.secondary};
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${theme.fonts.heading};
        margin-bottom: 16px;
        text-rendering: optimizeLegibility;
      }

      p {
        line-height: 1.5;
        margin: 0 0 16px;
      }

      ul {
        margin-top: 0;
      }

      table {
        border-collapse: collapse;
      }

      pre {
        overflow-x: auto;
        padding: ${theme.space[3]}px;
        background-color: ${theme.colors.muted};
        border-radius: ${theme.radii.default || "4px"};
      }

      .active {
        border-bottom: 2px solid #ff4081; /* Secondary color */
      }
    `}
  />
)

export default GlobalStyles
