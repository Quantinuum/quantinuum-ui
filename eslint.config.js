// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [{
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: "./tsconfig.json",
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
  plugins: {
    import: fixupPluginRules(importPlugin),
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
      node: true,
    },
  },
  rules: {
    "import/no-cycle": ["error", { maxDepth: Infinity }],
  },
}, ...storybook.configs["flat/recommended"]];
