Here’s the updated **README.md** file that includes the new **Showcase Page** and other updates:

---

# Gatsby Theme UI Starter

This project is a **Gatsby starter** configured with **Theme UI** to showcase customizable color modes, reusable components, and styled UI elements. It includes a **Showcase Page** to demonstrate how to utilize the theme's specifications, making it an excellent starting point for projects that prioritize consistent design systems.

---

## Features

- **Multi-Mode Color Themes**:
  - Light, Dark, Purple, Pink, and Forest modes.
  - Easily switch themes using a dropdown menu.
- **Theme UI Integration**:
  - Consistent styling across pages with Theme UI.
  - Extendable `theme` configuration for typography, colors, buttons, and more.
- **Component-Driven Architecture**:
  - Reusable components like `Layout` and `ColorModeToggle` for scalability.
- **Showcase Page**:
  - Demonstrates how to use typography, colors, buttons, forms, and tables defined in the theme.
- **Testing Suite**:
  - Jest and Testing Library setup to ensure component functionality.

---

## Project Structure

```
gatsby-theme-ui-starter/
├── .gitignore
├── .eslintrc.js
├── babel.config.js
├── gatsby-config.js
├── jest.config.js
├── package.json
├── src/
│   ├── components/
│   │   ├── ColorModeToggle.js
│   │   ├── Layout.js
│   │   └── __tests__/
│   │       └── Layout.test.js
│   ├── gatsby-plugin-theme-ui/
│   │   └── index.js
│   ├── pages/
│   │   ├── about.js
│   │   ├── index.js
│   │   └── showcase.js
│   ├── styles/
│   │   ├── global.css
│   │   └── utils.css
│   └── utils/
│       ├── colorMode.js
│       └── helpers.js
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

## Usage

### Adding New Color Modes

1. Open `src/gatsby-plugin-theme-ui/index.js`.
2. Add new modes under `colors.modes`:

   ```javascript
   modes: {
     newMode: {
       text: '#111',
       background: '#eee',
       primary: '#123456',
       secondary: '#654321',
     },
   },
   ```

3. Update the `modes` array in `ColorModeToggle.js` to include the new mode:

   ```javascript
   const modes = ['light', 'dark', 'purple', 'pink', 'forest', 'newMode'];
   ```

---

## Showcase Page

The **Showcase Page** demonstrates how to use various theme specifications, including:

1. **Typography**:
   - Examples of headings, body text, and bold text.
2. **Buttons**:
   - Primary and secondary buttons styled using Theme UI.
3. **Forms**:
   - Inputs, select dropdowns, and textareas with `forms` styling.
4. **Colors**:
   - Color blocks to visualize `primary`, `secondary`, `muted`, etc.
5. **Tables**:
   - Tables styled with `styles.th` and `styles.td`.

### Access the Showcase Page

Visit `http://localhost:8000/showcase` to explore the examples.

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
  - Customizable via `theme.buttons.primary`.

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

---

## Acknowledgments

- [Gatsby](https://www.gatsbyjs.com/)
- [Theme UI](https://theme-ui.com/)
- [Testing Library](https://testing-library.com/)

---

Feel free to modify this README further to fit your project’s specific needs! Let me know if there’s anything else you’d like to include.
