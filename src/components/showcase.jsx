// /** @jsxImportSource theme-ui */
// import React from "react"

// const Showcase = () => {
//   return (
//     <div
//       sx={{
//         fontFamily: "body",
//         lineHeight: "body",
//         fontWeight: "body",
//         p: 4,
//         bg: "background",
//         color: "text",
//       }}
//     >
//       <h1 sx={{ variant: "text.display", color: "primary", mb: 3 }}>
//         Theme UI Showcase
//       </h1>

//       <h2 sx={{ variant: "text.heading", color: "secondary" }}>Typography</h2>
//       <p>
//         This is a body text example styled with <code>fontFamily</code> and{" "}
//         <code>lineHeight</code> from the theme.
//       </p>
//       <p sx={{ fontWeight: "bold", mt: 3 }}>Bold text example</p>

//       <h3 sx={{ mt: 4, color: "accent" }}>Headings</h3>
//       <h1 sx={{ variant: "text.heading", color: "primary" }}>H1 Heading</h1>
//       <h2 sx={{ variant: "text.heading", color: "secondary" }}>H2 Heading</h2>
//       <h3 sx={{ variant: "text.heading", color: "gray" }}>H3 Heading</h3>

//       <hr sx={{ my: 4 }} />

//       <h2 sx={{ variant: "text.heading", color: "primary" }}>Buttons</h2>
//       <button sx={{ variant: "buttons.primary", mb: 3 }}>Primary Button</button>
//       <button sx={{ variant: "buttons.secondary" }}>Secondary Button</button>

//       <hr sx={{ my: 4 }} />

//       <h2 sx={{ variant: "text.heading", color: "secondary" }}>Forms</h2>
//       <form sx={{ mt: 3 }}>
//         <div sx={{ mb: 3 }}>
//           <label htmlFor="input" sx={{ display: "block", mb: 1 }}>
//             Text Input:
//           </label>
//           <input id="input" type="text" sx={{ variant: "forms.input" }} />
//         </div>
//         <div sx={{ mb: 3 }}>
//           <label htmlFor="select" sx={{ display: "block", mb: 1 }}>
//             Select Dropdown:
//           </label>
//           <select id="select" sx={{ variant: "forms.select" }}>
//             <option>Option 1</option>
//             <option>Option 2</option>
//             <option>Option 3</option>
//           </select>
//         </div>
//         <div sx={{ mb: 3 }}>
//           <label htmlFor="textarea" sx={{ display: "block", mb: 1 }}>
//             Textarea:
//           </label>
//           <textarea id="textarea" rows="3" sx={{ variant: "forms.textarea" }} />
//         </div>
//       </form>

//       <hr sx={{ my: 4 }} />

//       <h2 sx={{ variant: "text.heading", color: "primary" }}>Colors</h2>
//       <div
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
//           gap: 3,
//         }}
//       >
//         <div sx={{ bg: "primary", p: 3, color: "background", borderRadius: 4 }}>
//           Primary
//         </div>
//         <div
//           sx={{ bg: "secondary", p: 3, color: "background", borderRadius: 4 }}
//         >
//           Secondary
//         </div>
//         <div sx={{ bg: "muted", p: 3, borderRadius: 4 }}>Muted</div>
//         <div sx={{ bg: "highlight", p: 3, borderRadius: 4 }}>Highlight</div>
//         <div sx={{ bg: "accent", p: 3, color: "background", borderRadius: 4 }}>
//           Accent
//         </div>
//       </div>

//       <hr sx={{ my: 4 }} />

//       <h2 sx={{ variant: "text.heading", color: "secondary" }}>Tables</h2>
//       <table sx={{ width: "100%", mt: 3 }}>
//         <thead>
//           <tr>
//             <th sx={{ variant: "styles.th" }}>Header 1</th>
//             <th sx={{ variant: "styles.th" }}>Header 2</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td sx={{ variant: "styles.td" }}>Data 1</td>
//             <td sx={{ variant: "styles.td" }}>Data 2</td>
//           </tr>
//           <tr>
//             <td sx={{ variant: "styles.td" }}>Data 3</td>
//             <td sx={{ variant: "styles.td" }}>Data 4</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Showcase

/** @jsxImportSource theme-ui */
import React from "react"

const TypographyShowcase = () => (
  <section>
    <h2 sx={{ variant: "text.heading", color: "secondary" }}>Typography</h2>
    <p>
      This is a body text example styled with <code>fontFamily</code> and{" "}
      <code>lineHeight</code> from the theme.
    </p>
    <p sx={{ fontWeight: "bold", mt: 3 }}>Bold text example</p>

    <h3 sx={{ mt: 4, color: "accent" }}>Headings</h3>
    <h1 sx={{ variant: "text.heading", color: "primary" }}>H1 Heading</h1>
    <h2 sx={{ variant: "text.heading", color: "secondary" }}>H2 Heading</h2>
    <h3 sx={{ variant: "text.heading", color: "gray" }}>H3 Heading</h3>
  </section>
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
