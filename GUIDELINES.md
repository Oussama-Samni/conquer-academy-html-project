# SCSS Boilerplate Guidelines

## How it's organized

```
abstracts/   → variables, mixins, functions, placeholders (no CSS output)
base/        → reset, typography, animations (global defaults)
layout/      → header, footer, navbar, container, grid, forms
components/  → buttons, hero, cards... (reusable UI pieces)
themes/      → CSS custom properties applied to :root
```

---

## What to customize per project

### 1. `_variables.scss` — always start here
Change these to match the project's design:
- `$color-primary`, `$color-secondary`, `$color-text`, `$color-heading`
- `$font-primary` (+ add the Google Fonts link in `index.html`)
- Keep spacing, shadows, radius, z-index as-is unless the design requires it

### 2. `_typography.scss` — font sizes
The h1–h6 scale is generic. Adjust sizes if the design has specific heading rules.

### 3. `_reset.scss` — don't touch
This is universal. Leave it as-is on every project.

---

## How to use mixins

```scss
// Responsive breakpoint
@include a.respond-to(tablet) { ... }   // mobile | tablet | desktop | wide

// Flexbox shortcuts
@include a.flex-center;       // center both axes
@include a.flex-between;      // space-between
@include a.absolute-center;   // centered with position absolute

// Utility
@include a.truncate;          // cut text with ...
@include a.button-base;       // base styles for any button
```

## How to use placeholders

```scss
@extend %flex-center;
@extend %list-reset;    // removes bullets, padding, margin
@extend %link-reset;    // removes underline and color from <a>
@extend %card;          // white box with shadow and radius
@extend %visually-hidden; // hides visually but keeps it for screen readers
```

## How to use functions

```scss
font-size: a.rem(24px);   // converts px → rem
padding: a.space(md);     // pulls value from spacing scale
```

---

## Adding a new component

1. Create `sass/components/_yourcomponent.scss`
2. Add `@forward "yourcomponent"` in `sass/components/_components.scss`
3. Use `@use '../abstracts/abstracts' as a;` at the top to access variables/mixins

---

## One rule

> **Never hardcode values.** Always pull from `_variables.scss`.
> Bad: `color: #264065` — Good: `color: a.$color-secondary`
