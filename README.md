Below is a more polished and cohesive `README.md` that incorporates your existing content, highlights the purpose of the project, and emphasizes mid-senior-level best practices. Feel free to tweak it further based on your specific needs or preferences.

---

# Gatsby Theme UI Template Starter 2025 Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ae06a33-c307-45b0-87ff-c6753251fc5b/deploy-status)](https://app.netlify.com/sites/gatsby-ui-theme/deploys)

![Lighthouse Score](./src/images/lighthouse-score.png)

## Overview

This project serves as a comprehensive **design system interface** built with **Gatsby**, **Theme UI**, and **MDX**. It is designed to streamline the creation of scalable, modern, and visually appealing web interfaces—particularly useful for mid-senior-level developers seeking insights into best practices and advanced implementation strategies.

By leveraging **Theme UI**’s robust API, we enable customizable and responsive UI components while ensuring seamless integration through Gatsby’s plugin ecosystem. This approach yields:

- **High performance** via Gatsby's optimizations
- **Visual consistency** through modular Theme UI configurations
- **Maintainable architecture** that scales for larger teams and projects

Ultimately, this template provides a foundation for building design systems that are both **efficient** and **stylish**, aligning with current best practices in modern web development.

---

## Features

- **Multi-Mode Color Themes**  
  Supports Light, Dark, Purple, and Forest modes. Toggle between modes through a handy dropdown menu.

- **Theme UI Integration**  
  A modular theme structure with dedicated files for colors, typography, spacing, variants, and more—making future updates and expansions effortless.

- **Syntax Highlighting**  
  Powered by **Theme UI** and **@theme-ui/prism**. Easily customize syntax highlighting or use ready-made presets like Night Owl or Dracula.

- **Component-Driven Architecture**  
  Includes reusable components (e.g., `Layout`, `ColorModeToggle`) to ensure consistency and scalability in your projects.

- **Showcase Page**  
  Demonstrates usage of typography, buttons, forms, tables, and color variants—all defined in the theme.

- **Testing Suite**  
  Integrated with **Jest** and **Testing Library** to safeguard component integrity and functionality.

---

## Folder Structure

Below is a high-level look at the project’s folder organization:

```plaintext
gatsby-theme-ui-template/
├── gatsby-config.js               # Configuration for Gatsby plugins
├── gatsby-node.js                 # Handles dynamic page creation
├── src/
│   ├── pages/                     # Site pages
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
├── ...
```

---

## Getting Started

### Prerequisites

