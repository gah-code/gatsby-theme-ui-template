# Gatsby Theme UI Template Starter 2025 Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ae06a33-c307-45b0-87ff-c6753251fc5b/deploy-status)](https://app.netlify.com/sites/gatsby-ui-theme/deploys)

![Lighthouse Score](./src/images/lighthouse-score.png)

## About

This project is a **Gatsby starter** configured with **Theme UI** to showcase customizable color modes, reusable components, styled UI elements, and syntax highlighting. It includes a modular theme structure with reusable configurations for colors, typography, spacing, and more.

## Features

- **Multi-Mode Color Themes**:
  - Supports Light, Dark, Purple, and Forest modes.
  - Easily switch themes using a dropdown menu.
- **Theme UI Integration**:
  - Modular theme structure with dedicated files for colors, typography, and component variants.
  - Easily extendable for future needs.
- **Syntax Highlighting**:
  - Powered by **Theme UI** and **@theme-ui/prism**.
  - Customize syntax themes or use provided presets like Night Owl, Dracula, and more.
- **Component-Driven Architecture**:
  - Reusable components like `Layout` and `ColorModeToggle` for scalability.
- **Showcase Page**:
  - Demonstrates how to use typography, colors, buttons, forms, and tables defined in the theme.
- **Testing Suite**:
  - Jest and Testing Library setup to ensure component functionality.

---

## Project Folder Structure

The following is the folder structure of the project:

```plaintext
gatsby-theme-ui-template/
├── gatsby-config.js               # Configuration for Gatsby plugins
├── gatsby-node.js                 # Handles dynamic page creation
├── src/
│   ├── pages/                     # Pages for the website
│   │   ├── index.jsx              # Homepage
│   │   ├── posts.jsx              # Post listing page
│   │   ├── about.jsx              # About page
│   │   ├── showcase.jsx           # Theme showcase page
│   │   ├── 404.js                 # Custom 404 page
│   │   ├── GridVariantsPage.jsx   # Grid layout examples
│   │   ├── TypographyDemoPage.jsx # Typography showcase
│   │   └── posts/                 # MDX blog posts
│   │       ├── my-first-post.mdx
│   │       ├── mdx-with-theme-ui.mdx
│   │       ├── dynamic-heading-components.mdx
│   │       ├── welcome-to-colorful-posts.mdx
│   │       └── enhancing-dynamic-pages-with-seo-metadata-in-gatsby.mdx
│
│   ├── templates/                 # Page templates
│   │   ├── using-dsg.js           # Deferred Static Generation example
│   │   ├── post.jsx               # Single post template
│   │   └── posts-page.jsx         # Post listing template
│
│   ├── components/                # Reusable components
│   │   ├── header.jsx             # Main header component
│   │   ├── ColorModeToggle.jsx    # Theme color mode toggle
│   │   ├── variants.jsx           # Variant examples
│   │   ├── ResponsiveTwoColumnGrid.jsx # Responsive grid layout
│   │   ├── BreakpointShowcase.jsx # Debug breakpoints visually
│   │   ├── seo.jsx                # SEO metadata component
│   │   ├── demos/                 # Demo components
│   │   │   └── demoOne.jsx
│   │   ├── __tests__/             # Jest tests
│   │   │   └── Layout.test.js
│   │   ├── layout/                # Layout components
│   │   │   ├── Layout.jsx
│   │   │   ├── FlexLayout.jsx
│   │   │   └── GlobalStyles.jsx
│   │   ├── util/                  # Utility components
│   │   │   ├── CodeBlock.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── Paragraph.jsx
│   │   │   ├── SectionBlock.jsx
│   │   │   ├── Heading.js
│   │   │   └── Section.jsx
│   │   ├── ui/                    # UI-specific components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Main.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── hero/
│   │   │       └── InvertedBanner.js
│
│   ├── gatsby-plugin-theme-ui/    # Theme UI configuration
│   │   ├── radii.js               # Border radii
│   │   ├── typography.js          # Typography settings
│   │   ├── colors.js              # Color palette
│   │   ├── space.js               # Spacing scale
│   │   ├── forms.js               # Form styles
│   │   ├── syntax.js              # Syntax highlighting
│   │   ├── styles.js              # Global styles
│   │   ├── messages.js            # Message styles
│   │   ├── text.js                # Text variants
│   │   ├── buttons.js             # Button variants
│   │   ├── variants.js            # Component variants
│   │   └── index.js               # Main theme export
│
│   ├── styles/                    # Global CSS styles
│   │   ├── global.css
│   │   └── utils.css
│
│   ├── images/                    # Image assets
│   │   ├── lighthouse-score.png
│   │   ├── gatsby-icon.png
│   │   └── example.png
│
│   ├── utils/                     # Utility scripts
│   │   └── colorMode.js
│
│   ├── hooks/                     # Custom React hooks
│   │   └── use-site-metadata.jsx

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

--

### Example File Contents

#### **`src/pages/posts.jsx`**

The main blog listing page.

#### **`src/templates/post.jsx`**

Renders individual blog posts.

#### **Example Post (`src/posts/mdx-with-theme-ui.mdx`)**

```mdx
---
title: "MDX with Theme UI"
excerpt: "Learn how to use MDX with Theme UI to create a customizable and powerful blogging experience."
date: "2024-11-21"
slug: "mdx-with-theme-ui"
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



---


----



