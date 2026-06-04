import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  /node_modules/,
];

function onwarn(warning, warn) {
    if (
      warning.code === "MODULE_LEVEL_DIRECTIVE" &&
      warning.message.includes(`'use client'`)
    ) {
      return;
    }
    warn(warning);
}

export default [{
  onwarn,
  input: "src/index.ts",
  external,
  output: [
    {
      dir: "dist/",
      format: "esm",
      preserveModules: true,
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      declarationDir: "./dist/types",
    }),
    copy({
      targets: [{ src: "./src/tokens.css", dest: "./dist" }],
    }),
    preserveDirectives(),
  ],
}, {
  input: "src/utils/syncTheme.ts",
  output: [
    {
      dir: "dist/src/utils/",
      format: "iife",
      name: "syncTheme",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      outDir: "dist/src/utils/",
      declaration: false,
    }),
  ],
},
// Generate small tailwind class manifest for more efficient compiling by consumers.
{
  onwarn,
  input: "src/index.ts",
  external,
  output: [
    {
      file: "dist/tailwind-manifest.js",
      format: "esm",
      preserveModules: false,
      sourcemap: false,
    },
  ],
  plugins: [
    typescript({
      declaration: false,
      tsconfig: "./tsconfig.json",
    }),
    preserveDirectives(),
  ],
}];
