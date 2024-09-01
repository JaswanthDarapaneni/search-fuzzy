import { defineConfig } from "tsup";
const { DESCRIPTION, AUTHOR, HOMEPAGE } = {
  DESCRIPTION: "Fuzzy search for Angular",
  AUTHOR: {
    name: "Jaswanth Darapaneni",
    url: "https://github.com/jaswanthdarapaneni",
  },
  HOMEPAGE: "",
};

const banner = `/**
 * search-fuzzy.js v 1.1.0 - ${DESCRIPTION} (${HOMEPAGE})
 *
 * Copyright (c) ${new Date().getFullYear()} ${AUTHOR.name} (${AUTHOR.url})
 * All Rights Reserved. Apache Software License 2.0
 *
 * git: https://github.com/JaswanthDarapaneni/search-fuzzy.git
 */\n`;

export default defineConfig({
  format: ["cjs", "esm"],
  banner: {
    js: `/* eslint-disable */
    ${banner}`,
  },
  entry: ["./src/fuzzy.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  outDir: "./dist",
});
