import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";
import path from 'path';
import copy from "rollup-plugin-copy";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import preserveDirectives from "rollup-plugin-preserve-directives";

function onwarn(warning, warn) {
  // Rollup doesn’t recognize 'use client' or other Next.js directives, which can cause errors. Many libraries, including Radix UI and Shadcn UI, distribute ESM modules that include these directives.

  if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && /use client/.test(warning.message)) {
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
  external: (id) => {
    // Don't mark entry points or relative/absolute source paths as external
    if (id.startsWith('.') || id.startsWith('/') || id.includes('src/')) {
      return false;
    }

    // Don't mark "src" alias as external
    if (id === 'src') {
      return false;
    }
    // Mark all other bare module names (like 'react', 'tslib') as external
    return true;
  },
  plugins: [
    resolve({
      alias: {
        'src': path.resolve('./src')
      }
    }),
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
  onwarn,
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
