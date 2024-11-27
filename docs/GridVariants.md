### Grid Variants Showcase Documentation

This document outlines the implementation and usage of grid variants in a responsive layout using **Theme UI**. The grid system supports dynamic content embedding and adjusts for different breakpoints.

---

## **Overview**

The grid variants allow for flexible layouts using pre-defined styles for:

- Two-column grids
- Three-column grids
- Four-column grids
- Six-column grids

Each variant is responsive, ensuring optimal display across devices, and supports embedding custom content.

---

## **Grid Variants**

### **Variants Definition**

Add the following `variants` to your Theme UI configuration (`variants.js`):

```javascript
const variants = {
  grid: {
    default: {
      display: "grid",
      gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"],
      gap: 3,
      p: 2,
    },
    twoColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
      gap: 3,
      p: 3,
    },
    threeColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"],
      gap: 4,
      p: 3,
    },
    fourColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"],
      gap: 4,
      p: 4,
    },
    sixColumn: {
      display: "grid",
      gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(6, 1fr)"],
      gap: 5,
      p: 4,
    },
  },
};

export default variants;
```

---

## **Grid Variants Page**

The `GridVariantsPage` demonstrates all the grid variants with dynamic content embedding.

### **Code Implementation**

```javascript
/** @jsxImportSource theme-ui */
import { Grid, Box, Heading, Text, Image, Button } from "theme-ui";

const GridVariantsPage = () => {
  const twoColumnContent = [
    { title: "Item 1", description: "This is a description for item 1." },
    { title: "Item 2", description: "This is a description for item 2." },
  ];

  const threeColumnContent = [
    { title: "Item 1", image: "https://via.placeholder.com/150" },
    { title: "Item 2", image: "https://via.placeholder.com/150" },
    { title: "Item 3", image: "https://via.placeholder.com/150" },
  ];

  const fourColumnContent = [
    { icon: "⭐", label: "Feature 1" },
    { icon: "🔥", label: "Feature 2" },
    { icon: "🚀", label: "Feature 3" },
    { icon: "⚡", label: "Feature 4" },
  ];

  const sixColumnContent = ["A", "B", "C", "D", "E", "F"];

  return (
    <div
      sx={{
        maxWidth: "container",
        mx: "auto",
        px: [3, 4],
        py: 4,
      }}
    >
      <Heading as="h1" sx={{ mb: 4 }}>
        Grid Variants Showcase
      </Heading>

      {/* Two-Column Grid */}
      <Heading as="h2" sx={{ mb: 3 }}>
        Two-Column Grid
      </Heading>
      <Grid sx={{ variant: "grid.twoColumn" }}>
        {twoColumnContent.map((item, i) => (
          <Box
            key={i}
            sx={{
              bg: "muted",
              p: 3,
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Heading as="h3" sx={{ fontSize: 3, color: "primary", mb: 2 }}>
              {item.title}
            </Heading>
            <Text>{item.description}</Text>
          </Box>
        ))}
      </Grid>

      {/* Three-Column Grid */}
      <Heading as="h2" sx={{ mt: 5, mb: 3 }}>
        Three-Column Grid
      </Heading>
      <Grid sx={{ variant: "grid.threeColumn" }}>
        {threeColumnContent.map((item, i) => (
          <Box
            key={i}
            sx={{
              bg: "muted",
              p: 3,
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              sx={{ width: "100%", height: "auto", mb: 3 }}
            />
            <Heading as="h3" sx={{ fontSize: 3, color: "primary" }}>
              {item.title}
            </Heading>
          </Box>
        ))}
      </Grid>

      {/* Four-Column Grid */}
      <Heading as="h2" sx={{ mt: 5, mb: 3 }}>
        Four-Column Grid
      </Heading>
      <Grid sx={{ variant: "grid.fourColumn" }}>
        {fourColumnContent.map((item, i) => (
          <Box
            key={i}
            sx={{
              bg: "muted",
              p: 3,
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <Text sx={{ fontSize: 5 }}>{item.icon}</Text>
            <Text>{item.label}</Text>
          </Box>
        ))}
      </Grid>

      {/* Six-Column Grid */}
      <Heading as="h2" sx={{ mt: 5, mb: 3 }}>
        Six-Column Grid
      </Heading>
      <Grid sx={{ variant: "grid.sixColumn" }}>
        {sixColumnContent.map((item, i) => (
          <Box
            key={i}
            sx={{
              bg: "muted",
              p: 3,
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <Text sx={{ fontSize: 4 }}>{item}</Text>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default GridVariantsPage;
```

---

## **Breakpoints**

### **Responsive Behavior**

| **Variant**       | **Columns on Mobile** | **Columns on Tablet** | **Columns on Desktop** |
|--------------------|-----------------------|-----------------------|------------------------|
| `grid.twoColumn`   | 1                    | 1                     | 2                      |
| `grid.threeColumn` | 1                    | 2                     | 3                      |
| `grid.fourColumn`  | 1                    | 2                     | 4                      |
| `grid.sixColumn`   | 1                    | 2                     | 3 (laptops), 6 (desktops) |

---

## **Usage Guide**

### **Importing the Page**

1. Save the code as `GridVariantsPage.jsx`.
2. Add it to your routing system or link directly in your navigation.

For Gatsby, update `gatsby-node.js` or use the `src/pages` directory:

```javascript
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/grid-variants",
    component: require.resolve("./src/pages/GridVariantsPage.jsx"),
  });
};
```

---

### **Expected Result**

- **Two-Column Grid**: Simple text-based content.
- **Three-Column Grid**: Image with title.
- **Four-Column Grid**: Icon-based features.
- **Six-Column Grid**: Compact grid for smaller content.

---

This setup demonstrates flexibility, reusability, and responsive design principles in **Theme UI**. 🚀
