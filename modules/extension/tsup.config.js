import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "../web/src/extension/lib.ts",
  },
  outDir: "../web/dist/lib",
  tsconfig: "../web/tsconfig.app.json",
  inject: ["./tsup.shim.js"],
  sourcemap: false,
  minify: true,
  format: "cjs",
  dts: {
    compilerOptions: {
      composite: false,
      tsBuildInfoFile: null,
    },
  },
});
