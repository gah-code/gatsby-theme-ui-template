# My Gatsby Theme UI Starter

This project is a **Gatsby starter** configured with **Theme UI** to showcase customizable color modes, reusable components, and styled UI elements. It includes a modular theme structure with reusable configurations for colors, typography, spacing, and more.

---

## Features

- **Multi-Mode Color Themes**:
  - Supports Light, Dark, Purple, Pink, and Forest modes.
  - Easily switch themes using a dropdown menu.
- **Theme UI Integration**:
  - Modular theme structure with dedicated files for colors, typography, and component variants.
  - Easily extendable for future needs.
- **Component-Driven Architecture**:
  - Reusable components like `Layout` and `ColorModeToggle` for scalability.
- **Showcase Page**:
  - Demonstrates how to use typography, colors, buttons, forms, and tables defined in the theme.
- **Testing Suite**:
  - Jest and Testing Library setup to ensure component functionality.

---

## Folder Structure

```plaintext
gatsby-theme-ui-starter/
├── .gitignore
├── .eslintrc.js
├── babel.config.js
├── gatsby-config.js
├── jest.config.js
├── package.json
├── src/
│   ├── components/
│   │   ├── ColorModeToggle.js  # Handles color mode switching
│   │   ├── Layout.js           # Wraps pages with consistent layout
│   │   └── __tests__/          # Jest tests for components
│   │       └── Layout.test.js
│   ├── gatsby-plugin-theme-ui/
│   │   ├── colors.js           # Colors and color modes
│   │   ├── typography.js       # Fonts, font sizes, weights, and line heights
│   │   ├── space.js            # Spacing (margins, paddings)
│   │   ├── radii.js            # Border radius styles
│   │   ├── buttons.js          # Button styles and variants
│   │   ├── forms.js            # Form styles (inputs, selects, etc.)
│   │   ├── text.js             # Text variants
│   │   ├── variants.js         # All component variants
│   │   ├── styles.js           # Global styles (root, headings, links, etc.)
│   │   └── index.js            # Combines all theme files into a single export
│   ├── pages/
│   │   ├── about.js            # About page
│   │   ├── index.js            # Home page
│   │   └── showcase.js         # Theme showcase page
│   ├── styles/
│   │   ├── global.css          # Global CSS resets and overrides
│   │   └── utils.css           # Utility classes for quick styling
│   └── utils/
│       ├── colorMode.js        # Utility functions for color mode management
│       └── helpers.js          # Helper functions for various tasks
└── README.md
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) (optional)

---

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/gatsby-theme-ui-starter.git
   cd gatsby-theme-ui-starter
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   gatsby develop
   ```

4. **Open in Your Browser**:

   Visit `http://localhost:8000` to see the project in action.

---

## Modular Theme Structure

The theme is broken into smaller, reusable files for maintainability and scalability.

### Theme Files

1. **`colors.js`**:
   - Defines color palettes and modes (e.g., Light, Dark, Purple).
2. **`typography.js`**:
   - Configures fonts, font sizes, weights, and line heights.
3. **`space.js`**:
   - Defines spacing scales for margins and paddings.
4. **`radii.js`**:
   - Sets border radius styles (e.g., `default`, `circle`).
5. **`buttons.js`**:
   - Defines button styles and variants (`primary`, `secondary`).
6. **`forms.js`**:
   - Configures input, select, and textarea styles.
7. **`text.js`**:
   - Includes text variants for headings and displays.
8. **`variants.js`**:
   - Contains reusable component variants (e.g., `cards`, `badges`).
9. **`styles.js`**:
   - Global styles for the root, headings, links, and more.
10. **`index.js`**:
    - Combines all theme files and exports the final theme object.

---

### Adding New Variants

To add a new button variant:

1. Open `src/gatsby-plugin-theme-ui/buttons.js`.
2. Add a new variant:

   ```javascript
   const buttons = {
     primary: {
       fontWeight: "bold",
       color: "background",
       bg: "primary",
       "&:hover": {
         bg: "secondary",
       },
     },
     secondary: {
       fontWeight: "bold",
       color: "background",
       bg: "secondary",
       "&:hover": {
         bg: "primary",
       },
     },
     tertiary: {
       fontWeight: "medium",
       color: "text",
       bg: "muted",
       "&:hover": {
         bg: "highlight",
       },
     },
   };

   export default buttons;
   ```

3. Use the variant in your component:

   ```jsx
   <button sx={{ variant: "buttons.tertiary" }}>Tertiary Button</button>
   ```

---

## Showcase Page

The **Showcase Page** demonstrates how to use the modular theme configuration.

### Access the Showcase Page

Visit `http://localhost:8000/showcase` to explore the examples, including:

- Typography
- Buttons
- Forms
- Colors
- Tables

---

## Testing

This project uses Jest and Testing Library for testing.

Run tests:

```bash
npm test
```

Example test file: `src/components/__tests__/Layout.test.js`

---

## Customization

### Components

- **`Layout.js`**:
  - Wraps all pages to provide a consistent header and styling.
  - Includes the `ColorModeToggle` for theme switching.

- **`ColorModeToggle.js`**:
  - Dropdown menu for selecting color modes.
  - Customizable via `theme.buttons`.

### Styles

- **Global Styles**:
  - Located in `src/styles/global.css`.
  - Includes resets and custom font imports.
- **Utility Classes**:
  - Located in `src/styles/utils.css`.
  - Predefined classes for margins, paddings, and text alignment.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
Created by Gilberto Alejandro Haro

---

## Acknowledgments

- [Gatsby](https://www.gatsbyjs.com/)
- [Theme UI](https://theme-ui.com/)
- [Testing Library](https://testing-library.com/)

---
