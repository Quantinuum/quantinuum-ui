import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import preserveDirectives from "rollup-plugin-preserve-directives";


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
  output: [
    {
      dir: "dist/",
      format: "esm",
      preserveModules: true,
      sourcemap: true,
    },
  ],
  external: [/node_modules/],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declarationDir: "./dist/types",
    }),
    copy({
      targets: [{ src: "./src/tokens.css", dest: "./dist" }],
    }),
    terser({ compress: { directives: false } }),
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
    terser(),
  ],

},
// Generate small tailwind class manifest for more efficient compiling by consumers.
{
  onwarn,
  input: "src/index.ts",
  output: [
    {
      file: "dist/tailwind-manifest.js",
      format: "esm",
      preserveModules: false,
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      declaration: false,
      tsconfig: "./tsconfig.json",
    }),
    preserveDirectives(),
  ],

}];