- **[Node.js](https://nodejs.org/)** (>= 14.x)  
- **[Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)** (optional)

### Installation

1. **Clone the Repository**  

   ```bash
   git clone https://github.com/your-username/gatsby-theme-ui-starter.git
   cd gatsby-theme-ui-starter
   ```

2. **Install Dependencies**  

   ```bash
   npm install
   ```

3. **Run the Development Server**  

   ```bash
   gatsby develop
   ```

4. **Open the Project**  
   Navigate to **[http://localhost:8000](http://localhost:8000)** to see your site in action.

---

## Modular Theme Structure

Our theme is broken down into independent files, each focusing on a specific aspect:

1. **`colors.js`** – Defines color palettes and modes (Light, Dark, Purple, etc.).  
2. **`typography.js`** – Configures fonts, sizes, weights, line heights.  
3. **`space.js`** – Defines spacing scales for margins and paddings.  
4. **`radii.js`** – Sets border radius styles (e.g., `default`, `circle`).  
5. **`buttons.js`** – Defines button styles and variants (e.g., `primary`, `secondary`).  
6. **`forms.js`** – Styles inputs, selects, and textareas.  
7. **`text.js`** – Text variants for headings and displays.  
8. **`variants.js`** – Generic component variants (e.g., `cards`, `badges`).  
9. **`styles.js`** – Global styles for roots, headings, links, and more.  
10. **`index.js`** – Combines everything into a single exportable theme object.

---

### Adding New Variants

To create a new button variant:

1. Open **`src/gatsby-plugin-theme-ui/buttons.js`**.  
2. Define your variant, for example:

   ```js
   const buttons = {
     primary: { /* ... */ },
     secondary: { /* ... */ },
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

3. Use the variant in your JSX:

   ```jsx
   <button sx={{ variant: "buttons.tertiary" }}>
     Tertiary Button
   </button>
   ```

---

## Showcase Page

Explore the **Showcase Page** at **[http://localhost:8000/showcase](http://localhost:8000/showcase)** to view live examples of:

- Typography  
- Buttons  
- Forms  
- Colors  
- Tables  

---

## Testing

This project integrates **Jest** and **Testing Library** to verify the reliability of components. To run tests:

```bash
npm test
```

You can find an example test file in:

```
src/components/__tests__/Layout.test.js
```

---

## Example Usage

Below are a few key files you might customize:

- **`src/pages/posts.jsx`** – Main blog listing page  
- **`src/templates/post.jsx`** – Single post template  
- **`src/posts/mdx-with-theme-ui.mdx`** – Example MDX file demonstrating how to use Theme UI in posts

### Customization

- **`Layout.js`**  
  Wraps all pages with consistent header, footer, and global styling.

- **`ColorModeToggle.js`**  
  A dropdown for switching between Light, Dark, Purple, and Forest modes.

- **Global Styles**  
  Located in `src/styles/global.css`, including resets and custom fonts.

- **Utility Classes**  
  Found in `src/styles/utils.css` for quick margin, padding, and text alignment helpers.

---

## Contributing

1. **Fork** the repository  
2. **Create** a new branch: `git checkout -b feature/new-feature`  
3. **Commit** your changes: `git commit -m 'Add new feature'`  
4. **Push** to the branch: `git push origin feature/new-feature`  
5. **Open** a pull request

---

## License

This project is licensed under the [MIT License](LICENSE).  
**Created by Gilberto Alejandro Haro**

---

## Acknowledgments

- [Gatsby](https://www.gatsbyjs.com/)  
- [Theme UI](https://theme-ui.com/)  
- [Testing Library](https://testing-library.com/)

---

## NEXT STEPS

# 📖 Storybook Setup Guide

## 🚀 Introduction

This guide outlines how to integrate **Storybook** into your **Gatsby + Theme UI** project, providing a structured approach to documenting and showcasing UI components, design tokens, and styling principles.

## 📁 Recommended Folder Structure

```
my-gatsby-theme-ui-project/
├── .storybook/
│   ├── main.js         # Storybook entry configuration
│   ├── preview.js      # Global decorators, parameters, theming
│   └── manager.js      # (optional) Custom Storybook UI
│
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.stories.jsx
│   │   ├── ColorModeToggle/
│   │   │   ├── ColorModeToggle.jsx
│   │   │   └── ColorModeToggle.stories.jsx
│   │   ├── layout/
│   │   │   └── FlexLayout.jsx
│   │   ├── ui/
│   │   │   └── InvertedBanner.js
│   │   └── ...
│   │
│   └── stories/
│       ├── Intro.stories.mdx         # Project introduction
│       ├── Colors.stories.mdx        # Showcases brand colors & modes
│       ├── Typography.stories.mdx    # Demonstrates text styles
│       └── Tokens.stories.mdx        # Displays spacing, radii, etc.
│
├── src/gatsby-plugin-theme-ui/
│   ├── index.js         # Main theme export
│   ├── colors.js
│   ├── typography.js
│   ├── variants.js
│   └── ...
│
├── package.json
└── ...
```

## 🔧 Step-by-Step Setup

### 1️⃣ Install and Initialize Storybook

```sh
npx sb init
# Or with Yarn:
yarn dlx sb init
```

### 2️⃣ Configure `.storybook/main.js`

```js
module.exports = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
}
```

### 3️⃣ Configure `.storybook/preview.js`

```js
import React from "react"
import { ThemeUIProvider } from "theme-ui"
import theme from "../src/gatsby-plugin-theme-ui"

export const decorators = [
  (Story) => (
    <ThemeUIProvider theme={theme}>
      <Story />
    </ThemeUIProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
}
```

### 4️⃣ Add Foundational Stories

#### 🟣 `Colors.stories.mdx`

```mdx
# 🎨 Colors & Modes

```jsx
import { Box, Text, useColorMode } from 'theme-ui';

export const ColorSwatches = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box>
      <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>Toggle Mode</button>
      <Box sx={{ display: 'grid', gridGap: 3 }}>
        {Object.entries(theme.colors).map(([name, value]) => (
          typeof value === 'string' && (
            <Box key={name} sx={{ bg: value, p: 3 }}>
              <Text sx={{ color: 'background' }}>{name}</Text>
            </Box>
          )
        ))}
      </Box>
    </Box>
  );
};
```

#### 🔤 `Typography.stories.mdx`

```mdx
# 🔡 Typography

```jsx
import { Box, Text } from 'theme-ui';

export const TypographyShowcase = () => (
  <Box>
    <h1>Heading H1</h1>
    <h2>Heading H2</h2>
    <Text sx={{ variant: 'paragraph' }}>This is a paragraph.</Text>
  </Box>
);
```

#### 🎛️ `Tokens.stories.mdx`

```mdx
# 🏗️ Design Tokens

```jsx
import { Box, Text } from 'theme-ui';

export const Spacing = () => (
  <Box>
    {theme.space.map((val, i) => (
      <Box key={i}>
        <Text>Space {i}: {val}px</Text>
        <Box sx={{ height: val, bg: 'muted' }} />
      </Box>
    ))}
  </Box>
);
```

### 5️⃣ Add Component Stories

#### 🛑 `Button.stories.jsx`

```js
import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  children: "Primary Button",
}
```

### 6️⃣ Run Storybook

```sh
npm run storybook
# or
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) to view your Storybook.

## 📌 Additional Enhancements

- **MDX vs. JSX:** Use `.mdx` for documentation-like stories, `.stories.jsx` for prop-driven demos.
- **Add-Ons:** Consider `storybook-addon-performance` for optimization.
- **Theming:** Customize `.storybook/manager.js` for brand alignment.
- **Deployment:** Run `npm run build-storybook` to generate a static build for Netlify/GitHub Pages.

---

### 🎉 Recap

✅ Initialize Storybook with `sb init`  
✅ Configure `.storybook` settings for Gatsby + Theme UI  
✅ Create foundational stories (`Colors`, `Typography`, `Tokens`)  
✅ Add component-specific stories (`Button`, `Toggle`, etc.)  
✅ Run `npm run storybook` and enjoy your UI documentation!

---
