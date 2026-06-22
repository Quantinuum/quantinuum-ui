const config = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  staticDirs: ["../dist"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  previewBody: (body: any) => `
    ${body}
    ${`<script
        src="syncTheme.js"
        type="application/javascript"
      ></script>`
    }
  `,
};
export default config;
