# @quantinuum/quantinuum-ui
Quantinuum UI is a React component library and design token system built with [shadcn](https://ui.shadcn.com/), Radix UI and Tailwind CSS v4.

It is used internally at Quantinuum for building web applications with a consistent look and feel.

You can have a look at the [storybook](https://quantinuum.github.io/quantinuum-ui/) to see the available components and design tokens.

# Commands
Clone repository
```bash
git clone git@github.com:Quantinuum/quantinuum-ui.git
```

Install dependencies and run storybook web server locally
```bash
npm i
npm run storybook # Run storybook application to view components.
```

Build storybook and UI library.
```bash
npm run build-storybook # Build storybook application as static HTML.
npm run build # Build component library with rollup.
```

# Design Tokens
CSS variables are declared in `src/tokens.css`. Dark mode is enabled when adding the attribute `data-theme="dark"` higher up in the tree.

# Tailwind v4
Local development and Storybook load Tailwind through `.storybook/styles.css`, which imports Tailwind v4 and explicitly loads the shared config with `@config`.

If you consume `tailwindTheme` from this package in another Tailwind v4 app, load your config from CSS as well:

```css
@import "tailwindcss";
@config "./tailwind.config.ts";
```
