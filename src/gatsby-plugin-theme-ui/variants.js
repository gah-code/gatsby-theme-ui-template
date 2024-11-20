/** @jsxImportSource theme-ui */

const VariantsShowcase = () => {
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
      <h1 sx={{ variant: "text.heading", color: "primary", mb: 4 }}>
        Component Variants Showcase
      </h1>

      {/* Buttons */}
      <section sx={{ mb: 5 }}>
        <h2 sx={{ variant: "text.heading", mb: 3 }}>Buttons</h2>
        <button sx={{ variant: "buttons.primary" }}>Primary Button</button>
        <button sx={{ variant: "buttons.secondary", ml: 3 }}>
          Secondary Button
        </button>
        <button sx={{ variant: "buttons.close", ml: 3 }}>Close Button</button>
      </section>

      {/* Cards */}
      <section sx={{ mb: 5 }}>
        <h2 sx={{ variant: "text.heading", mb: 3 }}>Cards</h2>
        <div sx={{ variant: "cards.primary" }}>
          <p>This is a primary card with default styling.</p>
        </div>
        <div sx={{ variant: "cards.accent", mt: 3 }}>
          <p>This is an accent card with a secondary background.</p>
        </div>
      </section>

      {/* Text Variants */}
      <section sx={{ mb: 5 }}>
        <h2 sx={{ variant: "text.heading", mb: 3 }}>Text</h2>
        <p sx={{ variant: "text.caps" }}>
          This text is uppercase with letter spacing.
        </p>
        <p sx={{ variant: "text.heading", mt: 3 }}>
          This text uses the heading variant.
        </p>
      </section>

      {/* Boxes */}
      <section sx={{ mb: 5 }}>
        <h2 sx={{ variant: "text.heading", mb: 3 }}>Boxes</h2>
        <div sx={{ variant: "boxes.shout" }}>
          This box stands out with bold text.
        </div>
      </section>

      {/* Badges */}
      <section sx={{ mb: 5 }}>
        <h2 sx={{ variant: "text.heading", mb: 3 }}>Badges</h2>
        <span sx={{ variant: "badges.primary" }}>Primary Badge</span>
        <span sx={{ variant: "badges.accent", ml: 3 }}>Accent Badge</span>
      </section>
    </div>
  )
}

export default VariantsShowcase
