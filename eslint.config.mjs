import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
const jsxA11y = import('eslint-plugin-jsx-a11y');

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    plugins: { js, 'jsx-a11y': jsxA11y, }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: {...globals.browser, ...globals.node} } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
