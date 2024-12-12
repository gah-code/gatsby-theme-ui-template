/** @jsxImportSource theme-ui */
// import { Grid } from "../components/Grid"
// import theme from "../gatsby-plugin-theme-ui"
// import { Grid, Box } from "theme-ui"

// const Grid = {
//   grids: {
//     default: {
//       display: "grid",
//       gap: 3,
//       gridTemplateColumns: "repeat(2, 1fr)",
//     },
//     responsive: {
//       display: "grid",
//       gap: [2, 3],
//       gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"],
//     },
//   },
// }

import { Box } from "theme-ui"
import Heading from "./util/Heading"
// import theme from "../gatsby-plugin-theme-ui"

const TypographyShowcase = () => (
  <Box>
    <section>
      <Heading as="h1">Dynamic H1</Heading>
      <Heading as="h2">Dynamic H2</Heading>
      <Heading as="h3">Dynamic H3</Heading>
      <Heading as="h4">Dynamic H4</Heading>
      <Heading as="h5">Dynamic H5</Heading>

      <p>
        This is a body text example styled with <code>fontFamily</code> and{" "}
        <code>lineHeight</code> from the theme.
      </p>
      <p sx={{ fontWeight: "bold", mt: 3 }}>Bold text example</p>
    </section>{" "}
  </Box>
)

const ButtonsShowcase = () => (
  <section>
    <h2 sx={{ variant: "text.heading", color: "primary" }}>Buttons</h2>
    <button sx={{ variant: "buttons.primary", mb: 3 }}>Primary Button</button>
    <button sx={{ variant: "buttons.secondary" }}>Secondary Button</button>
  </section>
)

const FormsShowcase = () => (
  <section>
    <h2 sx={{ variant: "text.heading", color: "secondary" }}>Forms</h2>
    <form sx={{ mt: 3 }}>
      <div sx={{ mb: 3 }}>
        <label htmlFor="input" sx={{ display: "block", mb: 1 }}>
          Text Input:
        </label>
        <input id="input" type="text" sx={{ variant: "forms.input" }} />
      </div>
      <div sx={{ mb: 3 }}>
        <label htmlFor="select" sx={{ display: "block", mb: 1 }}>
          Select Dropdown:
        </label>
        <select id="select" sx={{ variant: "forms.select" }}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
      <div sx={{ mb: 3 }}>
        <label htmlFor="textarea" sx={{ display: "block", mb: 1 }}>
          Textarea:
        </label>
        <textarea id="textarea" rows="3" sx={{ variant: "forms.textarea" }} />
      </div>
    </form>
  </section>
)

const ColorsShowcase = () => (
  <section>
    <h2 sx={{ variant: "text.heading", color: "primary" }}>Colors</h2>
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        gap: 3,
      }}
    >
      {[
        { label: "Primary", color: "primary" },
        { label: "Secondary", color: "secondary" },
        { label: "Muted", color: "muted" },
        { label: "Highlight", color: "highlight" },
        { label: "Accent", color: "accent" },
      ].map(({ label, color }) => (
        <div
          key={color}
          sx={{
            bg: color,
            p: 3,
            color: color === "muted" ? "text" : "background",
            borderRadius: "4px",
          }}
        >
          {label}
        </div>
      ))}
    </div>
  </section>
)

const TablesShowcase = () => (
  <section>
    <h2 sx={{ variant: "text.heading", color: "secondary" }}>Tables</h2>
    <table sx={{ width: "100%", mt: 3 }}>
      <thead>
        <tr>
          <th sx={{ variant: "styles.th" }}>Header 1</th>
          <th sx={{ variant: "styles.th" }}>Header 2</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Data 1", "Data 2"],
          ["Data 3", "Data 4"],
        ].map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} sx={{ variant: "styles.td" }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)

const Showcase = () => {
  return (
    <div
      sx={{
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "body",
        p: 4,
        bg: "background",
        color: "text",
      }}
    >
      <h1 sx={{ variant: "text.display", color: "primary", mb: 3 }}>
        Theme UI Showcase
      </h1>
      <TypographyShowcase />
      <hr sx={{ my: 4 }} />
      <ButtonsShowcase />
      <hr sx={{ my: 4 }} />
      <FormsShowcase />
      <hr sx={{ my: 4 }} />
      <ColorsShowcase />
      <hr sx={{ my: 4 }} />
      <TablesShowcase />
    </div>
  )
}

export default Showcase
