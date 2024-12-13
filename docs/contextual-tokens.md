
# Contextual Tokens

```markdown
# Contextual & Component Sizes in Sass

## Overview
This guide covers the use of specific tokens for managing layout and spacing in a design system. The approach organizes contextual and component-specific sizes into tokens, leveraging Sass features for efficiency and maintainability.

---

## Key Concepts

### 1. **Contextual Tokens**
- Used for defining layout-related values such as grid gaps, padding, and container widths.
- Tokens are linked to global variables wherever possible to ensure consistency across the system.

### 2. **Component-Specific Tokens**
- Focused on specific components (e.g., hero sections, cards, containers).
- Explicit naming ensures clear purpose and easier updates.

### 3. **File Organization**
- Tokens are stored in `_tokens.scss` within the `/abstracts` folder for modularity.
- Global tokens (`colors`, `typography`, `sizes`) are imported using `@use`.

---

## Example Token Definitions

### Layout Tokens
```scss
@use 'colors' as *;
@use 'typography' as *;
@use 'sizes' as *;

// Layout Tokens
$grid-gap: $size-6;
$flex-group-gap: $size-4;

$hero-padding-block: clamp(15rem, 15vh, 20rem);
$section-padding-block: clamp(3rem, 10vh, 7rem);

$card-body-padding: clamp($size-8, 3.5vw, $size-12);

$container-min-margin-inline: $size-4;
$container-max-width: 60rem;
$container-max-width-narrow: 40rem;
$container-max-width-wide: 75rem;
```

---

## Updating Variable Names

- Variables are given explicit names to reduce ambiguity and clarify their purpose.
- Example updates:
  - `$hero-padding` → `$hero-padding-block`
  - `$section-padding` → `$section-padding-block`
  - `$container-inline-padding` → `$container-min-margin-inline`

---

## Applying Tokens in Components

### **Containers**

```scss
@use "../abstracts/" as *;

.container {
  --padding: #{$container-min-margin-inline} * 2;
  --max-width: #{$container-max-width};

  width: min(100% - var(--padding), var(--max-width));
  margin-inline: auto;
}

.container[data-type="narrow"] {
  --max-width: #{$container-max-width-narrow};
}

.container[data-type="wide"] {
  --max-width: #{$container-max-width-wide};
}

.container[data-type="full-bleed"] {
  --max-width: 100%;
}
```

### **Sections**

```scss
.section {
  padding-block: $section-padding-block;
}
```

---

## Best Practices

### **Using Global Tokens**

- Link contextual and component-specific tokens to global ones where possible for consistency.
- Example:

  ```scss
  $hero-padding: clamp(#{$size-15} * 1.5, 15vh, #{$size-15} * 2);
  ```

### **Explicit Naming**

- Use descriptive variable names to ensure clarity.
- Example:
  - `$hero-padding-block` (instead of `$hero-padding`)
  - `$container-min-margin-inline` (instead of `$container-inline-padding`)

---

## Notes

- **Unused Variables**: Unused variables like `$hero-padding-block` can remain in the file for future use without affecting compilation.
- **Customization**: Tailor variable names and values to your project's specific design system requirements.

---

## Final Thoughts

This approach ensures a scalable, maintainable design system by organizing tokens, linking them to global variables, and applying them with clear, explicit naming conventions. Experiment with these methods to fit your workflow and enhance your project structure.

```

